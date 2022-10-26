(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-title>signup</ion-title> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaulthref=\"login\" text=\"\">\n      </ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"bg-color\">\n\n    <ion-card class=\"ion-no-margin\">\n\n        <ion-card-header>\n            <ion-card-title>\n              Registrarte\n            </ion-card-title>\n            <ion-card-subtitle>\n              Crea una cuenta completando todos los campos!\n              </ion-card-subtitle>\n        </ion-card-header>\n             <form [formGroup]=\"ValidationFormUSer\" (ngSubmit)=\"registerUser(ValidationFormUSer.value)\">\n       <ion-card-content>\n           <ion-item>\n               <ion-input name=\"names\" type=\"text\" placeholder=\"Nombre completo\" formControlName=\"names\">\n                 <ion-icon name=\"person-outline\"  ></ion-icon>\n               </ion-input>\n           </ion-item>\n              <div>\n                <ng-container *ngFor=\"let validation of validationMessages.names\">\n\n                  <div class=\"error_message\" *ngIf=\"ValidationFormUSer.get('names').hasError(validation.type) && (ValidationFormUSer.get('names').dirty || ValidationFormUSer.get('names').touched)\">\n                      {{validation.message}}\n                  </div>\n\n                 </ng-container>\n\n              </div>\n           <ion-item>\n               <ion-input name=\"phone\" type=\"text\" placeholder=\"Número de teléfono:\" formControlName=\"phone\">\n                 <ion-icon name=\"call-outline\" ></ion-icon>\n               </ion-input>\n           </ion-item>\n           <div>\n             <ng-container *ngFor=\"let validation of validationMessages.phone\">\n\n               <div class=\"error_message\" *ngIf=\"ValidationFormUSer.get('phone').hasError(validation.type) && (ValidationFormUSer.get('phone').dirty || ValidationFormUSer.get('phone').touched)\">\n                   {{validation.message}}\n               </div>\n\n              </ng-container>\n\n           </div>\n           <ion-item>\n               <ion-input name=\"email\" type=\"text\" placeholder=\"Correo\" formControlName=\"email\">\n                 <ion-icon name=\"mail-outline\" ></ion-icon>\n               </ion-input>\n           </ion-item>\n           <ng-container *ngFor=\"let validation of validationMessages.email\">\n\n             <div class=\"error_message\" *ngIf=\"ValidationFormUSer.get('email').hasError(validation.type) && (ValidationFormUSer.get('email').dirty || ValidationFormUSer.get('email').touched)\">\n                 {{validation.message}}\n             </div>\n\n            </ng-container>\n           <ion-item>\n               <ion-input name=\"password\" type=\"password\" placeholder=\"************\" formControlName=\"password\">\n                 <ion-icon name=\"lock-closed\" ></ion-icon>\n               </ion-input>\n           </ion-item>\n           <ng-container *ngFor=\"let validation of validationMessages.password\">\n\n             <div class=\"error_message\" *ngIf=\"ValidationFormUSer.get('password').hasError(validation.type) && (ValidationFormUSer.get('password').dirty || ValidationFormUSer.get('password').touched)\">\n                 {{validation.message}}\n             </div>\n\n            </ng-container>\n\n           <div class=\"sign-btn-wrap\">\n              <ion-button  shape=\"round\" type=\"submit\"  fill=\"solid\" class=\"sign-btn\" [disabled]=\"!ValidationFormUSer.valid\">Registrate</ion-button>\n             </div>\n\n             <div class=\"text-tag\">\n             <span>Registrarte con:</span>\n             </div>\n\n             <div class=\"social-btns\">\n                 <ion-button fill=\"clear\"  class=\"facebookbtn ion-no-padding\">\n               <ion-img src=\"assets/images/facebook.png\"></ion-img>\n                 </ion-button>\n                 <ion-button fill=\"clear\"  class=\"googlebtn ion-no-padding\">\n               <ion-img src=\"assets/images/google.png\"></ion-img>\n                 </ion-button>\n\n               </div>\n\n       </ion-card-content>\n        </form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: transparent;\n  --ion-item-background: transparent !important;\n}\n\n.bg-color {\n  background: #E1EAF9;\n}\n\nion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color:transparent;\n  --opacity:0;\n}\n\nion-card {\n  --ion-background-color:transparent;\n  box-shadow: none !important;\n  background-color: transparent !important;\n}\n\nion-card-title {\n  margin-top: 50px !important;\n  font-size: 25px;\n  color: #53565A;\n  font-weight: 600;\n  text-align: center;\n}\n\nion-card-subtitle {\n  text-align: center;\n  padding-top: 15px !important;\n  font-size: 13px;\n  color: #888C91;\n  font-weight: 400;\n  text-transform: none;\n  padding: 0 30px;\n}\n\nion-card-content {\n  padding-top: 30px;\n}\n\nion-item {\n  color: #74787E;\n  --border-color:#D4D7DB;\n  --highlight-color-focused:#215AB7;\n  --padding-start:0;\n  --inner-padding-end:0;\n  --highlight-color-invalid: #215AB7;\n  --highlight-color-valid: #215AB7;\n  font-size: 13px;\n}\n\nion-item ion-input {\n  color: #74787E;\n  font-size: 13px;\n}\n\nion-item ion-input ion-icon {\n  padding-right: 6px;\n  font-size: 18px;\n}\n\nion-item ion-input:hover {\n  color: #215AB7;\n}\n\n.sign-btn-wrap {\n  text-align: center;\n  padding-top: 45px;\n}\n\n.sign-btn-wrap .sign-btn {\n  --ion-primary-color:#215AB7;\n  --background:#215AB7;\n  --background-activated:#E1EAF9;\n  --background-focused:#E1EAF9;\n  --background-hover:#647B9D;\n  color: #F4F6FA;\n  background-color: #215AB7;\n  border-radius: 25px;\n}\n\n.text-tag {\n  margin-top: 35px;\n  text-align: center;\n}\n\n.text-tag span {\n  font-size: 13px;\n  font-weight: normal;\n  color: #334862;\n}\n\n.social-btns {\n  margin-top: 18px;\n  text-align: center;\n}\n\n.social-btns ion-button {\n  width: 30px;\n  padding-left: 5px !important;\n}\n\n.error_message {\n  font-size: 6px;\n  font-weight: 200;\n  color: #913e07;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDRSwyQkFBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRUM7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNIOztBQUdDO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFBSDs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBRUM7RUFDRSxjQUFBO0VBQ0Msc0JBQUE7RUFFRCxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBRUEsZUFBQTtBQURIOztBQUVHO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFBTDs7QUFDSztFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNQOztBQUdHO0VBQ0UsY0FBQTtBQURMOztBQVNDO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtBQU5KOztBQU9HO0VBQ0UsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBTEw7O0FBVUM7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUEg7O0FBUUc7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTkw7O0FBVUM7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUEg7O0FBUUc7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QUFOTDs7QUFVQztFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFQSCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvcntcbiAgYmFja2dyb3VuZDogI0UxRUFGOTtcbn1cblxuaW9uLWhlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tdG9vbGJhcntcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgLS1vcGFjaXR5OjA7XG59XG5cbmlvbi1jYXJke1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4gaW9uLWNhcmQtdGl0bGV7XG4gICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICBmb250LXNpemU6IDI1cHg7XG4gICBjb2xvcjogIzUzNTY1QTtcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiB9XG5cbiBpb24tY2FyZC1zdWJ0aXRsZXtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICBmb250LXNpemU6IDEzcHg7XG4gICBjb2xvcjogIzg4OEM5MTtcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgIHBhZGRpbmc6IDAgMzBweDtcbiB9XG5cbmlvbi1jYXJkLWNvbnRlbnR7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuIGlvbi1pdGVte1xuICAgY29sb3I6Izc0Nzg3RTtcbiAgICAtLWJvcmRlci1jb2xvcjojRDREN0RCO1xuXG4gICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiMyMTVBQjc7XG4gICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgIC0taW5uZXItcGFkZGluZy1lbmQ6MDtcbiAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6ICMyMTVBQjc7XG4gICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzIxNUFCNztcbiAgIFxuICAgZm9udC1zaXplOiAxM3B4O1xuICAgaW9uLWlucHV0e1xuICAgICBjb2xvcjojNzQ3ODdFO1xuICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgIGlvbi1pY29ue1xuICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgIH1cbiAgIH1cblxuICAgaW9uLWlucHV0OmhvdmVye1xuICAgICBjb2xvcjojMjE1QUI3O1xuXG4gICB9XG5cblxuXG4gfVxuXG4gLnNpZ24tYnRuLXdyYXB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgLnNpZ24tYnRue1xuICAgICAtLWlvbi1wcmltYXJ5LWNvbG9yOiMyMTVBQjc7XG4gICAgIC0tYmFja2dyb3VuZDojMjE1QUI3O1xuICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNFMUVBRjk7XG4gICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiNFMUVBRjk7XG4gICAgIC0tYmFja2dyb3VuZC1ob3ZlcjojNjQ3QjlEO1xuICAgICBjb2xvcjojRjRGNkZBO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE1QUI3O1xuICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG4gICB9XG4gfVxuXG4gLnRleHQtdGFne1xuICAgbWFyZ2luLXRvcDogMzVweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIHNwYW57XG4gICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgY29sb3I6IzMzNDg2MjtcbiAgIH1cbiB9XG5cbiAuc29jaWFsLWJ0bnN7XG4gICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgaW9uLWJ1dHRvbntcbiAgICAgd2lkdGg6MzBweDtcbiAgICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgIH1cbiB9XG5cbiAuZXJyb3JfbWVzc2FnZXtcbiAgIGZvbnQtc2l6ZTogNnB4O1xuICAgZm9udC13ZWlnaHQ6MjAwO1xuICAgY29sb3I6ICM5MTNlMDc7XG4gfVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_app_preferences_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-preferences/ngx */ "./node_modules/@ionic-native/app-preferences/__ivy_ngcc__/ngx/index.js");







let SignupPage = class SignupPage {
    constructor(router, preference, navCtr, formbuilder, authService, loadingCtrl, alertCtrl) {
        this.router = router;
        this.preference = preference;
        this.navCtr = navCtr;
        this.formbuilder = formbuilder;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.validationMessages = {
            names: [{ type: "required", message: "Please Enter your Full Names" }],
            phone: [{ type: "required", message: "Please Enter your Phone No." }],
            email: [
                { type: 'required', message: "Enter your Email Adress" },
                { type: "pattern", meesage: "Please the Email Entered is Incorrect. Try again.." }
            ],
            password: [
                { type: "required", message: "password is required here" },
                { type: "minlength", message: "Passwrd must be at least 6 character" }
            ]
        };
        this.loading = this.loadingCtrl;
    }
    ngOnInit() {
        this.ValidationFormUSer = this.formbuilder.group({
            names: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]))
        });
    }
    registerUser(value) {
        this.showalert();
        try {
            this.authService.userRegistration(value).then(response => {
                console.log(response);
                if (response.user) {
                    response.user.updateProfile({
                        displayName: value.names,
                        email: value.email,
                        phoneNumber: value.phone
                    });
                    this.preference.store(value.phone, 'userPhoneNumber');
                    this.loading.dismiss();
                    this.router.navigate(['loginscreen']);
                }
            }, error => {
                this.loading.dismiss();
                this.errorLoading(error.message);
            });
        }
        catch (erro) {
            console.log(erro);
        }
    }
    errorLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.alertCtrl.create({
                header: "Error Registering",
                message: message,
                buttons: [{
                        text: 'ok',
                        handler: () => {
                            this.navCtr.navigateBack(['signup']);
                        }
                    }]
            });
            yield loading.present();
        });
    }
    showalert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var load = yield this.loadingCtrl.create({
                message: "please wait....",
            });
            load.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_app_preferences_ngx__WEBPACK_IMPORTED_MODULE_6__["AppPreferences"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");





let AuthService = class AuthService {
    constructor(auth, googleplus) {
        this.auth = auth;
        this.googleplus = googleplus;
    }
    loginFireauth(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password).then(res => resolve(res), error => reject(error));
        });
    }
    setUser(user) {
        return this.user = user;
    }
    getUID() {
        return this.user.uid;
    }
    userRegistration(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password).then(res => resolve(res), error => reject(error));
        });
    }
    GoogleloginAuth() {
        return this.googleplus.login({
            'scopes': 'profile email',
            'webClientId': '206201421419-u1mp61vt8faleo46c8n4lm3hadsam9i7.apps.googleusercontent.com',
            'offline': true
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map