(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-footer-first-item_15-entry-js"],{

/***/ "./node_modules/s-saqhan-v1/dist/esm/footer-first-item_15.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/s-saqhan-v1/dist/esm/footer-first-item_15.entry.js ***!
  \*************************************************************************/
/*! exports provided: footer_first_item, footer_wrapper, menu_item, s_saqhan_app_footer, s_saqhan_author_info, s_saqhan_blog_card, s_saqhan_card_author, s_saqhan_card_banner, s_saqhan_header_app, s_saqhan_line_book, s_saqhan_new_blog, s_saqhan_quote_text, s_saqhan_second_page, s_saqhan_subsc_banner, second_title_block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer_first_item", function() { return FooterFirstItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer_wrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu_item", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_app_footer", function() { return SSaqhanAppFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_author_info", function() { return SSaqhanAuthorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_blog_card", function() { return SSaqhanBlogCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_card_author", function() { return SSaqhanCardAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_card_banner", function() { return SSaqhanCardBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_header_app", function() { return SSaqhanHeaderApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_line_book", function() { return SSaqhanLineBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_new_blog", function() { return SSaqhanNewBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_quote_text", function() { return SSaqhanQuoteText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_second_page", function() { return SSaqhanSecondPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_subsc_banner", function() { return SSaqhanSubscBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "second_title_block", function() { return SecondTitleBlock; });
/* harmony import */ var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a106f9f.js */ "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");
/* harmony import */ var _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-ac8aa152.js */ "./node_modules/s-saqhan-v1/dist/esm/mock-ac8aa152.js");



const footerFirstItemCss = "";

const FooterFirstItem = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnMenu = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnMenu", 7);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "foot-nav-link", onClick: () => this.clickOnMenu.emit({ place: 'footerItem', item: this.arr }) }, this.arr.name)));
    }
};
FooterFirstItem.style = footerFirstItemCss;

const footerWrapperCss = ".foot-nav-link-child{margin-left:15px;font-size:14px;font-weight:400}.footer-title-child{color:#39374d;font-size:16px;font-weight:500}";

const FooterWrapper = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnMenu = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnMenu", 7);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterBlock, { title: this.footer.title, links: this.footer.links, name: this.footer.name, id: this.footer.id }));
    }
};
/**
 * Общая обертка для блока в подвале
 * */
const FooterBlock = (props) => {
    const { title, links, name } = props;
    const currentName = title ? title : name;
    return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-title" }, currentName), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-item" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterValue, { arr: links })))));
};
/**
 * решаем, который блок должен выходить в браузере - родоительский/дочерний (если есть)
 * */
const FooterValue = (props) => {
    return props.arr.map((item) => {
        if (item.links) {
            return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(SubFooterBlock, { links: item.links, name: item.name }));
        }
        else {
            return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer-first-item", { arr: item });
        }
    });
};
/**
 * блок куда будет помещен дочерний блок
 * */
const SubFooterBlock = (props) => {
    return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-title" }, props.name), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onClick: () => undefined.clickOnMenu.emit() }, props.links.map((item) => {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onClick: () => undefined.clickOnMenu.emit({ place: 'footerItem', item: undefined.item }), class: "foot-nav-link" }, item.name));
    }))));
};
FooterWrapper.style = footerWrapperCss;

const menuItemCss = ".header-nav{-ms-flex-pack:justify;justify-content:space-between}.nav-link.header{cursor:pointer}";

const MenuItem = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnMenu = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnMenu", 7);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: "nav-item", onClick: () => this.clickOnMenu.emit(this.arr) }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "nav-link header " }, this.arr.name)));
    }
};
MenuItem.style = menuItemCss;

const sSaqhanAppFooterCss = ".footer{margin-top:100px;margin-bottom:70px}.footer-info{margin-bottom:40px;color:#000;font-size:25px;font-weight:400;font-family:\"Open Sans\", sans-serif}.footer-info-office{color:#5e5d6c;font-size:14px;font-weight:400;font-family:\"Open Sans\", sans-serif}.footer-info-number{color:#007bff;font-size:14px}.footer-title{margin-bottom:10px;margin-top:5px;color:#39374d;font-size:18px;font-weight:500}.footer-item ul{padding-left:0px}.footer-item ul li{list-style-type:none;margin-bottom:15px}.foot-nav-link{color:#39374d;font-size:16px;-webkit-transition:0.1s ease;transition:0.1s ease;cursor:pointer}.foot-nav-link:hover{color:#007bff;font-weight:500;text-decoration:none;border-bottom:2px solid #007bff}.coopyrite{height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:1px solid #e2e7ea}.coopyrite .left{color:#5e5d6c;font-size:14px;font-weight:400;font-family:\"Open Sans\", sans-serif}.coopyrite .right{text-align:right;color:#5e5d6c}.coopyrite .right a{font-family:\"Futura PT Book\";color:#5e5d6c;font-size:16px;text-decoration:none}@media screen and (max-width: 992px){.footer{margin-top:70px;margin-bottom:40px}.footer-info-block{text-align:center;margin-bottom:20px}}@media screen and (max-width: 768px){.footer-title,.footer-item{text-align:center}}@media screen and (max-width: 414px){.footer{text-align:center}.footer-title{margin-top:20px}.coopyrite{text-align:center}.coopyrite .right{text-align:center}}";

