(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-subcategory-grid-subcategory-module"],{

/***/ "./src/app/grid-subcategory/grid-subcategory.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/grid-subcategory/grid-subcategory.module.ts ***!
  \*************************************************************/
/*! exports provided: GridSubcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSubcategoryPageModule", function() { return GridSubcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grid_subcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-subcategory.page */ "./src/app/grid-subcategory/grid-subcategory.page.ts");







var routes = [
    {
        path: '',
        component: _grid_subcategory_page__WEBPACK_IMPORTED_MODULE_6__["GridSubcategoryPage"]
    }
];
var GridSubcategoryPageModule = /** @class */ (function () {
    function GridSubcategoryPageModule() {
    }
    GridSubcategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grid_subcategory_page__WEBPACK_IMPORTED_MODULE_6__["GridSubcategoryPage"]]
        })
    ], GridSubcategoryPageModule);
    return GridSubcategoryPageModule;
}());



/***/ }),

/***/ "./src/app/grid-subcategory/grid-subcategory.page.html":
/*!*************************************************************!*\
  !*** ./src/app/grid-subcategory/grid-subcategory.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"toolbarTag\">\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/grid-category\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Grid Subcategory</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid no-padding>\n    <!-- single row contain 2 columns of equal lenght due to size=6  -->\n    <ion-row no-padding>\n      <ion-col *ngFor=\"let item of items\" size=\"6\" no-padding>\n        <ion-button routerLink=\"/grid-slider\" routerDirection=\"forward\" fill=\"clear\" no-padding>\n          <img src=\"{{item.img}}\" alt=\"Image not loading\">\n          <div class=\"overlay-text\" no-padding>\n            <h4>{{item.name}}</h4>\n            <p>{{item.details}}</p>\n          </div>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/grid-subcategory/grid-subcategory.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/grid-subcategory/grid-subcategory.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-button {\n  height: 100%; }\n  ion-content ion-button div {\n    padding: 7px 5px;\n    color: white;\n    bottom: 0px;\n    position: absolute;\n    width: 100%;\n    background: rgba(6, 110, 237, 0.282); }\n  ion-content ion-button div h4 {\n      font-size: 22px;\n      margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9ncmlkLXN1YmNhdGVnb3J5L2dyaWQtc3ViY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsWUFBWSxFQUFBO0VBRnBCO0lBSVksZ0JBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsb0NBQW9DLEVBQUE7RUFUaEQ7TUFXZ0IsZUFBZTtNQUNmLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dyaWQtc3ViY2F0ZWdvcnkvZ3JpZC1zdWJjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgcGFkZGluZzo3cHggNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYsIDExMCwgMjM3LCAwLjI4Mik7XHJcbiAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/grid-subcategory/grid-subcategory.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/grid-subcategory/grid-subcategory.page.ts ***!
  \***********************************************************/
/*! exports provided: GridSubcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSubcategoryPage", function() { return GridSubcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridSubcategoryPage = /** @class */ (function () {
    function GridSubcategoryPage() {
        this.items = [
            { name: 'Fashion One', img: 'assets/images/fashion/fashion1.jpg', id: 0, details: 'Fashion category' },
            { name: 'Fashion Two', img: 'assets/images/fashion/fashion2.jpg', id: 1, details: 'Fashion category' },
            { name: 'Fashion Three', img: 'assets/images/fashion/fashion3.jpg', id: 3, details: 'Fashion category' },
            { name: 'Fashion Four', img: 'assets/images/fashion/fashion4.jpg', id: 4, details: 'Fashion category' },
            { name: 'Fashion Five', img: 'assets/images/fashion/fashion5.jpg', id: 2, details: 'Fashion category' },
            { name: 'Fashion Six', img: 'assets/images/fashion/fashion6.jpg', id: 5, details: 'Fashion category' },
            { name: 'Fashion Seven', img: 'assets/images/fashion/fashion7.jpg', id: 5, details: 'Fashion category' },
            { name: 'Fashion Eight', img: 'assets/images/fashion/fashion8.jpg', id: 5, details: 'Fashion category' },
            { name: 'Fashion Nine', img: 'assets/images/fashion/fashion9.jpg', id: 5, details: 'Fashion category' },
            { name: 'Fashion Ten', img: 'assets/images/fashion/fashion10.jpg', id: 5, details: 'Fashion category' },
            { name: 'Fashion Eleven', img: 'assets/images/fashion/fashion11.jpg', id: 5, details: 'Fashion category' },
            { name: 'Fashion Tweleve', img: 'assets/images/fashion/fashion12.jpg', id: 5, details: 'Fashion category' },
        ];
    }
    GridSubcategoryPage.prototype.ngOnInit = function () {
    };
    GridSubcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-subcategory',
            template: __webpack_require__(/*! ./grid-subcategory.page.html */ "./src/app/grid-subcategory/grid-subcategory.page.html"),
            styles: [__webpack_require__(/*! ./grid-subcategory.page.scss */ "./src/app/grid-subcategory/grid-subcategory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridSubcategoryPage);
    return GridSubcategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=grid-subcategory-grid-subcategory-module.js.map