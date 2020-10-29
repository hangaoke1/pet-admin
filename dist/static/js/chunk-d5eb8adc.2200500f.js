(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5eb8adc"],{"36d8":function(e,t,r){},e49c:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-2"},[e.orderInfo?r("div",{staticClass:"bg-bai p-3"},[r("el-steps",{attrs:{active:e.process,"align-center":"","process-status":"process"}},e._l(e.stepOptions,(function(e){return r("el-step",{key:e,attrs:{title:e}})})),1),e._v(" "),r("div",{staticClass:"my-2 p-2 flex align-center flex-column justify-center bg-card"},[r("div",{staticClass:"mb-2"},[e._v("\n        订单状态：\n        "),r("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.statusMap[e.orderInfo.order.orderStatus]))])]),e._v(" "),r("div",[r("el-button",{staticClass:"yc-edit",on:{click:e.updateAddress}},[e._v("修改收货人信息")]),e._v(" "),900!==e.orderInfo.order.orderStatus?r("el-button",{staticClass:"yc-del",on:{click:e.closeOrder}},[e._v("关闭订单")]):e._e(),e._v(" "),r("el-button",{staticClass:"yc-del",on:{click:e.showLogistics}},[e._v("物流查询")]),e._v(" "),r("el-button",{staticClass:"yc-del",on:{click:e.addRemark}},[e._v("备注订单")])],1)]),e._v(" "),r("div",[r("div",{staticClass:"u-title"},[e._v("基本信息")]),e._v(" "),r("div",{staticClass:"u-table"},[r("el-table",{attrs:{data:[e.orderInfo.order]}},[r("el-table-column",{attrs:{prop:"orderId",label:"订单号",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"nickName",label:"用户账号",align:"center"}},[[r("span",[e._v(e._s(e.orderInfo.user.nickName))])]],2),e._v(" "),r("el-table-column",{attrs:{prop:"payType",label:"支付方式",align:"center"}},[[r("span",[e._v("微信")])]],2),e._v(" "),r("el-table-column",{attrs:{prop:"logisticsName",label:"物流公司",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"logisticsNo",label:"物流单号",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"sellerMemo",label:"备注",align:"center"}})],1)],1),e._v(" "),r("div",{staticClass:"u-title"},[e._v("收货人信息")]),e._v(" "),r("div",{staticClass:"u-table"},[r("el-table",{attrs:{data:[e.orderInfo.userAddress]}},[r("el-table-column",{attrs:{prop:"contact",label:"收货人",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"mobile",label:"手机号",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"address",label:"收货地址",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.province))]),e._v(" "),r("span",[e._v(e._s(n.city))]),e._v(" "),r("span",[e._v(e._s(n.area))]),e._v(" "),r("span",[e._v(e._s(n.detail))])]}}],null,!1,802794509)})],1)],1),e._v(" "),r("div",{staticClass:"u-title"},[e._v("商品信息")]),e._v(" "),r("div",{staticClass:"u-table"},[r("el-table",{attrs:{data:e.orderInfo.orderItemList}},[r("el-table-column",{attrs:{prop:"skuCode",label:"商品编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.productSku.skuCode))]}}],null,!1,685642359)}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"商品图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:e._f("fmtWebp")(n.productSku.skuImgUrl),lazy:"",webp:""}})]}}],null,!1,126838373)}),e._v(" "),r("el-table-column",{attrs:{label:"商品规格",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("div",e._l(n.productSku.specs,(function(t){return r("div",{key:t.type},[e._v(e._s(t.name)+e._s(t.value))])})),0)]}}],null,!1,4249956912)}),e._v(" "),r("el-table-column",{attrs:{label:"价格",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.productSku.price.toFixed(2)))])]}}],null,!1,1040042481)}),e._v(" "),r("el-table-column",{attrs:{prop:"quantity",label:"数量",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"totalFee",label:"小计(元)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.totalFee.toFixed(2)))])]}}],null,!1,1013490256)})],1)],1),e._v(" "),r("div",{staticClass:"u-title"},[e._v("费用信息")]),e._v(" "),r("div",{staticClass:"u-table"},[r("el-table",{attrs:{data:[e.orderInfo.order]}},[r("el-table-column",{attrs:{prop:"totalFee",label:"商品合计",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.totalFee.toFixed(2)))])]}}],null,!1,1013490256)}),e._v(" "),r("el-table-column",{attrs:{prop:"postFee",label:"运费",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.postFee.toFixed(2)))])]}}],null,!1,1814022666)}),e._v(" "),r("el-table-column",{attrs:{prop:"discountFee",label:"优惠券",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.discountFee.toFixed(2)))])]}}],null,!1,2746461935)}),e._v(" "),r("el-table-column",{attrs:{prop:"totalFee",label:"订单总金额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.totalFee.toFixed(2)))])]}}],null,!1,1013490256)}),e._v(" "),r("el-table-column",{attrs:{prop:"paidFee",label:"应付款金额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(n.paidFee.toFixed(2)))])]}}],null,!1,1933478478)})],1)],1)])],1):e._e(),e._v(" "),r("el-dialog",{attrs:{title:"收货地址",visible:e.receiverFormVisible},on:{"update:visible":function(t){e.receiverFormVisible=t}}},[r("el-form",{attrs:{model:e.receiverForm,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"收货人"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.receiverForm.contact,callback:function(t){e.$set(e.receiverForm,"contact",t)},expression:"receiverForm.contact"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联系方式"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.receiverForm.mobile,callback:function(t){e.$set(e.receiverForm,"mobile",t)},expression:"receiverForm.mobile"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"地址"}},[r("yc-address",{staticStyle:{width:"250px"},model:{value:e.receiverForm.addressList,callback:function(t){e.$set(e.receiverForm,"addressList",t)},expression:"receiverForm.addressList"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"地址详情"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.receiverForm.detail,callback:function(t){e.$set(e.receiverForm,"detail",t)},expression:"receiverForm.detail"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.receiverFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmUpdateAddress}},[e._v("确 定")])],1)],1),e._v(" "),r("el-drawer",{attrs:{"with-header":!1,title:"物流轨迹",visible:e.drawer,direction:"ltr"},on:{"update:visible":function(t){e.drawer=t}}},[e.logisticsInfo?r("div",{staticClass:"p-2 font-s-14"},[r("div",{staticClass:"mb-2"},[e._v("物流公司："+e._s(e.logisticsInfo.typename))]),e._v(" "),r("div",{staticClass:"mb-2"},[e._v("物流单号："+e._s(e.logisticsInfo.number))]),e._v(" "),r("el-timeline",e._l(e.logisticsInfo.list,(function(t,n){return r("el-timeline-item",{key:n,attrs:{timestamp:t.time}},[e._v(e._s(t.status))])})),1)],1):e._e()])],1)},o=[],s=r("db72"),a=r("2ef0"),i=r.n(a),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-cascader",{attrs:{options:e.regionData,placeholder:"请选择地址"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})},c=[],d=r("ef6c"),u={props:{value:Array},data:function(){return{regionData:d["regionData"],address:[]}},watch:{address:function(){this.decodeAddress()}},created:function(){this.initAddress()},methods:{initAddress:function(){this.address=[i.a.get(d["TextToCode"],"[".concat(this.value[0],"].code")),i.a.get(d["TextToCode"],"[".concat(this.value[0],"][").concat(this.value[1],"].code")),i.a.get(d["TextToCode"],"[".concat(this.value[0],"][").concat(this.value[1],"][").concat(this.value[2],"].code"))]},decodeAddress:function(){var e=d["CodeToText"][this.address[0]],t=d["CodeToText"][this.address[1]],r=d["CodeToText"][this.address[2]];this.$emit("input",[e,t,r])}}},v=u,f=r("2877"),p=Object(f["a"])(v,l,c,!1,null,null,null),m=p.exports,_=r("f8b7"),b={name:"OnlineOrderDetail",components:{YcAddress:m},data:function(){return{orderInfo:null,statusMap:{100:"待支付",200:"待发货",300:"待收货",400:"已完成",900:"已取消"},receiverFormVisible:!1,receiverForm:{id:"",orderId:"",province:"",city:"",area:"",detail:"",contact:"",mobile:"",addressList:[]},drawer:!1,logisticsInfo:null}},computed:{stepOptions:function(){var e=i.a.get(this.orderInfo,"order.orderStatus");return 900===e?["提交订单","已取消"]:["提交订单","支付订单","平台发货","确认收货"]},process:function(){var e=i.a.get(this.orderInfo,"order.orderStatus");return 100===e?0:200===e?1:300===e?2:400===e?3:900===e?1:0}},mounted:function(){this.getInfo()},methods:{showLogistics:function(){if(!this.orderInfo.order.logisticsNo)return this.$message.warning("暂无物流信息");this.drawer=!0,this.onlineLogisticsQuery()},onlineLogisticsQuery:function(){var e=this;_["a"].onlineLogisticsQuery({deliveryNo:this.orderInfo.order.logisticsNo}).then((function(t){e.logisticsInfo=t.data}))},updateAddress:function(){var e=this.orderInfo.userAddress;this.receiverForm={orderId:this.orderInfo.order.orderId,province:e.province,city:e.city,area:e.area,detail:e.detail,contact:e.contact,mobile:e.mobile,addressList:[e.province,e.city,e.area]},this.receiverFormVisible=!0},confirmUpdateAddress:function(){var e=this;_["a"].onlineOrderAlterAddress(Object(s["a"])({},this.receiverForm,{province:this.receiverForm.addressList[0],city:this.receiverForm.addressList[1],area:this.receiverForm.addressList[2]})).then((function(){e.receiverFormVisible=!1,e.$notify({title:"成功",message:"地址修改成功",type:"success"}),e.getInfo()}))},addRemark:function(){var e=this;this.$prompt("请输入备注","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){var r=t.value;_["a"].onlineOrderRemark({orderId:e.orderInfo.order.orderId,remark:r}).then((function(){e.$notify({title:"成功",message:"订单备注成功",type:"success"}),e.getInfo()}))})).catch((function(){}))},closeOrder:function(){var e=this;this.$confirm("是否确定关闭该订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){_["a"].onlineOrderClose({orderId:e.orderInfo.order.orderId}).then((function(){e.$notify({title:"成功",message:"订单关闭成功",type:"success"}),e.getInfo()}))})).catch((function(){}))},getInfo:function(){var e=this;_["a"].onlineOrderQuery({orderId:this.$route.query.orderId}).then((function(t){e.orderInfo=t.data.items[0]}))}}},g=b,h=(r("f630"),Object(f["a"])(g,n,o,!1,null,"4f3bbb5c",null));t["default"]=h.exports},f630:function(e,t,r){"use strict";var n=r("36d8"),o=r.n(n);o.a},f8b7:function(e,t,r){"use strict";var n=r("365c");t["a"]={onlineOrderQuery:function(e){return n["a"].post("/admin/queryOrder",e)},onlineLogisticsQuery:function(e){return n["a"].get("/admin/queryLogistics",e)},onlineOrderShip:function(e){return n["a"].post("/admin/shipOrder",e)},onlineOrderClose:function(e){return n["a"].get("/admin/closeOrder",e)},onlineOrderRemark:function(e){return n["a"].get("/admin/remarkOrder",e)},onlineOrderAlterAddress:function(e){return n["a"].post("/admin/alterAddress",e)},onlineOrderAuditReturn:function(e){return n["a"].get("/admin/auditReturn",e)},onlineOrderAuditRefund:function(e){return n["a"].get("/admin/auditRefund",e)},onlineRefundClose:function(e){return n["a"].get("/admin/close/warrantyOrder",e)},cashOrderCreate:function(e){return n["a"].post("/admin/store/insertOrder",e)},cashOrderQuery:function(e){return n["a"].post("/admin/store/queryList",e)},subscribeOrderQuery:function(e){return n["a"].post("/admin/queryReserveWashList",e)},subscribeOrderFinish:function(e){return n["a"].post("/admin/finishReserveWash",e)},grewOrderQuery:function(e){return n["a"].post("/admin/grew/queryList",e)},grewOrderDel:function(e){return n["a"].post("/admin/grew/del",e)},grewOrderSaveOrUpdate:function(e){return n["a"].post("/admin/grew/saveOrUpdate",e)}}}}]);