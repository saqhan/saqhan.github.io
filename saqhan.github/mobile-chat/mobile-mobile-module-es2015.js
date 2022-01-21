(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-mobile-module"],{

/***/ "./src/app/chat-navigate.service.ts":
/*!******************************************!*\
  !*** ./src/app/chat-navigate.service.ts ***!
  \******************************************/
/*! exports provided: ChatNavigateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNavigateService", function() { return ChatNavigateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ChatNavigateService {
    constructor(router) {
        this.router = router;
    }
    /**
     *
     * */
    navigateToPersonalChat(id) {
        this.router.navigate([`/chat/${id}`]);
    }
    /**
     * */
    navigateToContact() {
        this.router.navigate([`/chat`], {
            queryParams: {
                contact: open ? 'show' : null
            },
            queryParamsHandling: 'merge'
        });
    }
    /****/
    navigateToChats() {
        this.router.navigate([`/chat`]);
    }
    /****/
    controlChatFolders(id, open) {
        this.router.navigate([`/chat/${id}`], {
            queryParams: {
                folder: open ? 'show' : null
            },
            queryParamsHandling: 'merge'
        });
    }
    /****/
    controlChatProfile(id, open) {
        this.router.navigate([`/chat/${id}`], {
            queryParams: {
                profile: open ? 'show' : null
            },
            queryParamsHandling: 'merge'
        });
    }
}
ChatNavigateService.ɵfac = function ChatNavigateService_Factory(t) { return new (t || ChatNavigateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ChatNavigateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatNavigateService, factory: ChatNavigateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatNavigateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/mobile/mobile-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mobile/mobile-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MobileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileRoutingModule", function() { return MobileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mobile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile.component */ "./src/app/mobile/mobile.component.ts");
/* harmony import */ var _res_view_mobile_personal_chat_mobile_personal_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./res/view/mobile-personal-chat/mobile-personal-chat.component */ "./src/app/mobile/res/view/mobile-personal-chat/mobile-personal-chat.component.ts");






const routes = [
    {
        path: 'chat',
        pathMatch: 'prefix',
        data: {
            view: 'all-chats'
        },
        // runGuardsAndResolvers: "pathParamsOrQueryParamsChange",
        component: _mobile_component__WEBPACK_IMPORTED_MODULE_2__["MobileComponent"],
    },
    {
        path: 'chat/:chatId',
        data: {
            view: 'personal'
        },
        component: _res_view_mobile_personal_chat_mobile_personal_chat_component__WEBPACK_IMPORTED_MODULE_3__["MobilePersonalChatComponent"],
    },
    // {
    //   path: 'contacts',
    //   component: MobileComponent,
    // },
    {
        path: '**',
        redirectTo: 'chat'
    }
];
class MobileRoutingModule {
}
MobileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MobileRoutingModule });
MobileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MobileRoutingModule_Factory(t) { return new (t || MobileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MobileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mobile/mobile.component.ts":
/*!********************************************!*\
  !*** ./src/app/mobile/mobile.component.ts ***!
  \********************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var stencil_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stencil-chat */ "./node_modules/stencil-chat/dist/esm/index.mjs");
/* harmony import */ var _store_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store-service.service */ "./src/app/store-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/animation.service */ "./src/app/services/common/animation.service.ts");
/* harmony import */ var _chat_navigate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat-navigate.service */ "./src/app/chat-navigate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _res_view_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./res/view/contacts/contacts.component */ "./src/app/mobile/res/view/contacts/contacts.component.ts");









function MobileComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dialog-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToDialog", function MobileComponent_div_1_div_3_Template_dialog_card_clickToDialog_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.clickToDialog($event.detail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dialog_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mess", dialog_r3);
} }
function MobileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "m-chat-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToCategory", function MobileComponent_div_1_Template_m_chat_header_clickToCategory_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clickToCategory($event.detail); })("clickToAddDialog", function MobileComponent_div_1_Template_m_chat_header_clickToAddDialog_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clickToAddDialog(); })("cancelSearchPersonal", function MobileComponent_div_1_Template_m_chat_header_cancelSearchPersonal_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.cancelSearchPersonal(); })("searchDialogs", function MobileComponent_div_1_Template_m_chat_header_searchDialogs_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.searchDialogs($event.detail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobileComponent_div_1_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "m-chat-footer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToShowDialogs", function MobileComponent_div_1_Template_m_chat_footer_clickToShowDialogs_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.clickToShowDialogs(); })("clickToShowContacts", function MobileComponent_div_1_Template_m_chat_footer_clickToShowContacts_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.clickToShowContacts(); })("clickToShowMenuBar", function MobileComponent_div_1_Template_m_chat_footer_clickToShowMenuBar_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.clickToShowMenuBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx_r0.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dialogs);
} }
function MobileComponent_app_contacts_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-contacts", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", ctx_r1.contacts);
} }
class MobileComponent {
    constructor(storeMessage, router, animSRVC, activatedRoute, chatNavigateService, cdRef) {
        this.storeMessage = storeMessage;
        this.router = router;
        this.animSRVC = animSRVC;
        this.activatedRoute = activatedRoute;
        this.chatNavigateService = chatNavigateService;
        this.cdRef = cdRef;
        this.showFiller = false;
        /**
         * */
        this.dialogs = [];
        /**
         * */
        this.contacts = [];
        /**
         * */
        this.allDialogs = [];
        /**
         * */
        this.categories = [];
        /**
         * */
        this.showDialogs = true;
    }
    ngOnInit() {
        this.storeMessage.getDialogs().subscribe((dataFromSever) => {
            this.allDialogs = this.dialogs = dataFromSever;
            this.cdRef.markForCheck();
        });
        this.storeMessage.getCategories().subscribe((dataFromSever) => {
            this.categories = dataFromSever;
            this.cdRef.markForCheck();
        });
        this.storeMessage.getContacts().subscribe((dataFromSever) => {
            this.contacts = dataFromSever;
            console.log('contacts - dataFromSever', dataFromSever);
            this.cdRef.markForCheck();
        });
        this.activatedRoute.queryParams.subscribe((params) => {
            this.showDialogs = params['contact'] !== 'show';
        });
    }
    // клик по кнопке категорий для фильтрации диалогов
    clickToCategory(input) {
        this.dialogs = this.storeMessage.filterChatsByCategory(input, this.allDialogs);
    }
    /**
    * */
    cancelSearchPersonal() {
        this.dialogs = this.allDialogs;
    }
    // on click dialog
    clickToDialog(dialog) {
        this.animSRVC.slideToLEFT();
        this.chatNavigateService.navigateToPersonalChat(dialog.id);
        // this.router.navigate(['app-mobile-personal-chat']);
    }
    /**
     * */
    clickToShowDialogs() {
        this.animSRVC.slideToLEFT();
        this.router.navigate(['mobile']);
    }
    /**
     * */
    clickToshowDialogs() {
        this.animSRVC.slideToLEFT();
        this.chatNavigateService.navigateToContact();
    }
    /**
     * */
    clickToShowMenuBar() {
        console.log('clickToShowMenuBar');
    }
    /**
     * */
    clickToAddDialog() {
        console.log('clickToAddDialog');
    }
    clickToShowContacts() {
        this.chatNavigateService.navigateToContact();
    }
    /**
     * */
    searchDialogs(value) {
        this.dialogs = Object(stencil_chat__WEBPACK_IMPORTED_MODULE_1__["filterDialogsBySearchValue"])(value, this.allDialogs);
    }
}
MobileComponent.ɵfac = function MobileComponent_Factory(t) { return new (t || MobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_animation_service__WEBPACK_IMPORTED_MODULE_4__["AnimationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_navigate_service__WEBPACK_IMPORTED_MODULE_5__["ChatNavigateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileComponent, selectors: [["app-mobile"]], decls: 3, vars: 3, consts: [[3, "ngSwitch"], ["class", "m-chat-wrapper", 4, "ngSwitchCase"], [3, "contacts", 4, "ngSwitchCase"], [1, "m-chat-wrapper"], [3, "categories", "clickToCategory", "clickToAddDialog", "cancelSearchPersonal", "searchDialogs"], [1, "m-chat-dialogs"], [4, "ngFor", "ngForOf"], [3, "clickToShowDialogs", "clickToShowContacts", "clickToShowMenuBar"], [3, "mess", "clickToDialog"], [3, "contacts"]], template: function MobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobileComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobileComponent_app_contacts_2_Template, 1, 1, "app-contacts", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.showDialogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _res_view_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"]], styles: [".personal-wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  overflow: auto;\n}\n\n.personal-wrapper[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%] {\n  border-radius: 20px 20px 0px 0px;\n}\n\n.personal-wrapper[_ngcontent-%COMP%]   .personal-footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 0px 0px;\n}\n\n.m-chat-dialogs[_ngcontent-%COMP%] {\n  padding: 20px 30px 0px;\n  border-bottom: 1px solid #ccc;\n  height: calc(100vh - 135px);\n  overflow: auto;\n}\n\n@media (max-width: 414px) {\n  .m-chat-dialogs[_ngcontent-%COMP%] {\n    padding: 20px 15px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL25nLWNoYXQvc3JjL2FwcC9tb2JpbGUvbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2JpbGUvbW9iaWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBRENBO0VBQ0UsZ0NBQUE7QUNFRjs7QURDQTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0Usc0JBQUE7RUNFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXJzb25hbC13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucGVyc29uYWwtd3JhcHBlciAuZm9vdGVyLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbn1cbi5wZXJzb25hbC13cmFwcGVyIC5wZXJzb25hbC1mb290ZXIgLmZvb3Rlci13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDBweCAwcHg7XG59XG5cbi5tLWNoYXQtZGlhbG9ncyB7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzVweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgLm0tY2hhdC1kaWFsb2dzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHggMHB4O1xuICB9XG59XG4iLCIucGVyc29uYWwtd3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnBlcnNvbmFsLXdyYXBwZXIgLmZvb3Rlci13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG59XG5cbi5wZXJzb25hbC13cmFwcGVyIC5wZXJzb25hbC1mb290ZXIgLmZvb3Rlci13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDBweCAwcHg7XG59XG5cbi5tLWNoYXQtZGlhbG9ncyB7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzVweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgLm0tY2hhdC1kaWFsb2dzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHggMHB4O1xuICB9XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile',
                templateUrl: './mobile.component.html',
                styleUrls: ['./mobile.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_common_animation_service__WEBPACK_IMPORTED_MODULE_4__["AnimationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _chat_navigate_service__WEBPACK_IMPORTED_MODULE_5__["ChatNavigateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/mobile/mobile.module.ts":
/*!*****************************************!*\
  !*** ./src/app/mobile/mobile.module.ts ***!
  \*****************************************/
/*! exports provided: MobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileModule", function() { return MobileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _mobile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-routing.module */ "./src/app/mobile/mobile-routing.module.ts");
/* harmony import */ var _res_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./res/view/user-profile/user-profile.component */ "./src/app/mobile/res/view/user-profile/user-profile.component.ts");
/* harmony import */ var _res_view_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./res/view/contacts/contacts.component */ "./src/app/mobile/res/view/contacts/contacts.component.ts");
/* harmony import */ var _res_view_mobile_personal_chat_mobile_personal_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./res/view/mobile-personal-chat/mobile-personal-chat.component */ "./src/app/mobile/res/view/mobile-personal-chat/mobile-personal-chat.component.ts");
/* harmony import */ var _mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile.component */ "./src/app/mobile/mobile.component.ts");
/* harmony import */ var _res_module_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../res/module/shared.module */ "./src/app/res/module/shared.module.ts");









