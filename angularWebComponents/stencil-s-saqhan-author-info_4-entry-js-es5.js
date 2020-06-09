function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-author-info_4-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-author-info_4.entry.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-author-info_4.entry.js ***!
    \***************************************************************************/

  /*! exports provided: s_saqhan_author_info, s_saqhan_line_book, s_saqhan_quote_text, second_title_block */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanAuthorInfo_4EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_author_info", function () {
      return SSaqhanAuthorInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_line_book", function () {
      return SSaqhanLineBook;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_quote_text", function () {
      return SSaqhanQuoteText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "second_title_block", function () {
      return SecondTitleBlock;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");

    var sSaqhanAuthorInfoCss = ".content-text{max-width:625px;margin:auto;width:100%;margin-bottom:15px}";

    var SSaqhanAuthorInfo = /*#__PURE__*/function () {
      function SSaqhanAuthorInfo(hostRef) {
        _classCallCheck(this, SSaqhanAuthorInfo);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnLink = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnLink", 7);
      }

      _createClass(SSaqhanAuthorInfo, [{
        key: "getAuthor",
        value: function getAuthor(arr) {
          return arr.map(function (item) {
            return item;
          });
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "container"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CardAuthor, {
            author: this.getAuthor(this.author)
          }));
        }
      }]);

      return SSaqhanAuthorInfo;
    }();

    var CardAuthor = function CardAuthor(props) {
      return props.author.map(function (item) {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "content-text"
        }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hr", null), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-card-author", {
          author: item
        }));
      });
    };

    SSaqhanAuthorInfo.style = sSaqhanAuthorInfoCss;
    var sSaqhanLineBookCss = ".banner{width:80%;max-height:320px;background-color:#000;padding:50px 20px;margin:80px 0;color:#fff;border-top-right-radius:5px;border-bottom-right-radius:5px}";

    var SSaqhanLineBook = /*#__PURE__*/function () {
      function SSaqhanLineBook(hostRef) {
        _classCallCheck(this, SSaqhanLineBook);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnLink = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnLink", 7);
      }
      /**
       * Функция для получения данных
       * */


      _createClass(SSaqhanLineBook, [{
        key: "getBanner",
        value: function getBanner(arr) {
          return arr.map(function (item) {
            return item;
          });
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Banner, {
            bannerPost: this.getBanner(this.banner)
          }));
        }
      }]);

      return SSaqhanLineBook;
    }();
    /**
     * компонентная функция для разбивки массива
     * */


    var Banner = function Banner(props) {
      return props.bannerPost.map(function (item) {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "container"
        }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-card-banner", {
          bannerPost: item
        }));
      });
    };

    SSaqhanLineBook.style = sSaqhanLineBookCss;
    var sSaqhanQuoteTextCss = ".quote-text{padding-left:50px;margin:30px 0;padding-left:50px;font-weight:600;border-left:5px solid #000000}";

    var SSaqhanQuoteText = /*#__PURE__*/function () {
      function SSaqhanQuoteText(hostRef) {
        _classCallCheck(this, SSaqhanQuoteText);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanQuoteText, [{
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "container"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": " col "
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "quote-text"
          }, this.quoteText.text))));
        }
      }]);

      return SSaqhanQuoteText;
    }();

    SSaqhanQuoteText.style = sSaqhanQuoteTextCss;
    var secondTitleBlockCss = ".title-wrapper{margin:50px 0px}.header-img-title{width:80%;margin:auto;min-height:500px;background-color:red;background-size:cover;background-position:center}.text-title{width:70%;margin:50px auto;text-align:justify}.second-category{color:#0f91e3;font-size:14px;font-weight:500;text-align:center;margin-bottom:30px}.second-title-news{font-size:24px;width:50%;margin:auto;text-align:center;font-weight:700;margin-bottom:30px}.second-title-author{font-size:13px;margin-bottom:30px;text-align:center}.second-title-author .name{font-weight:700}.second-title-author .date{color:#ccc}";

    var SecondTitleBlock = /*#__PURE__*/function () {
      function SecondTitleBlock(hostRef) {
        _classCallCheck(this, SecondTitleBlock);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnLink = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnLink", 7);
      }

      _createClass(SecondTitleBlock, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "container title-wrapper"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "second-category custom-links ",
            onClick: function onClick() {
              return _this.clickOnLink.emit({
                place: 'category',
                item: _this.secondTitle
              });
            }
          }, this.secondTitle.category), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "second-title-news custom-links",
            onClick: function onClick() {
              return _this.clickOnLink.emit({
                place: 'title',
                item: _this.secondTitle
              });
            }
          }, this.secondTitle.title), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "second-title-author"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "name custom-links",
            onClick: function onClick() {
              return _this.clickOnLink.emit({
                place: 'name',
                item: _this.secondTitle
              });
            }
          }, this.secondTitle.authorName), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "date custom-links",
            onClick: function onClick() {
              return _this.clickOnLink.emit({
                place: 'date',
                item: _this.secondTitle
              });
            }
          }, this.secondTitle.date)))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-img-title custom-links",
            onClick: function onClick() {
              return _this.clickOnLink.emit({
                place: 'img',
                item: _this.secondTitle
              });
            },
            style: {
              backgroundImage: "url(".concat(this.secondTitle.img, ")")
            }
          }))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "text-title"
          }, this.secondTitle.text))));
        }
      }]);

      return SecondTitleBlock;
    }();

    SecondTitleBlock.style = secondTitleBlockCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-author-info_4-entry-js-es5.js.map