(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21168af0"],{8697:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("cs-container",[o("page-main",{ref:"main",attrs:{loading:t.loading,"tree-data":t.tree},on:{refresh:t.handleRefresh}})],1)},a=[],r=(o("d3b7"),o("ca00")),d=o("c54e"),s={name:"goods-setting-category",components:{PageMain:function(){return o.e("chunk-50577d7d").then(o.bind(null,"6b59"))}},data:function(){return{tree:[],loading:!1}},mounted:function(){this.handleSubmit()},methods:{handleRefresh:function(){var t=this;this.$nextTick((function(){t.handleSubmit()}))},handleSubmit:function(){var t=this;this.loading=!0,Object(d["d"])(null).then((function(e){t.tree=r["a"].formatDataToTree(e.data,"goods_category_id"),t.$refs.main&&(t.$refs.main.filterText="",t.$refs.main.resetForm(),t.$refs.main.resetElements())})).finally((function(){t.loading=!1}))}}},c=s,i=o("2877"),u=Object(i["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},c54e:function(t,e,o){"use strict";o.d(e,"a",(function(){return a})),o.d(e,"f",(function(){return r})),o.d(e,"b",(function(){return d})),o.d(e,"c",(function(){return s})),o.d(e,"d",(function(){return c})),o.d(e,"g",(function(){return i})),o.d(e,"e",(function(){return u}));var n=o("bc07");function a(t){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"add.goods.category.item"},data:t})}function r(t){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"set.goods.category.item"},data:t})}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"del.goods.category.list"},data:{goods_category_id:t,not_empty:e}})}function s(t){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"get.goods.category.item"},data:{goods_category_id:t}})}function c(t){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"get.goods.category.list"},data:t})}function i(t,e){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"set.goods.category.status"},data:{goods_category_id:t,status:e}})}function u(t){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"set.goods.category.index"},data:{goods_category_id:t}})}}}]);