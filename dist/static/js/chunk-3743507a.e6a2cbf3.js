(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3743507a"],{"09b2":function(e,t,a){"use strict";var s=a("f08f"),n=a.n(s);n.a},"365c":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var s=a("db72"),n=a("bc3a"),i=a.n(n),r=a("5c96"),l=a("4360"),o=a("5f87"),u=i.a.create({baseURL:"http://admin.petcdd.com",withCredentials:!0,timeout:5e3});u.interceptors.request.use((function(e){return l["a"].getters.token&&(e.headers["Authorization"]=Object(o["a"])()),e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(Object(r["Message"])({message:t.message||"Error",type:"error",duration:5e3}),900===t.code&&"/login"!==window.gvm.$route.path&&r["MessageBox"].confirm("登录状态已经过期",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){l["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("接口异常"+e),Object(r["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u.get(e,Object(s["a"])({params:t},a))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u.post(e,t,a)},p={get:c,post:d}},4554:function(e,t,a){},"6c79":function(e,t,a){"use strict";var s=a("4554"),n=a.n(s);n.a},"95d1":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"u-page__product p-2"},[a("div",{staticClass:"u-productAdd bg-bai"},[e._m(0),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{size:"small",placeholder:"商品标题组成：商品描述+规格"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品品牌"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{size:"small",placeholder:"请填写品牌"},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品产地"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{size:"small",placeholder:"请填写产地"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"适用对象",prop:"petType"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",size:"small"},model:{value:e.form.petType,callback:function(t){e.$set(e.form,"petType",t)},expression:"form.petType"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"商品分类",prop:"categoryId"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",size:"small"},model:{value:e.form.categoryId,callback:function(t){e.$set(e.form,"categoryId",t)},expression:"form.categoryId"}},e._l(e.categoryOptions,(function(e){return a("el-option",{key:e.id,attrs:{label:e.categoryName,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"上架状态"}},[a("el-switch",{model:{value:e.form.onOff,callback:function(t){e.$set(e.form,"onOff",t)},expression:"form.onOff"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品描述"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{rows:"5",type:"textarea",placeholder:"建议300字以内，未填写讲根据商品标题自动生成"},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品轮播",prop:"productImgUrl"}},[a("el-upload",{attrs:{accept:"image/*","list-type":"picture-card",multiple:"",action:e.uploadUrl,"on-preview":e.handleImagePreview,"on-remove":e.handleBannerRemove,"on-success":e.handleBannerSuccess,"file-list":e.fileList}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})]),e._v(" "),a("div",{staticClass:"u-tip"},[e._v("请至少上传一张轮播图片，推荐尺寸400*400")])],1),e._v(" "),a("el-form-item",{attrs:{label:"商品详情",prop:"productDetailImgUrl"}},[a("el-upload",{attrs:{accept:"image/*","list-type":"picture-card",multiple:"","before-upload":e.handleBeforeUpload,action:e.uploadUrl,"on-preview":e.handleImagePreview,"on-remove":e.handleDetailRemove,"on-success":e.handleDetailSuccess,"file-list":e.detailFileList}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})]),e._v(" "),a("div",{staticClass:"u-tip"},[e._v("请至少上传一张详情图，推荐尺寸750*X")])],1)],1),e._v(" "),e._m(1),e._v(" "),a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"商品规格"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.specs.length,expression:"specs.length"}],staticClass:"u-specs__tip"},[e._v("最多添加两个商品规格")]),e._v(" "),e._l(e.specs,(function(t,s){return a("div",{key:s,staticClass:"u-specs__item"},[a("div",{staticClass:"u-specs__header"},[a("el-select",{attrs:{size:"small",placeholder:"规格"+(s+1)},on:{change:function(a){return e.handleTypeChagne(t,a)}},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"sp.type"}},e._l(e.getOptions(s),(function(e){return a("el-option",{key:e.type,attrs:{label:e.name,value:e.type}})})),1),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.deleteSpecs(s)}}},[e._v("删除规格")])],1),e._v(" "),t.type?a("div",{staticClass:"u-enum"},[a("div",{staticClass:"u-enum__list"},e._l(t.val,(function(s){return a("el-tag",{key:s,staticClass:"u-enum__item",attrs:{closable:"","disable-transitions":!1,type:"info"},on:{close:function(a){return e.handleEnumClose(t,s)}}},[e._v(e._s(s))])})),1),e._v(" "),a("div",[a("el-input",{staticStyle:{width:"100px"},attrs:{size:"mini"},model:{value:t.enum,callback:function(a){e.$set(t,"enum","string"===typeof a?a.trim():a)},expression:"sp.enum"}}),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleAddEnum(t)}}},[e._v("添加")])],1)]):e._e()])})),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.specs.length<2,expression:"specs.length < 2"}],attrs:{icon:"el-icon-plus",size:"small"},on:{click:e.addSpecs}},[e._v("添加规格")])],2)],1),e._v(" "),e._m(2),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.skuList}},[1===e.effectSpecs.length?[a("el-table-column",{attrs:{label:e.specs[0].name,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("span",[e._v(e._s(s.specs[0]&&s.specs[0].value))])]}}],null,!1,3390880037)})]:e._e(),e._v(" "),2===e.effectSpecs.length?[a("el-table-column",{attrs:{label:e.specs[0].name,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("span",[e._v(e._s(s.specs[0]&&s.specs[0].value))])]}}],null,!1,3390880037)}),e._v(" "),a("el-table-column",{attrs:{label:e.specs[1].name,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("span",[e._v(e._s(s.specs[1]&&s.specs[1].value))])]}}],null,!1,1424943013)})]:e._e(),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku条形码",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("div",{staticClass:"flex align-center"},[a("el-input",{attrs:{size:"small",placeholder:"请输入商品自编码"},model:{value:s.skuCode,callback:function(t){e.$set(s,"skuCode",t)},expression:"row.skuCode"}}),e._v(" "),s.skuCode?e._e():a("el-button",{staticClass:"ml-1",attrs:{type:"text",size:"mini"},on:{click:function(t){return e.fillSkuEmpty(s)}}},[e._v("无商品")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("div",{staticClass:"flex align-center justify-center"},[a("el-input",{attrs:{size:"small",placeholder:"请输入"},model:{value:s.skuName,callback:function(t){e.$set(s,"skuName",t)},expression:"row.skuName"}}),e._v(" "),a("el-button",{staticClass:"ml-1",attrs:{type:"text",size:"mini"},on:{click:function(t){return e.fillSkuName(s)}}},[e._v("填充")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"sku原价",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("g-number",{model:{value:s.originPrice,callback:function(t){e.$set(s,"originPrice",t)},expression:"row.originPrice"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"sku进货价",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("g-number",{model:{value:s.supplyPrice,callback:function(t){e.$set(s,"supplyPrice",t)},expression:"row.supplyPrice"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku价格",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("g-number",{model:{value:s.price,callback:function(t){e.$set(s,"price",t)},expression:"row.price"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku库存",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-input-number",{attrs:{"controls-position":"right",min:0,max:99999,size:"small"},model:{value:s.stock,callback:function(t){e.$set(s,"stock",t)},expression:"row.stock"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品类型",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:s.hotFlag,callback:function(t){e.$set(s,"hotFlag",t)},expression:"row.hotFlag"}},e._l(e.hotFlagOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku小图(400x400)","min-width":"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-upload",{attrs:{accept:"image/*",action:e.uploadUrl,"show-file-list":!1,"on-success":e.handleSmallSuccess.bind(this,s),"before-upload":e.handleBeforeUpload}},[s.skuImgUrl?a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e._f("fmtWebp")(s.skuImgUrl),fit:"fill",lazy:"",webp:""}}):a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n              上传图片\n              "),a("i",{staticClass:"el-icon-upload el-icon--right"})])],1)]}}])})],2)],1),e._v(" "),a("div",{staticClass:"u-submit"},[a("el-button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(e.isEdit?"更新商品":"提交发布"))])],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"u-title"},[a("span",{staticClass:"u-index"},[e._v("1")]),e._v("商品基本信息\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"u-title"},[a("span",{staticClass:"u-index"},[e._v("2")]),e._v("商品规格与库存\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"u-title"},[a("span",{staticClass:"u-index"},[e._v("3")]),e._v("价格及库存\n    ")])}],i=a("75fc"),r=(a("ac6a"),a("db72")),l=(a("7f7f"),a("2ef0")),o=a.n(l),u=a("8ded"),c=a.n(u),d=a("c4c8"),p=a("c592"),m=[{type:"weight",name:"重量"},{type:"shap",name:"形状"},{type:"size",name:"尺寸"},{type:"package",name:"套餐"},{type:"taste",name:"口味"},{type:"color",name:"颜色"}],f={};m.forEach((function(e){f[e.type]=e}));var h=function(){return{skuCode:"",skuName:"",skuImgUrl:"",skuDetailImgUrl:"",originPrice:"",supplyPrice:"",price:"",stock:"",specs:null}},v={name:"ProductDetail",components:{GNumber:p["a"]},props:{isEdit:Boolean},data:function(){return{loading:!1,submitLoading:!1,enum1:"",enum2:"",specsList:m,specsMap:f,form:{categoryId:"",petType:"",name:"",brand:"",address:"",detail:"",onOff:!0,productImgUrl:[],productDetailImgUrl:[]},specs:[],skuList:[],dialogVisible:!1,dialogImageUrl:"",fileList:[],detailFileList:[],options:[{label:"通用",value:0},{label:"狗狗",value:1},{label:"猫咪",value:2}],hotFlagOptions:[{value:0,label:"普通"},{value:1,label:"新品"},{value:2,label:"折扣"}],categoryOptions:[],rules:{categoryId:{required:!0,message:"请选择商品分类",trigger:"change"},petType:{required:!0,message:"请选择适用对象",trigger:"change"},name:{required:!0,message:"请输入名称",trigger:"blur"}}}},computed:{effectSpecs:function(){return this.specs.filter((function(e){return!!e.val.length}))}},watch:{detailFileList:function(e){var t=this;this.form.productDetailImgUrl=e.map((function(e){return{imgUrl:t.url2Webp(e.url)}})),this.$nextTick((function(){t.$refs.ruleForm.validateField("productDetailImgUrl")}))},fileList:function(e){var t=this;this.form.productImgUrl=e.map((function(e){return{imgUrl:t.url2Webp(e.url)}})),this.$nextTick((function(){t.$refs.ruleForm.validateField("productImgUrl")}))}},mounted:function(){this.init(),this.genSku(),this.queryProductCategory()},beforeRouteLeave:function(e,t,a){a()},methods:{handleBeforeUpload:function(e){var t=e.size/1024/1024<.5;return t||this.$message.error("上传头像图片大小不能超过 5MB!"),t},init:function(){this.isEdit&&(this.tempRoute=Object.assign({},this.$route),this.setTagsViewTitle(),this.setPageTitle(),this.queryProductFullInfoById())},fillSkuName:function(e){e.skuName=this.form.name+(e.specs&&e.specs.length&&e.specs.map((function(e){return e.value})).join(" "))},fillSkuEmpty:function(e){e.skuCode="empty_"+this.uuid(),e.skuName=this.form.name+(e.specs&&e.specs.length&&e.specs.map((function(e){return e.value})).join(" ")),e.skuImgUrl="",e.price=9999,e.originPrice=9999,e.supplyPrice=9999,e.stock=0,e.hotFlag=0},setTagsViewTitle:function(){var e="商品编辑",t=Object.assign({},this.tempRoute,{title:"".concat(e,"-").concat(this.$route.params.productId)});this.$store.dispatch("tagsView/updateVisitedView",t)},setPageTitle:function(){var e="商品编辑";document.title="".concat(e," - ").concat(this.$route.params.productId)},queryProductFullInfoById:function(){var e=this;this.loading=!0,d["a"].queryProductFullInfoById({productId:this.$route.params.productId}).then((function(t){var a=t.data;c.a.set("product_edit",a),e.recoverData(a),e.loading=!1}))},recoverData:function(e){var t=this,a=e.product,s=e.productSkuList,n=e.productBannerImgList,i=e.productDetailImgList;this.form={categoryId:a.categoryId,petType:a.petType,name:a.name,brand:a.brand,address:a.address,detail:a.detail,onOff:0===a.onOff,productImgUrl:[],productDetailImgUrl:[]},this.specs=a.specs||[],this.skuList=s,this.fileList=n.map((function(e){return{uid:e.id||e.imgUrl,url:t.url2Webp(e.imgUrl)}})),this.detailFileList=i.map((function(e){return{uid:e.id||e.imgUrl,url:t.url2Webp(e.imgUrl)}}))},handleSubmit:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.checkSku().then((function(){var t=e.genParams();e.submitLoading||(e.submitLoading=!0,e.isEdit?d["a"].updateProduct(t).then((function(){e.$notify({title:"成功",message:"更新商品成功",type:"success"}),e.submitLoading=!1,e.$store.dispatch("tagsView/delView",e.$route),e.$router.push("/product/list")})).catch((function(t){e.submitLoading=!1,e.$message.error(t.message)})):d["a"].insertProduct(t).then((function(){e.$notify({title:"成功",message:"新增商品成功",type:"success"}),e.submitLoading=!1,e.$store.dispatch("tagsView/delView",e.$route),e.$router.push("/product/list")})).catch((function(t){e.submitLoading=!1,e.$message.error(t.message)})))})).catch((function(t){e.$message.error(t.message)}))}))},genParams:function(){var e=Object(r["a"])({},this.form,{onOff:this.form.onOff?0:1,specList:this.specs.filter((function(e){return!!o.a.get(e,"val.length")})).map((function(e){return{name:e.name,type:e.type,val:e.val}})),skuInfoList:this.skuList});if(this.isEdit){var t=c.a.get("product_edit"),a=t.product;e.id=a.id,e.productId=a.productId}return e},checkSku:function(){var e=this;return new Promise((function(t,a){var s=e.skuList;if(!s.length)return t();for(var n=0;n<s.length;n++){var i=s[n];if(""===i.skuCode||""===i.skuName||""===i.price||""===i.stock)return void a(new Error("第".concat(n+1,"个商品内容存在空情况，请补充完整")))}t()}))},handleSmallSuccess:function(e,t,a){e.skuImgUrl=t.data},queryProductCategory:function(){var e=this;d["a"].queryProductCategory().then((function(t){e.categoryOptions=t.data||[]}))},getOptions:function(e){var t=0===e?1:0,a=this.specs[t];return a&&a.type?this.specsList.filter((function(e){return e.type!==a.type})):this.specsList},genSku:function(){var e=this,t=this.specs.filter((function(e){return!!e.val.length})),a=[];0===t.length&&a.push(h()),1===t.length&&t[0].val.forEach((function(e){var s={type:t[0].type,name:t[0].name,value:e},n=h();n.specs=[s],a.push(n)})),2===t.length&&t[0].val.forEach((function(e){var s={type:t[0].type,name:t[0].name,value:e};t[1].val.forEach((function(e){var n={type:t[1].type,name:t[1].name,value:e},i=h();i.specs=[s,n],a.push(i)}))})),a.forEach((function(t){e.skuList.forEach((function(a){e.isSameSpeces(t.specs||[],a.specs||[])&&Object.assign(t,a)}))})),this.skuList=a},isSameSpeces:function(e,t){if(t.length!==e.length)return!1;var a=o.a.differenceWith(e,t,(function(e,t){return e.type===t.type&&e.value===t.value}));return 0===a.length},handleEnumClose:function(e,t){e.val=e.val.filter((function(e){return e!==t})),this.genSku()},handleAddEnum:function(e){e.enum&&(e.val=o.a.uniq([].concat(Object(i["a"])(e.val),[e.enum])),e.enum="",this.genSku())},handleTypeChagne:function(e,t){e.name=this.specsMap[t].name},addSpecs:function(){this.specs.push({type:"",name:"",val:[],enum:""})},deleteSpecs:function(e){this.specs.splice(e,1),this.genSku()},handleBannerSuccess:function(e,t,a){t.url=e.data,this.fileList=a},handleBannerRemove:function(e,t){this.fileList=t},handleDetailSuccess:function(e,t,a){t.url=e.data,this.detailFileList=a},handleDetailRemove:function(e,t){this.detailFileList=t},handleImagePreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},g=v,b=(a("6c79"),a("09b2"),a("2877")),y=Object(b["a"])(g,s,n,!1,null,"493657e9",null);t["a"]=y.exports},c4c8:function(e,t,a){"use strict";var s=a("365c");t["a"]={queryProducts:function(e){return s["a"].post("/admin/queryProducts",e)},queryProductFullInfoById:function(e){return s["a"].get("/admin/queryProductFullInfoById",e)},queryProductCategory:function(e){return s["a"].post("/admin/queryProductCategory",e)},insertProduct:function(e){return s["a"].post("/admin/insertProduct",e)},updateProduct:function(e){return s["a"].post("/admin/updateProduct",e)},deleteProduct:function(e){return s["a"].post("/admin/deleteProduct",e)},querySkuByCode:function(e){return s["a"].get("/admin/querySku/byCode",e)},queryProductSkuList:function(e){return s["a"].post("/admin/queryProductSkuList",e)}}},c592:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-input",{attrs:{size:e.size,value:e.value,placeholder:e.placeholder},on:{input:e.handleInput,blur:e.handleBlur}},[a("template",{slot:"append"},[e._t("append")],2)],2)},n=[],i=(a("a481"),a("c5f6"),{name:"GNumber",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:"请输入"},size:{type:String,default:""}},methods:{handleBlur:function(e){var t=e.target.value;0==t||""==t?this.$emit("input",""):this.$emit("input",Number(t))},handleInput:function(e){if(e=this.filterNumber(e),this.isInteger&&"."===event.data)e+="1",event.target.value=e,event.target.value=e=e.substr(0,e.length-1);else{if(e.length>this.maxLength)return void(event.target.value=e.substr(0,this.maxLength));event.target.value=e}this.$emit("input",e)},filterNumber:function(e){var t=e.length,a=e.substring(0,1),s=e.substring(1,2);e=e.replace(/[^\d.]+/g,""),t>1&&"0"===a&&"."!==s&&(e=e.substring(1)),"."===a&&(e="");var n=e.indexOf(".");if(-1!==n){var i=e.substring(n+1),r=i.indexOf(".");-1!==r&&(e=e.substring(0,n+r+1)+e.substring(n+r+2))}return e}}}),r=i,l=a("2877"),o=Object(l["a"])(r,s,n,!1,null,"11b2804a",null);t["a"]=o.exports},f08f:function(e,t,a){}}]);