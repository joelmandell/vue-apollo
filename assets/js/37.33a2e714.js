(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{155:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("ul",[t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("li",[a("code",[t._v("result(ApolloQueryResult)")]),t._v(" 是收到结果时调用的钩子（更多参见 "),a("a",{attrs:{href:"https://github.com/apollographql/apollo-client/blob/master/packages/apollo-client/src/core/types.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("ApolloQueryResult"),a("OutboundLink")],1),t._v(" 的文档）。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("li",[a("code",[t._v("subscribeToMore")]),t._v("：一个或一组 "),a("router-link",{attrs:{to:"./../guide/apollo/subscriptions.html#subscribetomore"}},[t._v("subscribeToMore 选项")]),t._v(" 对象。")],1),t._v(" "),a("li",[a("code",[t._v("prefetch")]),t._v(" 是一个布尔值或函数来确定是否应该预取查询。详见 "),a("router-link",{attrs:{to:"./../guide/ssr.html"}},[t._v("服务端渲染")]),t._v("。")],1)]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),a("p",[t._v("手动模式示例：")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),a("p",[t._v("查询是否正在加载中：")]),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("停止并重新启动查询：")]),t._v(" "),t._m(25),t._m(26),t._v(" "),a("p",[t._v("开始查询：")]),t._v(" "),t._m(27),t._m(28),t._v(" "),a("p",[t._v("停止查询：")]),t._v(" "),t._m(29),t._m(30),t._v(" "),a("p",[t._v("为分页加载更多数据：")]),t._v(" "),t._m(31),t._m(32),t._v(" "),a("p",[t._v("使用 GraphQL 订阅来订阅更多数据：")]),t._v(" "),t._m(33),t._m(34),t._v(" "),a("p",[t._v("重新获取查询，可选择使用新变量：")]),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),a("p",[t._v("更新 Apollo "),a("a",{attrs:{href:"https://www.apollographql.com/docs/react/api/apollo-client.html#ApolloClient.watchQuery",target:"_blank",rel:"noopener noreferrer"}},[t._v("watchQuery"),a("OutboundLink")],1),t._v(" 选项并重新获取：")]),t._v(" "),t._m(40),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),a("p",[t._v("停止轮询：")]),t._v(" "),t._m(45)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"智能查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#智能查询","aria-hidden":"true"}},[this._v("#")]),this._v(" 智能查询")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在组件的 "),s("code",[this._v("apollo")]),this._v(" \b定义中声明的每个查询（不以 "),s("code",[this._v("$")]),this._v(" 字符开头）都会创建一个智能查询对象。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[this._v("#")]),this._v(" 选项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("query")]),this._v("：GraphQL 文档（可以是一个文件或一个 "),s("code",[this._v("gql")]),this._v(" 字符串）。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("code",[t._v("variables")]),t._v("：对象或返回对象的响应式函数。每个键将用 "),a("code",[t._v("'$'")]),t._v(" 映射到 GraphQL 文档中，例如 "),a("code",[t._v("foo")]),t._v(" 将变为 "),a("code",[t._v("$foo")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("throttle")]),this._v("：变量更新节流时间（毫秒）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("debounce")]),this._v("：变量更新防抖时间（毫秒）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("update(data) {return ...}")]),this._v(" 用来自定义设置到 vue 属性中的值，例如当字段名称不匹配时。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("code",[t._v("error(error)")]),t._v(" 是有错误时调用的钩子。"),a("code",[t._v("error")]),t._v(" 是一个具有 "),a("code",[t._v("graphQLErrors")]),t._v(" 属性或 "),a("code",[t._v("networkError")]),t._v(" 属性的 Apollo 错误对象。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("loadingKey")]),this._v(" 将更新你传递的值所对应的组件数据属性。你应该在组件的 "),s("code",[this._v("data()")]),this._v(" 钩子中将此属性初始化为 "),s("code",[this._v("0")]),this._v(" 。当查询正在加载时，此属性将增加 1；当不再加载时，它将减去 1。这样，该属性可以表示当前正在加载中的查询的计数器。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("code",[t._v("watchLoading(isLoading, countModifier)")]),t._v(" 是一个在查询的加载状态发生变化时调用的钩子。"),a("code",[t._v("countModifier")]),t._v(" 参数当查询正在加载时等于 "),a("code",[t._v("1")]),t._v("，不再加载时为 "),a("code",[t._v("-1")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("manual")]),this._v(" 是一个禁用自动属性更新的布尔值。如果使用它，你需要指定一个 "),s("code",[this._v("result")]),this._v(" 回调函数（参见下面的示例）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("deep")]),this._v(" 是一个在 Vue 侦听器上使用 "),s("code",[this._v("deep: true")]),this._v(" 的布尔值。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Apollo 具体选项")]),t._v("\napollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 带参数的高级查询")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// vue 会侦听 'variables' 方法")]),t._v("\n  pingMessage"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    query"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gql"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`query PingMessage($message: String!) {\n      ping(message: $message)\n    }`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 响应式参数")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("variables")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// 在这里使用 vue 的响应式属性")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          message"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pingInput"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 变量：深度对象侦听")]),t._v("\n    deep"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 我们使用自定义更新回调，因为字段名称不匹配")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 默认情况下，将使用 'data' 结果对象上的 'pingMessage' 属性")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 考虑到 apollo 服务端的工作方式，我们知道结果是在 'ping' 属性中")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// 返回的值将更新 vue 属性 'pingMessage'")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ping\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 可选结果钩子")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("result")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loading"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" networkStatus "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"We got some result!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 错误处理")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'We\\'ve got an error!'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 加载状态")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// loadingKey 是数据属性的名称")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 在查询正在加载时将递增，不再加载时递减")]),t._v("\n    loadingKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'loadingQueriesCount'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 当加载状态发生变化时会调用 watchLoading")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("watchLoading")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isLoading"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" countModifier"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// isLoading 是一个布尔值")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// countModifier 为 1 或 -1")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你使用 "),s("code",[this._v("ES2015")]),this._v("，"),s("code",[this._v("update")]),this._v(" 也可以这样写：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("update"),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" data "),s("span",{attrs:{class:"token operator"}},[this._v("=>")]),this._v(" data"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("ping\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  query"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gql"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`...`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  manual"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("result")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loading "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("loading"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"skip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skip","aria-hidden":"true"}},[this._v("#")]),this._v(" Skip")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以使用 "),s("code",[this._v("skip")]),this._v(" 来暂停或停止暂停：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("skip "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"loading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading","aria-hidden":"true"}},[this._v("#")]),this._v(" loading")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"refresh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refresh","aria-hidden":"true"}},[this._v("#")]),this._v(" refresh")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("refresh")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[this._v("#")]),this._v(" start")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("start")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"stop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop","aria-hidden":"true"}},[this._v("#")]),this._v(" stop")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"fetchmore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetchmore","aria-hidden":"true"}},[this._v("#")]),this._v(" fetchMore")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fetchMore")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 新的变量")]),t._v("\n  variables"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    page"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pageSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 用新数据转换之前的结果")]),t._v("\n  updateQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previousResult"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fetchMoreResult "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newTags "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fetchMoreResult"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tags\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasMore "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fetchMoreResult"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasMore\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showMoreEnabled "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" hasMore\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tagsPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        __typename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" previousResult"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__typename"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 合并标签列表")]),t._v("\n        tags"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("previousResult"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tags"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("newTags"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        hasMore"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"subscribetomore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribetomore","aria-hidden":"true"}},[this._v("#")]),this._v(" subscribeToMore")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 我们需要在重新订阅之前取消订阅")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsSub"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsSub"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("unsubscribe")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 在查询上订阅")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsSub "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tags"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("subscribeToMore")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  document"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("TAG_ADDED")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  variables"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 变更之前的结果")]),t._v("\n  updateQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previousResult"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" subscriptionData "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 如果我们在没有做操作的情况下已经添加了标签")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 这可能是由 addTag 变更上的 `updateQuery` 导致")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previousResult"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tags"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("find")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" tag"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" subscriptionData"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagAdded"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" previousResult\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tags"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("previousResult"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tags"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 添加新的标签")]),t._v("\n        subscriptionData"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagAdded"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"refetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refetch","aria-hidden":"true"}},[this._v("#")]),this._v(" refetch")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("refetch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 使用新变量")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("refetch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  friendsOf"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'id-user'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"setvariables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setvariables","aria-hidden":"true"}},[this._v("#")]),this._v(" setVariables")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("更新查询中的变量，如果发生了改变则重新获取查询。要强制重新获取，请使用 "),s("code",[this._v("refetch")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setVariables")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  friendsOf"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'id-user'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"setoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setoptions","aria-hidden":"true"}},[this._v("#")]),this._v(" setOptions")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setOptions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fetchPolicy"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'cache-and-network'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"startpolling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#startpolling","aria-hidden":"true"}},[this._v("#")]),this._v(" startPolling")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用轮询启动自动更新（这意味着每隔 "),s("code",[this._v("x")]),this._v(" ms 进行重新获取）：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("startPolling")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ms")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"stoppolling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stoppolling","aria-hidden":"true"}},[this._v("#")]),this._v(" stopPolling")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stopPolling")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="smart-query.md";s.default=e.exports}}]);