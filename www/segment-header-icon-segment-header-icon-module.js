(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segment-header-icon-segment-header-icon-module"],{

/***/ "./src/app/segment-header-icon/segment-header-icon.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/segment-header-icon/segment-header-icon.module.ts ***!
  \*******************************************************************/
/*! exports provided: SegmentHeaderIconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentHeaderIconPageModule", function() { return SegmentHeaderIconPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _segment_header_icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segment-header-icon.page */ "./src/app/segment-header-icon/segment-header-icon.page.ts");







var routes = [
    {
        path: '',
        component: _segment_header_icon_page__WEBPACK_IMPORTED_MODULE_6__["SegmentHeaderIconPage"]
    }
];
var SegmentHeaderIconPageModule = /** @class */ (function () {
    function SegmentHeaderIconPageModule() {
    }
    SegmentHeaderIconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_segment_header_icon_page__WEBPACK_IMPORTED_MODULE_6__["SegmentHeaderIconPage"]]
        })
    ], SegmentHeaderIconPageModule);
    return SegmentHeaderIconPageModule;
}());



/***/ }),

/***/ "./src/app/segment-header-icon/segment-header-icon.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/segment-header-icon/segment-header-icon.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Segment Header Icons</ion-title>\n  </ion-toolbar>\n  <!-- segment header button  -->\n  <ion-segment [(ngModel)]=\"segments\" >\n    <ion-segment-button value=\"segmentOne\" checked>\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"segmentTwo\">\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"segmentThree\">\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content padding>\n  <!-- name of segment to access segment on runtime -->\n  <div [ngSwitch]=\"segments\">\n    <!-- Segment one -->\n    <div *ngSwitchCase=\"'segmentOne'\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col *ngFor=\"let product of items\" size=\"6\" no-padding>\n            <ion-card>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col size=\"8\">\n                    {{ product.text }}\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <ion-text>\n                      <p>${{ product.price }}</p>\n                    </ion-text>\n                  </ion-col>\n                </ion-row>\n                <ion-img src=\"{{product.img}}\"></ion-img>\n                <ion-button expand=\"full\">Buy Now</ion-button>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <!-- segment two -->\n    <div *ngSwitchCase=\"'segmentTwo'\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col *ngFor=\"let product of items\" size=\"6\" no-padding>\n            <ion-card>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col size=\"8\">\n                    {{ product.text }}\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <ion-text>\n                      <p>${{ product.price }}</p>\n                    </ion-text>\n                  </ion-col>\n                </ion-row>\n                <ion-img src=\"{{product.img}}\"></ion-img>\n                <ion-button expand=\"full\">Buy Now</ion-button>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <!-- segment three -->\n    <div *ngSwitchCase=\"'segmentThree'\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col *ngFor=\"let product of items\" size=\"6\" no-padding>\n            <ion-card>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col size=\"8\">\n                    {{ product.text }}\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <ion-text>\n                      <p>${{ product.price }}</p>\n                    </ion-text>\n                  </ion-col>\n                </ion-row>\n                <ion-img src=\"{{product.img}}\"></ion-img>\n                <ion-button expand=\"full\">Buy Now</ion-button>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/segment-header-icon/segment-header-icon.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/segment-header-icon/segment-header-icon.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-segment {\n  --color-checked: white !important; }\n\nion-content {\n  --padding-bottom: 5px;\n  --padding-end: 5px;\n  --padding-start: 5px;\n  --padding-top: 5px; }\n\nion-content ion-card {\n    margin: 5px;\n    padding: 10px; }\n\nion-content ion-card ion-card-content {\n      padding: 0; }\n\nion-content ion-card ion-card-content ion-col:first-child {\n        text-align: left; }\n\nion-content ion-card ion-card-content ion-col:last-child {\n        text-align: right; }\n\nion-content ion-card ion-card-content ion-button {\n        margin-left: 0;\n        margin-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9zZWdtZW50LWhlYWRlci1pY29uL3NlZ21lbnQtaGVhZGVyLWljb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUNBQWdCLEVBQUE7O0FBR3hCO0VBQ0kscUJBQWlCO0VBQ2pCLGtCQUFjO0VBQ2Qsb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUE7O0FBSmxCO0lBT1EsV0FBVztJQUNYLGFBQWEsRUFBQTs7QUFSckI7TUFXWSxVQUFTLEVBQUE7O0FBWHJCO1FBZW9CLGdCQUFnQixFQUFBOztBQWZwQztRQWtCb0IsaUJBQWlCLEVBQUE7O0FBbEJyQztRQXNCZSxjQUFjO1FBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VnbWVudC1oZWFkZXItaWNvbi9zZWdtZW50LWhlYWRlci1pY29uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24tc2VnbWVudHtcclxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDVweDtcclxuXHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/segment-header-icon/segment-header-icon.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/segment-header-icon/segment-header-icon.page.ts ***!
  \*****************************************************************/
/*! exports provided: SegmentHeaderIconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentHeaderIconPage", function() { return SegmentHeaderIconPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var SegmentHeaderIconPage = /** @class */ (function () {
    function SegmentHeaderIconPage() {
        this.segments = 'segmentOne';
        this.items = [
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", price: "100", status: "Avaliable" },
            { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", price: "120", status: "Avaliable" },
            { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", price: "130", status: "Avaliable" },
            { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", price: "160", status: "Out Of Stock" },
            { text: "Polo shirt men's wear", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", price: "70", status: "Avaliable" },
            { text: "Ladies Jacket Wear", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", price: "200", status: "Avaliable" },
            { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", price: "400", status: "Out Of Stock" },
            { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", price: "320", status: "Avaliable" },
            { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", price: "90", status: "Avaliable" },
            { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", price: "160", status: "Avaliable" },
            { text: "Polo shirt men's wear", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", price: "70", status: "Out Of Stock" },
            { text: "Ladies Jacket Wear", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", price: "200", status: "Avaliable" },
        ];
    }
    SegmentHeaderIconPage.prototype.ngOnInit = function () {
    };
    SegmentHeaderIconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-segment-header-icon',
            template: __webpack_require__(/*! ./segment-header-icon.page.html */ "./src/app/segment-header-icon/segment-header-icon.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./segment-header-icon.page.scss */ "./src/app/segment-header-icon/segment-header-icon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SegmentHeaderIconPage);
    return SegmentHeaderIconPage;
}());



/***/ })

}]);
//# sourceMappingURL=segment-header-icon-segment-header-icon-module.js.map