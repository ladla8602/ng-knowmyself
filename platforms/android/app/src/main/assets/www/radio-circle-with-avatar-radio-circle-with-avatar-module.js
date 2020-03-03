(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["radio-circle-with-avatar-radio-circle-with-avatar-module"],{

/***/ "./src/app/radio-circle-with-avatar/radio-circle-with-avatar.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/radio-circle-with-avatar/radio-circle-with-avatar.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RadioCircleWithAvatarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioCircleWithAvatarPageModule", function() { return RadioCircleWithAvatarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _radio_circle_with_avatar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-circle-with-avatar.page */ "./src/app/radio-circle-with-avatar/radio-circle-with-avatar.page.ts");







var routes = [
    {
        path: '',
        component: _radio_circle_with_avatar_page__WEBPACK_IMPORTED_MODULE_6__["RadioCircleWithAvatarPage"]
    }
];
var RadioCircleWithAvatarPageModule = /** @class */ (function () {
    function RadioCircleWithAvatarPageModule() {
    }
    RadioCircleWithAvatarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_radio_circle_with_avatar_page__WEBPACK_IMPORTED_MODULE_6__["RadioCircleWithAvatarPage"]]
        })
    ], RadioCircleWithAvatarPageModule);
    return RadioCircleWithAvatarPageModule;
}());



/***/ }),

/***/ "./src/app/radio-circle-with-avatar/radio-circle-with-avatar.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/radio-circle-with-avatar/radio-circle-with-avatar.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Radio with avatar</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list radio-group>\n        <!-- all iterated are in radio group so only one item is choosen at one time -->\n        <ion-radio-group>\n            <ion-item *ngFor=\"let item of products\">\n                <ion-avatar slot=\"start\">\n                    <img src=\"{{item.image}}\" />\n                </ion-avatar>\n                <ion-label>{{ item.name }} </ion-label>\n                <!-- for radio button with right position -->\n                <ion-radio slot=\"end\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/radio-circle-with-avatar/radio-circle-with-avatar.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/radio-circle-with-avatar/radio-circle-with-avatar.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhZGlvLWNpcmNsZS13aXRoLWF2YXRhci9yYWRpby1jaXJjbGUtd2l0aC1hdmF0YXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/radio-circle-with-avatar/radio-circle-with-avatar.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/radio-circle-with-avatar/radio-circle-with-avatar.page.ts ***!
  \***************************************************************************/
/*! exports provided: RadioCircleWithAvatarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioCircleWithAvatarPage", function() { return RadioCircleWithAvatarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioCircleWithAvatarPage = /** @class */ (function () {
    function RadioCircleWithAvatarPage() {
        this.products = [
            { image: "assets/images/Pictures/faces-images/face_image1.png", name: "Emma Watson", },
            { image: "assets/images/Pictures/faces-images/face_image2.png", name: "Alina Jason", },
            { image: "assets/images/Pictures/faces-images/face_image3.png", name: "Leta James", },
            { image: "assets/images/Pictures/faces-images/face_image4.png", name: "Maria Amber", },
            { image: "assets/images/Pictures/faces-images/face_image5.png", name: "Amber jeff", },
            { image: "assets/images/Pictures/faces-images/face_image6.png", name: "Leta James", },
            { image: "assets/images/Pictures/faces-images/face_image1.png", name: "Selina Pearls", },
            { image: "assets/images/Pictures/faces-images/face_image2.png", name: "Cardi Gelly", },
            { image: "assets/images/Pictures/faces-images/face_image3.png", name: "Amber jeff", },
            { image: "assets/images/Pictures/faces-images/face_image4.png", name: "Cardi Gelly", },
            { image: "assets/images/Pictures/faces-images/face_image5.png", name: "Emma Watson", },
            { image: "assets/images/Pictures/faces-images/face_image6.png", name: "Alina Jason", },
            { image: "assets/images/Pictures/faces-images/face_image1.png", name: "Leta James", },
            { image: "assets/images/Pictures/faces-images/face_image2.png", name: "Cardi Gelly", },
        ];
    }
    RadioCircleWithAvatarPage.prototype.ngOnInit = function () {
    };
    RadioCircleWithAvatarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-circle-with-avatar',
            template: __webpack_require__(/*! ./radio-circle-with-avatar.page.html */ "./src/app/radio-circle-with-avatar/radio-circle-with-avatar.page.html"),
            styles: [__webpack_require__(/*! ./radio-circle-with-avatar.page.scss */ "./src/app/radio-circle-with-avatar/radio-circle-with-avatar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioCircleWithAvatarPage);
    return RadioCircleWithAvatarPage;
}());



/***/ })

}]);
//# sourceMappingURL=radio-circle-with-avatar-radio-circle-with-avatar-module.js.map