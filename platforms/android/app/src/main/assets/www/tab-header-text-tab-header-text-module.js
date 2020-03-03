(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-header-text-tab-header-text-module"],{

/***/ "./src/app/tab-header-text/tab-header-text.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/tab-header-text/tab-header-text.module.ts ***!
  \***********************************************************/
/*! exports provided: TabHeaderTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderTextPageModule", function() { return TabHeaderTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_header_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-header-text.page */ "./src/app/tab-header-text/tab-header-text.page.ts");







//all paths for tabs navigation are define here below
var routes = [
    {
        path: 'tab-header-text',
        component: _tab_header_text_page__WEBPACK_IMPORTED_MODULE_6__["TabHeaderTextPage"],
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
        redirectTo: 'tab-header-text/tab-chat',
        pathMatch: 'full'
    }
];
var TabHeaderTextPageModule = /** @class */ (function () {
    function TabHeaderTextPageModule() {
    }
    TabHeaderTextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_header_text_page__WEBPACK_IMPORTED_MODULE_6__["TabHeaderTextPage"]]
        })
    ], TabHeaderTextPageModule);
    return TabHeaderTextPageModule;
}());



/***/ }),

/***/ "./src/app/tab-header-text/tab-header-text.page.html":
/*!***********************************************************!*\
  !*** ./src/app/tab-header-text/tab-header-text.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Tab Header Text</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- tabs footer position -->\n    <ion-tabs>\n        <ion-tab-bar slot=\"top\">\n            <!-- tab buttons to navigate to specified page(page links are avaliable in tab module file) -->\n            <ion-tab-button tab=\"tab-chat\">\n                <ion-label>\n                    <b>MEN</b>\n                </ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"tab-status\">\n                <ion-label>\n                    <b>WOMEN</b>\n                </ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"tab-call\">\n                <ion-label>\n                    <b>BOYS</b>\n                </ion-label>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </ion-tabs>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab-header-text/tab-header-text.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/tab-header-text/tab-header-text.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYi1oZWFkZXItdGV4dC90YWItaGVhZGVyLXRleHQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tab-header-text/tab-header-text.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/tab-header-text/tab-header-text.page.ts ***!
  \*********************************************************/
/*! exports provided: TabHeaderTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderTextPage", function() { return TabHeaderTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabHeaderTextPage = /** @class */ (function () {
    function TabHeaderTextPage() {
    }
    TabHeaderTextPage.prototype.ngOnInit = function () {
    };
    TabHeaderTextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-header-text',
            template: __webpack_require__(/*! ./tab-header-text.page.html */ "./src/app/tab-header-text/tab-header-text.page.html"),
            styles: [__webpack_require__(/*! ./tab-header-text.page.scss */ "./src/app/tab-header-text/tab-header-text.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabHeaderTextPage);
    return TabHeaderTextPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab-header-text-tab-header-text-module.js.map