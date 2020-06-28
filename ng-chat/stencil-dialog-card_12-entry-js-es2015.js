(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-dialog-card_12-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/dialog-card_12.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/dialog-card_12.entry.js ***!
  \********************************************************************/
/*! exports provided: dialog_card, mess_from_me, mess_to_me, my_component, personal_footer, s_adam_chat, s_adam_contacts, s_adam_direct, s_adam_nav_item, s_adam_navigate, s_adam_no_chat, s_adam_profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialog_card", function() { return DialogCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mess_from_me", function() { return MessFromMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mess_to_me", function() { return MessToMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_component", function() { return MyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personal_footer", function() { return PersonalFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_chat", function() { return SAdamChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_contacts", function() { return SAdamContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_direct", function() { return SAdamDirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_nav_item", function() { return SAdamNavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_navigate", function() { return SAdamNavigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_no_chat", function() { return SAdamNoChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_profile", function() { return SAdamProfile; });
/* harmony import */ var _index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-325847e8.js */ "./node_modules/stencil-chat/dist/esm/index-325847e8.js");
/* harmony import */ var _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.interface-2aa0c474.js */ "./node_modules/stencil-chat/dist/esm/common.interface-2aa0c474.js");
/* harmony import */ var _mock_ba054b7a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-ba054b7a.js */ "./node_modules/stencil-chat/dist/esm/mock-ba054b7a.js");




const dialogCardCss = ".m-dialog-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:20px;cursor:pointer}.img-user{margin-right:20px;text-align:center}.img-user .img{width:50px;height:50px;border-radius:50%;background-position:center;background-size:cover}.info-card{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;-ms-flex-pack:justify;justify-content:space-between}.unfo-user{width:80%;overflow:hidden}.name-user{font-size:14px;font-weight:600;color:#4c567d}.message-user{font-size:14px;color:#979eab;white-space:nowrap}.data-message{text-align:center}.data-message .date{font-size:10px;color:#979eab}.data-message .new-message{font-size:10px;color:#979eab}.add-new-message{background-color:#ff7e7f;font-size:10px;padding:1px 5px;border-radius:50%;color:#fff}.comp .info-card{width:70%}.comp .m-dialog-card{padding:20px 10px;margin:0}.comp .m-dialog-card:hover{background-color:white}.comp .data-message{height:100%}";

const DialogCard = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * карточка диалога
         * */
        this.theme = 'mobile';
        this.clickToLink = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-dialog-card", onClick: () => this.clickToLink.emit({ place: 'showPersonalDialog', item: this.mess }) }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.mess.online ? 'img online' : 'img', style: { backgroundImage: `url(${this.mess.img})` } })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-card" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "unfo-user" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "name-user" }, this.mess.name), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "message-user" }, this.mess.mess)), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "data-message" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "date" }, " ", this.createSendTime(this.mess.time.created)), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "add-new-message" }, "1"))))));
    }
    /**
     *
     * */
    getClassForHost() {
        return {
            [this.theme]: true
        };
    }
    /**
     * Метод вывода времени отправки сообщения
     * */
    createSendTime(array) {
        const timeNow = array;
        let hours = timeNow.getHours();
        let minutes = timeNow.getMinutes();
        // add zero for minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        // выводим время в минутах/часах
        return `${hours} : ${minutes}`;
    }
};
DialogCard.style = dialogCardCss;

