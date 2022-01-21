(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-card-banner-entry-js"],{

/***/ "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-card-banner.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-card-banner.entry.js ***!
  \*************************************************************************/
/*! exports provided: s_saqhan_card_banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_card_banner", function() { return SSaqhanCardBanner; });
/* harmony import */ var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a106f9f.js */ "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");


const sSaqhanCardBannerCss = ".banner-title{font-size:18px;font-weight:500}.banner-sub-title{margin:25px 0;font-size:14px;font-weight:500}.right-banner{position:relative;top:-70px}.right-banner img{border-radius:3px;position:relative;top:-20px;right:50px}.btn-read button{font-size:12px}.btn-black-line{width:110px;height:40px;margin-left:0px}@media (max-width: 414px){.banner{width:109%;text-align:center}.right-banner{display:none}}";

const SSaqhanCardBanner = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row banner" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-sm-5" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-title" }, " ", this.bannerPost.title, " "), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-sub-title" }, this.bannerPost.subTitle), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-read" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn btn-primary btn-custom-head btn-black-line" }, this.bannerPost.btnText))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-4 right-banner" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.bannerPost.img, alt: "" }))));
    }
};
SSaqhanCardBanner.style = sSaqhanCardBannerCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-saqhan-card-banner-entry-js-es2015.js.map