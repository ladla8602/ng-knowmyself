(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["badge-card-badge-card-module"],{

/***/ "./src/app/badge-card/badge-card.module.ts":
/*!*************************************************!*\
  !*** ./src/app/badge-card/badge-card.module.ts ***!
  \*************************************************/
/*! exports provided: BadgeCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeCardPageModule", function() { return BadgeCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _badge_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badge-card.page */ "./src/app/badge-card/badge-card.page.ts");







var routes = [
    {
        path: '',
        component: _badge_card_page__WEBPACK_IMPORTED_MODULE_6__["BadgeCardPage"]
    }
];
var BadgeCardPageModule = /** @class */ (function () {
    function BadgeCardPageModule() {
    }
    BadgeCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_badge_card_page__WEBPACK_IMPORTED_MODULE_6__["BadgeCardPage"]]
        })
    ], BadgeCardPageModule);
    return BadgeCardPageModule;
}());



/***/ }),

/***/ "./src/app/badge-card/badge-card.page.html":
/*!*************************************************!*\
  !*** ./src/app/badge-card/badge-card.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <ion-card *ngFor=\"let item of items\">\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.img}}\" />\n      </ion-avatar>\n      <ion-label>\n        <h3>{{item.text}}</h3>\n        <p>{{item.dob}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-img src=\"{{item.img}}\"></ion-img>\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n        Whoa. This is heavy.</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col size=\"4\" no-padding>\n        <ion-button size=\"small\" color=\"primary\" fill=\"clear\">\n          <ion-icon name='thumbs-up'></ion-icon>\n          12 Likes\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"5\" no-padding>\n        <ion-button color=\"primary\" size=\"small\" fill=\"clear\">\n          <ion-icon name='text'></ion-icon>\n          4 Comments\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\" no-padding>\n        <ion-button size=\"small\" fill=\"clear\">\n          11h ago\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/badge-card/badge-card.page.scss":
/*!*************************************************!*\
  !*** ./src/app/badge-card/badge-card.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card {\n  margin: 0; }\n  ion-content ion-card ion-row ion-col {\n    text-align: start; }\n  ion-content ion-card ion-row ion-col:last-child {\n    text-align: center; }\n  ion-content ion-card ion-row ion-col:first-child {\n    text-align: end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9iYWRnZS1jYXJkL2JhZGdlLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsU0FBUSxFQUFBO0VBRmhCO0lBS2dCLGlCQUFpQixFQUFBO0VBTGpDO0lBUWdCLGtCQUFrQixFQUFBO0VBUmxDO0lBV2dCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JhZGdlLWNhcmQvYmFkZ2UtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY29sOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWNvbDpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/badge-card/badge-card.page.ts":
/*!***********************************************!*\
  !*** ./src/app/badge-card/badge-card.page.ts ***!
  \***********************************************/
/*! exports provided: BadgeCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeCardPage", function() { return BadgeCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgeCardPage = /** @class */ (function () {
    function BadgeCardPage() {
        this.items = [
            { text: "Maria James", img: 'assets/images/Pictures/gallery-images/gallery_image1.png', dob: "November 5, 2015" },
            { text: "Jeans Stress", img: 'assets/images/Pictures/gallery-images/gallery_image2.png', dob: "November 5, 2015" },
            { text: "Emma Christian", img: 'assets/images/Pictures/gallery-images/gallery_image3.png', dob: "November 5, 2015" },
            { text: "Julia Jan", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', dob: "November 5, 2015" },
        ];
    }
    BadgeCardPage.prototype.ngOnInit = function () {
    };
    BadgeCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badge-card',
            template: __webpack_require__(/*! ./badge-card.page.html */ "./src/app/badge-card/badge-card.page.html"),
            styles: [__webpack_require__(/*! ./badge-card.page.scss */ "./src/app/badge-card/badge-card.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeCardPage);
    return BadgeCardPage;
}());



/***/ })

}]);
//# sourceMappingURL=badge-card-badge-card-module.js.map