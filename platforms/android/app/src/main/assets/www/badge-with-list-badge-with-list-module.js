(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["badge-with-list-badge-with-list-module"],{

/***/ "./src/app/badge-with-list/badge-with-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/badge-with-list/badge-with-list.module.ts ***!
  \***********************************************************/
/*! exports provided: BadgeWithListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeWithListPageModule", function() { return BadgeWithListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _badge_with_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badge-with-list.page */ "./src/app/badge-with-list/badge-with-list.page.ts");







var routes = [
    {
        path: '',
        component: _badge_with_list_page__WEBPACK_IMPORTED_MODULE_6__["BadgeWithListPage"]
    }
];
var BadgeWithListPageModule = /** @class */ (function () {
    function BadgeWithListPageModule() {
    }
    BadgeWithListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_badge_with_list_page__WEBPACK_IMPORTED_MODULE_6__["BadgeWithListPage"]]
        })
    ], BadgeWithListPageModule);
    return BadgeWithListPageModule;
}());



/***/ }),

/***/ "./src/app/badge-with-list/badge-with-list.page.html":
/*!***********************************************************!*\
  !*** ./src/app/badge-with-list/badge-with-list.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Badge With List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-img src=\"assets/images/fashion-types.jpeg\"></ion-img>\n    <ion-card-header>\n      <ion-card-title>Fashion Accessories</ion-card-title>\n    </ion-card-header>\n    <ion-list>\n      <ion-item *ngFor=\"let p of items\" lines=\"full\">\n        <ion-text>\n          {{p.text}}\n        </ion-text>\n        <!-- badge with right position with different badge values -->\n        <ion-badge slot=\"end\">{{p.badgeValue}}</ion-badge>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/badge-with-list/badge-with-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/badge-with-list/badge-with-list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card {\n  margin: 0; }\n  ion-content ion-card ion-item:last-child {\n    --border-width: 0 0 0 0; }\n  ion-content ion-card ion-card-header {\n    padding-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9iYWRnZS13aXRoLWxpc3QvYmFkZ2Utd2l0aC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFNBQVMsRUFBQTtFQUZqQjtJQUlZLHVCQUFlLEVBQUE7RUFKM0I7SUFPWSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JhZGdlLXdpdGgtbGlzdC9iYWRnZS13aXRoLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGlvbi1pdGVtOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/badge-with-list/badge-with-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/badge-with-list/badge-with-list.page.ts ***!
  \*********************************************************/
/*! exports provided: BadgeWithListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeWithListPage", function() { return BadgeWithListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgeWithListPage = /** @class */ (function () {
    function BadgeWithListPage() {
        this.items = [
            { text: "Clothes", badgeValue: "10" },
            { text: "Camera", badgeValue: "25" },
            { text: "Shoes", badgeValue: "20" },
            { text: "Glasses", badgeValue: "26" },
            { text: "Bags", badgeValue: "37" },
            { text: "Mobile", badgeValue: "48" },
            { text: "Lipsticks", badgeValue: "12" },
            { text: "Pefumes", badgeValue: "54" },
            { text: "Clothes", badgeValue: "23" },
            { text: "Glasses", badgeValue: "66" },
            { text: "Phones", badgeValue: "47" },
            { text: "Mobile", badgeValue: "48" },
            { text: "Lipsticks", badgeValue: "12" },
            { text: "Pefumes", badgeValue: "54" },
            { text: "Clothes", badgeValue: "23" },
            { text: "Glasses", badgeValue: "66" },
            { text: "Phones", badgeValue: "47" },
            { text: "Wrist Watch", badgeValue: "20" },
        ];
    }
    BadgeWithListPage.prototype.ngOnInit = function () {
    };
    BadgeWithListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badge-with-list',
            template: __webpack_require__(/*! ./badge-with-list.page.html */ "./src/app/badge-with-list/badge-with-list.page.html"),
            styles: [__webpack_require__(/*! ./badge-with-list.page.scss */ "./src/app/badge-with-list/badge-with-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeWithListPage);
    return BadgeWithListPage;
}());



/***/ })

}]);
//# sourceMappingURL=badge-with-list-badge-with-list-module.js.map