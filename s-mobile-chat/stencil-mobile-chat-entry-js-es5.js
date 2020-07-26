function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-mobile-chat-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/mobile-chat.entry.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/mobile-chat.entry.js ***!
    \*****************************************************************/

  /*! exports provided: mobile_chat */

  /***/
  function node_modulesStencilChatDistEsmMobileChatEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mobile_chat", function () {
      return MobileChat;
    });
    /* harmony import */


    var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-53235049.js */
    "./node_modules/stencil-chat/dist/esm/index-53235049.js");
    /* harmony import */


    var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index.mjs */
    "./node_modules/stencil-chat/dist/esm/index.mjs");
    /* harmony import */


    var _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mock-8ce3ba60.js */
    "./node_modules/stencil-chat/dist/esm/mock-8ce3ba60.js");

    var mobileChatCss = ".temp.sc-mobile-chat{width:414px;height:708px;overflow:hidden;margin:auto;border:5px solid #4c567d;border-radius:20px;position:absolute;left:0;right:0;-webkit-transform:translate(0, 15%);transform:translate(0, 15%);-webkit-box-shadow:15px 10px 40px 1px #4c567d;box-shadow:15px 10px 40px 1px #4c567d}.temp.sc-mobile-chat .m-chat-dialogs.sc-mobile-chat{height:63vh}.temp.sc-mobile-chat .personal-message.sc-mobile-chat{height:59vh}.sc-mobile-chat::-webkit-scrollbar{width:5px}.sc-mobile-chat::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);-webkit-border-radius:5px;border-radius:3px}.sc-mobile-chat::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:rgba(108, 108, 108, 0.8);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}.sc-mobile-chat::-webkit-scrollbar-thumb:window-inactive{background:rgba(106, 106, 106, 0.4)}";

    var MobileChat = /*#__PURE__*/function () {
      function MobileChat(hostRef) {
        _classCallCheck(this, MobileChat);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Выбираем какой контент показывать
         * */

        this.showContent = "dialogs"; // profile
        // folders
        // contacts

        /**
         * массив данных для диалогов
         * */

        this.dialogs = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        /**
         * массив данных для контактов
         * */

        this.contacts = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["b"];
        /**
         * массив данных личных диалогово
         * */

        this.message = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["M"];
      }
      /**
       * click to Link
       * */


      _createClass(MobileChat, [{
        key: "clickToLink",
        value: function clickToLink(_ref) {
          var detail = _ref.detail;
          return detail; // console.log(detail);
        }
        /**
         * click to Link
         * */

      }, {
        key: "clickToDialog",
        value: function clickToDialog(_ref2) {
          var detail = _ref2.detail;
          return detail; // console.log("clickToDialog", detail);
        }
        /**
         * click to Link
         * */

      }, {
        key: "clickToContact",
        value: function clickToContact(_ref3) {
          var detail = _ref3.detail;
          return detail; // console.log("clickToContact", detail);
        }
        /**
         * Click to category filter
         * */

      }, {
        key: "clickToCategory",
        value: function clickToCategory(_ref4) {
          var detail = _ref4.detail;
          return detail; // console.log("clickToCategory", detail);
        }
        /**
         * Поиск контактов
         * */

      }, {
        key: "searchContact",
        value: function searchContact(e) {
          return e; // console.log("searchContact", e);
        }
        /**
         * Поиск среди диалогов
         * */

      }, {
        key: "searchDialogs",
        value: function searchDialogs(e) {
          return e; // console.log("searchDialogs", e.detail.detail);
        }
        /**
         * Поиск среди диалогов
         * */

      }, {
        key: "searchPersonalMessages",
        value: function searchPersonalMessages(e) {
          return e; // console.log("searchPersonalMessages", e);
        }
        /**
         * click to add dialog
         * */

      }, {
        key: "clickToAddDialog",
        value: function clickToAddDialog() {// console.log("clickToAddDialog");
        }
        /**
         * click to click To Show Dialogs
         * */

      }, {
        key: "clickToShowDialogs",
        value: function clickToShowDialogs() {// console.log("clickToShowDialogs");
        }
        /**
         * click to click To Show Contacts
         * */

      }, {
        key: "clickToShowContacts",
        value: function clickToShowContacts() {// console.log("clickToShowContacts");
        }
        /**
         * click to click To Show MenuBar
         * */

      }, {
        key: "clickToShowMenuBar",
        value: function clickToShowMenuBar() {// console.log("clickToShowMenuBar");
        } // personal chat

        /**
         * click to click To Show MenuBar
         * */

      }, {
        key: "clickToUserProfile",
        value: function clickToUserProfile() {// console.log("clickToUserProfile");
        }
      }, {
        key: "cancelSearchPersonal",
        value: function cancelSearchPersonal() {// console.log("cancelSearchPersonal");
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.getContent(this.showContent));
        }
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          this.dialogs = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        }
      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {// console.log('clickToShowDialogsHandler');
        }
      }, {
        key: "clickToShowFoldersHandler",
        value: function clickToShowFoldersHandler() {// console.log('clickToShowFoldersHandler');
        }
        /**
         *
         * */

      }, {
        key: "clickOnUserProfile",
        value: function clickOnUserProfile() {// console.log('clickOnUserProfile')
        }
        /**
         *
         * */

      }, {
        key: "createFolderHandler",
        value: function createFolderHandler(e) {
          return e; // console.log('createFolderHandler', e)
        }
        /**
         * Метод для вывода определенного контента
         * */

      }, {
        key: "getContent",
        value: function getContent(content) {
          var _this = this;

          switch (content) {
            case "dialogs":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mobile-dialogs", {
                onClickToAddDialog: function onClickToAddDialog() {
                  return _this.clickToAddDialog();
                },
                onClickToDialog: function onClickToDialog(item) {
                  return _this.clickToDialog(item);
                },
                onClickToCategory: function onClickToCategory(item) {
                  return _this.clickToCategory(item);
                },
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogs();
                },
                onClickToShowContacts: function onClickToShowContacts() {
                  return _this.clickToShowContacts();
                },
                onClickToShowMenuBar: function onClickToShowMenuBar() {
                  return _this.clickToShowMenuBar();
                },
                onSearchDialogs: function onSearchDialogs(detail) {
                  return _this.searchDialogs({
                    detail: detail
                  });
                },
                onCancelSearchPersonal: function onCancelSearchPersonal() {
                  return _this.cancelSearchPersonal();
                },
                categories: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["c"],
                dialogs: this.dialogs
              });

            case "personal":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mobile-personal", {
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogs();
                },
                onClickToUserProfile: function onClickToUserProfile() {
                  return _this.clickToUserProfile();
                },
                message: this.message,
                onSearchPersonalMessages: function onSearchPersonalMessages(detail) {
                  return _this.searchPersonalMessages({
                    detail: detail
                  });
                },
                onCancelSearchPersonal: function onCancelSearchPersonal() {
                  return _this.cancelSearchPersonal();
                }
              });

            case "profile":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-profile", {
                theme: "mobile",
                categories: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["c"],
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogsHandler();
                },
                onClickToShowFolders: function onClickToShowFolders() {
                  return _this.clickToShowFoldersHandler();
                }
              });

            case "folders":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-folders", {
                onClickToUserProfile: function onClickToUserProfile() {
                  return _this.clickOnUserProfile();
                },
                onCreateFolder: function onCreateFolder(e) {
                  return _this.createFolderHandler(e.detail);
                },
                dialogs: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"],
                theme: "mobile"
              });

            case "contacts":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list", {
                contacts: this.contacts,
                onSearchContact: function onSearchContact(detail) {
                  return _this.searchContact({
                    detail: detail
                  });
                },
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogs();
                },
                onClickToShowContacts: function onClickToShowContacts() {
                  return _this.clickToShowContacts();
                },
                onClickToShowMenuBar: function onClickToShowMenuBar() {
                  return _this.clickToShowMenuBar();
                },
                onClickToContact: function onClickToContact(item) {
                  return _this.clickToContact(item);
                }
              });

            default:
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "no content");
          }
        }
      }]);

      return MobileChat;
    }();

    MobileChat.style = mobileChatCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-mobile-chat-entry-js-es5.js.map