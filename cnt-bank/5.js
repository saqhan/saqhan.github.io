(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-payment-page-categories_2.entry.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-payment-page-categories_2.entry.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_payment_page_categories, s_cnt_bank_payment_page_tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_payment_page_categories", function() { return SCntBankPaymentPageCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_payment_page_tabs", function() { return SCntBankPaymentPageTabs; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");
/* harmony import */ var _mock_646493a4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-646493a4.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/mock-646493a4.js");



const sCntBankPaymentPageCategoriesCss = "*.sc-s-cnt-bank-payment-page-categories{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none}.categories-panel.sc-s-cnt-bank-payment-page-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:5px;padding:10px}.categories-panel-items.sc-s-cnt-bank-payment-page-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.categories-panel-item.sc-s-cnt-bank-payment-page-categories{margin-right:10px;color:#dadada;font-weight:700}.active.sc-s-cnt-bank-payment-page-categories{color:#fff}.categories-content.sc-s-cnt-bank-payment-page-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-bottom:10px;margin:0 -23px}.categories-card-wrap.sc-s-cnt-bank-payment-page-categories{display:-ms-flexbox;display:flex;overflow-y:scroll;overflow-x:auto;margin:0 10px}.categories-card-wrap.sc-s-cnt-bank-payment-page-categories::-webkit-scrollbar{width:0}.categories-card-wrap.sc-s-cnt-bank-payment-page-categories{-ms-overflow-style:none}.categories-card.sc-s-cnt-bank-payment-page-categories{margin-left:15px}";

const SCntBankPaymentPageCategories = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-additional-options", { payload: _mock_646493a4_js__WEBPACK_IMPORTED_MODULE_1__["e"], openedAdditionalOptions: this.openedAdditionalOptions, onClickCloseAdditionalOptions: () => this.clickCloseAdditionalOptions() }), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-panel" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-panel-items" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-panel-item active" }, this.payload.categoriesPanel)), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-detail-btn", onClick: () => this.clickAdditionalOptions() }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.payload.detailBtn })))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-content" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-card-wrap" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CategoriesCardFunctionalComponent, { categories: this.payload.categoriesCard })))));
    }
    /**
     *
     * */
    clickAdditionalOptions() {
        this.openedAdditionalOptions = true;
        document.querySelector('body').style.overflow = 'hidden';
    }
    /**
     *
     * */
    clickCloseAdditionalOptions() {
        this.openedAdditionalOptions = false;
        document.querySelector('body').style.overflow = 'visible';
    }
};
/*
*
 */
const CategoriesCardFunctionalComponent = (props) => {
    return props.categories.map((item) => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'categories-card' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-payment-categories-card", { categories: item })));
    });
};
SCntBankPaymentPageCategories.style = sCntBankPaymentPageCategoriesCss;

