(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d53f20a"],{"1d89":function(t,e,i){"use strict";var n=i("8528"),a=i.n(n);a.a},"432a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"u-banner"},[i("div",{staticClass:"u-title"},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增轮播")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[i("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("el-image",{staticStyle:{width:"187px",height:"100px"},attrs:{src:t.row.imgUrl,fit:"fill",lazy:"","preview-src-list":[t.row.imgUrl]}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"detail",label:"描述"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("el-dialog",{attrs:{title:"add"===t.type?"新增":"编辑",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{attrs:{model:t.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"轮播图片"}},[t.form.imgUrl?i("el-image",{staticStyle:{width:"187px",height:"100px"},attrs:{src:t.form.imgUrl,fit:"fill",lazy:"","preview-src-list":[t.form.imgUrl]}}):t._e(),t._v(" "),i("div",[i("el-upload",{attrs:{action:"/pet/uploadFile","show-file-list":!1,"on-success":t.handleUploadSuccess,"before-upload":t.beforeUpload}},[i("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("\n              上传图片\n              "),i("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"轮播描述"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.detail,callback:function(e){t.$set(t.form,"detail",e)},expression:"form.detail"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)],1)},a=[],l=i("2ef0"),s=i.n(l),o=i("b775");function r(){return Object(o["a"])({url:"/admin/queryBanners",method:"get"})}function d(t){return Object(o["a"])({url:"/admin/insertBanner",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/admin/updateBanner",method:"post",data:t})}var u={data:function(){return{type:"add",form:{},dialogVisible:!1,loading:!0,list:[]}},mounted:function(){this.init()},methods:{init:function(){this.queryBanners()},queryBanners:function(){var t=this;this.loading=!0,r().then((function(e){t.loading=!1,t.list=e||[]}))},insertBanner:function(t){var e=this;d(t).then((function(){e.$message.success("添加成功"),e.dialogVisible=!1,e.queryBanners()}))},updateBanner:function(t){var e=this;c(t).then((function(){e.$message.success("修改成功"),e.dialogVisible=!1,e.queryBanners()}))},handleSubmit:function(){if(!this.form.imgUrl)return this.$message.error("图片不能为空");"add"===this.type?this.insertBanner(this.form):this.updateBanner(this.form)},handleAdd:function(){this.type="add",this.form={imgUrl:"",detail:""},this.dialogVisible=!0},handleEdit:function(t,e){this.type="edit",this.form=s.a.cloneDeep(e),this.dialogVisible=!0},handleDelete:function(){var t=this;this.$confirm("此操作将永久删除该banner, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleUploadSuccess:function(t,e){this.form.imgUrl=t.data},beforeUpload:function(){return!0}}},f=u,m=(i("1d89"),i("2877")),h=Object(m["a"])(f,n,a,!1,null,"150b9c41",null);e["default"]=h.exports},8528:function(t,e,i){}}]);