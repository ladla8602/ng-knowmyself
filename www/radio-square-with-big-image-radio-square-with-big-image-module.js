(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["radio-square-with-big-image-radio-square-with-big-image-module"],{

/***/ "./src/app/radio-square-with-big-image/radio-square-with-big-image.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/radio-square-with-big-image/radio-square-with-big-image.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RadioSquareWithBigImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioSquareWithBigImagePageModule", function() { return RadioSquareWithBigImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _radio_square_with_big_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-square-with-big-image.page */ "./src/app/radio-square-with-big-image/radio-square-with-big-image.page.ts");







var routes = [
    {
        path: '',
        component: _radio_square_with_big_image_page__WEBPACK_IMPORTED_MODULE_6__["RadioSquareWithBigImagePage"]
    }
];
var RadioSquareWithBigImagePageModule = /** @class */ (function () {
    function RadioSquareWithBigImagePageModule() {
    }
    RadioSquareWithBigImagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_radio_square_with_big_image_page__WEBPACK_IMPORTED_MODULE_6__["RadioSquareWithBigImagePage"]]
        })
    ], RadioSquareWithBigImagePageModule);
    return RadioSquareWithBigImagePageModule;
}());



/***/ }),

/***/ "./src/app/radio-square-with-big-image/radio-square-with-big-image.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/radio-square-with-big-image/radio-square-with-big-image.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Radio Thumbnail</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list radio-group>\n        <!-- all iterated are in radio group so only one item is choosen at one time -->\n        <ion-radio-group>\n            <ion-item *ngFor=\"let item of products\">\n                <ion-thumbnail slot=\"start\">\n                    <img src=\"{{item.img}}\" />\n                </ion-thumbnail>\n                <ion-label>\n                    <h3>{{item.text}}</h3>\n                    <p>{{item.short_des}}</p>\n                </ion-label>\n                <!-- for radio button with right position -->\n                <ion-radio slot=\"end\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/radio-square-with-big-image/radio-square-with-big-image.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/radio-square-with-big-image/radio-square-with-big-image.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhZGlvLXNxdWFyZS13aXRoLWJpZy1pbWFnZS9yYWRpby1zcXVhcmUtd2l0aC1iaWctaW1hZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/radio-square-with-big-image/radio-square-with-big-image.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/radio-square-with-big-image/radio-square-with-big-image.page.ts ***!
  \*********************************************************************************/
/*! exports provided: RadioSquareWithBigImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioSquareWithBigImagePage", function() { return RadioSquareWithBigImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioSquareWithBigImagePage = /** @class */ (function () {
    function RadioSquareWithBigImagePage() {
        this.products = [
            { text: "Jack William", short_des: "It's an amazing tonigth", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Christian James", short_des: "Good Morning, Have a nice day ", img: "assets/images/Pictures/faces-images/face_image2.png" },
            { text: "Maria Jeans", short_des: "Hye Maria, How's you ? ", img: "assets/images/Pictures/faces-images/face_image3.png" },
            { text: "Andrew Straus", short_des: "Hey Dude, What's going on ", img: "assets/images/Pictures/faces-images/face_image4.png" },
            { text: "Mark Henry", short_des: " It's happines you are good ", img: "assets/images/Pictures/faces-images/face_image5.png" },
            { text: "Tom Jack", short_des: "It's an amazing tonigth", img: "assets/images/Pictures/faces-images/face_image6.png" },
            { text: "Williamson Steward", short_des: " Good Morning, Have a nice day ", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Jaon Broad", short_des: " Hye Maria, How's you ? ", img: "assets/images/Pictures/faces-images/face_image2.png" },
            { text: "Jack William", short_des: "It's happines you are good ", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Christian James", short_des: " It's happines you are good ", img: "assets/images/Pictures/faces-images/face_image2.png" },
            { text: "Maria Jeans", short_des: "Good Afternoon, Have a nice day ", img: "assets/images/Pictures/faces-images/face_image3.png" },
            { text: "Andrew Straus", short_des: " It's happines you are good ", img: "assets/images/Pictures/faces-images/face_image4.png" },
            { text: "Mark Henry", short_des: "Hey Dude, What's going on ?", img: "assets/images/Pictures/faces-images/face_image5.png" },
            { text: "Tom Jack", short_des: "It's an amazing tonigth", img: "assets/images/Pictures/faces-images/face_image6.png" },
            { text: "Williamson Steward", short_des: "Good Morning, Have a nice day ", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Jaon Broad", short_des: "Hey Dude, What's going on ?", img: "assets/images/Pictures/faces-images/face_image2.png" }
        ];
    }
    RadioSquareWithBigImagePage.prototype.ngOnInit = function () {
    };
    RadioSquareWithBigImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-square-with-big-image',
            template: __webpack_require__(/*! ./radio-square-with-big-image.page.html */ "./src/app/radio-square-with-big-image/radio-square-with-big-image.page.html"),
            styles: [__webpack_require__(/*! ./radio-square-with-big-image.page.scss */ "./src/app/radio-square-with-big-image/radio-square-with-big-image.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioSquareWithBigImagePage);
    return RadioSquareWithBigImagePage;
}());



/***/ })

}]);
//# sourceMappingURL=radio-square-with-big-image-radio-square-with-big-image-module.js.map