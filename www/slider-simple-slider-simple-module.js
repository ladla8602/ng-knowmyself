(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider-simple-slider-simple-module"],{

/***/ "./src/app/slider-simple/slider-simple.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/slider-simple/slider-simple.module.ts ***!
  \*******************************************************/
/*! exports provided: SliderSimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderSimplePageModule", function() { return SliderSimplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slider_simple_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider-simple.page */ "./src/app/slider-simple/slider-simple.page.ts");







var routes = [
    {
        path: '',
        component: _slider_simple_page__WEBPACK_IMPORTED_MODULE_6__["SliderSimplePage"]
    }
];
var SliderSimplePageModule = /** @class */ (function () {
    function SliderSimplePageModule() {
    }
    SliderSimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slider_simple_page__WEBPACK_IMPORTED_MODULE_6__["SliderSimplePage"]]
        })
    ], SliderSimplePageModule);
    return SliderSimplePageModule;
}());



/***/ }),

/***/ "./src/app/slider-simple/slider-simple.page.html":
/*!*******************************************************!*\
  !*** ./src/app/slider-simple/slider-simple.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Slider Simple</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- slides -->\n    <ion-slides pager=\"true\">\n        <!-- single slide -->\n        <ion-slide>\n            <h1>Slide 1</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Slide 2</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Slide 3</h1>\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/slider-simple/slider-simple.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/slider-simple/slider-simple.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-slides {\n  height: 100%; }\n\nion-content ion-slide {\n  background: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9zbGlkZXItc2ltcGxlL3NsaWRlci1zaW1wbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsWUFBWSxFQUFBOztBQUZwQjtFQUtRLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2xpZGVyLXNpbXBsZS9zbGlkZXItc2ltcGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaW9uLXNsaWRlc3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/slider-simple/slider-simple.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/slider-simple/slider-simple.page.ts ***!
  \*****************************************************/
/*! exports provided: SliderSimplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderSimplePage", function() { return SliderSimplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderSimplePage = /** @class */ (function () {
    function SliderSimplePage() {
    }
    SliderSimplePage.prototype.ngOnInit = function () {
    };
    SliderSimplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider-simple',
            template: __webpack_require__(/*! ./slider-simple.page.html */ "./src/app/slider-simple/slider-simple.page.html"),
            styles: [__webpack_require__(/*! ./slider-simple.page.scss */ "./src/app/slider-simple/slider-simple.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderSimplePage);
    return SliderSimplePage;
}());



/***/ })

}]);
//# sourceMappingURL=slider-simple-slider-simple-module.js.map