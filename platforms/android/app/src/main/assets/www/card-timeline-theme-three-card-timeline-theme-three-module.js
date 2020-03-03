(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-timeline-theme-three-card-timeline-theme-three-module"],{

/***/ "./src/app/card-timeline-theme-three/card-timeline-theme-three.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/card-timeline-theme-three/card-timeline-theme-three.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CardTimelineThemeThreePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTimelineThemeThreePageModule", function() { return CardTimelineThemeThreePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_timeline_theme_three_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-timeline-theme-three.page */ "./src/app/card-timeline-theme-three/card-timeline-theme-three.page.ts");







var routes = [
    {
        path: '',
        component: _card_timeline_theme_three_page__WEBPACK_IMPORTED_MODULE_6__["CardTimelineThemeThreePage"]
    }
];
var CardTimelineThemeThreePageModule = /** @class */ (function () {
    function CardTimelineThemeThreePageModule() {
    }
    CardTimelineThemeThreePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_timeline_theme_three_page__WEBPACK_IMPORTED_MODULE_6__["CardTimelineThemeThreePage"]]
        })
    ], CardTimelineThemeThreePageModule);
    return CardTimelineThemeThreePageModule;
}());



/***/ }),

/***/ "./src/app/card-timeline-theme-three/card-timeline-theme-three.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/card-timeline-theme-three/card-timeline-theme-three.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Cards Timeline Theme 3</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <!-- card with content and item with person profile  -->\n    <ion-card *ngFor=\"let item of items\">\n        <ion-img src=\"{{item.img}}\"></ion-img>\n        <ion-card-content>\n            <ion-card-title>\n                {{item.text}}\n            </ion-card-title>\n            <p>The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.</p>\n        </ion-card-content>\n        <ion-row>\n            <ion-col size=\"4\" no-padding>\n                <ion-button size=\"small\" color=\"primary\" fill=\"clear\">\n                    <ion-icon name='star'></ion-icon>\n                    Favorite\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"5\" no-padding>\n                <ion-button color=\"primary\" size=\"small\" fill=\"clear\">\n                    <ion-icon name='musical-notes'></ion-icon>\n                    Listen\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"3\" no-padding>\n                <ion-button size=\"small\" color=\"primary\" fill=\"clear\">\n                    <ion-icon name='share-alt'></ion-icon>\n                    Share\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/card-timeline-theme-three/card-timeline-theme-three.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/card-timeline-theme-three/card-timeline-theme-three.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card {\n  margin: 0; }\n  ion-content ion-card ion-row ion-col {\n    text-align: center; }\n  ion-content ion-card ion-row ion-col:last-child {\n    text-align: center; }\n  ion-content ion-card ion-row ion-col:first-child {\n    text-align: end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jYXJkLXRpbWVsaW5lLXRoZW1lLXRocmVlL2NhcmQtdGltZWxpbmUtdGhlbWUtdGhyZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksU0FBUSxFQUFBO0VBRlo7SUFLUSxrQkFBa0IsRUFBQTtFQUwxQjtJQVFRLGtCQUFrQixFQUFBO0VBUjFCO0lBV1EsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FyZC10aW1lbGluZS10aGVtZS10aHJlZS9jYXJkLXRpbWVsaW5lLXRoZW1lLXRocmVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIGlvbi1jYXJke1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBpb24tcm93e1xyXG4gICAgICBpb24tY29se1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBpb24tY29sOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1jb2w6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/card-timeline-theme-three/card-timeline-theme-three.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/card-timeline-theme-three/card-timeline-theme-three.page.ts ***!
  \*****************************************************************************/
/*! exports provided: CardTimelineThemeThreePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTimelineThemeThreePage", function() { return CardTimelineThemeThreePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardTimelineThemeThreePage = /** @class */ (function () {
    function CardTimelineThemeThreePage() {
        this.items = [
            { text: "Maria James", img: 'assets/images/Pictures/gallery-images/gallery_image1.png', dob: "November 5, 2015" },
            { text: "Jeans Stress", img: 'assets/images/Pictures/gallery-images/gallery_image2.png', dob: "November 5, 2015" },
            { text: "Emma Christian", img: 'assets/images/Pictures/gallery-images/gallery_image3.png', dob: "November 5, 2015" },
            { text: "Julia Jan", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', dob: "November 5, 2015" },
        ];
    }
    CardTimelineThemeThreePage.prototype.ngOnInit = function () {
    };
    CardTimelineThemeThreePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-timeline-theme-three',
            template: __webpack_require__(/*! ./card-timeline-theme-three.page.html */ "./src/app/card-timeline-theme-three/card-timeline-theme-three.page.html"),
            styles: [__webpack_require__(/*! ./card-timeline-theme-three.page.scss */ "./src/app/card-timeline-theme-three/card-timeline-theme-three.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardTimelineThemeThreePage);
    return CardTimelineThemeThreePage;
}());



/***/ })

}]);
//# sourceMappingURL=card-timeline-theme-three-card-timeline-theme-three-module.js.map