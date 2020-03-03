(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-with-header-grid-with-header-module"],{

/***/ "./src/app/grid-with-header/grid-with-header.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/grid-with-header/grid-with-header.module.ts ***!
  \*************************************************************/
/*! exports provided: GridWithHeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithHeaderPageModule", function() { return GridWithHeaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grid_with_header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-with-header.page */ "./src/app/grid-with-header/grid-with-header.page.ts");







var routes = [
    {
        path: '',
        component: _grid_with_header_page__WEBPACK_IMPORTED_MODULE_6__["GridWithHeaderPage"]
    }
];
var GridWithHeaderPageModule = /** @class */ (function () {
    function GridWithHeaderPageModule() {
    }
    GridWithHeaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grid_with_header_page__WEBPACK_IMPORTED_MODULE_6__["GridWithHeaderPage"]]
        })
    ], GridWithHeaderPageModule);
    return GridWithHeaderPageModule;
}());



/***/ }),

/***/ "./src/app/grid-with-header/grid-with-header.page.html":
/*!*************************************************************!*\
  !*** ./src/app/grid-with-header/grid-with-header.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> Two Column Images</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <img src=\"assets/images/all-types.jpg\">\n  <ion-fab vertical=\"center\" horizontal=\"end\">\n    <ion-fab-button>\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-grid no-padding>\n    <!-- single row contain 2 columns of equal lenght due to size=6  -->\n    <ion-row no-padding>\n      <ion-col *ngFor=\"let item of items\" size=\"6\" no-padding>\n        <ion-card no-padding>\n          <img src=\"{{item.img}}\" alt=\"Image not loading\" />\n          <ion-text>\n            <p>\n              <b>{{item.text}}</b>\n            </p>\n          </ion-text>\n          <ion-row align-items-center>\n            <ion-col size=\"6\" no-padding>\n              <ion-text>\n                <p>$ {{item.price}}</p>\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button>Buy</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/grid-with-header/grid-with-header.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/grid-with-header/grid-with-header.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card {\n  margin: 5px; }\n  ion-content ion-card img {\n    border-bottom: solid lightgray;\n    border-width: 0.5px; }\n  ion-content ion-card p {\n    font-size: 14px;\n    margin-bottom: 0%;\n    margin-top: 0%;\n    padding-left: 10px; }\n  ion-content ion-card ion-button {\n    height: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9ncmlkLXdpdGgtaGVhZGVyL2dyaWQtd2l0aC1oZWFkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVyxFQUFBO0VBRm5CO0lBSVksOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBO0VBTC9CO0lBUVksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7RUFYOUI7SUFjWSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ncmlkLXdpdGgtaGVhZGVyL2dyaWQtd2l0aC1oZWFkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/grid-with-header/grid-with-header.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/grid-with-header/grid-with-header.page.ts ***!
  \***********************************************************/
/*! exports provided: GridWithHeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWithHeaderPage", function() { return GridWithHeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridWithHeaderPage = /** @class */ (function () {
    function GridWithHeaderPage() {
        this.items = [
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", price: "100", status: "Avaliable" },
            { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", price: "120", status: "Avaliable" },
            { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", price: "130", status: "Avaliable" },
            { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", price: "160", status: "Out Of Stock" },
            { text: "Polo shirt men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", price: "70", status: "Avaliable" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", price: "200", status: "Avaliable" },
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", price: "400", status: "Out Of Stock" },
            { text: "Girls dress ", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", price: "320", status: "Avaliable" },
            { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", price: "90", status: "Avaliable" },
            { text: "Red  chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", price: "160", status: "Avaliable" },
            { text: "Polo shirt men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", price: "70", status: "Out Of Stock" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", price: "200", status: "Avaliable" },
        ];
    }
    GridWithHeaderPage.prototype.ngOnInit = function () {
    };
    GridWithHeaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-with-header',
            template: __webpack_require__(/*! ./grid-with-header.page.html */ "./src/app/grid-with-header/grid-with-header.page.html"),
            styles: [__webpack_require__(/*! ./grid-with-header.page.scss */ "./src/app/grid-with-header/grid-with-header.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridWithHeaderPage);
    return GridWithHeaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=grid-with-header-grid-with-header-module.js.map