(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchbar-simple-searchbar-simple-module"],{

/***/ "./src/app/searchbar-simple/searchbar-simple.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/searchbar-simple/searchbar-simple.module.ts ***!
  \*************************************************************/
/*! exports provided: SearchbarSimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarSimplePageModule", function() { return SearchbarSimplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchbar_simple_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchbar-simple.page */ "./src/app/searchbar-simple/searchbar-simple.page.ts");







var routes = [
    {
        path: '',
        component: _searchbar_simple_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarSimplePage"]
    }
];
var SearchbarSimplePageModule = /** @class */ (function () {
    function SearchbarSimplePageModule() {
    }
    SearchbarSimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchbar_simple_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarSimplePage"]]
        })
    ], SearchbarSimplePageModule);
    return SearchbarSimplePageModule;
}());



/***/ }),

/***/ "./src/app/searchbar-simple/searchbar-simple.page.html":
/*!*************************************************************!*\
  !*** ./src/app/searchbar-simple/searchbar-simple.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Searchbar Simple</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- for searchbar  -->\n    <ion-searchbar (ionInput)=\"getItems($event)\"></ion-searchbar>\n    <ion-list>\n        <ion-item *ngFor=\"let item of items\">\n            {{ item }}\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/searchbar-simple/searchbar-simple.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/searchbar-simple/searchbar-simple.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGJhci1zaW1wbGUvc2VhcmNoYmFyLXNpbXBsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/searchbar-simple/searchbar-simple.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/searchbar-simple/searchbar-simple.page.ts ***!
  \***********************************************************/
/*! exports provided: SearchbarSimplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarSimplePage", function() { return SearchbarSimplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchbarSimplePage = /** @class */ (function () {
    function SearchbarSimplePage() {
        this.initializeItems();
    }
    //function for searching item
    SearchbarSimplePage.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    SearchbarSimplePage.prototype.ngOnInit = function () {
    };
    SearchbarSimplePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchbarSimplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchbar-simple',
            template: __webpack_require__(/*! ./searchbar-simple.page.html */ "./src/app/searchbar-simple/searchbar-simple.page.html"),
            styles: [__webpack_require__(/*! ./searchbar-simple.page.scss */ "./src/app/searchbar-simple/searchbar-simple.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchbarSimplePage);
    return SearchbarSimplePage;
}());



/***/ })

}]);
//# sourceMappingURL=searchbar-simple-searchbar-simple-module.js.map