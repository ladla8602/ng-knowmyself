(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-images-card-images-module"],{

/***/ "./src/app/card-images/card-images.module.ts":
/*!***************************************************!*\
  !*** ./src/app/card-images/card-images.module.ts ***!
  \***************************************************/
/*! exports provided: CardImagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImagesPageModule", function() { return CardImagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_images_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-images.page */ "./src/app/card-images/card-images.page.ts");







var routes = [
    {
        path: '',
        component: _card_images_page__WEBPACK_IMPORTED_MODULE_6__["CardImagesPage"]
    }
];
var CardImagesPageModule = /** @class */ (function () {
    function CardImagesPageModule() {
    }
    CardImagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_images_page__WEBPACK_IMPORTED_MODULE_6__["CardImagesPage"]]
        })
    ], CardImagesPageModule);
    return CardImagesPageModule;
}());



/***/ }),

/***/ "./src/app/card-images/card-images.page.html":
/*!***************************************************!*\
  !*** ./src/app/card-images/card-images.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cards Images</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <!-- card with header and title inside having images with title and subtitle on it with iterations -->\n      <ion-card *ngFor=\"let p of items\">\n          <img  src=\"{{p.img}}\" />\n          <ion-card-header>\n            <ion-card-title>Lorem Ipsum Title</ion-card-title>\n            <ion-card-subtitle>Lorem Ipsum Subtitle</ion-card-subtitle>\n          </ion-card-header>\n      </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/card-images/card-images.page.scss":
/*!***************************************************!*\
  !*** ./src/app/card-images/card-images.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card ion-card-header {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center; }\n  ion-content ion-card ion-card-header ion-card-title, ion-content ion-card ion-card-header ion-card-subtitle {\n    font-weight: bold;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jYXJkLWltYWdlcy9jYXJkLWltYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxXQUFXO0VBQ1gsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQTtFQVJ4QjtJQVVRLGlCQUFpQjtJQUNqQixZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJkLWltYWdlcy9jYXJkLWltYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICBpb24tY2FyZHtcclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBpb24tY2FyZC10aXRsZSwgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/card-images/card-images.page.ts":
/*!*************************************************!*\
  !*** ./src/app/card-images/card-images.page.ts ***!
  \*************************************************/
/*! exports provided: CardImagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImagesPage", function() { return CardImagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardImagesPage = /** @class */ (function () {
    function CardImagesPage() {
        this.items = [
            { img: 'assets/images/Pictures/gallery-images/gallery_image1.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image2.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image3.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image4.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image5.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image6.png' },
            { img: 'assets/images/Pictures/gallery-images/gallery_image7.png' },
        ];
    }
    CardImagesPage.prototype.ngOnInit = function () {
    };
    CardImagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-images',
            template: __webpack_require__(/*! ./card-images.page.html */ "./src/app/card-images/card-images.page.html"),
            styles: [__webpack_require__(/*! ./card-images.page.scss */ "./src/app/card-images/card-images.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardImagesPage);
    return CardImagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=card-images-card-images-module.js.map