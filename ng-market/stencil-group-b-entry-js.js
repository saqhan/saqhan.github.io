(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-group-b-entry-js"],{

/***/ "./node_modules/stencil-market/dist/esm/group-b.entry.js":
/*!***************************************************************!*\
  !*** ./node_modules/stencil-market/dist/esm/group-b.entry.js ***!
  \***************************************************************/
/*! exports provided: group_b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_b", function() { return GroupB; });
/* harmony import */ var _index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9e7456fd.js */ "./node_modules/stencil-market/dist/esm/index-9e7456fd.js");
/* harmony import */ var _mock_b_342af7e6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-b-342af7e6.js */ "./node_modules/stencil-market/dist/esm/mock-b-342af7e6.js");
/* harmony import */ var _mock_a_35a30e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-a-35a30e83.js */ "./node_modules/stencil-market/dist/esm/mock-a-35a30e83.js");




const groupBCss = ".overlay.sc-group-b{background:rgba(0, 0, 0, 0.5);height:100%;left:0;position:absolute;top:0;width:100%;opacity:1;z-index:1;pointer-events:none;-webkit-transition:0.3s;transition:0.3s}.overlayBackDrop.sc-group-b{-webkit-transition:0.3s;transition:0.3s}";

const GroupB = class {
    constructor(hostRef) {
        Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Стейт для открытия/закрытия модального окна
         */
        this.showModalState = false;
        /**
         * выводими в зависимости от авторизации начальную шапку
         * */
        this.loginState = false;
        /**
         * Первоначальная страница
         * */
        this.firstPageState = true;
    }
    render() {
        return (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-header-wrapper", { categories: _mock_b_342af7e6_js__WEBPACK_IMPORTED_MODULE_1__["h"], login: this.loginState, firstPage: this.firstPageState, onOpenLoginModal: () => this.openLoginModal() }, " "), this.loginRegistrationCompleted ? (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-login-and-registration-form", { loginAndRegistration: _mock_b_342af7e6_js__WEBPACK_IMPORTED_MODULE_1__["h"].topBar.loginAndRegistration, login: this.loginCompleted, registration: this.registrationCompleted, blockWidth: '440px', onCloseLogin: () => this.closeLoginModal(), onOpenLogin: () => this.openLogin(), onOpenRegistration: () => this.openRegistration() })) : (""), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", null, Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "overlayBackDrop" }), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-promo-slider", { promoSliderCards: _mock_a_35a30e83_js__WEBPACK_IMPORTED_MODULE_2__["e"] }, " "), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-slider", { productsSliderCards: _mock_a_35a30e83_js__WEBPACK_IMPORTED_MODULE_2__["c"], productsSliderTitle: _mock_a_35a30e83_js__WEBPACK_IMPORTED_MODULE_2__["d"], onShowModal: () => this.showOrCloseModal() }, " "), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-list", { onShowModal: () => this.showOrCloseModal(), productsList: _mock_a_35a30e83_js__WEBPACK_IMPORTED_MODULE_2__["b"] }, " "), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-recently-watched", { onShowModal: () => this.showOrCloseModal(), recentlyWatchedProducts: _mock_a_35a30e83_js__WEBPACK_IMPORTED_MODULE_2__["r"], recentlyWatchedTitle: _mock_a_35a30e83_js__WEBPACK_IMPORTED_MODULE_2__["a"] }, " "), this.showModalState === true ? (Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-modal-window", { productModal: _mock_a_35a30e83_js__WEBPACK_IMPORTED_MODULE_2__["p"], onClickOnModal: () => this.showOrCloseModal() })) : (""), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-footer", { footerData: _mock_a_35a30e83_js__WEBPACK_IMPORTED_MODULE_2__["f"] }), Object(_index_9e7456fd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-back-to-top", null))));
    }
    /**
     * Вызов модального окна компонента входа
     */
    openLoginModal() {
        this.loginRegistrationCompleted = true;
        this.loginCompleted = true;
        this.registrationCompleted = false;
        document.body.style.overflow = 'hidden';
    }
    /**
     * Закрытие модального окна компонента входа
     */
    closeLoginModal() {
        this.loginRegistrationCompleted = false;
        document.body.style.overflow = '';
    }
    /**
     * открытие блока/компонента входа при открытии модального окна
     */
    openLogin() {
        this.loginCompleted = true;
        this.registrationCompleted = false;
    }
    /**
     * открытие блока/компонента регистрации при открытии модального окна
     */
    openRegistration() {
        this.registrationCompleted = true;
        this.loginCompleted = false;
    }
    /**
     * GROUP A
     * */
    /**
     * Открытие и закрытие модального окна
     */
    showOrCloseModal() {
        this.showModalState = !this.showModalState;
        this.bodyToggleScroll();
    }
    /**
     * Отключение и включение прокрутки body
     */
    bodyToggleScroll() {
        if (this.showModalState) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }
};
GroupB.style = groupBCss;




/***/ })

}]);
//# sourceMappingURL=stencil-group-b-entry-js.js.map