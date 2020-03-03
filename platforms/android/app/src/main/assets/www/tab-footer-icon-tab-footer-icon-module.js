(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-footer-icon-tab-footer-icon-module"],{

/***/ "./src/app/tab-footer-icon/tab-footer-icon.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/tab-footer-icon/tab-footer-icon.module.ts ***!
  \***********************************************************/
/*! exports provided: TabFooterIconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabFooterIconPageModule", function() { return TabFooterIconPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_footer_icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-footer-icon.page */ "./src/app/tab-footer-icon/tab-footer-icon.page.ts");







//all paths for tabs navigation are define here below
var routes = [
    {
        path: 'tab-footer-icon',
        component: _tab_footer_icon_page__WEBPACK_IMPORTED_MODULE_6__["TabFooterIconPage"],
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
        redirectTo: 'tab-footer-icon/tab-chat',
        pathMatch: 'full'
    }
];
var TabFooterIconPageModule = /** @class */ (function () {
    function TabFooterIconPageModule() {
    }
    TabFooterIconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_footer_icon_page__WEBPACK_IMPORTED_MODULE_6__["TabFooterIconPage"]]
        })
    ], TabFooterIconPageModule);
    return TabFooterIconPageModule;
}());



/***/ }),

/***/ "./src/app/tab-footer-icon/tab-footer-icon.page.html":
/*!***********************************************************!*\
  !*** ./src/app/tab-footer-icon/tab-footer-icon.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Tab Footer Icon</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- tabs footer position -->\n    <ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n            <!-- tab buttons to navigate to specified page(page links are avaliable in tab module file) -->\n            <ion-tab-button tab=\"tab-chat\">\n                <ion-icon name=\"chatboxes\"></ion-icon>\n            </ion-tab-button>\n            <ion-tab-button tab=\"tab-status\">\n                <ion-icon src=\"assets/status.svg\"></ion-icon>\n            </ion-tab-button>\n            <ion-tab-button tab=\"tab-call\">\n                <ion-icon name=\"call\"></ion-icon>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </ion-tabs>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab-footer-icon/tab-footer-icon.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/tab-footer-icon/tab-footer-icon.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-icon {\n  zoom: 0.9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC90YWItZm9vdGVyLWljb24vdGFiLWZvb3Rlci1pY29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFNBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYi1mb290ZXItaWNvbi90YWItZm9vdGVyLWljb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICB6b29tOjAuOTtcclxuICAgIH0gXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab-footer-icon/tab-footer-icon.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/tab-footer-icon/tab-footer-icon.page.ts ***!
  \*********************************************************/
/*! exports provided: TabFooterIconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabFooterIconPage", function() { return TabFooterIconPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabFooterIconPage = /** @class */ (function () {
    function TabFooterIconPage() {
    }
    TabFooterIconPage.prototype.ngOnInit = function () {
    };
    TabFooterIconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-footer-icon',
            template: __webpack_require__(/*! ./tab-footer-icon.page.html */ "./src/app/tab-footer-icon/tab-footer-icon.page.html"),
            styles: [__webpack_require__(/*! ./tab-footer-icon.page.scss */ "./src/app/tab-footer-icon/tab-footer-icon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabFooterIconPage);
    return TabFooterIconPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab-footer-icon-tab-footer-icon-module.js.map