(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-section-grid-section-module"],{

/***/ "./src/app/grid-section/grid-section.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/grid-section/grid-section.module.ts ***!
  \*****************************************************/
/*! exports provided: GridSectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSectionPageModule", function() { return GridSectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grid_section_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-section.page */ "./src/app/grid-section/grid-section.page.ts");







var routes = [
    {
        path: '',
        component: _grid_section_page__WEBPACK_IMPORTED_MODULE_6__["GridSectionPage"]
    }
];
var GridSectionPageModule = /** @class */ (function () {
    function GridSectionPageModule() {
    }
    GridSectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grid_section_page__WEBPACK_IMPORTED_MODULE_6__["GridSectionPage"]]
        })
    ], GridSectionPageModule);
    return GridSectionPageModule;
}());



/***/ }),

/***/ "./src/app/grid-section/grid-section.page.html":
/*!*****************************************************!*\
  !*** ./src/app/grid-section/grid-section.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Grid Section Images</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <ion-grid no-padding>\n    <!-- single row contain 3 columns of equal lenght due to size=4  -->\n    <ion-row no-padding>\n      <ion-col *ngFor=\"let item of items\" no-padding size=\"4\">\n        <ion-item-divider>\n          <p>{{item.date}}</p>\n        </ion-item-divider>\n        <img src=\"{{item.img}}\" alt=\"Image not loading\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/grid-section/grid-section.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/grid-section/grid-section.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-item-divider {\n  background: #eee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9ncmlkLXNlY3Rpb24vZ3JpZC1zZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ3JpZC1zZWN0aW9uL2dyaWQtc2VjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGlvbi1pdGVtLWRpdmlkZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/grid-section/grid-section.page.ts":
/*!***************************************************!*\
  !*** ./src/app/grid-section/grid-section.page.ts ***!
  \***************************************************/
/*! exports provided: GridSectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSectionPage", function() { return GridSectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridSectionPage = /** @class */ (function () {
    function GridSectionPage() {
        this.items = [
            { img: 'assets/images/Pictures/gallery-images/gallery_image1.png', date: "14 Jan 2019" },
            { img: 'assets/images/Pictures/gallery-images/gallery_image2.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image3.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image4.png', date: "24 May 2019" },
            { img: 'assets/images/Pictures/gallery-images/gallery_image5.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image6.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image7.png', date: "17 Feb 2019" },
            { img: 'assets/images/Pictures/gallery-images/gallery_image1.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image2.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image3.png', date: "4 April 2019" },
            { img: 'assets/images/Pictures/gallery-images/gallery_image4.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image5.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image6.png', date: "11 Aug 2019" },
            { img: 'assets/images/Pictures/gallery-images/gallery_image7.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image1.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image2.png', date: "16 June 2019" },
            { img: 'assets/images/Pictures/gallery-images/gallery_image3.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image4.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image5.png', date: "27 July 2019" },
            { img: 'assets/images/Pictures/gallery-images/gallery_image6.png', },
            { img: 'assets/images/Pictures/gallery-images/gallery_image7.png', },
        ];
    }
    GridSectionPage.prototype.ngOnInit = function () {
    };
    GridSectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-section',
            template: __webpack_require__(/*! ./grid-section.page.html */ "./src/app/grid-section/grid-section.page.html"),
            styles: [__webpack_require__(/*! ./grid-section.page.scss */ "./src/app/grid-section/grid-section.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridSectionPage);
    return GridSectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=grid-section-grid-section-module.js.map