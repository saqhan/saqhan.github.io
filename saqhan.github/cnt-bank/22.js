(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-slider-cards-bonus_4.entry.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-slider-cards-bonus_4.entry.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_slider_cards_bonus, s_cnt_bank_slider_cards_header, s_cnt_bank_slider_cards_transfers, s_cnt_bank_slider_cards_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_slider_cards_bonus", function() { return SCntBankSliderCardsBonus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_slider_cards_header", function() { return SCntBankSliderCardsHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_slider_cards_transfers", function() { return SCntBankSliderCardsTransfers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_slider_cards_wrapper", function() { return SCntBankSliderCardsWrapper; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankSliderCardsBonusCss = ".bonus.sc-s-cnt-bank-slider-cards-bonus{height:150px;width:100%;margin-top:40px;border-radius:40px;background:linear-gradient(110deg, rgba(102,83,169,1) 0%, rgba(228,117,199,0.8) 35%, rgba(88,33,49,1) 100%);color:#ffffff;padding:40px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.title.sc-s-cnt-bank-slider-cards-bonus{opacity:0.5;font-size:18px}.sum.sc-s-cnt-bank-slider-cards-bonus{font-size:34px;font-weight:900}.bonus-button.sc-s-cnt-bank-slider-cards-bonus{min-width:170px;height:60px;font-size:18px;background-color:rgba(255,255,255,0.1);border-radius:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-weight:500;-webkit-box-shadow:0 0 69px 1px #64293f;box-shadow:0 0 69px 1px #64293f}.angle-icon.sc-s-cnt-bank-slider-cards-bonus{margin-left:10px;font-size:22px;opacity:0.5}@media (max-width: 375px){.bonus-button.sc-s-cnt-bank-slider-cards-bonus{min-width:125px;height:60px;font-size:12px}.sum.sc-s-cnt-bank-slider-cards-bonus{font-size:24px}}";

const SCntBankSliderCardsBonus = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bonus" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "left-column" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title" }, this.payload.title), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sum" }, this.payload.sum)), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "right-column" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bonus-button" }, this.payload.btn, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "angle-icon" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-angle-right" }))))));
    }
};
SCntBankSliderCardsBonus.style = sCntBankSliderCardsBonusCss;

const sCntBankSliderCardsHeaderCss = ".slider-cards-header.sc-s-cnt-bank-slider-cards-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-bottom:20px;font-size:35px}.info-icon.sc-s-cnt-bank-slider-cards-header{color:#a0a7c2}.angle-icon.sc-s-cnt-bank-slider-cards-header{color:#313751}.title.sc-s-cnt-bank-slider-cards-header{font-weight:900;font-size:32px;margin-bottom:0;color:#000000}";

const SCntBankSliderCardsHeader = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "slider-cards-header" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "angle-icon" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-angle-left" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title" }, this.payload), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-icon" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-info-circle" }))));
    }
};
SCntBankSliderCardsHeader.style = sCntBankSliderCardsHeaderCss;

const sCntBankSliderCardsTransfersCss = ".transfers.sc-s-cnt-bank-slider-cards-transfers{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;color:#abb1ca;font-size:32px;margin-top:80px}.separator.sc-s-cnt-bank-slider-cards-transfers{width:1px;background-color:#ebe9ee}.text.sc-s-cnt-bank-slider-cards-transfers{color:#3a3e5b;display:inline-block;margin-left:10px;font-weight:600;font-size:18px}";

const SCntBankSliderCardsTransfers = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "transfers" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "receive" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-download" }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "text" }, this.payload.receive)), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "separator" }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "send" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-upload" }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "text" }, this.payload.send))));
    }
};
SCntBankSliderCardsTransfers.style = sCntBankSliderCardsTransfersCss;

const sCntBankSliderCardsWrapperCss = ".main-carousel.sc-s-cnt-bank-slider-cards-wrapper{overflow:hidden;max-width:480px;margin:0 auto;outline:none}.main-carousel-wrapper.sc-s-cnt-bank-slider-cards-wrapper{position:relative}.carousel-card.sc-s-cnt-bank-slider-cards-wrapper{width:100%;max-width:480px;height:280px;border-radius:40px;margin-right:10px;position:relative;overflow:hidden}";

const SCntBankSliderCardsWrapper = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    componentDidLoad() {
        let elem = this.carouselTag;
        new Flickity(elem, {
            wrapAround: true,
            contain: true,
            pageDots: true,
            prevNextButtons: false,
            cellAlign: 'left',
        });
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-carousel-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-carousel", ref: (el) => (this.carouselTag = el) }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CarouselCardFunctionalComponent, { cardSettings: this.cardSettings, cards: this.payload }))));
    }
};
/**
 *
 * @param props
 * @constructor
 */
const CarouselCardFunctionalComponent = (props) => {
    return props.cards.map((item) => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-card", style: { background: item.bgColor } }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-slider-cards", { cardSettings: props.cardSettings, cards: item })));
    });
};
SCntBankSliderCardsWrapper.style = sCntBankSliderCardsWrapperCss;




/***/ })

}]);
//# sourceMappingURL=22.js.map