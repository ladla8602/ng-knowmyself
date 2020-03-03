(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["button-outline-button-outline-module"],{

/***/ "./src/app/button-outline/button-outline.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/button-outline/button-outline.module.ts ***!
  \*********************************************************/
/*! exports provided: ButtonOutlinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonOutlinePageModule", function() { return ButtonOutlinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _button_outline_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-outline.page */ "./src/app/button-outline/button-outline.page.ts");







var routes = [
    {
        path: '',
        component: _button_outline_page__WEBPACK_IMPORTED_MODULE_6__["ButtonOutlinePage"]
    }
];
var ButtonOutlinePageModule = /** @class */ (function () {
    function ButtonOutlinePageModule() {
    }
    ButtonOutlinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_button_outline_page__WEBPACK_IMPORTED_MODULE_6__["ButtonOutlinePage"]]
        })
    ], ButtonOutlinePageModule);
    return ButtonOutlinePageModule;
}());



/***/ }),

/***/ "./src/app/button-outline/button-outline.page.html":
/*!*********************************************************!*\
  !*** ./src/app/button-outline/button-outline.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Outline Button</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid *ngFor=\"let item of items\">\n    <ion-text>\n      <h2>{{item.heading}}</h2>\n    </ion-text>\n    <ion-img src=\"{{item.image}}\"></ion-img>\n    <ion-item lines=\"none\" no-padding>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{item.personImage}}\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>{{item.personName}}</h3>\n        <p>{{item.email}}</p>\n      </ion-label>\n      <!-- button outline -->\n      <ion-button side=\"end\" fill=\"outline\" size=\"small\">Follow</ion-button>\n    </ion-item>\n    <p>\n      {{item.para}}\n    </p>\n    <p>\n      {{item.para}}\n    </p>\n    <ion-list>\n      <ion-item *ngFor=\"let item1 of item.friendImg\" lines=\"none\" no-padding>\n        <ion-thumbnail slot=\"start\">\n          <img src=\"{{item1.imag}}\">\n        </ion-thumbnail>\n        <ion-label>\n          <h3>{{item1.personNam}}</h3>\n          <p>{{item1.emai}}</p>\n        </ion-label>\n        <!-- button outline -->\n        <ion-button side=\"end\" fill=\"outline\" size=\"small\">Follow</ion-button>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/button-outline/button-outline.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/button-outline/button-outline.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-grid ion-item {\n  --inner-padding-end:0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9idXR0b24tb3V0bGluZS9idXR0b24tb3V0bGluZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxxQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi1vdXRsaW5lL2J1dHRvbi1vdXRsaW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIGlvbi1ncmlke1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6MDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/button-outline/button-outline.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/button-outline/button-outline.page.ts ***!
  \*******************************************************/
/*! exports provided: ButtonOutlinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonOutlinePage", function() { return ButtonOutlinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonOutlinePage = /** @class */ (function () {
    function ButtonOutlinePage() {
        this.items = [
            {
                heading: "Person Article One", image: "assets/images/Pictures/gallery-images/gallery_image2.png", personImage: "assets/images/Pictures/faces-images/face_image1.png", personName: "Muller Adams", email: "muller.adams@gamil.com", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement.",
                friendImg: [
                    { imag: "assets/images/Pictures/faces-images/face_image1.png", personNam: "Muller Adams", emai: "muller.adams@gamil.com" },
                    { imag: "assets/images/Pictures/faces-images/face_image2.png", personNam: "Earl Grills", emai: "earl.grills@gamil.com" },
                    { imag: "assets/images/Pictures/faces-images/face_image3.png", personNam: "Smith Edward", emai: "smith.edward@gamil.com" },
                ]
            },
            {
                heading: "Person Article Two", image: "assets/images/Pictures/gallery-images/gallery_image2.png", personImage: "assets/images/Pictures/faces-images/face_image2.png", personName: "Earl Grills", email: "earl.grills@gamil.com", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement.",
                friendImg: [
                    { imag: "assets/images/Pictures/faces-images/face_image2.png", personNam: "Muller Adams", emai: "muller.adams@gamil.com" },
                    { imag: "assets/images/Pictures/faces-images/face_image3.png", personNam: "Earl Grills", emai: "earl.grills@gamil.com" },
                    { imag: "assets/images/Pictures/faces-images/face_image1.png", personNam: "Smith Edward", emai: "smith.edward@gamil.com" },
                ]
            },
            {
                heading: "Person Article Three", image: "assets/images/Pictures/gallery-images/gallery_image2.png", personImage: "assets/images/Pictures/faces-images/face_image3.png", personName: "Smith Edward", email: "smith.edward@gamil.com", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement.",
                friendImg: [
                    { imag: "assets/images/Pictures/faces-images/face_image3.png", personNam: "Muller Adams", emai: "muller.adams@gamil.com" },
                    { imag: "assets/images/Pictures/faces-images/face_image1.png", personNam: "Earl Grills", emai: "earl.grills@gamil.com" },
                    { imag: "assets/images/Pictures/faces-images/face_image2.png", personNam: "Smith Edward", emai: "smith.edward@gamil.com" },
                ]
            },
        ];
    }
    ButtonOutlinePage.prototype.ngOnInit = function () {
    };
    ButtonOutlinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-outline',
            template: __webpack_require__(/*! ./button-outline.page.html */ "./src/app/button-outline/button-outline.page.html"),
            styles: [__webpack_require__(/*! ./button-outline.page.scss */ "./src/app/button-outline/button-outline.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonOutlinePage);
    return ButtonOutlinePage;
}());



/***/ })

}]);
//# sourceMappingURL=button-outline-button-outline-module.js.map