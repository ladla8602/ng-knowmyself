(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["radio-simple-left-radio-simple-left-module"],{

/***/ "./src/app/radio-simple-left/radio-simple-left.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/radio-simple-left/radio-simple-left.module.ts ***!
  \***************************************************************/
/*! exports provided: RadioSimpleLeftPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioSimpleLeftPageModule", function() { return RadioSimpleLeftPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _radio_simple_left_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-simple-left.page */ "./src/app/radio-simple-left/radio-simple-left.page.ts");







var routes = [
    {
        path: '',
        component: _radio_simple_left_page__WEBPACK_IMPORTED_MODULE_6__["RadioSimpleLeftPage"]
    }
];
var RadioSimpleLeftPageModule = /** @class */ (function () {
    function RadioSimpleLeftPageModule() {
    }
    RadioSimpleLeftPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_radio_simple_left_page__WEBPACK_IMPORTED_MODULE_6__["RadioSimpleLeftPage"]]
        })
    ], RadioSimpleLeftPageModule);
    return RadioSimpleLeftPageModule;
}());



/***/ }),

/***/ "./src/app/radio-simple-left/radio-simple-left.page.html":
/*!***************************************************************!*\
  !*** ./src/app/radio-simple-left/radio-simple-left.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Radio Simple Left</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <!-- all iterated are in radio group so only one item is choosen at one time -->\n    <ion-list radio-group>\n        <ion-radio-group>\n            <ion-item *ngFor=\"let item of listItem\">\n                <ion-label>{{ item }}</ion-label>\n                <!-- for radio button with left position -->\n                <ion-radio slot=\"start\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/radio-simple-left/radio-simple-left.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/radio-simple-left/radio-simple-left.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhZGlvLXNpbXBsZS1sZWZ0L3JhZGlvLXNpbXBsZS1sZWZ0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/radio-simple-left/radio-simple-left.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/radio-simple-left/radio-simple-left.page.ts ***!
  \*************************************************************/
/*! exports provided: RadioSimpleLeftPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioSimpleLeftPage", function() { return RadioSimpleLeftPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioSimpleLeftPage = /** @class */ (function () {
    function RadioSimpleLeftPage() {
        this.listItem = [
            "Emma Watson",
            "Alina Jason",
            "Leta James",
            "Maria Amber",
            "Amber jeff",
            "Leta James",
            "Selina Pearls",
            "Cardi Gelly",
            "Amber jeff",
            "Cardi Gelly",
            "Emma Watson",
            "Alina Jason",
            "Leta James",
            "Cardi Gelly",
        ];
    }
    RadioSimpleLeftPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-simple-left',
            template: __webpack_require__(/*! ./radio-simple-left.page.html */ "./src/app/radio-simple-left/radio-simple-left.page.html"),
            styles: [__webpack_require__(/*! ./radio-simple-left.page.scss */ "./src/app/radio-simple-left/radio-simple-left.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioSimpleLeftPage);
    return RadioSimpleLeftPage;
}());



/***/ })

}]);
//# sourceMappingURL=radio-simple-left-radio-simple-left-module.js.map