(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alert-confirmation-alert-confirmation-module"],{

/***/ "./src/app/alert-confirmation/alert-confirmation.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/alert-confirmation/alert-confirmation.module.ts ***!
  \*****************************************************************/
/*! exports provided: AlertConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfirmationPageModule", function() { return AlertConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alert_confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-confirmation.page */ "./src/app/alert-confirmation/alert-confirmation.page.ts");







var routes = [
    {
        path: '',
        component: _alert_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["AlertConfirmationPage"]
    }
];
var AlertConfirmationPageModule = /** @class */ (function () {
    function AlertConfirmationPageModule() {
    }
    AlertConfirmationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alert_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["AlertConfirmationPage"]]
        })
    ], AlertConfirmationPageModule);
    return AlertConfirmationPageModule;
}());



/***/ }),

/***/ "./src/app/alert-confirmation/alert-confirmation.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/alert-confirmation/alert-confirmation.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Alert Confirmation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- presentAlertConfirm() get the property of alert which you will get from alert-confirmation.ts file -->\n  <ion-button expand=\"full\" (click)=\"presentAlertConfirm()\">\n    Show Alert\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/alert-confirmation/alert-confirmation.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/alert-confirmation/alert-confirmation.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0LWNvbmZpcm1hdGlvbi9hbGVydC1jb25maXJtYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/alert-confirmation/alert-confirmation.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/alert-confirmation/alert-confirmation.page.ts ***!
  \***************************************************************/
/*! exports provided: AlertConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfirmationPage", function() { return AlertConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 //alert controller package
var AlertConfirmationPage = /** @class */ (function () {
    //alert package declaration
    function AlertConfirmationPage(alertController) {
        this.alertController = alertController;
    }
    AlertConfirmationPage.prototype.ngOnInit = function () {
    };
    //alert controller function
    AlertConfirmationPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Message <strong>text</strong>!!!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
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
    AlertConfirmationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-confirmation',
            template: __webpack_require__(/*! ./alert-confirmation.page.html */ "./src/app/alert-confirmation/alert-confirmation.page.html"),
            styles: [__webpack_require__(/*! ./alert-confirmation.page.scss */ "./src/app/alert-confirmation/alert-confirmation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertConfirmationPage);
    return AlertConfirmationPage;
}());



/***/ })

}]);
//# sourceMappingURL=alert-confirmation-alert-confirmation-module.js.map