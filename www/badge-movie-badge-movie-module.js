(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["badge-movie-badge-movie-module"],{

/***/ "./src/app/badge-movie/badge-movie.module.ts":
/*!***************************************************!*\
  !*** ./src/app/badge-movie/badge-movie.module.ts ***!
  \***************************************************/
/*! exports provided: BadgeMoviePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeMoviePageModule", function() { return BadgeMoviePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _badge_movie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badge-movie.page */ "./src/app/badge-movie/badge-movie.page.ts");







var routes = [
    {
        path: '',
        component: _badge_movie_page__WEBPACK_IMPORTED_MODULE_6__["BadgeMoviePage"]
    }
];
var BadgeMoviePageModule = /** @class */ (function () {
    function BadgeMoviePageModule() {
    }
    BadgeMoviePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_badge_movie_page__WEBPACK_IMPORTED_MODULE_6__["BadgeMoviePage"]]
        })
    ], BadgeMoviePageModule);
    return BadgeMoviePageModule;
}());



/***/ }),

/***/ "./src/app/badge-movie/badge-movie.page.html":
/*!***************************************************!*\
  !*** ./src/app/badge-movie/badge-movie.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-padding >\n      <ion-card *ngFor=\"let p of items\">\n          <img  src=\"{{p.img}}\" />\n          <ion-card-header>\n            <ion-card-title>Lorem Ipsum Title</ion-card-title>\n            <ion-card-subtitle>Lorem Ipsum Subtitle</ion-card-subtitle>\n          </ion-card-header>\n      </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/badge-movie/badge-movie.page.scss":
/*!***************************************************!*\
  !*** ./src/app/badge-movie/badge-movie.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-card ion-card-header {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center; }\n  ion-content ion-card ion-card-header ion-card-title, ion-content ion-card ion-card-header ion-card-subtitle {\n    font-weight: bold;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9iYWRnZS1tb3ZpZS9iYWRnZS1tb3ZpZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxXQUFXO0VBQ1gsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQTtFQVJ4QjtJQVVRLGlCQUFpQjtJQUNqQixZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iYWRnZS1tb3ZpZS9iYWRnZS1tb3ZpZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICBpb24tY2FyZHtcclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBpb24tY2FyZC10aXRsZSwgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/badge-movie/badge-movie.page.ts":
/*!*************************************************!*\
  !*** ./src/app/badge-movie/badge-movie.page.ts ***!
  \*************************************************/
/*! exports provided: BadgeMoviePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeMoviePage", function() { return BadgeMoviePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgeMoviePage = /** @class */ (function () {
    function BadgeMoviePage() {
        this.items = [
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image1.png' },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image2.png' },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image3.png' },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image4.png' },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image5.png' },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image6.png' },
            { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image7.png' },
        ];
    }
    BadgeMoviePage.prototype.ngOnInit = function () {
    };
    BadgeMoviePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badge-movie',
            template: __webpack_require__(/*! ./badge-movie.page.html */ "./src/app/badge-movie/badge-movie.page.html"),
            styles: [__webpack_require__(/*! ./badge-movie.page.scss */ "./src/app/badge-movie/badge-movie.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeMoviePage);
    return BadgeMoviePage;
}());



/***/ })

}]);
//# sourceMappingURL=badge-movie-badge-movie-module.js.map