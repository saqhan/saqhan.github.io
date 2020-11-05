(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-search-history-card_2.entry.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-search-history-card_2.entry.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_search_history_card, s_cnt_bank_search_history_card_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_search_history_card", function() { return SCntBankSearchHistoryCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_search_history_card_content", function() { return SCntBankSearchHistoryCardContent; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankSearchHistoryCardCss = ".history-card-title.sc-s-cnt-bank-search-history-card{font-size:24px;font-weight:600;margin-bottom:30px}";

const SCntBankSearchHistoryCard = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "history-card-title" }, this.cardItems.caption), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "history-card-content" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(SearchHistoryCardContentFunctionalComponent, { content: this.cardItems.links }))));
    }
};
/**
 *
 * @param props
 * @constructor
 */
const SearchHistoryCardContentFunctionalComponent = (props) => {
    return props.content.map((item) => {
        return Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-search-history-card-content", { content: item });
    });
};
SCntBankSearchHistoryCard.style = sCntBankSearchHistoryCardCss;

const sCntBankSearchHistoryCardContentCss = ".card-content-block.sc-s-cnt-bank-search-history-card-content{display:-ms-flexbox;display:flex;font-size:18px;margin-bottom:30px;-ms-flex-align:center;align-items:center}.icon-block.sc-s-cnt-bank-search-history-card-content{margin-right:30px;color:#b2b2b2}";

const SCntBankSearchHistoryCardContent = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-content-block" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-block" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.content.icon })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text-block" }, this.content.name)));
    }
};
SCntBankSearchHistoryCardContent.style = sCntBankSearchHistoryCardContentCss;




/***/ })

}]);
//# sourceMappingURL=19.js.map