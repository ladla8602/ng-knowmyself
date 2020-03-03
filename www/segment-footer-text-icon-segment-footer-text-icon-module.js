(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segment-footer-text-icon-segment-footer-text-icon-module"],{

/***/ "./src/app/segment-footer-text-icon/segment-footer-text-icon.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/segment-footer-text-icon/segment-footer-text-icon.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SegmentFooterTextIconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentFooterTextIconPageModule", function() { return SegmentFooterTextIconPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _segment_footer_text_icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segment-footer-text-icon.page */ "./src/app/segment-footer-text-icon/segment-footer-text-icon.page.ts");







var routes = [
    {
        path: '',
        component: _segment_footer_text_icon_page__WEBPACK_IMPORTED_MODULE_6__["SegmentFooterTextIconPage"]
    }
];
var SegmentFooterTextIconPageModule = /** @class */ (function () {
    function SegmentFooterTextIconPageModule() {
    }
    SegmentFooterTextIconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_segment_footer_text_icon_page__WEBPACK_IMPORTED_MODULE_6__["SegmentFooterTextIconPage"]]
        })
    ], SegmentFooterTextIconPageModule);
    return SegmentFooterTextIconPageModule;
}());



/***/ }),

/***/ "./src/app/segment-footer-text-icon/segment-footer-text-icon.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/segment-footer-text-icon/segment-footer-text-icon.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Segment Footer Text Icons</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"contentClass\" padding>\n    <!-- name of segment to access segment on runtime -->\n    <div class=\"module\" [ngSwitch]=\"segments\">\n        <!-- segmnet one -->\n        <div *ngSwitchCase=\"'segmentOne'\">\n            <ion-card *ngFor=\"let item of items\">\n                <img src=\"{{item.image}}\" />\n                <ion-card-header>\n                    <ion-card-title>{{item.title}}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    {{item.para}}\n                </ion-card-content>\n                <ion-list>\n                    <ion-item lines=\"full\">\n                        <ion-icon slot=\"start\" name=\"musical-notes\"></ion-icon>\n                        <ion-label>Albums</ion-label>\n                        <ion-badge slot=\"end\">{{item.albums}}</ion-badge>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-icon slot=\"start\" name='logo-twitter'></ion-icon>\n                        <ion-label>Follwers</ion-label>\n                        <ion-badge slot=\"end\">{{item.followers}}</ion-badge>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n        </div>\n        <!-- segment two -->\n        <div *ngSwitchCase=\"'segmentTwo'\">\n            <ion-card *ngFor=\"let item of items\">\n                <img src=\"{{item.image}}\" />\n                <ion-card-header>\n                    <ion-card-title>{{item.title}}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    {{item.para}}\n                </ion-card-content>\n                <ion-list>\n                    <ion-item lines=\"full\">\n                        <ion-icon slot=\"start\" name=\"musical-notes\"></ion-icon>\n                        <ion-label>Albums</ion-label>\n                        <ion-badge slot=\"end\">{{item.albums}}</ion-badge>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-icon slot=\"start\" name='logo-twitter'></ion-icon>\n                        <ion-label>Follwers</ion-label>\n                        <ion-badge slot=\"end\">{{item.followers}}</ion-badge>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n        </div>\n        <!-- segment three -->\n        <div *ngSwitchCase=\"'segmentThree'\">\n            <ion-card *ngFor=\"let item of items\">\n                <img src=\"{{item.image}}\" />\n                <ion-card-header>\n                    <ion-card-title>{{item.title}}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    {{item.para}}\n                </ion-card-content>\n                <ion-list>\n                    <ion-item lines=\"full\">\n                        <ion-icon slot=\"start\" name=\"musical-notes\"></ion-icon>\n                        <ion-label>Albums</ion-label>\n                        <ion-badge slot=\"end\">{{item.albums}}</ion-badge>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-icon slot=\"start\" name='logo-twitter'></ion-icon>\n                        <ion-label>Follwers</ion-label>\n                        <ion-badge slot=\"end\">{{item.followers}}</ion-badge>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <!-- segment footer button  -->\n    <ion-segment class=\"segBtn\" [(ngModel)]=\"segments\">\n        <ion-segment-button value=\"segmentOne\" checked>{{ 'Card One' }}\n            <ion-icon name=\"home\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"segmentTwo\">{{ 'Card two' }}\n            <ion-icon name=\"heart\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"segmentThree\"> {{ 'Card three' }}\n            <ion-icon name=\"pin\"></ion-icon>\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>"

/***/ }),

/***/ "./src/app/segment-footer-text-icon/segment-footer-text-icon.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/segment-footer-text-icon/segment-footer-text-icon.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card {\n  margin: 0 0 16px 0; }\n\nion-footer ion-segment {\n  --color-checked: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9zZWdtZW50LWZvb3Rlci10ZXh0LWljb24vc2VnbWVudC1mb290ZXItdGV4dC1pY29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUcxQjtFQUVNLGlDQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VnbWVudC1mb290ZXItdGV4dC1pY29uL3NlZ21lbnQtZm9vdGVyLXRleHQtaWNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDE2cHggMDtcclxuICAgIH1cclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgaW9uLXNlZ21lbnR7XHJcbiAgICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/segment-footer-text-icon/segment-footer-text-icon.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/segment-footer-text-icon/segment-footer-text-icon.page.ts ***!
  \***************************************************************************/
/*! exports provided: SegmentFooterTextIconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentFooterTextIconPage", function() { return SegmentFooterTextIconPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SegmentFooterTextIconPage = /** @class */ (function () {
    function SegmentFooterTextIconPage() {
        this.segments = 'segmentOne';
        this.sliderConfig = {
            slidesPerView: 1.6,
            spaceBetween: 0
        };
        this.items = [
            { image: "assets/images/fashion/fashion1.jpg", title: "Susan", para: "Susan is an American singer, actress, dancer and producer. In 1991, Lopez began appearing as a Fly Girl dancer on In Living Color, where she remained a regular until she decided to pursue an acting career in 1993...", albums: "100", followers: "10.50M" },
            { image: "assets/images/fashion/fashion2.jpg", title: "Maria", para: "Susan is an American singer, actress, dancer and producer. In 1991, Lopez began appearing as a Fly Girl dancer on In Living Color, where she remained a regular until she decided to pursue an acting career in 1993...", albums: "300", followers: "2.50M" },
            { image: "assets/images/fashion/fashion11.jpg", title: "Emma", para: "Susan is an American singer, actress, dancer and producer. In 1991, Lopez began appearing as a Fly Girl dancer on In Living Color, where she remained a regular until she decided to pursue an acting career in 1993...", albums: "670", followers: "1.10M" },
        ];
    }
    SegmentFooterTextIconPage.prototype.ngOnInit = function () {
    };
    SegmentFooterTextIconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-segment-footer-text-icon',
            template: __webpack_require__(/*! ./segment-footer-text-icon.page.html */ "./src/app/segment-footer-text-icon/segment-footer-text-icon.page.html"),
            styles: [__webpack_require__(/*! ./segment-footer-text-icon.page.scss */ "./src/app/segment-footer-text-icon/segment-footer-text-icon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SegmentFooterTextIconPage);
    return SegmentFooterTextIconPage;
}());



/***/ })

}]);
//# sourceMappingURL=segment-footer-text-icon-segment-footer-text-icon-module.js.map