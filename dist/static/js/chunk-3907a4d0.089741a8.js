(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3907a4d0"],{"22ce":function(t,e,i){"use strict";var n=i("365c");e["a"]={queryList:function(t){return n["a"].post("/admin/meal/queryList",t)},queryTreeList:function(t){return n["a"].post("/admin/meal/queryTreeList",t)},del:function(t){return n["a"].get("/admin/meal/del",t)},saveOrUpdate:function(t){return n["a"].post("/admin/meal/saveOrUpdate",t)},onlineList:function(t){return n["a"].get("/pet/mealList",t)},onlineSaveOrUpdate:function(t){return n["a"].post("/admin/meal/alone/saveOrUpdate",t)},onlineDelete:function(t){return n["a"].get("/admin/meal/alone/del",t)}}},"27eec":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"u-cash flex flex-column p-2 bg-bai"},[i("div",{staticClass:"u-bill flex-0 flex align-center"},[i("span",{staticClass:"u-bill__add el-icon-plus px-1",on:{click:t.addBill}}),t._v(" "),i("div",{staticClass:"u-bill__wrap inline-flex align-center bg-bai text-hui2"},t._l(t.bills,(function(e,n){return i("div",{key:e.name,staticClass:"flex-0",class:{"u-bill__active":e.id===t.billId},on:{click:function(i){t.billId=e.id}}},[i("div",{staticClass:"u-bill__item"},[i("span",{staticClass:"mr-1"},[t._v(t._s(e.title))]),t._v(" "),i("span",{staticClass:"el-icon-close text-base",on:{click:function(i){return i.stopPropagation(),t.delBill(n,e.id)}}})])])})),0)]),t._v(" "),i("div",{staticClass:"flex-1 flex flex-column bg-bai p-2"},[i("div",{staticClass:"flex-0 flex justify-between align-center"},[i("span",{staticClass:"u-add__btn flex-0",on:{click:t.showSkuChoose}},[t._v("添加商品/服务/活体")]),t._v(" "),i("el-input",{staticClass:"u-search",attrs:{size:"mini",placeholder:"请输入条形码","suffix-icon":"el-icon-search"},on:{focus:function(e){t.isStart=!1},blur:function(e){t.isStart=!0}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addSku(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t._v(" "),i("div",{staticClass:"mt-2 flex-1"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"element-loading-text":"商品查询中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0)",height:"calc(100vh - 320px)",data:t.activeBill.list}},[i("el-table-column",{attrs:{prop:"name",label:"商品/服务",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"count",label:"数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[i("el-input-number",{staticStyle:{width:"80px"},attrs:{"controls-position":"right",size:"mini",min:1,max:99999},model:{value:n.quantity,callback:function(e){t.$set(n,"quantity",e)},expression:"row.quantity"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"price",label:"单价(元)",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(n.price.toFixed(2)))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"小计(元)",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[i("span",{staticClass:"font-weight-bold"},[t._v(t._s((n.quantity*n.price).toFixed(2)))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[i("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(e){return t.deleteSku(n)}}})]}}])}),t._v(" "),i("div",{attrs:{slot:"empty"},slot:"empty"},[t._v("请添加商品")])],1)],1)]),t._v(" "),i("div",{staticClass:"u-footer flex-0 flex align-center justify-between"},[i("div",[i("el-button",{staticClass:"yc-del",on:{click:t.doEmpty}},[t._v("清空列表")])],1),t._v(" "),i("div",[i("button",{staticClass:"u-calc",on:{click:t.doSubmit}},[i("span",{staticClass:"mr-1"},[t._v("结算")]),t._v(" "),i("span",[t._v("¥")]),t._v(" "),i("span",{staticClass:"font-s-28"},[t._v(t._s(t.billTotal.toFixed(2)))])])])]),t._v(" "),i("sku-choose",{ref:"skuChoose",on:{close:function(e){t.isStart=!0},choose:t.handleAddSku}}),t._v(" "),i("el-dialog",{attrs:{title:"确认订单",width:"880px","close-on-click-modal":!1,visible:t.showConfrim},on:{"update:visible":function(e){t.showConfrim=e}}},[i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-1 u-confirm__left"},[i("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:t.activeBill.list,height:"300"}},[i("el-table-column",{attrs:{prop:"name",label:"商品/服务"}}),t._v(" "),i("el-table-column",{attrs:{prop:"quantity",align:"center",label:"数量",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{label:"小计(元)",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[i("span",[t._v(t._s((n.quantity*n.price).toFixed(2)))])]}}])})],1)],1),t._v(" "),i("div",{staticClass:"flex-1 u-confirm__right"},[i("div",{staticClass:"u-confirm__vip"},[i("div",{staticClass:"font-weight-bold mb-2 font-s-2"},[t._v("散客")]),t._v(" "),i("div",{staticClass:"text-right"},[i("el-checkbox",{attrs:{size:"mini"},model:{value:t.needPrint,callback:function(e){t.needPrint=e},expression:"needPrint"}},[t._v("打印小票")]),t._v(" "),i("el-input-number",{staticClass:"ml-1",staticStyle:{width:"80px"},attrs:{"controls-position":"right",size:"mini",min:1,max:10},model:{value:t.printCount,callback:function(e){t.printCount=e},expression:"printCount"}})],1)]),t._v(" "),i("div",{staticClass:"u-confirm__pay"})])]),t._v(" "),i("span",{staticClass:"flex align-center justify-end",attrs:{slot:"footer"},slot:"footer"},[i("span",{staticClass:"mr-2"},[i("span",{staticClass:"font-s-14 text-hui2"},[t._v("实付金额：")]),t._v(" "),i("span",{staticClass:"font-s-14"},[t._v("¥")]),t._v(" "),i("span",{staticClass:"font-s-2 font-weight-bold"},[t._v(t._s(t.billTotal.toFixed(2)))])]),t._v(" "),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.doConfirm}},[t._v("确认结算")])],1)])],1)},a=[],s=(i("ac6a"),i("75fc")),r=i("db72"),o=(i("7f7f"),i("2f62")),c=(i("5a0c"),i("4d26")),l=i("c4c8"),u=i("73f5"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"u-sku-choose"},[i("el-dialog",{attrs:{"custom-class":"u-sku__dialog",width:"880px","close-on-click-modal":!1,visible:t.visible,"show-close":!1},on:{"update:visible":function(e){t.visible=e},close:t.handleClose}},[i("div",{staticClass:"flex align-center border-bottom-divider p-2",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"u-type",class:{"u-type__active":1===t.type},on:{click:function(e){t.type=1}}},[t._v("服务")]),t._v(" "),i("div",{staticClass:"u-type",class:{"u-type__active":2===t.type},on:{click:function(e){t.type=2}}},[t._v("商品")])]),t._v(" "),i("service-choose",{directives:[{name:"show",rawName:"v-show",value:1===t.type,expression:"type === 1"}],ref:"service",attrs:{select:t.serviceSelect},on:{"update:select":function(e){t.serviceSelect=e}}}),t._v(" "),i("product-choose",{directives:[{name:"show",rawName:"v-show",value:2===t.type,expression:"type === 2"}],ref:"product",attrs:{select:t.productSelect},on:{"update:select":function(e){t.productSelect=e}}}),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("span",{staticClass:"font-s-13"},[i("span",{staticClass:"mr-1"},[t._v("\n          已选服务:\n          "),i("span",{staticClass:"text-main"},[t._v(t._s(t.serviceSelect.length)+"件")])]),t._v(" "),i("span",{staticClass:"mr-1"},[t._v("\n          已选商品:\n          "),i("span",{staticClass:"text-main"},[t._v(t._s(t.productSelect.length)+"件")])])]),t._v(" "),i("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleConfirm}},[t._v("确 定")])],1)],1)],1)},f=[],h=i("2ef0"),p=i.n(h),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex border-bottom-divider"},[i("div",{staticClass:"u-sku__menu flex-0"},[i("el-tree",{ref:"tree",attrs:{data:t.serviceList,props:t.defaultProps,"highlight-current":"","current-node-key":t.menu.name,"node-key":"name"},on:{"node-click":t.handleNodeClick}})],1),t._v(" "),i("div",{staticClass:"u-sku__list p-1 flex-1",staticStyle:{width:"1px"}},[i("div",{staticClass:"flex align-center justify-between pb-1"},[i("div",[t._v("所属分类："+t._s(t.menu.name))]),t._v(" "),i("el-input",{staticClass:"u-search",attrs:{size:"mini",placeholder:"搜索服务名称","suffix-icon":"el-icon-search"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t._v(" "),i("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{size:"small",data:t.list,height:"350px","empty-text":"暂无服务","row-key":"id"},on:{"row-click":t.clickRow,"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center","reserve-selection":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"date",label:"服务内容",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"date",label:"服务类目",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.category)+"-"+t._s(e.row.mealName))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"originalPrice",label:"原价(元)",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"memberPrice",label:"会员价(元)",align:"center"}})],1),t._v(" "),i("div",{staticClass:"u-page"},[i("el-pagination",{attrs:{small:"",background:"","current-page":t.pageNo,"page-sizes":[10,20,30,50],"page-size":t.pageSize,layout:"total, prev, pager, next",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])},v=[],g=i("22ce"),y={data:function(){return{keyword:"",pageNo:1,pageSize:10,totalCount:0,loading:!1,list:[],menu:{name:"全部服务"},serviceList:[{name:"全部服务"},{name:"洗澡",isCategory:!0,children:[]},{name:"美容",isCategory:!0,children:[]},{name:"寄养",isCategory:!0,children:[]},{name:"单项",isCategory:!0,children:[]},{name:"其他",isCategory:!0,children:[]}],defaultProps:{children:"children",label:"name"},selectedAll:[],selectedCurrent:[]}},mounted:function(){this.getMenuList(),this.getList()},methods:{clickRow:function(t){this.$refs.table.toggleRowSelection(t)},clear:function(){this.$refs.table.clearSelection()},handleSelectionChange:function(t){this.selectedCurrent=t,this.$emit("update:select",t)},handleNodeClick:function(t,e,i){t.isCategory?this.$refs.tree.setCurrentKey(this.menu.name):(this.menu=t,this.$refs.tree.setCurrentKey(t.name),this.pageNo=1,this.keyword="",this.getList())},getList:function(){var t=this,e={pageNo:this.pageNo,pageSize:this.pageSize,mealName:"",category:"",name:this.keyword};"全部服务"!==this.menu.name&&(this.menu.isCategory?e.category=this.menu.name:e.id=this.menu.id),g["a"].queryList(e).then((function(e){t.list=e.data.items,t.totalCount=e.data.totalCount}))},handleSizeChange:function(t){this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.pageNo=t,this.getList()},getMenuList:function(){var t=this;g["a"].queryTreeList({pageSize:999,pageNo:1}).then((function(e){var i=p.a.get(e.data,"items",[]);t.serviceList.forEach((function(t){return t.children=[]})),i.forEach((function(e){var i={"洗澡":1,"美容":2,"寄养":3,"单项":4,"其他":5};t.serviceList[i[e.category]].children.push(e)}))}))}}},_=y,b=(i("cee6"),i("2877")),C=Object(b["a"])(_,m,v,!1,null,"eca25aac",null),k=C.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex border-bottom-divider"},[i("div",{staticClass:"u-sku__menu flex-0"},[i("el-tree",{ref:"tree",attrs:{data:t.serviceList,props:t.defaultProps,"highlight-current":"","current-node-key":t.menu.categoryName,"node-key":"categoryName"},on:{"node-click":t.handleNodeClick}})],1),t._v(" "),i("div",{staticClass:"u-sku__list p-1 flex-1",staticStyle:{width:"1px"}},[i("div",{staticClass:"flex align-center justify-between pb-1"},[i("div",[t._v("所属分类："+t._s(t.menu.categoryName))]),t._v(" "),i("el-input",{staticClass:"u-search",attrs:{size:"mini",placeholder:"搜索商品名称/条形码","suffix-icon":"el-icon-search"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t._v(" "),i("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{size:"small",data:t.list,height:"350px","empty-text":"暂无商品","row-key":"id"},on:{"row-click":t.clickRow,"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center","reserve-selection":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"skuName",label:"图片",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-image",{staticStyle:{width:"40px",height:"40px"},attrs:{src:t.url2Webp(e.row.skuImgUrl),webp:""}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"skuName",label:"商品名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.skuName))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"stock",label:"库存",align:"center",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"price",label:"价格(元)",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.price.toFixed(2)))]}}])})],1),t._v(" "),i("div",{staticClass:"u-page"},[i("el-pagination",{attrs:{small:"",background:"","current-page":t.pageNo,"page-sizes":[10,20,30,50],"page-size":t.pageSize,layout:"total, prev, pager, next",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])},S=[],$=i("c405"),x={data:function(){return{keyword:"",pageNo:1,pageSize:10,totalCount:0,loading:!1,list:[],menu:{categoryName:"全部商品"},serviceList:[{categoryName:"全部商品"}],defaultProps:{children:"children",label:"categoryName"},selectedCurrent:[]}},mounted:function(){this.getMenuList(),this.getList()},methods:{clickRow:function(t){this.$refs.table.toggleRowSelection(t)},clear:function(){this.$refs.table.clearSelection()},handleSelectionChange:function(t){this.selectedCurrent=t,this.$emit("update:select",t)},handleNodeClick:function(t,e,i){this.menu.categoryName!==t.categoryName&&(this.menu=t,this.$refs.tree.setCurrentKey(t.categoryName),this.pageNo=1,this.keyword="",this.getList())},getList:function(){var t=this,e={pageNo:this.pageNo,pageSize:this.pageSize,categoryId:this.menu.id,keyword:this.keyword};l["a"].queryProductSkuList(e).then((function(e){t.list=e.data.items,t.totalCount=e.data.totalCount}))},handleSizeChange:function(t){this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.pageNo=t,this.getList()},getMenuList:function(){var t=this;$["a"].queryProductCategory({pageSize:999,pageNo:1}).then((function(e){var i=p.a.get(e,"data",[]);t.serviceList=[].concat(Object(s["a"])(t.serviceList),Object(s["a"])(i))}))}}},L=x,O=(i("422a"),Object(b["a"])(L,w,S,!1,null,"5c973f14",null)),D=O.exports,z={name:"SkuChoose",components:{ServiceChoose:k,ProductChoose:D},data:function(){return{serviceSelect:[],productSelect:[],visible:!1,type:1}},methods:{show:function(){var t=this;this.visible=!0,this.serviceSelect=[],this.productSelect=[],this.$nextTick((function(){t.$refs.service.clear(),t.$refs.product.clear()}))},handleConfirm:function(){this.$emit("choose",p.a.cloneDeep({serviceSelect:this.serviceSelect,productSelect:this.productSelect})),this.visible=!1},handleClose:function(){this.$emit("close")}}},M=z,N=(i("df02"),i("efe4"),Object(b["a"])(M,d,f,!1,null,"f786d944",null)),P=N.exports,q=function(t,e){return 0===e?{productType:e,name:t.skuName,imgUrl:t.skuImgUrl,quantity:1,originPrice:t.originPrice,price:t.price,skuId:t.id,id:t.id}:1===e?{productType:e,name:t.name+"-"+t.mealName+"-"+t.category,imgUrl:"",quantity:1,originPrice:t.originalPrice,price:t.originalPrice,skuId:"",id:t.id}:void 0},T={name:"Cashier",components:{SkuChoose:P},data:function(){return{printCount:1,needPrint:!1,showConfrim:!1,visible:!1,isStart:!0,loading:!1,keyword:"",bills:[],billId:""}},computed:Object(r["a"])({},Object(o["c"])({storeInfo:function(t){return t.store.store}}),{activeBill:function(){var t=this;return this.bills.filter((function(e){return e.id===t.billId}))[0]},billTotal:function(){var t=this.activeBill.list.reduce((function(t,e){return t+e.price*e.quantity}),0);return t}}),watch:{needPrint:function(t){}},created:function(){var t=this;this.addBill(),this._scanner=this.$scanner({callback:function(e){t.isStart&&e&&(t.keyword=e,t.addSku())}})},beforeDestroy:function(){this._scanner.cancel()},methods:{doEmpty:function(){this.activeBill.list=[]},handleAddSku:function(t){var e=t.serviceSelect,i=t.productSelect;i=i.map((function(t){return q(t,0)})),e=e.map((function(t){return q(t,1)}));var n=Object(s["a"])(e),a=this.activeBill.list;i.forEach((function(t){var e=a.filter((function(e){return e.id===t.id&&t.productType===e.productType}))[0];e?e.quantity+=1:n.push(t)})),this.activeBill.list=[].concat(Object(s["a"])(a),Object(s["a"])(n))},showSkuChoose:function(){this.$refs.skuChoose.show(),this.isStart=!1},recoverData:function(){},saveData:function(){},doSubmit:function(){0!==this.activeBill.list.length?this.showConfrim=!0:this.$message.warning("请先添加商品")},doConfirm:function(){var t=this,e=this.billTotal,i=this.activeBill.list.reduce((function(t,e){return t+e.quantity}),0),n={uid:"",storeId:this.storeInfo.id,totalFee:e,discountFee:0,paidFee:e,skuCount:i,remark:"",skuJsonString:this.activeBill.list.map((function(t){return t.discountFee=0,t.paidFee=t.price*t.quantity,t.totalFee=t.price*t.quantity,t}))};u["a"].insertOrder(n).then((function(e){if(t.$notify({title:"成功",message:"下单完成",type:"success"}),t.showConfrim=!1,t.activeBill.list=[],t.needPrint){var i=Object(r["a"])({},n,{orderId:e.data});Object(c["a"])(t.storeInfo,i)}}))},toggleSelection:function(t){var e=this;t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t,!0)}))},handleSelectionChange:function(t){this.activeBill.selected=t},addBill:function(){var t={id:this.uuid(),title:"账单",list:[],selected:[]};this.bills.push(t),this.billId=t.id},delBill:function(t,e){if(1!==this.bills.length){var i;if(this.billId===e)i=t>0?this.bills[t-1].id:this.bills[t+1].id,this.billId=i;this.bills.splice(t,1)}},deleteSku:function(t){this.activeBill.list=this.activeBill.list.filter((function(e){return e.productType!==t.productType||e.id!==t.id}))},addSku:function(){var t=this;this.loading=!0,l["a"].querySkuByCode({code:this.keyword}).then((function(e){if(e.data){var i=t.activeBill.list,n=e.data;n=q(n,0);var a=i.filter((function(t){return t.id===n.id&&n.productType===t.productType}))[0];a?a.quantity+=1:t.activeBill.list.push(n),t.keyword=""}else t.$message.warning("未查询到商品")})).catch((function(){})).finally((function(){t.loading=!1}))}}},I=T,B=(i("5042"),Object(b["a"])(I,n,a,!1,null,"20a14100",null));e["default"]=B.exports},"422a":function(t,e,i){"use strict";var n=i("cede"),a=i.n(n);a.a},"4d26":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("7f7f");var n=i("5a0c"),a=i.n(n),s=i("5124"),r=function(t,e){var i=e.orderId,n=a()().format("YYYY-MM-DD HH:mm:ss"),r=e.skuJsonString.map((function(t){return'\n            <div style="display: flex;margin-top: 2mm;">\n              <div style="width: 30mm;font-size: 9pt;">'.concat(t.name,'</div>\n              <div style="width: 21mm;text-align:center;font-size: 9pt;">').concat(t.quantity,'</div>\n              <div style="width: 21mm;text-align:center;font-size: 9pt;">').concat(t.price.toFixed(2),"</div>\n            </div>")})).join("\n"),o=Object(s["a"])();o.SET_PRINT_STYLE("FontSize",8),o.ADD_PRINT_HTM(0,0,"100%","100%",'<div>\n      <h1  style="font-size: 16pt;text-align: center">'.concat(t.storeName,'</h1>\n      <div style="margin-bottom: 2mm;font-size: 10pt;">订单号：').concat(i,'</div>\n      <div style="font-size: 10pt;">收银员：').concat(t.storeName,'</div>\n      <div style="padding: 2mm 0;font-size: 10pt;">= = = = = = = = = = = = = = = = = = = = = = =</div>\n      <div style="display: flex">\n        <div style="width: 30mm;font-size: 9pt;">商品名称</div>\n        <div style="width: 21mm;text-align:center;font-size: 9pt;">数量</div>\n        <div style="width: 21mm;text-align:center;font-size: 9pt;">单价</div>\n      </div>\n      ').concat(r,'\n      <div style="padding: 2mm 0;font-size: 10pt;">= = = = = = = = = = = = = = = = = = = = = = =</div>\n      <div style="margin-bottom: 2mm;font-size: 10pt;">收款金额：').concat(e.paidFee.toFixed(2),'元</div>\n      <div style="margin-bottom: 2mm;font-size: 10pt;">店铺地址：').concat(t.address||"浙江省杭州市滨江区滨盛路1893号",'</div>\n      <div style="margin-bottom: 2mm;font-size: 10pt;">联系方式：').concat(t.mobile,'</div>\n      <div style="margin-bottom: 2mm;font-size: 10pt;">下单时间：').concat(n,'</div>\n      <img border="0" src="').concat(t.qrCode,'" style="width: 40mm;height:auto;" /> \n    </div>')),o.SET_PRINT_PAGESIZE(3,720,45,""),o.PRINT()}},5042:function(t,e,i){"use strict";var n=i("bd4c"),a=i.n(n);a.a},5124:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return l}));i("4917");var n,a=i("2b0e"),s=new a["default"];function r(){s.$confirm("当前设备未安装打印控件，无法打印，是否开始安装?","提示",{confirmButtonText:"立即安装",cancelButtonText:"取消",type:"warning"}).then((function(){window.open("http://mall.gohipet.com/download/CLodop_Setup_for_Win32NT.exe")})).catch((function(){}))}function o(){try{var t=navigator.userAgent;if(t.match(/Windows\sPhone/i))return!0;if(t.match(/iPhone|iPod|iPad/i))return!0;if(t.match(/Android/i))return!0;if(t.match(/Edge\D?\d+/i))return!0;var e=t.match(/Trident\D?\d+/i),i=t.match(/MSIE\D?\d+/i),n=t.match(/OPR\D?\d+/i),a=t.match(/Firefox\D?\d+/i),s=t.match(/x64/i);if(!e&&!i&&s)return!0;if(a){if(a=a[0].match(/\d+/),a[0]>=41||s)return!0}else if(n){if(n=n[0].match(/\d+/),n[0]>=32)return!0}else if(!e&&!i){var r=t.match(/Chrome\D?\d+/i);if(r&&(r=r[0].match(/\d+/),r[0]>=41))return!0}return!1}catch(o){return!0}}function c(){if("loading"!=n&&"complete"!=n){n="loading";var t=document.head||document.getElementsByTagName("head")[0]||document.documentElement,e=document.createElement("script"),i=document.createElement("script");e.src="http://localhost:8000/CLodopfuncs.js?priority=1",i.src="http://localhost:18000/CLodopfuncs.js",e.onload=i.onload=function(){n="complete"},e.onerror=i.onerror=function(t){n="complete"},t.insertBefore(e,t.firstChild),t.insertBefore(i,t.firstChild),!!(e.src+i.src).match(/\/\/localho|\/\/127.0.0./i)}}function l(t,e){var i;try{var a=navigator.userAgent;!!a.match(/MSIE/i)||a.match(/Trident/i);if(o()){try{i=getCLodop()}catch(s){}if(!i&&"complete"!==n)return void("loading"==n?alert("网页还没下载完毕，请稍等一下再操作."):alert("没有加载CLodop的主js，请先调用loadCLodop过程."));if(!i)return void r()}return i}catch(s){alert("getLodop出错:"+s)}}o()&&c()},"5a0c":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";var t="millisecond",e="second",i="minute",n="hour",a="day",s="week",r="month",o="quarter",c="year",l=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,u=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},f={s:d,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),a=i%60;return(e<=0?"+":"-")+d(n,2,"0")+":"+d(a,2,"0")},m:function(t,e){var i=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(i,r),a=e-n<0,s=t.clone().add(i+(a?-1:1),r);return Number(-(i+(e-n)/(a?n-s:s-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:r,y:c,w:s,d:a,D:"date",h:n,m:i,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p="en",m={};m[p]=h;var v=function(t){return t instanceof b},g=function(t,e,i){var n;if(!t)return p;if("string"==typeof t)m[t]&&(n=t),e&&(m[t]=e,n=t);else{var a=t.name;m[a]=t,n=a}return i||(p=n),n},y=function(t,e,i){if(v(t))return t.clone();var n=e?"string"==typeof e?{format:e,pl:i}:e:{};return n.date=t,new b(n)},_=f;_.l=g,_.i=v,_.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var b=function(){function d(t){this.$L=this.$L||g(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n)return i?new Date(Date.UTC(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)):new Date(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return _},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var i=y(t);return this.startOf(e)<=i&&i<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,i){return _.u(t)?this[e]:this.set(i,t)},f.year=function(t){return this.$g(t,"$y",c)},f.month=function(t){return this.$g(t,"$M",r)},f.day=function(t){return this.$g(t,"$W",a)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",n)},f.minute=function(t){return this.$g(t,"$m",i)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var l=this,u=!!_.u(o)||o,d=_.p(t),f=function(t,e){var i=_.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return u?i:i.endOf(a)},h=function(t,e){return _.w(l.toDate()[t].apply(l.toDate(),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},p=this.$W,m=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case c:return u?f(1,0):f(31,11);case r:return u?f(1,m):f(0,m+1);case s:var y=this.$locale().weekStart||0,b=(p<y?p+7:p)-y;return f(u?v-b:v+(6-b),m);case a:case"date":return h(g+"Hours",0);case n:return h(g+"Minutes",1);case i:return h(g+"Seconds",2);case e:return h(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var l,u=_.p(s),d="set"+(this.$u?"UTC":""),f=(l={},l[a]=d+"Date",l.date=d+"Date",l[r]=d+"Month",l[c]=d+"FullYear",l[n]=d+"Hours",l[i]=d+"Minutes",l[e]=d+"Seconds",l[t]=d+"Milliseconds",l)[u],h=u===a?this.$D+(o-this.$W):o;if(u===r||u===c){var p=this.clone().set("date",1);p.$d[f](h),p.init(),this.$d=p.set("date",Math.min(this.$D,p.daysInMonth())).toDate()}else f&&this.$d[f](h);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[_.p(t)]()},f.add=function(t,o){var l,u=this;t=Number(t);var d=_.p(o),f=function(e){var i=y(u);return _.w(i.date(i.date()+Math.round(e*t)),u)};if(d===r)return this.set(r,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===a)return f(1);if(d===s)return f(7);var h=(l={},l[i]=6e4,l[n]=36e5,l[e]=1e3,l)[d]||1,p=this.$d.getTime()+t*h;return _.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=_.z(this),a=this.$locale(),s=this.$H,r=this.$m,o=this.$M,c=a.weekdays,l=a.months,d=function(t,n,a,s){return t&&(t[n]||t(e,i))||a[n].substr(0,s)},f=function(t){return _.s(s%12||12,t,"0")},h=a.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:_.s(o+1,2,"0"),MMM:d(a.monthsShort,o,l,3),MMMM:l[o]||l(this,i),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:d(a.weekdaysMin,this.$W,c,2),ddd:d(a.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:_.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,r,!0),A:h(s,r,!1),m:String(r),mm:_.s(r,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:n};return i.replace(u,(function(t,e){return e||p[t]||n.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,l,u){var d,f=_.p(l),h=y(t),p=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,v=_.m(this,h);return v=(d={},d[c]=v/12,d[r]=v,d[o]=v/3,d[s]=(m-p)/6048e5,d[a]=(m-p)/864e5,d[n]=m/36e5,d[i]=m/6e4,d[e]=m/1e3,d)[f]||m,u?v:_.a(v)},f.daysInMonth=function(){return this.endOf(r).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=g(t,e,!0);return n&&(i.$L=n),i},f.clone=function(){return _.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}();return y.prototype=b.prototype,y.extend=function(t,e){return t(e,b,y),y},y.locale=g,y.isDayjs=v,y.unix=function(t){return y(1e3*t)},y.en=m[p],y.Ls=m,y}))},"73f5":function(t,e,i){"use strict";var n=i("365c");e["a"]={queryStore:function(t){return n["a"].get("/admin/queryStore",t)},saveOrUpdateStore:function(t){return n["a"].post("/admin/saveOrUpdateStore",t)},queryReserveWashList:function(t){return n["a"].post("/admin/queryReserveWashList",t)},finishReserveWash:function(t){return n["a"].post("/admin/finishReserveWash",t)},insertOrder:function(t){return n["a"].post("/admin/store/insertOrder",t)},queryList:function(t){return n["a"].post("/admin/store/queryList",t)}}},afc7:function(t,e,i){},bd4c:function(t,e,i){},c405:function(t,e,i){"use strict";var n=i("365c");e["a"]={queryProductCategory:function(t){return n["a"].post("/admin/queryProductCategory",t)},saveOrUpdate:function(t){return n["a"].post("/admin/productCategory/saveOrUpdate",t)},del:function(t){return n["a"].get("/admin/productCategory/del",t)}}},c4c8:function(t,e,i){"use strict";var n=i("365c");e["a"]={queryProducts:function(t){return n["a"].post("/admin/queryProducts",t)},queryProductFullInfoById:function(t){return n["a"].get("/admin/queryProductFullInfoById",t)},queryProductCategory:function(t){return n["a"].post("/admin/queryProductCategory",t)},insertProduct:function(t){return n["a"].post("/admin/insertProduct",t)},updateProduct:function(t){return n["a"].post("/admin/updateProduct",t)},deleteProduct:function(t){return n["a"].post("/admin/deleteProduct",t)},querySkuByCode:function(t){return n["a"].get("/admin/querySku/byCode",t)},queryProductSkuList:function(t){return n["a"].post("/admin/queryProductSkuList",t)}}},cede:function(t,e,i){},cee6:function(t,e,i){"use strict";var n=i("e2a2"),a=i.n(n);a.a},df02:function(t,e,i){"use strict";var n=i("e5ea"),a=i.n(n);a.a},e2a2:function(t,e,i){},e5ea:function(t,e,i){},efe4:function(t,e,i){"use strict";var n=i("afc7"),a=i.n(n);a.a}}]);