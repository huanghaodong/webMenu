webpackJsonp([1],{0:function(t,e){},"0MoM":function(t,e,n){"use strict";(function(t){e.a={name:"Detail",data:function(){return{detailData:{id:"1",title:"",tags:"",imtro:"",ingredients:"",burden:"",albums:[],steps:[{img:"",step:""}]}}},mounted:function(){var e=this,n={key:"5c1abcdb494382186bf2ea20a6aff5a4",id:this.$route.params.id};t.getJSON("/api/queryid",n,function(t){e.detailData=t.result.data[0]},"json")}}}).call(e,n("7t+N"))},"175/":function(t,e){},"4f04":function(t,e,n){t.exports=n.p+"static/img/searchBg_03.8131a5b.jpg"},"4tjM":function(t,e,n){t.exports=n.p+"static/img/searchBg_02.f4c7f4c.jpg"},"80QC":function(t,e,n){t.exports=n.p+"static/img/searchBg_01.1363e78.jpg"},"89Bh":function(t,e){},"8Cot":function(t,e){},Acx8:function(t,e,n){"use strict";(function(t){e.a={name:"HomeSort",data:function(){return{list:[],focusIndex:""}},methods:{clickItem:function(t){t===this.focusIndex?this.focusIndex="":this.focusIndex=t}},mounted:function(){var e=this;t.getJSON("http://apis.juhe.cn/cook/category",{key:"5c1abcdb494382186bf2ea20a6aff5a4"},function(t){e.list=t.result},"json")}}}).call(e,n("7t+N"))},CnqU:function(t,e){},IB4t:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"changeMsg",function(){return A}),n.d(a,"loginIn",function(){return J}),n.d(a,"loginOut",function(){return Q}),n.d(a,"changeLoginPageStateTrue",function(){return Z}),n.d(a,"changeLoginPageStateFalse",function(){return z});var i={};n.d(i,"mutationsMsg",function(){return G}),n.d(i,"mutationsLoginState",function(){return K}),n.d(i,"mutationsLoginPageState",function(){return X});var s={};n.d(s,"gettersMsg",function(){return tt}),n.d(s,"getterLoginState",function(){return et}),n.d(s,"getterLoginPageState",function(){return nt});var o=n("7+uW"),r=n("Dd8w"),c=n.n(r),u=n("NYxO"),l={name:"app",props:["show"],data:function(){return{loginInfo:{account:"",password:""}}},computed:c()({},Object(u.c)(["getterLoginPageState"])),methods:c()({},Object(u.b)(["changeLoginPageStateFalse"]))},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._v(" "),n("my-loading",{attrs:{show:t.show}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.getterLoginPageState?n("div",{staticClass:"loginLayer"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginInfo.account,expression:"loginInfo.account"}],staticClass:"account",attrs:{type:"text"},domProps:{value:t.loginInfo.account},on:{input:function(e){e.target.composing||t.$set(t.loginInfo,"account",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginInfo.password,expression:"loginInfo.password"}],staticClass:"password",attrs:{type:"password"},domProps:{value:t.loginInfo.password},on:{input:function(e){e.target.composing||t.$set(t.loginInfo,"password",e.target.value)}}}),t._v(" "),n("button",{staticClass:"loginBtn",on:{click:function(e){t.changeLoginPageStateFalse(t.loginInfo)}}},[t._v("登陆")]),t._v(" "),n("div",{staticClass:"tip"},[n("a",{staticClass:"tipLeft",attrs:{href:""}},[t._v("忘记密码")]),t._v(" "),n("a",{staticClass:"tipRight",attrs:{href:""}},[t._v("新用户注册")])])]),t._v(" "),n("div",{staticClass:"footerTip"},[t._v("\n        登陆即代表阅读并同意"),n("a",{staticClass:"blue",attrs:{href:""}},[t._v("服务条款")])])]):t._e()])],1)},staticRenderFns:[]};var g=n("VU/8")(l,d,!1,function(t){n("Zc71")},null,null).exports,f=n("/ocq"),m=[n("80QC"),n("4tjM"),n("4f04")],v={name:"HomeSearch",data:function(){return{bgImg:m[0],value:""}},created:function(){this.bgImg=m[Math.floor(Math.random()*m.length)]}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homeSearch",style:{backgroundImage:"url("+t.bgImg+")"}},[n("div",{staticClass:"box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",attrs:{type:"text",placeholder:"发现美食"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),n("router-link",{staticClass:"fa fa-search search",attrs:{to:{name:"ListByName",params:{dishName:t.value}}}})],1)])},staticRenderFns:[]};var h=n("VU/8")(v,p,!1,function(t){n("8Cot")},"data-v-e58718fe",null).exports,_=n("Acx8"),y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homeSort"},[n("ul",{staticClass:"parentUl"},t._l(t.list,function(e,a){return n("li",[n("a",{on:{click:function(e){t.clickItem(a)}}},[t._v(t._s(e.name))]),t._v(" "),a===t.focusIndex?n("ul",{staticClass:"childUl"},t._l(e.list,function(e){return n("li",[n("router-link",{attrs:{to:{name:"ListById",params:{dishId:e.id}}}},[t._v(t._s(e.name))])],1)})):t._e()])}))])},staticRenderFns:[]};var b=function(t){n("IB4t")},S=n("VU/8")(_.a,y,!1,b,"data-v-3c1bcec5",null).exports,C={name:"HomeMore",data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:c()({},Object(u.c)(["gettersMsg","getterLoginState"])),methods:c()({},Object(u.b)(["changeMsg"]))},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homeMore"},[e("div",{staticClass:"container"},[e("p",[this._v(this._s("账户："+this.gettersMsg.account))]),this._v(" "),e("button",{on:{click:this.changeMsg}},[this._v(this._s(this.getterLoginState?"注销":"登陆"))])])])},staticRenderFns:[]};var I=n("VU/8")(C,w,!1,function(t){n("175/")},"data-v-5eefc674",null).exports,L={name:"Home",data:function(){return{title:"搜索"}},methods:c()({changeHome:function(t){this.title=t}},Object(u.b)(["changeLoginPageStateTrue"])),computed:c()({},Object(u.c)(["getterLoginState","gettersMsg"])),components:{HomeSearch:h,HomeSort:S,HomeMore:I}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("header",[t.getterLoginState?n("i",[t._v(t._s("欢迎，"+t.gettersMsg.account))]):n("i",{staticClass:"fa fa-sign-in",on:{click:t.changeLoginPageStateTrue}}),t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("section",[n("HomeSearch",{style:{display:"搜索"==t.title?"flex":"none"}}),t._v(" "),n("HomeSort",{style:{display:"分类"==t.title?"flex":"none"}}),t._v(" "),n("HomeMore",{style:{display:"更多"==t.title?"flex":"none"}})],1),t._v(" "),n("footer",[n("a",{on:{click:function(e){t.changeHome("搜索")}}},[t._v("搜索")]),t._v(" "),n("a",{on:{click:function(e){t.changeHome("分类")}}},[t._v("分类")]),t._v(" "),n("a",{on:{click:function(e){t.changeHome("更多")}}},[t._v("更多")])])])},staticRenderFns:[]};var M=n("VU/8")(L,x,!1,function(t){n("WqmY")},"data-v-e3c378ce",null).exports,k=n("0MoM"),P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("my-nav"),t._v(" "),n("div",{staticClass:"container"},[n("img",{staticClass:"headImage",attrs:{src:t.detailData.albums,alt:""}}),t._v(" "),n("h1",[t._v(t._s(t.detailData.title))]),t._v(" "),n("table",[n("tr",[n("td",{staticClass:"tit"},[t._v("关键字")]),t._v(" "),n("td",[t._v(t._s(t.detailData.tags))])]),t._v(" "),n("tr",[n("td",{staticClass:"tit"},[t._v("介绍")]),t._v(" "),n("td",[t._v(t._s(t.detailData.imtro))])]),t._v(" "),n("tr",[n("td",{staticClass:"tit"},[t._v("材料")]),t._v(" "),n("td",[t._v(t._s(t.detailData.ingredients))])]),t._v(" "),n("tr",[n("td",{staticClass:"tit"},[t._v("原料")]),t._v(" "),n("td",[t._v(t._s(t.detailData.burden))])]),t._v(" "),n("tr",[n("td",{staticClass:"tit"},[t._v("步骤")]),t._v(" "),n("td",[n("ul",t._l(t.detailData.steps,function(e){return n("li",[n("img",{attrs:{src:e.img,alt:""}}),t._v(" "),n("p",[t._v(t._s(e.step))])])}))])])])])],1)},staticRenderFns:[]};var N=function(t){n("b+o3")},H=n("VU/8")(k.a,P,!1,N,"data-v-05737108",null).exports;var j=n("7t+N"),$=n.n(j),B={name:"List",data:function(){return{list:[]}},mounted:function(){var t=this,e=this.$route.params,n=e.dishName,a=e.dishId,i=void 0,s={key:"5c1abcdb494382186bf2ea20a6aff5a4"};n?(s.menu=n,i="/api/query.php"):(s.cid=a,i="/api/index"),$.a.getJSON(i,s,function(e){t.list=e.result.data},"json")}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("my-nav"),t._v(" "),n("ul",t._l(t.list,function(e){return n("li",{style:{backgroundImage:"url("+e.albums+")"}},[n("router-link",{attrs:{to:{name:"Detail",params:{id:e.id}}}},[n("h1",[n("em",[t._v(t._s(e.title))])]),t._v(" "),n("div",[n("i",{staticClass:"fa fa-chevron-right go"})])])],1)}))],1)},staticRenderFns:[]};var U=n("VU/8")(B,D,!1,function(t){n("89Bh")},"data-v-01300e20",null).exports,F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("div",{staticClass:"btn",on:{click:function(e){t.goBack()}}},[n("i",{staticClass:"fa fa-chevron-left fa-lg"})])])},staticRenderFns:[]};var O=n("VU/8")({name:"Nav",data:function(){return{}},methods:{goBack:function(){this.$router.go(-1)}}},F,!1,function(t){n("Ygyu")},"data-v-84e86e42",null).exports,V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.show.show,expression:"show.show"}],staticClass:"loading"},[e("i",{staticClass:"fa fa-spinner fa-pulse fa-5x "})])},staticRenderFns:[]};var R=n("VU/8")({name:"Detail",props:["show"],data:function(){return{}}},V,!1,function(t){n("Vd8l")},"data-v-90798508",null).exports;o.a.directive("my-directive",function(t,e){e.value.length>0&&e.value.length<4||e.value.length>8?(t.innerHTML="请输入4-8位",t.style.display="block"):/^\d+$/.test(e.value)?(t.innerHTML="不能为纯数字",t.style.display="block"):t.style.display="none"});var E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],style:{border:t.bd},attrs:{type:"text",lazy:""},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._v(" "),n("h1",{directives:[{name:"my-directive",rawName:"v-my-directive",value:t.msg,expression:"msg"}]})])},staticRenderFns:[]};var T=n("VU/8")({name:"Login",data:function(){return{msg:"",bd:""}}},E,!1,function(t){n("CnqU")},"data-v-12740112",null).exports;o.a.use(f.a),o.a.component("my-nav",O),o.a.component("my-loading",R);var q=new f.a({routes:[{path:"/",name:"Home",component:M},{path:"/detail/:id",name:"Detail",component:H},{path:"/list/dishName/:dishName",name:"ListByName",component:U},{path:"/list/dishId/:dishId",name:"ListById",component:U},{path:"/login",name:"Login",component:T}]}),Y=n("8+8L"),A=function(t){var e=t.dispatch;t.commit;t.state.loginState?e("loginOut"):e("changeLoginPageStateTrue")},J=function(t,e){var n=t.commit;n({type:"mutationsMsg",userInfo:{account:e.account}}),n({type:"mutationsLoginState",loginState:!0})},W={account:""},Q=function(t,e){var n=t.commit;t.state;n({type:"mutationsMsg",userInfo:W}),n({type:"mutationsLoginState",loginState:!1})},Z=function(t){t.dispatch;var e=t.commit;t.state;e({type:"mutationsLoginPageState",isShowLoginPage:!0})},z=function(t,e){var n=t.dispatch,a=t.commit;t.state;setTimeout(function(){a({type:"mutationsLoginPageState",isShowLoginPage:!1}),n("loginIn",e)},3e3)},G=function(t,e){t.userInfo=e.userInfo},K=function(t,e){t.loginState=e.loginState},X=function(t,e){t.isShowLoginPage=e.isShowLoginPage},tt=function(t){return t.userInfo},et=function(t){return t.loginState},nt=function(t){return t.isShowLoginPage},at={loginState:!1,isShowLoginPage:!1,userInfo:{account:""}};o.a.use(u.a);var it=new u.a.Store({state:at,getters:s,actions:a,mutations:i});o.a.use(Y.a),o.a.config.productionTip=!1;var st={show:!1};o.a.http.interceptors.push(function(t,e){st.show=!0,e(function(t){return st.show=!1,t})}),new o.a({el:"#app",data:function(){return{show:st}},router:q,store:it,template:'<App v-bind:show = "show" />',components:{App:g}})},Vd8l:function(t,e){},WqmY:function(t,e){},Ygyu:function(t,e){},Zc71:function(t,e){},"b+o3":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.069780abf2a31862b502.js.map