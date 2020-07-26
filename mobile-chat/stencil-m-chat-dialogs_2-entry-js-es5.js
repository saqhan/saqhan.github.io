function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-m-chat-dialogs_2-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/m-chat-dialogs_2.entry.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/m-chat-dialogs_2.entry.js ***!
    \**********************************************************************/

  /*! exports provided: m_chat_dialogs, m_chat_header */

  /***/
  function node_modulesStencilChatDistEsmMChatDialogs_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "m_chat_dialogs", function () {
      return MChatDialogs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "m_chat_header", function () {
      return MChatHeader;
    });
    /* harmony import */


    var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-53235049.js */
    "./node_modules/stencil-chat/dist/esm/index-53235049.js");

    var mChatDialogsCss = ".m-chat-dialogs.sc-m-chat-dialogs{padding:20px 30px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 135px);overflow:auto}@media (max-width: 414px){.m-chat-dialogs.sc-m-chat-dialogs{padding:20px 15px 0px}}";

    var MChatDialogs = /*#__PURE__*/function () {
      function MChatDialogs(hostRef) {
        _classCallCheck(this, MChatDialogs);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MChatDialogs, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-dialogs"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Dialog, {
            mess: this.dialogs
          }));
        }
      }]);

      return MChatDialogs;
    }();
    /**
     * Распаковка массива диалогов и выдача в компоненте <dialog-card/>
     * */


    var Dialog = function Dialog(array) {
      return array.mess.map(function (item) {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", {
          mess: item
        });
      });
    };

    MChatDialogs.style = mChatDialogsCss;
    var mChatHeaderCss = ".modal-wrapper.sc-m-chat-header{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0px 15px;height:40px;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out}.modal-wrapper.sc-m-chat-header input.sc-m-chat-header{text-align:center;border-radius:5px;border:none;background-color:#eaeaea;width:100%;padding:5px;font-size:14px;outline:none}.m-chat-header.sc-m-chat-header{border-bottom:1px solid #ccc}.m-chat-header.sc-m-chat-header .title.sc-m-chat-header{font-weight:600;color:#4c567d}.m-chat-header.sc-m-chat-header .search.sc-m-chat-header i.sc-m-chat-header{color:#979eab;-webkit-transition:0.3s ease;transition:0.3s ease}.m-chat-header.sc-m-chat-header .search.sc-m-chat-header i.sc-m-chat-header:hover{color:#5780f7}.m-chat-header.sc-m-chat-header .add.sc-m-chat-header i.sc-m-chat-header{color:#979eab;font-size:18px;-webkit-transition:0.3s ease;transition:0.3s ease}.m-chat-header.sc-m-chat-header .add.sc-m-chat-header i.sc-m-chat-header:hover{color:#5780f7}.title-wrapper.sc-m-chat-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:20px 20px 0px}.custom-link.sc-m-chat-header{cursor:pointer}";

    var MChatHeader = /*#__PURE__*/function () {
      function MChatHeader(hostRef) {
        _classCallCheck(this, MChatHeader);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *
         * */

        this.isShowModal = true;
        this.searchDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialogs", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
        this.clickToAddDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToAddDialog", 7);
      }
      /**
       * Показывать/скрывать окно поиска
       * */


      _createClass(MChatHeader, [{
        key: "showModal",
        value: function showModal() {
          this.isShowModal = !this.isShowModal;
        }
      }, {
        key: "cancelSearchPersonalHandler",
        value: function cancelSearchPersonalHandler() {
          this.cancelSearchPersonal.emit();
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-header"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "title-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "search custom-link",
            onClick: function onClick() {
              return _this.showModal();
            }
          }, this.isShowModal ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-search"
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-times",
            onClick: function onClick() {
              return _this.cancelSearchPersonalHandler();
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "title"
          }, "Messages"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "add custom-link",
            onClick: function onClick() {
              return _this.clickToAddDialogHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-cog hover-link"
          }))), this.isShowModal ? this.categories.length ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-categories", {
            theme: "mobile",
            categories: this.categories
          }) : "" : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "modal-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            placeholder: "search",
            onInput: function onInput(e) {
              return _this.searchDialogsHandler(e);
            }
          })));
        }
        /**
         * search Dialogs
         * */

      }, {
        key: "searchDialogsHandler",
        value: function searchDialogsHandler(event) {
          // @ts-ignore
          this.searchDialogs.emit(event.target.value);
        }
        /**
         * Add dialog method
         * */

      }, {
        key: "clickToAddDialogHandler",
        value: function clickToAddDialogHandler() {
          this.clickToAddDialog.emit();
        }
      }]);

      return MChatHeader;
    }();

    MChatHeader.style = mChatHeaderCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-m-chat-dialogs_2-entry-js-es5.js.map