(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22ee1fce"],{"2fe9":function(e,t,a){"use strict";var l,o,n,r,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"g-filter border-bottom-divider"},[a("form",{on:{submit:e.hanldeSubmit}},[a("div",{staticClass:"flex justify-between"},[a("div",{staticClass:"flex flex-wrap"},e._l(e.options,(function(t){return a("div",{key:t.key,staticStyle:{"margin-right":"5px","margin-bottom":"5px"}},[t.remote?["input"===t.type?a("g-input-remote",{attrs:{info:t,form:e.query,clearable:t.clearable,"suffix-icon":t.suffixIcon},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputEnter(t)}}}):e._e(),e._v(" "),"select"===t.type?a("g-select-remote",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e()]:["input"===t.type?a("g-input",{attrs:{info:t,form:e.query,"suffix-icon":t.suffixIcon},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputEnter(t)}}}):e._e(),e._v(" "),"select"===t.type?a("g-select",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e(),e._v(" "),"date"===t.type?a("g-date",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e(),e._v(" "),"dateRange"===t.type?a("g-date-range",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e()]],2)})),0),e._v(" "),a("div",{staticClass:"flex-0"},[a("el-button",{attrs:{size:"small",type:"primary","native-type":"submit"},on:{click:e.doSearch}},[e._v("查询")]),e._v(" "),e._t("left")],2)])])])},s=[],c=a("2ef0"),u=a.n(c),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-input",{staticStyle:{width:"180px"},attrs:{size:"small","suffix-icon":e.info.suffixIcon,clearable:e.info.clearable,placeholder:e.info.placeholder||"请输入"},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}})},p=[],d={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},m=d,b=a("2877"),g=Object(b["a"])(m,f,p,!1,null,null,null),h=g.exports,v={},y=Object(b["a"])(v,l,o,!1,null,null,null),_=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{staticStyle:{width:"180px"},attrs:{size:"small",placeholder:e.info.placeholder||"请选择",clearable:e.info.clearable},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}},e._l(e.info.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)},x=[],w={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},S=w,O=Object(b["a"])(S,k,x,!1,null,null,null),z=O.exports,j={},$=Object(b["a"])(j,n,r,!1,null,null,null),C=$.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-date-picker",{staticStyle:{width:"180px"},attrs:{size:"small",type:"date",clearable:e.info.clearable,placeholder:e.info.placeholder||"选择日期"},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}})},q=[],N={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},T=N,E=Object(b["a"])(T,L,q,!1,null,null,null),G=E.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-date-picker",{staticStyle:{width:"180px"},attrs:{type:"daterange",size:"small","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:e.info.clearable},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}})},U=[],R={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},V=R,D=Object(b["a"])(V,I,U,!1,null,null,null),F=D.exports,W={name:"GFilter",components:{GInput:h,GInputRemote:_,GSelect:z,GSelectRemote:C,GDate:G,GDateRange:F},props:{options:{type:Array,default:function(){return[]}}},data:function(){return{query:{}}},created:function(){this.initQuery()},methods:{hanldeSubmit:function(){console.log(">>> 提交")},initQuery:function(){var e=this;this.options.map((function(t){e.$set(e.query,t.key,t.initialValue)})),this.$emit("refresh",u.a.cloneDeep(this.query))},doSearch:function(){this.$emit("search",u.a.cloneDeep(this.query))},handleInputEnter:function(){this.$emit("keyup",u.a.cloneDeep(this.query))}}},A=W,Q=Object(b["a"])(A,i,s,!1,null,null,null);t["a"]=Q.exports},"365c":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a("db72"),o=a("bc3a"),n=a.n(o),r=a("5c96"),i=a("4360"),s=a("5f87"),c=n.a.create({baseURL:"http://admin.petcdd.com",withCredentials:!0,timeout:5e3});c.interceptors.request.use((function(e){return i["a"].getters.token&&(e.headers["Authorization"]=Object(s["a"])()),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(Object(r["Message"])({message:t.message||"Error",type:"error",duration:5e3}),900===t.code&&"/login"!==window.gvm.$route.path&&r["MessageBox"].confirm("登录状态已经过期",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){i["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("接口异常"+e),Object(r["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.get(e,Object(l["a"])({params:t},a))},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.post(e,t,a)},p={get:u,post:f}},"80c7":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container p-2"},[a("div",{staticClass:"bg-bai p-3"},[a("g-filter",{staticClass:"pb-1",attrs:{options:e.options},on:{refresh:e.handleRefresh,search:e.handleSearch}},[a("el-button",{attrs:{slot:"left",size:"small"},on:{click:e.doAdd},slot:"left"},[e._v("添加寄养")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"mt-1",staticStyle:{width:"100%"},attrs:{size:"small",data:e.list}},[a("el-table-column",{attrs:{prop:"petName",align:"center",label:"宠物名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"petType",align:"center",label:"宠物类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.petType?a("el-tag",{attrs:{size:"medium"}},[e._v("猫咪")]):a("el-tag",{attrs:{size:"medium",type:"success"}},[e._v("狗狗")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"startTime",align:"center",label:"开始时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.startTime.slice(0,10)))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"endTime",align:"center",label:"结束时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.endTime.slice(0,10)))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"petState",align:"center",label:"寄养状态",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.petState?a("el-tag",{attrs:{size:"medium",type:"warning"}},[e._v("待确认")]):1===t.row.petState?a("el-tag",{attrs:{size:"medium"}},[e._v("寄养中")]):a("el-tag",{attrs:{size:"medium",type:"success"}},[e._v("已完成")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",align:"center",label:"手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"cameraId",align:"center",label:"监控Id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",align:"center",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{prop:"action",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.doDelete(t.row)}}},[e._v("详情")]),e._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),a("el-button",{staticClass:"text-red",attrs:{size:"small",type:"text"},on:{click:function(a){return e.doDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"text-right p-1"},[a("el-pagination",{attrs:{"current-page":e.page.pageNo,"page-sizes":[10,20,30,50],"page-size":e.page.pageSize,"pager-count":5,total:e.page.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.editText,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{directives:[{name:"loading",rawName:"v-loading",value:e.uploadLoading,expression:"uploadLoading"}],attrs:{label:"LOGO","label-width":e.formLabelWidth}},[e.form.logo?a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.form.logo,fit:"fill","preview-src-list":[e.form.logo],lazy:"",webp:""}}):e._e(),e._v(" "),a("div",[a("el-upload",{attrs:{action:e.uploadUrl,"show-file-list":!1,"on-success":e.handleUploadSuccess,"before-upload":e.beforeUpload}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n                上传图片\n                "),a("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"门店名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.storeName,callback:function(t){e.$set(e.form,"storeName","string"===typeof t?t.trim():t)},expression:"form.storeName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile","string"===typeof t?t.trim():t)},expression:"form.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"经度","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.lon,callback:function(t){e.$set(e.form,"lon","string"===typeof t?t.trim():t)},expression:"form.lon"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"纬度","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.lat,callback:function(t){e.$set(e.form,"lat","string"===typeof t?t.trim():t)},expression:"form.lat"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"工作时间","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.workTime,callback:function(t){e.$set(e.form,"workTime","string"===typeof t?t.trim():t)},expression:"form.workTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"营业状态","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.form.storeState,callback:function(t){e.$set(e.form,"storeState",t)},expression:"form.storeState"}},[a("el-radio",{attrs:{label:0}},[e._v("营业")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("休息")])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.doSubmitAdd}},[e._v("确 定")])],1)],1)],1)])},o=[],n=a("db72"),r=[{name:"手机号",key:"phone",type:"input",remote:!1,placeholder:"手机号",initialValue:""},{name:"宠物名称",key:"petName",type:"input",remote:!1,placeholder:"宠物名称",initialValue:""},{name:"寄养时间",key:"dateRange",type:"dateRange",placeholder:"寄养时间",remote:!1,clearable:!0},{name:"宠物类型",key:"petType",type:"select",placeholder:"宠物类型",remote:!1,mode:"single",clearable:!0,options:[{label:"猫咪",value:1},{label:"狗狗",value:2}]},{name:"状态",key:"petState",type:"select",placeholder:"状态",remote:!1,mode:"single",clearable:!0,options:[{label:"待确认",value:0},{label:"寄养中",value:1},{label:"已完成",value:2}]}],i=a("2fe9"),s=a("365c"),c={queryList:function(e){return s["a"].post("/admin/grew/queryList",e)},del:function(e){return s["a"].post("/admin/grew/del",e)},saveOrUpdate:function(e){return s["a"].post("/admin/grew/saveOrUpdate",e)}},u={name:"Grew",components:{GFilter:i["a"]},data:function(){return{options:r,listQuery:{},page:{pageNo:1,pageSize:10,total:0},list:[],loading:!1,formLabelWidth:"120px",dialogFormVisible:!1,uploadLoading:!1,form:{}}},computed:{editText:function(){return this.form.id?"编辑寄养":"新增寄养"}},activated:function(){this.load()},methods:{handleUploadSuccess:function(e,t){this.uploadLoading=!1,this.form.logo=e.data},beforeUpload:function(){return this.uploadLoading=!0,!0},doAdd:function(){this.$message.warning("暂不支持")},doUpdate:function(e){this.form=Object(n["a"])({},e),this.dialogFormVisible=!0},doSubmitAdd:function(){var e=this;c.saveOrUpdateStore(this.form).then((function(){e.dialogFormVisible=!1,e.form.id?e.$message.success("修改成功"):e.$message("添加成功"),e.load()})).cathc((function(){}))},doDelete:function(e){this.$message("暂不支持")},handleSearch:function(e){this.listQuery=e,this.page.pageNo=1,this.load()},handleRefresh:function(e){this.listQuery=e,this.page.pageNo=1,this.load()},load:function(){var e=this;this.loading=!0,c.queryList(Object(n["a"])({pageNo:this.page.pageNo,pageSize:this.page.pageSize},this.listQuery)).then((function(t){e.list=t.data.items,e.page.total=t.data.totalCount,e.loading=!1})).catch((function(){e.loading=!1}))},handleSizeChange:function(e){this.page.pageSize=e,this.page.pageNo=1,this.load()},handleCurrentChange:function(e){this.page.pageNo=e,this.load()}}},f=u,p=a("2877"),d=Object(p["a"])(f,l,o,!1,null,"1fa70baf",null);t["default"]=d.exports}}]);