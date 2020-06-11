(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{344:function(a,s,t){"use strict";t.r(s);var e=t(40),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"脚手架-命令行参数说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架-命令行参数说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 脚手架-命令行参数说明")]),a._v(" "),t("h2",{attrs:{id:"命令参数说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令参数说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令参数说明")]),a._v(" "),t("ol",[t("li",[t("p",[t("code",[a._v("组件的名称(发布到npm)")]),a._v("："),t("em",[t("strong",[a._v("输入组件名称")])])]),a._v(" "),t("ul",[t("li",[a._v("默认为 "),t("code",[a._v("test")]),a._v("，这个名字最后会作为：component name")]),a._v(" "),t("li",[a._v("将在luban-h5的编辑器中，通过 "),t("code",[a._v("yarn add component-name")]),a._v(" 的形式引入")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("icon")]),a._v(": "),t("em",[t("strong",[a._v("输入icon")])])])])]),a._v(" "),t("blockquote",[t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/12668546/69070298-daac0200-0a62-11ea-9543-9199f6040545.png",alt:"image"}})])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("访问 "),t("a",{attrs:{href:"https://fontawesome.com/v4.7.0/icons/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Font Awesome 4.7 版本"),t("OutboundLink")],1)])]),a._v(" "),t("li",[t("p",[a._v("按照下图的方法，选择一个 icon, 在命令行对话中，输入即可")])])]),a._v(" "),t("blockquote",[t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/12668546/69069617-c3204980-0a61-11ea-8239-7f7bf660297d.png",alt:"image"}})])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 在 https://fontawesome.com/v4.7.0/icons/ 中寻找对应的 icon，填入 icon 字段即可")]),a._v("\n  icon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'address-book'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'luban-h5-address'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[t("code",[a._v("是否有命名空间(@scope)")]),a._v("："),t("em",[t("strong",[a._v("Yes or No")])])]),a._v(" "),t("ul",[t("li",[a._v("作为组织或者企业开发组件，可以选择 "),t("code",[a._v("Yes")]),a._v("，在下一步，填写 "),t("code",[a._v("npm scope")])])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("scope(命名空间<理解为企业/组织名称>)")]),a._v(": "),t("em",[t("strong",[a._v("输入scope名称")])])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("将企业/组织的组件放在 "),t("code",[a._v("@组织名")]),a._v(" 下, 便于管理")])]),a._v(" "),t("li",[t("p",[a._v("举例1：")]),a._v(" "),t("ul",[t("li",[a._v("LubanH5 的官方组件库，都放在了"),t("code",[a._v("@luban-h5")]),a._v("这个 scope 下。")]),a._v(" "),t("li",[a._v("以按钮组件为例，通过 "),t("code",[a._v("yarn add @luban-h5/lbc-button")]),a._v("，即可引入官方按钮组件了")]),a._v(" "),t("li",[a._v("用户一看到 "),t("code",[a._v("@luban-h5")]),a._v(" 这个，就知道是由 LubanH5 官方提供的组件库")])])]),a._v(" "),t("li",[t("p",[a._v("举例2：")]),a._v(" "),t("ul",[t("li",[a._v("你的企业/组织名称是 "),t("code",[a._v("abc")]),a._v("，你在开发 "),t("code",[a._v("upload")]),a._v(" 上传组件，那么就可以选择：")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("组件的名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("发布到npm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ：upload\n是否有命名空间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("@scope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("：Yes\nscope：abc\n\n通过 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" publish --access public"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 发布到 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v("\n通过"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" @abc/upload"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 或 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" @abc/uplaod"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("， 即可引入到"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("鲁班编辑器"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("中作为"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("自定义组件"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("使用\n")])])])])])])]),a._v(" "),t("h2",{attrs:{id:"相关概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 相关概念")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.npmjs.com/misc/scope",target:"_blank",rel:"noopener noreferrer"}},[a._v("npm-scope 官网文档"),t("OutboundLink")],1)])])},[],!1,null,null,null);s.default=n.exports}}]);