(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider-images-slider-images-module"],{

/***/ "./src/app/slider-images/slider-images.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/slider-images/slider-images.module.ts ***!
  \*******************************************************/
/*! exports provided: SliderImagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderImagesPageModule", function() { return SliderImagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slider_images_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider-images.page */ "./src/app/slider-images/slider-images.page.ts");







var routes = [
    {
        path: '',
        component: _slider_images_page__WEBPACK_IMPORTED_MODULE_6__["SliderImagesPage"]
    }
];
var SliderImagesPageModule = /** @class */ (function () {
    function SliderImagesPageModule() {
    }
    SliderImagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slider_images_page__WEBPACK_IMPORTED_MODULE_6__["SliderImagesPage"]]
        })
    ], SliderImagesPageModule);
    return SliderImagesPageModule;
}());



/***/ }),

/***/ "./src/app/slider-images/slider-images.page.html":
/*!*******************************************************!*\
  !*** ./src/app/slider-images/slider-images.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Slider Images</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- slides  -->\n    <ion-slides #IonSlides pager=\"true\">\n        <!-- single slide iteration with image -->\n        <ion-slide *ngFor=\"let item of items\">\n            <img src=\"{{item.img}}\" />\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/slider-images/slider-images.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/slider-images/slider-images.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-slides {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9zbGlkZXItaW1hZ2VzL3NsaWRlci1pbWFnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2xpZGVyLWltYWdlcy9zbGlkZXItaW1hZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaW9uLXNsaWRlc3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/slider-images/slider-images.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/slider-images/slider-images.page.ts ***!
  \*****************************************************/
/*! exports provided: SliderImagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderImagesPage", function() { return SliderImagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SliderImagesPage = /** @class */ (function () {
    function SliderImagesPage() {
        this.items = [
            { img: 'assets/images/Pictures/gallery-images/gallery_image1.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image2.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image3.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image4.png' },
        ];
    }
    SliderImagesPage.prototype.ngOnInit = function () {
        this.slides.options = { effect: "fade" };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], SliderImagesPage.prototype, "slides", void 0);
    SliderImagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider-images',
            template: __webpack_require__(/*! ./slider-images.page.html */ "./src/app/slider-images/slider-images.page.html"),
            styles: [__webpack_require__(/*! ./slider-images.page.scss */ "./src/app/slider-images/slider-images.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderImagesPage);
    return SliderImagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=slider-images-slider-images-module.js.map