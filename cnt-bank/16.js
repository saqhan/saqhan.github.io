(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-products-items.entry.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-products-items.entry.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_products_items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_products_items", function() { return SCntBankProductsItems; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankProductsItemsCss = ".product-list-wrapper.sc-s-cnt-bank-products-items{padding:15px 15px 15px 15px}.products-content.sc-s-cnt-bank-products-items{height:calc(100vh - 100px);overflow-y:scroll}";

const SCntBankProductsItems = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-list-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-product-list-header", { payload: this.payload.productListHeader }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-product-list-panel-navigate", { payload: this.payload.filterItems }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-content" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-cards-items" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ProductCards, { products: this.payload.productsList })))));
    }
};
/**
 *
 * */
const ProductCards = (props) => {
    return props.products.map((product) => {
        return Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-product-card", { product: product });
    });
};
SCntBankProductsItems.style = sCntBankProductsItemsCss;




/***/ })

}]);
//# sourceMappingURL=16.js.map