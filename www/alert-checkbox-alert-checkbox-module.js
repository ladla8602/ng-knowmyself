(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alert-checkbox-alert-checkbox-module"],{

/***/ "./src/app/alert-checkbox/alert-checkbox.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/alert-checkbox/alert-checkbox.module.ts ***!
  \*********************************************************/
/*! exports provided: AlertCheckboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCheckboxPageModule", function() { return AlertCheckboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alert_checkbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-checkbox.page */ "./src/app/alert-checkbox/alert-checkbox.page.ts");







var routes = [
    {
        path: '',
        component: _alert_checkbox_page__WEBPACK_IMPORTED_MODULE_6__["AlertCheckboxPage"]
    }
];
var AlertCheckboxPageModule = /** @class */ (function () {
    function AlertCheckboxPageModule() {
    }
    AlertCheckboxPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alert_checkbox_page__WEBPACK_IMPORTED_MODULE_6__["AlertCheckboxPage"]]
        })
    ], AlertCheckboxPageModule);
    return AlertCheckboxPageModule;
}());



/***/ }),

/***/ "./src/app/alert-checkbox/alert-checkbox.page.html":
/*!*********************************************************!*\
  !*** ./src/app/alert-checkbox/alert-checkbox.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Alert Checkbox</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- presentAlertCheckbox() get the property of alert which you will get from alert-checkbox.ts file -->\n  <ion-button  expand=\"full\" (click)=\"presentAlertCheckbox()\">\n    Show Alert\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/alert-checkbox/alert-checkbox.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/alert-checkbox/alert-checkbox.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0LWNoZWNrYm94L2FsZXJ0LWNoZWNrYm94LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/alert-checkbox/alert-checkbox.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/alert-checkbox/alert-checkbox.page.ts ***!
  \*******************************************************/
/*! exports provided: AlertCheckboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCheckboxPage", function() { return AlertCheckboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 //alert controller package
var AlertCheckboxPage = /** @class */ (function () {
    //alert package declaration
    function AlertCheckboxPage(alertController) {
        this.alertController = alertController;
    }
    AlertCheckboxPage.prototype.ngOnInit = function () {
    };
    //alert controller function
    AlertCheckboxPage.prototype.presentAlertCheckbox = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Which are following your skills',
                            inputs: [
                                {
                                    name: 'checkbox1',
                                    type: 'checkbox',
                                    label: 'C++',
                                    value: 'value1',
                                    checked: true
                                },
                                {
                                    name: 'checkbox2',
                                    type: 'checkbox',
                                    label: 'Java',
                                    value: 'value2'
                                },
                                {
                                    name: 'checkbox3',
                                    type: 'checkbox',
                                    label: 'Android',
                                    value: 'value3'
                                },
                                {
                                    name: 'checkbox4',
                                    type: 'checkbox',
                                    label: 'Ionic',
                                    value: 'value4'
                                },
                                {
                                    name: 'checkbox5',
                                    type: 'checkbox',
                                    label: 'C#',
                                    value: 'value5'
                                },
                                {
                                    name: 'checkbox6',
                                    type: 'checkbox',
                                    label: 'SQL',
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
    AlertCheckboxPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-checkbox',
            template: __webpack_require__(/*! ./alert-checkbox.page.html */ "./src/app/alert-checkbox/alert-checkbox.page.html"),
            styles: [__webpack_require__(/*! ./alert-checkbox.page.scss */ "./src/app/alert-checkbox/alert-checkbox.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertCheckboxPage);
    return AlertCheckboxPage;
}());



/***/ })

}]);
//# sourceMappingURL=alert-checkbox-alert-checkbox-module.js.map