(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["button-expand-button-expand-module"],{

/***/ "./src/app/button-expand/button-expand.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/button-expand/button-expand.module.ts ***!
  \*******************************************************/
/*! exports provided: ButtonExpandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonExpandPageModule", function() { return ButtonExpandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _button_expand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-expand.page */ "./src/app/button-expand/button-expand.page.ts");







var routes = [
    {
        path: '',
        component: _button_expand_page__WEBPACK_IMPORTED_MODULE_6__["ButtonExpandPage"]
    }
];
var ButtonExpandPageModule = /** @class */ (function () {
    function ButtonExpandPageModule() {
    }
    ButtonExpandPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_button_expand_page__WEBPACK_IMPORTED_MODULE_6__["ButtonExpandPage"]]
        })
    ], ButtonExpandPageModule);
    return ButtonExpandPageModule;
}());



/***/ }),

/***/ "./src/app/button-expand/button-expand.page.html":
/*!*******************************************************!*\
  !*** ./src/app/button-expand/button-expand.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Button Full Expand</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-img src=\"assets/images/icons_stripe.svg\"></ion-img>\n  <form>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Email or Username\" name=\"email\" required>\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"password\" placeholder=\"Password\" name=\"password\" required>\n      </ion-input>\n    </ion-item>\n  </form>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" type=\"submit\">Login</ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <!-- expanded buton -->\n      <ion-button expand=\"block\" fill=\"clear\">\n        <b>I've Forgotten My Password?</b>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <!-- expanded buton -->\n      <ion-button expand=\"block\" type=\"submit\">Login with\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <!-- expanded buton -->\n      <ion-button expand=\"block\" color=\"danger\" type=\"submit\">Login with\n        <ion-icon name=\"logo-google\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <!-- expanded buton -->\n      <ion-button fill=\"outline\" expand=\"block\" type=\"submit\">Register</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/button-expand/button-expand.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/button-expand/button-expand.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-img {\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9idXR0b24tZXhwYW5kL2J1dHRvbi1leHBhbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uLWV4cGFuZC9idXR0b24tZXhwYW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIGlvbi1pbWd7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/button-expand/button-expand.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/button-expand/button-expand.page.ts ***!
  \*****************************************************/
/*! exports provided: ButtonExpandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonExpandPage", function() { return ButtonExpandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonExpandPage = /** @class */ (function () {
    function ButtonExpandPage() {
        this.items = [
            { heading: "News One", image: "assets/images/Pictures/gallery-images/gallery_image2.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
            { heading: "News Two", image: "assets/images/Pictures/gallery-images/gallery_image3.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
            { heading: "News Three", image: "assets/images/Pictures/gallery-images/gallery_image4.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
        ];
    }
    ButtonExpandPage.prototype.ngOnInit = function () {
    };
    ButtonExpandPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-expand',
            template: __webpack_require__(/*! ./button-expand.page.html */ "./src/app/button-expand/button-expand.page.html"),
            styles: [__webpack_require__(/*! ./button-expand.page.scss */ "./src/app/button-expand/button-expand.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonExpandPage);
    return ButtonExpandPage;
}());



/***/ })

}]);
//# sourceMappingURL=button-expand-button-expand-module.js.map