const SSaqhanAppFooter = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnMenu = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnMenu", 7);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row footer" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-4 col-md-12 footer-info-block" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-info" }, this.footerInfo.title), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-soc" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "template-demo" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: "btn btn-social-icon btn-facebook btn-rounded" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-facebook-f" })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: "btn btn-social-icon btn-twitter btn-rounded" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-youtube" })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: "btn btn-social-icon btn-instagram btn-rounded" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-instagram" })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: "btn btn-social-icon btn-instagram btn-rounded" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-twitter" }))))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterFirst, { footer: this.footerItems }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 pt-5" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "choose-language text-muted small" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-globe-africa" }), " Choose Language", Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("br", null), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "/", class: "pr-3" }, "English (United Tates)"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "/" }, "French"))))));
    }
};
const FooterFirst = (props) => {
    return props.footer.slice(0, 4).map((item) => {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-2 col-md-3 col-sm-6 col-6" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer-wrapper", { footer: item })));
    });
};
SSaqhanAppFooter.style = sSaqhanAppFooterCss;

const sSaqhanAuthorInfoCss = ".content-text{max-width:625px;margin:auto;width:100%;margin-bottom:15px}";

const SSaqhanAuthorInfo = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    getAuthor(arr) {
        return arr.map((item) => item);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CardAuthor, { author: this.getAuthor(this.author) })));
    }
};
const CardAuthor = (props) => {
    return props.author.map((item) => {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content-text" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hr", null), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-card-author", { author: item })));
    });
};
SSaqhanAuthorInfo.style = sSaqhanAuthorInfoCss;

const sSaqhanBlogCardCss = ".blog-card{width:310px;margin:auto}.blog-img{width:310px;height:210px;background-size:cover;border-radius:3px}.blog-card{width:310px;margin:auto;margin-top:15px;margin-bottom:15px}.blog-category{font-weight:600}@media (max-width: 320px){.blog-img,.blog-card{width:100%}}";

const SSaqhanBlogCard = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ColorCategory = (nameCategory) => {
            const classCategory = "category small pt-4";
            switch (nameCategory) {
                case "Report":
                    return `report ${classCategory}`;
                case "Webinar":
                    return `webinar ${classCategory}`;
                case "Blog Post":
                    return `blog-post ${classCategory}`;
            }
        };
        this.clickOnNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
        this.clickOnCategoryNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnCategoryNews", 7);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "blog-card" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "blog-img", style: { backgroundImage: `url( ${this.post.img})` }, onClick: () => this.clickOnNews.emit({ place: 'img', item: this.post }) }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.ColorCategory(this.post.category), onClick: () => this.clickOnCategoryNews.emit({ place: 'category', item: this.post }) }, this.post.category), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "blog-title pt-3 font-weight-bold", onClick: () => this.clickOnNews.emit({ place: 'title', item: this.post }) }, this.post.title), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-read pt-3" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.clickOnNews.emit({ place: 'btn-read', item: this.post }) }, " ", this.post.btnText, " "))));
    }
};
SSaqhanBlogCard.style = sSaqhanBlogCardCss;

const sSaqhanCardAuthorCss = ".author-sub{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.follow{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:12px;-ms-flex-pack:end;justify-content:flex-end;color:#c4c4c4}.soc-acc{margin-left:20px}.sub-auth{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.img{margin-right:30px;width:70px;height:70px;background-size:cover;border-radius:50%}.name{font-weight:600}.info{font-size:12px}";

