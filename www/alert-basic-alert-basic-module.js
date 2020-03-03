(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alert-basic-alert-basic-module"],{

/***/ "./src/app/alert-basic/alert-basic.module.ts":
/*!***************************************************!*\
  !*** ./src/app/alert-basic/alert-basic.module.ts ***!
  \***************************************************/
/*! exports provided: AlertBasicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBasicPageModule", function() { return AlertBasicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alert_basic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-basic.page */ "./src/app/alert-basic/alert-basic.page.ts");







var routes = [
    {
        path: '',
        component: _alert_basic_page__WEBPACK_IMPORTED_MODULE_6__["AlertBasicPage"]
    }
];
var AlertBasicPageModule = /** @class */ (function () {
    function AlertBasicPageModule() {
    }
    AlertBasicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alert_basic_page__WEBPACK_IMPORTED_MODULE_6__["AlertBasicPage"]]
        })
    ], AlertBasicPageModule);
    return AlertBasicPageModule;
}());



/***/ }),

/***/ "./src/app/alert-basic/alert-basic.page.html":
/*!***************************************************!*\
  !*** ./src/app/alert-basic/alert-basic.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Alert Basic</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- showAlert() get the property of alert which you will get from alert-basic.ts file -->\n  <ion-button expand=\"full\" (click)=\"showAlert()\">\n    Show Alert\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/alert-basic/alert-basic.page.scss":
/*!***************************************************!*\
  !*** ./src/app/alert-basic/alert-basic.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0LWJhc2ljL2FsZXJ0LWJhc2ljLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/alert-basic/alert-basic.page.ts":
/*!*************************************************!*\
  !*** ./src/app/alert-basic/alert-basic.page.ts ***!
  \*************************************************/
/*! exports provided: AlertBasicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBasicPage", function() { return AlertBasicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 //alert controller package
var AlertBasicPage = /** @class */ (function () {
    //alert package declaration
    function AlertBasicPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertBasicPage.prototype.ngOnInit = function () {
    };
    //alert controller function
    AlertBasicPage.prototype.showAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("OK");
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Albums',
                                subHeader: 'Image_1.jpg',
                                message: 'This is an alert message.',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertBasicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-basic',
            template: __webpack_require__(/*! ./alert-basic.page.html */ "./src/app/alert-basic/alert-basic.page.html"),
            styles: [__webpack_require__(/*! ./alert-basic.page.scss */ "./src/app/alert-basic/alert-basic.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertBasicPage);
    return AlertBasicPage;
}());



/***/ })

}]);
//# sourceMappingURL=alert-basic-alert-basic-module.js.map