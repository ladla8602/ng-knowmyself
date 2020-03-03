(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-register-three-form-register-three-module"],{

/***/ "./src/app/form-register-three/form-register-three.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/form-register-three/form-register-three.module.ts ***!
  \*******************************************************************/
/*! exports provided: FormRegisterThreePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterThreePageModule", function() { return FormRegisterThreePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_register_three_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-register-three.page */ "./src/app/form-register-three/form-register-three.page.ts");







var routes = [
    {
        path: '',
        component: _form_register_three_page__WEBPACK_IMPORTED_MODULE_6__["FormRegisterThreePage"]
    }
];
var FormRegisterThreePageModule = /** @class */ (function () {
    function FormRegisterThreePageModule() {
    }
    FormRegisterThreePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_form_register_three_page__WEBPACK_IMPORTED_MODULE_6__["FormRegisterThreePage"]]
        })
    ], FormRegisterThreePageModule);
    return FormRegisterThreePageModule;
}());



/***/ }),

/***/ "./src/app/form-register-three/form-register-three.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/form-register-three/form-register-three.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Register Theme Three</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n        <ion-col size=\"12\">\n            <div>\n                <img src=\"assets/images/avatar.png\" />\n            </div>\n            <div>\n                <ion-avatar>\n                    <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"camera\"></ion-icon>\n                </ion-avatar>\n            </div>\n        </ion-col>\n    </ion-row>\n    <!-- form with input text and submit buttons -->\n    <form>\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-list>\n                    <ion-item>\n                        <ion-input type=\"text\" placeholder=\"First Name\" name=\"userFirstname\" required>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type=\"text\" placeholder=\"Last Name\" name=\"userLastName\" required>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type=\"email\" placeholder=\"Email\" name=\"userEmail\" required>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type=\"password\" placeholder=\"Password\" name=\"userPassword\" required>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type=\"text\" placeholder=\"Mobile\" name=\"userMobile\" required>\n                        </ion-input>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <p>Creating an account means you’re okay with our\n                    <a>Term and Services</a>,\n                    <a>Privacy Policy</a> and\n                    <a>Refund Policy</a>\n                </p>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-button expand=\"block\" type=\"submit\">Register</ion-button>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/form-register-three/form-register-three.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/form-register-three/form-register-three.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content div:first-child {\n  text-align: center; }\n  ion-content div:first-child img {\n    border-radius: 50%;\n    width: 150px;\n    opacity: 0.5; }\n  ion-content div:last-child {\n  width: 80%;\n  position: absolute;\n  margin-top: -50px; }\n  ion-content div:last-child ion-avatar {\n    float: right; }\n  ion-content div:last-child ion-avatar ion-icon {\n      zoom: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mb3JtLXJlZ2lzdGVyLXRocmVlL2Zvcm0tcmVnaXN0ZXItdGhyZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sa0JBQWtCLEVBQUE7RUFIeEI7SUFLVSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVksRUFBQTtFQVB0QjtFQVdRLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFiekI7SUFlVSxZQUFZLEVBQUE7RUFmdEI7TUFpQmdCLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcmVnaXN0ZXItdGhyZWUvZm9ybS1yZWdpc3Rlci10aHJlZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGRpdntcclxuICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgem9vbTogMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/form-register-three/form-register-three.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/form-register-three/form-register-three.page.ts ***!
  \*****************************************************************/
/*! exports provided: FormRegisterThreePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterThreePage", function() { return FormRegisterThreePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");



var FormRegisterThreePage = /** @class */ (function () {
    function FormRegisterThreePage(service) {
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
    FormRegisterThreePage.prototype.ngOnInit = function () { };
    FormRegisterThreePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-register-three',
            template: __webpack_require__(/*! ./form-register-three.page.html */ "./src/app/form-register-three/form-register-three.page.html"),
            styles: [__webpack_require__(/*! ./form-register-three.page.scss */ "./src/app/form-register-three/form-register-three.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__["CustomThemeService"]])
    ], FormRegisterThreePage);
    return FormRegisterThreePage;
}());



/***/ })

}]);
//# sourceMappingURL=form-register-three-form-register-three-module.js.map