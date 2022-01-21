(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-payment-tab-card.entry.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/stage-monobank/cnt-nx-workspace-2/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-payment-tab-card.entry.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_payment_tab_card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_payment_tab_card", function() { return SCntBankPaymentTabCard; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const sCntBankPaymentTabCardCss = "*.sc-s-cnt-bank-payment-tab-card{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none}.payment-detail-btn.sc-s-cnt-bank-payment-tab-card{cursor:pointer}.payment-card.sc-s-cnt-bank-payment-tab-card{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;max-width:1024px;width:100%;padding:15px 20px;background-color:white;border-radius:20px;-webkit-box-shadow:0 1px 4px rgba(57, 63, 72, 0.2);box-shadow:0 1px 4px rgba(57, 63, 72, 0.2);overflow:hidden}.payment-card-head-opened.sc-s-cnt-bank-payment-tab-card,.payment-card-head-closed.sc-s-cnt-bank-payment-tab-card{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.payment-card-head-opened.sc-s-cnt-bank-payment-tab-card{padding-bottom:18px;border-bottom:solid 1px #e8e8e8;-webkit-transition:border 0.2s linear;transition:border 0.2s linear}.payment-card-head-closed.sc-s-cnt-bank-payment-tab-card{border:transparent;-webkit-transition:border 0.2s linear;transition:border 0.2s linear}.payment-card-logo.sc-s-cnt-bank-payment-tab-card img.sc-s-cnt-bank-payment-tab-card{width:32px;height:32px}.payment-card-title.sc-s-cnt-bank-payment-tab-card{color:#3A3F65;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.payment-card-detail-btn.sc-s-cnt-bank-payment-tab-card{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:#3A3F65;margin-right:10px;cursor:pointer}.payment-task-card.sc-s-cnt-bank-payment-tab-card{overflow:hidden;padding-top:16px;opacity:1;pointer-events:auto;max-height:300px;overflow-y:scroll;-webkit-transition:height 0.3s ease-out, opacity 50ms linear;transition:height 0.3s ease-out, opacity 50ms linear}.payment-task-card-hide.sc-s-cnt-bank-payment-tab-card{height:0;opacity:0;-webkit-transition:height 0.3s ease-in, opacity 50ms linear;transition:height 0.3s ease-in, opacity 50ms linear}.payment-task-wrap.sc-s-cnt-bank-payment-tab-card{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-bottom:10px;overflow:hidden}.payment-task-down.sc-s-cnt-bank-payment-tab-card{text-decoration:line-through;color:#B1B2B9}.payment-task-time.sc-s-cnt-bank-payment-tab-card{text-decoration:none!important;font-size:10px;color:#B1B2B9}.hide.sc-s-cnt-bank-payment-tab-card{display:none}.custom-checkbox-wrap.sc-s-cnt-bank-payment-tab-card{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;margin-right:3px}.custom-checkbox.sc-s-cnt-bank-payment-tab-card{position:absolute;z-index:2;opacity:0;cursor:pointer;width:100%;height:100%}.custom-checkbox.sc-s-cnt-bank-payment-tab-card+label.sc-s-cnt-bank-payment-tab-card{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;cursor:pointer}.custom-checkbox.sc-s-cnt-bank-payment-tab-card+label.sc-s-cnt-bank-payment-tab-card::before{content:'';display:inline-block;width:25px;height:25px;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;border:1px solid #adb5bd;border-radius:50%;background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.custom-checkbox.sc-s-cnt-bank-payment-tab-card:checked+label.sc-s-cnt-bank-payment-tab-card::before{border-color:#0b76ef;background-color:#0b76ef;background-image:url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/600px-White_check.svg.png\")}.custom-checkbox.sc-s-cnt-bank-payment-tab-card:not(:disabled):not(:checked)+label.sc-s-cnt-bank-payment-tab-card:hover::before{border-color:#b3d7ff}.custom-checkbox.sc-s-cnt-bank-payment-tab-card:not(:disabled):active+label.sc-s-cnt-bank-payment-tab-card::before{background-color:#b3d7ff;border-color:#b3d7ff}.custom-checkbox.sc-s-cnt-bank-payment-tab-card:focus+label.sc-s-cnt-bank-payment-tab-card::before{-webkit-box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.25);box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.25)}.custom-checkbox.sc-s-cnt-bank-payment-tab-card:focus:not(:checked)+label.sc-s-cnt-bank-payment-tab-card::before{border-color:#80bdff}.custom-checkbox.sc-s-cnt-bank-payment-tab-card:disabled+label.sc-s-cnt-bank-payment-tab-card::before{background-color:#e9ecef}@media (max-width: 768px){.payment-card.sc-s-cnt-bank-payment-tab-card{width:100%}}";

const SCntBankPaymentTabCard = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *
         **/
        this.cardDisclosure = false;
        /**
         *
         */
        this.checkedTasks = [];
    }
    componentDidLoad() {
        this.taskCardHeight();
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-card' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.cardDisclosure ? 'payment-card-head-opened' : 'payment-card-head-closed', onClick: () => this.taskCardHeight() }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-card-logo' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.payload.cardHeadLogo, alt: "ux" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-card-title' }, this.payload.cardHeadTitle), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-card-detail-btn' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.cardDisclosure ? this.payload.cardHeadCloseIcon : this.payload.cardHeadOpenIcon }))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { ref: (el) => this.taskCardWarp = el }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(PaymentTasksFunctionalComponent, { tasks: this.payload.paymentTasks, checkedTasks: this.checkedTasks, clickOnTask: (id, state) => this.clickOnTask({ id, state }) }))));
    }
    /**
     *Определяет высоту блока task
     */
    taskCardHeight() {
        let tasksLength = this.payload.paymentTasks.length;
        if (tasksLength !== 0 && !this.cardDisclosure) {
            this.cardDisclosure = true;
            this.taskCardWarp.style.height = tasksLength * 52 + 'px';
            this.taskCardWarp.classList.remove('payment-task-card-hide');
            this.taskCardWarp.classList.add('payment-task-card');
        }
        else if (tasksLength === 0 || this.cardDisclosure) {
            this.cardDisclosure = false;
            this.taskCardWarp.style.height = '0px';
            this.taskCardWarp.classList.add('payment-task-card-hide');
            this.taskCardWarp.classList.remove('payment-task-card');
        }
    }
    /**
     *
     */
    clickOnTask({ id, state }) {
        console.log('clickOnTask', id, state);
        if (state) {
            this.checkedTasks = [...this.checkedTasks, id];
        }
        else {
            this.checkedTasks = this.checkedTasks.filter((checkedTask) => checkedTask !== id);
        }
    }
};
/*
*
 */
const PaymentTasksFunctionalComponent = (props) => {
    return props.tasks.map((item) => {
        var _a;
        const checked = ((_a = props.checkedTasks) === null || _a === void 0 ? void 0 : _a.indexOf(item.id)) !== -1;
        // console.log('PaymentTasksFunctionalComponent', { props, item, checked });
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-task-wrap' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `payment-task ${checked ? 'payment-task-down' : ''}` }, item.paymentTask, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-task-time' }, item.paymentTaskTime)), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'custom-checkbox-wrap' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "checkbox", class: "custom-checkbox", onClick: () => props.clickOnTask(item.id, !checked) }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", null))));
    });
};
SCntBankPaymentTabCard.style = sCntBankPaymentTabCardCss;




/***/ })

}]);
//# sourceMappingURL=12.js.map