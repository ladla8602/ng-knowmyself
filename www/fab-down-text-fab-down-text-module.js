(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fab-down-text-fab-down-text-module"],{

/***/ "./src/app/fab-down-text/fab-down-text.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/fab-down-text/fab-down-text.module.ts ***!
  \*******************************************************/
/*! exports provided: FabDownTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabDownTextPageModule", function() { return FabDownTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fab_down_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab-down-text.page */ "./src/app/fab-down-text/fab-down-text.page.ts");







var routes = [
    {
        path: '',
        component: _fab_down_text_page__WEBPACK_IMPORTED_MODULE_6__["FabDownTextPage"]
    }
];
var FabDownTextPageModule = /** @class */ (function () {
    function FabDownTextPageModule() {
    }
    FabDownTextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fab_down_text_page__WEBPACK_IMPORTED_MODULE_6__["FabDownTextPage"]]
        })
    ], FabDownTextPageModule);
    return FabDownTextPageModule;
}());



/***/ }),

/***/ "./src/app/fab-down-text/fab-down-text.page.html":
/*!*******************************************************!*\
  !*** ./src/app/fab-down-text/fab-down-text.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Down Fab with text</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-list>\n        <ion-reorder-group (ionItemReorder)=\"reorderItems($event)\" disabled=\"false\">\n            <ion-item *ngFor=\"let item of products\">\n                <ion-avatar slot=\"start\">\n                    <ion-img src=\"{{item.image}}\"></ion-img>\n                </ion-avatar>\n                <ion-label>\n                    {{item.name}}\n                    <p>These celebirties are famous because...</p>\n                </ion-label>\n                <ion-reorder></ion-reorder>\n            </ion-item>\n        </ion-reorder-group>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <!-- float action button placed at the end and center of screen -->\n    <ion-fab vertical=\"center\" horizontal=\"end\">\n        <ion-fab-button>\n            Share\n        </ion-fab-button>\n        <!-- fab list show more buttons downward on click -->\n        <ion-fab-list side=\"bottom\">\n            <ion-fab-button>ABC</ion-fab-button>\n            <ion-fab-button>ABC</ion-fab-button>\n            <ion-fab-button>ABC</ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n</ion-footer>"

/***/ }),

/***/ "./src/app/fab-down-text/fab-down-text.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/fab-down-text/fab-down-text.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-fab {\n  position: fixed; }\n  ion-footer ion-fab ion-icon {\n    zoom: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mYWItZG93bi10ZXh0L2ZhYi1kb3duLXRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZUFBZSxFQUFBO0VBRnZCO0lBSVksT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmFiLWRvd24tdGV4dC9mYWItZG93bi10ZXh0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXJ7XHJcbiAgICBpb24tZmFie1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgem9vbTogMTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/fab-down-text/fab-down-text.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/fab-down-text/fab-down-text.page.ts ***!
  \*****************************************************/
/*! exports provided: FabDownTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabDownTextPage", function() { return FabDownTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FabDownTextPage = /** @class */ (function () {
    function FabDownTextPage() {
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
    FabDownTextPage.prototype.ngOnInit = function () {
    };
    FabDownTextPage.prototype.reorderItems = function (ev) {
        var itemMove = this.products.splice(ev.detail.from, 1)[0];
        this.products.splice(ev.detail.to, 0, itemMove);
        ev.detail.complete();
    };
    FabDownTextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fab-down-text',
            template: __webpack_require__(/*! ./fab-down-text.page.html */ "./src/app/fab-down-text/fab-down-text.page.html"),
            styles: [__webpack_require__(/*! ./fab-down-text.page.scss */ "./src/app/fab-down-text/fab-down-text.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FabDownTextPage);
    return FabDownTextPage;
}());



/***/ })

}]);
//# sourceMappingURL=fab-down-text-fab-down-text-module.js.map