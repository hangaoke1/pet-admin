(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa78a998"],{"2fe9":function(e,t,a){"use strict";var o,l,r,n,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"g-filter"},[a("el-form",{ref:"form",attrs:{model:e.query,"label-width":"auto"}},[a("el-row",{attrs:{gutter:20}},e._l(e.options,(function(t){return a("el-col",{key:t.key,attrs:{xs:12,sm:8,md:8}},[t.remote?["input"===t.type?a("g-input-remote",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e(),e._v(" "),"select"===t.type?a("g-select-remote",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e()]:["input"===t.type?a("g-input",{attrs:{info:t,form:e.query}}):e._e(),e._v(" "),"select"===t.type?a("g-select",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e(),e._v(" "),"date"===t.type?a("g-date",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e(),e._v(" "),"dateRange"===t.type?a("g-date-range",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e()]],2)})),1)],1),e._v(" "),a("el-row",[a("el-col",{staticClass:"text-right",attrs:{span:24}},[a("el-button",[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.doSearch}},[e._v("查询")])],1)],1)],1)},s=[],c=a("2ef0"),u=a.n(c),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:e.info.name}},[a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",clearable:e.info.clearable,placeholder:e.info.placeholder||"请输入"},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}})],1)},d=[],m={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},p=m,b=a("2877"),g=Object(b["a"])(p,f,d,!1,null,null,null),h=g.exports,v={},y=Object(b["a"])(v,o,l,!1,null,null,null),_=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:e.info.name}},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:e.info.placeholder||"请选择",clearable:e.info.clearable},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}},e._l(e.info.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)},w=[],S={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},x=S,O=Object(b["a"])(x,k,w,!1,null,null,null),j=O.exports,$={},z=Object(b["a"])($,r,n,!1,null,null,null),C=z.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:e.info.name}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{size:"small",type:"date",clearable:e.info.clearable,placeholder:e.info.placeholder||"选择日期"},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}})],1)},L=[],q={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},T=q,U=Object(b["a"])(T,N,L,!1,null,null,null),E=U.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:e.info.name}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:e.info.clearable},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}})],1)},V=[],F={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},W=F,R=Object(b["a"])(W,G,V,!1,null,null,null),A=R.exports,D={components:{GInput:h,GInputRemote:_,GSelect:j,GSelectRemote:C,GDate:E,GDateRange:A},props:{options:{type:Array,default:function(){return[]}}},data:function(){return{query:{}}},created:function(){this.initQuery()},methods:{initQuery:function(){var e=this;this.options.map((function(t){e.$set(e.query,t.key,t.initialValue)})),this.$emit("refresh",u.a.cloneDeep(this.query))},doSearch:function(){this.$emit("search",u.a.cloneDeep(this.query))}}},Q=D,B=Object(b["a"])(Q,i,s,!1,null,null,null);t["a"]=B.exports},"365c":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var o=a("db72"),l=a("bc3a"),r=a.n(l),n=a("5c96"),i=a("4360"),s=a("5f87"),c=r.a.create({baseURL:"http://81.68.144.150:8088",withCredentials:!0,timeout:5e3});c.interceptors.request.use((function(e){return i["a"].getters.token&&(e.headers["Authorization"]=Object(s["a"])()),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(Object(n["Message"])({message:t.message||"Error",type:"error",duration:5e3}),999===t.code&&"/login"!==window.gvm.$route.path&&n["MessageBox"].confirm("登录状态已经过期",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){i["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("接口异常"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.get(e,Object(o["a"])({params:t},a))},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.post(e,t,a)},d={get:u,post:f}},bb50:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container p-2"},[a("div",{staticClass:"bg-bai"},[a("g-filter",{staticClass:"p-2 pb-1",attrs:{options:e.options},on:{refresh:e.handleRefresh,search:e.handleSearch}}),e._v(" "),a("div",{staticClass:"px-2"},[a("el-button",{on:{click:e.doAdd}},[e._v("添加门店")])],1),e._v(" "),a("div",{staticClass:"px-2"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"mt-1",staticStyle:{width:"100%"},attrs:{size:"mini",border:"",data:e.list}},[a("el-table-column",{attrs:{prop:"logo",align:"center",label:"LOGO"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-avatar",{attrs:{src:e.row.logo}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"storeName",align:"center",label:"门店名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",align:"center",label:"联系电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"lon",align:"center",label:"经度"}}),e._v(" "),a("el-table-column",{attrs:{prop:"lat",align:"center",label:"纬度"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"workTime",align:"center",label:"工作时间",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"storeState",align:"center",label:"营业状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.storeState?a("el-tag",{attrs:{size:"medium"}},[e._v("营业")]):a("el-tag",{attrs:{size:"medium",type:"warning"}},[e._v("休息")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"storeState",align:"center",label:"营业状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.doUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),a("el-button",{staticClass:"text-red",attrs:{size:"small",type:"text"},on:{click:function(a){return e.doDelete(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"text-right p-1"},[a("el-pagination",{attrs:{"current-page":e.page.pageNo,"page-sizes":[20,50,100,300],"page-size":e.page.pageSize,"pager-count":5,total:e.page.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.editText,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{directives:[{name:"loading",rawName:"v-loading",value:e.uploadLoading,expression:"uploadLoading"}],attrs:{label:"LOGO","label-width":e.formLabelWidth}},[e.form.logo?a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.form.logo,fit:"fill",lazy:"","preview-src-list":[e.form.logo]}}):e._e(),e._v(" "),a("div",[a("el-upload",{attrs:{action:e.uploadUrl,"show-file-list":!1,"on-success":e.handleUploadSuccess,"before-upload":e.beforeUpload}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n                上传图片\n                "),a("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"门店名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.storeName,callback:function(t){e.$set(e.form,"storeName","string"===typeof t?t.trim():t)},expression:"form.storeName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile","string"===typeof t?t.trim():t)},expression:"form.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"经度","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.lon,callback:function(t){e.$set(e.form,"lon","string"===typeof t?t.trim():t)},expression:"form.lon"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"纬度","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.lat,callback:function(t){e.$set(e.form,"lat","string"===typeof t?t.trim():t)},expression:"form.lat"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"工作时间","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.workTime,callback:function(t){e.$set(e.form,"workTime","string"===typeof t?t.trim():t)},expression:"form.workTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"营业状态","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.form.storeState,callback:function(t){e.$set(e.form,"storeState",t)},expression:"form.storeState"}},[a("el-radio",{attrs:{label:0}},[e._v("营业")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("休息")])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.doSubmitAdd}},[e._v("确 定")])],1)],1)],1)])},l=[],r=a("db72"),n=[{name:"门店名称",key:"storeName",type:"input",remote:!1,placeholder:"请输入门店名称",initialValue:""},{name:"营业状态",key:"storeState",type:"select",placeholder:"请选择营业状态",remote:!1,mode:"single",clearable:!0,options:[{label:"营业中",value:0},{label:"休息中",value:1}]}],i=a("2fe9"),s=a("365c"),c={queryStore:function(e){return s["a"].get("/admin/queryStore",e)},saveOrUpdateStore:function(e){return s["a"].post("/admin/saveOrUpdateStore",e)}},u={name:"Store",components:{GFilter:i["a"]},data:function(){return{options:n,listQuery:{},page:{pageNo:1,pageSize:10,total:0},list:[],loading:!1,formLabelWidth:"120px",dialogFormVisible:!1,uploadLoading:!1,form:{storeName:"",lon:"",lat:"",mobile:"",logo:"",workTime:"",storeState:0}}},computed:{editText:function(){return this.form.id?"编辑门店":"新增门店"}},activated:function(){this.load()},methods:{handleUploadSuccess:function(e,t){this.uploadLoading=!1,this.form.logo=e.data},beforeUpload:function(){return this.uploadLoading=!0,!0},doAdd:function(){this.form={id:"",storeName:"",lon:"",lat:"",mobile:"",logo:"",workTime:"",storeState:0},this.dialogFormVisible=!0},doUpdate:function(e){this.form=Object(r["a"])({},e),this.dialogFormVisible=!0},doSubmitAdd:function(){var e=this;c.saveOrUpdateStore(this.form).then((function(){e.dialogFormVisible=!1,e.form.id?e.$message.success("修改成功"):e.$message("添加成功"),e.load()})).cathc((function(){}))},doDelete:function(e){this.$message("暂不支持")},handleSearch:function(e){this.listQuery=e,this.page.pageNo=1,this.load()},handleRefresh:function(e){this.listQuery=e,this.page.pageNo=1,this.load()},load:function(){var e=this;this.loading=!0,c.queryStore({pageNo:this.page.pageNo,pageSize:this.page.pageSize}).then((function(t){e.list=t.data,e.page.total=t.data.length,e.loading=!1})).catch((function(){e.loading=!1}))},handleSizeChange:function(e){this.page.pageSize=e,this.page.pageNo=1,this.load()},handleCurrentChange:function(e){this.page.pageNo=e,this.load()}}},f=u,d=a("2877"),m=Object(d["a"])(f,o,l,!1,null,"51c7d3ed",null);t["default"]=m.exports}}]);