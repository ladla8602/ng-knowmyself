(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-swipe-full-image-list-swipe-full-image-module"],{

/***/ "./src/app/list-swipe-full-image/list-swipe-full-image.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/list-swipe-full-image/list-swipe-full-image.module.ts ***!
  \***********************************************************************/
/*! exports provided: ListSwipeFullImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSwipeFullImagePageModule", function() { return ListSwipeFullImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_swipe_full_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-swipe-full-image.page */ "./src/app/list-swipe-full-image/list-swipe-full-image.page.ts");







var routes = [
    {
        path: '',
        component: _list_swipe_full_image_page__WEBPACK_IMPORTED_MODULE_6__["ListSwipeFullImagePage"]
    }
];
var ListSwipeFullImagePageModule = /** @class */ (function () {
    function ListSwipeFullImagePageModule() {
    }
    ListSwipeFullImagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_swipe_full_image_page__WEBPACK_IMPORTED_MODULE_6__["ListSwipeFullImagePage"]]
        })
    ], ListSwipeFullImagePageModule);
    return ListSwipeFullImagePageModule;
}());



/***/ }),

/***/ "./src/app/list-swipe-full-image/list-swipe-full-image.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/list-swipe-full-image/list-swipe-full-image.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Swipe Full Image</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- list with multiple iterations -->\n  <ion-list no-padding>\n    <!-- for sliding item  -->\n    <ion-item-sliding *ngFor=\"let item of items\" no-padding>\n      <ion-item no-padding>\n        <img src=\"{{item.img}}\" />\n      </ion-item>\n      <!-- slide item from left -->\n      <ion-item-options side=\"start\">\n        <ion-button fill=\"clear\">\n          <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"add-circle\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\">\n          <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"remove-circle\"></ion-icon>\n        </ion-button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/list-swipe-full-image/list-swipe-full-image.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/list-swipe-full-image/list-swipe-full-image.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-item {\n  --inner-padding-end: 0px; }\n\nion-content ion-item-options ion-button {\n  margin-top: 25%;\n  height: 50px; }\n\nion-content ion-item-options ion-button ion-icon {\n    zoom: 2.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9saXN0LXN3aXBlLWZ1bGwtaW1hZ2UvbGlzdC1zd2lwZS1mdWxsLWltYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHdCQUFvQixFQUFBOztBQUY1QjtFQU1nQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQVA1QjtJQVNvQixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0LXN3aXBlLWZ1bGwtaW1hZ2UvbGlzdC1zd2lwZS1mdWxsLWltYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudHtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIH1cclxuICAgIGlvbi1pdGVtLW9wdGlvbnN7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgICB6b29tOiAyLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list-swipe-full-image/list-swipe-full-image.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/list-swipe-full-image/list-swipe-full-image.page.ts ***!
  \*********************************************************************/
/*! exports provided: ListSwipeFullImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSwipeFullImagePage", function() { return ListSwipeFullImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");




var ListSwipeFullImagePage = /** @class */ (function () {
    function ListSwipeFullImagePage(events, service) {
        this.events = events;
        this.service = service;
        this.itemColor = [];
        this.iconColorVar = "";
        this.items = [
            { img: "assets/images/big-images/big1.jpg" },
            { img: "assets/images/big-images/big2.jpg" },
            { img: "assets/images/big-images/big3.jpg" },
            { img: "assets/images/big-images/big4.jpg" },
            { img: "assets/images/big-images/big5.jpg" },
            { img: "assets/images/big-images/big6.jpg" },
            { img: "assets/images/big-images/big7.jpg" },
            { img: "assets/images/big-images/big1.jpg" },
            { img: "assets/images/big-images/big2.jpg" },
            { img: "assets/images/big-images/big3.jpg" },
            { img: "assets/images/big-images/big4.jpg" },
            { img: "assets/images/big-images/big5.jpg" },
            { img: "assets/images/big-images/big6.jpg" },
            { img: "assets/images/big-images/big7.jpg" },
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
    ListSwipeFullImagePage.prototype.ngOnInit = function () { };
    ListSwipeFullImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-swipe-full-image',
            template: __webpack_require__(/*! ./list-swipe-full-image.page.html */ "./src/app/list-swipe-full-image/list-swipe-full-image.page.html"),
            styles: [__webpack_require__(/*! ./list-swipe-full-image.page.scss */ "./src/app/list-swipe-full-image/list-swipe-full-image.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_3__["CustomThemeService"]])
    ], ListSwipeFullImagePage);
    return ListSwipeFullImagePage;
}());



/***/ })

}]);
//# sourceMappingURL=list-swipe-full-image-list-swipe-full-image-module.js.map