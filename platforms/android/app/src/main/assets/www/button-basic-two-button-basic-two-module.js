(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["button-basic-two-button-basic-two-module"],{

/***/ "./src/app/button-basic-two/button-basic-two.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/button-basic-two/button-basic-two.module.ts ***!
  \*************************************************************/
/*! exports provided: ButtonBasicTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBasicTwoPageModule", function() { return ButtonBasicTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _button_basic_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-basic-two.page */ "./src/app/button-basic-two/button-basic-two.page.ts");







var routes = [
    {
        path: '',
        component: _button_basic_two_page__WEBPACK_IMPORTED_MODULE_6__["ButtonBasicTwoPage"]
    }
];
var ButtonBasicTwoPageModule = /** @class */ (function () {
    function ButtonBasicTwoPageModule() {
    }
    ButtonBasicTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_button_basic_two_page__WEBPACK_IMPORTED_MODULE_6__["ButtonBasicTwoPage"]]
        })
    ], ButtonBasicTwoPageModule);
    return ButtonBasicTwoPageModule;
}());



/***/ }),

/***/ "./src/app/button-basic-two/button-basic-two.page.html":
/*!*************************************************************!*\
  !*** ./src/app/button-basic-two/button-basic-two.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Basic Buttons Two</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-text>\n        <h2>Fill Button</h2>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"full\" fill=\"outline\">Outline + Full</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" fill=\"outline\">Outline + Block</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button shape=\"round\" fill=\"outline\">Outline + Round</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-text>\n        <h2>Icon Button</h2>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"star\" style=\"margin-left: 20px;\"></ion-icon>\n        Left Icon\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button>\n        Right Icon\n        <ion-icon slot=\"end\" name=\"star\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-text>\n        <h2>Size Button</h2>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button size=\"large\">Large</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button>Default</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button size=\"small\">Small</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/button-basic-two/button-basic-two.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/button-basic-two/button-basic-two.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-col {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9idXR0b24tYmFzaWMtdHdvL2J1dHRvbi1iYXNpYy10d28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9idXR0b24tYmFzaWMtdHdvL2J1dHRvbi1iYXNpYy10d28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgaW9uLWNvbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/button-basic-two/button-basic-two.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/button-basic-two/button-basic-two.page.ts ***!
  \***********************************************************/
/*! exports provided: ButtonBasicTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBasicTwoPage", function() { return ButtonBasicTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonBasicTwoPage = /** @class */ (function () {
    function ButtonBasicTwoPage() {
    }
    ButtonBasicTwoPage.prototype.ngOnInit = function () {
    };
    ButtonBasicTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-basic-two',
            template: __webpack_require__(/*! ./button-basic-two.page.html */ "./src/app/button-basic-two/button-basic-two.page.html"),
            styles: [__webpack_require__(/*! ./button-basic-two.page.scss */ "./src/app/button-basic-two/button-basic-two.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonBasicTwoPage);
    return ButtonBasicTwoPage;
}());



/***/ })

}]);
//# sourceMappingURL=button-basic-two-button-basic-two-module.js.map