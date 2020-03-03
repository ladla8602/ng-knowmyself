(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-fade-in-list-fade-in-module"],{

/***/ "./src/app/list-fade-in/list-fade-in.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-fade-in/list-fade-in.module.ts ***!
  \*****************************************************/
/*! exports provided: ListFadeInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFadeInPageModule", function() { return ListFadeInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_fade_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-fade-in.page */ "./src/app/list-fade-in/list-fade-in.page.ts");







var routes = [
    {
        path: '',
        component: _list_fade_in_page__WEBPACK_IMPORTED_MODULE_6__["ListFadeInPage"]
    }
];
var ListFadeInPageModule = /** @class */ (function () {
    function ListFadeInPageModule() {
    }
    ListFadeInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_fade_in_page__WEBPACK_IMPORTED_MODULE_6__["ListFadeInPage"]]
        })
    ], ListFadeInPageModule);
    return ListFadeInPageModule;
}());



/***/ }),

/***/ "./src/app/list-fade-in/list-fade-in.page.html":
/*!*****************************************************!*\
  !*** ./src/app/list-fade-in/list-fade-in.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>List FadeIn</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- list with animation on iteration  -->\n  <ion-list>\n    <!-- @itemState for animation  -->\n    <ion-item @itemState *ngFor=\"let mProduct of items\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{mProduct.img}}\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ mProduct.text }}</h2>\n        <p>{{mProduct.text1}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/list-fade-in/list-fade-in.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/list-fade-in/list-fade-in.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtZmFkZS1pbi9saXN0LWZhZGUtaW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/list-fade-in/list-fade-in.page.ts":
/*!***************************************************!*\
  !*** ./src/app/list-fade-in/list-fade-in.page.ts ***!
  \***************************************************/
/*! exports provided: ListFadeInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFadeInPage", function() { return ListFadeInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


 //animation packages
var ListFadeInPage = /** @class */ (function () {
    function ListFadeInPage() {
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
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", },
            { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
            { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
            { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", },
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
    ListFadeInPage.prototype.ngOnInit = function () { };
    ListFadeInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-fade-in',
            template: __webpack_require__(/*! ./list-fade-in.page.html */ "./src/app/list-fade-in/list-fade-in.page.html"),
            //for animation purpose
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('idle', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: '0.3',
                        transform: 'scale(1)'
                    })),
                ])
            ],
            styles: [__webpack_require__(/*! ./list-fade-in.page.scss */ "./src/app/list-fade-in/list-fade-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListFadeInPage);
    return ListFadeInPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-fade-in-list-fade-in-module.js.map