const messFromMeCss = ".admin-mess-wrapp{width:100%}.admin-mess-wrapper .mess-img{height:150px;border-top-left-radius:20px;border-top-right-radius:0px;border-bottom-right-radius:20px;border-bottom-left-radius:20px;background-position:center;background-size:cover}.admin-mess-wrapper{margin:15px 0}.admin-mess-wrapp{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.admin-mess{max-width:250px;padding:10px;border:1px solid #c7d0e8;border-radius:20px 0px 20px 20px;background-color:#ebf0fe;color:#799af8;font-size:14px;display:-ms-flexbox;display:flex}.admin-mess-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.admin-mess .check{font-size:10px;margin-left:5px}.admin-mess-wrapper .mess-img{max-width:350px;min-width:300px;height:150px;border-top-left-radius:20px;border-top-right-radius:0px;border-bottom-right-radius:20px;border-bottom-left-radius:20px;background-position:center;background-size:cover}.mess-img-admin .check{position:relative;top:80%;left:92%;font-size:10px;color:#fff}.mess-img .check{position:relative;top:80%;left:95%;font-size:10px;color:#fff}@media (max-width: 414px){.admin-mess-wrapper .mess-img{max-width:60%;min-width:inherit}.mess-img .check{left:90%}}";

const MessFromMe = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "admin-mess-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "admin-mess-wrapp" }, this.createType(this.message))));
    }
    createType(array) {
        switch (array.type) {
            case _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_1__["M"].text:
                return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "admin-mess" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "message-text" }, this.message.content)), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "personal-mess-date" }, this.createSendTime(this.message.time.created)), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "check" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-check-double" })))));
            case _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_1__["M"].image:
                return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mess-img", style: { backgroundImage: `url(${this.message.content})` } }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "check" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-check-double" }))));
        }
    }
    /**
     * Метод вывода времени отправки сообщения
     * */
    createSendTime(array) {
        const timeNow = array;
        let hours = timeNow.getHours();
        let minutes = timeNow.getMinutes();
        // add zero for minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return `${hours} : ${minutes}`;
    }
};
MessFromMe.style = messFromMeCss;

const messToMeCss = ".text-wrapper{width:75%}.info-wrapper{width:25%;min-width:55px;text-align:right}.user-mess-wrapper{margin:15px 0}.user-mess-wrapp{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end}.user-mess-wrapp .img{width:30px;height:30px;margin-right:10px;border-radius:50%;background-size:cover;background-position:center}.user-mess{max-width:250px;padding:10px;border:1px solid #ccc;border-radius:0px 20px 20px 20px;font-size:14px;color:#979eab;display:-ms-flexbox;display:flex;-ms-flex-align:unset;align-items:unset;-ms-flex-pack:justify;justify-content:space-between}.personal-mess-date{font-size:10px;margin-left:5px}.user-mess .check{font-size:10px;margin-left:5px}.user-mess-wrapper .mess-img{max-width:350px;min-width:300px;height:150px;border-radius:0px 20px 20px 20px;background-position:center;background-size:cover}.mess-img .check{position:relative;top:80%;left:90%;font-size:10px;color:#fff}@media (max-width: 414px){.user-mess-wrapper .mess-img{max-width:60%;min-width:inherit}}";

const MessToMe = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-mess-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-mess-wrapp" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "img", style: { backgroundImage: `url(${this.message.sender.icon})` } }), this.createType(this.message))));
    }
    createType(array) {
        switch (array.type) {
            case _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_1__["M"].text:
                return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-mess" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "message-text" }, this.message.content)), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "personal-mess-date" }, this.createSendTime(this.message.time.created)))));
            case _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_1__["M"].image:
                return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mess-img", style: { backgroundImage: `url(${this.message.content})` } }));
        }
    }
    /**
     * Метод вывода времени отправки сообщения
     * */
    createSendTime(array) {
        const timeNow = array;
        const hours = timeNow.getHours();
        let minutes = timeNow.getMinutes();
        // add zero for minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return `${hours} : ${minutes}`;
    }
};
MessToMe.style = messToMeCss;

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        // return <mobile-chat></mobile-chat>;
        return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-chat", null);
    }
};
MyComponent.style = myComponentCss;

