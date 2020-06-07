(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-lenta-news-card_2-entry-js"],{

/***/ "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-lenta-news-card_2.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-lenta-news-card_2.entry.js ***!
  \*******************************************************************************/
/*! exports provided: s_saqhan_lenta_news_card, s_saqhan_main_news_card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_lenta_news_card", function() { return SSaqhanLentaNewsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_main_news_card", function() { return SSaqhanMainNewsCard; });
/* harmony import */ var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a106f9f.js */ "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");


const sSaqhanLentaNewsCardCss = ".btn-custom{padding:10px 20px;font-size:12px;border-radius:10px}.lenta-news{padding-bottom:20px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1}.lenta-img{width:110px;height:110px;background-size:cover;border-radius:3px;margin-right:35px}.lenta-info{-ms-flex:2;flex:2}.lenta-title{font-size:15px;margin-top:10px;font-weight:600}.btn-read span{color:#000000;font-weight:700;-webkit-transition:0.3s all;transition:0.3s all;border-bottom:1px solid #000}.btn-read span:hover{text-decoration:none;color:#007bff;border-bottom:1px solid #007bff;cursor:context-menu}@media (min-width: 768px){.lenta-title-first{width:100%}}";

const SSaqhanLentaNewsCard = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ColorCategory = (nameCategory) => {
            const classCategory = "category lenta-category small";
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
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "lenta-news " }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "lenta-img pr-4 custom-link", onClick: () => this.clickOnNews.emit({ place: 'img', item: this.lentaNews }), style: { backgroundImage: `url(${this.lentaNews.img})` } }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "lenta-info custom-link" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onClick: () => this.clickOnNews.emit({ place: 'category', item: this.lentaNews }), class: this.ColorCategory(this.lentaNews.category) }, this.lentaNews.category), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onClick: () => this.clickOnNews.emit({ place: 'title', item: this.lentaNews }), class: "lenta-title  custom-link" }, this.lentaNews.title), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-read custom-link" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.clickOnNews.emit({ place: 'btn-read', item: this.lentaNews }) }, this.lentaNews.btnText)))));
    }
};
SSaqhanLentaNewsCard.style = sSaqhanLentaNewsCardCss;

const sSaqhanMainNewsCardCss = ".btn-custom{padding:10px 20px;font-size:12px;border-radius:10px}.btn-read span{color:#000000;font-weight:700;-webkit-transition:0.3s all;transition:0.3s all;border-bottom:1px solid #000}.btn-read span:hover{text-decoration:none;color:#007bff;border-bottom:1px solid #007bff;cursor:context-menu}.custon-link{cursor:pointer}.img-news{height:308px;background-size:cover;background-position:center}.img-news img{width:100%;height:315px}.btn-custom{padding:10px 20px;font-size:12px;border-radius:10px}.category-news{font-weight:600}.btn-read a{color:#000000;font-weight:700;-webkit-transition:0.3s all;transition:0.3s all;border-bottom:1px solid #000}.btn-read a:hover{text-decoration:none;color:#007bff;border-bottom:1px solid #007bff;cursor:context-menu}@media (max-width: 768px){.main-news{margin-bottom:20px}}@media (max-width: 992px){.img-news img{height:auto}}";

const SSaqhanMainNewsCard = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ColorCategory = (nameCategory) => {
            const classCategory = "category category-news pt-3 small custon-link";
            switch (nameCategory) {
                case "Report":
                    return `report ${classCategory}`;
                case `Webinar ${classCategory}`:
                    return `webinar ${classCategory}`;
                case "Blog Post":
                    return `blog-post ${classCategory}`;
            }
        };
        this.clickOnNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-news" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-news m-auto custon-link", onClick: () => this.clickOnNews.emit({ place: 'img', item: this.mainNews }), style: { backgroundImage: `url(${this.mainNews.img})` } }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onClick: () => this.clickOnNews.emit({ place: 'category', item: this.mainNews }), class: this.ColorCategory(this.mainNews.category) }, this.mainNews.category), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onClick: () => this.clickOnNews.emit({ place: 'title', item: this.mainNews }), class: "title-news pt-3 h2 font-weight-bold custon-link" }, this.mainNews.title), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onClick: () => this.clickOnNews.emit({ place: 'subTitle', item: this.mainNews }), class: "sub-title-news pt-3 pb-3 text-muted custon-link" }, this.mainNews.subTitle), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.clickOnNews.emit({ place: 'btn read', item: this.mainNews }), class: "btn btn-primary btn-custom custon-link" }, this.mainNews.btnText))));
    }
};
SSaqhanMainNewsCard.style = sSaqhanMainNewsCardCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-saqhan-lenta-news-card_2-entry-js-es2015.js.map