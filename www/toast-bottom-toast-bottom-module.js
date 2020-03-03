(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toast-bottom-toast-bottom-module"],{

/***/ "./src/app/toast-bottom/toast-bottom.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/toast-bottom/toast-bottom.module.ts ***!
  \*****************************************************/
/*! exports provided: ToastBottomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastBottomPageModule", function() { return ToastBottomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _toast_bottom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toast-bottom.page */ "./src/app/toast-bottom/toast-bottom.page.ts");







var routes = [
    {
        path: '',
        component: _toast_bottom_page__WEBPACK_IMPORTED_MODULE_6__["ToastBottomPage"]
    }
];
var ToastBottomPageModule = /** @class */ (function () {
    function ToastBottomPageModule() {
    }
    ToastBottomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_toast_bottom_page__WEBPACK_IMPORTED_MODULE_6__["ToastBottomPage"]]
        })
    ], ToastBottomPageModule);
    return ToastBottomPageModule;
}());



/***/ }),

/***/ "./src/app/toast-bottom/toast-bottom.page.html":
/*!*****************************************************!*\
  !*** ./src/app/toast-bottom/toast-bottom.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            Toast Error Message\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-fab vertical=\"top\" horizontal=\"end\">\n        <ion-fab-button>\n            <ion-icon name=\"person-add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-item>\n        <ion-label position=\"floating\">\n            <ion-icon name=\"person\"></ion-icon>First Name\n        </ion-label>\n        <ion-textarea></ion-textarea>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">\n            <ion-icon name=\"person\"></ion-icon>Last Name\n        </ion-label>\n        <ion-textarea></ion-textarea>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">\n            <ion-icon name=\"mail\"></ion-icon>Email ID\n        </ion-label>\n        <ion-textarea></ion-textarea>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">\n            <ion-icon name=\"person\"></ion-icon>Username\n        </ion-label>\n        <ion-textarea></ion-textarea>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">\n            <ion-icon name=\"lock\"></ion-icon>Password\n        </ion-label>\n        <ion-textarea></ion-textarea>\n    </ion-item>\n\n    <ion-row>\n        <ion-col *ngFor=\"let p of images\">\n            <img src=\"{{p.img}}\">\n        </ion-col>\n    </ion-row>\n    <!-- showToastWithOptions() get the property of action sheet which you will get from toast-bottom.ts file -->\n    <ion-button expand=\"full\" (click)=\"showToastWithOptions()\">Submit</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/toast-bottom/toast-bottom.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/toast-bottom/toast-bottom.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-row {\n  margin-top: 10px; }\n  ion-content ion-row ion-col {\n    text-align: center; }\n  ion-content ion-row ion-col img {\n      height: 40px;\n      width: 40px;\n      border-radius: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC90b2FzdC1ib3R0b20vdG9hc3QtYm90dG9tLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFnQixFQUFBO0VBRnhCO0lBSVksa0JBQWtCLEVBQUE7RUFKOUI7TUFNZ0IsWUFBWTtNQUNaLFdBQVc7TUFDWCxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RvYXN0LWJvdHRvbS90b2FzdC1ib3R0b20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tcm93e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7IFxyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/toast-bottom/toast-bottom.page.ts":
/*!***************************************************!*\
  !*** ./src/app/toast-bottom/toast-bottom.page.ts ***!
  \***************************************************/
/*! exports provided: ToastBottomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastBottomPage", function() { return ToastBottomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 //toast controller package
var ToastBottomPage = /** @class */ (function () {
    //action sheet package declaration
    function ToastBottomPage(toast) {
        this.toast = toast;
        this.images = [
            { text: "Deadpool", email: "hannanfarooq@gmail.com ", img: "assets/images/facebook-logo.png", badgeValue: "10" },
            { text: "Batman", email: "hannanfarooq@gmail.com ", img: "assets/images/gmail-logo.png", badgeValue: "20" },
            { text: "Spiderman", email: "hannanfarooq@gmail.com ", img: "assets/images/twitter-logo.png", badgeValue: "5" },
        ];
    }
    ToastBottomPage.prototype.ngOnInit = function () {
    };
    ToastBottomPage.prototype.showToastWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            cssClass: 'toastTag',
                            color: "danger",
                            showCloseButton: true,
                            position: 'bottom',
                            message: "Error!!! Please enter correct crdentials",
                            closeButtonText: '| Done',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastBottomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toast-bottom',
            template: __webpack_require__(/*! ./toast-bottom.page.html */ "./src/app/toast-bottom/toast-bottom.page.html"),
            styles: [__webpack_require__(/*! ./toast-bottom.page.scss */ "./src/app/toast-bottom/toast-bottom.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ToastBottomPage);
    return ToastBottomPage;
}());



/***/ })

}]);
//# sourceMappingURL=toast-bottom-toast-bottom-module.js.map