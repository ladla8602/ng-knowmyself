(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toggle-with-avatar-toggle-with-avatar-module"],{

/***/ "./src/app/toggle-with-avatar/toggle-with-avatar.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/toggle-with-avatar/toggle-with-avatar.module.ts ***!
  \*****************************************************************/
/*! exports provided: ToggleWithAvatarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleWithAvatarPageModule", function() { return ToggleWithAvatarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _toggle_with_avatar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle-with-avatar.page */ "./src/app/toggle-with-avatar/toggle-with-avatar.page.ts");







var routes = [
    {
        path: '',
        component: _toggle_with_avatar_page__WEBPACK_IMPORTED_MODULE_6__["ToggleWithAvatarPage"]
    }
];
var ToggleWithAvatarPageModule = /** @class */ (function () {
    function ToggleWithAvatarPageModule() {
    }
    ToggleWithAvatarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_toggle_with_avatar_page__WEBPACK_IMPORTED_MODULE_6__["ToggleWithAvatarPage"]]
        })
    ], ToggleWithAvatarPageModule);
    return ToggleWithAvatarPageModule;
}());



/***/ }),

/***/ "./src/app/toggle-with-avatar/toggle-with-avatar.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/toggle-with-avatar/toggle-with-avatar.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\" fill=\"clear\" routerLink=\"/component-details\" routerDirection=\"backward\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n    <ion-title>Toggle With Avatar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.img}}\">\n      </ion-avatar>\n      <ion-label>\n        <h3>{{item.text}}</h3>\n        <p>{{item.short_des}}</p>\n      </ion-label>\n      <!-- toggle button -->\n      <ion-toggle> </ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/toggle-with-avatar/toggle-with-avatar.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/toggle-with-avatar/toggle-with-avatar.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC90b2dnbGUtd2l0aC1hdmF0YXIvdG9nZ2xlLXdpdGgtYXZhdGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RvZ2dsZS13aXRoLWF2YXRhci90b2dnbGUtd2l0aC1hdmF0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb257XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/toggle-with-avatar/toggle-with-avatar.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/toggle-with-avatar/toggle-with-avatar.page.ts ***!
  \***************************************************************/
/*! exports provided: ToggleWithAvatarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleWithAvatarPage", function() { return ToggleWithAvatarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToggleWithAvatarPage = /** @class */ (function () {
    function ToggleWithAvatarPage() {
        this.items = [
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
    ToggleWithAvatarPage.prototype.ngOnInit = function () {
    };
    ToggleWithAvatarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toggle-with-avatar',
            template: __webpack_require__(/*! ./toggle-with-avatar.page.html */ "./src/app/toggle-with-avatar/toggle-with-avatar.page.html"),
            styles: [__webpack_require__(/*! ./toggle-with-avatar.page.scss */ "./src/app/toggle-with-avatar/toggle-with-avatar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleWithAvatarPage);
    return ToggleWithAvatarPage;
}());



/***/ })

}]);
//# sourceMappingURL=toggle-with-avatar-toggle-with-avatar-module.js.map