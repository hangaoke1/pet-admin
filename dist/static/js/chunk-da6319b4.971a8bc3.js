(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da6319b4"],{"14e7":function(e,t,a){"use strict";var r=a("fc6e"),s=a.n(r);s.a},"439a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"u-storeOrder p-2"},[a("div",{staticClass:"bg-bai p-3"},[a("div",{staticClass:"pb-1 border-bottom-divider flex justify-between align-center"},[a("div",[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入订单号",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getList(t)}},model:{value:e.listQuery.orderId,callback:function(t){e.$set(e.listQuery,"orderId",t)},expression:"listQuery.orderId"}}),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{placeholder:"订单状态",clearable:"",size:"small"},on:{change:e.getList},model:{value:e.listQuery.orderStatus,callback:function(t){e.$set(e.listQuery,"orderStatus",t)},expression:"listQuery.orderStatus"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-date-picker",{staticClass:"filter-item",attrs:{type:"datetimerange","picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right",size:"small","default-time":["00:00:00","23:59:59"]},on:{change:e.getList},model:{value:e.listQuery.date,callback:function(t){e.$set(e.listQuery,"date",t)},expression:"listQuery.date"}})],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:e.getList}},[e._v("查询")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"mt-1",staticStyle:{width:"100%"},attrs:{data:e.list,size:"small","highlight-current-row":"","header-row-class-name":"u-tabel__header"}},[a("el-table-column",{attrs:{align:"center",label:"订单编号",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.reserveWash.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"预约时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.fmtDate(r.reserveWash.reserveTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"服务内容",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return e._l(JSON.parse(r.reserveWash.service),(function(e){return a("div",{key:e.id},[a("service-item",{attrs:{info:e}})],1)}))}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"服务对象",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("div",[e._v(e._s(r.petRecord.petName)+" "+e._s(e.sexMap[r.petRecord.sex]||"未知")+" "+e._s(e.getPetYear(r.petRecord.birthday)))]),e._v(" "),a("div",[a("el-tag",[e._v(e._s(r.petRecord.petBreed))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"订单金额",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v("¥ "+e._s(r.reserveWash.totalFee))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"实付金额",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v("¥ "+e._s(r.reserveWash.paidFee))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"订单状态",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",{style:{color:e.colorMap[r.reserveWash.reserveOrderStatus]}},[e._v(e._s(e.textMap[r.reserveWash.reserveOrderStatus]))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"宠物种类",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[1==r.petRecord.petType?a("el-tag",{attrs:{size:"medium"}},[e._v("狗")]):a("el-tag",{attrs:{size:"medium",type:"danger"}},[e._v("猫")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"预约人",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("div",[e._v(e._s(r.user.nickName))]),e._v(" "),a("div",[e._v(e._s(r.reserveWash.mobile))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(r.reserveWash.createTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"200",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{staticStyle:{color:"#0471CA"},attrs:{type:"text",size:"mini"},on:{click:function(t){return e.goDetail(r)}}},[e._v("查看详情")]),e._v(" "),100==r.reserveWash.reserveOrderStatus?a("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(t){return e.sendOrder(r)}}},[e._v("执行完成")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"u-page"},[a("el-pagination",{attrs:{background:"","current-page":e.pageNo,"page-sizes":[10,20,30,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},s=[],n=a("5a0c"),i=a.n(n),l=a("6724"),o=a("365c"),c={queryReserveWashList:function(e){return o["a"].post("/admin/queryReserveWashList",e)},finishReserveWash:function(e){return o["a"].post("/admin/finishReserveWash",e)}};function u(e){if(!e)return"未知";var t=i()(),a=i()(e),r=t.diff(a),s=r/864e5,n=Math.floor(s/365),l=s%365,o=Math.floor(l/30);return s=Math.floor(s%365%30),n?"".concat(n,"年").concat(o,"个月"):o?"".concat(o,"个月").concat(s,"天"):"".concat(s,"天")}var d=a("c466"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"u-serivceItem flex align-center p-1"},[a("el-image",{staticClass:"u-serviceItem__img mr-2 flex-0",attrs:{src:e._f("fmtWebp")(e.info.image),fit:"fill",lazy:"",webp:"","preview-src-list":[e.info.image]}}),e._v(" "),a("div",{staticClass:"mr-2 font-s-14"},[e._v(e._s(e.info.name))]),e._v(" "),a("div",[a("span",{staticClass:"font-s-1"},[e._v("¥")]),e._v(" "),a("span",{staticClass:"font-s-12"},[e._v(e._s(e.info.price))])])],1)},f=[],p={name:"ServiceItem",props:{info:{type:Object,default:function(){return{}}}}},m=p,h=(a("14e7"),a("2877")),g=Object(h["a"])(m,v,f,!1,null,"6507d5f4",null),_=g.exports,b={name:"StoreOrder",components:{ServiceItem:_},directives:{waves:l["a"]},data:function(){return{sexMap:{0:"公",1:"母"},textMap:{0:"待支付",100:"已预约",200:"已完成",900:"已取消"},colorMap:{0:"#F24957",100:"#FFAF0F",200:"#67C23A",900:"#909399"},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){e.$emit("pick",Object(d["b"])())}},{text:"最近一个月",onClick:function(e){e.$emit("pick",Object(d["a"])())}},{text:"最近三个月",onClick:function(e){e.$emit("pick",Object(d["a"])(-3))}}]},statusOptions:[{label:"待支付",value:0},{label:"已预约",value:100},{label:"已完成",value:200},{label:"已取消",value:900}],filterMore:!1,listQuery:{orderStatus:"",date:""},pageNo:1,pageSize:20,totalCount:0,loading:!1,list:[]}},beforeMount:function(){this.getList()},methods:{fmtDate:function(e){return i()(e).format("YYYY-MM-DD HH:mm")},getPetYear:function(e){return u(e)},goDetail:function(e){},sendOrder:function(e){var t=this,a=e.reserveWash.id;this.$confirm("该订单是否已服务完成?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c.finishReserveWash({orderId:a}).then((function(){e.reserveWash.reserveOrderStatus=200,t.$message({type:"success",message:"操作成功!"})})).catch((function(e){t.$message.error(e.message)}))})).catch((function(){}))},getList:function(){var e=this;this.loading=!0;var t="",a="";this.listQuery.date&&(t=i()(this.listQuery.date[0]).format("YYYY-MM-DD HH:mm:ss"),a=i()(this.listQuery.date[1]).format("YYYY-MM-DD HH:mm:ss")),c.queryReserveWashList({startTime:t,endTitme:a,orderId:this.listQuery.orderId,orderStatus:this.listQuery.orderStatus,pageNo:this.pageNo,pageSize:this.pageSize}).then((function(t){t=t.data,e.loading=!1,e.list=t.items,e.totalCount=t.totalCount})).catch((function(t){e.loading=!1,e.$message.error(t.message)}))},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.pageNo=e,this.getList()}}},y=b,w=(a("88fb"),Object(h["a"])(y,r,s,!1,null,"6abc376a",null));t["default"]=w.exports},"88fb":function(e,t,a){"use strict";var r=a("ea1c"),s=a.n(r);s.a},ea1c:function(e,t,a){},fc6e:function(e,t,a){}}]);