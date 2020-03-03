(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segment-scrollable-header-icon-segment-scrollable-header-icon-module"],{

/***/ "./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: SegmentScrollableHeaderIconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentScrollableHeaderIconPageModule", function() { return SegmentScrollableHeaderIconPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _segment_scrollable_header_icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segment-scrollable-header-icon.page */ "./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.page.ts");







var routes = [
    {
        path: '',
        component: _segment_scrollable_header_icon_page__WEBPACK_IMPORTED_MODULE_6__["SegmentScrollableHeaderIconPage"]
    }
];
var SegmentScrollableHeaderIconPageModule = /** @class */ (function () {
    function SegmentScrollableHeaderIconPageModule() {
    }
    SegmentScrollableHeaderIconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_segment_scrollable_header_icon_page__WEBPACK_IMPORTED_MODULE_6__["SegmentScrollableHeaderIconPage"]]
        })
    ], SegmentScrollableHeaderIconPageModule);
    return SegmentScrollableHeaderIconPageModule;
}());



/***/ }),

/***/ "./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Segment Scrollable Header Icons</ion-title>\n  </ion-toolbar>\n  <!-- name of segment to access scrollable segment on runtime -->\n  <ion-segment scrollable [(ngModel)]=\"segments\">\n    <ion-segment-button value=\"segmentOne\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"segmentTwo\">\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"segmentThree\">\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"segmentFour\">\n      <ion-icon name=\"star\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"segmentFive\">\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"segmentSix\">\n      <ion-icon name=\"globe\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n</ion-header>\n\n<ion-content padding>\n  <!-- name of segment to access segment on runtime -->\n  <div [ngSwitch]=\"segments\">\n    <!-- segment one -->\n    <div *ngSwitchCase=\"'segmentOne'\">\n      <ion-slides @itemState [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let product of items\">\n          <ion-card>\n            <ion-card-content>\n              {{ product.name }} - ${{ product.price }}\n              <ion-img src=\"{{product.img}}\"></ion-img>\n              <ion-button expand=\"full\">Buy Now</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n      <ion-list>\n        <ion-item *ngFor=\"let mProduct of itemsList\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{mProduct.img}}\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ mProduct.text }}</h2>\n            <p>{{mProduct.text1}}</p>\n          </ion-label>\n          <ion-icon name=\"cart\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n    <!-- segment two -->\n    <div *ngSwitchCase=\"'segmentTwo'\">\n      <ion-slides @itemState [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let product of items\">\n          <ion-card>\n            <ion-card-content>\n              {{ product.name }} - ${{ product.price }}\n              <ion-img src=\"{{product.img}}\"></ion-img>\n              <ion-button expand=\"full\">Buy Now</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n      <ion-list>\n        <ion-item *ngFor=\"let mProduct of itemsList\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{mProduct.img}}\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ mProduct.text }}</h2>\n            <p>{{mProduct.text1}}</p>\n          </ion-label>\n          <ion-icon name=\"cart\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n    <!-- segment three -->\n    <div *ngSwitchCase=\"'segmentThree'\">\n      <ion-slides @itemState [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let product of items\">\n          <ion-card>\n            <ion-card-content>\n              {{ product.name }} - ${{ product.price }}\n              <ion-img src=\"{{product.img}}\"></ion-img>\n              <ion-button expand=\"full\">Buy Now</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n      <ion-list>\n        <ion-item *ngFor=\"let mProduct of itemsList\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{mProduct.img}}\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ mProduct.text }}</h2>\n            <p>{{mProduct.text1}}</p>\n          </ion-label>\n          <ion-icon name=\"cart\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n    <!-- segment four -->\n    <div *ngSwitchCase=\"'segmentFour'\">\n      <ion-slides @itemState [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let product of items\">\n          <ion-card>\n            <ion-card-content>\n              {{ product.name }} - ${{ product.price }}\n              <ion-img src=\"{{product.img}}\"></ion-img>\n              <ion-button expand=\"full\">Buy Now</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n      <ion-list>\n        <ion-item *ngFor=\"let mProduct of itemsList\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{mProduct.img}}\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ mProduct.text }}</h2>\n            <p>{{mProduct.text1}}</p>\n          </ion-label>\n          <ion-icon name=\"cart\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n    <!-- segment five -->\n    <div *ngSwitchCase=\"'segmentFive'\">\n      <ion-slides @itemState [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let product of items\">\n          <ion-card>\n            <ion-card-content>\n              {{ product.name }} - ${{ product.price }}\n              <ion-img src=\"{{product.img}}\"></ion-img>\n              <ion-button expand=\"full\">Buy Now</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n      <ion-list>\n        <ion-item *ngFor=\"let mProduct of itemsList\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{mProduct.img}}\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ mProduct.text }}</h2>\n            <p>{{mProduct.text1}}</p>\n          </ion-label>\n          <ion-icon name=\"cart\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n    <!-- segment six -->\n    <div *ngSwitchCase=\"'segmentSix'\">\n      <ion-slides @itemState [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let product of items\">\n          <ion-card>\n            <ion-card-content>\n              {{ product.name }} - ${{ product.price }}\n              <ion-img src=\"{{product.img}}\"></ion-img>\n              <ion-button expand=\"full\">Buy Now</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n      <ion-list>\n        <ion-item *ngFor=\"let mProduct of itemsList\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{mProduct.img}}\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ mProduct.text }}</h2>\n            <p>{{mProduct.text1}}</p>\n          </ion-label>\n          <ion-icon name=\"cart\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-segment {\n  --color-checked: white !important; }\n\nion-content {\n  --padding-bottom: 5px;\n  --padding-end: 5px;\n  --padding-start: 5px;\n  --padding-top: 5px; }\n\nion-content ion-card {\n    margin: 5px;\n    padding: 10px; }\n\nion-content ion-card ion-card-content {\n      padding: 0; }\n\nion-content ion-card ion-card-content ion-col:first-child {\n        text-align: left; }\n\nion-content ion-card ion-card-content ion-col:last-child {\n        text-align: right; }\n\nion-content ion-card ion-card-content ion-button {\n        margin-left: 0;\n        margin-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9zZWdtZW50LXNjcm9sbGFibGUtaGVhZGVyLWljb24vc2VnbWVudC1zY3JvbGxhYmxlLWhlYWRlci1pY29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlDQUFnQixFQUFBOztBQUd4QjtFQUNJLHFCQUFpQjtFQUNqQixrQkFBYztFQUNkLG9CQUFnQjtFQUNoQixrQkFBYyxFQUFBOztBQUpsQjtJQU9RLFdBQVc7SUFDWCxhQUFhLEVBQUE7O0FBUnJCO01BV1ksVUFBUyxFQUFBOztBQVhyQjtRQWVvQixnQkFBZ0IsRUFBQTs7QUFmcEM7UUFrQm9CLGlCQUFpQixFQUFBOztBQWxCckM7UUFzQmUsY0FBYztRQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlZ21lbnQtc2Nyb2xsYWJsZS1oZWFkZXItaWNvbi9zZWdtZW50LXNjcm9sbGFibGUtaGVhZGVyLWljb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGlvbi1zZWdtZW50e1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogNXB4O1xyXG5cclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgcGFkZGluZzowOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.page.ts ***!
  \***************************************************************************************/
/*! exports provided: SegmentScrollableHeaderIconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentScrollableHeaderIconPage", function() { return SegmentScrollableHeaderIconPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var SegmentScrollableHeaderIconPage = /** @class */ (function () {
    function SegmentScrollableHeaderIconPage() {
        this.segments = 'segmentOne';
        this.sliderConfig = {
            slidesPerView: 2.2,
            spaceBetween: 0,
        };
        this.items = [
            {
                id: '0',
                name: "Bed",
                price: "250",
                img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png"
            },
            {
                id: '1',
                name: "Dress",
                price: "1800",
                img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png"
            },
            {
                id: '2',
                name: "Stand",
                price: "3200",
                img: "assets/images/Pictures/app-slicing/cell_phone_stand.png"
            },
            {
                id: '3',
                name: "Chair",
                price: "1200",
                img: "assets/images/Pictures/app-slicing/red_and_black_chair.png"
            }
        ];
        this.itemsList = [
            { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice: "15", price: "10" },
            { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", dprice: "18", price: "12" },
            { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice: "15", price: "13" },
            { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice: "19", price: "16" },
            { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", dprice: "15", price: "7" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", dprice: "25", price: "20" },
            { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice: "45", price: "40" },
            { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", dprice: "55", price: "32" },
            { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice: "15", price: "9", },
            { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice: "25", price: "16" },
            { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", dprice: "15", price: "7" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", dprice: "25", price: "20" },
            { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice: "15", price: "10" },
            { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", dprice: "18", price: "12" },
            { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice: "15", price: "13" },
            { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice: "19", price: "16" },
            { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", dprice: "15", price: "7" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", dprice: "25", price: "20" },
        ];
    }
    SegmentScrollableHeaderIconPage.prototype.ngOnInit = function () {
    };
    SegmentScrollableHeaderIconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-segment-scrollable-header-icon',
            template: __webpack_require__(/*! ./segment-scrollable-header-icon.page.html */ "./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./segment-scrollable-header-icon.page.scss */ "./src/app/segment-scrollable-header-icon/segment-scrollable-header-icon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SegmentScrollableHeaderIconPage);
    return SegmentScrollableHeaderIconPage;
}());



/***/ })

}]);
//# sourceMappingURL=segment-scrollable-header-icon-segment-scrollable-header-icon-module.js.map