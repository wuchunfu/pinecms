(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{700:function(t,s,n){"use strict";n.r(s);var a=n(92),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"控制器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制器"}},[t._v("#")]),t._v(" 控制器")]),t._v(" "),n("p",[t._v("控制器目录("),n("code",[t._v("src/application/controllers")]),t._v(")目前包括如下目录:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("frontend")]),t._v("（前端）")]),t._v(" "),n("li",[n("code",[t._v("backend")]),t._v("（后端）")]),t._v(" "),n("li",[n("code",[t._v("middleware")]),t._v(" (中间件目录)")]),t._v(" "),n("li",[n("code",[t._v("taglibs")]),t._v(" (模板标签目录)")]),t._v(" "),n("li",[n("code",[t._v("tplfun")]),t._v(" (模板函数目录)")])]),t._v(" "),n("h1",{attrs:{id:"控制器创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制器创建"}},[t._v("#")]),t._v(" 控制器创建")]),t._v(" "),n("blockquote",[n("p",[t._v("任何需要控制器都需要内嵌"),n("code",[t._v("pine.Controller")]),t._v("结构体, 它会提供一些基础访问方法, 如果您不继承, 框架会抛出异常提醒.")])]),t._v(" "),n("p",[t._v("首先, 控制器创建需要遵循"),n("code",[t._v("pine")]),t._v("框架的相关规则:")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" XXXController "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tpine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Controller\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("XXXController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterRoute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b pine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IRouterWrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ANY")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/xxx/index"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Index"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("XXXController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("service1 injectService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("XXXController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("service1 injectService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("p",[t._v("通过如上代码创建一个支持"),n("code",[t._v("pine.di")]),t._v("注册服务注入功能的控制器.  这里 "),n("code",[t._v("Controller")]),t._v("后缀不是必须的, 只是一般"),n("code",[t._v("mvc")]),t._v("框架的惯用手段.")]),t._v(" "),n("p",[t._v("到现在为止可以支持的"),n("code",[t._v("injectService")]),t._v("的服务有:")]),t._v(" "),n("ul",[n("li",[t._v("*xorm.Engine")]),t._v(" "),n("li",[t._v("cache.AbstractCache")]),t._v(" "),n("li",[t._v("logger.AbstractLogger")])]),t._v(" "),n("blockquote",[n("p",[t._v("如果控制器方法是包含有参数, 那么pine.di会自动查找相关注册并且注入, 在开发期间您不会得到并没有注册的服务")])]),t._v(" "),n("p",[t._v("如果您的控制器方法包含返回值, 那么"),n("code",[t._v("pine")]),t._v("框架会自动收集返回值信息(如果您没有渲染过模板框架会自动解析返回值并且返回"),n("code",[t._v("json")]),t._v(").")]),t._v(" "),n("p",[t._v("您也可以选择不使用"),n("code",[t._v("RegisterRoute")]),t._v("方法手动指定注册方法, 可以通过使用"),n("code",[t._v("请求方法")]),t._v("作为前缀框架会自动注册路由:")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" XXXController "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tpine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Controller\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("XXXController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("service1 injectService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("XXXController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PostIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("service1 injectService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("上面的代码表示需要注册两个路由"),n("code",[t._v("GET")]),t._v("方法的"),n("code",[t._v("index")]),t._v("和"),n("code",[t._v("POST")]),t._v("方法的"),n("code",[t._v("index")]),t._v(", 这种方法注册的路由,会被打印到启动日志里")]),t._v(" "),n("p",[t._v("您在启动时会得到如下信息:")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/xiusin/assets/master/20200427154826.png",alt:""}})]),t._v(" "),n("h1",{attrs:{id:"控制器属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制器属性"}},[t._v("#")]),t._v(" 控制器属性")]),t._v(" "),n("p",[t._v("目前为止定义的请勿在控制器中定义属性, 框架每个请求都是重新实例化的结构体, 除非您有特殊需求, 否则不建议使用结构体属性作为操作依赖, 您可以通过使用全局变量的方式来替代.\n比如您可能需要统计访问的功能:")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" visitCounter "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" VisitController "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tpine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Controller\n    counter "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h1",{attrs:{id:"注册路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册路由"}},[t._v("#")]),t._v(" 注册路由")]),t._v(" "),n("p",[t._v("在文件"),n("code",[t._v("src/server/server.go")]),t._v("中的"),n("code",[t._v("registerBackendRoutes")]),t._v("添加"),n("code",[t._v(".Handle(new(XXXController))")]),t._v(", 到此, 框架会自动加载并解析路由. 接下来您就可以编写模块逻辑了.")]),t._v(" "),n("h1",{attrs:{id:"接口模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口模块"}},[t._v("#")]),t._v(" 接口模块")]),t._v(" "),n("p",[t._v("如果您需要开发接口模块, 希望您定义到"),n("code",[t._v("api")]),t._v("目录下, 如果前端页面是动态渲染的, 希望"),n("code",[t._v(".go")]),t._v("作为结束路由. 如: "),n("code",[t._v("/search.go")]),t._v(" 这样您就知道这个是动态地址, 不会走统一的渲染逻辑.")]),t._v(" "),n("h1",{attrs:{id:"请求日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求日志"}},[t._v("#")]),t._v(" 请求日志")]),t._v(" "),n("p",[t._v("您在开发时需要关注请求日志, "),n("code",[t._v("pine")]),t._v("提供了"),n("code",[t._v("RequestRecorder")]),t._v("中间件, 您可以在"),n("code",[t._v("server.go")]),t._v("中引入它, 以便查看请求信息及耗时:")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/xiusin/assets/master/20200427164108.png",alt:""}})]),t._v(" "),n("blockquote",[n("p",[t._v("如果您已经确定不再开发, 请关闭此中间件")])])])}),[],!1,null,null,null);s.default=e.exports}}]);