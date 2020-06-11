(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{316:function(t,e,a){"use strict";a.r(e);var n=a(40),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",{attrs:{align:"left"}},[a("a",{attrs:{href:"https://github.com/ly525/luban-h5/releases"}},[a("img",{attrs:{alt:"GitHub release (latest by date)",src:"https://img.shields.io/github/v/release/ly525/luban-h5"}})])]),t._v(" "),a("h3",{attrs:{id:"what-s-luban-h5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-luban-h5","aria-hidden":"true"}},[t._v("#")]),t._v(" What's LuBan-H5?")]),t._v(" "),a("blockquote",[a("p",[t._v("LuBan-H5 is a mobile page builder based on Vue.js, which is similar with "),a("a",{attrs:{href:"www.amolink.com"}},[t._v("Amolink")]),t._v(" or "),a("a",{attrs:{href:"http://www.eqxiu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("eqx"),a("OutboundLink")],1),t._v("(it's a chinese website, you may need to translate the page). It also supports parsing PSD file to HMTL5 Page")])]),t._v(" "),a("img",{staticStyle:{margin:"10px"},attrs:{src:"https://s2.ax1x.com/2019/10/11/u7WzUx.gif",width:"80%"}}),t._v(" "),a("h1",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("h2",{attrs:{id:"option-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-1","aria-hidden":"true"}},[t._v("#")]),t._v(" Option 1")]),t._v(" "),a("ul",[a("li",[t._v("if you are familiar with "),a("code",[t._v("Node")]),t._v(", "),a("code",[t._v("Yarn")]),t._v("(and already installed), please follow the commands to start quickly:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ly525/luban-h5\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" luban-h5 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# project root path")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# back-end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" back-end/h5-api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# front-end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" front-end/h5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build:engine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!en: default database is sqlite3(db location: h5-api/.tmp/data.db)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# visit http://localhost:1337/admin to config the api permissions")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# read more here: https://ly525.github.io/luban-h5/en/getting-started/quick-start.html#setup-backend")]),t._v("\n")])])]),a("h2",{attrs:{id:"option-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Option 2")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker pull ubuntu\ndocker run -it -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),t._v(":80 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1235")]),t._v(":1337  -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(":/app ubuntu\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qO- https://raw.githubusercontent.com/ly525/luban-h5/dev/deploy/ubuntu-install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# after the installation finished")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. visit ：http://localhost:1235/admin, add your admin account")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.2 config the api permissions, see more here：https://ly525.github.io/luban-h5/en/getting-started/quick-start.html#_2-something-important")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. front-end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2.1 visit https://localhost:1235 to get the front-end of luban-h5")]),t._v("\n")])])]),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links","aria-hidden":"true"}},[t._v("#")]),t._v(" Links")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Documents")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ly525.github.io/luban-h5/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chinese online document"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ly525.github.io/luban-h5/en/getting-started/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("English"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("Source Code")]),t._v(" "),a("ul",[a("li",[t._v("GitHub: https://GitHub.com/ly525/luban-h5")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://Gitee.com/ly525/luban-h5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee(China Mirror)"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("Community")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://gitter.im/luban-h5/community",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitter"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://support.qq.com/product/93432",target:"_blank",rel:"noopener noreferrer"}},[t._v("吐个槽：For Chinese Users"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("Ecosystem")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("back-end integration")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/luban-h5/tree/dev/back-end/h5-api"}},[t._v("Strapi.js(official Node.js backend API for luban-h5)")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/luban-h5/Spring-Boot-API-for-editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot API Demo"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("Custom components")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/luban-h5/vue-cli-plugin-lbhc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rapid development of custom component scaffolding"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("official components library")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/luban-h5-components/lbp-slide",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slide"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/luban-h5-components/lbc-button",target:"_blank",rel:"noopener noreferrer"}},[t._v("Normal Button(different from form-button)"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("Support Component/Auxiliary Component")]),t._v(" "),a("ul",[a("li",[t._v("Image Gallery: For Quick Selection of images from the gallery")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/luban-h5/lbs-text-align",target:"_blank",rel:"noopener noreferrer"}},[t._v("Text alignment-Repo(for Button text alignment)"),a("OutboundLink")],1)])])])])])]),t._v(" "),a("p",[t._v("Read more here "),a("a",{attrs:{href:"https://ly525.github.io/luban-h5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Online English Document"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"community"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community","aria-hidden":"true"}},[t._v("#")]),t._v(" Community")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://gitter.im/luban-h5/community",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitter"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ly525/blog/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Issues"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=r.exports}}]);