class MobileModule {
}
MobileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MobileModule });
MobileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MobileModule_Factory(t) { return new (t || MobileModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _res_module_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _mobile_routing_module__WEBPACK_IMPORTED_MODULE_2__["MobileRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MobileModule, { declarations: [_res_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"],
        _res_view_mobile_personal_chat_mobile_personal_chat_component__WEBPACK_IMPORTED_MODULE_5__["MobilePersonalChatComponent"],
        _res_view_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"],
        _mobile_component__WEBPACK_IMPORTED_MODULE_6__["MobileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _res_module_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _mobile_routing_module__WEBPACK_IMPORTED_MODULE_2__["MobileRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _res_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"],
                    _res_view_mobile_personal_chat_mobile_personal_chat_component__WEBPACK_IMPORTED_MODULE_5__["MobilePersonalChatComponent"],
                    _res_view_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"],
                    _mobile_component__WEBPACK_IMPORTED_MODULE_6__["MobileComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _res_module_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _mobile_routing_module__WEBPACK_IMPORTED_MODULE_2__["MobileRoutingModule"],
                ],
                providers: [],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mobile/res/view/contacts/contacts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/mobile/res/view/contacts/contacts.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var stencil_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stencil-chat */ "./node_modules/stencil-chat/dist/esm/index.mjs");
/* harmony import */ var _store_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store-service.service */ "./src/app/store-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_navigate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chat-navigate.service */ "./src/app/chat-navigate.service.ts");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/common/animation.service */ "./src/app/services/common/animation.service.ts");







class ContactsComponent {
    constructor(storeMessage, router, chatNavigateService, animSRVC) {
        this.storeMessage = storeMessage;
        this.router = router;
        this.chatNavigateService = chatNavigateService;
        this.animSRVC = animSRVC;
        this.contacts = [];
        /**
         * */
        this.allContacts = [];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.allContacts = this.contacts;
        this.filterContacts(this.lastSearchValue);
    }
    // public getContacts() {
    //   return this.contacts;
    // }
    clickToShowDialogs() {
        this.animSRVC.slideToRIGHT();
        this.chatNavigateService.navigateToChats();
    }
    clickToShowContacts() {
        this.animSRVC.slideToLEFT();
        // this.router.navigate(['contacts']);
    }
    clickToShowMenuBar() {
        console.log('clickToShowMenuBar');
    }
    clickToContact($event) {
        console.log('clickToContact', $event);
        this.animSRVC.slideToLEFT();
        // this.router.navigate(['app-mobile-personal-chat']);
    }
    // клик по ссылке
    clickToLink({ detail }) {
        if (detail.place === 'showDialogs') {
            this.animSRVC.slideToRIGHT();
            // this.router.navigate(['mobile']);
        }
        if (detail.place === 'clickToContact') {
            this.animSRVC.slideToLEFT();
            // this.router.navigate(['app-mobile-personal-chat']);
        }
    }
    /**
     *
     * */
    filterContacts(value) {
        this.contacts = Object(stencil_chat__WEBPACK_IMPORTED_MODULE_1__["filterContactBySearchValue"])(value, this.allContacts);
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_navigate_service__WEBPACK_IMPORTED_MODULE_4__["ChatNavigateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_animation_service__WEBPACK_IMPORTED_MODULE_5__["AnimationService"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], inputs: { contacts: "contacts" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 1, consts: [[1, "contacts-list-wrapper"], [3, "clickToShowDialogs", "searchContact"], [3, "contacts", "clickToContact"], [3, "clickToShowDialogs", "clickToShowContacts", "clickToShowMenuBar"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "contacts-list-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToShowDialogs", function ContactsComponent_Template_contacts_list_header_clickToShowDialogs_1_listener() { return ctx.clickToShowDialogs(); })("searchContact", function ContactsComponent_Template_contacts_list_header_searchContact_1_listener($event) { return ctx.filterContacts($event.detail); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "contacts-list-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToContact", function ContactsComponent_Template_contacts_list_body_clickToContact_2_listener($event) { return ctx.clickToContact($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "m-chat-footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToShowDialogs", function ContactsComponent_Template_m_chat_footer_clickToShowDialogs_3_listener() { return ctx.clickToShowDialogs(); })("clickToShowContacts", function ContactsComponent_Template_m_chat_footer_clickToShowContacts_3_listener() { return ctx.clickToShowContacts(); })("clickToShowMenuBar", function ContactsComponent_Template_m_chat_footer_clickToShowMenuBar_3_listener() { return ctx.clickToShowMenuBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", ctx.contacts);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9yZXMvdmlldy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.scss'],
            }]
    }], function () { return [{ type: _store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _chat_navigate_service__WEBPACK_IMPORTED_MODULE_4__["ChatNavigateService"] }, { type: _services_common_animation_service__WEBPACK_IMPORTED_MODULE_5__["AnimationService"] }]; }, { contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/mobile/res/view/mobile-personal-chat/mobile-personal-chat.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/mobile/res/view/mobile-personal-chat/mobile-personal-chat.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MobilePersonalChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilePersonalChatComponent", function() { return MobilePersonalChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var stencil_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stencil-chat */ "./node_modules/stencil-chat/dist/esm/index.mjs");
/* harmony import */ var _store_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store-service.service */ "./src/app/store-service.service.ts");
/* harmony import */ var _chat_navigate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chat-navigate.service */ "./src/app/chat-navigate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/common/animation.service */ "./src/app/services/common/animation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _res_directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../res/directive/lifecycle/lifecycle.directive */ "./src/app/res/directive/lifecycle/lifecycle.directive.ts");









