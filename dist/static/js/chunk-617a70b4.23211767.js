(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-617a70b4"],{"1c4f":function(e,t,i){"use strict";var n=i("6682"),a=i.n(n);a.a},"22ce":function(e,t,i){"use strict";var n=i("365c");t["a"]={queryList:function(e){return n["a"].post("/admin/meal/queryList",e)},queryTreeList:function(e){return n["a"].post("/admin/meal/queryTreeList",e)},del:function(e){return n["a"].post("/admin/meal/del",e)},saveOrUpdate:function(e){return n["a"].post("/admin/meal/saveOrUpdate",e)}}},"27eec":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"u-cash flex flex-column p-2 bg-bai"},[i("div",{staticClass:"u-bill flex-0 flex align-center"},[i("span",{staticClass:"u-bill__add el-icon-plus px-1",on:{click:e.addBill}}),e._v(" "),i("div",{staticClass:"u-bill__wrap inline-flex align-center bg-bai text-hui2"},e._l(e.bills,(function(t,n){return i("div",{key:t.name,staticClass:"flex-0",class:{"u-bill__active":t.id===e.billId},on:{click:function(i){e.billId=t.id}}},[i("div",{staticClass:"u-bill__item"},[i("span",{staticClass:"mr-1"},[e._v(e._s(t.title))]),e._v(" "),i("span",{staticClass:"el-icon-close text-base",on:{click:function(i){return i.stopPropagation(),e.delBill(n,t.id)}}})])])})),0)]),e._v(" "),i("div",{staticClass:"flex-1 flex flex-column bg-bai p-2"},[i("div",{staticClass:"flex-0 flex justify-between align-center"},[i("span",{staticClass:"u-add__btn flex-0",on:{click:e.showSkuChoose}},[e._v("添加商品/服务/活体")]),e._v(" "),i("el-input",{staticClass:"u-search",attrs:{size:"mini",placeholder:"请输入条形码","suffix-icon":"el-icon-search"},on:{focus:function(t){e.isStart=!1},blur:function(t){e.isStart=!0}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addSku(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),i("div",{staticClass:"mt-2 flex-1"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"element-loading-text":"商品查询中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0)",height:"calc(100vh - 320px)",data:e.activeBill.list}},[i("el-table-column",{attrs:{prop:"name",label:"商品/服务",width:"180",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{prop:"price",label:"单价(元)",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{prop:"count",label:"数量",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("el-input-number",{attrs:{"controls-position":"right",size:"small",min:1,max:99999},model:{value:n.quantity,callback:function(t){e.$set(n,"quantity",t)},expression:"row.quantity"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"小计(元)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",[e._v(e._s((n.quantity*n.price).toFixed(2)))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(t){return e.deleteSku(n)}}})]}}])}),e._v(" "),i("div",{attrs:{slot:"empty"},slot:"empty"},[e._v("请添加商品")])],1)],1)]),e._v(" "),i("div",{staticClass:"u-footer flex-0 flex align-center justify-between"},[i("div",[i("el-button",{attrs:{type:"primary",plain:""},on:{click:e.doEmpty}},[e._v("清空列表")])],1),e._v(" "),i("div",[i("button",{staticClass:"u-calc",on:{click:e.doSubmit}},[i("span",{staticClass:"mr-1"},[e._v("结算")]),e._v(" "),i("span",[e._v("¥")]),e._v(" "),i("span",{staticClass:"font-s-28"},[e._v(e._s(e.billTotal.toFixed(2)))])])])]),e._v(" "),i("sku-choose",{ref:"skuChoose",on:{close:function(t){e.isStart=!0},choose:e.handleAddSku}}),e._v(" "),i("el-dialog",{attrs:{title:"确认订单",width:"880px","close-on-click-modal":!1,visible:e.showConfrim},on:{"update:visible":function(t){e.showConfrim=t}}},[i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1 u-confirm__left"},[i("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:e.activeBill.list,height:"300"}},[i("el-table-column",{attrs:{prop:"name",label:"商品/服务"}}),e._v(" "),i("el-table-column",{attrs:{prop:"quantity",align:"center",label:"数量",width:"80"}}),e._v(" "),i("el-table-column",{attrs:{label:"小计(元)",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",[e._v(e._s((n.quantity*n.price).toFixed(2)))])]}}])})],1)],1),e._v(" "),i("div",{staticClass:"flex-1 u-confirm__right"},[i("div",{staticClass:"u-confirm__vip"},[i("div",{staticClass:"font-weight-bold mb-2 font-s-2"},[e._v("散客")]),e._v(" "),i("div",{staticClass:"text-right"},[i("el-checkbox",{attrs:{size:"mini"},model:{value:e.needPrint,callback:function(t){e.needPrint=t},expression:"needPrint"}},[e._v("打印小票")]),e._v(" "),i("el-input-number",{staticClass:"ml-1",staticStyle:{width:"80px"},attrs:{"controls-position":"right",size:"mini",min:1,max:10},model:{value:e.printCount,callback:function(t){e.printCount=t},expression:"printCount"}})],1)]),e._v(" "),i("div",{staticClass:"u-confirm__pay"})])]),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.showConfrim=!1}}},[e._v("确 定")])],1)])],1)},a=[],s=(i("ac6a"),i("75fc")),l=(i("7f7f"),i("c4c8")),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"u-sku-choose"},[i("el-dialog",{attrs:{"custom-class":"u-sku__dialog",width:"880px","close-on-click-modal":!1,visible:e.visible,"show-close":!1},on:{"update:visible":function(t){e.visible=t},close:e.handleClose}},[i("div",{staticClass:"flex align-center border-bottom-divider p-2",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"u-type",class:{"u-type__active":1===e.type},on:{click:function(t){e.type=1}}},[e._v("服务")]),e._v(" "),i("div",{staticClass:"u-type",class:{"u-type__active":2===e.type},on:{click:function(t){e.type=2}}},[e._v("商品")])]),e._v(" "),i("service-choose",{directives:[{name:"show",rawName:"v-show",value:1===e.type,expression:"type === 1"}],ref:"service",attrs:{select:e.serviceSelect},on:{"update:select":function(t){e.serviceSelect=t}}}),e._v(" "),i("product-choose",{directives:[{name:"show",rawName:"v-show",value:2===e.type,expression:"type === 2"}],ref:"product",attrs:{select:e.productSelect},on:{"update:select":function(t){e.productSelect=t}}}),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("span",{staticClass:"font-s-13"},[i("span",{staticClass:"mr-1"},[e._v("\n          已选服务:\n          "),i("span",{staticClass:"text-main"},[e._v(e._s(e.serviceSelect.length)+"件")])]),e._v(" "),i("span",{staticClass:"mr-1"},[e._v("\n          已选商品:\n          "),i("span",{staticClass:"text-main"},[e._v(e._s(e.productSelect.length)+"件")])])]),e._v(" "),i("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v("确 定")])],1)],1)],1)},o=[],c=i("2ef0"),u=i.n(c),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex border-bottom-divider"},[i("div",{staticClass:"u-sku__menu flex-0"},[i("el-tree",{ref:"tree",attrs:{data:e.serviceList,props:e.defaultProps,"highlight-current":"","current-node-key":e.menu.name,"node-key":"name"},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),i("div",{staticClass:"u-sku__list p-1 flex-1"},[i("div",{staticClass:"flex align-center justify-between pb-1"},[i("div",[e._v("所属分类："+e._s(e.menu.name))]),e._v(" "),i("el-input",{staticClass:"u-search",attrs:{size:"mini",placeholder:"搜索服务名称","suffix-icon":"el-icon-search"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getList(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),i("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{size:"small",data:e.list,"empty-text":"暂无服务","row-key":"id"},on:{"row-click":e.clickRow,"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center","reserve-selection":!0}}),e._v(" "),i("el-table-column",{attrs:{prop:"date",label:"服务内容",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"date",label:"服务类目",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.category)+"-"+e._s(t.row.mealName))]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"originalPrice",label:"原价(元)",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{prop:"memberPrice",label:"会员价(元)",align:"center"}})],1),e._v(" "),i("div",{staticClass:"u-page"},[i("el-pagination",{attrs:{small:"",background:"","current-page":e.pageNo,"page-sizes":[5,20,30,50],"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},f=[],p=i("22ce"),h={data:function(){return{keyword:"",pageNo:1,pageSize:5,totalCount:0,loading:!1,list:[],menu:{name:"全部服务"},serviceList:[{name:"全部服务"},{name:"洗澡",isCategory:!0,children:[]},{name:"美容",isCategory:!0,children:[]},{name:"寄养",isCategory:!0,children:[]},{name:"单项",isCategory:!0,children:[]},{name:"其他",isCategory:!0,children:[]}],defaultProps:{children:"children",label:"name"},selectedAll:[],selectedCurrent:[]}},mounted:function(){this.getMenuList(),this.getList()},methods:{clickRow:function(e){this.$refs.table.toggleRowSelection(e)},clear:function(){this.$refs.table.clearSelection()},handleSelectionChange:function(e){this.selectedCurrent=e,this.$emit("update:select",e)},handleNodeClick:function(e,t,i){e.isCategory?this.$refs.tree.setCurrentKey(this.menu.name):(this.menu=e,this.$refs.tree.setCurrentKey(e.name),this.pageNo=1,this.keyword="",this.getList())},getList:function(){var e=this,t={pageNo:this.pageNo,pageSize:this.pageSize,mealName:"",category:"",name:this.keyword};"全部服务"!==this.menu.name&&(this.menu.isCategory?t.category=this.menu.name:t.id=this.menu.id),p["a"].queryList(t).then((function(t){e.list=t.data.items,e.totalCount=t.data.totalCount}))},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.pageNo=e,this.getList()},getMenuList:function(){var e=this;p["a"].queryTreeList({pageSize:999,pageNo:1}).then((function(t){var i=u.a.get(t.data,"items",[]);e.serviceList.forEach((function(e){return e.children=[]})),i.forEach((function(t){var i={"洗澡":1,"美容":2,"寄养":3,"单项":4,"其他":5};e.serviceList[i[t.category]].children.push(t)}))}))}}},v=h,m=(i("6128"),i("2877")),g=Object(m["a"])(v,d,f,!1,null,"25bcbeaf",null),y=g.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex border-bottom-divider"},[i("div",{staticClass:"u-sku__menu flex-0"},[i("el-tree",{ref:"tree",attrs:{data:e.serviceList,props:e.defaultProps,"highlight-current":"","current-node-key":e.menu.categoryName,"node-key":"categoryName"},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),i("div",{staticClass:"u-sku__list p-1 flex-1"},[i("div",{staticClass:"flex align-center justify-between pb-1"},[i("div",[e._v("所属分类："+e._s(e.menu.categoryName))]),e._v(" "),i("el-input",{staticClass:"u-search",attrs:{size:"mini",placeholder:"搜索商品名称/条形码","suffix-icon":"el-icon-search"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getList(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),i("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{size:"small",data:e.list,"empty-text":"暂无商品","row-key":"id"},on:{"row-click":e.clickRow,"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center","reserve-selection":!0}}),e._v(" "),i("el-table-column",{attrs:{prop:"skuName",label:"商品名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.skuName))]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"stock",label:"库存",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{prop:"price",label:"价格(元)",align:"center"}})],1),e._v(" "),i("div",{staticClass:"u-page"},[i("el-pagination",{attrs:{small:"",background:"","current-page":e.pageNo,"page-sizes":[5,20,30,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},_=[],C=i("c405"),k={data:function(){return{keyword:"",pageNo:1,pageSize:5,totalCount:0,loading:!1,list:[],menu:{categoryName:"全部商品"},serviceList:[{categoryName:"全部商品"}],defaultProps:{children:"children",label:"categoryName"},selectedCurrent:[]}},mounted:function(){this.getMenuList(),this.getList()},methods:{clickRow:function(e){this.$refs.table.toggleRowSelection(e)},clear:function(){this.$refs.table.clearSelection()},handleSelectionChange:function(e){this.selectedCurrent=e,this.$emit("update:select",e)},handleNodeClick:function(e,t,i){this.menu.categoryName!==e.categoryName&&(this.menu=e,this.$refs.tree.setCurrentKey(e.categoryName),this.pageNo=1,this.keyword="",this.getList())},getList:function(){var e=this,t={pageNo:this.pageNo,pageSize:this.pageSize,categoryId:this.menu.id,keyword:this.keyword};l["a"].queryProductSkuList(t).then((function(t){e.list=t.data.items,e.totalCount=t.data.totalCount}))},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.pageNo=e,this.getList()},getMenuList:function(){var e=this;C["a"].queryProductCategory({pageSize:999,pageNo:1}).then((function(t){var i=u.a.get(t,"data",[]);e.serviceList=[].concat(Object(s["a"])(e.serviceList),Object(s["a"])(i))}))}}},w=k,S=(i("b88e"),Object(m["a"])(w,b,_,!1,null,"18ee4130",null)),x=S.exports,P={name:"SkuChoose",components:{ServiceChoose:y,ProductChoose:x},data:function(){return{serviceSelect:[],productSelect:[],visible:!1,type:1}},methods:{show:function(){var e=this;this.visible=!0,this.serviceSelect=[],this.productSelect=[],this.$nextTick((function(){e.$refs.service.clear(),e.$refs.product.clear()}))},handleConfirm:function(){this.$emit("choose",u.a.cloneDeep({serviceSelect:this.serviceSelect,productSelect:this.productSelect})),this.visible=!1},handleClose:function(){this.$emit("close")}}},N=P,z=(i("df02"),i("efe4"),Object(m["a"])(N,r,o,!1,null,"f786d944",null)),L=z.exports,q=function(e,t){return 0===t?{productType:t,name:e.skuName,imgUrl:e.skuImgUrl,quantity:1,originPrice:e.originPrice,price:e.price,skuId:e.id,id:e.id}:1===t?{productType:t,name:e.name+"-"+e.mealName+"-"+e.category,imgUrl:"",quantity:1,originPrice:e.originalPrice,price:e.originalPrice,skuId:"",id:e.id}:void 0},B={name:"Cashier",components:{SkuChoose:L},data:function(){return{printCount:1,needPrint:!1,showConfrim:!1,visible:!1,isStart:!0,loading:!1,keyword:"",bills:[],billId:""}},computed:{activeBill:function(){var e=this;return this.bills.filter((function(t){return t.id===e.billId}))[0]},billTotal:function(){var e=this.activeBill.list.reduce((function(e,t){return e+t.price*t.quantity}),0);return e}},created:function(){var e=this;this.addBill(),this._scanner=this.$scanner({callback:function(t){e.isStart&&t&&(e.keyword=t,e.addSku())}})},beforeDestroy:function(){this._scanner.cancel()},methods:{doEmpty:function(){this.activeBill.list=[]},handleAddSku:function(e){var t=e.serviceSelect,i=e.productSelect;i=i.map((function(e){return q(e,0)})),t=t.map((function(e){return q(e,1)}));var n=Object(s["a"])(t),a=this.activeBill.list;i.forEach((function(e){var t=a.filter((function(t){return t.id===e.id&&e.productType===t.productType}))[0];t?t.quantity+=1:n.push(e)})),this.activeBill.list=[].concat(Object(s["a"])(a),Object(s["a"])(n))},showSkuChoose:function(){this.$refs.skuChoose.show(),this.isStart=!1},recoverData:function(){},saveData:function(){},doSubmit:function(){0!==this.activeBill.list.length?this.showConfrim=!0:this.$message.warning("请先添加商品")},toggleSelection:function(e){var t=this;e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e,!0)}))},handleSelectionChange:function(e){this.activeBill.selected=e},addBill:function(){var e={id:this.uuid(),title:"账单",list:[],selected:[]};this.bills.push(e),this.billId=e.id},delBill:function(e,t){if(1!==this.bills.length){var i;if(this.billId===t)i=e>0?this.bills[e-1].id:this.bills[e+1].id,this.billId=i;this.bills.splice(e,1)}},deleteSku:function(e){this.activeBill.list=this.activeBill.list.filter((function(t){return t.productType!==e.productType||t.id!==e.id}))},addSku:function(){var e=this;this.loading=!0,l["a"].querySkuByCode({code:this.keyword}).then((function(t){if(t.data){var i=e.activeBill.list,n=t.data;n=q(n,0);var a=i.filter((function(e){return e.id===n.id&&n.productType===e.productType}))[0];a?a.quantity+=1:e.activeBill.list.push(n),e.keyword=""}else e.$message.warning("未查询到商品")})).catch((function(){})).finally((function(){e.loading=!1}))}}},$=B,O=(i("1c4f"),Object(m["a"])($,n,a,!1,null,"63ba005d",null));t["default"]=O.exports},"365c":function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var n=i("db72"),a=i("bc3a"),s=i.n(a),l=i("5c96"),r=i("4360"),o=i("5f87"),c=s.a.create({baseURL:"http://admin.petcdd.com",withCredentials:!0,timeout:5e3});c.interceptors.request.use((function(e){return r["a"].getters.token&&(e.headers["Authorization"]=Object(o["a"])()),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(Object(l["Message"])({message:t.message||"Error",type:"error",duration:5e3}),900===t.code&&"/login"!==window.gvm.$route.path&&l["MessageBox"].confirm("登录状态已经过期",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){r["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("接口异常"+e),Object(l["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.get(e,Object(n["a"])({params:t},i))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.post(e,t,i)},f={get:u,post:d}},6128:function(e,t,i){"use strict";var n=i("d942"),a=i.n(n);a.a},6682:function(e,t,i){},"9a06":function(e,t,i){},afc7:function(e,t,i){},b88e:function(e,t,i){"use strict";var n=i("9a06"),a=i.n(n);a.a},c405:function(e,t,i){"use strict";var n=i("365c");t["a"]={queryProductCategory:function(e){return n["a"].post("/admin/queryProductCategory",e)},saveOrUpdate:function(e){return n["a"].post("/admin/productCategory/saveOrUpdate",e)},del:function(e){return n["a"].get("/admin/productCategory/del",e)}}},c4c8:function(e,t,i){"use strict";var n=i("365c");t["a"]={queryProducts:function(e){return n["a"].post("/admin/queryProducts",e)},queryProductFullInfoById:function(e){return n["a"].get("/admin/queryProductFullInfoById",e)},queryProductCategory:function(e){return n["a"].post("/admin/queryProductCategory",e)},insertProduct:function(e){return n["a"].post("/admin/insertProduct",e)},updateProduct:function(e){return n["a"].post("/admin/updateProduct",e)},deleteProduct:function(e){return n["a"].post("/admin/deleteProduct",e)},querySkuByCode:function(e){return n["a"].get("/admin/querySku/byCode",e)},queryProductSkuList:function(e){return n["a"].post("/admin/queryProductSkuList",e)}}},d942:function(e,t,i){},df02:function(e,t,i){"use strict";var n=i("e5ea"),a=i.n(n);a.a},e5ea:function(e,t,i){},efe4:function(e,t,i){"use strict";var n=i("afc7"),a=i.n(n);a.a}}]);