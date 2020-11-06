(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-cnt-market-app_8-entry-js"],{

/***/ "./node_modules/stencil-market/dist/esm/s-cnt-market-app_8.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/stencil-market/dist/esm/s-cnt-market-app_8.entry.js ***!
  \**************************************************************************/
/*! exports provided: s_cnt_market_app, s_cnt_market_choice, s_cnt_market_courier, s_cnt_market_delivery, s_cnt_market_offer, s_cnt_market_selection, s_cnt_market_specialist, s_cnt_market_statistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_app", function() { return SCntMarketApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_choice", function() { return SCntMarketChoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_courier", function() { return SCntMarketCourier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_delivery", function() { return SCntMarketDelivery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_offer", function() { return SCntMarketOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_selection", function() { return SCntMarketSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_specialist", function() { return SCntMarketSpecialist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_statistics", function() { return SCntMarketStatistics; });
/* harmony import */ var _index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9e7456fd.js */ "./node_modules/stencil-market/dist/esm/index-9e7456fd.js");
/* harmony import */ var _index_cdb5592b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-cdb5592b.js */ "./node_modules/stencil-market/dist/esm/index-cdb5592b.js");



const sCntMarketAppCss = ".row.sc-s-cnt-market-app{direction:rtl}.app.sc-s-cnt-market-app{display:-ms-flexbox;display:flex;position:relative;margin:auto;border-radius:20px;background:linear-gradient(\n    186deg,\n    #31ac2d -27.41%,\n    #9fd81d 85.54%,\n    #e4f413 113.41%\n  );padding:80px 65px;height:313px;margin-top:100px;margin-bottom:50px}.btn-wrapper.sc-s-cnt-market-app{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;margin-top:20px}.right.sc-s-cnt-market-app{margin-right:15px}.commonButton.sc-s-cnt-market-app{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.image.sc-s-cnt-market-app{position:relative;bottom:132px;width:358px;height:368px;border-top-left-radius:40px;border-top-right-radius:40px;background-position:center;background-size:contain;background-repeat:no-repeat}.title.sc-s-cnt-market-app{text-align:left;line-height:1.12;color:#fff;font-size:30px;font-weight:600}.btn.sc-s-cnt-market-app{outline:none;cursor:pointer;background-color:#fff;border:1px solid #d0d2d4;width:154px;height:51px;font-size:16px;padding-bottom:15px;border-radius:8px}.btn.sc-s-cnt-market-app:hover{background-color:#f3f4f7;color:#333536;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.fa-google-play.sc-s-cnt-market-app{font-size:17px}.fa-apple.sc-s-cnt-market-app{font-size:21px}.fab.sc-s-cnt-market-app{color:#21a038;margin:10px 10px 0 0}@media screen and (max-width: 1200px){.image.sc-s-cnt-market-app{bottom:90px;width:275px}}@media screen and (max-width: 992px){.image.sc-s-cnt-market-app{bottom:65px;width:225px;left:15px}}@media only screen and (max-width: 768px){.image.sc-s-cnt-market-app{bottom:0px;width:100%;margin:auto}.btn-wrapper.sc-s-cnt-market-app{margin-top:0px}.commonButton.sc-s-cnt-market-app{margin:0}.right.sc-s-cnt-market-app{margin-right:0}.app.sc-s-cnt-market-app{height:auto;padding:0 30px;margin:50px 0}.btn-wrapper.sc-s-cnt-market-app{padding:0;max-width:400px;width:100%;margin:30px auto;-ms-flex-direction:column;flex-direction:column}.title.sc-s-cnt-market-app{margin-top:50px;text-align:center;line-height:1.5;font-size:20px}.btn.sc-s-cnt-market-app{margin-top:10px;width:100%}}@media only screen and (max-width: 414px){.image.sc-s-cnt-market-app{left:0;background-position:bottom}.btn-wrapper.sc-s-cnt-market-app{margin:10px auto}}";

