(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["button-transparent-button-transparent-module"],{

/***/ "./src/app/button-transparent/button-transparent.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/button-transparent/button-transparent.module.ts ***!
  \*****************************************************************/
/*! exports provided: ButtonTransparentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTransparentPageModule", function() { return ButtonTransparentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _button_transparent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-transparent.page */ "./src/app/button-transparent/button-transparent.page.ts");







var routes = [
    {
        path: '',
        component: _button_transparent_page__WEBPACK_IMPORTED_MODULE_6__["ButtonTransparentPage"]
    }
];
var ButtonTransparentPageModule = /** @class */ (function () {
    function ButtonTransparentPageModule() {
    }
    ButtonTransparentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_button_transparent_page__WEBPACK_IMPORTED_MODULE_6__["ButtonTransparentPage"]]
        })
    ], ButtonTransparentPageModule);
    return ButtonTransparentPageModule;
}());



/***/ }),

/***/ "./src/app/button-transparent/button-transparent.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/button-transparent/button-transparent.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Button Transparent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid *ngFor=\"let p of products\">\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-list>\n            <ion-item lines=\"full\">\n              {{p.name}}\n            </ion-item>\n            <ion-item lines=\"full\">\n              <ion-row align-items-center>\n                <ion-col size=\"4\" no-padding>\n                  <img src=\"{{p.image}}\" />\n                </ion-col>\n                <ion-col no-padding size=\"8\">\n                  <ion-row>\n                    <ion-col size=\"5\">Price :</ion-col>\n                    <ion-col size=\"7\">\n                      $ {{p.price}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row align-items-center>\n                    <ion-col size=\"5\">Quantity :</ion-col>\n                    <ion-col size=\"7\">\n                      <ion-button size=\"small\" fill=\"outline\">\n                        -\n                      </ion-button>\n                      <ion-text>\n                        <p>1</p>\n                      </ion-text>\n                      <ion-button size=\"small\" fill=\"outline\">\n                        +\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row align-items-center>\n                    <ion-col size=\"5\">\n                      <b>Sub Total :</b>\n                    </ion-col>\n                    <ion-col size=\"7\">\n                      <b>\n                        $ {{p.price}}\n                      </b>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n            <ion-item lines=\"full\">\n              <ion-button>\n                View\n              </ion-button>\n              <!-- button transparent -->\n              <ion-button fill=\"clear\" color=\"danger\">\n                Remove\n              </ion-button>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"7\">\n      <ion-text>\n        <h4>\n          Total : $ 100.50\n        </h4>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-button>Proceed</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/button-transparent/button-transparent.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/button-transparent/button-transparent.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card {\n  margin: 0; }\n  ion-content ion-card p {\n    margin: 3px 8px;\n    display: inline-block; }\n  ion-content ion-card ion-col {\n    text-align: end; }\n  ion-content ion-card ion-list {\n    background: white; }\n  ion-content ion-card ion-list ion-item {\n      --background: white; }\n  ion-footer ion-row {\n  background: white; }\n  ion-footer ion-row ion-col:last-child {\n    text-align: end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9idXR0b24tdHJhbnNwYXJlbnQvYnV0dG9uLXRyYW5zcGFyZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLFNBQVMsRUFBQTtFQUhqQjtJQUtZLGVBQWU7SUFDbkIscUJBQXFCLEVBQUE7RUFON0I7SUFTWSxlQUFlLEVBQUE7RUFUM0I7SUFZWSxpQkFBaUIsRUFBQTtFQVo3QjtNQWNZLG1CQUFhLEVBQUE7RUFLekI7RUFFUSxpQkFBaUIsRUFBQTtFQUZ6QjtJQUtnQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9idXR0b24tdHJhbnNwYXJlbnQvYnV0dG9uLXRyYW5zcGFyZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIFxuICAgIGlvbi1jYXJke1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBtYXJnaW46IDNweCA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1saXN0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9XG59XG5pb24tZm9vdGVye1xuICAgIGlvbi1yb3d7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/button-transparent/button-transparent.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/button-transparent/button-transparent.page.ts ***!
  \***************************************************************/
/*! exports provided: ButtonTransparentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTransparentPage", function() { return ButtonTransparentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonTransparentPage = /** @class */ (function () {
    function ButtonTransparentPage() {
        this.products = [
            { image: "assets/images/shirts/shirt-1.jpg", name: "CLASSIC FIT SOFT-TOUCH POLO", price: "10.41" },
            { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC FIT SHIRT", price: "11.62" },
            { image: "assets/images/shirts/shirt-3.jpg", name: "CLASSIC FIT COTTON  SHIRT", price: "12.23" },
            { image: "assets/images/shirts/shirt-4.jpg", name: "CLASSIC FIT SOFT POLO", price: "13.75" },
            { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC FIT SHIRT", price: "14.64" },
            { image: "assets/images/shirts/shirt-6.jpg", name: "CLASSIC FIT COTTON  SHIRT", price: "15.36" },
            { image: "assets/images/shirts/shirt-7.jpg", name: "HAMPTON CLASSIC FIT SHIRT", price: "16.61" },
            { image: "assets/images/shirts/shirt-8.jpg", name: "HAMPTON CLASSIC FIT SHIRT", price: "17.72" },
        ];
    }
    ButtonTransparentPage.prototype.ngOnInit = function () {
    };
    ButtonTransparentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-transparent',
            template: __webpack_require__(/*! ./button-transparent.page.html */ "./src/app/button-transparent/button-transparent.page.html"),
            styles: [__webpack_require__(/*! ./button-transparent.page.scss */ "./src/app/button-transparent/button-transparent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonTransparentPage);
    return ButtonTransparentPage;
}());



/***/ })

}]);
//# sourceMappingURL=button-transparent-button-transparent-module.js.map