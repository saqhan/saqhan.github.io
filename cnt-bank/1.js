(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-additional-options.entry.js":
/*!************************************************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-additional-options.entry.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_additional_options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_additional_options", function() { return SCntBankAdditionalOptions; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankAdditionalOptionsCss = ".drawer-backdrop.sc-s-cnt-bank-additional-options{position:fixed;left:0px;right:auto;bottom:0px;z-index:2100;top:0px;background:rgba(0, 0, 0, 0.5);height:100%;width:100%;opacity:0;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;pointer-events:none}.drawer-backdrop.opened.sc-s-cnt-bank-additional-options{opacity:1;pointer-events:auto;visibility:visible}.drawer-bottom.opened.sc-s-cnt-bank-additional-options{-webkit-transform:translateY(0);transform:translateY(0);opacity:1;pointer-events:auto}.drawer-bottom.sc-s-cnt-bank-additional-options{display:-ms-flexbox;display:flex;position:fixed;left:0px;right:0px;top:auto;bottom:0px;z-index:2100;height:calc(100vh - 280px);-webkit-transition:opacity 0.3s;transition:opacity 0.3s;-webkit-transform:translateY(105%);transform:translateY(105%)}.drawer-transition.sc-s-cnt-bank-additional-options{-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s;opacity:1}.drawer-transition.drawer-transition_faded.sc-s-cnt-bank-additional-options{-webkit-animation:fadeOutLeft 0s 0.3s forwards;animation:fadeOutLeft 0s 0.3s forwards}.drawer-content-wrapper.sc-s-cnt-bank-additional-options{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;max-width:1024px;height:100%;margin:auto}.drawer-content.sc-s-cnt-bank-additional-options{display:-ms-flexbox;display:flex;z-index:1;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:0 9px 16px 0 rgba(0, 0, 0, 0.2);box-shadow:0 9px 16px 0 rgba(0, 0, 0, 0.2);-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#f7f7f7;color:#000;cursor:default;font-weight:400;width:100%;height:100%;padding:15px;border-top-right-radius:10px;border-top-left-radius:10px;overflow-y:auto}.additional-item.sc-s-cnt-bank-additional-options{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.additional-icon.sc-s-cnt-bank-additional-options{width:48px;height:48px;font-size:24px;color:#25ae62}.additional-desc.sc-s-cnt-bank-additional-options{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding-right:15px;margin-right:-15px;padding-bottom:10px;padding-top:10px;border-bottom:1px solid #ccc}.subtitle.sc-s-cnt-bank-additional-options{font-size:14px;color:#828282}.additional-icon-nav.sc-s-cnt-bank-additional-options{color:#ccc}";

const SCntBankAdditionalOptions = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickCloseAdditionalOptions = Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickCloseAdditionalOptions", 7);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "additional-modal-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.openedAdditionalOptions
                ? "drawer-backdrop  opened "
                : "drawer-backdrop ", ref: (el) => (this.additionalOptionsTag = el), onClick: (event) => this.clickOnCloseAdditionalOptionsOverlayHandler(event) }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.openedAdditionalOptions
                ? "drawer-bottom drawer-transition opened "
                : "drawer-bottom drawer-transition " }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "drawer-content-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "drawer-content" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(AdditionalItem, { item: this.payload }))))));
    }
    /**
     *
     * */
    clickOnCloseAdditionalOptionsOverlayHandler(event) {
        if (event.target === this.additionalOptionsTag) {
            this.clickCloseAdditionalOptions.emit();
        }
    }
};
/**
 *
 * */
const AdditionalItem = (props) => {
    return props.item.map(item => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "additional-item" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "additional-icon" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: item.icon })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "additional-desc" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title" }, item.title), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "subtitle" }, item.subtitle)), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "additional-icon-nav" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: item.iconNav })))));
    });
};
SCntBankAdditionalOptions.style = sCntBankAdditionalOptionsCss;




/***/ })

}]);
//# sourceMappingURL=1.js.map