const SCntMarketApp = class {
    constructor(hostRef) {
        Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "app" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-8 col-md-8 col-sm-12" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "common" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title" }, this.forApp.title), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "commonButton" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-wrapper" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "left btn" }, this.forApp.appStoreButton, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-apple" }, " ")), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "right btn" }, this.forApp.googlePlayButton, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-google-play" }, " ")))))), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-4 col-md-4 col-sm-12" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "image", style: { backgroundImage: "url(" + this.forApp.image + ")" } }))))));
    }
};
SCntMarketApp.style = sCntMarketAppCss;

const sCntMarketChoiceCss = ".title.sc-s-cnt-market-choice{text-align:center;font-weight:600;font-size:34px;line-height:1.12;margin-bottom:80px}.choice.sc-s-cnt-market-choice{margin:140px 0 0;padding:0 110px;counter-reset:step}@media only screen and (max-width: 1199px){.choice.sc-s-cnt-market-choice{margin-top:60px;padding:0 10px}.title.sc-s-cnt-market-choice{font-size:24px;line-height:1.33;margin-bottom:50px}}";

const SCntMarketChoice = class {
    constructor(hostRef) {
        Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные для компонента Choice
         */
        this.forChoice = [];
    }
    render() {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "choice" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-fluid" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row justify-content-start" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-md-12" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title" }, this.choiceTitleText)), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ItemChoiceFunctionalComponent, { array: this.forChoice })))));
    }
};
const ItemChoiceFunctionalComponent = (props) => {
    return props.array.map((item) => {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-item-choice", { forChoice: item }));
    });
};
SCntMarketChoice.style = sCntMarketChoiceCss;

const sCntMarketCourierCss = ".courier.sc-s-cnt-market-courier{padding:0 110px}@media only screen and (max-width: 1199px){.courier.sc-s-cnt-market-courier{margin-top:60px;padding:0 10px}.title.sc-s-cnt-market-courier{font-size:24px;line-height:1.33;margin-bottom:50px}}";

const SCntMarketCourier = class {
    constructor(hostRef) {
        Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные для компонента Choice
         */
        this.forCourier = [];
    }
    render() {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "courier" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-fluid" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row justify-content-start" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ItemCourierFunctionalComponent, { array: this.forCourier })))));
    }
};
const ItemCourierFunctionalComponent = (props) => {
    return props.array.map((item) => {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-item-courier", { forCourier: item }));
    });
};
SCntMarketCourier.style = sCntMarketCourierCss;

const sCntMarketDeliveryCss = ".delivery.sc-s-cnt-market-delivery{position:relative;margin-top:120px;border:1px solid #e7e9eb;border-radius:24px;padding:80px 80px 60px}.deliveryImage.sc-s-cnt-market-delivery{position:absolute;top:0;right:0;z-index:-1;height:504px;width:650px;background-size:cover;background-position:center}.container.sc-s-cnt-market-delivery{max-width:460px;margin-left:0}.title.sc-s-cnt-market-delivery{font-weight:600;line-height:1.33;font-size:35px;margin-bottom:25px}.listOfCities.sc-s-cnt-market-delivery{width:100%}.cities.sc-s-cnt-market-delivery{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap}.city.sc-s-cnt-market-delivery{-ms-flex-preferred-size:50%;flex-basis:50%;line-height:2;font-size:16px;cursor:pointer;display:block}.city.sc-s-cnt-market-delivery:hover{color:#666}.btn.sc-s-cnt-market-delivery{margin-top:30px;color:#333536;padding:11px 16px;border:1px solid #d0d2d4;width:100%;height:48px;font-size:16px;font-weight:500;cursor:pointer;outline:none;border-radius:8px;background-color:transparent}.btn.sc-s-cnt-market-delivery:hover{-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;background-color:#f3f4f7;color:#333536}@media only screen and (max-width: 1199px){.delivery.sc-s-cnt-market-delivery{margin-top:60px;padding:35px 40px 25px}.deliveryImage.sc-s-cnt-market-delivery{top:90px;width:400px;height:310px}}@media only screen and (max-width: 767px){.deliveryImage.sc-s-cnt-market-delivery{width:250px;height:194px}}@media only screen and (max-width: 575px){.delivery.sc-s-cnt-market-delivery{margin-top:60px;padding:35px 0 25px}.container.sc-s-cnt-market-delivery{max-width:none}.title.sc-s-cnt-market-delivery{margin-bottom:10px;text-align:center;line-height:1.33;font-size:24px}.deliveryImage.sc-s-cnt-market-delivery{position:static;margin-bottom:7px;width:100%}.listOfCities.sc-s-cnt-market-delivery{padding:0 20px}.btn.sc-s-cnt-market-delivery{width:80%;margin:15px auto}}";

