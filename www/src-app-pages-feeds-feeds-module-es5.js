(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-feeds-feeds-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feeds/feeds.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feeds/feeds.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFeedsFeedsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>feeds</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/feeds/feeds-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/feeds/feeds-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: FeedsPageRoutingModule */

    /***/
    function srcAppPagesFeedsFeedsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsPageRoutingModule", function () {
        return FeedsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _feeds_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feeds.page */
      "./src/app/pages/feeds/feeds.page.ts");

      var routes = [{
        path: '',
        component: _feeds_page__WEBPACK_IMPORTED_MODULE_3__["FeedsPage"]
      }];

      var FeedsPageRoutingModule = function FeedsPageRoutingModule() {
        _classCallCheck(this, FeedsPageRoutingModule);
      };

      FeedsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeedsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/feeds/feeds.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/feeds/feeds.module.ts ***!
      \*********************************************/

    /*! exports provided: FeedsPageModule */

    /***/
    function srcAppPagesFeedsFeedsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsPageModule", function () {
        return FeedsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _feeds_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feeds-routing.module */
      "./src/app/pages/feeds/feeds-routing.module.ts");
      /* harmony import */


      var _feeds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feeds.page */
      "./src/app/pages/feeds/feeds.page.ts");

      var FeedsPageModule = function FeedsPageModule() {
        _classCallCheck(this, FeedsPageModule);
      };

      FeedsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feeds_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedsPageRoutingModule"]],
        declarations: [_feeds_page__WEBPACK_IMPORTED_MODULE_6__["FeedsPage"]]
      })], FeedsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/feeds/feeds.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/feeds/feeds.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFeedsFeedsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWRzL2ZlZWRzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/feeds/feeds.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/feeds/feeds.page.ts ***!
      \*******************************************/

    /*! exports provided: FeedsPage */

    /***/
    function srcAppPagesFeedsFeedsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsPage", function () {
        return FeedsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FeedsPage = /*#__PURE__*/function () {
        function FeedsPage() {
          _classCallCheck(this, FeedsPage);
        }

        _createClass(FeedsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FeedsPage;
      }();

      FeedsPage.ctorParameters = function () {
        return [];
      };

      FeedsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feeds',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./feeds.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feeds/feeds.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./feeds.page.scss */
        "./src/app/pages/feeds/feeds.page.scss"))["default"]]
      })], FeedsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-feeds-feeds-module-es5.js.map