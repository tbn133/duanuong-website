(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"32/M":function(t,e,a){},"9o6m":function(t,e,a){"use strict";a.r(e);a("ma9I"),a("fbCW"),a("oVuX"),a("2B1R"),a("sMBO");var s=a("a3WO");var n=a("BsWD");function r(t){return function(t){if(Array.isArray(t))return Object(s.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=a("VTBJ");const o={_origin:"https://api.emailjs.com"},c=(t,e,a)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const d=(t,e,a={})=>new Promise((s,n)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:t})=>{const e=new l(t);200===e.status||"OK"===e.text?s(e):n(e)}),r.addEventListener("error",({target:t})=>{n(new l(t))}),r.open("POST",o._origin+t,!0),Object.keys(a).forEach(t=>{r.setRequestHeader(t,a[t])}),r.send(e)});var u=(t,e,a,s)=>{const n=s||o._userID;c(n,t,e);const r={lib_version:"3.11.0",user_id:n,service_id:t,template_id:e,template_params:a};return d("/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})},m=a("L2JU"),h={computed:Object(i.a)({},Object(m.b)("cart",{total:"total"}))},f=a("KHd+"),b=Object(f.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"curr-price price-val",staticStyle:{"font-size":"1.6rem"}},[this._v("\n  "+this._s(this._f("money")(this.total))+"\n")])}),[],!1,null,"c067f3d8",null).exports,p=a("a+hW"),v={value:"",text:"Chọn xã hoặc phường"},_={value:"",text:"Chọn quận hoặc huyện",xa_phuong:[v]},g={components:{CartTotal:b},metaInfo:{title:"Thanh Toán"},data:function(){return{form:{phone:"",email:"",name:"",address:"",city:"",ward:"",district:"",note:""},submitting:!1}},computed:Object(i.a)(Object(i.a)({},Object(m.b)("cart",{getProducts:"getProducts",total:"total"})),{},{countProducts:function(){return this.getProducts.length},cities:function(){var t=this.$page.hanhchinhs.edges.map((function(t){return{value:t.node.name_with_type,text:t.node.name_with_type,quan_huyen:t.node.quan_huyen}}));return[{value:"",text:"Chọn tỉnh hoặc thành phố",quan_huyen:[_]}].concat(r(t))},districts:function(){var t=this,e=this.wards.find((function(e){return e.value===t.form.ward}));return e?(console.log(e),[v].concat(r(e.xa_phuong.map((function(t){return{value:t.name_with_type,text:t.name_with_type}}))))):[v]},wards:function(){var t=this,e=this.cities.find((function(e){return e.value===t.form.city}));return e?[_].concat(r(e.quan_huyen.map((function(t){return{value:t.name_with_type,text:t.name_with_type,xa_phuong:t.xa_phuong}})))):[_]}}),methods:{removeFromCart:function(t){this.$store.commit("cart/remove",t)},image:function(t,e){return Object(p.a)(t,e)},submit:function(){var t=this;if(this.submitting=!0,this.form.name&&this.form.phone&&this.form.address&&this.form.ward&&this.form.district&&this.form.city){var e=this.getProducts.map((function(t){return"".concat(t.name,",").concat(Object(p.b)(t.price))})).join("\n");u("service_7s3qqok","template_e0bybsd",{name:this.form.name,phone:this.form.phone,email:this.form.email,address:"".concat(this.form.address,", ").concat(this.form.district,", ").concat(this.form.ward,", ").concat(this.form.city),product_info:e,num:this.countProducts,note:this.form.note},"LIqAEhzCplX11Pv-x").then((function(){t.submitting=!1,alert("Cảm ơn quý khách đã đặt hàng thành công."),t.$store.commit("cart/removeAll"),t.$router.push("/")}),(function(){t.submitting=!1,alert("Có một vài vấn đề với hệ thống, xin quý khách hãy thử lại sau ít phút.")}))}else alert("Xin hãy nhập đầy đủ bắt buộc thông tin để chuyển hàng")}}},y=(a("I3j8"),a("Kw5r")),w=y.default.config.optionMergeStrategies.computed,x={metadata:{pathPrefix:"/duanuong-website"}},C=function(t){var e=t.options;e.__staticData?e.__staticData.data=x:(e.__staticData=y.default.observable({data:x}),e.computed=w({$static:function(){return e.__staticData.data}},e.computed))},j=null,k=Object(f.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"col-md-9 order-1 order-md-2"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row d-flex justify-content-center align-items-center"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card card-registration card-registration-2",staticStyle:{"border-radius":"15px"}},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"row g-0"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"p-5"},[a("div",{staticClass:"d-flex justify-content-between align-items-center mb-5"},[a("h1",{staticClass:"fw-bold mb-0 text-black"},[t._v("Giỏ Hàng")]),a("h6",{staticClass:"mb-0 text-muted"},[t._v("\n                        "+t._s(t.countProducts)+" đơn vị\n                      ")])]),a("hr",{staticClass:"my-4"}),t.countProducts?t._l(t.getProducts,(function(e,s){return[a("div",{staticClass:"row mb-4 d-flex justify-content-between align-items-center"},[a("div",{staticClass:"col-md-2 col-lg-2 col-xl-2"},[a("g-image",{staticClass:"img-fluid rounded-3",attrs:{src:t.image(t.$static.metadata.pathPrefix,e.image),alt:e.name}})],1),a("g-link",{staticClass:"col-md-3 col-lg-3 col-xl-3",attrs:{to:e.path}},[a("h6",{staticClass:"text-muted"},[t._v(t._s(e.name))])]),a("div",{staticClass:"col-md-3 col-lg-2 col-xl-2 offset-lg-1"},[a("h6",{staticClass:"mb-0 curr-price price-val"},[t._v("\n                            "+t._s(t._f("money")(e.price))+"\n                          ")])]),a("div",{staticClass:"col-md-1 col-lg-1 col-xl-1 text-end"},[a("button",{staticClass:"btn btn-link px-2",on:{click:function(e){return t.removeFromCart(s)}}},[a("b-icon",{attrs:{icon:"x-circle-fill"}})],1)])],1),a("hr",{staticClass:"my-4"})]})):a("h6",[t._v("Giỏ hàng trống")]),a("hr",{staticClass:"my-4"}),a("div",{staticClass:"d-flex justify-content-between mb-5"},[a("h6",{staticClass:"text-uppercase"},[t._v("Tổng Giá:")]),a("span",{staticClass:"curr-price price-val"},[t._v("\n                        "+t._s(t._f("money")(t.total))+"\n                      ")])])],2)])])])])])])]),t.countProducts?a("hr"):t._e(),t.countProducts?a("div",{staticClass:"col-12"},[a("div",{staticClass:"card card-registration card-registration-2",staticStyle:{"border-radius":"15px"}},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"p-5"},[t.countProducts?a("h4",[t._v("Đặt Hàng")]):t._e(),a("b-row",{},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"name"}},[t._v("\n                  Họ và Tên\n                  "),a("code",[t._v("bắt buộc")]),t._v("\n                  :\n                ")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-input",{attrs:{id:"name",type:"text",placeholder:"Nhập Họ và Tên"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),a("b-row",{},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"phone"}},[t._v("\n                  Điện Thoại\n                  "),a("code",[t._v("bắt buộc")]),t._v("\n                  :\n                ")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-input",{attrs:{id:"phone",type:"tel",placeholder:"Nhập Số Điện Thoại"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),a("b-row",{},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"email"}},[t._v("Email:")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Nhập Địa chỉ email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),a("b-row",{},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"address"}},[t._v("\n                  Địa Chỉ\n                  "),a("code",[t._v("bắt buộc")]),t._v("\n                  :\n                ")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-input",{attrs:{id:"address",type:"text",placeholder:"Nhập Số Nhà và Tên Đường"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)],1),a("b-row",{},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"city"}},[t._v("\n                  Thành Phố\n                  "),a("code",[t._v("bắt buộc")]),t._v("\n                  :\n                ")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-select",{attrs:{id:"city",options:t.cities},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1)],1),a("b-row",{},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"ward"}},[t._v("\n                  Quận\n                  "),a("code",[t._v("bắt buộc")]),t._v("\n                  :\n                ")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-select",{attrs:{id:"ward",options:t.wards},model:{value:t.form.ward,callback:function(e){t.$set(t.form,"ward",e)},expression:"form.ward"}})],1)],1),a("b-row",{},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"district"}},[t._v("\n                  Phường\n                  "),a("code",[t._v("bắt buộc")]),t._v("\n                  :\n                ")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-select",{attrs:{id:"district",options:t.districts},model:{value:t.form.district,callback:function(e){t.$set(t.form,"district",e)},expression:"form.district"}})],1)],1),a("b-row",{staticClass:"p-5"},[a("b-col",{attrs:{sm:"3"}}),a("b-col",{attrs:{sm:"9"}},[a("b-button",{attrs:{variant:"danger",disabled:t.submitting},on:{click:t.submit}},[t._v("\n                  Đặt Hàng\n                ")])],1)],1)],1)])])]):t._e()])])}),[],!1,null,"cd206b28",null);"function"==typeof C&&C(k),"function"==typeof j&&j(k);e.default=k.exports},I3j8:function(t,e,a){"use strict";a("32/M")},fbCW:function(t,e,a){"use strict";var s=a("I+eb"),n=a("tycR").find,r=a("RNIs"),i=a("rkAj"),o=!0,c=i("find");"find"in[]&&Array(1).find((function(){o=!1})),s({target:"Array",proto:!0,forced:o||!c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")}}]);