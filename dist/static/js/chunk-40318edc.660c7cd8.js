(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40318edc"],{"0791":function(t,e,n){},2113:function(t,e,n){"use strict";var a=n("f48b"),i=n.n(a);i.a},6724:function(t,e,n){"use strict";n("8d41");var a="@@wavesContext";function i(t,e){function n(n){var a=Object.assign({},e.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var l=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",r.appendChild(o)),i.type){case"center":o.style.top=l.height/2-o.offsetHeight/2+"px",o.style.left=l.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(n.pageY-l.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(n.pageX-l.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=i.color,o.className="waves-ripple z-active",!1}}return t[a]?t[a].removeHandle=n:t[a]={removeHandle:n},n}var r={bind:function(t,e){t.addEventListener("click",i(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[a].removeHandle,!1),t.addEventListener("click",i(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[a].removeHandle,!1),t[a]=null,delete t[a]}},l=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(l)),r.install=l;e["a"]=r},"8d41":function(t,e,n){},c099:function(t,e,n){"use strict";var a=n("0791"),i=n.n(a);i.a},c4c8:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return s}));var a=n("b775");function i(t){return Object(a["a"])({url:"/admin/queryProducts",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/admin/queryProductCategory",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/admin/insertProduct",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/admin/updateProduct",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/admin/deleteProduct",method:"post",data:t})}},e6e2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"u-product"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}}),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.getList}},[t._v("查询")]),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"success"},on:{click:t.doAdd}},[t._v("创建新商品")]),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"danger"}},[t._v("批量删除商品")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"","highlight-current-row":"","header-row-class-name":"u-tabel__header"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-table",{attrs:{"header-row-class-name":"u-tabel__header","highlight-current-row":"",data:e.row.productSkuList}},[n("el-table-column",{attrs:{prop:"id",label:"sku编号",width:"100",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"sku图片",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;return[n("el-image",{staticClass:"u-sku__img",staticStyle:{width:"50px",height:"50px"},attrs:{src:e.skuImgUrl,fit:"fill",lazy:"",webp:"","preview-src-list":[e.skuImgUrl]}})]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{prop:"skuName",label:"sku名称",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"price",label:"价格",width:"100",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"库存",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.edit?n("div",{staticClass:"u-stock__action"},[n("el-input",{attrs:{size:"small"},model:{value:a.stock,callback:function(e){t.$set(a,"stock",e)},expression:"row.stock"}}),t._v(" "),n("el-button",{staticClass:"u-stock__cancel",attrs:{size:"mini",icon:"el-icon-refresh",type:"warning"},on:{click:function(e){return t.cancelSkuStock(a)}}},[t._v("\n                  取消\n                ")])],1):n("span",[t._v(t._s(a.originalStock))])]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"详情图片",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.skuDetailImgUrl?n("el-image",{staticClass:"u-sku__img",staticStyle:{width:"50px",height:"50px"},attrs:{src:a.skuDetailImgUrl,fit:"fill",lazy:"",webp:"","preview-src-list":[a.skuDetailImgUrl]}}):t._e()]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{directives:[{name:"show",rawName:"v-show",value:!a.edit,expression:"!row.edit"}],on:{click:function(e){return t.editSkuStock(a)}}},[t._v("修改库存")]),t._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:a.edit,expression:"row.edit"}],attrs:{type:"success"},on:{click:function(e){return t.saveSkuStock(a)}}},[t._v("确认修改")])]}}],null,!0)})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.product.productId))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品品牌",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.product.brand))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品信息",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("div",{staticClass:"u-product__info"},[a.productBannerImgList.length?n("el-image",{staticClass:"u-product__img",staticStyle:{width:"50px",height:"50px"},attrs:{src:a.productBannerImgList[0].imgUrl,fit:"fill",lazy:"",webp:"","preview-src-list":a.productBannerImgList.map((function(t){return t.imgUrl}))}}):n("el-image",{staticClass:"u-product__img",staticStyle:{width:"50px",height:"50px"},attrs:{src:t.config.petAvatar,fit:"fill",lazy:"",webp:""}}),t._v(" "),n("span",[t._v(t._s(a.product.name))])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"sku数量",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.productSkuList.length))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"当前价",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(t.getPrice(a.productSkuList)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"库存(总)",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.productSkuList.reduce((function(t,e){return t+e.originalStock}),0)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"适用对象",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[1===a.product.petType?n("el-tag",{attrs:{size:"medium"}},[t._v("狗")]):n("el-tag",{attrs:{size:"medium",type:"danger"}},[t._v("猫")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品分类",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.productCategory.categoryName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"产地",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.product.address))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建时间",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.product.createTime))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"250",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.doEdit(a)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.doDelete(a)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"u-page"},[n("el-pagination",{attrs:{background:"","current-page":t.pageNo,"page-sizes":[20,50,100,200],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},i=[],r=(n("ac6a"),n("c5f6"),n("2ef0")),l=n.n(r),o=n("8ded"),s=n.n(o),c=n("f121"),u=n("6724"),d=n("c4c8"),p={directives:{waves:u["a"]},data:function(){return{config:c["a"],filterMore:!1,listQuery:{keyword:""},pageNo:1,pageSize:10,totalCount:0,loading:!1,list:[]}},beforeMount:function(){this.getList()},methods:{doAdd:function(){s.a.set("product_edit",""),this.$router.push({path:"/productAdd"})},doEdit:function(t){s.a.set("product_edit",t),this.$router.push({path:"/productAdd?edit=1"})},doDelete:function(t){var e=this;d["a"]({productId:t.product.productId}).then((function(t){e.$message.success("删除成功"),e.getList()})).catch((function(t){e.$message.error(t.message)}))},editSkuStock:function(t){t.edit=!0},cancelSkuStock:function(t){t.edit=!1,t.stock=t.originalStock},saveSkuStock:function(t){t.edit=!1,t.originalStock=Number(t.stock)},toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},getPrice:function(t){var e=t.map((function(t){return t.price})),n=l.a.max(e)||0,a=l.a.min(e)||0;return n===a?n:"".concat(a," - ").concat(n)},getList:function(){var t=this;this.loading=!0,d["d"]({keyword:this.listQuery.keyword,pageNo:this.pageNo,pageSize:this.pageSize}).then((function(e){t.loading=!1,e.items.forEach((function(t){t.productSkuList.forEach((function(t){t.edit=!1,t.originalStock=t.stock}))})),t.list=e.items,t.totalCount=e.totalCount})).catch((function(e){t.loading=!1,t.$message.error(e.message)}))},handleSizeChange:function(t){this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.pageNo=t,this.getList()}}},f=p,v=(n("2113"),n("c099"),n("2877")),g=Object(v["a"])(f,a,i,!1,null,"96e646a6",null);e["default"]=g.exports},f121:function(t,e,n){"use strict";e["a"]={server:"https://api.bbbhr.cn",uploadUrl:"https://api.bbbhr.cn/pet/uploadFile",petAvatar:"http://pet-agatha.oss-cn-hangzhou.aliyuncs.com/20200215/c43e7e14036e4b57b25e6fafb6db1074.jpg"}},f48b:function(t,e,n){}}]);