(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-login-one-form-login-one-module"],{

/***/ "./src/app/form-login-one/form-login-one.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/form-login-one/form-login-one.module.ts ***!
  \*********************************************************/
/*! exports provided: FormLoginOnePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginOnePageModule", function() { return FormLoginOnePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_login_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-login-one.page */ "./src/app/form-login-one/form-login-one.page.ts");







var routes = [
    {
        path: '',
        component: _form_login_one_page__WEBPACK_IMPORTED_MODULE_6__["FormLoginOnePage"]
    }
];
var FormLoginOnePageModule = /** @class */ (function () {
    function FormLoginOnePageModule() {
    }
    FormLoginOnePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_form_login_one_page__WEBPACK_IMPORTED_MODULE_6__["FormLoginOnePage"]]
        })
    ], FormLoginOnePageModule);
    return FormLoginOnePageModule;
}());



/***/ }),

/***/ "./src/app/form-login-one/form-login-one.page.html":
/*!*********************************************************!*\
  !*** ./src/app/form-login-one/form-login-one.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Login Theme One</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-text>\n        <h2>Log-In</h2>\n    </ion-text>\n    <!-- form with input text and submit buttons -->\n    <form>\n        <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"logo-ionic\"></ion-icon>\n        <ion-item>\n            <ion-label position=\"floating\">Username</ion-label>\n            <ion-input type=\"email\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\"></ion-input>\n        </ion-item>\n        <ion-button expand=\"block\" fill=\"outline\" type=\"submit\">Login</ion-button>\n        <ion-button expand=\"block\" fill=\"outline\">Register</ion-button>\n        <ion-button expand=\"block\" fill=\"outline\" color=\"danger\">Google</ion-button>\n        <ion-button expand=\"block\" fill=\"outline\">facebook</ion-button>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/form-login-one/form-login-one.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/form-login-one/form-login-one.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-icon {\n  zoom: 4;\n  width: 100%; }\n\nion-content ion-button {\n  margin-top: 10px; }\n\nion-content ion-button:last-child {\n    --color:#3b5998;\n    --border-color:#3b5998; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mb3JtLWxvZ2luLW9uZS9mb3JtLWxvZ2luLW9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxPQUFNO0VBQ04sV0FBVyxFQUFBOztBQUhuQjtFQU1RLGdCQUFnQixFQUFBOztBQU54QjtJQVFZLGVBQVE7SUFDUixzQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9ybS1sb2dpbi1vbmUvZm9ybS1sb2dpbi1vbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICB6b29tOjQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAtLWNvbG9yOiMzYjU5OTg7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiMzYjU5OTg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/form-login-one/form-login-one.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/form-login-one/form-login-one.page.ts ***!
  \*******************************************************/
/*! exports provided: FormLoginOnePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginOnePage", function() { return FormLoginOnePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");



var FormLoginOnePage = /** @class */ (function () {
    function FormLoginOnePage(service) {
        this.service = service;
        this.itemColor = [];
        this.iconColorVar = "";
        this.itemColor = ["#F44336"]; //to get the coloe from custom-theme service
        this.data = this.service.getTheme(); //to get the selected theme color which is by default set as #F44336
        this.iconColorVar = this.data;
        //for the selection of colors
        if (this.data == "autumn") //if selected color is red 
         {
            this.itemColor = ["#F44336"];
        }
        else if (this.data == "night") //if selected color is purple 
         {
            this.itemColor = ["#673AB7"];
        }
        else if (this.data == "neon") //if selected color is blue 
         {
            this.itemColor = ["#03A9F4"];
        }
        else if (this.data == "orginal") //if selected color is green
         {
            this.itemColor = ["#4CAF50"];
        }
        else if (this.data == "red") //if selected color is gray
         {
            this.itemColor = ["#9E9E9E"];
        }
        else if (this.data == "purple") //if selected color is sharp pink
         {
            this.itemColor = ["#E91E63"];
        }
        else if (this.data == "Lightblue") //if selected color is dark blue
         {
            this.itemColor = ["#3F51B5"];
        }
        else if (this.data == "Lightgreen") //if selected color is light blue
         {
            this.itemColor = ["#00BCD4"];
        }
        else if (this.data == "Lightgray") //if selected color is light green
         {
            this.itemColor = ["#8BC34A"];
        }
        else if (this.data == "blue") //if selected color is dark green 
         {
            this.itemColor = ["#008577"];
        }
    }
    FormLoginOnePage.prototype.ngOnInit = function () { };
    FormLoginOnePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-login-one',
            template: __webpack_require__(/*! ./form-login-one.page.html */ "./src/app/form-login-one/form-login-one.page.html"),
            styles: [__webpack_require__(/*! ./form-login-one.page.scss */ "./src/app/form-login-one/form-login-one.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__["CustomThemeService"]])
    ], FormLoginOnePage);
    return FormLoginOnePage;
}());



/***/ })

}]);
//# sourceMappingURL=form-login-one-form-login-one-module.js.map