(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider-arrows-slider-arrows-module"],{

/***/ "./src/app/slider-arrows/slider-arrows.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/slider-arrows/slider-arrows.module.ts ***!
  \*******************************************************/
/*! exports provided: SliderArrowsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderArrowsPageModule", function() { return SliderArrowsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slider_arrows_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider-arrows.page */ "./src/app/slider-arrows/slider-arrows.page.ts");







var routes = [
    {
        path: '',
        component: _slider_arrows_page__WEBPACK_IMPORTED_MODULE_6__["SliderArrowsPage"]
    }
];
var SliderArrowsPageModule = /** @class */ (function () {
    function SliderArrowsPageModule() {
    }
    SliderArrowsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slider_arrows_page__WEBPACK_IMPORTED_MODULE_6__["SliderArrowsPage"]]
        })
    ], SliderArrowsPageModule);
    return SliderArrowsPageModule;
}());



/***/ }),

/***/ "./src/app/slider-arrows/slider-arrows.page.html":
/*!*******************************************************!*\
  !*** ./src/app/slider-arrows/slider-arrows.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Slider Arrows</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-button fill=\"clear\" color=\"light\" class=\"swiper-button-prev swiper-button-black\" (click)=\"prevSlide()\"></ion-button>\n    <!-- slides  -->\n    <ion-slides #IonSlides pager=\"true\">\n        <!-- single slide iteration -->\n        <ion-slide *ngFor=\"let item of items\">\n            <img src=\"{{item.img}}\" />\n        </ion-slide>\n    </ion-slides>\n    <ion-button fill=\"clear\" color=\"light\" class=\"swiper-button-next swiper-button-black\" (click)=\"nextSlide()\"></ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/slider-arrows/slider-arrows.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/slider-arrows/slider-arrows.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-slides {\n  height: 100%; }\n\n.swiper-button-next {\n  right: 20px;\n  left: auto; }\n\n.swiper-button-prev {\n  left: 20px;\n  right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9zbGlkZXItYXJyb3dzL3NsaWRlci1hcnJvd3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxVQUFVO0VBQ1YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2xpZGVyLWFycm93cy9zbGlkZXItYXJyb3dzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaW9uLXNsaWRlc3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0e1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG59XHJcbi5zd2lwZXItYnV0dG9uLXByZXZ7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/slider-arrows/slider-arrows.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/slider-arrows/slider-arrows.page.ts ***!
  \*****************************************************/
/*! exports provided: SliderArrowsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderArrowsPage", function() { return SliderArrowsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SliderArrowsPage = /** @class */ (function () {
    function SliderArrowsPage() {
        this.items = [
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image1.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image2.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image3.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image5.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image6.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image7.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
        ];
    }
    SliderArrowsPage.prototype.ngOnInit = function () {
    };
    SliderArrowsPage.prototype.prevSlide = function () {
        this.slides.slidePrev(); //slider previous built-in function
    };
    SliderArrowsPage.prototype.nextSlide = function () {
        this.slides.slideNext(); //slider next built-in function
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], SliderArrowsPage.prototype, "slides", void 0);
    SliderArrowsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider-arrows',
            template: __webpack_require__(/*! ./slider-arrows.page.html */ "./src/app/slider-arrows/slider-arrows.page.html"),
            styles: [__webpack_require__(/*! ./slider-arrows.page.scss */ "./src/app/slider-arrows/slider-arrows.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderArrowsPage);
    return SliderArrowsPage;
}());



/***/ })

}]);
//# sourceMappingURL=slider-arrows-slider-arrows-module.js.map