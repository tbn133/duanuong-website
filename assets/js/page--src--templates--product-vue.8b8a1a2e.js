(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9jQP":function(t,a,s){},PE4R:function(t,a,s){"use strict";s.r(a);s("sMBO");var i={methods:{addToCart:function(){this.$store.commit("cart/add",{id:this.$page.product.id,name:this.$page.product.name,image:this.$page.product.image,price:this.$page.product.price,path:this.$page.product.path})}}},e=(s("lIgz"),s("KHd+")),n=s("Kw5r"),c=n.default.config.optionMergeStrategies.computed,p={metadata:{pathPrefix:"/duanuong-website"}},o=function(t){var a=t.options;a.__staticData?a.__staticData.data=p:(a.__staticData=n.default.observable({data:p}),a.computed=c({$static:function(){return a.__staticData.data}},a.computed))},l=null,d=Object(e.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("layout",[s("div",{staticClass:"col-md-9 order-1 order-md-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"popup-gallery"},[s("g-link",{staticClass:"tm-avatar a",attrs:{to:"/"}},[s("g-image",{staticClass:"img-fluid",attrs:{alt:t.$page.product.name,src:""+t.$static.metadata.pathPrefix+t.$page.product.image+".png"}})],1)],1)]),s("div",{staticClass:"col-md-7"},[s("label",{staticClass:"font-weight-bold d-none",attrs:{id:"dis_pric","data-discount":"0"}},[t._v("\n          0\n        ")]),s("h1",{staticClass:"pd-title"},[t._v(t._s(t.$page.product.content.title))]),s("div",{staticClass:"news-detail"},[s("b",[t._v("Mô tả ngắn")])]),s("div",{staticClass:"form-group"}),s("div",{staticClass:"news-detail"},[s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.product.content.description)}})]),s("div",{staticClass:"form-group"}),s("ul",{staticClass:"no-ul lisde news-detail"},[s("li",[s("div",[t._v("Giá:")]),s("div",[s("span",{staticClass:"curr-price price-val",attrs:{id:"currPrice_tru"}},[t._v("\n                "+t._s(t._f("money")(t.$page.product.price))+"\n              ")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"bt-cart btaddcart btaddcart-detail",attrs:{"data-toggle":"modal","data-brandtype":"","data-size":"","data-target":"#myModalCart",type:"button","data-price":t.$page.product.price},on:{click:t.addToCart}},[s("div",{staticClass:"r_1"},[t._v("MUA NGAY")])])])])])]),s("div",{staticClass:"form-group"}),s("div",{staticClass:"card"},[s("div",{staticClass:"card-header news-detail"},[s("b",[t._v("Mô tả sản phẩm "+t._s(t.$page.product.short_content))])]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"news-detail text-center news-dtable"},[s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold",color:"#fe0300","font-size":"20pt"}},[t._v("\n              "+t._s(t.$page.product.short_content)+"\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold",color:"#fe0300","font-size":"20pt"}}),s("g-image",{staticClass:"img-fluid",staticStyle:{width:"1080px",height:"1080px",display:"inline","vertical-align":"middle"},attrs:{alt:t.$page.product.name,src:t.$page.product.image+".png"}})],1),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              🌈🌈 THÔNG TIN SẢN PHẨM:\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              - Chất liệu: "+t._s(t.$page.product.content.type)+"\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              - Hình dạng: "+t._s(t.$page.product.content.kind)+"\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              - Sản xuất: "+t._s(t.$page.product.content.make_in)+"\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold",color:"#fe0300","font-size":"20pt"}}),s("g-image",{staticClass:"img-fluid",staticStyle:{width:"1080px",height:"1080px",display:"inline","vertical-align":"middle"},attrs:{alt:t.$page.product.content.title,src:t.$page.product.content.image+".png"}})],1),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              "+t._s(t.$page.product.content.introduce)+"\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              🧏‍♀️ ĐẶC BIỆT:\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              👉"+t._s(t.$page.product.content.special1)+"\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              👉"+t._s(t.$page.product.content.special2)+"\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("CAM KẾT:")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              ✔️ ️K️iểm Tra Hàng Trước Khi Thanh Toán\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              ✔️ Đổi Trả Dễ Dàng 1 đến 7 ngày\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              ✔️ Bảo Hành Chính Hãng 24 Tháng\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              ✔️ Giao Hàng Toàn Quốc\n            ")])]),s("p",{staticClass:"p-text"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"14pt"}},[t._v("\n              ✔️ Cam Kết Chính Hãng 100%\n            ")])])])])]),s("div",{staticClass:"form-group"})])])}),[],!1,null,"16802adf",null);"function"==typeof o&&o(d),"function"==typeof l&&l(d);a.default=d.exports},lIgz:function(t,a,s){"use strict";s("9jQP")}}]);