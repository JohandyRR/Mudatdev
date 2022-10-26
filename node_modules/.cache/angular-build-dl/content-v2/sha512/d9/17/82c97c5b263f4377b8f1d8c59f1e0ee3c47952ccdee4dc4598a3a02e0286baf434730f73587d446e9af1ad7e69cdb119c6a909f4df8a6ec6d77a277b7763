(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginscreen-loginscreen-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginscreen/loginscreen.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginscreen/loginscreen.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginscreenLoginscreenPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-title>loginscreen</ion-title> -->\n  </ion-toolbar>\n  <ion-buttons slot=\"start\">\n  <ion-back-button defaulthref=\"login\" text=\"\"></ion-back-button>\n  </ion-buttons>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"ion-no-margin\">\n      <ion-img src=\"assets/images/header1.png\"></ion-img>\n      <ion-card-content>\n\n    <form [formGroup]=\"validationFormUser\" (ngSubmit)=\"LoginUser(validationFormUser.value)\">\n        <div class=\"wrapform\">\n        <ion-item>\n            <ion-input type=\"text\" name=\"email\" formControlName=\"email\"  placeholder=\"Correo\">\n          <ion-icon name=\"mail-outline\"></ion-icon>\n          </ion-input>\n          </ion-item>\n          <div>\n               <ng-container *ngFor=\"let validation of validationUserMessage.email\">\n                     <div class=\"error_message\" *ngIf=\"validationFormUser.get('email').hasError(validation.type) && (validationFormUser.get('email').dirty || validationFormUser.get('email').touched)\">\n                        {{validation.message}}\n                    </div>\n              </ng-container>\n          </div>\n\n          <ion-item>\n\n            <ion-input type=\"password\" name=\"password\" formControlName=\"password\"  placeholder=\"**************\" >\n            <ion-icon name=\"lock-closed\"></ion-icon>\n            </ion-input>\n            </ion-item>\n\n            <div>\n                 <ng-container *ngFor=\"let validation of validationUserMessage.password\">\n                      <div class=\"error_message\" *ngIf=\"validationFormUser.get('password').hasError(validation.type) && (validationFormUser.get('password').dirty || validationFormUser.get('password').touched)\">\n                        {{validation.message}}\n                      </div>\n                  </ng-container>\n            </div>\n\n        </div>\n        <div class=\"password_forgot\">\n            <ion-button fill=\"clear\" class=\"ion-no-padding\">Olvido su contraseña?</ion-button>\n        </div>\n        <div class=\"sign-btn-wrap\">\n            <ion-button  shape=\"round\" type=\"submit\"  fill=\"solid\" class=\"sign-btn\" [disabled]=\"!validationFormUser.valid\" >Entrar</ion-button>\n          </div>\n\n          <div class=\"text-tag\">\n          <span>O Registrarte con:</span>\n          </div>\n\n          <div class=\"social-btns\">\n              <ion-button fill=\"clear\"  class=\"facebookbtn ion-no-padding\">\n            <ion-img src=\"assets/images/facebook.png\"></ion-img>\n              </ion-button>\n              <ion-button fill=\"clear\"  class=\"googlebtn ion-no-padding\">\n            <ion-img src=\"assets/images/google.png\"></ion-img>\n              </ion-button>\n            </div>\n\n\n\n      </form>\n      </ion-card-content>\n\n\n    </ion-card>\n\n\n    <div class=\"ion-card-footer\">\n    <span>No tienes una cuenta?</span><button class=\"ion-no-padding\" >Registrarte</button>\n      </div>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/loginscreen/loginscreen-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/loginscreen/loginscreen-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: LoginscreenPageRoutingModule */

    /***/
    function srcAppPagesLoginscreenLoginscreenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginscreenPageRoutingModule", function () {
        return LoginscreenPageRoutingModule;
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


      var _loginscreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loginscreen.page */
      "./src/app/pages/loginscreen/loginscreen.page.ts");

      var routes = [{
        path: '',
        component: _loginscreen_page__WEBPACK_IMPORTED_MODULE_3__["LoginscreenPage"]
      }];

      var LoginscreenPageRoutingModule = function LoginscreenPageRoutingModule() {
        _classCallCheck(this, LoginscreenPageRoutingModule);
      };

      LoginscreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginscreenPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/loginscreen/loginscreen.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/loginscreen/loginscreen.module.ts ***!
      \*********************************************************/

    /*! exports provided: LoginscreenPageModule */

    /***/
    function srcAppPagesLoginscreenLoginscreenModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginscreenPageModule", function () {
        return LoginscreenPageModule;
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


      var _loginscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loginscreen-routing.module */
      "./src/app/pages/loginscreen/loginscreen-routing.module.ts");
      /* harmony import */


      var _loginscreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loginscreen.page */
      "./src/app/pages/loginscreen/loginscreen.page.ts");

      var LoginscreenPageModule = function LoginscreenPageModule() {
        _classCallCheck(this, LoginscreenPageModule);
      };

      LoginscreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _loginscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginscreenPageRoutingModule"]],
        declarations: [_loginscreen_page__WEBPACK_IMPORTED_MODULE_6__["LoginscreenPage"]]
      })], LoginscreenPageModule);
      /***/
    },

    /***/
    "./src/app/pages/loginscreen/loginscreen.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/loginscreen/loginscreen.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginscreenLoginscreenPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: transparent;\n  --opacity: 0;\n}\n\nion-content {\n  --ion-background-color:#E1EAF9 !important;\n  --ion-item-background: transparent !important;\n}\n\n.wrapform {\n  margin-top: 15px;\n}\n\n.error_message {\n  font-size: 6px;\n  color: red;\n}\n\nion-item {\n  color: #647B9D;\n  --border-color: #D4D7DB;\n  --highlight-color-focused:#1248A0;\n  --padding-start:0;\n  --inner-padding-end:0;\n  font-size: 12px;\n}\n\nion-item ion-input {\n  color: #647B9D;\n}\n\nion-item ion-icon {\n  padding-right: 6px;\n  font-size: 18px;\n}\n\nion-item ion-input:hover {\n  color: #1248A0;\n}\n\n.password_forgot {\n  text-align: right;\n}\n\n.password_forgot ion-button {\n  font-size: 12px;\n  color: #0A4296;\n}\n\n.sign-btn-wrap {\n  text-align: center;\n  padding-top: 20px;\n}\n\n.sign-btn-wrap .sign-btn {\n  --ion-primary-color:#215AB7;\n  --background-activated:#E1EAF9;\n  --background-focused:#E1EAF9;\n  --background-hover:#647B9D;\n  color: #F4F6FA;\n  border-radius: 25px;\n  --background:#215AB7;\n  background-color: #215AB7;\n}\n\n.text-tag {\n  margin-top: 30px;\n  text-align: center;\n}\n\n.text-tag span {\n  font-size: 13px;\n  font-weight: normal;\n  color: #898585;\n}\n\n.social-btns {\n  margin-top: 25px;\n  text-align: center;\n}\n\n.social-btns ion-button {\n  width: 40px;\n  padding-left: 5px !important;\n}\n\nion-card {\n  --ion-background-color: transparent !important;\n  box-shadow: none !important;\n  background-color: transparent !important;\n}\n\n.ion-card-footer {\n  width: 100%;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.ion-card-footer span {\n  color: #85888D;\n  font-size: 12px;\n  font-weight: 200;\n}\n\n.ion-card-footer button {\n  background-color: transparent;\n  font-size: 14px;\n  font-weight: 600;\n  padding-left: 3px;\n  color: #535558;\n}\n\n.ion-card-footer button:hover {\n  color: #969393;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW5zY3JlZW4vbG9naW5zY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDSSxjQUFBO0VBQ0YsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFJRSxlQUFBO0FBQUo7O0FBRUs7RUFDRSxjQUFBO0FBQVA7O0FBR0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFETjs7QUFJSTtFQUNFLGNBQUE7QUFGTjs7QUFVQTtFQUNFLGlCQUFBO0FBUEY7O0FBU0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVdBO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtBQVJIOztBQVNFO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBUEo7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBU0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBUEo7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QUFQSjs7QUFXQTtFQUNFLDhDQUFBO0VBQ0UsMkJBQUE7RUFDQSx3Q0FBQTtBQVJKOztBQVdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVJGOztBQVVFO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVlFO0VBQ0csNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFWTDs7QUFjRTtFQUNFLGNBQUE7QUFaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luc2NyZWVuL2xvZ2luc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLW9wYWNpdHk6IDA7XG59XG5cbmlvbi1jb250ZW50e1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNFMUVBRjkgIWltcG9ydGFudDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ud3JhcGZvcm17XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZXJyb3JfbWVzc2FnZXtcbiAgZm9udC1zaXplOiA2cHg7XG4gIGNvbG9yOiByZWQ7XG59XG5pb24taXRlbSB7XG4gICAgY29sb3I6IzY0N0I5RDtcbiAgLS1ib3JkZXItY29sb3I6ICNENEQ3REI7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IzEyNDhBMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6MDtcbiAgXG5cblxuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgLy8gLS1jb2xvci1mb2N1c2VkOiMxMjQ4QTAgIWltcG9ydGFudDtcbiAgICAgaW9uLWlucHV0e1xuICAgICAgIGNvbG9yOiM2NDdCOUQ7XG5cbiAgICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIGlvbi1pbnB1dDpob3ZlcntcbiAgICAgIGNvbG9yOiAjMTI0OEEwO1xuICAgIH1cblxuXG59XG5cblxuXG4ucGFzc3dvcmRfZm9yZ290e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgLy8gY29sb3I6IzBBNDI5NlxuICBpb24tYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzBBNDI5NjtcbiAgfVxufVxuXG4uc2lnbi1idG4td3JhcHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAuc2lnbi1idG57XG4gICAgLS1pb24tcHJpbWFyeS1jb2xvcjojMjE1QUI3O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I0UxRUFGOTtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDojRTFFQUY5O1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjojNjQ3QjlEO1xuICAgIGNvbG9yOiNGNEY2RkE7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAtLWJhY2tncm91bmQ6IzIxNUFCNztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE1QUI3O1xuICB9XG59XG5cbi50ZXh0LXRhZ3tcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiM4OTg1ODU7XG4gIH1cbn1cblxuLnNvY2lhbC1idG5ze1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi1idXR0b257XG4gICAgd2lkdGg6NDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi1jYXJke1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNhcmQtZm9vdGVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcblxuICBzcGFue1xuICBjb2xvcjogIzg1ODg4RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMjAwO1xuXG4gIH1cblxuICBidXR0b257XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICBjb2xvcjogIzUzNTU1ODtcblxuICB9XG5cbiAgYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiAjOTY5MzkzO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/loginscreen/loginscreen.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/loginscreen/loginscreen.page.ts ***!
      \*******************************************************/

    /*! exports provided: LoginscreenPage */

    /***/
    function srcAppPagesLoginscreenLoginscreenPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginscreenPage", function () {
        return LoginscreenPage;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");

      var LoginscreenPage = /*#__PURE__*/function () {
        function LoginscreenPage(formbuider, authservice, router, firestore, nav) {
          _classCallCheck(this, LoginscreenPage);

          this.formbuider = formbuider;
          this.authservice = authservice;
          this.router = router;
          this.firestore = firestore;
          this.nav = nav;
          this.validationUserMessage = {
            email: [{
              type: "required",
              message: "Please enter your Email"
            }, {
              type: "pattern",
              message: "The Email entered is Incorrect.Try again"
            }],
            password: [{
              type: "required",
              message: "please Enter your Password!"
            }, {
              type: "minlength",
              message: "The Password must be at least 5 characters or more"
            }]
          };
        }

        _createClass(LoginscreenPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validationFormUser = this.formbuider.group({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]))
            });
          }
        }, {
          key: "LoginUser",
          value: function LoginUser(value) {
            var _this = this;

            console.log("Am logged in");

            try {
              this.authservice.loginFireauth(value).then(function (resp) {
                console.log(resp); //  this.router.navigate(['tabs'])

                if (resp.user) {
                  _this.authservice.setUser({
                    username: resp.user.displayName,
                    uid: resp.user.uid
                  });

                  var userProfile = _this.firestore.collection('profile').doc(resp.user.uid);

                  userProfile.get().subscribe(function (result) {
                    if (result.exists) {
                      _this.nav.navigateForward(['tabs']);
                    } else {
                      _this.firestore.doc("profile/".concat(_this.authservice.getUID())).set({
                        name: resp.user.displayName,
                        email: resp.user.email
                      });

                      _this.nav.navigateForward(['uploadimage']);
                    }
                  });
                }
              });
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return LoginscreenPage;
      }();

      LoginscreenPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      LoginscreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginscreen',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loginscreen.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginscreen/loginscreen.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loginscreen.page.scss */
        "./src/app/pages/loginscreen/loginscreen.page.scss"))["default"]]
      })], LoginscreenPage);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.cjs.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(auth, googleplus) {
          _classCallCheck(this, AuthService);

          this.auth = auth;
          this.googleplus = googleplus;
        }

        _createClass(AuthService, [{
          key: "loginFireauth",
          value: function loginFireauth(value) {
            return new Promise(function (resolve, reject) {
              firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password).then(function (res) {
                return resolve(res);
              }, function (error) {
                return reject(error);
              });
            });
          }
        }, {
          key: "setUser",
          value: function setUser(user) {
            return this.user = user;
          }
        }, {
          key: "getUID",
          value: function getUID() {
            return this.user.uid;
          }
        }, {
          key: "userRegistration",
          value: function userRegistration(value) {
            return new Promise(function (resolve, reject) {
              firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password).then(function (res) {
                return resolve(res);
              }, function (error) {
                return reject(error);
              });
            });
          }
        }, {
          key: "GoogleloginAuth",
          value: function GoogleloginAuth() {
            return this.googleplus.login({
              'scopes': 'profile email',
              'webClientId': '206201421419-u1mp61vt8faleo46c8n4lm3hadsam9i7.apps.googleusercontent.com',
              'offline': true
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-loginscreen-loginscreen-module-es5.js.map