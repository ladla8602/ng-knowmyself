(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-album-grid-album-module"],{

/***/ "./src/app/grid-album/grid-album.module.ts":
/*!*************************************************!*\
  !*** ./src/app/grid-album/grid-album.module.ts ***!
  \*************************************************/
/*! exports provided: GridAlbumPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridAlbumPageModule", function() { return GridAlbumPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grid_album_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-album.page */ "./src/app/grid-album/grid-album.page.ts");







var routes = [
    {
        path: '',
        component: _grid_album_page__WEBPACK_IMPORTED_MODULE_6__["GridAlbumPage"]
    }
];
var GridAlbumPageModule = /** @class */ (function () {
    function GridAlbumPageModule() {
    }
    GridAlbumPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grid_album_page__WEBPACK_IMPORTED_MODULE_6__["GridAlbumPage"]]
        })
    ], GridAlbumPageModule);
    return GridAlbumPageModule;
}());



/***/ }),

/***/ "./src/app/grid-album/grid-album.page.html":
/*!*************************************************!*\
  !*** ./src/app/grid-album/grid-album.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Grid Album</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid no-padding>\n    <!-- single row contain 2 columns of equal lenght due to size=6  -->\n    <ion-row no-padding>\n      <ion-col *ngFor=\"let item of items\" size=\"6\" no-padding>\n        <img src=\"{{item.img}}\" alt=\"Image not loading\">\n        <ion-text>\n          <p>\n            <b>{{item.name}}</b>\n          </p>\n          <p>\n            <b>Images</b> ({{item.quant}})</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/grid-album/grid-album.page.scss":
/*!*************************************************!*\
  !*** ./src/app/grid-album/grid-album.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-col {\n  background: black; }\n  ion-content ion-col p {\n    color: white;\n    padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9ncmlkLWFsYnVtL2dyaWQtYWxidW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCLEVBQUE7RUFGekI7SUFJWSxZQUFZO0lBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ncmlkLWFsYnVtL2dyaWQtYWxidW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/grid-album/grid-album.page.ts":
/*!***********************************************!*\
  !*** ./src/app/grid-album/grid-album.page.ts ***!
  \***********************************************/
/*! exports provided: GridAlbumPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridAlbumPage", function() { return GridAlbumPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridAlbumPage = /** @class */ (function () {
    function GridAlbumPage() {
        this.items = [
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image1.png', quant: "2", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image2.png', quant: "4", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image3.png', quant: "12", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', quant: "20", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image5.png', quant: "4", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image6.png', quant: "8", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image7.png', quant: "9", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image1.png', quant: "10", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image2.png', quant: "12", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image3.png', quant: "4", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', quant: "2", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image5.png', quant: "11", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image6.png', quant: "20", },
            { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image7.png', quant: "4", },
        ];
    }
    GridAlbumPage.prototype.ngOnInit = function () {
    };
    GridAlbumPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-album',
            template: __webpack_require__(/*! ./grid-album.page.html */ "./src/app/grid-album/grid-album.page.html"),
            styles: [__webpack_require__(/*! ./grid-album.page.scss */ "./src/app/grid-album/grid-album.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridAlbumPage);
    return GridAlbumPage;
}());



/***/ })

}]);
//# sourceMappingURL=grid-album-grid-album-module.js.map