(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-login-three-form-login-three-module"],{

/***/ "./src/app/form-login-three/form-login-three.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-login-three/form-login-three.module.ts ***!
  \*************************************************************/
/*! exports provided: FormLoginThreePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginThreePageModule", function() { return FormLoginThreePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_login_three_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-login-three.page */ "./src/app/form-login-three/form-login-three.page.ts");







var routes = [
    {
        path: '',
        component: _form_login_three_page__WEBPACK_IMPORTED_MODULE_6__["FormLoginThreePage"]
    }
];
var FormLoginThreePageModule = /** @class */ (function () {
    function FormLoginThreePageModule() {
    }
    FormLoginThreePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_form_login_three_page__WEBPACK_IMPORTED_MODULE_6__["FormLoginThreePage"]]
        })
    ], FormLoginThreePageModule);
    return FormLoginThreePageModule;
}());



/***/ }),

/***/ "./src/app/form-login-three/form-login-three.page.html":
/*!*************************************************************!*\
  !*** ./src/app/form-login-three/form-login-three.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                    <ion-icon name=\"arrow-back\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <ion-title>Login Theme Three</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      \n      <ion-content padding>\n        <ion-img src=\"assets/images/icons_stripe.svg\"></ion-img>\n        <!-- form with input text and submit buttons -->\n        <form>\n            <ion-item>\n                <ion-input type=\"text\" placeholder=\"Email or Username\" name=\"email\" required>\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type=\"password\" placeholder=\"Password\" name=\"password\" required>\n                </ion-input>\n            </ion-item>\n        </form>\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-button expand=\"block\" type=\"submit\">Login</ion-button>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-button expand=\"block\" fill=\"clear\">\n                    <b>I've Forgotten My Password?</b>\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-button fill=\"outline\" expand=\"block\" type=\"submit\">Register</ion-button>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-button expand=\"block\" color=\"danger\" type=\"submit\">Login with\n                    <ion-icon name=\"logo-google\"></ion-icon>\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-button expand=\"block\" type=\"submit\">Login with\n                    <ion-icon name=\"logo-facebook\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n      </ion-content>"

/***/ }),

/***/ "./src/app/form-login-three/form-login-three.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/form-login-three/form-login-three.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-img {\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n  opacity: 0.5; }\n\nion-content ion-row ion-col:last-child ion-button {\n  --color:white;\n  --background:#3b5998; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mb3JtLWxvZ2luLXRocmVlL2Zvcm0tbG9naW4tdGhyZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUxwQjtFQVdZLGFBQVE7RUFDUixvQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9ybS1sb2dpbi10aHJlZS9mb3JtLWxvZ2luLXRocmVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaW9uLWltZ3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICAgIGlvbi1yb3d7XHJcbiAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAtLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IzNiNTk5ODtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/form-login-three/form-login-three.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/form-login-three/form-login-three.page.ts ***!
  \***********************************************************/
/*! exports provided: FormLoginThreePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginThreePage", function() { return FormLoginThreePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormLoginThreePage = /** @class */ (function () {
    function FormLoginThreePage() {
    }
    FormLoginThreePage.prototype.ngOnInit = function () {
    };
    FormLoginThreePage.prototype.login = function () {
    };
    FormLoginThreePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-login-three',
            template: __webpack_require__(/*! ./form-login-three.page.html */ "./src/app/form-login-three/form-login-three.page.html"),
            styles: [__webpack_require__(/*! ./form-login-three.page.scss */ "./src/app/form-login-three/form-login-three.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormLoginThreePage);
    return FormLoginThreePage;
}());



/***/ })

}]);
//# sourceMappingURL=form-login-three-form-login-three-module.js.map