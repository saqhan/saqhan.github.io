(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-cards-menu_2.entry.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-cards-menu_2.entry.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_cards_menu, s_cnt_bank_cards_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_cards_menu", function() { return SCntBankCardsMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_cards_wrapper", function() { return SCntBankCardsWrapper; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankCardsMenuCss = ".switch-cards-btn-wrapper.sc-s-cnt-bank-cards-menu{width:100%;max-width:480px;height:60px;border-radius:30px;border:2px solid #e1e7ec;margin:0 auto 40px auto;display:-ms-flexbox;display:flex}.switch-cards-btn-text.sc-s-cnt-bank-cards-menu{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-weight:600;padding:0 30px;height:100%}.switch-cards-btn.sc-s-cnt-bank-cards-menu{color:#9980fe;border-radius:30px;margin:-1px;-ms-flex:1;flex:1}.switch-cards-btn.active.sc-s-cnt-bank-cards-menu{background-color:#9980fe;color:#ffffff}";

const SCntBankCardsMenu = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Последняя кликнутая кнопка
         */
        this.lastClickedBtnState = 1;
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "switch-cards-btn-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CardsMenuButtonsFunctionalComponent, { lastClickedBtnState: this.lastClickedBtnState, clickOnBtn: (item) => this.clickOnBtn(item), buttonsText: this.payload })));
    }
    /**
     * Клик по кнопкам выбора карт
     * @param item
     */
    clickOnBtn(item) {
        this.lastClickedBtnState = item.id;
    }
};
/**
 *
 * @param props
 * @constructor
 */
const CardsMenuButtonsFunctionalComponent = props => {
    return props.buttonsText.map(item => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `switch-cards-btn ${item.id === props.lastClickedBtnState && 'active'}`, onClick: () => props.clickOnBtn(item) }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "switch-cards-btn-text" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-cards-menu-btn", { buttonsText: item }))));
    });
};
SCntBankCardsMenu.style = sCntBankCardsMenuCss;

const sCntBankCardsWrapperCss = ".my-cards-wrapper.sc-s-cnt-bank-cards-wrapper{margin-bottom:20px}";

const SCntBankCardsWrapper = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-cards-add-card", { payload: this.payload }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "my-cards-body" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MyCardsFunctionalComponent, { cards: this.payload.cards }))));
    }
};
/**
 *
 * @param props
 * @constructor
 */
const MyCardsFunctionalComponent = (props) => {
    return props.cards.map((card) => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "my-cards-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-cards", { cards: card })));
    });
};
SCntBankCardsWrapper.style = sCntBankCardsWrapperCss;




/***/ })

}]);
//# sourceMappingURL=2.js.map