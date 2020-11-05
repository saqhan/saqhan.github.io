(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-payment-page-wrapper.entry.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-payment-page-wrapper.entry.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_payment_page_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_payment_page_wrapper", function() { return SCntBankPaymentPageWrapper; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


const paymentCategories = {
    categoriesPanel: 'Ваши платежи',
    detailBtn: 'fas fa-ellipsis-v',
    categoriesCard: [
        {
            id: 1,
            img: 'https://www.freepngimg.com/thumb/logo/62809-portable-icons-computer-graphics-logo-network.png',
            title: 'Learn UX Design',
            subTitle: '3 month left',
            detailBtn: 'fas fa-ellipsis-h',
            dateIcon: 'far fa-calendar-alt',
            date: '01 November 2020',
            importance: 'Priority',
            importanceColor: '#F7D6D9',
            progressTitle: 'Progress',
            progress: '80%',
            progressColor: '#428EF2'
        },
        {
            id: 2,
            logo: 'IU',
            logoColor: 'orange',
            title: 'Learn UX Design',
            subTitle: '3 month left',
            detailBtn: 'fas fa-ellipsis-h',
            dateIcon: 'far fa-calendar-alt',
            date: '01 November 2020',
            importance: 'Priority',
            importanceColor: '#F7D6D9',
            progressTitle: 'Progress',
            progress: '70%',
            progressColor: '#CF515B'
        },
        {
            id: 3,
            logoIcon: 'fab fa-apple-pay',
            logoColor: '#CF515B',
            title: 'Learn UX Design',
            subTitle: '3 month left',
            detailBtn: 'fas fa-ellipsis-h',
            dateIcon: 'far fa-calendar-alt',
            date: '01 November 2020',
            importance: 'Priority',
            importanceColor: '#F7D6D9',
            progressTitle: 'Progress',
            progress: '45%',
            progressColor: '#FFC800'
        }
    ]
};
const paymentPageTabs = {
    panelItem: 'Ваши история',
    panelItemIcon: 'fas fa-ellipsis-v',
    cardHeadLogo: 'https://www.freepngimg.com/thumb/logo/62809-portable-icons-computer-graphics-logo-network.png',
    cardHeadTitle: 'Learn UX Design',
    cardHeadCloseIcon: 'fas fa-chevron-up',
    cardHeadOpenIcon: 'fas fa-chevron-down',
    paymentTasks: [
        {
            id: 1,
            paymentTask: 'Emphatises',
            paymentTaskTime: '09.00 am - 10.00 am'
        },
        {
            id: 2,
            paymentTask: 'Emphatises',
            paymentTaskTime: '09.00 am - 10.00 am'
        },
        {
            id: 3,
            paymentTask: 'Emphatises',
            paymentTaskTime: '09.00 am - 10.00 am'
        }
    ]
};

const sCntBankPaymentPageWrapperCss = ".header-wrapper.sc-s-cnt-bank-payment-page-wrapper{position:relative}.content-wrapper.sc-s-cnt-bank-payment-page-wrapper{background-color:#fbfbfb;height:100vh}";

const SCntBankPaymentPageWrapper = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "app" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-payment-page-categories", { payload: paymentCategories })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content-wrapper", id: 'payment-page-content' }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-payment-page-tabs", { payload: paymentPageTabs }))));
    }
};
SCntBankPaymentPageWrapper.style = sCntBankPaymentPageWrapperCss;




/***/ })

}]);
//# sourceMappingURL=6.js.map