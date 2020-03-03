(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-slider-grid-slider-module"],{

/***/ "./src/app/grid-slider/grid-slider.module.ts":
/*!***************************************************!*\
  !*** ./src/app/grid-slider/grid-slider.module.ts ***!
  \***************************************************/
/*! exports provided: GridSliderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSliderPageModule", function() { return GridSliderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grid_slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-slider.page */ "./src/app/grid-slider/grid-slider.page.ts");







var routes = [
    {
        path: '',
        component: _grid_slider_page__WEBPACK_IMPORTED_MODULE_6__["GridSliderPage"]
    }
];
var GridSliderPageModule = /** @class */ (function () {
    function GridSliderPageModule() {
    }
    GridSliderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grid_slider_page__WEBPACK_IMPORTED_MODULE_6__["GridSliderPage"]]
        })
    ], GridSliderPageModule);
    return GridSliderPageModule;
}());



/***/ }),

/***/ "./src/app/grid-slider/grid-slider.page.html":
/*!***************************************************!*\
  !*** ./src/app/grid-slider/grid-slider.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/grid-subcategory\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Slider</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid no-padding>\n    <!-- single row contain single column due to size=4  -->\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <ion-slides pager=\"true\">\n          <ion-slide *ngFor=\"let item of items\">\n            <img src=\"{{item.img}}\">\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/grid-slider/grid-slider.page.scss":
/*!***************************************************!*\
  !*** ./src/app/grid-slider/grid-slider.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content img {\n  width: 85%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9ncmlkLXNsaWRlci9ncmlkLXNsaWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ncmlkLXNsaWRlci9ncmlkLXNsaWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICBpbWd7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/grid-slider/grid-slider.page.ts":
/*!*************************************************!*\
  !*** ./src/app/grid-slider/grid-slider.page.ts ***!
  \*************************************************/
/*! exports provided: GridSliderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSliderPage", function() { return GridSliderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridSliderPage = /** @class */ (function () {
    function GridSliderPage() {
        this.items = [
            { name: 'Fashion One', img: 'assets/images/slider/slider1.jpg', id: 0, details: 'Fashion category' },
            { name: 'Fashion Two', img: 'assets/images/slider/slider2.jpg', id: 1, details: 'Fashion category' },
            { name: 'Fashion Three', img: 'assets/images/slider/slider3.jpg', id: 3, details: 'Fashion category' },
            { name: 'Fashion Four', img: 'assets/images/slider/slider4.jpg', id: 4, details: 'Fashion category' },
            { name: 'Fashion One', img: 'assets/images/slider/slider1.jpg', id: 0, details: 'Fashion category' },
            { name: 'Fashion Two', img: 'assets/images/slider/slider2.jpg', id: 1, details: 'Fashion category' },
            { name: 'Fashion Three', img: 'assets/images/slider/slider3.jpg', id: 3, details: 'Fashion category' },
            { name: 'Fashion Four', img: 'assets/images/slider/slider4.jpg', id: 4, details: 'Fashion category' },
        ];
    }
    GridSliderPage.prototype.ngOnInit = function () {
    };
    GridSliderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-slider',
            template: __webpack_require__(/*! ./grid-slider.page.html */ "./src/app/grid-slider/grid-slider.page.html"),
            styles: [__webpack_require__(/*! ./grid-slider.page.scss */ "./src/app/grid-slider/grid-slider.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridSliderPage);
    return GridSliderPage;
}());



/***/ })

}]);
//# sourceMappingURL=grid-slider-grid-slider-module.js.map