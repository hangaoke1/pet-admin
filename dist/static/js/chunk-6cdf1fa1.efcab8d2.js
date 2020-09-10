(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cdf1fa1"],{"426e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"u-shopOrder"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入订单号",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getList(t)}},model:{value:e.listQuery.orderId,callback:function(t){e.$set(e.listQuery,"orderId",t)},expression:"listQuery.orderId"}}),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{placeholder:"订单状态",clearable:"",size:"small"},on:{change:e.getList},model:{value:e.listQuery.orderStatus,callback:function(t){e.$set(e.listQuery,"orderStatus",t)},expression:"listQuery.orderStatus"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-date-picker",{staticClass:"filter-item",attrs:{type:"datetimerange","picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right",size:"small","default-time":["00:00:00","23:59:59"]},on:{change:e.getList},model:{value:e.listQuery.date,callback:function(t){e.$set(e.listQuery,"date",t)},expression:"listQuery.date"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:e.getList}},[e._v("查询")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":"","header-row-class-name":"u-tabel__header"}},[a("el-table-column",{attrs:{label:"订单编号",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("span",[e._v(e._s(s.order.orderId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品详情"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("div",{staticClass:"u-product__list"},e._l(s.orderItemList,(function(t){return a("div",{key:t.id,staticClass:"u-product__item"},[a("el-image",{staticClass:"u-sku__img",staticStyle:{width:"50px",height:"50px"},attrs:{src:t.productSku.skuImgUrl,fit:"fill",lazy:"",webp:"","preview-src-list":[t.productSku.skuImgUrl]}}),e._v(" "),a("div",{staticClass:"u-sku__name"},[a("div",[e._v(e._s(t.productSku.skuName))]),e._v(" "),a("div",{staticClass:"u-sku__specs"},[e._v(e._s(e.getSpecs(t.productSku)))])]),e._v(" "),a("div",{staticClass:"u-sku__price"},[e._v("¥"+e._s(t.productSku.price))]),e._v(" "),a("div",{staticClass:"u-sku__quantity"},[e._v("x"+e._s(t.quantity))])],1)})),0)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单状态",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("div",{staticClass:"u-orderStatus",style:{color:e.colorMap[s.order.orderStatus]}},[e._v(e._s(e.textMap[s.order.orderStatus]))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单总价(元)",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("div",{staticClass:"u-totalFee"},[e._v(e._s(s.order.totalFee))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收货地址"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("div",{staticClass:"u-address"},[a("span",[e._v(e._s(s.userAddress.province))]),e._v(" "),a("span",[e._v(e._s(s.userAddress.city))]),e._v(" "),a("span",[e._v(e._s(s.userAddress.area))]),e._v(" "),a("span",[e._v(e._s(s.userAddress.detail))])]),e._v(" "),a("div",[a("span",{staticClass:"u-contact"},[e._v(e._s(s.userAddress.contact))]),e._v(" "),a("span",{staticClass:"u-mobile"},[e._v(e._s(s.userAddress.mobile))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单备注"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("div",{staticClass:"u-buyerMemo"},[e._v(e._s(s.order.buyerMemo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("div",{staticClass:"u-createTime"},[e._v(e._s(s.order.createTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"250",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("查看详情")]),e._v(" "),200==s.order.orderStatus?a("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(t){return e.sendOrder(s)}}},[e._v("发货")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"u-page"},[a("el-pagination",{attrs:{background:"","current-page":e.pageNo,"page-sizes":[10,30,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},r=[],i=(a("7f7f"),a("5a0c")),n=a.n(i),l=a("6724"),o=a("b775");function u(e){return Object(o["a"])({url:"/admin/queryOrder",method:"post",data:e})}function c(e){return Object(o["a"])({url:"/admin/shipOrder",method:"post",data:e})}var d=a("c466"),p={name:"shopOrder",directives:{waves:l["a"]},data:function(){return{textMap:{100:"待支付",200:"待发货",300:"待收货",400:"已完成",900:"已取消"},colorMap:{100:"#F24957",200:"#FFAF0F",300:"#409EFF",400:"#67C23A",900:"#909399"},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){e.$emit("pick",Object(d["b"])())}},{text:"最近一个月",onClick:function(e){e.$emit("pick",Object(d["a"])())}},{text:"最近三个月",onClick:function(e){e.$emit("pick",Object(d["a"])(-3))}}]},statusOptions:[{label:"待支付",value:100},{label:"待发货",value:200},{label:"待收货",value:300},{label:"已完成",value:400},{label:"已取消",value:900}],filterMore:!1,listQuery:{orderStatus:"",date:""},pageNo:1,pageSize:10,totalCount:0,loading:!1,list:[]}},beforeMount:function(){this.getList()},methods:{sendOrder:function(e){var t=this,a=e.order.orderId;this.$confirm("该订单是否已经发货?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c({orderId:a}).then((function(a){e.order.orderStatus=300,t.$message({type:"success",message:"操作成功!"})})).catch((function(e){t.$message.error(e.message)}))})).catch((function(){}))},getSpecs:function(e){return e.specs.map((function(e){return e.name+"/"+e.value})).join("/")},getList:function(){var e=this;this.loading=!0;var t="",a="";this.listQuery.date&&(t=n()(this.listQuery.date[0]).format("YYYY-MM-DD HH:mm:ss"),a=n()(this.listQuery.date[1]).format("YYYY-MM-DD HH:mm:ss")),u({startTime:t,endTitme:a,orderId:this.listQuery.orderId,orderStatus:this.listQuery.orderStatus,pageNo:this.pageNo,pageSize:this.pageSize}).then((function(t){e.loading=!1,e.list=t.items,e.totalCount=t.totalCount})).catch((function(t){e.loading=!1,e.$message.error(t.message)}))},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.pageNo=e,this.getList()}}},v=p,_=(a("90cb"),a("2877")),f=Object(_["a"])(v,s,r,!1,null,"ee2dbcf0",null);t["default"]=f.exports},"90cb":function(e,t,a){"use strict";var s=a("f15e"),r=a.n(s);r.a},f15e:function(e,t,a){}}]);