(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkbox-simple-checkbox-simple-module"],{

/***/ "./src/app/checkbox-simple/checkbox-simple.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/checkbox-simple/checkbox-simple.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckboxSimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxSimplePageModule", function() { return CheckboxSimplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkbox_simple_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox-simple.page */ "./src/app/checkbox-simple/checkbox-simple.page.ts");







var routes = [
    {
        path: '',
        component: _checkbox_simple_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxSimplePage"]
    }
];
var CheckboxSimplePageModule = /** @class */ (function () {
    function CheckboxSimplePageModule() {
    }
    CheckboxSimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkbox_simple_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxSimplePage"]]
        })
    ], CheckboxSimplePageModule);
    return CheckboxSimplePageModule;
}());



/***/ }),

/***/ "./src/app/checkbox-simple/checkbox-simple.page.html":
/*!***********************************************************!*\
  !*** ./src/app/checkbox-simple/checkbox-simple.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Avatar With Circle </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-list>\n        <ion-item *ngFor=\"let item of products\">\n            <ion-avatar slot=\"start\">\n                <ion-img src=\"{{item.image}}\"></ion-img>\n            </ion-avatar>\n            <ion-label>\n                {{item.name}}\n                <p>These celebirties are famous because...</p>\n            </ion-label>\n            <!-- checkbox with right position in item -->\n            <ion-checkbox slot=\"end\"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/checkbox-simple/checkbox-simple.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/checkbox-simple/checkbox-simple.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-avatar {\n  border: solid lightgray;\n  border-width: 0.5px; }\n\nion-content ion-checkbox {\n  --border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jaGVja2JveC1zaW1wbGUvY2hlY2tib3gtc2ltcGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFIM0I7RUFNUSxvQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoZWNrYm94LXNpbXBsZS9jaGVja2JveC1zaW1wbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tYXZhdGFye1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMC41cHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2hlY2tib3h7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/checkbox-simple/checkbox-simple.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/checkbox-simple/checkbox-simple.page.ts ***!
  \*********************************************************/
/*! exports provided: CheckboxSimplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxSimplePage", function() { return CheckboxSimplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxSimplePage = /** @class */ (function () {
    function CheckboxSimplePage() {
        this.products = [
            { image: "assets/images/Pictures/faces-images/face_image1.png", name: "William Watson", },
            { image: "assets/images/Pictures/faces-images/face_image2.png", name: "Alina Jason", },
            { image: "assets/images/Pictures/faces-images/face_image3.png", name: "Leta James", },
            { image: "assets/images/Pictures/faces-images/face_image4.png", name: "Maria Amber", },
            { image: "assets/images/Pictures/faces-images/face_image5.png", name: "Amber jeff", },
            { image: "assets/images/Pictures/faces-images/face_image6.png", name: "Leta James", },
            { image: "assets/images/Pictures/faces-images/face_image1.png", name: "Selina Pearls", },
            { image: "assets/images/Pictures/faces-images/face_image2.png", name: "Cardi Gelly", },
            { image: "assets/images/Pictures/faces-images/face_image3.png", name: "Amber jeff", },
            { image: "assets/images/Pictures/faces-images/face_image4.png", name: "Cardi Gelly", },
            { image: "assets/images/Pictures/faces-images/face_image5.png", name: "William Watson", },
            { image: "assets/images/Pictures/faces-images/face_image6.png", name: "Alina Jason", },
            { image: "assets/images/Pictures/faces-images/face_image1.png", name: "Leta James", },
            { image: "assets/images/Pictures/faces-images/face_image2.png", name: "Cardi Gelly", },
        ];
    }
    CheckboxSimplePage.prototype.ngOnInit = function () {
    };
    CheckboxSimplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox-simple',
            template: __webpack_require__(/*! ./checkbox-simple.page.html */ "./src/app/checkbox-simple/checkbox-simple.page.html"),
            styles: [__webpack_require__(/*! ./checkbox-simple.page.scss */ "./src/app/checkbox-simple/checkbox-simple.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxSimplePage);
    return CheckboxSimplePage;
}());



/***/ })

}]);
//# sourceMappingURL=checkbox-simple-checkbox-simple-module.js.map