const personalFooterCss = ".personal-footer{position:absolute;bottom:0;width:100%;background-color:white}.footer-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-radius:20px;-ms-flex-align:center;align-items:center;padding:10px 15px 10px;-webkit-box-shadow:0px 0px 10px 5px #ccc;box-shadow:0px 0px 10px 5px #ccc;font-size:18px;color:#979eab}.file,.audio{width:10%;text-align:center;cursor:pointer}.file i:hover{color:#6328f8}.audio i:hover{color:#6328f8}.input-wrapper{width:80%}.input-wrapper input{width:100%;text-align:center;color:#4c567d;padding:10px 0;border:none;font-size:16px;outline:none}";

const PersonalFooter = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToLink = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-footer" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file", onClick: () => this.clickToLink.emit({ place: "add-file-mess" }) }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-paperclip" })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { onSubmit: (e) => this.sendingNewMess(e) }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "Type something ..." }))), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "audio", onClick: () => this.clickToLink.emit({ place: "add-audio-mess" }) }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-microphone" })))));
    }
    /**
     * when sending message
     * */
    sendingNewMess(e) {
        e.preventDefault();
        console.log("sendingNewMess", e.currentTarget.querySelector('input').value);
        e.currentTarget.querySelector('input').value = '';
    }
};
PersonalFooter.style = personalFooterCss;

const sAdamChatCss = "main{height:95vh;overflow:hidden}.chat{position:relative;height:95vh}";

const SAdamChat = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *Стейт для переключения на личный чат
         */
        this.dialogVisible = 'noChat';
        /**
         * Стейт для показа профиля пользователя
         */
        this.profileVisible = false;
    }
    /**
     * Метод для переключения на личный чат
     * @param detail
     */
    toggleChat({ detail }) {
        if (detail.place === 'showPersonalDialog') {
            this.dialogVisible = 'showChat';
        }
    }
    toggleProfile({ detail }) {
        if (detail.place === 'userName') {
            this.profileVisible = !this.profileVisible;
        }
    }
    render() {
        return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", null, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-1" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-navigate", { logo: _mock_ba054b7a_js__WEBPACK_IMPORTED_MODULE_2__["l"], navItems: _mock_ba054b7a_js__WEBPACK_IMPORTED_MODULE_2__["n"] })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-3" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-contacts", { onClickToLink: ({ detail }) => { this.toggleChat({ detail }); }, dialogs: _mock_ba054b7a_js__WEBPACK_IMPORTED_MODULE_2__["d"] })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "chat" }, this.showChat(this.dialogVisible))), this.showProfile(this.profileVisible))));
    }
    /**
     * Метод, который выводит необходимый чат
     * @param content
     */
    showChat(content) {
        switch (content) {
            case 'showChat':
                return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-direct", { onClickToLink: ({ detail }) => this.clickToLink({ detail }), onClickOnUsername: (item) => { this.toggleProfile(item); }, message: _mock_ba054b7a_js__WEBPACK_IMPORTED_MODULE_2__["M"] });
            case 'noChat':
                return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-no-chat", null);
        }
    }
    showProfile(item) {
        if (item === true) {
            return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-3" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-profile", null)));
        }
        else {
            return '';
        }
    }
    /**
    * click to Link
    * */
    clickToLink({ detail }) {
        console.log(detail);
    }
};
SAdamChat.style = sAdamChatCss;

const sAdamContactsCss = ".contacts-column{background-color:#f7f8f9;padding:20px;height:100vh}.search-contact-wrapper{position:relative}.search-contact-wrapper .fas{position:absolute;left:15px;font-size:12px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.search-contact{border:none;padding:10px 40px;width:100%}.search-contact-block{padding-bottom:20px}.contacts{overflow-y:auto;max-height:85vh}.dialog{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:30px 0;padding:20px 10px;cursor:pointer}.dialog:hover{background-color:white}.dialog:active{background-color:white}.dialog-photo{width:40px;height:40px;background-size:cover;background-position:center;margin-right:15px}.dialog-message-caption{font-weight:700;font-size:13px}.dialog-message-text{font-size:12px;color:gray}.message-time{font-size:10px;margin-left:auto;color:lightgray}::-webkit-scrollbar{width:0px;background:transparent;}input::-moz-placeholder{color:#979eab}input::-webkit-input-placeholder{color:#979eab}";

