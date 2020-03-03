(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchbar-with-images-searchbar-with-images-module"],{

/***/ "./src/app/searchbar-with-images/searchbar-with-images.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/searchbar-with-images/searchbar-with-images.module.ts ***!
  \***********************************************************************/
/*! exports provided: SearchbarWithImagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarWithImagesPageModule", function() { return SearchbarWithImagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchbar_with_images_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchbar-with-images.page */ "./src/app/searchbar-with-images/searchbar-with-images.page.ts");







var routes = [
    {
        path: '',
        component: _searchbar_with_images_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarWithImagesPage"]
    }
];
var SearchbarWithImagesPageModule = /** @class */ (function () {
    function SearchbarWithImagesPageModule() {
    }
    SearchbarWithImagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchbar_with_images_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarWithImagesPage"]]
        })
    ], SearchbarWithImagesPageModule);
    return SearchbarWithImagesPageModule;
}());



/***/ }),

/***/ "./src/app/searchbar-with-images/searchbar-with-images.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/searchbar-with-images/searchbar-with-images.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Searchbar Gallery</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <!-- for searchbar  -->\n    <ion-searchbar></ion-searchbar>\n    <ion-segment scrollable>\n        <ion-segment-button checked *ngFor=\"let p of items\">\n            <ion-avatar>\n                <img src=\"{{p.img}}\">\n            </ion-avatar>\n            <p>{{p.text}}</p>\n        </ion-segment-button>\n    </ion-segment>\n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col no-padding size=\"6\">\n                <ion-img src=\"assets/images/Pictures/gallery-images/gallery_image1.png\"></ion-img>\n                <ion-img src=\"assets/images/Pictures/gallery-images/gallery_image2.png\"></ion-img>\n            </ion-col>\n            <ion-col no-padding size=\"6\">\n                <ion-img src=\"assets/images/Pictures/gallery-images/gallery_image3.png\"></ion-img>\n                <ion-img src=\"assets/images/Pictures/gallery-images/gallery_image4.png\"></ion-img>\n            </ion-col>\n        </ion-row>\n        <ion-row no-padding *ngFor=\"let a of [1,2,3,4,5]\">\n            <ion-col no-padding *ngFor=\"let p of images\" size=\"4\">\n                <img src=\"{{p.img}}\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/searchbar-with-images/searchbar-with-images.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/searchbar-with-images/searchbar-with-images.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGJhci13aXRoLWltYWdlcy9zZWFyY2hiYXItd2l0aC1pbWFnZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/searchbar-with-images/searchbar-with-images.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/searchbar-with-images/searchbar-with-images.page.ts ***!
  \*********************************************************************/
/*! exports provided: SearchbarWithImagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarWithImagesPage", function() { return SearchbarWithImagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchbarWithImagesPage = /** @class */ (function () {
    function SearchbarWithImagesPage() {
        this.items = [
            { text: "Deadpool", img: "assets/images/Pictures/faces-images/face_image1.png", badgeValue: "10" },
            { text: "Batman", img: "assets/images/Pictures/faces-images/face_image2.png", badgeValue: "20" },
            { text: "Spiderman", img: "assets/images/Pictures/faces-images/face_image3.png", badgeValue: "5" },
            { text: "Aquaman", img: "assets/images/Pictures/faces-images/face_image4.png", badgeValue: "20" },
            { text: "Anaconda", img: "assets/images/Pictures/faces-images/face_image5.png", badgeValue: "6" },
            { text: "Ironman", img: "assets/images/Pictures/faces-images/face_image6.png", badgeValue: "7" },
        ];
        this.images = [
            { img: "assets/images/Pictures/gallery-images/gallery_image4.png" },
            { img: "assets/images/Pictures/gallery-images/gallery_image5.png" },
            { img: "assets/images/Pictures/gallery-images/gallery_image6.png" },
            { img: "assets/images/Pictures/gallery-images/gallery_image1.png" },
            { img: "assets/images/Pictures/gallery-images/gallery_image2.png" },
            { img: "assets/images/Pictures/gallery-images/gallery_image3.png" },
        ];
    }
    SearchbarWithImagesPage.prototype.ngOnInit = function () {
    };
    SearchbarWithImagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchbar-with-images',
            template: __webpack_require__(/*! ./searchbar-with-images.page.html */ "./src/app/searchbar-with-images/searchbar-with-images.page.html"),
            styles: [__webpack_require__(/*! ./searchbar-with-images.page.scss */ "./src/app/searchbar-with-images/searchbar-with-images.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchbarWithImagesPage);
    return SearchbarWithImagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=searchbar-with-images-searchbar-with-images-module.js.map