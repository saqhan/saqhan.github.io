function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-dialogs-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/s-adam-dialogs.entry.js":
  /*!********************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/s-adam-dialogs.entry.js ***!
    \********************************************************************/

  /*! exports provided: s_adam_dialogs */

  /***/
  function node_modulesStencilChatDistEsmSAdamDialogsEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_dialogs", function () {
      return SAdamDialogs;
    });
    /* harmony import */


    var _index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-325847e8.js */
    "./node_modules/stencil-chat/dist/esm/index-325847e8.js");

    var sAdamDialogsCss = "";

    var SAdamDialogs = /*#__PURE__*/function () {
      function SAdamDialogs(hostRef) {
        _classCallCheck(this, SAdamDialogs);

        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.toggleChat = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "toggleChat", 7);
      }

      _createClass(SAdamDialogs, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "dialog",
            onClick: function onClick() {
              return _this.toggleChat.emit({
                place: 'showChat',
                item: _this.dialog
              });
            }
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "dialog-photo border-radius",
            style: {
              backgroundImage: 'url(' + this.dialog.photo + ')'
            }
          }), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "dialog-message"
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "dialog-message-caption"
          }, this.dialog.name), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "dialog-message-text"
          }, this.dialog.message)), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "message-time"
          }, this.dialog.time));
        }
      }]);

      return SAdamDialogs;
    }();

    SAdamDialogs.style = sAdamDialogsCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-adam-dialogs-entry-js-es5.js.map