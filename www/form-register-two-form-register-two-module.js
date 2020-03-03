(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-register-two-form-register-two-module"],{

/***/ "./src/app/form-register-two/form-register-two.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/form-register-two/form-register-two.module.ts ***!
  \***************************************************************/
/*! exports provided: FormRegisterTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterTwoPageModule", function() { return FormRegisterTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_register_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-register-two.page */ "./src/app/form-register-two/form-register-two.page.ts");







var routes = [
    {
        path: '',
        component: _form_register_two_page__WEBPACK_IMPORTED_MODULE_6__["FormRegisterTwoPage"]
    }
];
var FormRegisterTwoPageModule = /** @class */ (function () {
    function FormRegisterTwoPageModule() {
    }
    FormRegisterTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_form_register_two_page__WEBPACK_IMPORTED_MODULE_6__["FormRegisterTwoPage"]]
        })
    ], FormRegisterTwoPageModule);
    return FormRegisterTwoPageModule;
}());



/***/ }),

/***/ "./src/app/form-register-two/form-register-two.page.html":
/*!***************************************************************!*\
  !*** ./src/app/form-register-two/form-register-two.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Register Theme Two</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-text>\n        <h2>Sign-Up</h2>\n    </ion-text>\n    <!-- form with input text and submit buttons -->\n    <form>\n        <ion-item>\n            <ion-label position=\"floating\">Full Name</ion-label>\n            <ion-input type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Username</ion-label>\n            <ion-input type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"email\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\"></ion-input>\n        </ion-item>\n        <ion-button expand=\"block\">Register</ion-button>\n        <ion-button expand=\"block\">Login</ion-button>\n        <ion-button expand=\"block\" color=\"danger\">Google</ion-button>\n        <ion-button expand=\"block\">facebook</ion-button>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/form-register-two/form-register-two.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/form-register-two/form-register-two.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-icon {\n  zoom: 4;\n  width: 100%; }\n\nion-content ion-button {\n  --color:white;\n  margin-top: 10px; }\n\nion-content ion-button:last-child {\n    --color:white;\n    --background:#3b5998; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mb3JtLXJlZ2lzdGVyLXR3by9mb3JtLXJlZ2lzdGVyLXR3by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxPQUFNO0VBQ04sV0FBVyxFQUFBOztBQUhuQjtFQU1RLGFBQVE7RUFDUixnQkFBZ0IsRUFBQTs7QUFQeEI7SUFTVSxhQUFRO0lBQ1Isb0JBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcmVnaXN0ZXItdHdvL2Zvcm0tcmVnaXN0ZXItdHdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgem9vbTo0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAtLWNvbG9yOndoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgLS1jb2xvcjp3aGl0ZTtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDojM2I1OTk4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/form-register-two/form-register-two.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-register-two/form-register-two.page.ts ***!
  \*************************************************************/
/*! exports provided: FormRegisterTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterTwoPage", function() { return FormRegisterTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormRegisterTwoPage = /** @class */ (function () {
    function FormRegisterTwoPage() {
    }
    FormRegisterTwoPage.prototype.ngOnInit = function () {
    };
    FormRegisterTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-register-two',
            template: __webpack_require__(/*! ./form-register-two.page.html */ "./src/app/form-register-two/form-register-two.page.html"),
            styles: [__webpack_require__(/*! ./form-register-two.page.scss */ "./src/app/form-register-two/form-register-two.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormRegisterTwoPage);
    return FormRegisterTwoPage;
}());



/***/ })

}]);
//# sourceMappingURL=form-register-two-form-register-two-module.js.map