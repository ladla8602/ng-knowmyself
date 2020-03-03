(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-slide-right-list-slide-right-module"],{

/***/ "./src/app/list-slide-right/list-slide-right.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/list-slide-right/list-slide-right.module.ts ***!
  \*************************************************************/
/*! exports provided: ListSlideRightPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSlideRightPageModule", function() { return ListSlideRightPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_slide_right_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-slide-right.page */ "./src/app/list-slide-right/list-slide-right.page.ts");







var routes = [
    {
        path: '',
        component: _list_slide_right_page__WEBPACK_IMPORTED_MODULE_6__["ListSlideRightPage"]
    }
];
var ListSlideRightPageModule = /** @class */ (function () {
    function ListSlideRightPageModule() {
    }
    ListSlideRightPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_slide_right_page__WEBPACK_IMPORTED_MODULE_6__["ListSlideRightPage"]]
        })
    ], ListSlideRightPageModule);
    return ListSlideRightPageModule;
}());



/***/ }),

/***/ "./src/app/list-slide-right/list-slide-right.page.html":
/*!*************************************************************!*\
  !*** ./src/app/list-slide-right/list-slide-right.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>list Slide Rigth</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- list with multiple iterations -->\n  <ion-list>\n    <!-- @itemState for animation  -->\n    <ion-item @itemState *ngFor=\"let mProduct of items\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{mProduct.img}}\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ mProduct.text }}</h2>\n        <p>{{mProduct.text1}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/list-slide-right/list-slide-right.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/list-slide-right/list-slide-right.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtc2xpZGUtcmlnaHQvbGlzdC1zbGlkZS1yaWdodC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/list-slide-right/list-slide-right.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/list-slide-right/list-slide-right.page.ts ***!
  \***********************************************************/
/*! exports provided: ListSlideRightPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSlideRightPage", function() { return ListSlideRightPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


 //animation packages
var ListSlideRightPage = /** @class */ (function () {
    function ListSlideRightPage() {
        var _this = this;
        this.items1 = [
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
            { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
            { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
            { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
            { text: "Polo shirt men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png" },
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
            { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
            { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
            { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
            { text: "Polo shirt men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png" },
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
            { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
            { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
            { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
            { text: "Polo shirt men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png" },
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
            { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
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
    ListSlideRightPage.prototype.ngOnInit = function () { };
    ListSlideRightPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-slide-right',
            template: __webpack_require__(/*! ./list-slide-right.page.html */ "./src/app/list-slide-right/list-slide-right.page.html"),
            //for animation purpose
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./list-slide-right.page.scss */ "./src/app/list-slide-right/list-slide-right.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListSlideRightPage);
    return ListSlideRightPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-slide-right-list-slide-right-module.js.map