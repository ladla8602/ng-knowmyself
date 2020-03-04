(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-header-text-icon-tab-header-text-icon-module"],{

/***/ "./src/app/tab-header-text-icon/tab-header-text-icon.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tab-header-text-icon/tab-header-text-icon.module.ts ***!
  \*********************************************************************/
/*! exports provided: TabHeaderTextIconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderTextIconPageModule", function() { return TabHeaderTextIconPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_header_text_icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-header-text-icon.page */ "./src/app/tab-header-text-icon/tab-header-text-icon.page.ts");







//all paths for tabs navigation are define here below
var routes = [
    {
        path: 'tab-header-text-icon',
        component: _tab_header_text_icon_page__WEBPACK_IMPORTED_MODULE_6__["TabHeaderTextIconPage"],
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
        redirectTo: 'tab-header-text-icon/tab-chat',
        pathMatch: 'full'
    }
];
var TabHeaderTextIconPageModule = /** @class */ (function () {
    function TabHeaderTextIconPageModule() {
    }
    TabHeaderTextIconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_header_text_icon_page__WEBPACK_IMPORTED_MODULE_6__["TabHeaderTextIconPage"]]
        })
    ], TabHeaderTextIconPageModule);
    return TabHeaderTextIconPageModule;
}());



/***/ }),

/***/ "./src/app/tab-header-text-icon/tab-header-text-icon.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/tab-header-text-icon/tab-header-text-icon.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Tab Header Text Icons</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- tabs header position -->\n    <ion-tabs>\n        <ion-tab-bar slot=\"top\">\n            <!-- tab buttons to navigate to specified page(page links are avaliable in tab module file) -->\n            <ion-tab-button tab=\"tab-chat\">\n                <ion-icon name=\"chatboxes\"></ion-icon>\n                <ion-label>\n                    <b>CHATS</b>\n                </ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"tab-status\">\n                <ion-icon src=\"assets/status.svg\"></ion-icon>\n                <ion-label>\n                    <b>STATUS</b>\n                </ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"tab-call\">\n                <ion-icon name=\"call\"></ion-icon>\n                <ion-label>\n                    <b>CALLS</b>\n                </ion-label>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </ion-tabs>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab-header-text-icon/tab-header-text-icon.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/tab-header-text-icon/tab-header-text-icon.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-icon {\n  zoom: 0.9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC90YWItaGVhZGVyLXRleHQtaWNvbi90YWItaGVhZGVyLXRleHQtaWNvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxTQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWItaGVhZGVyLXRleHQtaWNvbi90YWItaGVhZGVyLXRleHQtaWNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIHpvb206MC45O1xyXG4gICAgfSBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab-header-text-icon/tab-header-text-icon.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tab-header-text-icon/tab-header-text-icon.page.ts ***!
  \*******************************************************************/
/*! exports provided: TabHeaderTextIconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderTextIconPage", function() { return TabHeaderTextIconPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabHeaderTextIconPage = /** @class */ (function () {
    function TabHeaderTextIconPage() {
    }
    TabHeaderTextIconPage.prototype.ngOnInit = function () {
    };
    TabHeaderTextIconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-header-text-icon',
            template: __webpack_require__(/*! ./tab-header-text-icon.page.html */ "./src/app/tab-header-text-icon/tab-header-text-icon.page.html"),
            styles: [__webpack_require__(/*! ./tab-header-text-icon.page.scss */ "./src/app/tab-header-text-icon/tab-header-text-icon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabHeaderTextIconPage);
    return TabHeaderTextIconPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab-header-text-icon-tab-header-text-icon-module.js.map