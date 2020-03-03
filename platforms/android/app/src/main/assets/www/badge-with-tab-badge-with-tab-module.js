(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["badge-with-tab-badge-with-tab-module"],{

/***/ "./src/app/badge-with-tab/badge-with-tab.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/badge-with-tab/badge-with-tab.module.ts ***!
  \*********************************************************/
/*! exports provided: BadgeWithTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeWithTabPageModule", function() { return BadgeWithTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _badge_with_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badge-with-tab.page */ "./src/app/badge-with-tab/badge-with-tab.page.ts");







var routes = [
    {
        path: 'badge-with-tab',
        component: _badge_with_tab_page__WEBPACK_IMPORTED_MODULE_6__["BadgeWithTabPage"],
        children: [
            { path: 'badge-movie',
                loadChildren: '../badge-movie/badge-movie.module#BadgeMoviePageModule'
            },
            { path: 'badge-card',
                loadChildren: '../badge-card/badge-card.module#BadgeCardPageModule'
            },
            { path: 'badge-setting',
                loadChildren: '../badge-setting/badge-setting.module#BadgeSettingPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'badge-with-tab/badge-setting',
        pathMatch: 'full'
    }
];
var BadgeWithTabPageModule = /** @class */ (function () {
    function BadgeWithTabPageModule() {
    }
    BadgeWithTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_badge_with_tab_page__WEBPACK_IMPORTED_MODULE_6__["BadgeWithTabPage"]]
        })
    ], BadgeWithTabPageModule);
    return BadgeWithTabPageModule;
}());



/***/ }),

/***/ "./src/app/badge-with-tab/badge-with-tab.page.html":
/*!*********************************************************!*\
  !*** ./src/app/badge-with-tab/badge-with-tab.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Badge With Tabs\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-tabs>\n    <!-- Tab bar -->\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"badge-setting\">\n        <ion-icon name=\"settings\"></ion-icon>\n        <ion-label>\n          <b>Setting</b>\n        </ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"badge-movie\">\n        <ion-icon name=\"videocam\"></ion-icon>\n        <!-- simple badge on top of label used in tabs -->\n        <ion-badge>6</ion-badge>\n        <ion-label>\n          <b>Movies</b>\n        </ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"badge-card\">\n        <ion-icon name=\"card\"></ion-icon>\n        <!-- simple badge on top of label used in tabs -->\n        <ion-badge>10</ion-badge>\n        <ion-label>\n          <b>Cards</b>\n        </ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>"

/***/ }),

/***/ "./src/app/badge-with-tab/badge-with-tab.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/badge-with-tab/badge-with-tab.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhZGdlLXdpdGgtdGFiL2JhZGdlLXdpdGgtdGFiLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/badge-with-tab/badge-with-tab.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/badge-with-tab/badge-with-tab.page.ts ***!
  \*******************************************************/
/*! exports provided: BadgeWithTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeWithTabPage", function() { return BadgeWithTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgeWithTabPage = /** @class */ (function () {
    function BadgeWithTabPage() {
    }
    BadgeWithTabPage.prototype.ngOnInit = function () {
    };
    BadgeWithTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badge-with-tab',
            template: __webpack_require__(/*! ./badge-with-tab.page.html */ "./src/app/badge-with-tab/badge-with-tab.page.html"),
            styles: [__webpack_require__(/*! ./badge-with-tab.page.scss */ "./src/app/badge-with-tab/badge-with-tab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeWithTabPage);
    return BadgeWithTabPage;
}());



/***/ })

}]);
//# sourceMappingURL=badge-with-tab-badge-with-tab-module.js.map