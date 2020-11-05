(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-product-card_3.entry.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-product-card_3.entry.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_product_card, s_cnt_bank_product_list_header, s_cnt_bank_product_list_panel_navigate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_product_card", function() { return SCntBankProductCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_product_list_header", function() { return SCntBankProductListHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_product_list_panel_navigate", function() { return SCntBankProductListPanelNavigate; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankProductCardCss = ".products-card.sc-s-cnt-bank-product-card{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:20px 10px;border:1px solid #cecece;border-radius:10px;height:100px;margin-bottom:15px}.product-image.sc-s-cnt-bank-product-card{width:20%;max-width:50px;height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.product-image.sc-s-cnt-bank-product-card img.sc-s-cnt-bank-product-card{width:100%}.product-desc.sc-s-cnt-bank-product-card{width:60%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 15px;line-height:20px}.product-price.sc-s-cnt-bank-product-card{width:20%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:12px;text-align:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-flow:column;flex-flow:column}.product-price-sale.sc-s-cnt-bank-product-card{background-color:#fa5255;color:#fff;border-radius:6px;padding:5px;width:100%}.product-price.sc-s-cnt-bank-product-card{color:#fa5255}";

const SCntBankProductCard = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnCard = Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnCard", 7);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-card", onClick: () => this.clickOnCardHandler() }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-image" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.product.img, alt: "" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-desc" }, this.product.title), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-price" }, this.product.sale ? Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-price-sale" }, "- ", this.product.sale, "%") : '', Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-price-value" }, this.product.price, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "price-value" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.product.value }))))));
    }
    /**
     *
     * */
    clickOnCardHandler() {
        this.clickOnCard.emit('single-page');
    }
};
SCntBankProductCard.style = sCntBankProductCardCss;

const sCntBankProductListHeaderCss = ".products-header.sc-s-cnt-bank-product-list-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.product-category.sc-s-cnt-bank-product-list-header{font-size:22px;font-weight:700;margin-left:30px}.product-author-icon.sc-s-cnt-bank-product-list-header img.sc-s-cnt-bank-product-list-header{width:48px;height:48px;border-radius:50%}";

const SCntBankProductListHeader = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-header" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-category" }, this.payload.categoryTitle), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-author-icon" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.payload.authorImg, alt: "" }))));
    }
};
SCntBankProductListHeader.style = sCntBankProductListHeaderCss;

const sCntBankProductListPanelNavigateCss = ".products-panel.sc-s-cnt-bank-product-list-panel-navigate{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:10px 0px}.products-filter.sc-s-cnt-bank-product-list-panel-navigate{font-size:14px}.products-filter.sc-s-cnt-bank-product-list-panel-navigate select.sc-s-cnt-bank-product-list-panel-navigate{border:none;background-color:#fff;margin-left:10px}.products-count-results.sc-s-cnt-bank-product-list-panel-navigate{color:#828282;font-size:12px}.products-cards-items.sc-s-cnt-bank-product-list-panel-navigate{margin-top:10px;height:calc(100vh - 180px);overflow-y:scroll}";

const SCntBankProductListPanelNavigate = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-panel" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-filter" }, "Filter by", Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("select", { name: "", id: "" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FilterOptions, { options: this.payload }))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-count-results" }, "12 345 Results")));
    }
};
/**
 *
 * */
const FilterOptions = (props) => {
    return props.options.map((option) => {
        return Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", { value: option.id }, option.title);
    });
};
SCntBankProductListPanelNavigate.style = sCntBankProductListPanelNavigateCss;




/***/ })

}]);
//# sourceMappingURL=13.js.map