(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-search-history-cards-wrapper_2.entry.js":
/*!************************************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-search-history-cards-wrapper_2.entry.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_search_history_cards_wrapper, s_cnt_bank_search_history_header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_search_history_cards_wrapper", function() { return SCntBankSearchHistoryCardsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_search_history_header", function() { return SCntBankSearchHistoryHeader; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankSearchHistoryCardsWrapperCss = ".search-history-card-wrapper.sc-s-cnt-bank-search-history-cards-wrapper{margin-top:50px}.search-history-card.sc-s-cnt-bank-search-history-cards-wrapper{padding-top:30px}.search-history-card.sc-s-cnt-bank-search-history-cards-wrapper:last-child{padding-top:0}";

const SCntBankSearchHistoryCardsWrapper = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-history-card-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(HistoryCardFunctionalComponent, { card: this.payload })));
    }
};
/**
 *
 * @param props
 * @constructor
 */
const HistoryCardFunctionalComponent = (props) => {
    return props.card.map((item) => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-history-card" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-search-history-card", { cardItems: item })));
    });
};
SCntBankSearchHistoryCardsWrapper.style = sCntBankSearchHistoryCardsWrapperCss;

const sCntBankSearchHistoryHeaderCss = ".header.sc-s-cnt-bank-search-history-header{display:-ms-flexbox;display:flex;padding:15px;-webkit-box-shadow:0 1px 4px rgba(57, 63, 72, 0.2);box-shadow:0 1px 4px rgba(57, 63, 72, 0.2);position:fixed;top:0;width:100%;max-width:1024px;z-index:1;background-color:#ffffff;-ms-flex-align:center;align-items:center}form.sc-s-cnt-bank-search-history-header{position:relative;width:100%;height:35px}input.sc-s-cnt-bank-search-history-header{background-color:#f5f5f5;width:100%;height:100%;border-radius:30px;border:none;padding-left:30px;caret-color:#0da94f}input.sc-s-cnt-bank-search-history-header:focus{outline:none}input.sc-s-cnt-bank-search-history-header::-webkit-input-placeholder{color:#787878;font-size:18px;opacity:0.8}.arrow-icon-block.sc-s-cnt-bank-search-history-header,.microphone-icon-block.sc-s-cnt-bank-search-history-header{font-size:20px;color:#0da94f}.arrow-icon-block.sc-s-cnt-bank-search-history-header{margin-right:20px}.microphone-icon-block.sc-s-cnt-bank-search-history-header{position:absolute;right:15px;top:0;height:35px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}";

const SCntBankSearchHistoryHeader = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "arrow-icon-block" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.payload.arrowIcon })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { action: "" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: this.payload.placeholder }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "microphone-icon-block" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.payload.microphoneIcon })))));
    }
};
SCntBankSearchHistoryHeader.style = sCntBankSearchHistoryHeaderCss;




/***/ })

}]);
//# sourceMappingURL=20.js.map