const SSaqhanCardAuthor = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row sub-auth" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "author-sub" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img", style: { backgroundImage: 'url(' + this.author.img + ')' } }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "author-info" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "name" }, this.author.firstName), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info" }, this.author.position)))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "follow" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Follow me on:"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "soc-acc" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-soc" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "template-demo" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: "btn btn-social-icon btn-facebook btn-rounded" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-facebook-f" })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: "btn btn-social-icon btn-instagram btn-rounded" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-twitter" })))))))));
    }
};
SSaqhanCardAuthor.style = sSaqhanCardAuthorCss;

const sSaqhanCardBannerCss = ".banner-title{font-size:18px;font-weight:500}.banner-sub-title{margin:25px 0;font-size:14px;font-weight:500}.right-banner{position:relative;top:-70px}.right-banner img{border-radius:3px;position:relative;top:-20px;right:50px}.btn-read button{font-size:12px}.btn-black-line{width:110px;height:40px;margin-left:0px}@media (max-width: 414px){.banner{width:109%;text-align:center}.right-banner{display:none}}";

const SSaqhanCardBanner = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row banner" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-sm-5" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-title" }, " ", this.bannerPost.title, " "), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "banner-sub-title" }, this.bannerPost.subTitle), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-read" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn btn-primary btn-custom-head btn-black-line" }, this.bannerPost.btnText))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-4 right-banner" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.bannerPost.img, alt: "" }))));
    }
};
SSaqhanCardBanner.style = sSaqhanCardBannerCss;

const sSaqhanHeaderAppCss = ".logo-header{width:125px;height:30px;background-position:center;background-size:cover}.btn-custom-head{padding:2px 10px;font-size:12px;border-radius:10px !important;margin-left:-20px}.header-nav{-ms-flex-pack:justify;justify-content:space-between}.header-right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}header{margin-top:50px}@media (max-width: 414px){header{margin-top:20px}}.nav-link.header{cursor:pointer}";

const SSaqhanHeaderApp = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * массив меню для вывода
         */
        this.menu = [];
        this.clickOnMenu = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnMenu", 7);
        this.clickOnSubscribeButton = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnSubscribeButton", 7);
        this.clickToLogo = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLogo", 7);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { class: "navbar navbar-expand-lg navbar-light p-0 d-flex " }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => {
                this.clickToLogo.emit();
            }, class: "navbar-brand logo-header", style: { backgroundImage: `url( ${this.logoUrl.img} )` } }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "navbar-toggler-icon" })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "collapse navbar-collapse header-nav", id: "navbarSupportedContent" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "navbar-nav " }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ItemLink, { arr: this.menu })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-right" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#", class: "pr-4" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-search" })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { onSubmit: (event) => (event.preventDefault()), class: "form" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-group" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", class: "form-control rounded", placeholder: "Enter work email" }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-group-append" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: () => this.clickOnSubscribeButton.emit(), class: "btn btn-primary btn-custom-head" }, this.subscribeText))))))))))));
    }
};
const ItemLink = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("menu-item", { arr: item }));
    });
};
SSaqhanHeaderApp.style = sSaqhanHeaderAppCss;

const sSaqhanLineBookCss = ".banner{width:80%;max-height:320px;background-color:#000;padding:50px 20px;margin:80px 0;color:#fff;border-top-right-radius:5px;border-bottom-right-radius:5px}";

const SSaqhanLineBook = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    getBanner(arr) {
        return arr.map(item => item);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Banner, { bannerPost: this.getBanner(this.banner) })));
    }
};
const Banner = (props) => {
    return (props.bannerPost.map(item => {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-card-banner", { bannerPost: item }));
    }));
};
SSaqhanLineBook.style = sSaqhanLineBookCss;

const sSaqhanNewBlogCss = "";

const SSaqhanNewBlog = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
        this.clickOnCategoryNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnCategoryNews", 7);
    }
    getNewPosts(arr) {
        return arr.map((item) => item);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", { class: "font-weight-bold" }, "New Blog Post"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(NewPostCard, { post: this.getNewPosts(this.blogPost) }))));
    }
};
const NewPostCard = (props) => {
    return (props.post.map((item) => {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-md-6 col-lg-4 " }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-blog-card", { post: item }));
    }));
};
SSaqhanNewBlog.style = sSaqhanNewBlogCss;

const sSaqhanQuoteTextCss = ".quote-text{padding-left:50px;margin:30px 0;padding-left:50px;font-weight:600;border-left:5px solid #000000}";

const SSaqhanQuoteText = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " col " }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "quote-text" }, this.quoteText.text)))));
    }
};
SSaqhanQuoteText.style = sSaqhanQuoteTextCss;

const sSaqhanSecondPageCss = "";

