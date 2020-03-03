(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkbox-with-big-image-checkbox-with-big-image-module"],{

/***/ "./src/app/checkbox-with-big-image/checkbox-with-big-image.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/checkbox-with-big-image/checkbox-with-big-image.module.ts ***!
  \***************************************************************************/
/*! exports provided: CheckboxWithBigImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWithBigImagePageModule", function() { return CheckboxWithBigImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkbox_with_big_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox-with-big-image.page */ "./src/app/checkbox-with-big-image/checkbox-with-big-image.page.ts");







var routes = [
    {
        path: '',
        component: _checkbox_with_big_image_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxWithBigImagePage"]
    }
];
var CheckboxWithBigImagePageModule = /** @class */ (function () {
    function CheckboxWithBigImagePageModule() {
    }
    CheckboxWithBigImagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkbox_with_big_image_page__WEBPACK_IMPORTED_MODULE_6__["CheckboxWithBigImagePage"]]
        })
    ], CheckboxWithBigImagePageModule);
    return CheckboxWithBigImagePageModule;
}());



/***/ }),

/***/ "./src/app/checkbox-with-big-image/checkbox-with-big-image.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/checkbox-with-big-image/checkbox-with-big-image.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title> Big Image</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-list *ngFor=\"let game of items, let i = index\">\n        <ion-item lines=\"full\">\n            <ion-img class=\"longImg\" src=\"{{game.img}}\"></ion-img>\n            <!-- checkbox right position in item -->\n            <ion-checkbox slot=\"end\"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/checkbox-with-big-image/checkbox-with-big-image.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/checkbox-with-big-image/checkbox-with-big-image.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-checkbox {\n  height: 25px;\n  width: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jaGVja2JveC13aXRoLWJpZy1pbWFnZS9jaGVja2JveC13aXRoLWJpZy1pbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tib3gtd2l0aC1iaWctaW1hZ2UvY2hlY2tib3gtd2l0aC1iaWctaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tY2hlY2tib3h7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/checkbox-with-big-image/checkbox-with-big-image.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/checkbox-with-big-image/checkbox-with-big-image.page.ts ***!
  \*************************************************************************/
/*! exports provided: CheckboxWithBigImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWithBigImagePage", function() { return CheckboxWithBigImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxWithBigImagePage = /** @class */ (function () {
    function CheckboxWithBigImagePage() {
        this.items = [
            { img: "assets/images/movies/movie1.jpg" },
            { img: "assets/images/movies/movie2.jpg" },
            { img: "assets/images/movies/movie3.jpg" },
            { img: "assets/images/movies/movie4.jpg" },
            { img: "assets/images/movies/movie5.jpg" },
            { img: "assets/images/movies/movie1.jpg" },
            { img: "assets/images/movies/movie2.jpg" },
            { img: "assets/images/movies/movie3.jpg" },
            { img: "assets/images/movies/movie4.jpg" },
        ];
    }
    CheckboxWithBigImagePage.prototype.ngOnInit = function () {
    };
    CheckboxWithBigImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox-with-big-image',
            template: __webpack_require__(/*! ./checkbox-with-big-image.page.html */ "./src/app/checkbox-with-big-image/checkbox-with-big-image.page.html"),
            styles: [__webpack_require__(/*! ./checkbox-with-big-image.page.scss */ "./src/app/checkbox-with-big-image/checkbox-with-big-image.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxWithBigImagePage);
    return CheckboxWithBigImagePage;
}());



/***/ })

}]);
//# sourceMappingURL=checkbox-with-big-image-checkbox-with-big-image-module.js.map