(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-forget-three-form-forget-three-module"],{

/***/ "./src/app/form-forget-three/form-forget-three.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/form-forget-three/form-forget-three.module.ts ***!
  \***************************************************************/
/*! exports provided: FormForgetThreePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormForgetThreePageModule", function() { return FormForgetThreePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_forget_three_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-forget-three.page */ "./src/app/form-forget-three/form-forget-three.page.ts");







var routes = [
    {
        path: '',
        component: _form_forget_three_page__WEBPACK_IMPORTED_MODULE_6__["FormForgetThreePage"]
    }
];
var FormForgetThreePageModule = /** @class */ (function () {
    function FormForgetThreePageModule() {
    }
    FormForgetThreePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_form_forget_three_page__WEBPACK_IMPORTED_MODULE_6__["FormForgetThreePage"]]
        })
    ], FormForgetThreePageModule);
    return FormForgetThreePageModule;
}());



/***/ }),

/***/ "./src/app/form-forget-three/form-forget-three.page.html":
/*!***************************************************************!*\
  !*** ./src/app/form-forget-three/form-forget-three.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Forget Theme Three</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-img src=\"assets/images/icons_stripe.svg\"></ion-img>\n  <!-- form with input text and submit buttons -->\n  <form>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Email or Username\" name=\"email\" required>\n      </ion-input>\n    </ion-item>\n  </form>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" type=\"submit\">Login</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" color=\"danger\" type=\"submit\">Login with\n        <ion-icon name=\"logo-google\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" type=\"submit\">Login with\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/form-forget-three/form-forget-three.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/form-forget-three/form-forget-three.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-img {\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n  opacity: 0.5; }\n\nion-content ion-row ion-col:last-child ion-button {\n  --color:white;\n  --background:#3b5998; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mb3JtLWZvcmdldC10aHJlZS9mb3JtLWZvcmdldC10aHJlZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBTHBCO0VBV1ksYUFBUTtFQUNSLG9CQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3JtLWZvcmdldC10aHJlZS9mb3JtLWZvcmdldC10aHJlZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgICBpb24tcm93e1xyXG4gICAgICBpb24tY29se1xyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgLS1jb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiMzYjU5OTg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/form-forget-three/form-forget-three.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-forget-three/form-forget-three.page.ts ***!
  \*************************************************************/
/*! exports provided: FormForgetThreePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormForgetThreePage", function() { return FormForgetThreePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormForgetThreePage = /** @class */ (function () {
    function FormForgetThreePage() {
    }
    FormForgetThreePage.prototype.ngOnInit = function () {
    };
    FormForgetThreePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-forget-three',
            template: __webpack_require__(/*! ./form-forget-three.page.html */ "./src/app/form-forget-three/form-forget-three.page.html"),
            styles: [__webpack_require__(/*! ./form-forget-three.page.scss */ "./src/app/form-forget-three/form-forget-three.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormForgetThreePage);
    return FormForgetThreePage;
}());



/***/ })

}]);
//# sourceMappingURL=form-forget-three-form-forget-three-module.js.map