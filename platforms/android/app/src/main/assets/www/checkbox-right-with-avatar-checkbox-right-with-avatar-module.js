(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkbox-right-with-avatar-checkbox-right-with-avatar-module"],{

/***/ "./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CheckboxRightWithAvatarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRightWithAvatarPageModule", function() { return CheckboxRightWithAvatarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkbox_right_with_avatar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox-right-with-avatar.page */ "./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.page.ts");







var routes = [
    {
        path: '',
        component: _checkbox_right_with_avatar_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxRightWithAvatarPage"]
    }
];
var CheckboxRightWithAvatarPageModule = /** @class */ (function () {
    function CheckboxRightWithAvatarPageModule() {
    }
    CheckboxRightWithAvatarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkbox_right_with_avatar_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxRightWithAvatarPage"]]
        })
    ], CheckboxRightWithAvatarPageModule);
    return CheckboxRightWithAvatarPageModule;
}());



/***/ }),

/***/ "./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> Checkbox Right Avatar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list>\n    <ion-item *ngFor=\"let game of items\" lines=\"full\">\n      <ion-avatar slot=\"end\">\n        <img src=\"{{game.img}}\" />\n      </ion-avatar>\n      <ion-label>\n        <p>\n          {{game.text}}\n        </p>\n      </ion-label>\n      <!-- checkbox with left position in item -->\n      <ion-checkbox slot=\"start\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-avatar {\n  border: solid lightgray;\n  border-width: 0.5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jaGVja2JveC1yaWdodC13aXRoLWF2YXRhci9jaGVja2JveC1yaWdodC13aXRoLWF2YXRhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGVja2JveC1yaWdodC13aXRoLWF2YXRhci9jaGVja2JveC1yaWdodC13aXRoLWF2YXRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjVweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.page.ts ***!
  \*******************************************************************************/
/*! exports provided: CheckboxRightWithAvatarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRightWithAvatarPage", function() { return CheckboxRightWithAvatarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxRightWithAvatarPage = /** @class */ (function () {
    function CheckboxRightWithAvatarPage() {
        this.items = [
            { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
            { text: "Girls dress ", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
            { text: "CellStand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
            { text: "Red a chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
            { text: "Polo shirt ", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png" },
            { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
            { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
            { text: "Cell Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", },
            { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
            { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png" },
        ];
    }
    CheckboxRightWithAvatarPage.prototype.ngOnInit = function () { };
    CheckboxRightWithAvatarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox-right-with-avatar',
            template: __webpack_require__(/*! ./checkbox-right-with-avatar.page.html */ "./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.page.html"),
            styles: [__webpack_require__(/*! ./checkbox-right-with-avatar.page.scss */ "./src/app/checkbox-right-with-avatar/checkbox-right-with-avatar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxRightWithAvatarPage);
    return CheckboxRightWithAvatarPage;
}());



/***/ })

}]);
//# sourceMappingURL=checkbox-right-with-avatar-checkbox-right-with-avatar-module.js.map