const _c0 = ["chatMessagesContainer"];
function MobilePersonalChatComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "message-from", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", message_r4);
} }
function MobilePersonalChatComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "personal-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchContact", function MobilePersonalChatComponent_div_1_Template_personal_header_searchContact_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.searchContact($event); })("clickToShowDialogs", function MobilePersonalChatComponent_div_1_Template_personal_header_clickToShowDialogs_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clickToShowDialogs(); })("clickToUserProfile", function MobilePersonalChatComponent_div_1_Template_personal_header_clickToUserProfile_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clickToUserProfile(); })("searchPersonalMessages", function MobilePersonalChatComponent_div_1_Template_personal_header_searchPersonalMessages_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.searchPersonalMessage($event.detail); })("cancelSearchPersonal", function MobilePersonalChatComponent_div_1_Template_personal_header_cancelSearchPersonal_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.resetMessagesFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("afterViewInit", function MobilePersonalChatComponent_div_1_Template_div_afterViewInit_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.scrollToBot($event.el); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MobilePersonalChatComponent_div_1_div_6_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "personal-footer", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendTextMessage", function MobilePersonalChatComponent_div_1_Template_personal_footer_sendTextMessage_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.sendTextMessage($event.detail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatActionState", ctx_r0.chatActionState)("chatPresenceState", ctx_r0.chatPresenceState)("openedDialog", ctx_r0.openedDialog);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getMessages());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx_r0.mobileTheme);
} }
function MobilePersonalChatComponent_s_adam_profile_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-adam-profile", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToShowDialogs", function MobilePersonalChatComponent_s_adam_profile_2_Template_s_adam_profile_clickToShowDialogs_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.visibleProfile(false); })("clickToShowFolders", function MobilePersonalChatComponent_s_adam_profile_2_Template_s_adam_profile_clickToShowFolders_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.clickToShowFolders(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx_r1.categories);
} }
class MobilePersonalChatComponent {
    constructor(storeMessage, chatNavigateService, router, animSRVC, cdRef, activatedRoute) {
        this.storeMessage = storeMessage;
        this.chatNavigateService = chatNavigateService;
        this.router = router;
        this.animSRVC = animSRVC;
        this.cdRef = cdRef;
        this.activatedRoute = activatedRoute;
        /**
         * */
        this.mobileTheme = 'mobile';
        /**
         * */
        this.showInputSearch = false;
        /**
         * */
        this.showDropDown = false;
        /**
         * */
        this.messages = [];
        /**
         * */
        this.allMessages = [];
        /**
         * */
        this.showProfile = true;
        /**
         * */
        this.categories = [];
    }
    ngOnInit() {
        this.startSyncMessage();
        this.storeMessage.getCategories().subscribe((dataFromSever) => {
            this.categories = dataFromSever;
            this.cdRef.markForCheck();
        });
        this.activatedRoute.queryParams.subscribe((params) => {
            this.showProfile = params['profile'] === 'show';
            this.cdRef.markForCheck();
        });
        this.activatedRoute.params.subscribe((params) => {
            if (params['chatId']) {
                this.storeMessage.getDialog(parseInt(params['chatId'], 10)).subscribe((dialogFromServer) => {
                    if (dialogFromServer) {
                        this.openedDialog = dialogFromServer;
                        this.setChatState(dialogFromServer.online);
                        this.cdRef.markForCheck();
                    }
                });
            }
        });
    }
    /**
     * */
    setChatState(online) {
        this.chatActionState = !online ? undefined : stencil_chat__WEBPACK_IMPORTED_MODULE_1__["ChatUserActionStatusState"].writing;
        this.chatPresenceState = this.chatActionState !== undefined ? stencil_chat__WEBPACK_IMPORTED_MODULE_1__["ChatUserPresenceState"].online : stencil_chat__WEBPACK_IMPORTED_MODULE_1__["ChatUserPresenceState"].offline;
    }
    startSyncMessage() {
        this.storeMessage.getMessages$().subscribe((messagesFromServer) => {
            this.messages = this.allMessages = messagesFromServer;
            this.cdRef.markForCheck();
        });
    }
    chatConvertWritingStatusToMessage() {
        // return chatConvertWritingStatusToMessage(this.getWriting[0]);
    }
    getMessages() {
        return this.messages;
    }
    onClickMenuDots() {
        this.showDropDown = !this.showDropDown;
    }
    turnOffShowInputSearch() {
        this.showInputSearch = false;
    }
    /**
     * переключение показа инпута поиски в личных сообщениях
     **/
    toggleShowInputSearch() {
        this.showInputSearch = !this.showInputSearch;
        this.showDropDown = false;
    }
    cancelSearchPersonal() {
        // this.messages = this.storeMessage.getMessages$();
    }
    clickToShowDialogs() {
        this.animSRVC.slideToRIGHT();
        this.chatNavigateService.navigateToChats();
    }
    clickToUserProfile() {
        this.animSRVC.slideToLEFT();
        this.visibleProfile(true);
        // this.router.navigate(['profile']);
    }
    clickToShowFolders() {
        this.animSRVC.slideToLEFT();
        this.showFolders(true);
    }
    /**
     * Поиск сообщений
     * @param detail
     */
    searchPersonalMessage(value) {
        this.messages = Object(stencil_chat__WEBPACK_IMPORTED_MODULE_1__["filterMessageBySearchValue"])(value, this.allMessages);
    }
    /**
     * Сброс поика сообщений
     */
    resetMessagesFilter() {
        this.messages = this.allMessages;
    }
    // клик по ссылке
    clickToLink({ detail }) {
        console.log('clickToLinkBack', detail);
        if (detail.place === 'showDialogs') {
            this.animSRVC.slideToRIGHT();
            this.router.navigate(['mobile']);
        }
        if (detail.place === 'user-name-personal') {
            this.animSRVC.slideToLEFT();
            this.router.navigate(['profile']);
        }
    }
    searchContact({ detail }) {
        // console.log('searchMessage 1 ', detail.data);
        return [];
        // return (this.messages =
        //   detail.data !== '' && detail.data !== null
        //     ? this.messages.filter((item) => {
        //         return typeof item.content === 'string'
        //           ? item.content.toLowerCase().includes(detail.data.toLowerCase())
        //           : false;
        //       })
        //     : this.storeMessage.getMessages$());
    }
    /**
     * */
    sendTextMessage(message) {
        this.storeMessage.sendTextMessage(message);
        this.scrollToBot();
    }
    /**
     *
     * */
    scrollToBot(el = this.chatMessagesContainer, timer = 50) {
        Object(stencil_chat__WEBPACK_IMPORTED_MODULE_1__["scrollToBot"])(el.nativeElement, {
            timer: timer
        });
    }
    /**
     * Показ профиля юзера
     * @param detail
     */
    visibleProfile(open) {
        this.chatNavigateService.controlChatProfile(this.openedDialog.id, open);
    }
    /**
     * Показ профиля юзера
     * @param detail
     */
    showFolders(open) {
        this.chatNavigateService.controlChatFolders(this.openedDialog.id, open);
    }
}
MobilePersonalChatComponent.ɵfac = function MobilePersonalChatComponent_Factory(t) { return new (t || MobilePersonalChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_navigate_service__WEBPACK_IMPORTED_MODULE_3__["ChatNavigateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_animation_service__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
MobilePersonalChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobilePersonalChatComponent, selectors: [["app-mobile-personal-chat"]], viewQuery: function MobilePersonalChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatMessagesContainer = _t.first);
    } }, decls: 3, vars: 3, consts: [[3, "ngSwitch"], ["class", "personal-wrapper", 4, "ngSwitchCase"], ["theme", "mobile", 3, "categories", "clickToShowDialogs", "clickToShowFolders", 4, "ngSwitchCase"], [1, "personal-wrapper"], [3, "chatActionState", "chatPresenceState", "openedDialog", "searchContact", "clickToShowDialogs", "clickToUserProfile", "searchPersonalMessages", "cancelSearchPersonal"], [1, "mobile"], [1, "personal-message"], ["lifecycle", "", 1, "personal-message-inner", 3, "afterViewInit"], ["chatMessagesContainer", ""], [4, "ngFor", "ngForOf"], [3, "theme", "sendTextMessage"], [3, "message"], ["theme", "mobile", 3, "categories", "clickToShowDialogs", "clickToShowFolders"]], template: function MobilePersonalChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobilePersonalChatComponent_div_1_Template, 8, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobilePersonalChatComponent_s_adam_profile_2_Template, 1, 1, "s-adam-profile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.showProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _res_directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_7__["LifecycleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".personal-wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  overflow: auto;\n}\n\n.personal-message[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  height: calc(100vh - 185px);\n  overflow: hidden;\n}\n\n.personal-message[_ngcontent-%COMP%]   .personal-message-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.personal-wrapper[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%] {\n  border-radius: 20px 20px 0px 0px;\n}\n\n.personal-wrapper[_ngcontent-%COMP%]   .personal-footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 0px 0px;\n}\n\n.drop-down[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  padding: 10px;\n  background-color: #dadada8f;\n  border-radius: 10px 0px 10px 10px;\n}\n\n.drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.searchPersonalmess[_ngcontent-%COMP%] {\n  padding: 20px 15px 20px;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.searchPersonalmess[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background-color: #eaeaea;\n  width: 80%;\n  padding: 5px;\n  height: 40px;\n  font-size: 16px;\n  outline: none;\n}\n\n.cancel-search[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.users-nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-wrapper[_ngcontent-%COMP%]   .user-name-personal[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4c567d;\n  text-align: center;\n  margin-top: 20px;\n  height: 22px;\n}\n\n.personal-header[_ngcontent-%COMP%] {\n  padding: 20px 20px 20px;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n}\n\n.header-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header-nav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #979eab;\n  transition: 0.3s ease;\n}\n\n.header-nav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #5780f7;\n}\n\n.header-nav[_ngcontent-%COMP%]   .user-name-personal[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4c567d;\n}\n\n.users-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 60%;\n  margin: auto;\n  margin-top: 15px;\n}\n\n.img-user-other[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 50%;\n}\n\n.img-user-other[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin: 3px;\n  border-radius: 50%;\n  background-image: url(\"https://via.placeholder.com/300x300?text=User\");\n  background-size: cover;\n  background-position: center;\n}\n\n.img-user-current[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 2px solid #4c567d;\n  border-radius: 50%;\n}\n\n.img-user-current[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin: 3px;\n  border-radius: 50%;\n  background-image: url(\"https://via.placeholder.com/300x300?text=User\");\n  background-size: cover;\n  background-position: center;\n}\n\n.mobile[_ngcontent-%COMP%]   .personal-message[_ngcontent-%COMP%] {\n  height: calc(100vh - 185px);\n}\n\n.mobile[_ngcontent-%COMP%]   .personal-message[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL25nLWNoYXQvc3JjL2FwcC9tb2JpbGUvcmVzL3ZpZXcvbW9iaWxlLXBlcnNvbmFsLWNoYXQvbW9iaWxlLXBlcnNvbmFsLWNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vYmlsZS9yZXMvdmlldy9tb2JpbGUtcGVyc29uYWwtY2hhdC9tb2JpbGUtcGVyc29uYWwtY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJQTtFQUNFLGdDQUFBO0FDREY7O0FER0E7RUFDRSxnQ0FBQTtBQ0FGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE9BO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDSkY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0hGOztBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDSkY7O0FET0E7RUFDRSwyQkFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlL3Jlcy92aWV3L21vYmlsZS1wZXJzb25hbC1jaGF0L21vYmlsZS1wZXJzb25hbC1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbmFsLXdyYXBwZXIgIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucGVyc29uYWwtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODVweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLnBlcnNvbmFsLW1lc3NhZ2UtaW5uZXJcbiAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59XG5cbi5wZXJzb25hbC13cmFwcGVyIC5mb290ZXItd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xufVxuLnBlcnNvbmFsLXdyYXBwZXIgLnBlcnNvbmFsLWZvb3RlciAuZm9vdGVyLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcbn1cblxuLy8gcGVyc29uYWxcblxuXG4uZHJvcC1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYThmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDEwcHg7XG59XG5cbi5kcm9wLWRvd24gdWwgbGl7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zZWFyY2hQZXJzb25hbG1lc3Mge1xuICBwYWRkaW5nOiAyMHB4IDE1cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2VhcmNoUGVyc29uYWxtZXNzIGlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhbmNlbC1zZWFyY2gge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi51c2Vycy1uYXYgZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoLXdyYXBwZXIgLnVzZXItbmFtZS1wZXJzb25hbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNGM1NjdkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogMjJweDtcbn1cblxuXG4ucGVyc29uYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXItbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLW5hdiBzcGFuIGkge1xuICBjb2xvcjogIzk3OWVhYjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuLmhlYWRlci1uYXYgc3BhbiBpOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiByZ2IoODcsIDEyOCwgMjQ3KTtcblxufVxuXG4uaGVhZGVyLW5hdiAudXNlci1uYW1lLXBlcnNvbmFsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0YzU2N2Q7XG59XG5cbi51c2Vycy1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uaW1nLXVzZXItb3RoZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmltZy11c2VyLW90aGVyIC5pbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDMwMD90ZXh0PVVzZXJcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmltZy11c2VyLWN1cnJlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YzU2N2Q7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmltZy11c2VyLWN1cnJlbnQgLmltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MzAwP3RleHQ9VXNlclwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ubW9iaWxlIC5wZXJzb25hbC1tZXNzYWdlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTg1cHgpO1xufVxuXG4ubW9iaWxlIC5wZXJzb25hbC1tZXNzYWdlIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbiIsIi5wZXJzb25hbC13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucGVyc29uYWwtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODVweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucGVyc29uYWwtbWVzc2FnZSAucGVyc29uYWwtbWVzc2FnZS1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnBlcnNvbmFsLXdyYXBwZXIgLmZvb3Rlci13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG59XG5cbi5wZXJzb25hbC13cmFwcGVyIC5wZXJzb25hbC1mb290ZXIgLmZvb3Rlci13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDBweCAwcHg7XG59XG5cbi5kcm9wLWRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhOGY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDEwcHggMTBweDtcbn1cblxuLmRyb3AtZG93biB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zZWFyY2hQZXJzb25hbG1lc3Mge1xuICBwYWRkaW5nOiAyMHB4IDE1cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2VhcmNoUGVyc29uYWxtZXNzIGlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhbmNlbC1zZWFyY2gge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi51c2Vycy1uYXYgZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoLXdyYXBwZXIgLnVzZXItbmFtZS1wZXJzb25hbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNGM1NjdkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogMjJweDtcbn1cblxuLnBlcnNvbmFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1uYXYgc3BhbiBpIHtcbiAgY29sb3I6ICM5NzllYWI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cblxuLmhlYWRlci1uYXYgc3BhbiBpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzU3ODBmNztcbn1cblxuLmhlYWRlci1uYXYgLnVzZXItbmFtZS1wZXJzb25hbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNGM1NjdkO1xufVxuXG4udXNlcnMtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmltZy11c2VyLW90aGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbWctdXNlci1vdGhlciAuaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgzMDA/dGV4dD1Vc2VyXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5pbWctdXNlci1jdXJyZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGM1NjdkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbWctdXNlci1jdXJyZW50IC5pbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDMwMD90ZXh0PVVzZXJcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLm1vYmlsZSAucGVyc29uYWwtbWVzc2FnZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE4NXB4KTtcbn1cblxuLm1vYmlsZSAucGVyc29uYWwtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobilePersonalChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-personal-chat',
                templateUrl: './mobile-personal-chat.component.html',
                styleUrls: ['./mobile-personal-chat.component.scss'],
            }]
    }], function () { return [{ type: _store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }, { type: _chat_navigate_service__WEBPACK_IMPORTED_MODULE_3__["ChatNavigateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_common_animation_service__WEBPACK_IMPORTED_MODULE_5__["AnimationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { chatMessagesContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chatMessagesContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/mobile/res/view/user-profile/user-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/mobile/res/view/user-profile/user-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store-service.service */ "./src/app/store-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/animation.service */ "./src/app/services/common/animation.service.ts");





class UserProfileComponent {
    constructor(storeMessage, router, animSRVC) {
        this.storeMessage = storeMessage;
        this.router = router;
        this.animSRVC = animSRVC;
    }
    ngOnInit() { }
    // клик по ссылке
    clickToShowDialogs({ detail }) {
        this.animSRVC.slideToRIGHT();
        this.router.navigate(['app-mobile-personal-chat']);
    }
    // click to show folder
    clickToShowFolders() {
        console.log('clickToShowFolders');
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_service_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 1, vars: 0, consts: [[3, "onClickToShowFolders", "clickToShowDialogs"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "adam-profile", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClickToShowFolders", function UserProfileComponent_Template_adam_profile_onClickToShowFolders_0_listener() { return ctx.clickToShowFolders(); })("clickToShowDialogs", function UserProfileComponent_Template_adam_profile_clickToShowDialogs_0_listener($event) { return ctx.clickToShowDialogs($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9yZXMvdmlldy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.scss'],
            }]
    }], function () { return [{ type: _store_service_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/res/directive/lifecycle/lifecycle.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/res/directive/lifecycle/lifecycle.directive.ts ***!
  \****************************************************************/
/*! exports provided: LifecycleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifecycleDirective", function() { return LifecycleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LifecycleDirective {
    constructor(el) {
        this.el = el;
        this.afterViewInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.afterViewInit.emit({
            el: this.el
        });
    }
}
LifecycleDirective.ɵfac = function LifecycleDirective_Factory(t) { return new (t || LifecycleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LifecycleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LifecycleDirective, selectors: [["", "lifecycle", ""]], outputs: { afterViewInit: "afterViewInit" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LifecycleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[lifecycle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { afterViewInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['afterViewInit']
        }] }); })();


/***/ }),

/***/ "./src/app/res/module/shared.module.ts":
/*!*********************************************!*\
  !*** ./src/app/res/module/shared.module.ts ***!
  \*********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive/lifecycle/lifecycle.directive */ "./src/app/res/directive/lifecycle/lifecycle.directive.ts");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_2__["LifecycleDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_2__["LifecycleDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_2__["LifecycleDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_2__["LifecycleDirective"]
                ],
                providers: [],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=mobile-mobile-module-es2015.js.map