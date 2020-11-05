(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-product-single-page.entry.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-product-single-page.entry.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_product_single_page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_product_single_page", function() { return SCntBankProductSinglePage; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankProductSinglePageCss = ".product-single-wrapper.sc-s-cnt-bank-product-single-page{padding:15px;height:calc(100vh - 50px);overflow-y:scroll;max-width:1024px;margin:auto;background-color:#ffffff}.product-single-header.sc-s-cnt-bank-product-single-page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.product-single-header.sc-s-cnt-bank-product-single-page div.sc-s-cnt-bank-product-single-page{font-size:20px;color:#323223}.product-single-content.sc-s-cnt-bank-product-single-page{position:relative}.product-single-desc.sc-s-cnt-bank-product-single-page{margin:15px 0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.product-single-image.sc-s-cnt-bank-product-single-page{width:100%;height:300px;max-width:1024px;margin:15px auto;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.product-single-image.sc-s-cnt-bank-product-single-page img.sc-s-cnt-bank-product-single-page{height:100%;margin:auto}.product-single-title.sc-s-cnt-bank-product-single-page{font-size:18px;font-weight:600;color:#323223}.product-single-text.sc-s-cnt-bank-product-single-page{text-align:justify}.product-single-price-wrap.sc-s-cnt-bank-product-single-page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;font-size:12px;width:100%;max-width:120px}.product-single-price-sale.sc-s-cnt-bank-product-single-page{background-color:#fa5255;color:#fff;padding:5px;border-radius:6px;width:60px;text-align:center}.product-single-price.sc-s-cnt-bank-product-single-page{color:#fa5255}.product-single-author.sc-s-cnt-bank-product-single-page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;font-size:14px}.product-single-author-img.sc-s-cnt-bank-product-single-page{width:35px;margin:0 20px}.product-single-author-img.sc-s-cnt-bank-product-single-page img.sc-s-cnt-bank-product-single-page{width:100%;height:100%;border-radius:50%}.product-single-buy.sc-s-cnt-bank-product-single-page{width:100%}.btn-buy.sc-s-cnt-bank-product-single-page{background-color:#0b76ef;color:#fff;border:none;outline:none;border-radius:6px;width:100%;padding:10px 20px;margin-top:15px}.carousel-wrapper.sc-s-cnt-bank-product-single-page{position:relative;margin-bottom:30px}.carousel-wrapper.sc-s-cnt-bank-product-single-page:focus{outline:none}";

const SCntBankProductSinglePage = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnBackCatalog = Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnBackCatalog", 7);
    }
    componentDidLoad() {
        let elem = this.carouselTag;
        new Flickity(elem, {
            wrapAround: true,
            contain: true,
            pageDots: true,
            prevNextButtons: false,
            cellAlign: 'left',
        });
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-header" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-navigate", onClick: () => this.clickOnBackCatalog.emit('catalog') }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-arrow-left" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-share" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "far fa-share-square" }))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-content" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-wrapper", ref: (el) => (this.carouselTag = el) }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(SliderImgProducts, { images: this.payload.sliderImagesProducts })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-title" }, this.payload.title), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-desc" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-price-wrap" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-price-sale" }, "- ", this.payload.sale, "%"), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-price" }, this.payload.price, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "price-value" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-euro-sign" })))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-author" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-author-img" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.payload.author.img, alt: "" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-author-name" }, this.payload.author.name))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-text" }, this.payload.description), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-buy" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn-buy" }, this.payload.btnText)))));
    }
};
/**
 *
 * */
const SliderImgProducts = props => {
    return props.images.map(item => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-single-image" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: item.img, alt: item.alt })));
    });
};
SCntBankProductSinglePage.style = sCntBankProductSinglePageCss;




/***/ })

}]);
//# sourceMappingURL=14.js.map