(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fab-right-text-fab-right-text-module"],{

/***/ "./src/app/fab-right-text/fab-right-text.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/fab-right-text/fab-right-text.module.ts ***!
  \*********************************************************/
/*! exports provided: FabRightTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabRightTextPageModule", function() { return FabRightTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fab_right_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab-right-text.page */ "./src/app/fab-right-text/fab-right-text.page.ts");







var routes = [
    {
        path: '',
        component: _fab_right_text_page__WEBPACK_IMPORTED_MODULE_6__["FabRightTextPage"]
    }
];
var FabRightTextPageModule = /** @class */ (function () {
    function FabRightTextPageModule() {
    }
    FabRightTextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fab_right_text_page__WEBPACK_IMPORTED_MODULE_6__["FabRightTextPage"]]
        })
    ], FabRightTextPageModule);
    return FabRightTextPageModule;
}());



/***/ }),

/***/ "./src/app/fab-right-text/fab-right-text.page.html":
/*!*********************************************************!*\
  !*** ./src/app/fab-right-text/fab-right-text.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Right Fab with text</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n    <ion-list>\n        <ion-reorder-group (ionItemReorder)=\"reorderItems($event)\" disabled=\"false\">\n            <ion-item *ngFor=\"let item of products\">\n                <ion-avatar slot=\"start\">\n                    <ion-img src=\"{{item.image}}\"></ion-img>\n                </ion-avatar>\n                <ion-label>\n                    {{item.name}}\n                    <p>These celebirties are famous because...</p>\n                </ion-label>\n                <ion-reorder></ion-reorder>\n            </ion-item>\n        </ion-reorder-group>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <!-- float action button placed at the left and center of screen -->\n    <ion-fab vertical=\"center\" horizontal=\"start\">\n        <ion-fab-button>\n            Share\n        </ion-fab-button>\n        <!-- fab list show more buttons from right side on click -->\n        <ion-fab-list side=\"end\">\n            <ion-fab-button>ABC</ion-fab-button>\n            <ion-fab-button>ABC</ion-fab-button>\n            <ion-fab-button>ABC</ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n</ion-footer>"

/***/ }),

/***/ "./src/app/fab-right-text/fab-right-text.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/fab-right-text/fab-right-text.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-fab {\n  position: fixed; }\n  ion-footer ion-fab ion-icon {\n    zoom: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mYWItcmlnaHQtdGV4dC9mYWItcmlnaHQtdGV4dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxlQUFlLEVBQUE7RUFGdkI7SUFJWSxPQUFPLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mYWItcmlnaHQtdGV4dC9mYWItcmlnaHQtdGV4dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVye1xyXG4gICAgaW9uLWZhYntcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIHpvb206IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/fab-right-text/fab-right-text.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/fab-right-text/fab-right-text.page.ts ***!
  \*******************************************************/
/*! exports provided: FabRightTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabRightTextPage", function() { return FabRightTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FabRightTextPage = /** @class */ (function () {
    function FabRightTextPage() {
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
    FabRightTextPage.prototype.ngOnInit = function () {
    };
    FabRightTextPage.prototype.reorderItems = function (ev) {
        var itemMove = this.products.splice(ev.detail.from, 1)[0];
        this.products.splice(ev.detail.to, 0, itemMove);
        ev.detail.complete();
    };
    FabRightTextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fab-right-text',
            template: __webpack_require__(/*! ./fab-right-text.page.html */ "./src/app/fab-right-text/fab-right-text.page.html"),
            styles: [__webpack_require__(/*! ./fab-right-text.page.scss */ "./src/app/fab-right-text/fab-right-text.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FabRightTextPage);
    return FabRightTextPage;
}());



/***/ })

}]);
//# sourceMappingURL=fab-right-text-fab-right-text-module.js.map