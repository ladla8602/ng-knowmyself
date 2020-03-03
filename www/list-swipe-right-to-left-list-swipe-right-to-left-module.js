(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-swipe-right-to-left-list-swipe-right-to-left-module"],{

/***/ "./src/app/list-swipe-right-to-left/list-swipe-right-to-left.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/list-swipe-right-to-left/list-swipe-right-to-left.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ListSwipeRightToLeftPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSwipeRightToLeftPageModule", function() { return ListSwipeRightToLeftPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_swipe_right_to_left_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-swipe-right-to-left.page */ "./src/app/list-swipe-right-to-left/list-swipe-right-to-left.page.ts");







var routes = [
    {
        path: '',
        component: _list_swipe_right_to_left_page__WEBPACK_IMPORTED_MODULE_6__["ListSwipeRightToLeftPage"]
    }
];
var ListSwipeRightToLeftPageModule = /** @class */ (function () {
    function ListSwipeRightToLeftPageModule() {
    }
    ListSwipeRightToLeftPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_swipe_right_to_left_page__WEBPACK_IMPORTED_MODULE_6__["ListSwipeRightToLeftPage"]]
        })
    ], ListSwipeRightToLeftPageModule);
    return ListSwipeRightToLeftPageModule;
}());



/***/ }),

/***/ "./src/app/list-swipe-right-to-left/list-swipe-right-to-left.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/list-swipe-right-to-left/list-swipe-right-to-left.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>List swipe Right To Left</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <!-- list with multiple iterations -->\n    <ion-list>\n        <!-- for sliding item  -->\n        <ion-item-sliding *ngFor=\"let item of products\">\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                    <ion-img src=\"{{item.image}}\"></ion-img>\n                </ion-avatar>\n                <ion-label>\n                    {{item.name}}\n                    <p>It is very rare that a 100% cotton....</p>\n                </ion-label>\n                <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\n            </ion-item>\n            <!-- slide item from right -->\n            <ion-item-options side=\"end\">\n                <ion-button fill=\"clear\">\n                    <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"add-circle\"></ion-icon>\n                </ion-button>\n                <ion-button fill=\"clear\">\n                    <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"remove-circle\"></ion-icon>\n                </ion-button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/list-swipe-right-to-left/list-swipe-right-to-left.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/list-swipe-right-to-left/list-swipe-right-to-left.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-item ion-icon {\n  zoom: 1.5; }\n\nion-content ion-item-options ion-button {\n  margin-top: 15px; }\n\nion-content ion-item-options ion-button ion-icon {\n    zoom: 1.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9saXN0LXN3aXBlLXJpZ2h0LXRvLWxlZnQvbGlzdC1zd2lwZS1yaWdodC10by1sZWZ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLFNBQVMsRUFBQTs7QUFIckI7RUFRWSxnQkFBZ0IsRUFBQTs7QUFSNUI7SUFVZ0IsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1zd2lwZS1yaWdodC10by1sZWZ0L2xpc3Qtc3dpcGUtcmlnaHQtdG8tbGVmdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB6b29tOiAxLjU7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIGlvbi1pdGVtLW9wdGlvbnN7XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICB6b29tOiAxLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list-swipe-right-to-left/list-swipe-right-to-left.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/list-swipe-right-to-left/list-swipe-right-to-left.page.ts ***!
  \***************************************************************************/
/*! exports provided: ListSwipeRightToLeftPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSwipeRightToLeftPage", function() { return ListSwipeRightToLeftPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");



var ListSwipeRightToLeftPage = /** @class */ (function () {
    function ListSwipeRightToLeftPage(service) {
        this.service = service;
        this.itemColor = [];
        this.iconColorVar = "";
        this.products = [
            { image: "assets/images/shirts/shirt-1.jpg", name: "CLASSIC FIT POLO", },
            { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC SHIRT", },
            { image: "assets/images/shirts/shirt-3.jpg", name: "CLASSIC FIT COTTON", },
            { image: "assets/images/shirts/shirt-4.jpg", name: "CLASSIC FIT POLO", },
            { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON FIT SHIRT", },
            { image: "assets/images/shirts/shirt-6.jpg", name: "CLASSIC COTTON SHIRT", },
            { image: "assets/images/shirts/shirt-7.jpg", name: "HAMPTON FIT SHIRT", },
            { image: "assets/images/shirts/shirt-8.jpg", name: "HAMPTON CLASSIC SHIRT", },
            { image: "assets/images/shirts/shirt-6.jpg", name: "CLASSIC COTTON SHIRT", },
            { image: "assets/images/shirts/shirt-7.jpg", name: "HAMPTON FIT SHIRT", },
            { image: "assets/images/shirts/shirt-4.jpg", name: "CLASSIC FIT POLO", },
            { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON FIT SHIRT", },
            { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC SHIRT", },
            { image: "assets/images/shirts/shirt-3.jpg", name: "CLASSIC FIT COTTON", },
        ];
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
    ListSwipeRightToLeftPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-swipe-right-to-left',
            template: __webpack_require__(/*! ./list-swipe-right-to-left.page.html */ "./src/app/list-swipe-right-to-left/list-swipe-right-to-left.page.html"),
            styles: [__webpack_require__(/*! ./list-swipe-right-to-left.page.scss */ "./src/app/list-swipe-right-to-left/list-swipe-right-to-left.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__["CustomThemeService"]])
    ], ListSwipeRightToLeftPage);
    return ListSwipeRightToLeftPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-swipe-right-to-left-list-swipe-right-to-left-module.js.map