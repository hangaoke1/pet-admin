(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-279042e5"],{"2fe9":function(e,t,n){"use strict";var a,o,i,r,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g-filter border-bottom-divider"},[n("form",{on:{submit:e.hanldeSubmit}},[n("div",{staticClass:"flex justify-between"},[n("div",{staticClass:"flex flex-wrap"},e._l(e.options,(function(t){return n("div",{key:t.key,staticStyle:{"margin-right":"5px","margin-bottom":"5px"}},[t.remote?["input"===t.type?n("g-input-remote",{attrs:{info:t,form:e.query,clearable:t.clearable,"suffix-icon":t.suffixIcon},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputEnter(t)}}}):e._e(),e._v(" "),"select"===t.type?n("g-select-remote",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e()]:["input"===t.type?n("g-input",{attrs:{info:t,form:e.query,"suffix-icon":t.suffixIcon},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputEnter(t)}}}):e._e(),e._v(" "),"select"===t.type?n("g-select",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e(),e._v(" "),"date"===t.type?n("g-date",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e(),e._v(" "),"dateRange"===t.type?n("g-date-range",{attrs:{info:t,form:e.query,clearable:t.clearable}}):e._e()]],2)})),0),e._v(" "),n("div",{staticClass:"flex-0"},[n("el-button",{attrs:{size:"small",type:"primary","native-type":"submit"},on:{click:e.doSearch}},[e._v("查询")]),e._v(" "),e._t("left")],2)])])])},s=[],c=n("2ef0"),u=n.n(c),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-input",{staticStyle:{width:"180px"},attrs:{size:"small","suffix-icon":e.info.suffixIcon,clearable:e.info.clearable,placeholder:e.info.placeholder||"请输入"},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}})},d=[],p={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},m=p,g=n("2877"),h=Object(g["a"])(m,f,d,!1,null,null,null),y=h.exports,b={},v=Object(g["a"])(b,a,o,!1,null,null,null),k=v.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{staticStyle:{width:"180px"},attrs:{size:"small",placeholder:e.info.placeholder||"请选择",clearable:e.info.clearable},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}},e._l(e.info.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)},x=[],O={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},C=O,S=Object(g["a"])(C,_,x,!1,null,null,null),j=S.exports,w={},$=Object(g["a"])(w,i,r,!1,null,null,null),z=$.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-date-picker",{staticStyle:{width:"180px"},attrs:{size:"small",type:"date",clearable:e.info.clearable,placeholder:e.info.placeholder||"选择日期"},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}})},N=[],q={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},T=q,F=Object(g["a"])(T,E,N,!1,null,null,null),I=F.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-date-picker",{staticStyle:{width:"180px"},attrs:{type:"daterange",size:"small","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:e.info.clearable},model:{value:e.form[e.info.key],callback:function(t){e.$set(e.form,e.info.key,t)},expression:"form[info.key]"}})},G=[],U={props:{form:{type:Object,default:function(){return{}}},info:{type:Object,default:function(){return{}}}}},D=U,R=Object(g["a"])(D,V,G,!1,null,null,null),P=R.exports,B={name:"GFilter",components:{GInput:y,GInputRemote:k,GSelect:j,GSelectRemote:z,GDate:I,GDateRange:P},props:{options:{type:Array,default:function(){return[]}}},data:function(){return{query:{}}},created:function(){this.initQuery()},methods:{hanldeSubmit:function(){console.log(">>> 提交")},initQuery:function(){var e=this;this.options.map((function(t){e.$set(e.query,t.key,t.initialValue)})),this.$emit("refresh",u.a.cloneDeep(this.query))},doSearch:function(){this.$emit("search",u.a.cloneDeep(this.query))},handleInputEnter:function(){this.$emit("keyup",u.a.cloneDeep(this.query))}}},L=B,Q=Object(g["a"])(L,l,s,!1,null,null,null);t["a"]=Q.exports},"365c":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("db72"),o=n("bc3a"),i=n.n(o),r=n("5c96"),l=n("4360"),s=n("5f87"),c=i.a.create({baseURL:"http://admin.petcdd.com",withCredentials:!0,timeout:5e3});c.interceptors.request.use((function(e){return l["a"].getters.token&&(e.headers["Authorization"]=Object(s["a"])()),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(Object(r["Message"])({message:t.message||"Error",type:"error",duration:5e3}),900===t.code&&"/login"!==window.gvm.$route.path&&r["MessageBox"].confirm("登录状态已经过期",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){l["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("接口异常"+e),Object(r["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.get(e,Object(a["a"])({params:t},n))},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.post(e,t,n)},d={get:u,post:f}},a192:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-2"},[n("div",{staticClass:"bg-bai p-3"},[n("g-filter",{staticClass:"pb-1",attrs:{options:e.options},on:{refresh:e.handleRefresh,search:e.handleSearch}},[n("el-button",{attrs:{slot:"left",size:"small"},on:{click:e.doAdd},slot:"left"},[e._v("添加分类")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"mt-1",staticStyle:{width:"100%"},attrs:{size:"small",data:e.list}},[n("el-table-column",{attrs:{prop:"id",align:"center",label:"分类id"}}),e._v(" "),n("el-table-column",{attrs:{prop:"categoryName",align:"center",label:"分类名称"}}),e._v(" "),n("el-table-column",{attrs:{prop:"createTime",align:"center",label:"创建时间"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"yc-edit",on:{click:function(n){return e.doEdit(t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{staticClass:"yc-del",on:{click:function(n){return e.doDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{staticClass:"text-right p-1"},[n("el-pagination",{attrs:{"current-page":e.page.pageNo,"page-sizes":[10,20,30,50],"page-size":e.page.pageSize,"pager-count":5,total:e.page.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),n("el-dialog",{attrs:{title:e.editText,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"分类名称","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.categoryName,callback:function(t){e.$set(e.form,"categoryName","string"===typeof t?t.trim():t)},expression:"form.categoryName"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.doSaveOrUpdate}},[e._v("确 定")])],1)],1)],1)])},o=[],i=n("db72"),r=[{name:"分类名称",key:"categoryName",type:"input",remote:!1,placeholder:"请输入分类名称",initialValue:"",suffixIcon:"el-icon-search"}],l=n("2fe9"),s=n("c405"),c={name:"Category",components:{GFilter:l["a"]},data:function(){return{options:r,listQuery:{},page:{pageNo:1,pageSize:10,total:0},list:[],loading:!1,formLabelWidth:"120px",dialogFormVisible:!1,form:{storeName:"",lon:"",lat:"",mobile:"",logo:"",workTime:"",storeState:0}}},computed:{editText:function(){return this.form.id?"编辑分类":"新增分类"}},activated:function(){this.load()},methods:{handleUploadSuccess:function(e,t){this.uploadLoading=!1,this.form.logo=e.data},beforeUpload:function(){return this.uploadLoading=!0,!0},doAdd:function(){this.form={id:"",storeName:"",lon:"",lat:"",mobile:"",logo:"",workTime:"",storeState:0},this.dialogFormVisible=!0},doEdit:function(e){this.form=Object(i["a"])({},e),this.dialogFormVisible=!0},doSaveOrUpdate:function(){var e=this;s["a"].saveOrUpdate(this.form).then((function(){e.dialogFormVisible=!1,e.form.id?e.$notify({title:"成功",message:"修改成功",type:"success"}):e.$notify({title:"成功",message:"添加成功",type:"success"}),e.load()})).catch((function(){}))},doDelete:function(e){var t=this;this.$confirm("此操作将删除该分类, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s["a"].del({id:e.id}).then((function(e){t.load(),t.$notify({title:"成功",message:"删除成功",type:"success"})}))})).catch((function(){}))},handleSearch:function(e){this.listQuery=e,this.page.pageNo=1,this.load()},handleRefresh:function(e){this.listQuery=e,this.page.pageNo=1,this.load()},load:function(){var e=this;this.loading=!0,s["a"].queryProductCategory({pageNo:this.page.pageNo,pageSize:this.page.pageSize}).then((function(t){e.list=t.data,e.page.total=t.data.length,e.loading=!1})).catch((function(){e.loading=!1}))},handleSizeChange:function(e){this.page.pageSize=e,this.page.pageNo=1,this.load()},handleCurrentChange:function(e){this.page.pageNo=e,this.load()}}},u=c,f=n("2877"),d=Object(f["a"])(u,a,o,!1,null,"517bde55",null);t["default"]=d.exports},c405:function(e,t,n){"use strict";var a=n("365c");t["a"]={queryProductCategory:function(e){return a["a"].post("/admin/queryProductCategory",e)},saveOrUpdate:function(e){return a["a"].post("/admin/productCategory/saveOrUpdate",e)},del:function(e){return a["a"].get("/admin/productCategory/del",e)}}}}]);