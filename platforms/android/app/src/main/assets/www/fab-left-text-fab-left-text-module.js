(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fab-left-text-fab-left-text-module"],{

/***/ "./src/app/fab-left-text/fab-left-text.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/fab-left-text/fab-left-text.module.ts ***!
  \*******************************************************/
/*! exports provided: FabLeftTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabLeftTextPageModule", function() { return FabLeftTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fab_left_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab-left-text.page */ "./src/app/fab-left-text/fab-left-text.page.ts");







var routes = [
    {
        path: '',
        component: _fab_left_text_page__WEBPACK_IMPORTED_MODULE_6__["FabLeftTextPage"]
    }
];
var FabLeftTextPageModule = /** @class */ (function () {
    function FabLeftTextPageModule() {
    }
    FabLeftTextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fab_left_text_page__WEBPACK_IMPORTED_MODULE_6__["FabLeftTextPage"]]
        })
    ], FabLeftTextPageModule);
    return FabLeftTextPageModule;
}());



/***/ }),

/***/ "./src/app/fab-left-text/fab-left-text.page.html":
/*!*******************************************************!*\
  !*** ./src/app/fab-left-text/fab-left-text.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Fab Left With Text</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-grid *ngFor=\"let item of items\">\n        <ion-text>\n            <h2>{{item.heading}}</h2>\n        </ion-text>\n\n        <ion-img src=\"{{item.image}}\"></ion-img>\n        <ion-row align-items-center>\n            <ion-col size=\"8\">\n                <ion-text>\n                    <h4>{{item.subheading}}</h4>\n                </ion-text>\n            </ion-col>\n            <ion-col align-self-end size=\"4\">\n                <ion-button>Share</ion-button>\n            </ion-col>\n        </ion-row>\n        <p>\n            {{item.para}}\n        </p>\n    </ion-grid>\n</ion-content>\n<ion-footer>\n    <!-- float action button placed at the end and bottom of screen -->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button>Share</ion-fab-button>\n        <!-- fab list show more buttons from left side on click -->\n        <ion-fab-list side=\"start\">\n            <ion-fab-button>ABC</ion-fab-button>\n            <ion-fab-button>ABC</ion-fab-button>\n            <ion-fab-button>ABC</ion-fab-button>\n            <ion-fab-button>ABC</ion-fab-button>\n            <ion-fab-button>ABC</ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n</ion-footer>"

/***/ }),

/***/ "./src/app/fab-left-text/fab-left-text.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/fab-left-text/fab-left-text.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-grid {\n  padding: 0 0 16px 0;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #ddd; }\n  ion-content ion-grid ion-text h2 {\n    margin-top: 0; }\n  ion-content ion-grid ion-text h4 {\n    margin: 0; }\n  ion-content ion-grid ion-button {\n    margin-left: 0;\n    margin-right: 0; }\n  ion-content ion-grid:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n    padding-bottom: 0; }\n  ion-content ion-grid ion-row ion-col:first-child {\n    padding-left: 0; }\n  ion-content ion-grid ion-row ion-col:last-child {\n    text-align: right;\n    padding-right: 0; }\n  ion-footer ion-fab {\n  position: fixed; }\n  ion-footer ion-fab ion-icon {\n    zoom: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mYWItbGVmdC10ZXh0L2ZhYi1sZWZ0LXRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBSUksbUJBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQiw2QkFBNEIsRUFBQTtFQU5oQztJQVVNLGFBQVksRUFBQTtFQVZsQjtJQWFNLFNBQVEsRUFBQTtFQWJkO0lBa0JJLGNBQWE7SUFDYixlQUFjLEVBQUE7RUFuQmxCO0lBdUJJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUF6QnJCO0lBaUNNLGVBQWMsRUFBQTtFQWpDcEI7SUFvQ1EsaUJBQWlCO0lBQ2pCLGdCQUFlLEVBQUE7RUFNdkI7RUFFSSxlQUFlLEVBQUE7RUFGbkI7SUFJTSxPQUFPLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mYWItbGVmdC10ZXh0L2ZhYi1sZWZ0LXRleHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9vdmVyYWxsIGNvbnRlbnQgb2YgcGFnZVxyXG5pb24tY29udGVudHtcclxuICAvL2dyaWQgaW5zaWRlIGNvbnRlbnQgXHJcbiAgaW9uLWdyaWR7XHJcbiAgICAvL2FwcGxpZWQgb24gb3ZlcmFsbCBncmlkIFxyXG4gICAgcGFkZGluZzogMCAwIDE2cHggMDtcclxuICAgIG1hcmdpbi1ib3R0b206MTJweDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XHJcbiAgICAvL3RleHQgY29udGFpbmluZyBoMiBhbmQgaDQgdGFnIFxyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGgye1xyXG4gICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgIH1cclxuICAgICAgaDR7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL2FsbCBidXR0b25zXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MDtcclxuICB9XHJcbiAgLy9sYXN0IGJ1dHRvbiBcclxuICAmOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICAvL292ZXJhbGwgcm93IFxyXG4gIGlvbi1yb3d7XHJcbiAgICAvL292ZXJhbGwgY29sdW1uIGluc2lkZSByb3cgXHJcbiAgICBpb24tY29se1xyXG4gICAgICAvL2ZpcnN0IGNvbHVtbiBvZiByb3dcclxuICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICAgIH1cclxuICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICBpb24tZmFie1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgIHpvb206IDE7XHJcbiAgICB9XHJcbiAgfSAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fab-left-text/fab-left-text.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/fab-left-text/fab-left-text.page.ts ***!
  \*****************************************************/
/*! exports provided: FabLeftTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabLeftTextPage", function() { return FabLeftTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FabLeftTextPage = /** @class */ (function () {
    function FabLeftTextPage() {
        this.items = [
            { heading: "News One", image: "assets/images/Pictures/gallery-images/gallery_image2.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
            { heading: "News Two", image: "assets/images/Pictures/gallery-images/gallery_image3.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
            { heading: "News Three", image: "assets/images/Pictures/gallery-images/gallery_image4.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
        ];
    }
    FabLeftTextPage.prototype.ngOnInit = function () {
    };
    FabLeftTextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fab-left-text',
            template: __webpack_require__(/*! ./fab-left-text.page.html */ "./src/app/fab-left-text/fab-left-text.page.html"),
            styles: [__webpack_require__(/*! ./fab-left-text.page.scss */ "./src/app/fab-left-text/fab-left-text.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FabLeftTextPage);
    return FabLeftTextPage;
}());



/***/ })

}]);
//# sourceMappingURL=fab-left-text-fab-left-text-module.js.map