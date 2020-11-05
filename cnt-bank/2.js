(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-main-carousel-banners_4.entry.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-main-carousel-banners_4.entry.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: s_cnt_bank_main_carousel_banners, s_cnt_bank_main_page_banner_in_maps, s_cnt_bank_main_page_categories, s_cnt_bank_main_page_tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_main_carousel_banners", function() { return SCntBankMainCarouselBanners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_main_page_banner_in_maps", function() { return SCntBankMainPageBannerInMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_main_page_categories", function() { return SCntBankMainPageCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_bank_main_page_tabs", function() { return SCntBankMainPageTabs; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");
/* harmony import */ var _mock_646493a4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-646493a4.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/mock-646493a4.js");



const sCntBankMainCarouselBannersCss = ".carousel-banner-group.sc-s-cnt-bank-main-carousel-banners{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow-x:scroll;overflow-y:hidden;height:140px;margin:0 -15px;padding:0 15px}.carousel-banner-group.sc-s-cnt-bank-main-carousel-banners::-webkit-scrollbar{width:0}.carousel-banner-group.sc-s-cnt-bank-main-carousel-banners{-ms-overflow-style:none}.carousel-banner-item.sc-s-cnt-bank-main-carousel-banners{width:280px;min-width:280px;height:100px;border-radius:10px;-webkit-box-shadow:0px 5px 7px 2px rgba(235,235,235,1);box-shadow:0px 4px 10px 2px rgb(218 218 218);display:-ms-flexbox;display:flex;position:relative;padding:20px;margin-right:10px}.carousel-icon.sc-s-cnt-bank-main-carousel-banners{margin-right:10px}.carousel-icon.sc-s-cnt-bank-main-carousel-banners img.sc-s-cnt-bank-main-carousel-banners{width:48px;height:48px}.carousel-title.sc-s-cnt-bank-main-carousel-banners{font-weight:400;margin-bottom:5px}.carousel-subtitle.sc-s-cnt-bank-main-carousel-banners{color:#828282;line-height:1}.carousel-close.sc-s-cnt-bank-main-carousel-banners{position:absolute;right:15px;top:5px;font-size:16px;color:#828282}";

const SCntBankMainCarouselBanners = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-banner-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content-carousel-banner" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-banner-group" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(BannerItem, { banner: this.payload })))));
    }
};
const BannerItem = props => {
    return props.banner.map(banner => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-banner-item" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-icon" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: banner.icon, alt: "" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-desc" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-title" }, banner.title), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-subtitle" }, banner.subtitle)), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-close" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-times" }))));
    });
};
SCntBankMainCarouselBanners.style = sCntBankMainCarouselBannersCss;

const sCntBankMainPageBannerInMapsCss = ".banner-wrapper.sc-s-cnt-bank-main-page-banner-in-maps{padding:10px 0}.banner-content.sc-s-cnt-bank-main-page-banner-in-maps{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.banner-icon.sc-s-cnt-bank-main-page-banner-in-maps{padding-right:20px;font-size:24px;color:#45c161}.banner-subtitle.sc-s-cnt-bank-main-page-banner-in-maps{color:#828282;font-size:14px}";

const SCntBankMainPageBannerInMaps = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-content" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-icon" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.payload.icon }))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-desc" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-title" }, this.payload.title), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-subtitle" }, this.payload.subtitle)))));
    }
};
SCntBankMainPageBannerInMaps.style = sCntBankMainPageBannerInMapsCss;

const sCntBankMainPageCategoriesCss = ".categories-panel.sc-s-cnt-bank-main-page-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px}.categories-panel-items.sc-s-cnt-bank-main-page-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.categories-panel-item.sc-s-cnt-bank-main-page-categories{margin-right:10px;color:#dadada}.active.sc-s-cnt-bank-main-page-categories{color:#fff}.finance.sc-s-cnt-bank-main-page-categories{color:#323232}.btn-title.sc-s-cnt-bank-main-page-categories{color:#ccc}.categories-content.sc-s-cnt-bank-main-page-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow-x:auto;margin:0 -15px -15px -15px}.categories-detail-btn.sc-s-cnt-bank-main-page-categories{cursor:pointer;color:#fff}.categories-action.sc-s-cnt-bank-main-page-categories{margin-right:10px;margin-left:15px}.history.sc-s-cnt-bank-main-page-categories{color:#fff}.categories-cards-items.sc-s-cnt-bank-main-page-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.categories-card-item.sc-s-cnt-bank-main-page-categories{margin-right:10px;background-color:#ccc;border-radius:10px;width:100px;height:130px;display:-ms-flexbox;display:flex;-ms-flex-align:end;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end;padding:10px 5px;font-size:14px;-ms-flex-align:start;align-items:flex-start}.action-btn.sc-s-cnt-bank-main-page-categories:first-child{margin-bottom:10px}.action-btn.sc-s-cnt-bank-main-page-categories{background-color:rgba(0, 0, 0, 0.1);height:60px;width:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:10px;font-size:22px;color:#ffffff}";

