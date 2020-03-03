(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["button-basic-one-button-basic-one-module"],{

/***/ "./src/app/button-basic-one/button-basic-one.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/button-basic-one/button-basic-one.module.ts ***!
  \*************************************************************/
/*! exports provided: ButtonBasicOnePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBasicOnePageModule", function() { return ButtonBasicOnePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _button_basic_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-basic-one.page */ "./src/app/button-basic-one/button-basic-one.page.ts");







var routes = [
    {
        path: '',
        component: _button_basic_one_page__WEBPACK_IMPORTED_MODULE_6__["ButtonBasicOnePage"]
    }
];
var ButtonBasicOnePageModule = /** @class */ (function () {
    function ButtonBasicOnePageModule() {
    }
    ButtonBasicOnePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_button_basic_one_page__WEBPACK_IMPORTED_MODULE_6__["ButtonBasicOnePage"]]
        })
    ], ButtonBasicOnePageModule);
    return ButtonBasicOnePageModule;
}());



/***/ }),

/***/ "./src/app/button-basic-one/button-basic-one.page.html":
/*!*************************************************************!*\
  !*** ./src/app/button-basic-one/button-basic-one.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Basic Expanded Round Button</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-text>\n        <h2>Basic Buttons</h2>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button color=\"primary\">Primary</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button color=\"secondary\">Secondary</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button color=\"tertiary\">Tertiary</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-text>\n        <h2>Expand Buttons</h2>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"full\" color=\"success\">Success Full</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"full\" color=\"warning\">Warning</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" color=\"danger\">Danger Block</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-text>\n        <h2>Round Buttons One</h2>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button shape=\"round\" color=\"light\">Light</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button shape=\"round\" color=\"medium\">Medium</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button shape=\"round\">Dark</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/button-basic-one/button-basic-one.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/button-basic-one/button-basic-one.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-col {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9idXR0b24tYmFzaWMtb25lL2J1dHRvbi1iYXNpYy1vbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9idXR0b24tYmFzaWMtb25lL2J1dHRvbi1iYXNpYy1vbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgaW9uLWNvbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/button-basic-one/button-basic-one.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/button-basic-one/button-basic-one.page.ts ***!
  \***********************************************************/
/*! exports provided: ButtonBasicOnePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBasicOnePage", function() { return ButtonBasicOnePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonBasicOnePage = /** @class */ (function () {
    function ButtonBasicOnePage() {
    }
    ButtonBasicOnePage.prototype.ngOnInit = function () {
    };
    ButtonBasicOnePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-basic-one',
            template: __webpack_require__(/*! ./button-basic-one.page.html */ "./src/app/button-basic-one/button-basic-one.page.html"),
            styles: [__webpack_require__(/*! ./button-basic-one.page.scss */ "./src/app/button-basic-one/button-basic-one.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonBasicOnePage);
    return ButtonBasicOnePage;
}());



/***/ })

}]);
//# sourceMappingURL=button-basic-one-button-basic-one-module.js.map