(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkbox-square-checkbox-square-module"],{

/***/ "./src/app/checkbox-square/checkbox-square.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/checkbox-square/checkbox-square.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckboxSquarePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxSquarePageModule", function() { return CheckboxSquarePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkbox_square_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox-square.page */ "./src/app/checkbox-square/checkbox-square.page.ts");







var routes = [
    {
        path: '',
        component: _checkbox_square_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxSquarePage"]
    }
];
var CheckboxSquarePageModule = /** @class */ (function () {
    function CheckboxSquarePageModule() {
    }
    CheckboxSquarePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkbox_square_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxSquarePage"]]
        })
    ], CheckboxSquarePageModule);
    return CheckboxSquarePageModule;
}());



/***/ }),

/***/ "./src/app/checkbox-square/checkbox-square.page.html":
/*!***********************************************************!*\
  !*** ./src/app/checkbox-square/checkbox-square.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Icon With Square </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-list no-padding>\n        <ion-item *ngFor=\"let game of items\">\n            <ion-icon slot=\"start\" name=\"flag\"></ion-icon>\n            <ion-label>\n                <h2>{{game.text}}</h2>\n                <p>Lorum Ipsum country...</p>\n            </ion-label>\n            <!-- checkbox with right position in iten -->\n            <ion-checkbox slot=\"end\"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/checkbox-square/checkbox-square.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/checkbox-square/checkbox-square.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrYm94LXNxdWFyZS9jaGVja2JveC1zcXVhcmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/checkbox-square/checkbox-square.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/checkbox-square/checkbox-square.page.ts ***!
  \*********************************************************/
/*! exports provided: CheckboxSquarePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxSquarePage", function() { return CheckboxSquarePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxSquarePage = /** @class */ (function () {
    function CheckboxSquarePage() {
        this.items = [
            { text: "America", },
            { text: "New Zeland" },
            { text: "Canada" },
            { text: "Pakistan", },
            { text: "India" },
            { text: "Australia" },
            { text: "China" },
            { text: "Brazil" },
            { text: "Nepal", },
            { text: "Korea" },
        ];
    }
    CheckboxSquarePage.prototype.ngOnInit = function () {
    };
    CheckboxSquarePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox-square',
            template: __webpack_require__(/*! ./checkbox-square.page.html */ "./src/app/checkbox-square/checkbox-square.page.html"),
            styles: [__webpack_require__(/*! ./checkbox-square.page.scss */ "./src/app/checkbox-square/checkbox-square.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxSquarePage);
    return CheckboxSquarePage;
}());



/***/ })

}]);
//# sourceMappingURL=checkbox-square-checkbox-square-module.js.map