const SCntBankMainPageCategories = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-panel" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-panel-items" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CategoriesPanelItem, { item: this.payload.categoriesPanelItems })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-detail-btn" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onClick: () => this.clickAdditionalOptions() }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-ellipsis-v" })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-bank-additional-options", { payload: _mock_646493a4_js__WEBPACK_IMPORTED_MODULE_1__["e"], openedAdditionalOptions: this.openedAdditionalOptions, onClickCloseAdditionalOptions: () => this.clickCloseAdditionalOptions() }))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-content" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-cards-items" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CardsItems, { cards: this.payload.categoriesItems })))));
    }
    /**
     *
     * */
    clickAdditionalOptions() {
        this.openedAdditionalOptions = true;
        document.querySelector("body").style.overflow = "hidden";
    }
    /**
     *
     * */
    clickCloseAdditionalOptions() {
        this.openedAdditionalOptions = false;
        document.querySelector("body").style.overflow = "visible";
    }
};
/**
 * список категорий в заголовке хедера
 * */
const CategoriesPanelItem = props => {
    return props.item.map(item => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-panel-item active" }, item.title));
    });
};
/**
 * cards items
 * */
const CardsItems = props => {
    return props.cards.map(item => {
        if (item.category === 'action') {
            return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "categories-action" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "qr action-btn" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: item.actionQrIcon })), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "add action-btn" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: item.actionAddIcon }))));
        }
        else {
            return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `categories-card-item ${item.category}`, style: { background: `${item.background}` } }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, item.title), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-title" }, item.btnTitle)));
        }
    });
};
SCntBankMainPageCategories.style = sCntBankMainPageCategoriesCss;

const sCntBankMainPageTabsCss = ".tabs-item.sc-s-cnt-bank-main-page-tabs{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:10px 0}.tabs-header.sc-s-cnt-bank-main-page-tabs{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.tabs-title.sc-s-cnt-bank-main-page-tabs{font-weight:600}.tabs-icon.sc-s-cnt-bank-main-page-tabs{margin-left:10px;color:#828282;-webkit-transition:all .3s ease;transition:all .3s ease}.tabs-btn.sc-s-cnt-bank-main-page-tabs{color:#45c161}.active.sc-s-cnt-bank-main-page-tabs .tabs-icon.sc-s-cnt-bank-main-page-tabs{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.collapse.sc-s-cnt-bank-main-page-tabs{display:none;height:0px;-webkit-transition:all 1.3s ease;transition:all 1.3s ease}.active.sc-s-cnt-bank-main-page-tabs .collapse.sc-s-cnt-bank-main-page-tabs{display:block;height:auto}";

const SCntBankMainPageTabs = class {
    constructor(hostRef) {
        Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tabs-wrapper" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tabs-group-items" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TabsItem, { items: this.payload, lastClickedItemState: this.lastClickedItemState, tabItemTag: this.tabItemTag, clickOnTabItem: (id) => this.clickOnTabItemHandler(id) }))));
    }
    /**
     *
     * */
    clickOnTabItemHandler(id) {
        // this.lastClickedItemState = id;
        if (this.lastClickedItemState === id) {
            this.lastClickedItemState = null;
        }
        else {
            this.lastClickedItemState = id;
        }
    }
};
/**
 * tabs list
 * */
const TabsItem = (props) => {
    return props.items.map((item) => {
        return (Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `tabs-item-wrapper ${item.id === props.lastClickedItemState ? 'active' : ''}`, ref: el => props.tabItemTag = el }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tabs-item" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tabs-header", onClick: () => props.clickOnTabItem(item.id) }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tabs-title" }, item.title), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tabs-icon " }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: item.icon }))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tabs-btn" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: item.btnIcon }))), Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "collapse" }, Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "panel-body" }, item.content))));
    });
};
SCntBankMainPageTabs.style = sCntBankMainPageTabsCss;




/***/ })

}]);
//# sourceMappingURL=2.js.map