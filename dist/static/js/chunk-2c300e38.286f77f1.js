(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c300e38"],{"00f4":function(e,t,a){"use strict";var s=a("9cd9"),n=a.n(s);n.a},"09b2":function(e,t,a){"use strict";var s=a("f08f"),n=a.n(s);n.a},"365c":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var s=a("db72"),n=a("bc3a"),i=a.n(n),l=a("5c96"),r=a("4360"),o=a("5f87"),u=i.a.create({baseURL:"http://81.68.144.150:8088",withCredentials:!0,timeout:5e3});u.interceptors.request.use((function(e){return r["a"].getters.token&&(e.headers["Authorization"]=Object(o["a"])()),e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(Object(l["Message"])({message:t.message||"Error",type:"error",duration:5e3}),900===t.code&&"/login"!==window.gvm.$route.path&&l["MessageBox"].confirm("登录状态已经过期",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){r["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("接口异常"+e),Object(l["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u.get(e,Object(s["a"])({params:t},a))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u.post(e,t,a)},p={get:c,post:d}},"95d1":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"u-page__product p-2"},[a("div",{staticClass:"u-productAdd"},[e._m(0),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{size:"small",placeholder:"商品标题组成：商品描述+规格"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品品牌"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{size:"small",placeholder:"请填写品牌"},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品产地"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{size:"small",placeholder:"请填写产地"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"适用对象",prop:"petType"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",size:"small"},model:{value:e.form.petType,callback:function(t){e.$set(e.form,"petType",t)},expression:"form.petType"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"商品分类",prop:"categoryId"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",size:"small"},model:{value:e.form.categoryId,callback:function(t){e.$set(e.form,"categoryId",t)},expression:"form.categoryId"}},e._l(e.categoryOptions,(function(e){return a("el-option",{key:e.id,attrs:{label:e.categoryName,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"上架状态"}},[a("el-switch",{model:{value:e.form.onOff,callback:function(t){e.$set(e.form,"onOff",t)},expression:"form.onOff"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品描述"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{rows:"5",type:"textarea",placeholder:"建议300字以内，未填写讲根据商品标题自动生成"},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品轮播",prop:"productImgUrl"}},[a("el-upload",{attrs:{"list-type":"picture-card",action:e.uploadUrl,"on-preview":e.handleImagePreview,"on-remove":e.handleBannerRemove,"on-success":e.handleBannerSuccess,"file-list":e.fileList}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})]),e._v(" "),a("div",{staticClass:"u-tip"},[e._v("请至少上传一张轮播图片，推荐尺寸400*400")])],1),e._v(" "),a("el-form-item",{attrs:{label:"商品详情",prop:"productDetailImgUrl"}},[a("el-upload",{attrs:{"list-type":"picture-card",action:e.uploadUrl,"on-preview":e.handleImagePreview,"on-remove":e.handleDetailRemove,"on-success":e.handleDetailSuccess,"file-list":e.detailFileList}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})]),e._v(" "),a("div",{staticClass:"u-tip"},[e._v("请至少上传一张详情图，推荐尺寸750*X")])],1)],1),e._v(" "),e._m(1),e._v(" "),a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"商品规格"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.specs.length,expression:"specs.length"}],staticClass:"u-specs__tip"},[e._v("最多添加两个商品规格")]),e._v(" "),e._l(e.specs,(function(t,s){return a("div",{key:s,staticClass:"u-specs__item"},[a("div",{staticClass:"u-specs__header"},[a("el-select",{attrs:{size:"small",placeholder:"规格"+(s+1)},on:{change:function(a){return e.handleTypeChagne(t,a)}},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"sp.type"}},e._l(e.getOptions(s),(function(e){return a("el-option",{key:e.type,attrs:{label:e.name,value:e.type}})})),1),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.deleteSpecs(s)}}},[e._v("删除规格")])],1),e._v(" "),t.type?a("div",{staticClass:"u-enum"},[a("div",{staticClass:"u-enum__list"},e._l(t.val,(function(s){return a("el-tag",{key:s,staticClass:"u-enum__item",attrs:{closable:"","disable-transitions":!1,type:"info"},on:{close:function(a){return e.handleEnumClose(t,s)}}},[e._v(e._s(s))])})),1),e._v(" "),a("div",[a("el-input",{staticStyle:{width:"100px"},attrs:{size:"mini"},model:{value:t.enum,callback:function(a){e.$set(t,"enum","string"===typeof a?a.trim():a)},expression:"sp.enum"}}),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleAddEnum(t)}}},[e._v("添加")])],1)]):e._e()])})),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.specs.length<2,expression:"specs.length < 2"}],attrs:{icon:"el-icon-plus",size:"small"},on:{click:e.addSpecs}},[e._v("添加规格")])],2)],1),e._v(" "),e._m(2),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.skuList}},[1===e.effectSpecs.length?[a("el-table-column",{attrs:{label:e.specs[0].name,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("span",[e._v(e._s(s.specs[0].value))])]}}],null,!1,2617394593)})]:e._e(),e._v(" "),2===e.effectSpecs.length?[a("el-table-column",{attrs:{label:e.specs[0].name,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("span",[e._v(e._s(s.specs[0].value))])]}}],null,!1,2617394593)}),e._v(" "),a("el-table-column",{attrs:{label:e.specs[1].name,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("span",[e._v(e._s(s.specs[1].value))])]}}],null,!1,3241940608)})]:e._e(),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku自编码",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-input",{attrs:{size:"small",placeholder:"请输入商品自编码"},model:{value:s.skuCode,callback:function(t){e.$set(s,"skuCode",t)},expression:"row.skuCode"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-input",{attrs:{size:"small",placeholder:"请输入"},model:{value:s.skuName,callback:function(t){e.$set(s,"skuName",t)},expression:"row.skuName"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"sku原价",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-input-number",{attrs:{"controls-position":"right",min:0,max:99999,size:"small"},model:{value:s.originPrice,callback:function(t){e.$set(s,"originPrice",t)},expression:"row.originPrice"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"sku进货价",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-input-number",{attrs:{"controls-position":"right",min:0,max:99999,size:"small"},model:{value:s.supplyPrice,callback:function(t){e.$set(s,"supplyPrice",t)},expression:"row.supplyPrice"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku价格",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-input-number",{attrs:{"controls-position":"right",min:0,max:99999,size:"small"},model:{value:s.price,callback:function(t){e.$set(s,"price",t)},expression:"row.price"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku库存",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-input-number",{attrs:{"controls-position":"right",min:0,max:99999,size:"small"},model:{value:s.stock,callback:function(t){e.$set(s,"stock",t)},expression:"row.stock"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品类型",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:s.hotFlag,callback:function(t){e.$set(s,"hotFlag",t)},expression:"row.hotFlag"}},e._l(e.hotFlagOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku小图(400x400)","min-width":"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-upload",{attrs:{action:e.uploadUrl,"show-file-list":!1,"on-success":e.handleSmallSuccess.bind(this,s),"before-upload":e.beforeUpload}},[s.skuImgUrl?a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:s.skuImgUrl,fit:"fill",lazy:"",webp:""}}):a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n              上传图片\n              "),a("i",{staticClass:"el-icon-upload el-icon--right"})])],1)]}}])})],2)],1),e._v(" "),a("div",{staticClass:"u-submit"},[a("el-button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(e.isEdit?"更新商品":"提交发布"))])],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"u-title"},[a("span",{staticClass:"u-index"},[e._v("1")]),e._v("商品基本信息\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"u-title"},[a("span",{staticClass:"u-index"},[e._v("2")]),e._v("商品规格与库存\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"u-title"},[a("span",{staticClass:"u-index"},[e._v("3")]),e._v("价格及库存\n    ")])}],i=a("75fc"),l=(a("ac6a"),a("db72")),r=(a("7f7f"),a("2ef0")),o=a.n(r),u=a("8ded"),c=a.n(u),d=a("c4c8"),p=[{type:"weight",name:"重量"},{type:"shap",name:"形状"},{type:"size",name:"尺寸"},{type:"package",name:"套餐"},{type:"taste",name:"口味"}],m={};p.forEach((function(e){m[e.type]=e}));var f=function(){return{skuCode:"",skuName:"",skuImgUrl:"",skuDetailImgUrl:"",originPrice:"",supplyPrice:"",price:"",stock:"",specs:null}},h={name:"ProductDetail",props:{isEdit:Boolean},data:function(){return{loading:!1,submitLoading:!1,enum1:"",enum2:"",specsList:p,specsMap:m,form:{categoryId:"",petType:"",name:"",brand:"",address:"",detail:"",onOff:!0,productImgUrl:[]},specs:[],skuList:[],dialogVisible:!1,dialogImageUrl:"",fileList:[],detailFileList:[],options:[{label:"通用",value:0},{label:"狗狗",value:1},{label:"猫咪",value:2}],hotFlagOptions:[{value:0,label:"普通"},{value:1,label:"新品"},{value:2,label:"折扣"}],categoryOptions:[],rules:{categoryId:{required:!0,message:"请选择商品分类",trigger:"change"},petType:{required:!0,message:"请选择适用对象",trigger:"change"},name:{required:!0,message:"请输入名称",trigger:"blur"}}}},computed:{effectSpecs:function(){return this.specs.filter((function(e){return!!e.val.length}))}},watch:{fileList:function(e){var t=this;this.form.productImgUrl=e.map((function(e){return{imgUrl:e.url}})),this.$nextTick((function(){t.$refs.ruleForm.validateField("productImgUrl")}))}},mounted:function(){this.init(),this.genSku(),this.queryProductCategory()},beforeRouteLeave:function(e,t,a){a()},methods:{init:function(){this.isEdit&&(this.tempRoute=Object.assign({},this.$route),this.setTagsViewTitle(),this.setPageTitle(),this.queryProductFullInfoById())},setTagsViewTitle:function(){var e="商品编辑",t=Object.assign({},this.tempRoute,{title:"".concat(e,"-").concat(this.$route.params.productId)});this.$store.dispatch("tagsView/updateVisitedView",t)},setPageTitle:function(){var e="商品编辑";document.title="".concat(e," - ").concat(this.$route.params.productId)},queryProductFullInfoById:function(){var e=this;this.loading=!0,d["a"].queryProductFullInfoById({productId:this.$route.params.productId}).then((function(t){var a=t.data;c.a.set("product_edit",a),e.recoverData(a),e.loading=!1}))},recoverData:function(e){var t=e.product,a=e.productSkuList,s=e.productBannerImgList;this.form={categoryId:t.categoryId,petType:t.petType,name:t.name,brand:t.brand,address:t.address,detail:t.detail,onOff:0===t.onOff,productImgUrl:[]},this.specs=t.specs||[],this.skuList=a,this.fileList=s.map((function(e){return{uid:e.imgUrl,url:e.imgUrl}}))},handleSubmit:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.checkSku().then((function(){var t=e.genParams();e.submitLoading||(e.submitLoading=!0,e.isEdit?d["a"].updateProduct(t).then((function(){e.$notify({title:"成功",message:"更新商品成功",type:"success"}),e.submitLoading=!1,e.$store.dispatch("tagsView/delView",e.$route),e.$router.push("/product/index")})).catch((function(t){e.submitLoading=!1,e.$message.error(t.message)})):d["a"].insertProduct(t).then((function(){e.$notify({title:"成功",message:"新增商品成功",type:"success"}),e.submitLoading=!1,e.$store.dispatch("tagsView/delView",e.$route),e.$router.push("/product/index")})).catch((function(t){e.submitLoading=!1,e.$message.error(t.message)})))})).catch((function(t){e.$message.error(t.message)}))}))},genParams:function(){var e=Object(l["a"])({},this.form,{onOff:this.form.onOff?0:1,specList:this.specs.filter((function(e){return!!o.a.get(e,"val.length")})).map((function(e){return{name:e.name,type:e.type,val:e.val}})),skuInfoList:this.skuList});if(this.isEdit){var t=c.a.get("product_edit"),a=t.product;e.id=a.id,e.productId=a.productId}return e},checkSku:function(){var e=this;return new Promise((function(t,a){var s=e.skuList;if(!s.length)return t();for(var n=0;n<s.length;n++){var i=s[n];if(""===i.skuCode||""===i.skuName||""===i.skuImgUrl||""===i.price||""===i.stock)return void a(new Error("第".concat(n+1,"个商品内容存在空情况，请补充完整")))}t()}))},handleSmallSuccess:function(e,t,a){e.skuImgUrl=t.data},beforeUpload:function(){return!0},queryProductCategory:function(){var e=this;d["a"].queryProductCategory().then((function(t){e.categoryOptions=t.data||[]}))},getOptions:function(e){var t=0===e?1:0,a=this.specs[t];return a&&a.type?this.specsList.filter((function(e){return e.type!==a.type})):this.specsList},genSku:function(){var e=this,t=this.specs.filter((function(e){return!!e.val.length})),a=[];0===t.length&&a.push(f()),1===t.length&&t[0].val.forEach((function(e){var s={type:t[0].type,name:t[0].name,value:e},n=f();n.specs=[s],a.push(n)})),2===t.length&&t[0].val.forEach((function(e){var s={type:t[0].type,name:t[0].name,value:e};t[1].val.forEach((function(e){var n={type:t[1].type,name:t[1].name,value:e},i=f();i.specs=[s,n],a.push(i)}))})),a.forEach((function(t){e.skuList.forEach((function(a){e.isSameSpeces(t.specs||[],a.specs||[])&&Object.assign(t,a)}))})),this.skuList=a},isSameSpeces:function(e,t){if(t.length!==e.length)return!1;var a=o.a.differenceWith(e,t,(function(e,t){return e.type===t.type&&e.value===t.value}));return 0===a.length},handleEnumClose:function(e,t){e.val=e.val.filter((function(e){return e!==t})),this.genSku()},handleAddEnum:function(e){e.enum&&(e.val=o.a.uniq([].concat(Object(i["a"])(e.val),[e.enum])),e.enum="",this.genSku())},handleTypeChagne:function(e,t){e.name=this.specsMap[t].name},addSpecs:function(){this.specs.push({type:"",name:"",val:[],enum:""})},deleteSpecs:function(e){this.specs.splice(e,1),this.genSku()},handleBannerSuccess:function(e,t,a){t.url=e.data,this.fileList=a},handleBannerRemove:function(e,t){this.fileList=t},handleDetailSuccess:function(e,t,a){t.url=e.data,this.detailFileList=a},handleDetailRemove:function(e,t){this.detailFileList=t},handleImagePreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},v=h,g=(a("00f4"),a("09b2"),a("2877")),b=Object(g["a"])(v,s,n,!1,null,"7e9619a0",null);t["a"]=b.exports},"9cd9":function(e,t,a){},c4c8:function(e,t,a){"use strict";var s=a("365c");t["a"]={queryProducts:function(e){return s["a"].post("/admin/queryProducts",e)},queryProductFullInfoById:function(e){return s["a"].get("/admin/queryProductFullInfoById",e)},queryProductCategory:function(e){return s["a"].post("/admin/queryProductCategory",e)},insertProduct:function(e){return s["a"].post("/admin/insertProduct",e)},updateProduct:function(e){return s["a"].post("/admin/updateProduct",e)},deleteProduct:function(e){return s["a"].post("/admin/deleteProduct",e)}}},f08f:function(e,t,a){}}]);