const SSaqhanSecondPage = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-header-app", { menu: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["m"], subscribeText: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["s"], logoUrl: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["l"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("second-title-block", { secondTitle: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["g"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-line-book", { banner: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["e"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-quote-text", { quoteText: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["q"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-author-info", { author: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["d"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-subsc-banner", { subscribeText: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["s"], subscribeBlockText: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["c"], onClickOnSubscribeButton: (event) => this.clickOnSubscribeButton(event) }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-new-blog", { blogPost: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["b"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-app-footer", { footerItems: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["f"], footerInfo: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["a"] })));
    }
    /**
     *  Клик по кнопке подписаться
     * */
    clickOnSubscribeButton({ detail }) {
        return console.log(detail);
    }
};
SSaqhanSecondPage.style = sSaqhanSecondPageCss;

const sSaqhanSubscBannerCss = ".subscribe{background-color:#000;margin-bottom:20px}.subscribe .left{padding-left:50px}.sub-title h1{font-size:52px}.btn-read-sub span{-webkit-transition:0.3s all;transition:0.3s all;color:#6c757d;border-bottom:1px solid #6c757d}.btn-read-sub span:hover{text-decoration:none;color:#fff;border-bottom:1px solid #fff;cursor:context-menu}.btn-custom-head{padding:10px 10px;font-size:12px;border-radius:10px !important;margin-left:-20px;height:50px;width:125px;z-index:999}.form-control{background-color:#fff0;height:50px;padding-left:40px;outline:none}.input-group i{position:relative;top:16px;left:33px;font-size:20px}.logos span{font-size:20px;margin:0px 10px;-webkit-transition:0.3s all;transition:0.3s all}.logos span:hover{color:#fff;cursor:pointer}@media (max-width: 768px){.sub-title,.subs-sub-title{text-align:center}}@media (max-width: 414px){.sub-title{font-size:40px}.subscribe .left{padding-left:0px}}";

const SSaqhanSubscBanner = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnSubscribeButton = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnSubscribeButton", 7);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row subscribe d-flex justify-content-between align-items-center pt-5 pb-5 text-white" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-lg-6 left" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sub-title" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", null, " ", this.subscribeBlockText.title, " ")), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "subs-sub-title text-muted" }, this.subscribeBlockText.subTitle, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "btn-read-sub", onClick: () => this.clickOnSubscribeButton.emit({ place: 'See pricing', item: this.subscribeText }) }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", this.subscribeBlockText.nameLink)))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-lg-6 p-3 right pr-sm-5 text-right" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { class: "form", onSubmit: (event) => event.preventDefault() }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-group" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-at" }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", class: "form-control rounded", placeholder: "Enter work email" }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-group-append" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: () => this.clickOnSubscribeButton.emit({ place: 'btn-subscribe', item: this.subscribeText }), class: "btn btn-primary btn-custom-head", type: "submit" }, this.subscribeText))))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logos text-center text-muted pt-4" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.clickOnSubscribeButton.emit() }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "far fa-address-book" })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.clickOnSubscribeButton.emit() }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-paper-plane" })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.clickOnSubscribeButton.emit() }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-envelope" })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.clickOnSubscribeButton.emit() }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-map-marked" }))))))));
    }
};
SSaqhanSubscBanner.style = sSaqhanSubscBannerCss;

const secondTitleBlockCss = ".title-wrapper{margin:50px 0px}.header-img-title{width:80%;margin:auto;min-height:500px;background-color:red;background-size:cover;background-position:center}.text-title{width:70%;margin:50px auto;text-align:justify}.second-category{color:#0f91e3;font-size:14px;font-weight:500;text-align:center;margin-bottom:30px}.second-title-news{font-size:24px;width:50%;margin:auto;text-align:center;font-weight:700;margin-bottom:30px}.second-title-author{font-size:13px;margin-bottom:30px;text-align:center}.second-title-author .name{font-weight:700}.second-title-author .date{color:#ccc}";

const SecondTitleBlock = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container title-wrapper" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "second-category" }, this.secondTitle.category), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "second-title-news" }, this.secondTitle.title), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "second-title-author" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "name" }, this.secondTitle.authorName), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "date" }, this.secondTitle.date)))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-img-title", style: { backgroundImage: `url(${this.secondTitle.img})` } }))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text-title" }, this.secondTitle.text)))));
    }
};
SecondTitleBlock.style = secondTitleBlockCss;




/***/ })

}]);
//# sourceMappingURL=stencil-footer-first-item_15-entry-js-es2015.js.map