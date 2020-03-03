(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-shoping-simple-card-shoping-simple-module"],{

/***/ "./src/app/card-shoping-simple/card-shoping-simple.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/card-shoping-simple/card-shoping-simple.module.ts ***!
  \*******************************************************************/
/*! exports provided: CardShopingSimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardShopingSimplePageModule", function() { return CardShopingSimplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_shoping_simple_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-shoping-simple.page */ "./src/app/card-shoping-simple/card-shoping-simple.page.ts");







var routes = [
    {
        path: '',
        component: _card_shoping_simple_page__WEBPACK_IMPORTED_MODULE_6__["CardShopingSimplePage"]
    }
];
var CardShopingSimplePageModule = /** @class */ (function () {
    function CardShopingSimplePageModule() {
    }
    CardShopingSimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_shoping_simple_page__WEBPACK_IMPORTED_MODULE_6__["CardShopingSimplePage"]]
        })
    ], CardShopingSimplePageModule);
    return CardShopingSimplePageModule;
}());



/***/ }),

/***/ "./src/app/card-shoping-simple/card-shoping-simple.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/card-shoping-simple/card-shoping-simple.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cards Shoping Cart Simple</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <ion-col *ngFor=\"let product of items\" size=\"6\" no-padding>\n        <!-- card with content inside having images with name and price with buy button on it with iterations -->\n        <ion-card>\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"8\">\n                {{ product.text }}\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-text>\n                  <p>${{ product.price }}</p>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-img src=\"{{product.img}}\"></ion-img>\n            <ion-button expand=\"full\">Buy Now</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/card-shoping-simple/card-shoping-simple.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/card-shoping-simple/card-shoping-simple.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-bottom: 5px;\n  --padding-end: 5px;\n  --padding-start: 5px;\n  --padding-top: 5px; }\n  ion-content ion-card {\n    margin: 5px;\n    padding: 10px; }\n  ion-content ion-card ion-card-content {\n      padding: 0; }\n  ion-content ion-card ion-card-content ion-col:first-child {\n        text-align: left; }\n  ion-content ion-card ion-card-content ion-col:last-child {\n        text-align: right; }\n  ion-content ion-card ion-card-content ion-button {\n        margin-left: 0;\n        margin-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jYXJkLXNob3Bpbmctc2ltcGxlL2NhcmQtc2hvcGluZy1zaW1wbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWlCO0VBQ2pCLGtCQUFjO0VBQ2Qsb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUE7RUFKbEI7SUFPUSxXQUFXO0lBQ1gsYUFBYSxFQUFBO0VBUnJCO01BV1ksVUFBUyxFQUFBO0VBWHJCO1FBZW9CLGdCQUFnQixFQUFBO0VBZnBDO1FBa0JvQixpQkFBaUIsRUFBQTtFQWxCckM7UUFzQmUsY0FBYztRQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcmQtc2hvcGluZy1zaW1wbGUvY2FyZC1zaG9waW5nLXNpbXBsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogNXB4O1xyXG5cclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgcGFkZGluZzowOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/card-shoping-simple/card-shoping-simple.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/card-shoping-simple/card-shoping-simple.page.ts ***!
  \*****************************************************************/
/*! exports provided: CardShopingSimplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardShopingSimplePage", function() { return CardShopingSimplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardShopingSimplePage = /** @class */ (function () {
    function CardShopingSimplePage() {
        this.items = [
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", price: "100", status: "Avaliable" },
            { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", price: "120", status: "Avaliable" },
            { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", price: "130", status: "Avaliable" },
            { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", price: "160", status: "Out Of Stock" },
            { text: "Polo shirt men's wear", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", price: "70", status: "Avaliable" },
            { text: "Ladies Jacket Wear", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", price: "200", status: "Avaliable" },
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", price: "400", status: "Out Of Stock" },
            { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", price: "320", status: "Avaliable" },
            { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", price: "90", status: "Avaliable" },
            { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", price: "160", status: "Avaliable" },
            { text: "Polo shirt men's wear", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", price: "70", status: "Out Of Stock" },
            { text: "Ladies Jacket Wear", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", price: "200", status: "Avaliable" },
        ];
    }
    CardShopingSimplePage.prototype.ngOnInit = function () {
    };
    CardShopingSimplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-shoping-simple',
            template: __webpack_require__(/*! ./card-shoping-simple.page.html */ "./src/app/card-shoping-simple/card-shoping-simple.page.html"),
            styles: [__webpack_require__(/*! ./card-shoping-simple.page.scss */ "./src/app/card-shoping-simple/card-shoping-simple.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardShopingSimplePage);
    return CardShopingSimplePage;
}());



/***/ })

}]);
//# sourceMappingURL=card-shoping-simple-card-shoping-simple-module.js.map