const sCntBankPaymentPageTabsCss = "*.sc-s-cnt-bank-payment-page-tabs{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none}.hide.sc-s-cnt-bank-payment-page-tabs{display:none}.payment-panel.sc-s-cnt-bank-payment-page-tabs{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.payment-panel-items.sc-s-cnt-bank-payment-page-tabs{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.payment-panel-item.sc-s-cnt-bank-payment-page-tabs{margin-right:10px;color:#3a3a3a;font-weight:700}.active.sc-s-cnt-bank-payment-page-tabs{color:#fff}.payment-card-wrap.sc-s-cnt-bank-payment-page-tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.payment-detail-btn.sc-s-cnt-bank-payment-page-tabs{cursor:pointer}.payment-card.sc-s-cnt-bank-payment-page-tabs{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;width:100%;padding:15px 20px;background-color:white;border-radius:20px;-webkit-box-shadow:0 1px 4px rgba(57, 63, 72, 0.2);box-shadow:0 1px 4px rgba(57, 63, 72, 0.2);overflow:hidden}.payment-card-head.sc-s-cnt-bank-payment-page-tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.card-head-opened.sc-s-cnt-bank-payment-page-tabs{padding-bottom:18px;border-bottom:solid 1px #e8e8e8}.payment-card-logo.sc-s-cnt-bank-payment-page-tabs img.sc-s-cnt-bank-payment-page-tabs{width:32px;height:32px}.payment-card-title.sc-s-cnt-bank-payment-page-tabs{color:#3A3F65;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.payment-card-detail-btn.sc-s-cnt-bank-payment-page-tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:#3A3F65;margin-right:10px;cursor:pointer}.payment-task-card.sc-s-cnt-bank-payment-page-tabs{overflow:hidden;padding-top:16px;opacity:1;pointer-events:auto;max-height:300px;overflow-y:scroll;-webkit-transition:height 0.3s ease-out, opacity 0.1s ease-out;transition:height 0.3s ease-out, opacity 0.1s ease-out}.payment-task-card-hide.sc-s-cnt-bank-payment-page-tabs{height:0;opacity:0;-webkit-transition:height 0.3s ease-in, opacity 0.1s ease-in;transition:height 0.3s ease-in, opacity 0.1s ease-in}.payment-task-wrap.sc-s-cnt-bank-payment-page-tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-bottom:10px;overflow:hidden}.payment-task-down.sc-s-cnt-bank-payment-page-tabs{text-decoration:line-through;color:#B1B2B9}.payment-task-time.sc-s-cnt-bank-payment-page-tabs{text-decoration:none!important;font-size:10px;color:#B1B2B9}.custom-checkbox-wrap.sc-s-cnt-bank-payment-page-tabs{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;margin-right:3px}.custom-checkbox.sc-s-cnt-bank-payment-page-tabs{position:absolute;z-index:2;opacity:0;cursor:pointer;width:100%;height:100%}.custom-checkbox.sc-s-cnt-bank-payment-page-tabs+label.sc-s-cnt-bank-payment-page-tabs{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;cursor:pointer}.custom-checkbox.sc-s-cnt-bank-payment-page-tabs+label.sc-s-cnt-bank-payment-page-tabs::before{content:'';display:inline-block;width:25px;height:25px;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;border:1px solid #adb5bd;border-radius:50%;background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.custom-checkbox.sc-s-cnt-bank-payment-page-tabs:checked+label.sc-s-cnt-bank-payment-page-tabs::before{border-color:#0b76ef;background-color:#0b76ef;background-image:url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/600px-White_check.svg.png\")}.custom-checkbox.sc-s-cnt-bank-payment-page-tabs:not(:disabled):not(:checked)+label.sc-s-cnt-bank-payment-page-tabs:hover::before{border-color:#b3d7ff}.custom-checkbox.sc-s-cnt-bank-payment-page-tabs:not(:disabled):active+label.sc-s-cnt-bank-payment-page-tabs::before{background-color:#b3d7ff;border-color:#b3d7ff}.custom-checkbox.sc-s-cnt-bank-payment-page-tabs:focus+label.sc-s-cnt-bank-payment-page-tabs::before{-webkit-box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.25);box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.25)}.custom-checkbox.sc-s-cnt-bank-payment-page-tabs:focus:not(:checked)+label.sc-s-cnt-bank-payment-page-tabs::before{border-color:#80bdff}.custom-checkbox.sc-s-cnt-bank-payment-page-tabs:disabled+label.sc-s-cnt-bank-payment-page-tabs::before{background-color:#e9ecef}@media (max-width: 768px){.payment-card-wrap.sc-s-cnt-bank-payment-page-tabs{margin-top:30px}.payment-card.sc-s-cnt-bank-payment-page-tabs{width:100%}}";

const SCntBankPaymentPageTabs = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * перменная для создания массива из адресов
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
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", null, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "payment-panel" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "payment-panel-items" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "payment-panel-item" }, this.payload.panelItem)), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "payment-detail-btn" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.payload.panelItemIcon })))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-card-wrap' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-card' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.cardDisclosure ? 'payment-card-head card-head-opened' : 'payment-card-head' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-card-logo' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.payload.cardHeadLogo, alt: "ux" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-card-title' }, this.payload.cardHeadTitle), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'payment-card-detail-btn', onClick: () => this.taskCardHeight() }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.cardDisclosure ? this.payload.cardHeadCloseIcon : this.payload.cardHeadOpenIcon }))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            // class='payment-task-card'
            // class={this.cardDisclosure ? 'payment-task-card' : 'payment-task-card-hide'}
            ref: (el) => this.taskCardWarp = el
        }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(PaymentTasksFunctionalComponent, { tasks: this.payload.paymentTasks, clickOnTask: (id, state) => this.clickOnTask({ emit: id, state }), checkedTasks: this.checkedTasks }))))));
    }
    /**
     *
     */
    taskCardHeight() {
        let tasksLength = this.payload.paymentTasks.length;
        if (tasksLength !== 0 && !this.cardDisclosure) {
            this.cardDisclosure = true;
            this.taskCardWarp.style.height = tasksLength * 52 + 'px';
            this.taskCardWarp.classList.remove('payment-task-card-hide');
            this.taskCardWarp.classList.add('payment-task-card');
            console.log('тру');
        }
        else if (tasksLength === 0 || this.cardDisclosure) {
            this.cardDisclosure = false;
            this.taskCardWarp.style.height = '0px';
            this.taskCardWarp.classList.add('payment-task-card-hide');
            this.taskCardWarp.classList.remove('payment-task-card');
            console.log('не тру');
        }
    }
    /**
     *
     */
    clickOnTask({ emit: id, state }) {
        if (state) {
            this.checkedTasks = [...this.checkedTasks, id];
        }
        else {
            this.checkedTasks = this.checkedTasks.filter((checkedTask) => checkedTask !== id);
        }
        // console.log('clickOnTask', id, state);
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
SCntBankPaymentPageTabs.style = sCntBankPaymentPageTabsCss;




/***/ })

}]);
//# sourceMappingURL=5.js.map