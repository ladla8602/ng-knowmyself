(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fab-simple-icon-fab-simple-icon-module"],{

/***/ "./src/app/fab-simple-icon/fab-simple-icon.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fab-simple-icon/fab-simple-icon.module.ts ***!
  \***********************************************************/
/*! exports provided: FabSimpleIconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabSimpleIconPageModule", function() { return FabSimpleIconPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fab_simple_icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab-simple-icon.page */ "./src/app/fab-simple-icon/fab-simple-icon.page.ts");







var routes = [
    {
        path: '',
        component: _fab_simple_icon_page__WEBPACK_IMPORTED_MODULE_6__["FabSimpleIconPage"]
    }
];
var FabSimpleIconPageModule = /** @class */ (function () {
    function FabSimpleIconPageModule() {
    }
    FabSimpleIconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fab_simple_icon_page__WEBPACK_IMPORTED_MODULE_6__["FabSimpleIconPage"]]
        })
    ], FabSimpleIconPageModule);
    return FabSimpleIconPageModule;
}());



/***/ }),

/***/ "./src/app/fab-simple-icon/fab-simple-icon.page.html":
/*!***********************************************************!*\
  !*** ./src/app/fab-simple-icon/fab-simple-icon.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Fab Simple With Icon</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n    <ion-list>\n        <ion-reorder-group (ionItemReorder)=\"reorderItems($event)\" disabled=\"false\">\n            <ion-item *ngFor=\"let item of products\">\n                <ion-avatar slot=\"start\">\n                    <ion-img src=\"{{item.image}}\"></ion-img>\n                </ion-avatar>\n                <ion-label>\n                    {{item.name}}\n                    <p>These celebirties are famous because...</p>\n                </ion-label>\n                <ion-reorder></ion-reorder>\n            </ion-item>\n        </ion-reorder-group>\n    </ion-list>\n</ion-content>\n<ion-footer>\n        <!-- float action button placed at the end and bottom of screen -->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-footer>"

/***/ }),

/***/ "./src/app/fab-simple-icon/fab-simple-icon.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/fab-simple-icon/fab-simple-icon.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-fab {\n  position: fixed; }\n  ion-footer ion-fab ion-icon {\n    zoom: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mYWItc2ltcGxlLWljb24vZmFiLXNpbXBsZS1pY29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGVBQWUsRUFBQTtFQUZ2QjtJQUlZLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZhYi1zaW1wbGUtaWNvbi9mYWItc2ltcGxlLWljb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlcntcclxuICAgIGlvbi1mYWJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB6b29tOiAxO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fab-simple-icon/fab-simple-icon.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/fab-simple-icon/fab-simple-icon.page.ts ***!
  \*********************************************************/
/*! exports provided: FabSimpleIconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabSimpleIconPage", function() { return FabSimpleIconPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FabSimpleIconPage = /** @class */ (function () {
    function FabSimpleIconPage() {
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
    FabSimpleIconPage.prototype.ngOnInit = function () {
    };
    FabSimpleIconPage.prototype.reorderItems = function (ev) {
        var itemMove = this.products.splice(ev.detail.from, 1)[0];
        this.products.splice(ev.detail.to, 0, itemMove);
        ev.detail.complete();
    };
    FabSimpleIconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fab-simple-icon',
            template: __webpack_require__(/*! ./fab-simple-icon.page.html */ "./src/app/fab-simple-icon/fab-simple-icon.page.html"),
            styles: [__webpack_require__(/*! ./fab-simple-icon.page.scss */ "./src/app/fab-simple-icon/fab-simple-icon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FabSimpleIconPage);
    return FabSimpleIconPage;
}());



/***/ })

}]);
//# sourceMappingURL=fab-simple-icon-fab-simple-icon-module.js.map