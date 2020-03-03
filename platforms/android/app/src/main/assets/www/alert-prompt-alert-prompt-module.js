(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alert-prompt-alert-prompt-module"],{

/***/ "./src/app/alert-prompt/alert-prompt.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/alert-prompt/alert-prompt.module.ts ***!
  \*****************************************************/
/*! exports provided: AlertPromptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPromptPageModule", function() { return AlertPromptPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alert_prompt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-prompt.page */ "./src/app/alert-prompt/alert-prompt.page.ts");







var routes = [
    {
        path: '',
        component: _alert_prompt_page__WEBPACK_IMPORTED_MODULE_6__["AlertPromptPage"]
    }
];
var AlertPromptPageModule = /** @class */ (function () {
    function AlertPromptPageModule() {
    }
    AlertPromptPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alert_prompt_page__WEBPACK_IMPORTED_MODULE_6__["AlertPromptPage"]]
        })
    ], AlertPromptPageModule);
    return AlertPromptPageModule;
}());



/***/ }),

/***/ "./src/app/alert-prompt/alert-prompt.page.html":
/*!*****************************************************!*\
  !*** ./src/app/alert-prompt/alert-prompt.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Alert Prompt</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- presentAlertPrompt() get the property of alert which you will get from alert-prompt.ts file -->\n  <ion-button expand=\"full\" (click)=\"presentAlertPrompt()\">\n    Show Alert\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/alert-prompt/alert-prompt.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/alert-prompt/alert-prompt.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0LXByb21wdC9hbGVydC1wcm9tcHQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/alert-prompt/alert-prompt.page.ts":
/*!***************************************************!*\
  !*** ./src/app/alert-prompt/alert-prompt.page.ts ***!
  \***************************************************/
/*! exports provided: AlertPromptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPromptPage", function() { return AlertPromptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 //alert controller package
var AlertPromptPage = /** @class */ (function () {
    //alert package declaration
    function AlertPromptPage(alertController) {
        this.alertController = alertController;
    }
    AlertPromptPage.prototype.ngOnInit = function () {
    };
    //alert controller function
    AlertPromptPage.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Prompt!',
                            message: 'Please fill the required fields',
                            inputs: [
                                {
                                    name: 'name1',
                                    type: 'text',
                                    placeholder: 'First Name'
                                },
                                {
                                    name: 'name1',
                                    type: 'text',
                                    placeholder: 'Last Name'
                                },
                                // input date without min nor max
                                {
                                    name: 'name5',
                                    type: 'date'
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
    AlertPromptPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-prompt',
            template: __webpack_require__(/*! ./alert-prompt.page.html */ "./src/app/alert-prompt/alert-prompt.page.html"),
            styles: [__webpack_require__(/*! ./alert-prompt.page.scss */ "./src/app/alert-prompt/alert-prompt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertPromptPage);
    return AlertPromptPage;
}());



/***/ })

}]);
//# sourceMappingURL=alert-prompt-alert-prompt-module.js.map