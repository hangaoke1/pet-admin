(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbac8"],{"4b59":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-2"},[n("div",{staticClass:"bg-bai p-3"},[n("div",{staticClass:"mb-2 text-left"},[n("el-button",{staticClass:"yc-btn",on:{click:e.handleAdd}},[e._v("新增轮播")])],1),e._v(" "),n("yc-radio",{attrs:{options:["首页轮播","商城轮播"].map((function(e){return{label:e,value:e}}))},model:{value:e.listType,callback:function(t){e.listType=t},expression:"listType"}}),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"mt-1",staticStyle:{width:"100%"},attrs:{data:e.showList,size:"small","header-row-class-name":"u-tabel__header"}},[n("el-table-column",{attrs:{prop:"name",label:"图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-image",{staticStyle:{width:"187px",height:"100px"},attrs:{src:e._f("fmtWebp")(t.row.imgUrl),fit:"fill",lazy:"",webp:"","preview-src-list":[t.row.imgUrl]}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.bannerType?n("el-tag",{attrs:{size:"mini"}},[e._v("首页")]):n("el-tag",{attrs:{size:"mini"}},[e._v("商城")])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"detail",label:"描述",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"yc-btn",attrs:{size:"mini"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{staticClass:"yc-del",attrs:{size:"mini"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"add"===e.type?"新增":"编辑",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{directives:[{name:"loading",rawName:"v-loading",value:e.uploadLoading,expression:"uploadLoading"}],attrs:{label:"轮播图片"}},[e.form.imgUrl?n("el-image",{staticStyle:{width:"187px",height:"100px"},attrs:{src:e._f("fmtWebp")(e.form.imgUrl),fit:"fill",lazy:"",webp:"","preview-src-list":[e.form.imgUrl]}}):e._e(),e._v(" "),n("div",[n("el-upload",{attrs:{action:e.uploadUrl,"show-file-list":!1,"on-success":e.handleUploadSuccess,"before-upload":e.beforeUpload}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n              上传图片\n              "),n("i",{staticClass:"el-icon-upload el-icon--right"})]),e._v(" "),n("span",{staticClass:"ml-1 font-s-12 text-hui"},[e._v("温馨提示："+e._s(e.tip))])],1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"类型"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.bannerType,callback:function(t){e.$set(e.form,"bannerType",t)},expression:"form.bannerType"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"轮播描述"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{staticClass:"yc-del",on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{staticClass:"yc-btn",on:{click:e.handleSubmit}},[e._v("确 定")])],1)],1)],1)},a=[],l=n("2ef0"),s=n.n(l),r=n("ccbb"),o=n("365c"),c={queryBanners:function(e){return o["a"].get("/admin/queryBanners",e)},insertBanner:function(e){return o["a"].post("/admin/insertBanner",e)},updateBanner:function(e){return o["a"].post("/admin/updateBanner",e)},deleteBanner:function(e){return o["a"].post("/admin/deleteBanner",e)}},u={name:"Banner",components:{YcRadio:r["a"]},data:function(){return{type:"add",form:{},dialogVisible:!1,loading:!0,uploadLoading:!1,list:[],listType:"首页轮播",options:[{value:0,label:"首页"},{value:1,label:"商城"}]}},computed:{tip:function(){return 0===this.form.bannerType?"建议尺寸750x540":"建议尺寸710x268"},showList:function(){return"首页轮播"===this.listType?this.list.filter((function(e){return 0===e.bannerType})):this.list.filter((function(e){return 1===e.bannerType}))}},mounted:function(){this.init()},methods:{init:function(){this.queryBanners()},queryBanners:function(){var e=this;this.loading=!0,c.queryBanners().then((function(t){e.loading=!1,e.list=t.data||[]}))},insertBanner:function(e){var t=this;c.insertBanner(e).then((function(){t.$message.success("添加成功"),t.dialogVisible=!1,t.queryBanners()}))},updateBanner:function(e){var t=this;c.updateBanner(e).then((function(){t.$message.success("修改成功"),t.dialogVisible=!1,t.queryBanners()}))},handleSubmit:function(){if(!this.form.imgUrl)return this.$message.error("图片不能为空");"add"===this.type?this.insertBanner(this.form):this.updateBanner(this.form)},handleAdd:function(){this.type="add",this.form={imgUrl:"",detail:"",bannerType:0},this.dialogVisible=!0},handleEdit:function(e,t){this.type="edit",this.form=s.a.cloneDeep(t),this.dialogVisible=!0},handleDelete:function(e,t){var n=this;this.$confirm("此操作将永久删除该banner, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c.deleteBanner({id:t.id}).then((function(){n.init(),n.$message({type:"success",message:"删除成功!"})}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},handleUploadSuccess:function(e,t){this.uploadLoading=!1,this.form.imgUrl=e.data},beforeUpload:function(){return this.uploadLoading=!0,!0}}},d=u,f=n("2877"),p=Object(f["a"])(d,i,a,!1,null,"19a19f69",null);t["default"]=p.exports}}]);