const SCntMarketDelivery = class {
    constructor(hostRef) {
        Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "delivery" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-md-12 p-0" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title", innerHTML: _index_cdb5592b_js__WEBPACK_IMPORTED_MODULE_1__["l"].toHTML(this.delivery.title) })), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "deliveryImage", style: { backgroundImage: "url(" + this.delivery.img + ")" } }), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "listOfCities" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "cities" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(DeliveryItemFunctionalComponent, { array: this.delivery.cities }))), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn" }, this.delivery.btn)))));
    }
};
const DeliveryItemFunctionalComponent = (props) => {
    return props.array.map((item) => {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "city" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-delivery-item", { delivery: item })));
    });
};
SCntMarketDelivery.style = sCntMarketDeliveryCss;

const sCntMarketOfferCss = ".offer.sc-s-cnt-market-offer{margin-top:60px;padding:60px 150px 80px;background-color:#f7f8fa;border-radius:24px}.title.sc-s-cnt-market-offer{margin-bottom:40px;text-align:center;font-weight:600;font-size:34px;line-height:1.12}@media only screen and (max-width: 1119px){.offer.sc-s-cnt-market-offer{padding:45px 30px 50px}}@media only screen and (max-width: 575.98px){.title.sc-s-cnt-market-offer{font-size:24px;line-height:1.33;margin-bottom:0}}";

const SCntMarketOffer = class {
    constructor(hostRef) {
        Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные для компонента Offer
         */
        this.forOffer = [];
    }
    render() {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "offer" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-md-12" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "offerTitle" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title", innerHTML: _index_cdb5592b_js__WEBPACK_IMPORTED_MODULE_1__["l"].toHTML(this.offerTitleText) })))), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(GetOfferFunctionalComponent, { arrayOffer: this.forOffer })))));
    }
};
const GetOfferFunctionalComponent = (props) => {
    return props.arrayOffer.map((item) => {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-3 col-sm-6" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-item-offer", { forOffer: item })));
    });
};
SCntMarketOffer.style = sCntMarketOfferCss;

const sCntMarketSelectionCss = ".header.sc-s-cnt-market-selection{position:relative;margin-top:80px;padding-top:40px;min-height:518px}.imageHome.sc-s-cnt-market-selection{position:absolute;top:40px;left:0;border-radius:25px;width:100%;height:518px;background-size:cover;margin:auto;background-position:center;z-index:-1;-o-object-fit:contain;object-fit:contain}.homeText.sc-s-cnt-market-selection{margin:145px 0 0 100px;color:#fff;font-size:40px;max-width:800px;line-height:1.1}.homeSubtext.sc-s-cnt-market-selection{margin:35px 0 0 100px;font-size:18px;color:#fff;font-weight:600;line-height:1.5}.container.sc-s-cnt-market-selection{max-width:1170px;margin-top:120px;margin-bottom:65px}@media only screen and (max-width: 1119px){.homeText.sc-s-cnt-market-selection{margin:30px auto 0;padding:0;max-width:500px;text-align:center;line-height:1.11;color:#333536;font-size:36px}.homeSubtext.sc-s-cnt-market-selection{ine-height:1.35;color:#333536;font-size:20px;margin:30px 40px 0;text-align:center;line-height:1.35}.imageHome.sc-s-cnt-market-selection{position:static;margin:0 auto;width:688px;height:450px}.selection-card.sc-s-cnt-market-selection{max-width:350px}.container.sc-s-cnt-market-selection{margin-top:15px}}@media only screen and (max-width: 767px){.selection.sc-s-cnt-market-selection{padding:0 16px}.header.sc-s-cnt-market-selection{margin-top:0;padding-top:20px}.imageHome.sc-s-cnt-market-selection{position:static;max-width:345px;height:238px;width:100%}}.col-md-4.sc-s-cnt-market-selection,.col-xs-6.sc-s-cnt-market-selection{padding:0}@media only screen and (max-width: 575px){.homeText.sc-s-cnt-market-selection{text-align:left;margin:30px 0 0}.homeSubtext.sc-s-cnt-market-selection{text-align:left;margin:20px 0 0}.container.sc-s-cnt-market-selection{margin-top:15px;margin-bottom:15px}}";

