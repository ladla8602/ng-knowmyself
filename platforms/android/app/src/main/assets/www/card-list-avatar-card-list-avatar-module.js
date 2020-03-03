(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-list-avatar-card-list-avatar-module"],{

/***/ "./src/app/card-list-avatar/card-list-avatar.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/card-list-avatar/card-list-avatar.module.ts ***!
  \*************************************************************/
/*! exports provided: CardListAvatarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListAvatarPageModule", function() { return CardListAvatarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_list_avatar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-list-avatar.page */ "./src/app/card-list-avatar/card-list-avatar.page.ts");







var routes = [
    {
        path: '',
        component: _card_list_avatar_page__WEBPACK_IMPORTED_MODULE_6__["CardListAvatarPage"]
    }
];
var CardListAvatarPageModule = /** @class */ (function () {
    function CardListAvatarPageModule() {
    }
    CardListAvatarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_list_avatar_page__WEBPACK_IMPORTED_MODULE_6__["CardListAvatarPage"]]
        })
    ], CardListAvatarPageModule);
    return CardListAvatarPageModule;
}());



/***/ }),

/***/ "./src/app/card-list-avatar/card-list-avatar.page.html":
/*!*************************************************************!*\
  !*** ./src/app/card-list-avatar/card-list-avatar.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cards List Avatar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"contentClass\">\n  <!-- card with header and title inside with list loop as a child of card tag -->\n  <ion-card>\n    <ion-img src=\"assets/images/all-types.jpg\"></ion-img>\n    <ion-card-header>\n      <ion-card-title>Daily Use Accessories</ion-card-title>\n    </ion-card-header>\n    <ion-list>\n      <ion-item *ngFor=\"let p of items\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{p.img}}\" />\n        </ion-avatar>\n        <ion-label>\n          <ion-text>\n            {{p.text}}\n          </ion-text>\n          <ion-badge slot=\"end\">{{p.badgeValue}}</ion-badge>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/card-list-avatar/card-list-avatar.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/card-list-avatar/card-list-avatar.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card {\n  margin: 0; }\n  ion-content ion-card ion-item:last-child {\n    --border-width: 0 0 0 0; }\n  ion-content ion-card ion-item ion-badge {\n    float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jYXJkLWxpc3QtYXZhdGFyL2NhcmQtbGlzdC1hdmF0YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsU0FBUyxFQUFBO0VBRmpCO0lBSVksdUJBQWUsRUFBQTtFQUozQjtJQVFnQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJkLWxpc3QtYXZhdGFyL2NhcmQtbGlzdC1hdmF0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGlvbi1pdGVtOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgIGlvbi1iYWRnZXtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/card-list-avatar/card-list-avatar.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/card-list-avatar/card-list-avatar.page.ts ***!
  \***********************************************************/
/*! exports provided: CardListAvatarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListAvatarPage", function() { return CardListAvatarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardListAvatarPage = /** @class */ (function () {
    function CardListAvatarPage() {
        this.items = [
            { text: "Baby sleeping bed", badgeValue: "10", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
            { text: "Girls dress red floral", badgeValue: "25", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
            { text: "Cell Phone Stand", badgeValue: "20", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
            { text: "Red and black chair", badgeValue: "26", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
            { text: "Polo shirt men's wear", badgeValue: "37", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
            { text: "Ladies Jacket", badgeValue: "48", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", },
            { text: "Baby sleeping bed", badgeValue: "10", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
            { text: "Girls dress red floral", badgeValue: "25", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
            { text: "Cell Phone Stand", badgeValue: "20", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
            { text: "Red and black chair", badgeValue: "26", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
            { text: "Polo shirt men's wear", badgeValue: "37", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
            { text: "Ladies Jacket", badgeValue: "48", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", },
        ];
    }
    CardListAvatarPage.prototype.ngOnInit = function () {
    };
    CardListAvatarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-list-avatar',
            template: __webpack_require__(/*! ./card-list-avatar.page.html */ "./src/app/card-list-avatar/card-list-avatar.page.html"),
            styles: [__webpack_require__(/*! ./card-list-avatar.page.scss */ "./src/app/card-list-avatar/card-list-avatar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardListAvatarPage);
    return CardListAvatarPage;
}());



/***/ })

}]);
//# sourceMappingURL=card-list-avatar-card-list-avatar-module.js.map