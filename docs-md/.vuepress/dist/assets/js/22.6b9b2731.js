(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{712:function(t,e,a){"use strict";a.r(e);var s=a(92),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"频道标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#频道标签"}},[t._v("#")]),t._v(" 频道标签")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("作用")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于获取栏目列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("typeid: 要查询的分类ID"),a("br"),t._v("reid: 上级栏目ID"),a("br"),t._v(" row: 读取栏目数"),a("br"),t._v(" type: son表示下级栏目,self表示同级栏目,top顶级栏目 "),a("br"),t._v(" noself 是否排除当前栏目 (可选值为yes)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("嵌套")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可与 channelartlist 嵌套")])])])]),t._v(" "),a("h1",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ol",[a("li",[t._v("如果reid和typeid均设置有值, 那么reid会被修正为typeid的父ID")]),t._v(" "),a("li",[t._v("type=self时会只关注reid参数")]),t._v(" "),a("li",[t._v("type=top会直接读取父ID为0的栏目")]),t._v(" "),a("li",[t._v("type=son会读取直属子栏目"),a("code",[t._v("(如果没有子栏目会返回同级分类)")])]),t._v(" "),a("li",[t._v("在没有指定typeid的情况下，type标记与模板的环境有关，如: 模板生成到栏目一或者栏目一下的文章，那么"),a("code",[t._v("type='son'")]),t._v("就表示栏目一的所有子类.")]),t._v(" "),a("li",[t._v("typeid不支持传入多个")])]),t._v(" "),a("h1",{attrs:{id:"标签暴露变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签暴露变量"}},[t._v("#")]),t._v(" 标签暴露变量")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("变量")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("field")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一条分类信息")])])])]),t._v(" "),a("h1",{attrs:{id:"实例说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例说明"}},[t._v("#")]),t._v(" 实例说明")]),t._v(" "),a("h3",{attrs:{id:"读取分类3下的所有子分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取分类3下的所有子分类"}},[t._v("#")]),t._v(" 读取分类3下的所有子分类")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v('{{ yield channel(typeid=3, type="son") content}}\n   {{field.Url}} -- {{field.Catname}}\n{{end}}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"读取顶级栏目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取顶级栏目"}},[t._v("#")]),t._v(" 读取顶级栏目")]),t._v(" "),a("blockquote",[a("p",[t._v("设置为top, typeid的设置将失效. reid会被设置为0")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v('{{ yield channel(type="top") content}}\n   {{field.Url}} -- {{field.Catname}}\n{{end}}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"读取同级栏目-同父id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取同级栏目-同父id"}},[t._v("#")]),t._v(" 读取同级栏目(同父ID)")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v('{{ yield channel(type="self", typeid=3) content}}\n   {{field.Url}} -- {{field.Catname}}\n{{end}}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])}),[],!1,null,null,null);e.default=l.exports}}]);