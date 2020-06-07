(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-popular-card-entry-js"],{

/***/ "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-popular-card.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-popular-card.entry.js ***!
  \**************************************************************************/
/*! exports provided: s_saqhan_popular_card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_popular_card", function() { return SSaqhanPopularCard; });
/* harmony import */ var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a106f9f.js */ "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");


const sSaqhanPopularCardCss = ".lenta-category{font-weight:600}.news-block{display:-ms-flexbox;display:flex}.news-block{min-height:160px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.news-img{width:248px;height:128px;background-size:cover;background-position:center;border-radius:3px;margin-right:30px;background-image:url(\"https://via.placeholder.com/500x500?text=Popular\")}.lenta-title{min-height:58px;margin-top:10px;line-height:1.2;font-weight:500;min-height:75px}.lenta-img{width:128px;height:128px;background-size:cover;margin-right:30px;border-radius:3px}.lenta-category{font-size:12px;color:#007bff}@media (min-width: 768px){.lenta-title{width:75%}}@media (max-width: 768px){.lenta-title{width:100%}}@media (max-width: 414px){.blog-img{margin:auto}.block-title{text-align:center}}";

const SSaqhanPopularCard = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ColorCategory = (nameCategory) => {
            const classCategory = "lenta-category category";
            switch (nameCategory) {
                case "Report":
                    return `report ${classCategory}`;
                case "Webinar":
                    return `webinar ${classCategory}`;
                case "Blog Post":
                    return `blog-post ${classCategory}`;
            }
        };
        this.clickOnNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "news-block" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "news-img", style: { backgroundImage: `url(${this.post.img})` }, onClick: () => this.clickOnNews.emit({ place: 'img', item: this.post }) }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "news-info" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.ColorCategory(this.post.category), onClick: () => this.clickOnNews.emit({ place: 'category', item: this.post }) }, this.post.category), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "lenta-title", onClick: () => this.clickOnNews.emit({ place: 'title', item: this.post }) }, this.post.title), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-read" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.clickOnNews.emit({ place: 'btn-read', item: this.post }) }, this.post.btnText)))));
    }
};
SSaqhanPopularCard.style = sSaqhanPopularCardCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-saqhan-popular-card-entry-js-es2015.js.map