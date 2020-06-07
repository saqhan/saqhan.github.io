function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-event-card-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-event-card.entry.js":
  /*!************************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-event-card.entry.js ***!
    \************************************************************************/

  /*! exports provided: s_saqhan_event_card */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanEventCardEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_event_card", function () {
      return SSaqhanEventCard;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");

    var sSaqhanEventCardCss = ".blog-img{width:310px;height:210px;background-size:cover;background-position:center;margin-bottom:20px}.date-event{padding:10px;background-color:#fff;position:relative;top:8px;border-bottom-right-radius:5px}@media (max-width: 414px){.blog-card{width:85%;margin:auto;margin-bottom:15px}.block-title{text-align:center}}@media (max-width: 320px){.blog-img{width:100%}}";

    var SSaqhanEventCard = /*#__PURE__*/function () {
      function SSaqhanEventCard(hostRef) {
        _classCallCheck(this, SSaqhanEventCard);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);

        this.ColorCategory = function (nameCategory) {
          var classCategory = "category text-warning small";

          switch (nameCategory) {
            case "Report":
              return "report ".concat(classCategory);

            case "Webinar":
              return "webinar ".concat(classCategory);

            case "Blog Post":
              return "blog-post ".concat(classCategory);
          }
        };

        this.clickOnNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
        this.clickOnCategoryNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnCategoryNews", 7);
      }

      _createClass(SSaqhanEventCard, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "blog-card"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "blog-img",
            style: {
              backgroundImage: "url(" + this.event.img + ")"
            },
            onClick: function onClick() {
              return _this.clickOnNews.emit({
                place: 'img',
                item: _this.event
              });
            }
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": !this.event.date ? 'no-date' : 'date-event'
          }, " ", this.event.date, " ")), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.ColorCategory(this.event.category),
            onClick: function onClick() {
              return _this.clickOnCategoryNews.emit({
                place: 'category',
                item: _this.event
              });
            }
          }, this.event.category), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "blog-title pt-3 font-weight-bold",
            onClick: function onClick() {
              return _this.clickOnNews.emit({
                place: 'title',
                item: _this.event
              });
            }
          }, this.event.title), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-read pt-3",
            onClick: function onClick() {
              return _this.clickOnNews.emit({
                place: 'btn-read',
                item: _this.event
              });
            }
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", this.event.btnText, " ")));
        }
      }]);

      return SSaqhanEventCard;
    }();

    SSaqhanEventCard.style = sSaqhanEventCardCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-event-card-entry-js-es5.js.map