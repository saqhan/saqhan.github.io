(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-slider-cards_2.entry.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-slider-cards_2.entry.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_slider_cards, s_cnt_bank_slider_cards_settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_slider_cards", function() { return SCntBankSliderCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_slider_cards_settings", function() { return SCntBankSliderCardsSettings; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankSliderCardsCss = ".card-left-column.sc-s-cnt-bank-slider-cards{width:85%;padding:30px 0;border-bottom-left-radius:40px;border-top-left-radius:40px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;position:absolute;top:0;left:0;overflow:hidden;-webkit-transition:1s;transition:1s;white-space:nowrap}.animate.sc-s-cnt-bank-slider-cards .card-left-column.sc-s-cnt-bank-slider-cards{width:4%}.card-left-column-settings.sc-s-cnt-bank-slider-cards{width:85%;padding:30px 0 30px 40px;border-bottom-left-radius:40px;border-top-left-radius:40px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:red}.card-right-column.sc-s-cnt-bank-slider-cards{width:15%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:30px 0;position:relative}.slider-card-content.sc-s-cnt-bank-slider-cards{color:#ffffff;display:-ms-flexbox;display:flex;height:100%;position:relative}.slider-card-header.sc-s-cnt-bank-slider-cards{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:50px;padding-left:40px}.slider-card-body.sc-s-cnt-bank-slider-cards{padding-left:40px}.payment-system.sc-s-cnt-bank-slider-cards{font-size:22px;font-weight:500}.logo.sc-s-cnt-bank-slider-cards{display:-ms-flexbox;display:flex;margin-right:10px}.logo-left-circle.sc-s-cnt-bank-slider-cards,.logo-right-circle.sc-s-cnt-bank-slider-cards{width:40px;height:40px;background-color:#ffffff;border-radius:50%;opacity:0.5}.logo-left-circle.sc-s-cnt-bank-slider-cards{margin-right:-15px}.logo-right-circle.sc-s-cnt-bank-slider-cards{opacity:0.2}.card-code.sc-s-cnt-bank-slider-cards{font-weight:500;font-size:22px;margin-bottom:15px}.sum.sc-s-cnt-bank-slider-cards{font-weight:900;font-size:34px}.card-settings.sc-s-cnt-bank-slider-cards{font-size:24px;opacity:0.5}.animate.sc-s-cnt-bank-slider-cards .card-settings.sc-s-cnt-bank-slider-cards{opacity:1}.mobile-payment-system.sc-s-cnt-bank-slider-cards{font-size:42px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}";

const SCntBankSliderCards = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Стейт для включения анимации
         */
        this.toggleClassState = false;
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "slider-card-content", ref: el => this.leftColumnTag = el }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-left-column", style: { backgroundColor: this.cards.leftColBgColor } }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "slider-card-header" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo-left-circle" }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo-right-circle" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "payment-system" }, this.cards.paymentSystem)), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "slider-card-body" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-code" }, this.cards.code), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sum" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.cards.currency, " "), this.cards.sum))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-left-column-settings", style: { backgroundColor: this.cards.bgColor } }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CardSettingsFunctionalComponent, { items: this.cardSettings })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-right-column" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-settings", onClick: () => this.startAnimation() }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-cog" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mobile-payment-system" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.cards.icon }))))));
    }
    /**
     * Старт анимации
     */
    startAnimation() {
        this.toggleClassState = !this.toggleClassState;
        if (this.toggleClassState) {
            this.leftColumnTag.classList.add('animate');
        }
        else {
            this.leftColumnTag.classList.remove('animate');
        }
    }
};
/**
 *
 * @param props
 * @constructor
 */
const CardSettingsFunctionalComponent = props => {
    return props.items.map(item => {
        return Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-slider-cards-settings", { settingsItems: item });
    });
};
SCntBankSliderCards.style = sCntBankSliderCardsCss;

const sCntBankSliderCardsSettingsCss = ".icon-wrapper.sc-s-cnt-bank-slider-cards-settings{width:48px;height:48px;border-radius:40%;background-color:rgba(255,255,255,0.2);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:24px;margin-right:15px}.settings-item.sc-s-cnt-bank-slider-cards-settings{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.text.sc-s-cnt-bank-slider-cards-settings{font-size:18px}";

const SCntBankSliderCardsSettings = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "settings-item" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.settingsItems.icon })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text" }, this.settingsItems.text)));
    }
};
SCntBankSliderCardsSettings.style = sCntBankSliderCardsSettingsCss;




/***/ })

}]);
//# sourceMappingURL=24.js.map