const SCntMarketSelection = class {
    constructor(hostRef) {
        Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные для карточек магазинов
         */
        this.forSelection = [];
    }
    render() {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "imageHome", style: { backgroundImage: "url(" + this.homePageImage + ")" } }), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", { class: "homeText", innerHTML: _index_cdb5592b_js__WEBPACK_IMPORTED_MODULE_1__["l"].toHTML(this.homeText) }), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "homeSubtext", innerHTML: _index_cdb5592b_js__WEBPACK_IMPORTED_MODULE_1__["l"].toHTML(this.homeSubText) }), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row justify-content-center" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(GetSelectionFunctionalComponent, { array: this.forSelection })))));
    }
};
const GetSelectionFunctionalComponent = (props) => {
    return props.array.map((item) => {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-md-4 col-sm-6 selection-card" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-item-selection", { forSelection: item })));
    });
};
SCntMarketSelection.style = sCntMarketSelectionCss;

const sCntMarketSpecialistCss = ".specialist.sc-s-cnt-market-specialist{padding:0 110px}@media only screen and (max-width: 1199px){.specialist.sc-s-cnt-market-specialist{margin-top:60px;padding:0 10px}.title.sc-s-cnt-market-specialist{font-size:24px;line-height:1.33;margin-bottom:50px}}";

const SCntMarketSpecialist = class {
    constructor(hostRef) {
        Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные для компонента Specialist
         */
        this.forSpecialist = [];
    }
    render() {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "specialist" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-fluid" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row justify-content-end" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(GetSpecialistFunctionalComponent, { array: this.forSpecialist })))));
    }
};
const GetSpecialistFunctionalComponent = (props) => {
    return props.array.map((item) => {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-item-specialist", { forSpecialist: item }));
    });
};
SCntMarketSpecialist.style = sCntMarketSpecialistCss;

const sCntMarketStatisticsCss = ".statistics.sc-s-cnt-market-statistics{margin-top:90px;padding:0 80px}.container.sc-s-cnt-market-statistics{padding:0}.col-lg-6.sc-s-cnt-market-statistics,col-md-12.sc-s-cnt-market-statistics{padding:0}@media only screen and (max-width: 1199px){.statistics.sc-s-cnt-market-statistics{padding:0;margin-top:10px}}";

const SCntMarketStatistics = class {
    constructor(hostRef) {
        Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные для компонента Statistics
         */
        this.forStatistics = [];
    }
    render() {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "statistics" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row justify-content-around" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(GetStatisticsFunctionalComponent, { arrayStatistics: this.forStatistics })))));
    }
};
const GetStatisticsFunctionalComponent = (props) => {
    return props.arrayStatistics.map((item) => {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-5 col-md-12" }, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-item-statistics", { forStatistics: item })));
    });
};
SCntMarketStatistics.style = sCntMarketStatisticsCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-cnt-market-app_8-entry-js.js.map