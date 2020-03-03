(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider-autoplay-slider-autoplay-module"],{

/***/ "./src/app/slider-autoplay/slider-autoplay.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/slider-autoplay/slider-autoplay.module.ts ***!
  \***********************************************************/
/*! exports provided: SliderAutoplayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderAutoplayPageModule", function() { return SliderAutoplayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slider_autoplay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider-autoplay.page */ "./src/app/slider-autoplay/slider-autoplay.page.ts");







var routes = [
    {
        path: '',
        component: _slider_autoplay_page__WEBPACK_IMPORTED_MODULE_6__["SliderAutoplayPage"]
    }
];
var SliderAutoplayPageModule = /** @class */ (function () {
    function SliderAutoplayPageModule() {
    }
    SliderAutoplayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slider_autoplay_page__WEBPACK_IMPORTED_MODULE_6__["SliderAutoplayPage"]]
        })
    ], SliderAutoplayPageModule);
    return SliderAutoplayPageModule;
}());



/***/ }),

/***/ "./src/app/slider-autoplay/slider-autoplay.page.html":
/*!***********************************************************!*\
  !*** ./src/app/slider-autoplay/slider-autoplay.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Slider Autoplay</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- slides with auto next slide after 3 seconds -->\n    <ion-slides #IonSlides autoplay=\"3000\" loop=\"true\" pager=\"true\">\n        <!-- single slide iteration -->\n        <ion-slide *ngFor=\"let prod of items\">\n            <img src=\"{{prod.img}}\" />\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/slider-autoplay/slider-autoplay.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/slider-autoplay/slider-autoplay.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-slides {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9zbGlkZXItYXV0b3BsYXkvc2xpZGVyLWF1dG9wbGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci1hdXRvcGxheS9zbGlkZXItYXV0b3BsYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tc2xpZGVze1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/slider-autoplay/slider-autoplay.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/slider-autoplay/slider-autoplay.page.ts ***!
  \*********************************************************/
/*! exports provided: SliderAutoplayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderAutoplayPage", function() { return SliderAutoplayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SliderAutoplayPage = /** @class */ (function () {
    function SliderAutoplayPage() {
        this.items = [
            { img: 'assets/images/Pictures/gallery-images/gallery_image1.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image2.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image3.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image4.png' },
        ];
    }
    SliderAutoplayPage.prototype.ngOnInit = function () {
    };
    SliderAutoplayPage.prototype.ionViewDidEnter = function () {
        this.slides.startAutoplay(); //slider autoplay biult-in function
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], SliderAutoplayPage.prototype, "slides", void 0);
    SliderAutoplayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider-autoplay',
            template: __webpack_require__(/*! ./slider-autoplay.page.html */ "./src/app/slider-autoplay/slider-autoplay.page.html"),
            styles: [__webpack_require__(/*! ./slider-autoplay.page.scss */ "./src/app/slider-autoplay/slider-autoplay.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderAutoplayPage);
    return SliderAutoplayPage;
}());



/***/ })

}]);
//# sourceMappingURL=slider-autoplay-slider-autoplay-module.js.map