const SAdamContacts = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Массив с элементами диалога
         */
        this.dialogs = [];
        this.clickToLink = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-column" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-contact-block" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-contact-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-search" }), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { class: "search-contact", type: "text", placeholder: "Search contact" }))), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts" }, this.dialogs.map(dialog => {
            return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", { theme: 'comp', mess: dialog }));
        }))));
    }
};
SAdamContacts.style = sAdamContactsCss;

/**
 *
 * */
var MessageDirectionEnum;
(function (MessageDirectionEnum) {
    /**
     * сообщения написал кто то другой, и получено мною
     * */
    MessageDirectionEnum[MessageDirectionEnum["toMe"] = 0] = "toMe";
    /**
     * сообщения написал я
     * */
    MessageDirectionEnum[MessageDirectionEnum["fromMe"] = 1] = "fromMe";
    /**
     * сообщения которое будет отображаться в центре
     * */
    MessageDirectionEnum[MessageDirectionEnum["center"] = 2] = "center";
})(MessageDirectionEnum || (MessageDirectionEnum = {}));
/**
 *
 * */
var MessageTypeEnum;
(function (MessageTypeEnum) {
    /**
     * сообщения написал кто то другой, и получено мною
     * */
    MessageTypeEnum["text"] = "text";
    /**
     * аудио сообщения записанное самим пользователем
     * */
    MessageTypeEnum["liveAudio"] = "live-audio";
    /**
     * аудио сообщение любое которое не записано самим пользователем
     * */
    MessageTypeEnum["audio"] = "audio";
    /**
     * фотка сделанная на устройстве пользователя и отправленная сразу
     * */
    MessageTypeEnum["liveImage"] = "live-image";
    /**
     * фотка из устройства отправителя
     * */
    MessageTypeEnum["image"] = "image";
    /**
     * видео сделанная на устройстве пользователя и отправленная сразу
     * */
    MessageTypeEnum["liveVideo"] = "live-video";
    /**
     * видео из устройства отправителя
     * */
    MessageTypeEnum["video"] = "video";
    /**
     * файл из устройства отправителя
     * */
    MessageTypeEnum["file"] = "file";
})(MessageTypeEnum || (MessageTypeEnum = {}));

const sAdamDirectCss = ".header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;padding:20px;border-bottom:1px solid #f7f8f9}.search-message,.settings{color:#bacbe3;cursor:pointer}.user{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.user-name{font-weight:700;cursor:pointer}.online-marker{width:8px;height:8px;border-radius:100%;background-color:#5dc969;margin-left:10px}.chat-messages{padding:40px 0;overflow-y:auto;height:80vh;position:relative}";

const SAdamDirect = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Личный диалог
         */
        this.message = [];
        this.clickOnUsername = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnUsername", 7);
        this.clickToLink = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-message" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-search hover-link" })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-name", onClick: (item) => this.clickOnUsername.emit({ place: 'userName', item }) }, "Tim Ostin"), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "online-marker" })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "settings" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-cog hover-link" }))), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "chat-messages" }, this.message.map(message => {
            switch (message.direction) {
                case MessageDirectionEnum.toMe:
                    return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mess-to-me", { message: message });
                case MessageDirectionEnum.fromMe:
                    return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mess-from-me", { message: message });
                case MessageDirectionEnum.center:
                    return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Today");
            }
        })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", null)));
    }
};
SAdamDirect.style = sAdamDirectCss;

const sAdamNavItemCss = "";

const SAdamNavItem = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-item" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: 'hover-link ' + this.navItems.icon })));
    }
};
SAdamNavItem.style = sAdamNavItemCss;

