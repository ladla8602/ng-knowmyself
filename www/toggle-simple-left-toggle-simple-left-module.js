(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toggle-simple-left-toggle-simple-left-module"],{

/***/ "./src/app/toggle-simple-left/toggle-simple-left.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/toggle-simple-left/toggle-simple-left.module.ts ***!
  \*****************************************************************/
/*! exports provided: ToggleSimpleLeftPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSimpleLeftPageModule", function() { return ToggleSimpleLeftPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _toggle_simple_left_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle-simple-left.page */ "./src/app/toggle-simple-left/toggle-simple-left.page.ts");







var routes = [
    {
        path: '',
        component: _toggle_simple_left_page__WEBPACK_IMPORTED_MODULE_6__["ToggleSimpleLeftPage"]
    }
];
var ToggleSimpleLeftPageModule = /** @class */ (function () {
    function ToggleSimpleLeftPageModule() {
    }
    ToggleSimpleLeftPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_toggle_simple_left_page__WEBPACK_IMPORTED_MODULE_6__["ToggleSimpleLeftPage"]]
        })
    ], ToggleSimpleLeftPageModule);
    return ToggleSimpleLeftPageModule;
}());



/***/ }),

/***/ "./src/app/toggle-simple-left/toggle-simple-left.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/toggle-simple-left/toggle-simple-left.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Toggle Simple Left</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item lines=\"full\" *ngFor=\"let item of items\">\n            <ion-avatar slot=\"start\">\n                <img src=\"{{item.img}}\">\n            </ion-avatar>\n            <!-- toggle button -->\n            <ion-toggle> </ion-toggle>\n            <ion-label>\n                <h3>{{item.text}}</h3>\n                <p>{{item.short_des}}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/toggle-simple-left/toggle-simple-left.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/toggle-simple-left/toggle-simple-left.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZ2dsZS1zaW1wbGUtbGVmdC90b2dnbGUtc2ltcGxlLWxlZnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/toggle-simple-left/toggle-simple-left.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/toggle-simple-left/toggle-simple-left.page.ts ***!
  \***************************************************************/
/*! exports provided: ToggleSimpleLeftPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSimpleLeftPage", function() { return ToggleSimpleLeftPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToggleSimpleLeftPage = /** @class */ (function () {
    function ToggleSimpleLeftPage() {
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
    ToggleSimpleLeftPage.prototype.ngOnInit = function () {
    };
    ToggleSimpleLeftPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toggle-simple-left',
            template: __webpack_require__(/*! ./toggle-simple-left.page.html */ "./src/app/toggle-simple-left/toggle-simple-left.page.html"),
            styles: [__webpack_require__(/*! ./toggle-simple-left.page.scss */ "./src/app/toggle-simple-left/toggle-simple-left.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleSimpleLeftPage);
    return ToggleSimpleLeftPage;
}());



/***/ })

}]);
//# sourceMappingURL=toggle-simple-left-toggle-simple-left-module.js.map