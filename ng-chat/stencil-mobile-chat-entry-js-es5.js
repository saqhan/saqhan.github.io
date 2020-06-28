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


    var _index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-325847e8.js */
    "./node_modules/stencil-chat/dist/esm/index-325847e8.js");
    /* harmony import */


    var _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./common.interface-2aa0c474.js */
    "./node_modules/stencil-chat/dist/esm/common.interface-2aa0c474.js");
    /* harmony import */


    var _mock_ba054b7a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mock-ba054b7a.js */
    "./node_modules/stencil-chat/dist/esm/mock-ba054b7a.js");

    var mobileChatCss = ".temp{width:414px;height:708px;overflow:hidden;margin:auto;border:5px solid #4c567d;border-radius:20px;position:absolute;left:0;right:0;-webkit-transform:translate(0, 15%);transform:translate(0, 15%);-webkit-box-shadow:15px 10px 40px 1px #4c567d;box-shadow:15px 10px 40px 1px #4c567d}.temp .m-chat-dialogs{height:63vh}.temp .personal-message{height:59vh}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);-webkit-border-radius:5px;border-radius:3px}::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:rgba(108, 108, 108, 0.8);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}::-webkit-scrollbar-thumb:window-inactive{background:rgba(106, 106, 106, 0.4)}";

    var MobileChat = /*#__PURE__*/function () {
      function MobileChat(hostRef) {
        _classCallCheck(this, MobileChat);

        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Выбираем какой контент показывать
         * */

        this.showContent = "dialogs";
        /**
         * массив данных для диалогов
         * */

        this.dialogs = _mock_ba054b7a_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        /**
         * массив данных личных диалогово
         * */

        this.messageMock = _mock_ba054b7a_js__WEBPACK_IMPORTED_MODULE_2__["M"];
      }

      _createClass(MobileChat, [{
        key: "render",
        value: function render() {
          var _this = this;

          return (// <div class="temp">
            //  <div>{this.getContent(this.showContent)}</div>
            Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mobile-dialogs", {
              onClickToLink: function onClickToLink(item) {
                return _this.clickToLink(item);
              },
              onClickToCategory: function onClickToCategory(item) {
                return _this.clickToCategory(item);
              },
              categories: _mock_ba054b7a_js__WEBPACK_IMPORTED_MODULE_2__["c"],
              dialogs: this.dialogs
            })) // </div>

          );
        }
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          this.dialogs = _mock_ba054b7a_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        }
        /**
         * click to Link
         * */

      }, {
        key: "clickToLink",
        value: function clickToLink(_ref) {
          var detail = _ref.detail;
          console.log(detail);
        }
        /**
         * Click to category filter
         * */

      }, {
        key: "clickToCategory",
        value: function clickToCategory(_ref2) {
          var detail = _ref2.detail;
          console.log(detail);
        }
      }]);

      return MobileChat;
    }();

    MobileChat.style = mobileChatCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-mobile-chat-entry-js-es5.js.map