const sAdamNavigateCss = ".nav-column{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding-top:20px}.logo{width:50px;height:50px;background-size:cover;background-position:center;margin-bottom:50px;border-radius:100%;cursor:pointer}.fas,.fab{color:#bacbe3}.hover-link:hover{color:#6328f8}.hover-link:active{color:#6328f8}.nav-item{margin-bottom:20px;cursor:pointer}";

const SAdamNavigate = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Иконки навигации
         */
        this.navItems = [];
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-column" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo border-radius", style: { backgroundImage: 'url(' + this.logo.logo + ')' } }), this.navItems.map(item => {
            return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-nav-item", { navItems: item }));
        })));
    }
};
SAdamNavigate.style = sAdamNavigateCss;

const sAdamNoChatCss = ".select-chat{position:absolute;bottom:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#8d8d8d}";

const SAdamNoChat = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "select-chat" }, "Please select a chat"));
    }
};
SAdamNoChat.style = sAdamNoChatCss;

const sAdamProfileCss = ".comp .links-wrapper a{display:none}.mobile .links-wpapper{display:-ms-flexbox;display:flex}.mobile .about-user{margin-bottom:30px}.profile{background-color:#f7f8f9;padding:20px;height:100vh;overflow:auto}.about-user{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;margin-bottom:70px}.profile-user-photo{width:80px;height:80px;background-size:cover;background-position:center;margin-bottom:20px;border-radius:100%;cursor:pointer}.profile .user-name{font-size:14px;margin-bottom:10px}.user-mail{margin-bottom:30px;font-size:12px;color:#8d8d8d}.about-user .fas{margin:0 15px}.user-social{margin-bottom:40px}.user-social-title,.media-title{font-weight:700;font-size:12px;margin-bottom:10px}.user-social-block{background:white;min-height:140px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:20px}.user-social-block .fab{width:16px;text-align:center;margin-right:20px}.user-social-name,.mediafile-desc{font-size:12px;color:#8d8d8d;font-weight:600}.media-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.media-descr{font-size:8px;color:#8d8d8d}.media-item{padding:10px;background:white;margin-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.mediafile{width:40px;height:40px;border-radius:5px;margin-right:20px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pdf{background-color:#ff908c}.zip{background-color:#58c4c9}.doc{background-color:#73a4e9}.mediafile span{color:white;font-size:8px;font-weight:600}.fas,.fab{color:#bacbe3;cursor:pointer}.hover-link:hover{color:#6328f8}::-webkit-scrollbar{width:0px;background:transparent;}";

const SAdamProfile = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Задаем стиль для мобильной/пк версии
         * */
        this.theme = "comp";
        this.clickToLink = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "profile" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "links-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => this.clickToLink.emit({ place: "showPersonalDialog" }) }, " ", Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-arrow-left" }))), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "about-user" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "profile-user-photo border-radius", style: {
                backgroundImage: "url(https://via.placeholder.com/200x200?text=Text)",
            } }), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-name" }, "Tim Ostin"), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-mail" }, "timostin@gmail.com"), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-contact" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-phone-alt hover-link" }), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-video hover-link" }), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-envelope hover-link" }))), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-title" }, "Terhubung"), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-block" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-link" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-instagram hover-link" }), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-social-name" }, "TimOstin")), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-link" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-twitter hover-link" }), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-social-name" }, "Tim Ostin")), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-link" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-facebook-f \u0440" }), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-social-name" }, "Tim Ostin")))), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-header" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-title" }, "Media"), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-descr" }, "Lihat lebin banyak")), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-block" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-item" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mediafile pdf" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "PDF")), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mediafile-desc" }, "Buku Hueanghong.pdf")), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-item" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mediafile zip" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "ZIP")), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mediafile-desc" }, "File jungjang.zip")), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-item" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mediafile doc" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "DOC")), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mediafile-desc" }, "Laporan keuangan.ppt")))))));
    }
    /**
     * выводим класс
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
};
SAdamProfile.style = sAdamProfileCss;




/***/ })

}]);
//# sourceMappingURL=stencil-dialog-card_12-entry-js-es2015.js.map