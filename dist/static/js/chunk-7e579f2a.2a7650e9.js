(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e579f2a"],{"0791":function(t,e,n){},"365c":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n("db72"),r=n("bc3a"),i=n.n(r),o=n("5c96"),c=n("4360"),s=n("5f87"),l=i.a.create({baseURL:"http://81.68.144.150:8088",withCredentials:!0,timeout:5e3});l.interceptors.request.use((function(t){return c["a"].getters.token&&(t.headers["Authorization"]=Object(s["a"])()),t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){var e=t.data;return 200!==e.code?(Object(o["Message"])({message:e.message||"Error",type:"error",duration:5e3}),999===e.code&&"/login"!==window.gvm.$route.path&&o["MessageBox"].confirm("登录状态已经过期",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){c["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(e.message||"Error"))):e.data}),(function(t){return console.log("接口异常"+t),Object(o["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject(t)}));var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l.get(t,Object(a["a"])({params:e},n))},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l.post(t,e,n)},p={get:u,post:d}},6724:function(t,e,n){"use strict";n("8d41");var a="@@wavesContext";function r(t,e){function n(n){var a=Object.assign({},e.value),r=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),i=r.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var o=i.getBoundingClientRect(),c=i.querySelector(".waves-ripple");switch(c?c.className="waves-ripple":(c=document.createElement("span"),c.className="waves-ripple",c.style.height=c.style.width=Math.max(o.width,o.height)+"px",i.appendChild(c)),r.type){case"center":c.style.top=o.height/2-c.offsetHeight/2+"px",c.style.left=o.width/2-c.offsetWidth/2+"px";break;default:c.style.top=(n.pageY-o.top-c.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",c.style.left=(n.pageX-o.left-c.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return c.style.backgroundColor=r.color,c.className="waves-ripple z-active",!1}}return t[a]?t[a].removeHandle=n:t[a]={removeHandle:n},n}var i={bind:function(t,e){t.addEventListener("click",r(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[a].removeHandle,!1),t.addEventListener("click",r(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[a].removeHandle,!1),t[a]=null,delete t[a]}},o=function(t){t.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;e["a"]=i},"896c":function(t,e,n){},"8d41":function(t,e,n){},"8ee3":function(t,e,n){"use strict";var a=n("896c"),r=n.n(a);r.a},c099:function(t,e,n){"use strict";var a=n("0791"),r=n.n(a);r.a},c4c8:function(t,e,n){"use strict";var a=n("365c");e["a"]={queryProducts:function(t){return a["a"].post("/admin/queryProducts",t)},queryProductFullInfoById:function(t){return a["a"].get("/admin/queryProductFullInfoById",t)},queryProductCategory:function(t){return a["a"].post("/admin/queryProductCategory",t)},insertProduct:function(t){return a["a"].post("/admin/insertProduct",t)},updateProduct:function(t){return a["a"].post("/admin/updateProduct",t)},deleteProduct:function(t){return a["a"].post("/admin/deleteProduct",t)}}},e6e2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"u-product"},[n("div",{staticClass:"mb-1"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}}),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item ml-1",attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:t.doSearch}},[t._v("查询")]),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"success",plain:"",size:"small"},on:{click:t.doAdd}},[t._v("创建新商品")])],1),t._v(" "),n("div",{staticClass:"mb-1"},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"danger",size:"small",plain:""},on:{click:t.doDeleteMulti}},[t._v("批量删除")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"","highlight-current-row":"","header-row-class-name":"u-tabel__header"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-table",{attrs:{"header-row-class-name":"u-tabel__header","highlight-current-row":"",data:e.row.productSkuList}},[n("el-table-column",{attrs:{prop:"id",label:"sku编号",width:"100",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"sku图片",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;return[n("el-image",{staticClass:"u-sku__img",staticStyle:{width:"50px",height:"50px"},attrs:{src:e.skuImgUrl,fit:"fill",lazy:"",webp:"","preview-src-list":[e.skuImgUrl]}})]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{prop:"skuName",label:"sku名称",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"price",label:"价格",width:"100",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"库存",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.edit?n("div",{staticClass:"u-stock__action"},[n("el-input",{attrs:{size:"small"},model:{value:a.stock,callback:function(e){t.$set(a,"stock",e)},expression:"row.stock"}}),t._v(" "),n("el-button",{staticClass:"u-stock__cancel",attrs:{size:"mini",icon:"el-icon-refresh",type:"warning"},on:{click:function(e){return t.cancelSkuStock(a)}}},[t._v("取消")])],1):n("span",[t._v(t._s(a.originalStock))])]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"详情图片",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.skuDetailImgUrl?n("el-image",{staticClass:"u-sku__img",staticStyle:{width:"50px",height:"50px"},attrs:{src:a.skuDetailImgUrl,fit:"fill",lazy:"",webp:"","preview-src-list":[a.skuDetailImgUrl]}}):t._e()]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{directives:[{name:"show",rawName:"v-show",value:!a.edit,expression:"!row.edit"}],on:{click:function(e){return t.editSkuStock(a)}}},[t._v("修改库存")]),t._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:a.edit,expression:"row.edit"}],attrs:{type:"success"},on:{click:function(e){return t.saveSkuStock(a)}}},[t._v("确认修改")])]}}],null,!0)})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.product.productId))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品品牌",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.product.brand))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品信息",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("div",{staticClass:"u-product__info"},[a.productBannerImgList.length?n("el-image",{staticClass:"u-product__img",staticStyle:{width:"50px",height:"50px"},attrs:{src:a.productBannerImgList[0].imgUrl,fit:"fill",lazy:"",webp:"","preview-src-list":a.productBannerImgList.map((function(t){return t.imgUrl}))}}):n("el-image",{staticClass:"u-product__img",staticStyle:{width:"50px",height:"50px"},attrs:{src:t.config.petAvatar,fit:"fill",lazy:"",webp:""}}),t._v(" "),n("span",[t._v(t._s(a.product.name))])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"sku数量",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.productSkuList.length))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"当前价",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(t.getPrice(a.productSkuList)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"库存(总)",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.productSkuList.reduce((function(t,e){return t+e.originalStock}),0)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"适用对象",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[1===a.product.petType?n("el-tag",{attrs:{size:"medium"}},[t._v("狗")]):n("el-tag",{attrs:{size:"medium",type:"danger"}},[t._v("猫")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品分类",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.productCategory.categoryName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"产地",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.product.address))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.product.createTime))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"250",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.doEdit(a)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.doDelete(a)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"u-page"},[n("el-pagination",{attrs:{background:"","current-page":t.pageNo,"page-sizes":[20,50,100,200],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},r=[],i=(n("ac6a"),n("c5f6"),n("7f7f"),n("2ef0")),o=n.n(i),c=n("8ded"),s=n.n(c),l=n("f121"),u=n("6724"),d=n("c4c8"),p={name:"product",directives:{waves:u["a"]},data:function(){return{config:l["a"],multipleSelection:[],filterMore:!1,listQuery:{keyword:""},pageNo:1,pageSize:10,totalCount:0,loading:!1,list:[]}},beforeMount:function(){this.getList()},methods:{doSearch:function(){this.pageNo=1,this.getList()},doAdd:function(){s.a.set("product_edit",""),this.$router.push({path:"/product/create"})},doEdit:function(t){this.$router.push({path:"/product/edit/".concat(t.product.productId)})},doDeleteMulti:function(){var t=this,e=this.multipleSelection.map((function(t){return t.product.productId}));if(!e.length)return this.$message.warning("请选择需要删除的商品");this.$confirm("此操作将删除".concat(e.length,"个商品, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n=e.join("-");d["a"].deleteProduct({productId:n}).then((function(e){t.$message.success("删除成功"),t.getList()})).catch((function(e){t.$message.error(e.message)}))})).catch((function(){}))},doDelete:function(t){var e=this;this.$confirm("此操作将删除商品【".concat(t.product.name,"】, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){d["a"].deleteProduct({productId:t.product.productId}).then((function(t){e.$message.success("删除成功"),e.getList()})).catch((function(t){e.$message.error(t.message)}))})).catch((function(){}))},editSkuStock:function(t){t.edit=!0},cancelSkuStock:function(t){t.edit=!1,t.stock=t.originalStock},saveSkuStock:function(t){t.edit=!1,t.originalStock=Number(t.stock)},toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},getPrice:function(t){var e=t.map((function(t){return t.price})),n=o.a.max(e)||0,a=o.a.min(e)||0;return n===a?n:"".concat(a," - ").concat(n)},getList:function(){var t=this;this.loading=!0,d["a"].queryProducts({keyword:this.listQuery.keyword,pageNo:this.pageNo,pageSize:this.pageSize}).then((function(e){t.loading=!1,e.items.forEach((function(t){t.productSkuList.forEach((function(t){t.edit=!1,t.originalStock=t.stock}))})),t.list=e.items,t.totalCount=e.totalCount})).catch((function(e){t.loading=!1,t.$message.error(e.message)}))},handleSizeChange:function(t){this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.pageNo=t,this.getList()}}},f=p,g=(n("8ee3"),n("c099"),n("2877")),h=Object(g["a"])(f,a,r,!1,null,"7606ccf0",null);e["default"]=h.exports},f121:function(t,e,n){"use strict";e["a"]={petAvatar:"http://pet-agatha.oss-cn-hangzhou.aliyuncs.com/20200215/c43e7e14036e4b57b25e6fafb6db1074.jpg"}}}]);