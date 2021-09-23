package mywebsql

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/xiusin/pinecms/src/application/controllers/backend/mywebsql/common"
	"html/template"
	"strings"

	"github.com/xiusin/pine"
)

type IndexController struct {
	MyWebSql
	hasError string
}

func (c *IndexController) GetIndex() {
	if db := c.GetSQLX(); db == nil {
		c.clearAuthSession()

		if c.Ctx().GetString("q") == "wrkfrm" {
			c.Render().HTML("session_expired.php")
			return
		}

		form, _ := c.plush.Exec("auth.php", pine.H{
			"LOGINID":     "root",
			"SERVER_NAME": "",
			"SERVER_TYPE": "mysql",
		})
		formCode := `<div class="login"><form method="post" action="" name="dbform" id="dbform" style="text-align:center">` + string(form) + `</form></div>`
		if len(c.hasError) > 0 {
			c.ViewData("MESSAGE", template.HTML(`<div class="msg">`+c.hasError+`</div>`))
		} else {
			c.ViewData("MESSAGE", "")
		}
		c.ViewData("FORM", template.HTML(formCode))
		c.ViewData("APP_VERSION", "dev.0.0.1")
		c.ViewData("PROJECT_SITEURL", "http://mywebsql.xiusin.cn")
		c.ViewData("EXTRA_SCRIPT", template.JS(`<script language="javascript" type="text/javascript">$(function() {$.jCryption.defaultOptions.getKeysURL = '';$("#dbform").jCryption();});</script>`))
		c.ViewData("SCRIPTS", "jquery")

		c.Render().HTML("splash.php")
	} else {
		defer db.Close()

		if c.Ctx().PostValue("q") == "wrkfrm" {
			c.Ctx().SetContentType(pine.ContentTypeHTML)
			if err := db.Ping(); err != nil {
				c.Ctx().WriteString(err.Error())
			} else {
				c.Ctx().WriteString(common.ExecuteRequest(db, c.Ctx()))
			}
			return
		}

		dbname := c.Ctx().GetString("db")

		// 异步切换数据库
		if dbname != "" && dbname != c.Session().Get("db.name") {
			c.Session().Set("db.change", "1")
			c.Session().Set("db.name", dbname)
			if v, _ := c.Ctx().GetInt("x"); v == 1 {
				c.Ctx().Response.Header.SetContentType(pine.ContentTypeHTML)
				c.Ctx().WriteString(`<div id="results">1</div>`)
			} else {
				c.Ctx().Redirect("http://localhost:2019/mywebsql/index/index", 302)
			}
			return
		}

		c.ViewData("KEY_CODES", common.KEY_CODES)
		c.ViewData("MenuBarHTML", template.HTML(common.GetMenuBarHTML()))

		html, dblist, _ := common.PrintDbList(db, c.Session())

		dbname = c.Session().Get("db.name")

		treeHtml := common.GetDatabaseTreeHTML(db, dblist, dbname)
		auth := c.getAuthSession()

		c.ViewData("auth", auth)
		c.ViewData("version", c.Session().Get("db.version"))
		c.ViewData("version_full", c.Session().Get("db.version_full"))
		c.ViewData("version_comment", c.Session().Get("db.version_comment"))
		c.ViewData("dbListHtml", template.HTML(html))
		c.ViewData("treeHtml", template.HTML(treeHtml))
		c.ViewData("contextMenusHTML", template.HTML(common.GetContextMenusHTML()))
		c.ViewData("HotkeysHTML", template.HTML(common.GetHotkeysHTML()))
		c.ViewData("UpdateSqlEditor", template.HTML(common.UpdateSqlEditor()))

		c.ViewData("KEYCODE_SETNULL", strings.Replace(common.T("Press {{KEY}} to set NULL"), "{{KEY}}", common.KEY_CODES["KEYCODE_SETNULL"][1], 1))
		c.ViewData("LoginUser", strings.Replace(common.T("Logged in as: {{USER}}"), "{{USER}}", auth.User, 1))

		dialogs, _ := c.plush.Exec("dialogs.php", pine.H{})
		c.ViewData("dialogs", template.HTML(dialogs))

		c.Render().HTML("index.php")
	}

}

func (c *IndexController) PostIndex() {

	authUser := c.Ctx().PostValue("auth_user")
	authPwd := c.Ctx().PostValue("auth_pwd")
	server := c.Ctx().PostValue("server")

	if serve, ok := common.SERVER_LIST[server]; !ok {
		c.hasError = "登录服务器失败"
		c.GetIndex()
	} else {
		serve.User = authUser
		serve.Password = authPwd
		serve.ServerName = server
		db, err := sqlx.Open(serve.Driver, fmt.Sprintf("%s:%s@tcp(%s:%s)/?charset=utf8", serve.User, serve.Password, serve.Host, serve.Port))
		if err != nil {
			c.clearAuthSession()
			c.hasError = err.Error()
			c.GetIndex()
			return
		}
		if err := db.Ping(); err != nil {
			c.clearAuthSession()
			c.hasError = err.Error()
			c.GetIndex()
			return
		}
		db.Close()
		c.saveAuthSession(serve)
		c.Ctx().Redirect("http://localhost:2019/mywebsql/index/index", 302)
	}

}