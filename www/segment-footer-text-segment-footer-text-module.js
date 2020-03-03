(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segment-footer-text-segment-footer-text-module"],{

/***/ "./src/app/segment-footer-text/segment-footer-text.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/segment-footer-text/segment-footer-text.module.ts ***!
  \*******************************************************************/
/*! exports provided: SegmentFooterTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentFooterTextPageModule", function() { return SegmentFooterTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _segment_footer_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segment-footer-text.page */ "./src/app/segment-footer-text/segment-footer-text.page.ts");







var routes = [
    {
        path: '',
        component: _segment_footer_text_page__WEBPACK_IMPORTED_MODULE_6__["SegmentFooterTextPage"]
    }
];
var SegmentFooterTextPageModule = /** @class */ (function () {
    function SegmentFooterTextPageModule() {
    }
    SegmentFooterTextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_segment_footer_text_page__WEBPACK_IMPORTED_MODULE_6__["SegmentFooterTextPage"]]
        })
    ], SegmentFooterTextPageModule);
    return SegmentFooterTextPageModule;
}());



/***/ }),

/***/ "./src/app/segment-footer-text/segment-footer-text.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/segment-footer-text/segment-footer-text.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Segment Footer Text</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- name of segment to access segment on runtime -->\n  <div [ngSwitch]=\"segments\">\n    <!-- First segment -->\n    <div *ngSwitchCase=\"'segmentOne'\">\n      <ion-card *ngFor=\"let item of items\">\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"{{item.img}}\" />\n          </ion-avatar>\n          <ion-label>\n            <h3>{{item.text}}</h3>\n            <p>{{item.dob}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-img src=\"{{item.img}}\"></ion-img>\n        <ion-card-content>\n          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n            Whoa. This is heavy.</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col size=\"4\" no-padding>\n            <ion-button size=\"small\" color=\"primary\" fill=\"clear\">\n              <ion-icon name='thumbs-up'></ion-icon>\n              12 Likes\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"5\" no-padding>\n            <ion-button color=\"primary\" size=\"small\" fill=\"clear\">\n              <ion-icon name='text'></ion-icon>\n              4 Comments\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"3\" no-padding>\n            <ion-button size=\"small\" fill=\"clear\">\n              11h ago\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n    <!-- Second segment -->\n    <div *ngSwitchCase=\"'segmentTwo'\">\n      <ion-card *ngFor=\"let item of items\">\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"{{item.img}}\" />\n          </ion-avatar>\n          <ion-label>\n            <h3>{{item.text}}</h3>\n            <p>{{item.dob}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-img src=\"{{item.img}}\"></ion-img>\n        <ion-card-content>\n          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n            Whoa. This is heavy.</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col size=\"4\" no-padding>\n            <ion-button size=\"small\" color=\"primary\" fill=\"clear\">\n              <ion-icon name='thumbs-up'></ion-icon>\n              12 Likes\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"5\" no-padding>\n            <ion-button color=\"primary\" size=\"small\" fill=\"clear\">\n              <ion-icon name='text'></ion-icon>\n              4 Comments\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"3\" no-padding>\n            <ion-button size=\"small\" fill=\"clear\">\n              11h ago\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n    <!-- Third segment -->\n    <div *ngSwitchCase=\"'segmentThree'\">\n      <ion-card *ngFor=\"let item of items\">\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"{{item.img}}\" />\n          </ion-avatar>\n          <ion-label>\n            <h3>{{item.text}}</h3>\n            <p>{{item.dob}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-img src=\"{{item.img}}\"></ion-img>\n        <ion-card-content>\n          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n            Whoa. This is heavy.</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col size=\"4\" no-padding>\n            <ion-button size=\"small\" color=\"primary\" fill=\"clear\">\n              <ion-icon name='thumbs-up'></ion-icon>\n              12 Likes\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"5\" no-padding>\n            <ion-button color=\"primary\" size=\"small\" fill=\"clear\">\n              <ion-icon name='text'></ion-icon>\n              4 Comments\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"3\" no-padding>\n            <ion-button size=\"small\" fill=\"clear\">\n              11h ago\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <!-- segment footer button  -->\n  <ion-segment [(ngModel)]=\"segments\">\n    <ion-segment-button value=\"segmentOne\">{{ 'Latest' }}</ion-segment-button>\n    <ion-segment-button value=\"segmentTwo\">{{ 'On Sale' }} </ion-segment-button>\n    <ion-segment-button value=\"segmentThree\"> {{ 'Featured' }}</ion-segment-button>\n  </ion-segment>\n</ion-footer>"

/***/ }),

/***/ "./src/app/segment-footer-text/segment-footer-text.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/segment-footer-text/segment-footer-text.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-segment {\n  --color-checked: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9zZWdtZW50LWZvb3Rlci10ZXh0L3NlZ21lbnQtZm9vdGVyLXRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0saUNBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWdtZW50LWZvb3Rlci10ZXh0L3NlZ21lbnQtZm9vdGVyLXRleHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlcntcclxuICAgIGlvbi1zZWdtZW50e1xyXG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/segment-footer-text/segment-footer-text.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/segment-footer-text/segment-footer-text.page.ts ***!
  \*****************************************************************/
/*! exports provided: SegmentFooterTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentFooterTextPage", function() { return SegmentFooterTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SegmentFooterTextPage = /** @class */ (function () {
    function SegmentFooterTextPage() {
        this.segments = 'topSeller';
        this.sliderConfig = {
            slidesPerView: 1.6,
            spaceBetween: 0
        };
        this.items = [
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image1.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image2.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image3.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image5.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image6.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image7.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
        ];
    }
    SegmentFooterTextPage.prototype.ngOnInit = function () {
    };
    SegmentFooterTextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-segment-footer-text',
            template: __webpack_require__(/*! ./segment-footer-text.page.html */ "./src/app/segment-footer-text/segment-footer-text.page.html"),
            styles: [__webpack_require__(/*! ./segment-footer-text.page.scss */ "./src/app/segment-footer-text/segment-footer-text.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SegmentFooterTextPage);
    return SegmentFooterTextPage;
}());



/***/ })

}]);
//# sourceMappingURL=segment-footer-text-segment-footer-text-module.js.map