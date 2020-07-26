function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-search-contact-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/s-adam-search-contact.entry.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/s-adam-search-contact.entry.js ***!
    \***************************************************************************/

  /*! exports provided: s_adam_search_contact */

  /***/
  function node_modulesStencilChatDistEsmSAdamSearchContactEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_search_contact", function () {
      return SAdamSearchContact;
    });
    /* harmony import */


    var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-53235049.js */
    "./node_modules/stencil-chat/dist/esm/index-53235049.js");

    var sAdamSearchContactCss = ".search-contact-block{margin-bottom:20px}.search-contact-wrapper{position:relative}.search-contact-wrapper .c-chat{position:absolute;left:15px;font-size:12px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#bacbe3}.search-contact{border:none;padding:10px 40px;width:100%;outline:none}input::-moz-placeholder{color:#979eab}input::-webkit-input-placeholder{color:#979eab}";

    var SAdamSearchContact = /*#__PURE__*/function () {
      function SAdamSearchContact(hostRef) {
        _classCallCheck(this, SAdamSearchContact);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.searchDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialogs", 7);
      }

      _createClass(SAdamSearchContact, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "search-contact-block"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "search-contact-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-search"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            onInput: function onInput(e) {
              return _this.searchDialogHandler(e);
            },
            "class": "search-contact",
            type: "text",
            placeholder: "Search dialogs"
          })));
        }
        /**
         * Фильтрация диалогов
         */

      }, {
        key: "searchDialogHandler",
        value: function searchDialogHandler(e) {
          this.searchDialogs.emit(e.target.value);
        }
      }]);

      return SAdamSearchContact;
    }();

    SAdamSearchContact.style = sAdamSearchContactCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-adam-search-contact-entry-js-es5.js.map