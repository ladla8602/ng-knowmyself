(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-timeline-theme-two-card-timeline-theme-two-module"],{

/***/ "./src/app/card-timeline-theme-two/card-timeline-theme-two.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/card-timeline-theme-two/card-timeline-theme-two.module.ts ***!
  \***************************************************************************/
/*! exports provided: CardTimelineThemeTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTimelineThemeTwoPageModule", function() { return CardTimelineThemeTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_timeline_theme_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-timeline-theme-two.page */ "./src/app/card-timeline-theme-two/card-timeline-theme-two.page.ts");







var routes = [
    {
        path: '',
        component: _card_timeline_theme_two_page__WEBPACK_IMPORTED_MODULE_6__["CardTimelineThemeTwoPage"]
    }
];
var CardTimelineThemeTwoPageModule = /** @class */ (function () {
    function CardTimelineThemeTwoPageModule() {
    }
    CardTimelineThemeTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_timeline_theme_two_page__WEBPACK_IMPORTED_MODULE_6__["CardTimelineThemeTwoPage"]]
        })
    ], CardTimelineThemeTwoPageModule);
    return CardTimelineThemeTwoPageModule;
}());



/***/ }),

/***/ "./src/app/card-timeline-theme-two/card-timeline-theme-two.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/card-timeline-theme-two/card-timeline-theme-two.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Cards Timeline Theme2</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor=\"let item of items\">\n        <img src=\"{{item.image}}\" />\n        <ion-card-header>\n            <ion-card-title>{{item.title}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            {{item.para}}\n        </ion-card-content>\n        <ion-list>\n            <ion-item lines=\"full\">\n                <ion-icon slot=\"start\" name=\"musical-notes\"></ion-icon>\n                <ion-label>Albums</ion-label>\n                <ion-badge slot=\"end\">{{item.albums}}</ion-badge>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-icon slot=\"start\" name='logo-twitter'></ion-icon>\n                <ion-label>Follwers</ion-label>\n                <ion-badge slot=\"end\">{{item.followers}}</ion-badge>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/card-timeline-theme-two/card-timeline-theme-two.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/card-timeline-theme-two/card-timeline-theme-two.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card {\n  margin: 0 0 16px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jYXJkLXRpbWVsaW5lLXRoZW1lLXR3by9jYXJkLXRpbWVsaW5lLXRoZW1lLXR3by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcmQtdGltZWxpbmUtdGhlbWUtdHdvL2NhcmQtdGltZWxpbmUtdGhlbWUtdHdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/card-timeline-theme-two/card-timeline-theme-two.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/card-timeline-theme-two/card-timeline-theme-two.page.ts ***!
  \*************************************************************************/
/*! exports provided: CardTimelineThemeTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTimelineThemeTwoPage", function() { return CardTimelineThemeTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardTimelineThemeTwoPage = /** @class */ (function () {
    function CardTimelineThemeTwoPage() {
        this.items = [
            { image: "assets/images/fashion/fashion1.jpg", title: "Susan", para: "Susan is an American singer, actress, dancer and producer. In 1991, Lopez began appearing as a Fly Girl dancer on In Living Color, where she remained a regular until she decided to pursue an acting career in 1993...", albums: "100", followers: "10.50M" },
            { image: "assets/images/fashion/fashion2.jpg", title: "Maria", para: "Susan is an American singer, actress, dancer and producer. In 1991, Lopez began appearing as a Fly Girl dancer on In Living Color, where she remained a regular until she decided to pursue an acting career in 1993...", albums: "300", followers: "2.50M" },
            { image: "assets/images/fashion/fashion11.jpg", title: "Emma", para: "Susan is an American singer, actress, dancer and producer. In 1991, Lopez began appearing as a Fly Girl dancer on In Living Color, where she remained a regular until she decided to pursue an acting career in 1993...", albums: "670", followers: "1.10M" },
        ];
    }
    CardTimelineThemeTwoPage.prototype.ngOnInit = function () {
    };
    CardTimelineThemeTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-timeline-theme-two',
            template: __webpack_require__(/*! ./card-timeline-theme-two.page.html */ "./src/app/card-timeline-theme-two/card-timeline-theme-two.page.html"),
            styles: [__webpack_require__(/*! ./card-timeline-theme-two.page.scss */ "./src/app/card-timeline-theme-two/card-timeline-theme-two.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardTimelineThemeTwoPage);
    return CardTimelineThemeTwoPage;
}());



/***/ })

}]);
//# sourceMappingURL=card-timeline-theme-two-card-timeline-theme-two-module.js.map