(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6255bfa8"],{"42a0":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"u-page__product"},[a("div",{staticClass:"u-productAdd"},[e._m(0),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{size:"small",placeholder:"商品标题组成：商品描述+规格"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品品牌"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{size:"small",placeholder:"请填写品牌"},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品产地"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{size:"small",placeholder:"请填写产地"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"适用对象",prop:"petType"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",size:"small"},model:{value:e.form.petType,callback:function(t){e.$set(e.form,"petType",t)},expression:"form.petType"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"商品分类",prop:"categoryId"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",size:"small"},model:{value:e.form.categoryId,callback:function(t){e.$set(e.form,"categoryId",t)},expression:"form.categoryId"}},e._l(e.categoryOptions,(function(e){return a("el-option",{key:e.categoryId,attrs:{label:e.categoryName,value:e.categoryId}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"商品描述"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{rows:"5",type:"textarea",placeholder:"建议300字以内，未填写讲根据商品标题自动生成"},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品轮播",prop:"productImgUrl"}},[a("el-upload",{attrs:{action:"/pet/uploadFile","list-type":"picture-card","on-preview":e.handleBannerPreview,"on-remove":e.handleBannerRemove,"on-success":e.handleBannerSuccess,"file-list":e.fileList}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})]),e._v(" "),a("div",{staticClass:"u-tip"},[e._v("请至少上传一张轮播图片，推荐尺寸400x400")])],1)],1),e._v(" "),e._m(1),e._v(" "),a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"商品规格"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.specs.length,expression:"specs.length"}],staticClass:"u-specs__tip"},[e._v("最多添加两个商品规格")]),e._v(" "),e._l(e.specs,(function(t,s){return a("div",{key:s,staticClass:"u-specs__item"},[a("div",{staticClass:"u-specs__header"},[a("el-select",{attrs:{size:"small",placeholder:"规格"+(s+1)},on:{change:function(a){return e.handleTypeChagne(t,a)}},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"sp.type"}},e._l(e.getOptions(s),(function(e){return a("el-option",{key:e.type,attrs:{label:e.name,value:e.type}})})),1),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.deleteSpecs(s)}}},[e._v("删除规格")])],1),e._v(" "),t.type?a("div",{staticClass:"u-enum"},[a("div",{staticClass:"u-enum__list"},e._l(t.val,(function(s){return a("el-tag",{key:s,staticClass:"u-enum__item",attrs:{closable:"","disable-transitions":!1,type:"info"},on:{close:function(a){return e.handleEnumClose(t,s)}}},[e._v(e._s(s))])})),1),e._v(" "),a("div",[a("el-input",{staticStyle:{width:"100px"},attrs:{size:"mini"},model:{value:t.enum,callback:function(a){e.$set(t,"enum","string"===typeof a?a.trim():a)},expression:"sp.enum"}}),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleAddEnum(t)}}},[e._v("添加")])],1)]):e._e()])})),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.specs.length<2,expression:"specs.length < 2"}],attrs:{icon:"el-icon-plus",size:"small"},on:{click:e.addSpecs}},[e._v("添加规格")])],2)],1),e._v(" "),e._m(2),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.skuList}},[1===e.effectSpecs.length?[a("el-table-column",{attrs:{label:e.specs[0].name,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("span",[e._v(e._s(s.specs[0].value))])]}}],null,!1,2617394593)})]:e._e(),e._v(" "),2===e.effectSpecs.length?[a("el-table-column",{attrs:{label:e.specs[0].name,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("span",[e._v(e._s(s.specs[0].value))])]}}],null,!1,2617394593)}),e._v(" "),a("el-table-column",{attrs:{label:e.specs[1].name,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("span",[e._v(e._s(s.specs[1].value))])]}}],null,!1,3241940608)})]:e._e(),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku名称",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-input",{attrs:{size:"small"},model:{value:s.skuName,callback:function(t){e.$set(s,"skuName",t)},expression:"row.skuName"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku价格",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-input-number",{attrs:{"controls-position":"right",min:0,max:99999,size:"small"},model:{value:s.price,callback:function(t){e.$set(s,"price",t)},expression:"row.price"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku库存",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-input-number",{attrs:{"controls-position":"right",min:0,max:99999,size:"small"},model:{value:s.stock,callback:function(t){e.$set(s,"stock",t)},expression:"row.stock"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku小图(400x400)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-upload",{attrs:{action:"/pet/uploadFile","show-file-list":!1,"on-success":e.handleSmallSuccess.bind(this,s),"before-upload":e.beforeUpload}},[s.skuImgUrl?a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:s.skuImgUrl,fit:"fill",lazy:"",webp:""}}):a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n              上传图片\n              "),a("i",{staticClass:"el-icon-upload el-icon--right"})])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{"label-class-name":"u-require",label:"sku详情图(750x2000)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-upload",{attrs:{action:"/pet/uploadFile","show-file-list":!1,"on-success":e.handleDetailSuccess.bind(this,s),"before-upload":e.beforeUpload}},[s.skuDetailImgUrl?a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:s.skuDetailImgUrl,fit:"fill",lazy:"",webp:""}}):a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n              上传图片\n              "),a("i",{staticClass:"el-icon-upload el-icon--right"})])],1)]}}])})],2)],1),e._v(" "),a("div",{staticClass:"u-submit"},[a("el-button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(e.$route.query.edit?"更新商品":"提交发布"))])],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"u-title"},[a("span",{staticClass:"u-index"},[e._v("1")]),e._v("商品基本信息\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"u-title"},[a("span",{staticClass:"u-index"},[e._v("2")]),e._v("商品规格与库存\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"u-title"},[a("span",{staticClass:"u-index"},[e._v("3")]),e._v("价格及库存\n    ")])}],l=a("75fc"),r=(a("ac6a"),a("db72")),i=(a("7f7f"),a("2ef0")),u=a.n(i),o=a("8ded"),c=a.n(o),d=a("686f"),p=a("c4c8"),m=[{type:"weight",name:"重量"},{type:"shap",name:"形状"},{type:"size",name:"尺寸"},{type:"package",name:"套餐"},{type:"taste",name:"口味"}],f={};m.forEach((function(e){f[e.type]=e}));var h=function(){return{skuName:"",skuImgUrl:"",skuDetailImgUrl:"",price:"",stock:"",specs:null}},v={data:function(){var e=function(e,t,a){u.a.get(t,"length")?a():a(new Error("至少上传一张图片"))};return{doingSave:!1,submitLoading:!1,enum1:"",enum2:"",specsList:m,specsMap:f,form:{categoryId:"",petType:"",name:"",brand:"",address:"",detail:"",productImgUrl:[]},specs:[],skuList:[],dialogVisible:!1,dialogImageUrl:"",fileList:[],options:[{label:"狗狗",value:1},{label:"猫咪",value:2}],categoryOptions:[],rules:{categoryId:{required:!0,message:"请选择商品分类",trigger:"change"},petType:{required:!0,message:"请选择适用对象",trigger:"change"},name:{required:!0,message:"请输入名称",trigger:"blur"},productImgUrl:{required:!0,validator:e,trigger:"change"}}}},computed:{effectSpecs:function(){return this.specs.filter((function(e){return!!e.val.length}))}},watch:{fileList:function(e){var t=this;this.form.productImgUrl=e.map((function(e){return{imgUrl:e.url}})),this.$nextTick((function(){t.$refs.ruleForm.validateField("productImgUrl")}))}},mounted:function(){this.init(),this.genSku(),this.queryProductCategory()},beforeRouteLeave:function(e,t,a){a()},methods:{init:function(){this.$route.query.edit&&this.recoverData()},recoverData:function(){var e=c.a.get("product_edit"),t=e.product,a=e.productSkuList,s=e.productBannerImgList;this.form={categoryId:t.categoryId,petType:t.petType,name:t.name,brand:t.brand,address:t.address,detail:t.detail,productImgUrl:[]},this.specs=t.specs||[],this.skuList=a,this.fileList=s.map((function(e){return{url:e.imgUrl}}))},handleSubmit:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.checkSku().then((function(){var t=e.genParams();e.submitLoading||(e.submitLoading=!0,e.$route.query.edit?p["e"](t).then((function(t){e.$message.success("更新商品成功"),e.submitLoading=!1,d["a"].$emit("closeCurrenPage")})).catch((function(t){e.submitLoading=!1,e.$message.error(t.message)})):p["b"](t).then((function(t){e.$message.success("新增商品成功"),e.submitLoading=!1,d["a"].$emit("refreshCurrenPage")})).catch((function(t){e.submitLoading=!1,e.$message.error(t.message)})))})).catch((function(t){e.$message.error(t.message)}))}))},genParams:function(){var e=Object(r["a"])({},this.form,{specList:this.specs.filter((function(e){return!!u.a.get(e,"val.length")})).map((function(e){return{name:e.name,type:e.type,val:e.val}})),skuInfoList:this.skuList});if(this.$route.query.edit){var t=c.a.get("product_edit"),a=t.product;e.id=a.id,e.productId=a.productId}return e},checkSku:function(){var e=this;return new Promise((function(t,a){for(var s=e.skuList,n=0;n<s.length;n++){var l=s[n];if(""===l.skuName||""===l.skuImgUrl||""===l.skuDetailImgUrl||""===l.price||""===l.stock)return void a(new Error("第".concat(n+1,"个商品内容存在空情况，请补充完整")))}t()}))},handleSmallSuccess:function(e,t,a){e.skuImgUrl=t.data},handleDetailSuccess:function(e,t,a){e.skuDetailImgUrl=t.data},beforeUpload:function(){return!0},queryProductCategory:function(){var e=this;p["c"]().then((function(t){e.categoryOptions=t||[]}))},getOptions:function(e){var t=0===e?1:0,a=this.specs[t];return a&&a.type?this.specsList.filter((function(e){return e.type!==a.type})):this.specsList},genSku:function(){var e=this,t=this.specs.filter((function(e){return!!e.val.length})),a=[];0===t.length&&a.push(h()),1===t.length&&t[0].val.forEach((function(e){var s={type:t[0].type,name:t[0].name,value:e},n=h();n.specs=[s],a.push(n)})),2===t.length&&t[0].val.forEach((function(e){var s={type:t[0].type,name:t[0].name,value:e};t[1].val.forEach((function(e){var n={type:t[1].type,name:t[1].name,value:e},l=h();l.specs=[s,n],a.push(l)}))})),a.forEach((function(t){e.skuList.forEach((function(a){e.isSameSpeces(t.specs||[],a.specs||[])&&Object.assign(t,a)}))})),this.skuList=a},isSameSpeces:function(e,t){if(t.length!==e.length)return!1;var a=u.a.differenceWith(e,t,(function(e,t){return e.type===t.type&&e.value===t.value}));return 0===a.length},handleEnumClose:function(e,t){e.val=e.val.filter((function(e){return e!==t})),this.genSku()},handleAddEnum:function(e){e.enum&&(e.val=u.a.uniq([].concat(Object(l["a"])(e.val),[e.enum])),e.enum="",this.genSku())},handleTypeChagne:function(e,t){e.name=this.specsMap[t].name},addSpecs:function(){this.specs.push({type:"",name:"",val:[],enum:""})},deleteSpecs:function(e){this.specs.splice(e,1),this.genSku()},handleBannerSuccess:function(e,t,a){t.url=e.data,this.fileList=a},handleBannerRemove:function(e,t){this.fileList=t},handleBannerPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},g=v,b=(a("639e"),a("4725"),a("2877")),y=Object(b["a"])(g,s,n,!1,null,"37218fa6",null);t["default"]=y.exports},4725:function(e,t,a){"use strict";var s=a("beb2"),n=a.n(s);n.a},"50f5":function(e,t,a){},"639e":function(e,t,a){"use strict";var s=a("50f5"),n=a.n(s);n.a},beb2:function(e,t,a){},c4c8:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"e",(function(){return i})),a.d(t,"a",(function(){return u}));var s=a("b775");function n(e){return Object(s["a"])({url:"/admin/queryProducts",method:"post",data:e})}function l(e){return Object(s["a"])({url:"/admin/queryProductCategory",method:"post",data:e})}function r(e){return Object(s["a"])({url:"/admin/insertProduct",method:"post",data:e})}function i(e){return Object(s["a"])({url:"/admin/updateProduct",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/admin/deleteProduct",method:"post",data:e})}}}]);