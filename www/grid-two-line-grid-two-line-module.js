(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-two-line-grid-two-line-module"],{

/***/ "./src/app/grid-two-line/grid-two-line.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/grid-two-line/grid-two-line.module.ts ***!
  \*******************************************************/
/*! exports provided: GridTwoLinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridTwoLinePageModule", function() { return GridTwoLinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grid_two_line_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-two-line.page */ "./src/app/grid-two-line/grid-two-line.page.ts");







var routes = [
    {
        path: '',
        component: _grid_two_line_page__WEBPACK_IMPORTED_MODULE_6__["GridTwoLinePage"]
    }
];
var GridTwoLinePageModule = /** @class */ (function () {
    function GridTwoLinePageModule() {
    }
    GridTwoLinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grid_two_line_page__WEBPACK_IMPORTED_MODULE_6__["GridTwoLinePage"]]
        })
    ], GridTwoLinePageModule);
    return GridTwoLinePageModule;
}());



/***/ }),

/***/ "./src/app/grid-two-line/grid-two-line.page.html":
/*!*******************************************************!*\
  !*** ./src/app/grid-two-line/grid-two-line.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"toolbarTag\">\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Grid Two Line</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid no-padding>\n    <!-- single row contain 2 columns of equal lenght due to size=6  -->\n    <ion-row no-padding>\n      <ion-col [ngStyle]=\"{background:itemColor}\" *ngFor=\"let item of items\" size=\"6\" no-padding>\n        <img src=\"{{item.img}}\" alt=\"Image not loading\">\n        <ion-text>\n          <h4>\n            <b>{{item.name}}</b>\n          </h4>\n          <p>{{item.details}}</p>\n          <ion-icon name=\"star-outline\"></ion-icon>\n          <ion-icon name=\"star\"></ion-icon>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/grid-two-line/grid-two-line.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/grid-two-line/grid-two-line.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-col p, ion-content ion-col h4 {\n  color: white;\n  padding-left: 5px;\n  margin: 0; }\n\nion-content ion-col ion-icon {\n  color: white;\n  float: right;\n  padding: 0px 5px 0px 0px;\n  margin-top: -20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9ncmlkLXR3by1saW5lL2dyaWQtdHdvLWxpbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixTQUFTLEVBQUE7O0FBTHJCO0VBUVksWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ncmlkLXR3by1saW5lL2dyaWQtdHdvLWxpbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIHAsaDR7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/grid-two-line/grid-two-line.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/grid-two-line/grid-two-line.page.ts ***!
  \*****************************************************/
/*! exports provided: GridTwoLinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridTwoLinePage", function() { return GridTwoLinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");



var GridTwoLinePage = /** @class */ (function () {
    function GridTwoLinePage(service) {
        this.service = service;
        this.itemColor = [];
        this.iconColorVar = "";
        this.items = [
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image1.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image2.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image3.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image4.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image5.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image6.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image7.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image1.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image2.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image3.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image4.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image5.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image6.png', details: '14 June 2019' },
            { name: 'Lorem Ipsum', img: 'assets/images/Pictures/gallery-images/gallery_image7.png', details: '14 June 2019' },
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
    GridTwoLinePage.prototype.ngOnInit = function () {
    };
    GridTwoLinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-two-line',
            template: __webpack_require__(/*! ./grid-two-line.page.html */ "./src/app/grid-two-line/grid-two-line.page.html"),
            styles: [__webpack_require__(/*! ./grid-two-line.page.scss */ "./src/app/grid-two-line/grid-two-line.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__["CustomThemeService"]])
    ], GridTwoLinePage);
    return GridTwoLinePage;
}());



/***/ })

}]);
//# sourceMappingURL=grid-two-line-grid-two-line-module.js.map