(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-shoping-slider-card-shoping-slider-module"],{

/***/ "./src/app/card-shoping-slider/card-shoping-slider.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/card-shoping-slider/card-shoping-slider.module.ts ***!
  \*******************************************************************/
/*! exports provided: CardShopingSliderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardShopingSliderPageModule", function() { return CardShopingSliderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_shoping_slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-shoping-slider.page */ "./src/app/card-shoping-slider/card-shoping-slider.page.ts");







var routes = [
    {
        path: '',
        component: _card_shoping_slider_page__WEBPACK_IMPORTED_MODULE_6__["CardShopingSliderPage"]
    }
];
var CardShopingSliderPageModule = /** @class */ (function () {
    function CardShopingSliderPageModule() {
    }
    CardShopingSliderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_shoping_slider_page__WEBPACK_IMPORTED_MODULE_6__["CardShopingSliderPage"]]
        })
    ], CardShopingSliderPageModule);
    return CardShopingSliderPageModule;
}());



/***/ }),

/***/ "./src/app/card-shoping-slider/card-shoping-slider.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/card-shoping-slider/card-shoping-slider.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cards Shoping Cart Sliders</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid *ngFor=\"let item of [1,2,3,4]\">\n    <!-- swiping slider -->\n    <ion-slides [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let product of items\">\n        <!-- card with content having images with name and price on it with iterations -->\n        <ion-card>\n          <ion-card-content>\n            {{ product.name }} - ${{ product.price }}\n            <ion-img src=\"{{product.img}}\"></ion-img>\n            <ion-button expand=\"full\">Buy Now</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/card-shoping-slider/card-shoping-slider.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/card-shoping-slider/card-shoping-slider.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-bottom: 5px;\n  --padding-end: 5px;\n  --padding-start: 5px;\n  --padding-top: 5px; }\n  ion-content ion-card {\n    margin: 5px;\n    padding: 10px; }\n  ion-content ion-card ion-card-content {\n      padding: 0; }\n  ion-content ion-card ion-card-content ion-col:first-child {\n        text-align: left; }\n  ion-content ion-card ion-card-content ion-col:last-child {\n        text-align: right; }\n  ion-content ion-card ion-card-content ion-button {\n        margin-left: 0;\n        margin-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jYXJkLXNob3Bpbmctc2xpZGVyL2NhcmQtc2hvcGluZy1zbGlkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWlCO0VBQ2pCLGtCQUFjO0VBQ2Qsb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUE7RUFKbEI7SUFNUSxXQUFXO0lBQ1gsYUFBYSxFQUFBO0VBUHJCO01BU1ksVUFBUyxFQUFBO0VBVHJCO1FBWW9CLGdCQUFnQixFQUFBO0VBWnBDO1FBZW9CLGlCQUFpQixFQUFBO0VBZnJDO1FBbUJlLGNBQWM7UUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJkLXNob3Bpbmctc2xpZGVyL2NhcmQtc2hvcGluZy1zbGlkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDVweDtcclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgcGFkZGluZzowOyAgIFxyXG4gICAgICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/card-shoping-slider/card-shoping-slider.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/card-shoping-slider/card-shoping-slider.page.ts ***!
  \*****************************************************************/
/*! exports provided: CardShopingSliderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardShopingSliderPage", function() { return CardShopingSliderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardShopingSliderPage = /** @class */ (function () {
    function CardShopingSliderPage() {
        this.items = [
            {
                id: '0',
                name: "Bed",
                price: "250",
                img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png"
            },
            {
                id: '1',
                name: "Dress",
                price: "1800",
                img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png"
            },
            {
                id: '2',
                name: "Stand",
                price: "3200",
                img: "assets/images/Pictures/app-slicing/cell_phone_stand.png"
            },
            {
                id: '3',
                name: "Chair",
                price: "1200",
                img: "assets/images/Pictures/app-slicing/red_and_black_chair.png"
            }
        ];
        this.sliderConfig = {
            slidesPerView: 2.2,
            spaceBetween: 0
        };
    }
    CardShopingSliderPage.prototype.ngOnInit = function () {
    };
    CardShopingSliderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-shoping-slider',
            template: __webpack_require__(/*! ./card-shoping-slider.page.html */ "./src/app/card-shoping-slider/card-shoping-slider.page.html"),
            styles: [__webpack_require__(/*! ./card-shoping-slider.page.scss */ "./src/app/card-shoping-slider/card-shoping-slider.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardShopingSliderPage);
    return CardShopingSliderPage;
}());



/***/ })

}]);
//# sourceMappingURL=card-shoping-slider-card-shoping-slider-module.js.map