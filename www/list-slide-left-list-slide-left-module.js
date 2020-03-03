(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-slide-left-list-slide-left-module"],{

/***/ "./src/app/list-slide-left/list-slide-left.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/list-slide-left/list-slide-left.module.ts ***!
  \***********************************************************/
/*! exports provided: ListSlideLeftPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSlideLeftPageModule", function() { return ListSlideLeftPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_slide_left_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-slide-left.page */ "./src/app/list-slide-left/list-slide-left.page.ts");







var routes = [
    {
        path: '',
        component: _list_slide_left_page__WEBPACK_IMPORTED_MODULE_6__["ListSlideLeftPage"]
    }
];
var ListSlideLeftPageModule = /** @class */ (function () {
    function ListSlideLeftPageModule() {
    }
    ListSlideLeftPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_slide_left_page__WEBPACK_IMPORTED_MODULE_6__["ListSlideLeftPage"]]
        })
    ], ListSlideLeftPageModule);
    return ListSlideLeftPageModule;
}());



/***/ }),

/***/ "./src/app/list-slide-left/list-slide-left.page.html":
/*!***********************************************************!*\
  !*** ./src/app/list-slide-left/list-slide-left.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>List Slide Left</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- list with multiple iterations -->\n  <ion-list>\n    <!-- @itemState for animation  -->\n    <ion-item @itemState *ngFor=\"let mProduct of items\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{mProduct.img}}\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ mProduct.text }}</h2>\n        <p>{{mProduct.text1}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/list-slide-left/list-slide-left.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/list-slide-left/list-slide-left.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtc2xpZGUtbGVmdC9saXN0LXNsaWRlLWxlZnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/list-slide-left/list-slide-left.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-slide-left/list-slide-left.page.ts ***!
  \*********************************************************/
/*! exports provided: ListSlideLeftPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSlideLeftPage", function() { return ListSlideLeftPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


 //animation packages
var ListSlideLeftPage = /** @class */ (function () {
    function ListSlideLeftPage() {
        var _this = this;
        this.items1 = [
            { text: "Song Play 1", img: "assets/images/Pictures/faces-images/face_image1.png", },
            { text: "Song Play 2", img: "assets/images/Pictures/faces-images/face_image2.png", },
            { text: "Song Play 3", img: "assets/images/Pictures/faces-images/face_image3.png", },
            { text: "Song Play 4", img: "assets/images/Pictures/faces-images/face_image4.png", },
            { text: "Song Play 5", img: "assets/images/Pictures/faces-images/face_image5.png", },
            { text: "Song Play 6", img: "assets/images/Pictures/faces-images/face_image6.png", },
            { text: "Song Play 7", img: "assets/images/Pictures/faces-images/face_image1.png", },
            { text: "Song Play 8", img: "assets/images/Pictures/faces-images/face_image2.png", },
            { text: "Song Play 9", img: "assets/images/Pictures/faces-images/face_image3.png", },
            { text: "Song Play 10", img: "assets/images/Pictures/faces-images/face_image4.png", },
            { text: "Song Play 11", img: "assets/images/Pictures/faces-images/face_image5.png", },
            { text: "Song Play 12", img: "assets/images/Pictures/faces-images/face_image6.png", },
            { text: "Song Play 13", img: "assets/images/Pictures/faces-images/face_image5.png", },
            { text: "Song Play 14", img: "assets/images/Pictures/faces-images/face_image4.png", },
            { text: "Song Play 15", img: "assets/images/Pictures/faces-images/face_image3.png", },
            { text: "Song Play 16", img: "assets/images/Pictures/faces-images/face_image2.png", },
            { text: "Song Play 17", img: "assets/images/Pictures/faces-images/face_image1.png", },
            { text: "Song Play 18", img: "assets/images/Pictures/faces-images/face_image3.png", },
            { text: "Song Play 19", img: "assets/images/Pictures/faces-images/face_image4.png", },
            { text: "Song Play 20", img: "assets/images/Pictures/faces-images/face_image6.png", },
        ];
        this.items = [];
        var _loop_1 = function (i) {
            setTimeout(function () {
                _this.items.push(_this.items1[i]);
            }, 250 * i);
        };
        //loop for iteration on items with animation after 0.25 sec
        for (var i = 0; i < 20; i++) {
            _loop_1(i);
        }
    }
    ListSlideLeftPage.prototype.ngOnInit = function () { };
    ListSlideLeftPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-slide-left',
            template: __webpack_require__(/*! ./list-slide-left.page.html */ "./src/app/list-slide-left/list-slide-left.page.html"),
            //for animation purpose
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3500ms ease-out')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./list-slide-left.page.scss */ "./src/app/list-slide-left/list-slide-left.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListSlideLeftPage);
    return ListSlideLeftPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-slide-left-list-slide-left-module.js.map