(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-login-two-form-login-two-module"],{

/***/ "./src/app/form-login-two/form-login-two.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/form-login-two/form-login-two.module.ts ***!
  \*********************************************************/
/*! exports provided: FormLoginTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginTwoPageModule", function() { return FormLoginTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_login_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-login-two.page */ "./src/app/form-login-two/form-login-two.page.ts");







var routes = [
    {
        path: '',
        component: _form_login_two_page__WEBPACK_IMPORTED_MODULE_6__["FormLoginTwoPage"]
    }
];
var FormLoginTwoPageModule = /** @class */ (function () {
    function FormLoginTwoPageModule() {
    }
    FormLoginTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_form_login_two_page__WEBPACK_IMPORTED_MODULE_6__["FormLoginTwoPage"]]
        })
    ], FormLoginTwoPageModule);
    return FormLoginTwoPageModule;
}());



/***/ }),

/***/ "./src/app/form-login-two/form-login-two.page.html":
/*!*********************************************************!*\
  !*** ./src/app/form-login-two/form-login-two.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Login Theme Two</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-text>\n        <h2>Log-In</h2>\n    </ion-text>\n    <!-- form with input text and submit buttons with floating label -->\n    <form>\n        <ion-item>\n            <ion-label position=\"floating\">Username</ion-label>\n            <ion-input type=\"email\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"pssword\"></ion-input>\n        </ion-item>\n        <ion-button expand=\"block\">Login</ion-button>\n        <ion-button expand=\"block\">Register</ion-button>\n        <ion-button expand=\"block\" color=\"danger\">Google</ion-button>\n        <ion-button expand=\"block\">facebook</ion-button>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/form-login-two/form-login-two.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/form-login-two/form-login-two.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-button {\n  --color:white;\n  margin-top: 15px; }\n  ion-content ion-button:last-child {\n    --color:white;\n    --background:#3b5998; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mb3JtLWxvZ2luLXR3by9mb3JtLWxvZ2luLXR3by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxhQUFRO0VBQ1IsZ0JBQWdCLEVBQUE7RUFIeEI7SUFLWSxhQUFRO0lBQ1Isb0JBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbG9naW4tdHdvL2Zvcm0tbG9naW4tdHdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAtLWNvbG9yOndoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAtLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IzNiNTk5ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/form-login-two/form-login-two.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-login-two/form-login-two.page.ts ***!
  \*******************************************************/
/*! exports provided: FormLoginTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginTwoPage", function() { return FormLoginTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormLoginTwoPage = /** @class */ (function () {
    function FormLoginTwoPage() {
    }
    FormLoginTwoPage.prototype.ngOnInit = function () { };
    FormLoginTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-login-two',
            template: __webpack_require__(/*! ./form-login-two.page.html */ "./src/app/form-login-two/form-login-two.page.html"),
            styles: [__webpack_require__(/*! ./form-login-two.page.scss */ "./src/app/form-login-two/form-login-two.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormLoginTwoPage);
    return FormLoginTwoPage;
}());



/***/ })

}]);
//# sourceMappingURL=form-login-two-form-login-two-module.js.map