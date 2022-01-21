(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-cards_2.entry.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-cards_2.entry.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_cards, s_cnt_bank_cards_add_card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_cards", function() { return SCntBankCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_cards_add_card", function() { return SCntBankCardsAddCard; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankCardsCss = ".my-card.sc-s-cnt-bank-cards{height:280px;width:100%;max-width:480px;border-radius:40px;color:#ffffff;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end;padding:30px;font-weight:600;font-size:18px;margin:0 auto;-webkit-box-shadow:0 14px 28px rgba(247,171,36, 0.22), 0 10px 10px rgba(228,117,199, 0.22), 0 10px 10px rgba(108,154,252, 0.22);box-shadow:0 14px 28px rgba(247,171,36, 0.22), 0 10px 10px rgba(228,117,199, 0.22), 0 10px 10px rgba(108,154,252, 0.22)}.name.sc-s-cnt-bank-cards{margin-bottom:15px}.sum.sc-s-cnt-bank-cards{font-size:24px;font-weight:900}.logo.sc-s-cnt-bank-cards{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.logo-dot-red.sc-s-cnt-bank-cards,.logo-dot-orange.sc-s-cnt-bank-cards{width:30px;height:30px;background-color:#ee5016;border-radius:50%}.logo-dot-red.sc-s-cnt-bank-cards{margin-right:-10px;z-index:2}.logo-dot-orange.sc-s-cnt-bank-cards{background-color:#f69e1b;z-index:1}.my-card-right-col.sc-s-cnt-bank-cards{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}";

const SCntBankCards = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "my-card", style: { background: `linear-gradient(90deg, rgba(${this.cards.firstColor}) 0%, rgba(${this.cards.secondColor}) 35%, rgba(${this.cards.thirdColor}) 100%)`
            } }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "my-card-left-col" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "name" }, this.cards.name), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "code" }, this.cards.code)), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "my-card-right-col" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo-dot-red" }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo-dot-orange" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sum" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.cards.currency), this.cards.sum))));
    }
};
SCntBankCards.style = sCntBankCardsCss;

const sCntBankCardsAddCardCss = ".my-cards-header.sc-s-cnt-bank-cards-add-card{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;max-width:480px;margin:0 auto 40px auto}.title.sc-s-cnt-bank-cards-add-card{font-weight:900;font-size:32px;margin:0}.add-btn.sc-s-cnt-bank-cards-add-card{border:2px solid #e2e7ec;width:45px;height:45px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:10px;color:#917ffe;font-size:18px;position:relative}.add-btn.sc-s-cnt-bank-cards-add-card:after,.add-btn.sc-s-cnt-bank-cards-add-card:before{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:\"\";width:14px;height:2px;background-color:#677784}.add-btn.sc-s-cnt-bank-cards-add-card:before{background-color:#917ffe;height:14px;width:2px}";

const SCntBankCardsAddCard = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "my-cards-header" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", { class: "title" }, this.payload.title), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "add-btn" })));
    }
};
SCntBankCardsAddCard.style = sCntBankCardsAddCardCss;




/***/ })

}]);
//# sourceMappingURL=4.js.map