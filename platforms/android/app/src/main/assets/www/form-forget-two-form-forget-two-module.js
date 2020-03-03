(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-forget-two-form-forget-two-module"],{

/***/ "./src/app/form-forget-two/form-forget-two.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/form-forget-two/form-forget-two.module.ts ***!
  \***********************************************************/
/*! exports provided: FormForgetTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormForgetTwoPageModule", function() { return FormForgetTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_forget_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-forget-two.page */ "./src/app/form-forget-two/form-forget-two.page.ts");







var routes = [
    {
        path: '',
        component: _form_forget_two_page__WEBPACK_IMPORTED_MODULE_6__["FormForgetTwoPage"]
    }
];
var FormForgetTwoPageModule = /** @class */ (function () {
    function FormForgetTwoPageModule() {
    }
    FormForgetTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_form_forget_two_page__WEBPACK_IMPORTED_MODULE_6__["FormForgetTwoPage"]]
        })
    ], FormForgetTwoPageModule);
    return FormForgetTwoPageModule;
}());



/***/ }),

/***/ "./src/app/form-forget-two/form-forget-two.page.html":
/*!***********************************************************!*\
  !*** ./src/app/form-forget-two/form-forget-two.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Forget Theme Two</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-text>\n        <h2>Forget Password</h2>\n    </ion-text>\n    <!-- form with input text and submit buttons with floating label -->\n    <form>\n        <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"email\"></ion-input>\n        </ion-item>\n        <ion-button expand=\"block\">Login</ion-button>\n        <ion-button expand=\"block\" color=\"danger\">Google</ion-button>\n        <ion-button expand=\"block\">Facebook</ion-button>\n    </form>\n  </ion-content>"

/***/ }),

/***/ "./src/app/form-forget-two/form-forget-two.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/form-forget-two/form-forget-two.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-button {\n  margin-top: 15px; }\n\nion-content ion-button {\n  --color:white;\n  margin-top: 10px; }\n\nion-content ion-button:last-child {\n    --color:white;\n    --background:#3b5998; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mb3JtLWZvcmdldC10d28vZm9ybS1mb3JnZXQtdHdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFnQixFQUFBOztBQUZ4QjtFQUtRLGFBQVE7RUFDUixnQkFBZ0IsRUFBQTs7QUFOeEI7SUFRVSxhQUFRO0lBQ1Isb0JBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZm9yZ2V0LXR3by9mb3JtLWZvcmdldC10d28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIC0tY29sb3I6d2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAtLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiMzYjU5OTg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/form-forget-two/form-forget-two.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/form-forget-two/form-forget-two.page.ts ***!
  \*********************************************************/
/*! exports provided: FormForgetTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormForgetTwoPage", function() { return FormForgetTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormForgetTwoPage = /** @class */ (function () {
    function FormForgetTwoPage() {
    }
    FormForgetTwoPage.prototype.ngOnInit = function () {
    };
    FormForgetTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-forget-two',
            template: __webpack_require__(/*! ./form-forget-two.page.html */ "./src/app/form-forget-two/form-forget-two.page.html"),
            styles: [__webpack_require__(/*! ./form-forget-two.page.scss */ "./src/app/form-forget-two/form-forget-two.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormForgetTwoPage);
    return FormForgetTwoPage;
}());



/***/ })

}]);
//# sourceMappingURL=form-forget-two-form-forget-two-module.js.map