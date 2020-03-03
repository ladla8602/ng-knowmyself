(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alert-radio-alert-radio-module"],{

/***/ "./src/app/alert-radio/alert-radio.module.ts":
/*!***************************************************!*\
  !*** ./src/app/alert-radio/alert-radio.module.ts ***!
  \***************************************************/
/*! exports provided: AlertRadioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertRadioPageModule", function() { return AlertRadioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alert_radio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-radio.page */ "./src/app/alert-radio/alert-radio.page.ts");







var routes = [
    {
        path: '',
        component: _alert_radio_page__WEBPACK_IMPORTED_MODULE_6__["AlertRadioPage"]
    }
];
var AlertRadioPageModule = /** @class */ (function () {
    function AlertRadioPageModule() {
    }
    AlertRadioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alert_radio_page__WEBPACK_IMPORTED_MODULE_6__["AlertRadioPage"]]
        })
    ], AlertRadioPageModule);
    return AlertRadioPageModule;
}());



/***/ }),

/***/ "./src/app/alert-radio/alert-radio.page.html":
/*!***************************************************!*\
  !*** ./src/app/alert-radio/alert-radio.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Alert Radio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- presentAlertRadio() get the property of alert which you will get from alert-radio.ts file -->\n  <ion-button expand=\"full\" (click)=\"presentAlertRadio()\">\n    Show Alert\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/alert-radio/alert-radio.page.scss":
/*!***************************************************!*\
  !*** ./src/app/alert-radio/alert-radio.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0LXJhZGlvL2FsZXJ0LXJhZGlvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/alert-radio/alert-radio.page.ts":
/*!*************************************************!*\
  !*** ./src/app/alert-radio/alert-radio.page.ts ***!
  \*************************************************/
/*! exports provided: AlertRadioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertRadioPage", function() { return AlertRadioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 //alert controller package
var AlertRadioPage = /** @class */ (function () {
    //alert package declaration
    function AlertRadioPage(alertController) {
        this.alertController = alertController;
    }
    AlertRadioPage.prototype.ngOnInit = function () {
    };
    //alert controller function
    AlertRadioPage.prototype.presentAlertRadio = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Choose the your city',
                            inputs: [
                                {
                                    name: 'radio1',
                                    type: 'radio',
                                    label: 'Chicago',
                                    value: 'value1',
                                    checked: true
                                },
                                {
                                    name: 'radio2',
                                    type: 'radio',
                                    label: 'London',
                                    value: 'value2'
                                },
                                {
                                    name: 'radio3',
                                    type: 'radio',
                                    label: 'New York',
                                    value: 'value3'
                                },
                                {
                                    name: 'radio4',
                                    type: 'radio',
                                    label: 'Riyad',
                                    value: 'value4'
                                },
                                {
                                    name: 'radio5',
                                    type: 'radio',
                                    label: 'Changcha',
                                    value: 'value5'
                                },
                                {
                                    name: 'radio6',
                                    type: 'radio',
                                    label: 'Sialkot',
                                    value: 'value6'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirm Ok');
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
    AlertRadioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-radio',
            template: __webpack_require__(/*! ./alert-radio.page.html */ "./src/app/alert-radio/alert-radio.page.html"),
            styles: [__webpack_require__(/*! ./alert-radio.page.scss */ "./src/app/alert-radio/alert-radio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertRadioPage);
    return AlertRadioPage;
}());



/***/ })

}]);
//# sourceMappingURL=alert-radio-alert-radio-module.js.map