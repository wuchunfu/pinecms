(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{707:function(v,_,a){"use strict";a.r(_);var s=a(92),e=Object(s.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"模型系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型系统"}},[v._v("#")]),v._v(" 模型系统")]),v._v(" "),a("p",[v._v("PineCMS支持其他CMS都支持的功能, 自定义模板构建.")]),v._v(" "),a("h2",{attrs:{id:"管理模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理模型"}},[v._v("#")]),v._v(" 管理模型")]),v._v(" "),a("p",[v._v("进入后端按照如下:  "),a("code",[v._v("系统设置 - 模型管理")]),v._v(", 打开模型列表页面.")]),v._v(" "),a("p",[v._v("在头部点击"),a("code",[v._v("添加模型")]),v._v("按钮, 出现自定义模型页面:")]),v._v(" "),a("ul",[a("li",[v._v("模型名称: 展示列表内的名称")]),v._v(" "),a("li",[v._v("模型Table: 建表时通过此项数据作为"),a("code",[v._v("表名")]),v._v(".")]),v._v(" "),a("li",[v._v("是否启用: 开启或关闭模型, 如果关闭, 前端页面所有相关的数据均会被阻止访问.")]),v._v(" "),a("li",[v._v("列表页面: 可以选择不同模型需要渲染的页面. 默认为: "),a("code",[v._v("list_{model}.jet")])]),v._v(" "),a("li",[v._v("详情页面: 可以选择不同该模型需要渲染的详情页面. 默认为: "),a("code",[v._v("article_{model}.jet")])])]),v._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),a("p",[v._v("您应在该所有主题下设置选择的页面名称. 否则在切换主题的时候会有些页面无法渲染.")])]),v._v(" "),a("h2",{attrs:{id:"默认字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认字段"}},[v._v("#")]),v._v(" 默认字段")]),v._v(" "),a("p",[v._v("系统默认了一些通用字段, 切不可删除. 但是可以修改字段表单名称, 或者也可以在发布页面隐藏.")]),v._v(" "),a("ul",[a("li",[v._v("标题: 发布文档标题")]),v._v(" "),a("li",[v._v("文档属性: 常规的文章flag, 如推荐, 热推等功能.")]),v._v(" "),a("li",[v._v("关键字")]),v._v(" "),a("li",[v._v("描述/摘要")]),v._v(" "),a("li",[v._v("Tag标签, 给文章打标签 目前不知道场景如何用.")]),v._v(" "),a("li",[v._v("排序: 给发布的内容排序, 从大到小的顺序")]),v._v(" "),a("li",[v._v("发布时间: 与"),a("code",[v._v("创建时间")]),v._v("和"),a("code",[v._v("发布时间")]),v._v("不同, 这个用于前端展示作用, "),a("strong",[v._v("非限制展示条件")])]),v._v(" "),a("li",[v._v("状态: 可以理解为"),a("code",[v._v("审核")]),v._v("和"),a("code",[v._v("未审核")])])]),v._v(" "),a("p",[v._v("可以点击下方"),a("code",[v._v("+")]),v._v("号添加字段, 根据需求选择不同定义.")]),v._v(" "),a("h2",{attrs:{id:"表单字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单字段"}},[v._v("#")]),v._v(" 表单字段")]),v._v(" "),a("p",[v._v("系统内置了多种字段类型. 数据可在"),a("code",[v._v("pinecms_document_model_field")]),v._v("内找到, 具体功能均有描述.")]),v._v(" "),a("div",{staticClass:"language-cgo line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("单行文本\n多行文本\nHTML文本\n附件\n下拉框\n联动类型\n单选框\n多选框\n整数类型\n浮点类型\n单图上传\n多图上传\n开关按钮\n日历组件\n多选标签\n文档属性\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br"),a("span",{staticClass:"line-number"},[v._v("4")]),a("br"),a("span",{staticClass:"line-number"},[v._v("5")]),a("br"),a("span",{staticClass:"line-number"},[v._v("6")]),a("br"),a("span",{staticClass:"line-number"},[v._v("7")]),a("br"),a("span",{staticClass:"line-number"},[v._v("8")]),a("br"),a("span",{staticClass:"line-number"},[v._v("9")]),a("br"),a("span",{staticClass:"line-number"},[v._v("10")]),a("br"),a("span",{staticClass:"line-number"},[v._v("11")]),a("br"),a("span",{staticClass:"line-number"},[v._v("12")]),a("br"),a("span",{staticClass:"line-number"},[v._v("13")]),a("br"),a("span",{staticClass:"line-number"},[v._v("14")]),a("br"),a("span",{staticClass:"line-number"},[v._v("15")]),a("br"),a("span",{staticClass:"line-number"},[v._v("16")]),a("br")])]),a("p",[v._v("需要说明的是关于默认值与数据源.")]),v._v(" "),a("h4",{attrs:{id:"数据源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据源"}},[v._v("#")]),v._v(" 数据源")]),v._v(" "),a("p",[v._v("组件"),a("code",[v._v("单选")]),v._v(","),a("code",[v._v("多选")]),v._v(", "),a("code",[v._v("联动")]),v._v(", "),a("code",[v._v("下拉")]),v._v("均可数据源, 比如需要设置一个字段的选项: "),a("code",[v._v('["张三", "李四"]')]),v._v(", 单选按钮就会生成对应的选项以"),a("code",[v._v("张三, 李四")]),v._v("展示, value也为该内容. 也支持"),a("code",[v._v("json")]),v._v("格式或"),a("code",[v._v("api")]),v._v("的数据调用.\n如: "),a("code",[v._v('{"age1":"28","age2":"29"}')]),v._v(", 那么会以"),a("code",[v._v("age1,age2")]),v._v("作为组件的value保存到数据库. "),a("code",[v._v("28,29")]),v._v("会在表单上展示. 至于API方式, 只要内容返回标准的json格式即可.")]),v._v(" "),a("h4",{attrs:{id:"默认值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认值"}},[v._v("#")]),v._v(" 默认值")]),v._v(" "),a("p",[v._v("基于上面数据源的设置, 可以选择其中某几个值作为系统默认值, 多个以"),a("code",[v._v("|")]),v._v("分割,  如要设置"),a("code",[v._v("李四")]),v._v("为默认值, 可以在默认值输入框内填写"),a("code",[v._v("李四")]),v._v(".")]),v._v(" "),a("h4",{attrs:{id:"字段验证器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段验证器"}},[v._v("#")]),v._v(" 字段验证器")]),v._v(" "),a("p",[v._v("内置easyui的组件均可直接填写验证器内容. 自定义的组件目前没有测试,暂时略过.")]),v._v(" "),a("h4",{attrs:{id:"字段排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段排序"}},[v._v("#")]),v._v(" 字段排序")]),v._v(" "),a("p",[v._v("可以对发布页面(或模型定义)字段排序, 设置以后下次进入模型修改页面才会生效.")]),v._v(" "),a("h4",{attrs:{id:"设置模型内容列表页字段显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置模型内容列表页字段显示"}},[v._v("#")]),v._v(" 设置模型内容列表页字段显示")]),v._v(" "),a("p",[v._v("设置内容完成以后需要在模型列表页设置模型显示情况. 点击模型"),a("code",[v._v("操作")]),v._v("按钮, 点击"),a("code",[v._v("显示")]),v._v(" 对编辑模型的显示情况.")])])}),[],!1,null,null,null);_.default=e.exports}}]);