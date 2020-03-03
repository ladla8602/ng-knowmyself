(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-list-simple-card-list-simple-module"],{

/***/ "./src/app/card-list-simple/card-list-simple.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/card-list-simple/card-list-simple.module.ts ***!
  \*************************************************************/
/*! exports provided: CardListSimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListSimplePageModule", function() { return CardListSimplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_list_simple_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-list-simple.page */ "./src/app/card-list-simple/card-list-simple.page.ts");







var routes = [
    {
        path: '',
        component: _card_list_simple_page__WEBPACK_IMPORTED_MODULE_6__["CardListSimplePage"]
    }
];
var CardListSimplePageModule = /** @class */ (function () {
    function CardListSimplePageModule() {
    }
    CardListSimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_list_simple_page__WEBPACK_IMPORTED_MODULE_6__["CardListSimplePage"]]
        })
    ], CardListSimplePageModule);
    return CardListSimplePageModule;
}());



/***/ }),

/***/ "./src/app/card-list-simple/card-list-simple.page.html":
/*!*************************************************************!*\
  !*** ./src/app/card-list-simple/card-list-simple.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Card List Simple</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- card with header and title inside having images with title and subtitle on it with iterations -->\n  <ion-card>\n    <ion-img src=\"assets/images/fashion-types.jpeg\"></ion-img>\n    <ion-card-header>\n      <ion-card-title>Fashion Accessories</ion-card-title>\n    </ion-card-header>\n    <ion-list>\n      <ion-item *ngFor=\"let p of items\" lines=\"full\">\n        <ion-text>\n          {{p.text}}\n        </ion-text>\n        <ion-badge slot=\"end\">{{p.badgeValue}}</ion-badge>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/card-list-simple/card-list-simple.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/card-list-simple/card-list-simple.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card {\n  margin: 0; }\n  ion-content ion-card ion-item:last-child {\n    --border-width: 0 0 0 0; }\n  ion-content ion-card ion-card-header {\n    padding-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jYXJkLWxpc3Qtc2ltcGxlL2NhcmQtbGlzdC1zaW1wbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsU0FBUyxFQUFBO0VBRmpCO0lBSVksdUJBQWUsRUFBQTtFQUozQjtJQU9ZLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FyZC1saXN0LXNpbXBsZS9jYXJkLWxpc3Qtc2ltcGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBpb24taXRlbTpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/card-list-simple/card-list-simple.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/card-list-simple/card-list-simple.page.ts ***!
  \***********************************************************/
/*! exports provided: CardListSimplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListSimplePage", function() { return CardListSimplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardListSimplePage = /** @class */ (function () {
    function CardListSimplePage() {
        this.items = [
            { text: "Clothes", badgeValue: "10" },
            { text: "Camera", badgeValue: "25" },
            { text: "Shoes", badgeValue: "20" },
            { text: "Glasses", badgeValue: "26" },
            { text: "Bags", badgeValue: "37" },
            { text: "Mobile", badgeValue: "48" },
            { text: "Lipsticks", badgeValue: "12" },
            { text: "Pefumes", badgeValue: "54" },
            { text: "Clothes", badgeValue: "23" },
            { text: "Glasses", badgeValue: "66" },
            { text: "Phones", badgeValue: "47" },
            { text: "Mobile", badgeValue: "48" },
            { text: "Lipsticks", badgeValue: "12" },
            { text: "Pefumes", badgeValue: "54" },
            { text: "Clothes", badgeValue: "23" },
            { text: "Glasses", badgeValue: "66" },
            { text: "Phones", badgeValue: "47" },
            { text: "Wrist Watch", badgeValue: "20" },
        ];
    }
    CardListSimplePage.prototype.ngOnInit = function () {
    };
    CardListSimplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-list-simple',
            template: __webpack_require__(/*! ./card-list-simple.page.html */ "./src/app/card-list-simple/card-list-simple.page.html"),
            styles: [__webpack_require__(/*! ./card-list-simple.page.scss */ "./src/app/card-list-simple/card-list-simple.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardListSimplePage);
    return CardListSimplePage;
}());



/***/ })

}]);
//# sourceMappingURL=card-list-simple-card-list-simple-module.js.map