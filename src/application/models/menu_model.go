package models

import (
	"strconv"

	"github.com/xiusin/pinecms/src/application/models/tables"
	"github.com/xiusin/pinecms/src/common/helper"
	"xorm.io/xorm"
)

type MenuModel struct {
	orm *xorm.Engine
}

func NewMenuModel() *MenuModel {
	return &MenuModel{orm: helper.GetORM()}
}

func (m MenuModel) GetTree(menus []tables.Menu, parentid int64) []tables.Menu {
	res := []tables.Menu{}
	if len(menus) != 0 {
		for _, menu := range menus {
			if parentid == menu.Parentid {
				menu.Children = m.GetTree(menus, menu.Id)
				res = append(res, menu)
			}
		}
	}
	return res
}

func (m MenuModel) GetAll(menuIdList []int64) []tables.Menu {
	menus := []tables.Menu{}
	if len(menuIdList) > 0 {
		m.orm.Asc("listorder").In("id", menuIdList).Desc("id").Find(&menus)
	}
	return menus
}

// 获取菜单父级id
func (m MenuModel) GetParentIds(id int64, result string) string {
	menu := tables.Menu{Id: id}
	has, _ := m.orm.Get(&menu)
	var parentid int64 = 0
	if has {
		parentid = menu.Parentid
	}
	res := ""
	if parentid != 0 {
		if result == "" {
			res = strconv.Itoa(int(parentid))
		} else {
			res = "," + result
		}
		res = m.GetParentIds(parentid, res)
	}
	return res
}

// 检查菜单名称是否存在
func (m MenuModel) CheckName(name string) bool {
	has, _ := m.orm.Get(&tables.Menu{Name: name})
	return has
}

func (m MenuModel) GetInfo(id int64) (*tables.Menu, bool) {
	im := &tables.Menu{Id: id}
	has, _ := m.orm.Get(im)
	return im, has
}

// 获取selectTree
func (m MenuModel) GetSelectTree(menus []tables.Menu, parentid int64) []map[string]any {
	res := []map[string]any{}
	if len(menus) != 0 {
		for _, v := range menus {
			if parentid == v.Parentid {
				menu := map[string]any{
					"value":    v.Id,
					"label":    v.Name,
					"children": m.GetSelectTree(menus, v.Id),
				}
				res = append(res, menu)
			}
		}
	}
	return res
}
