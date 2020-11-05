(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-scan-code-footer_2.entry.js":
/*!************************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-scan-code-footer_2.entry.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_scan_code_footer, s_cnt_bank_scan_code_page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_scan_code_footer", function() { return SCntBankScanCodeFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_scan_code_page", function() { return SCntBankScanCodePage; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankScanCodeFooterCss = "*.sc-s-cnt-bank-scan-code-footer{outline:none;-webkit-box-sizing:border-box;box-sizing:border-box}.scan-code-footer-wrap.sc-s-cnt-bank-scan-code-footer{width:100%;height:100%}.scan-code-footer-content.sc-s-cnt-bank-scan-code-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;width:100%;height:50px;background-color:#F1F5F9}.footer-item.sc-s-cnt-bank-scan-code-footer{font-size:27px;color:#BFC4C5}.footer-scan-btn.sc-s-cnt-bank-scan-code-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:60px;height:60px;border-radius:50%;background-color:#01D562;-webkit-box-shadow:0 0 3px rgba(0,0,0,0.5);box-shadow:0 0 3px rgba(0,0,0,0.5);color:white;margin-bottom:35px}";

const SCntBankScanCodeFooter = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        console.log(this.payload);
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", { class: 'scan-code-footer-wrap' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'scan-code-footer-content' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterItemFunctionalComponent, { activeClass: (activeClass) => this.activeClass(activeClass), arr: this.payload }))));
    }
    activeClass(itemClass) {
        switch (itemClass) {
            case 'item':
                return 'footer-item';
            case 'scan-btn':
                return 'footer-scan-btn';
        }
    }
};
/**
 *
 */
const FooterItemFunctionalComponent = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: props.activeClass(item.type) }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: item.item })));
    });
};
SCntBankScanCodeFooter.style = sCntBankScanCodeFooterCss;

const sCntBankScanCodePageCss = "*.sc-s-cnt-bank-scan-code-page{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none}.scan-code-page-wrap.sc-s-cnt-bank-scan-code-page{position:relative;width:100%;height:100%}.scan-code-page-parent.sc-s-cnt-bank-scan-code-page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%}.scanning.sc-s-cnt-bank-scan-code-page .scan-block-wrap.sc-s-cnt-bank-scan-code-page{margin-top:48px}.scanning.sc-s-cnt-bank-scan-code-page{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.scanning.sc-s-cnt-bank-scan-code-page .page-title.sc-s-cnt-bank-scan-code-page{display:none}.page-title.sc-s-cnt-bank-scan-code-page{position:relative;font-size:2rem;bottom:100px}.scan-block-wrap.sc-s-cnt-bank-scan-code-page{position:relative;height:270px;width:300px}.scan-line.sc-s-cnt-bank-scan-code-page{display:none}.scanning.sc-s-cnt-bank-scan-code-page .scan-line.sc-s-cnt-bank-scan-code-page{display:block;position:absolute;background-color:#01D562;height:3px;width:100%;z-index:22;-webkit-animation-name:scan;animation-name:scan;-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes scan{0%{top:0}100%{top:100%}}@keyframes scan{0%{top:0}100%{top:100%}}.custom-border.sc-s-cnt-bank-scan-code-page{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;background-color:white;border:2px solid black}.custom-corner-top.sc-s-cnt-bank-scan-code-page,.custom-corner-bottom.sc-s-cnt-bank-scan-code-page,.custom-corner-right.sc-s-cnt-bank-scan-code-page,.custom-corner-left.sc-s-cnt-bank-scan-code-page{position:absolute;background-color:white}.custom-corner-top.sc-s-cnt-bank-scan-code-page,.custom-corner-bottom.sc-s-cnt-bank-scan-code-page{height:10px;width:220px}.custom-corner-right.sc-s-cnt-bank-scan-code-page,.custom-corner-left.sc-s-cnt-bank-scan-code-page{height:185px;width:10px}.custom-corner-top.sc-s-cnt-bank-scan-code-page{top:-3px}.custom-corner-bottom.sc-s-cnt-bank-scan-code-page{bottom:-3px}.custom-corner-right.sc-s-cnt-bank-scan-code-page{right:-3px}.custom-corner-left.sc-s-cnt-bank-scan-code-page{left:-3px}.scanning-percent.sc-s-cnt-bank-scan-code-page{display:none;text-align:center;margin:60px 0;font-size:22px}.scanning.sc-s-cnt-bank-scan-code-page .scanning-percent.sc-s-cnt-bank-scan-code-page{display:block}.start-scan-btn.sc-s-cnt-bank-scan-code-page{border:none;font-size:1.5rem;margin-top:155px;width:300px;height:60px;background-color:#01D562;color:white}.scanning.sc-s-cnt-bank-scan-code-page .start-scan-btn.sc-s-cnt-bank-scan-code-page{background-color:#F94773;margin:0 auto}@media (max-width: 576px){.page-title.sc-s-cnt-bank-scan-code-page{bottom:60px;font-size:1.7rem}.scanning.sc-s-cnt-bank-scan-code-page .scan-block-wrap.sc-s-cnt-bank-scan-code-page{margin-top:40px}.scan-block-wrap.sc-s-cnt-bank-scan-code-page{height:260px;width:290px}.scanning-percent.sc-s-cnt-bank-scan-code-page{margin:34px 0}.start-scan-btn.sc-s-cnt-bank-scan-code-page{margin-top:100px}}@media (max-width: 400px){.scan-block-wrap.sc-s-cnt-bank-scan-code-page{height:240px;width:270px}}@media (max-width: 350px){.page-title.sc-s-cnt-bank-scan-code-page{bottom:36px;font-size:1.5rem}.scan-block-wrap.sc-s-cnt-bank-scan-code-page{height:200px;width:240px}.start-scan-btn.sc-s-cnt-bank-scan-code-page{margin-top:70px;height:50px;font-size:1.1rem}.scanning-percent.sc-s-cnt-bank-scan-code-page{margin:23px 0}}";

const SCntBankScanCodePage = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: 'scan-code-page-wrap' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.scan ? 'scan-code-page-parent scanning' : 'scan-code-page-parent' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'page-title' }, this.payload.pageTitle), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'scan-block-wrap' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'scan-line' }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'custom-border' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "custom-corner-top" }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "custom-corner-bottom" }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "custom-corner-right" }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "custom-corner-left" }))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'scanning-percent' }, this.payload.scanningText, " (", Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { ref: (el) => this.scanningElement = el }), "%)"), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: 'start-scan-btn', onClick: () => this.startStopScan() }, this.scan ? this.payload.btnStopScanText : this.payload.btnStartScanText)))));
    }
    /**
     *
     */
    startStopScan() {
        this.scan = !this.scan;
        if (this.scan === true) {
            this.count(this.scanningElement, 0, 100, 5000);
        }
    }
    /**
     *
     */
    count(element, startAmount, endAmount, duration) {
        let startTimestamp;
        const step = timestamp => {
            if (!startTimestamp)
                startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerText = Math.floor(progress * (endAmount - startAmount) + startAmount);
            console.log(progress);
            if (progress < 1)
                window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }
};
SCntBankScanCodePage.style = sCntBankScanCodePageCss;




/***/ })

}]);
//# sourceMappingURL=17.js.map