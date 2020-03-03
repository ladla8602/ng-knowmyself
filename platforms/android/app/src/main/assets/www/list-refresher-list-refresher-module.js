(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-refresher-list-refresher-module"],{

/***/ "./src/app/list-refresher/list-refresher.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-refresher/list-refresher.module.ts ***!
  \*********************************************************/
/*! exports provided: ListRefresherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRefresherPageModule", function() { return ListRefresherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_refresher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-refresher.page */ "./src/app/list-refresher/list-refresher.page.ts");







var routes = [
    {
        path: '',
        component: _list_refresher_page__WEBPACK_IMPORTED_MODULE_6__["ListRefresherPage"]
    }
];
var ListRefresherPageModule = /** @class */ (function () {
    function ListRefresherPageModule() {
    }
    ListRefresherPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_refresher_page__WEBPACK_IMPORTED_MODULE_6__["ListRefresherPage"]]
        })
    ], ListRefresherPageModule);
    return ListRefresherPageModule;
}());



/***/ }),

/***/ "./src/app/list-refresher/list-refresher.page.html":
/*!*********************************************************!*\
  !*** ./src/app/list-refresher/list-refresher.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>List Refresher</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"contentClass\" no-padding>\n  <!-- list with multiple iterations -->\n  <ion-list>\n    <ion-item *ngFor=\"let item of products\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.image}}\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.name}}</h2>\n        <p>{{item.desc}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n<!-- scroll up to get new items after loading -->\n  <ion-refresher threshold=\"10px\" (ionRefresh)=\"loadData($event)\">\n    <ion-refresher-content loadingSpinner=\"lines\">\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>"

/***/ }),

/***/ "./src/app/list-refresher/list-refresher.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/list-refresher/list-refresher.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcmVmcmVzaGVyL2xpc3QtcmVmcmVzaGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/list-refresher/list-refresher.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/list-refresher/list-refresher.page.ts ***!
  \*******************************************************/
/*! exports provided: ListRefresherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRefresherPage", function() { return ListRefresherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListRefresherPage = /** @class */ (function () {
    function ListRefresherPage() {
        this.products = [
            { image: "assets/images/shirts/shirt-1.jpg", name: "CLASSIC FIT POLO", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-3.jpg", name: "CLASSIC FIT COTTON", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-4.jpg", name: "CLASSIC FIT POLO", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON FIT SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-6.jpg", name: "CLASSIC COTTON  SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-7.jpg", name: "HAMPTON FIT SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-8.jpg", name: "HAMPTON CLASSIC SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-6.jpg", name: "CLASSIC COTTON  SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-7.jpg", name: "HAMPTON FIT SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-4.jpg", name: "CLASSIC FIT POLO", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON FIT SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
            { image: "assets/images/shirts/shirt-3.jpg", name: "CLASSIC FIT COTTON", desc: "It is very rare that a 100% cotton Tshirt. " },
        ];
    }
    ListRefresherPage.prototype.ngOnInit = function () {
    };
    //after scroll loading you can get the item pushed item mention in below code
    ListRefresherPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log(event);
            _this.products.push({ image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC SHIRT", desc: "It is very rare that a 100% cotton Tshirt." });
            event.target.complete();
        }, 500);
    };
    ListRefresherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-refresher',
            template: __webpack_require__(/*! ./list-refresher.page.html */ "./src/app/list-refresher/list-refresher.page.html"),
            styles: [__webpack_require__(/*! ./list-refresher.page.scss */ "./src/app/list-refresher/list-refresher.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListRefresherPage);
    return ListRefresherPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-refresher-list-refresher-module.js.map