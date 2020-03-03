(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-footer-text-tab-footer-text-module"],{

/***/ "./src/app/tab-footer-text/tab-footer-text.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/tab-footer-text/tab-footer-text.module.ts ***!
  \***********************************************************/
/*! exports provided: TabFooterTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabFooterTextPageModule", function() { return TabFooterTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_footer_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-footer-text.page */ "./src/app/tab-footer-text/tab-footer-text.page.ts");







//all paths for tabs navigation are define here below
var routes = [
    {
        path: 'tab-footer-text',
        component: _tab_footer_text_page__WEBPACK_IMPORTED_MODULE_6__["TabFooterTextPage"],
        children: [
            {
                path: 'tab-chat',
                loadChildren: '../tab-chat/tab-chat.module#TabChatPageModule'
            },
            {
                path: 'tab-status',
                loadChildren: '../tab-status/tab-status.module#TabStatusPageModule'
            },
            {
                path: 'tab-call',
                loadChildren: '../tab-call/tab-call.module#TabCallPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tab-footer-text/tab-chat',
        pathMatch: 'full'
    }
];
var TabFooterTextPageModule = /** @class */ (function () {
    function TabFooterTextPageModule() {
    }
    TabFooterTextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_footer_text_page__WEBPACK_IMPORTED_MODULE_6__["TabFooterTextPage"]]
        })
    ], TabFooterTextPageModule);
    return TabFooterTextPageModule;
}());



/***/ }),

/***/ "./src/app/tab-footer-text/tab-footer-text.page.html":
/*!***********************************************************!*\
  !*** ./src/app/tab-footer-text/tab-footer-text.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Tab Footer Text</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- tabs footer position -->\n    <ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n            <!-- tab buttons to navigate to specified page(page links are avaliable in tab module file) -->\n            <ion-tab-button tab=\"tab-chat\">\n                <ion-label>\n                    <b>CHATS</b>\n                </ion-label>\n            </ion-tab-button>\n            <ion-tab-button tab=\"tab-status\">\n                <ion-label>\n                    <b>STATUS</b>\n                </ion-label>\n            </ion-tab-button>\n            <ion-tab-button tab=\"tab-call\">\n                <ion-label>\n                    <b>CALLS</b>\n                </ion-label>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </ion-tabs>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab-footer-text/tab-footer-text.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/tab-footer-text/tab-footer-text.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYi1mb290ZXItdGV4dC90YWItZm9vdGVyLXRleHQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tab-footer-text/tab-footer-text.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/tab-footer-text/tab-footer-text.page.ts ***!
  \*********************************************************/
/*! exports provided: TabFooterTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabFooterTextPage", function() { return TabFooterTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabFooterTextPage = /** @class */ (function () {
    function TabFooterTextPage() {
    }
    TabFooterTextPage.prototype.ngOnInit = function () {
    };
    TabFooterTextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-footer-text',
            template: __webpack_require__(/*! ./tab-footer-text.page.html */ "./src/app/tab-footer-text/tab-footer-text.page.html"),
            styles: [__webpack_require__(/*! ./tab-footer-text.page.scss */ "./src/app/tab-footer-text/tab-footer-text.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabFooterTextPage);
    return TabFooterTextPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab-footer-text-tab-footer-text-module.js.map