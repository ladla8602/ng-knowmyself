(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-three-line-grid-three-line-module"],{

/***/ "./src/app/grid-three-line/grid-three-line.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/grid-three-line/grid-three-line.module.ts ***!
  \***********************************************************/
/*! exports provided: GridThreeLinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridThreeLinePageModule", function() { return GridThreeLinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grid_three_line_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-three-line.page */ "./src/app/grid-three-line/grid-three-line.page.ts");







var routes = [
    {
        path: '',
        component: _grid_three_line_page__WEBPACK_IMPORTED_MODULE_6__["GridThreeLinePage"]
    }
];
var GridThreeLinePageModule = /** @class */ (function () {
    function GridThreeLinePageModule() {
    }
    GridThreeLinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grid_three_line_page__WEBPACK_IMPORTED_MODULE_6__["GridThreeLinePage"]]
        })
    ], GridThreeLinePageModule);
    return GridThreeLinePageModule;
}());



/***/ }),

/***/ "./src/app/grid-three-line/grid-three-line.page.html":
/*!***********************************************************!*\
  !*** ./src/app/grid-three-line/grid-three-line.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"toolbarTag\">\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Three Column Images</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid no-padding>\n    <!-- single row contain 3 columns of equal lenght due to size=4  -->\n    <ion-row no-padding>\n      <ion-col *ngFor=\"let item of items\" no-padding size=\"4\">\n        <img src=\"{{item.img}}\" alt=\"Image not loading\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/grid-three-line/grid-three-line.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/grid-three-line/grid-three-line.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content img {\n  margin-top: -3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9ncmlkLXRocmVlLWxpbmUvZ3JpZC10aHJlZS1saW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ3JpZC10aHJlZS1saW5lL2dyaWQtdGhyZWUtbGluZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/grid-three-line/grid-three-line.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/grid-three-line/grid-three-line.page.ts ***!
  \*********************************************************/
/*! exports provided: GridThreeLinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridThreeLinePage", function() { return GridThreeLinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridThreeLinePage = /** @class */ (function () {
    function GridThreeLinePage() {
        this.items = [
            { img: 'assets/images/Pictures/gallery-images/gallery_image1.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image2.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image3.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image4.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image5.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image6.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image7.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image1.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image2.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image3.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image4.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image5.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image6.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image7.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image1.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image2.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image3.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image4.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image5.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image6.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image7.png', },
        ];
    }
    GridThreeLinePage.prototype.ngOnInit = function () {
    };
    GridThreeLinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-three-line',
            template: __webpack_require__(/*! ./grid-three-line.page.html */ "./src/app/grid-three-line/grid-three-line.page.html"),
            styles: [__webpack_require__(/*! ./grid-three-line.page.scss */ "./src/app/grid-three-line/grid-three-line.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridThreeLinePage);
    return GridThreeLinePage;
}());



/***/ })

}]);
//# sourceMappingURL=grid-three-line-grid-three-line-module.js.map