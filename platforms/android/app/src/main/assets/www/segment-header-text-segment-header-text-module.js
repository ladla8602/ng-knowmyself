(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segment-header-text-segment-header-text-module"],{

/***/ "./src/app/segment-header-text/segment-header-text.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/segment-header-text/segment-header-text.module.ts ***!
  \*******************************************************************/
/*! exports provided: SegmentHeaderTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentHeaderTextPageModule", function() { return SegmentHeaderTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _segment_header_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segment-header-text.page */ "./src/app/segment-header-text/segment-header-text.page.ts");







var routes = [
    {
        path: '',
        component: _segment_header_text_page__WEBPACK_IMPORTED_MODULE_6__["SegmentHeaderTextPage"]
    }
];
var SegmentHeaderTextPageModule = /** @class */ (function () {
    function SegmentHeaderTextPageModule() {
    }
    SegmentHeaderTextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_segment_header_text_page__WEBPACK_IMPORTED_MODULE_6__["SegmentHeaderTextPage"]]
        })
    ], SegmentHeaderTextPageModule);
    return SegmentHeaderTextPageModule;
}());



/***/ }),

/***/ "./src/app/segment-header-text/segment-header-text.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/segment-header-text/segment-header-text.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Segments Header Text</ion-title>\n  </ion-toolbar>\n  <!-- segment header button  -->\n  <ion-segment [(ngModel)]=\"segments\">\n    <ion-segment-button value=\"segmentOne\" checked>{{ 'Latest' }}</ion-segment-button>\n    <ion-segment-button value=\"segmentTwo\">{{ 'On Sale' }} </ion-segment-button>\n    <ion-segment-button value=\"segmentThree\"> {{ 'Featured' }}</ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- name of segment to access segment on runtime -->\n  <div [ngSwitch]=\"segments\">\n    <!-- segment One -->\n    <div *ngSwitchCase=\"'segmentOne'\">\n      <ion-grid *ngFor=\"let item of [1,2,3,4]\">\n        <ion-slides @itemState [options]=\"sliderConfig\">\n          <ion-slide *ngFor=\"let product of items\">\n            <ion-card>\n              <ion-card-content>\n                {{ product.name }} - ${{ product.price }}\n                <ion-img src=\"{{product.img}}\"></ion-img>\n                <ion-button expand=\"full\">Buy Now</ion-button>\n              </ion-card-content>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </ion-grid>\n    </div>\n    <!-- segment two -->\n    <div *ngSwitchCase=\"'segmentTwo'\">\n      <div *ngFor=\"let cat of data\" class=\"category-block\">\n        <ion-row no-padding>\n          <ion-col text-left button tappable (click)=\"cat.expanded = !cat.expanded\" align-self-center>\n            <ion-item>\n              <p>{{ cat.category }}</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-slides @itemState [options]=\"sliderConfig\">\n          <ion-slide *ngFor=\"let product of cat.products\">\n            <div *ngIf=\"cat.expanded\">\n              <ion-card>\n                <ion-card-content>\n                  {{ product.name }} - ${{ product.price }}\n                  <img src=\"{{product.image}}\">\n                  <ion-button expand=\"full\" (click)=\"addToCart(product)\">Buy Now</ion-button>\n                </ion-card-content>\n              </ion-card>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n    <!-- segment three -->\n    <div *ngSwitchCase=\"'segmentThree'\">\n      <ion-slides @itemState [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let product of items\">\n          <ion-card>\n            <ion-card-content>\n              {{ product.name }} - ${{ product.price }}\n              <ion-img src=\"{{product.img}}\"></ion-img>\n              <ion-button expand=\"full\">Buy Now</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n      <ion-list>\n        <ion-item *ngFor=\"let mProduct of itemsList\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{mProduct.img}}\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{ mProduct.text }}</h2>\n            <p>{{mProduct.text1}}</p>\n          </ion-label>\n          <ion-icon name=\"cart\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/segment-header-text/segment-header-text.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/segment-header-text/segment-header-text.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-segment {\n  --color-checked: white !important; }\n\nion-content {\n  --padding-bottom: 5px;\n  --padding-end: 5px;\n  --padding-start: 5px;\n  --padding-top: 5px; }\n\nion-content ion-card {\n    margin: 5px;\n    padding: 10px; }\n\nion-content ion-card ion-card-content {\n      padding: 0; }\n\nion-content ion-card ion-card-content ion-col:first-child {\n        text-align: left; }\n\nion-content ion-card ion-card-content ion-col:last-child {\n        text-align: right; }\n\nion-content ion-card ion-card-content ion-button {\n        margin-left: 0;\n        margin-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9zZWdtZW50LWhlYWRlci10ZXh0L3NlZ21lbnQtaGVhZGVyLXRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUNBQWdCLEVBQUE7O0FBR3hCO0VBQ0kscUJBQWlCO0VBQ2pCLGtCQUFjO0VBQ2Qsb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUE7O0FBSmxCO0lBT1EsV0FBVztJQUNYLGFBQWEsRUFBQTs7QUFSckI7TUFXWSxVQUFTLEVBQUE7O0FBWHJCO1FBZW9CLGdCQUFnQixFQUFBOztBQWZwQztRQWtCb0IsaUJBQWlCLEVBQUE7O0FBbEJyQztRQXNCZSxjQUFjO1FBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VnbWVudC1oZWFkZXItdGV4dC9zZWdtZW50LWhlYWRlci10ZXh0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24tc2VnbWVudHtcclxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDVweDtcclxuXHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/segment-header-text/segment-header-text.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/segment-header-text/segment-header-text.page.ts ***!
  \*****************************************************************/
/*! exports provided: SegmentHeaderTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentHeaderTextPage", function() { return SegmentHeaderTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var SegmentHeaderTextPage = /** @class */ (function () {
    function SegmentHeaderTextPage() {
        this.segments = 'segmentOne';
        this.sliderConfig = {
            slidesPerView: 2.2,
            spaceBetween: 0
        };
        //for segment one
        this.items = [
            {
                id: '0',
                name: "Bed",
                price: "250",
                img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png"
            },
            {
                id: '1',
                name: "Dress",
                price: "1800",
                img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png"
            },
            {
                id: '2',
                name: "Stand",
                price: "3200",
                img: "assets/images/Pictures/app-slicing/cell_phone_stand.png"
            },
            {
                id: '3',
                name: "Chair",
                price: "1200",
                img: "assets/images/Pictures/app-slicing/red_and_black_chair.png"
            }
        ];
        //for segment two
        this.data = [
            {
                category: 'Product Category One',
                expanded: false,
                products: [
                    { id: 0, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 1, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                    { id: 2, name: 'Stand', price: '190', image: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
                    { id: 3, name: 'Red Chair', price: '70', image: "assets/images/Pictures/app-slicing/red_and_black_chair.png" }
                ]
            },
            {
                category: 'Product Category Two',
                products: [
                    { id: 4, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 5, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                ]
            },
            {
                category: 'Product Category Three',
                products: [
                    { id: 6, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 7, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                    { id: 8, name: 'Stand', price: '190', image: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
                    { id: 9, name: 'Red Chair', price: '70', image: "assets/images/Pictures/app-slicing/red_and_black_chair.png" }
                ]
            },
            {
                category: 'Product Category Four',
                products: [
                    { id: 10, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 11, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                ]
            },
            {
                category: 'Product category Five',
                products: [
                    { id: 12, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 13, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                    { id: 14, name: 'Stand', price: '190', image: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
                    { id: 15, name: 'Red Chair', price: '70', image: "assets/images/Pictures/app-slicing/red_and_black_chair.png" }
                ]
            },
            {
                category: 'Product Category Six',
                products: [
                    { id: 16, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 17, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                ]
            },
            {
                category: 'Product Category Seven',
                products: [
                    { id: 18, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 19, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                    { id: 20, name: 'Stand', price: '190', image: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
                ]
            },
            {
                category: 'Product Category Eight',
                products: [
                    { id: 21, name: 'Baby Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 22, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                ]
            },
            {
                category: 'Product Category Nine',
                products: [
                    { id: 23, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 24, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                    { id: 25, name: 'Stand', price: '190', image: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
                    { id: 26, name: 'Red Chair', price: '70', image: "assets/images/Pictures/app-slicing/red_and_black_chair.png" }
                ]
            },
            {
                category: 'Product Category Ten',
                products: [
                    { id: 27, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 28, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                ]
            },
            {
                category: 'Product Category One',
                expanded: false,
                products: [
                    { id: 0, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 1, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                    { id: 2, name: 'Stand', price: '190', image: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
                    { id: 3, name: 'Red Chair', price: '70', image: "assets/images/Pictures/app-slicing/red_and_black_chair.png" }
                ]
            },
            {
                category: 'Product Category Two',
                products: [
                    { id: 4, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 5, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                ]
            },
            {
                category: 'Product Category Three',
                products: [
                    { id: 6, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 7, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                    { id: 8, name: 'Stand', price: '190', image: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
                    { id: 9, name: 'Red Chair', price: '70', image: "assets/images/Pictures/app-slicing/red_and_black_chair.png" }
                ]
            },
            {
                category: 'Product Category Four',
                products: [
                    { id: 10, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 11, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                ]
            },
            {
                category: 'Product category Five',
                products: [
                    { id: 12, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 13, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                    { id: 14, name: 'Stand', price: '190', image: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
                    { id: 15, name: 'Red Chair', price: '70', image: "assets/images/Pictures/app-slicing/red_and_black_chair.png" }
                ]
            },
            {
                category: 'Product Category Six',
                products: [
                    { id: 16, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 17, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                ]
            },
            {
                category: 'Product Category Seven',
                products: [
                    { id: 18, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 19, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                    { id: 20, name: 'Stand', price: '190', image: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
                ]
            },
            {
                category: 'Product Category Eight',
                products: [
                    { id: 21, name: 'Baby Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 22, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                ]
            },
            {
                category: 'Product Category Nine',
                products: [
                    { id: 23, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 24, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                    { id: 25, name: 'Stand', price: '190', image: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
                    { id: 26, name: 'Red Chair', price: '70', image: "assets/images/Pictures/app-slicing/red_and_black_chair.png" }
                ]
            },
            {
                category: 'Product Category Ten',
                products: [
                    { id: 27, name: 'Bed', price: '80', image: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
                    { id: 28, name: 'Girl Dress', price: '50', image: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
                ]
            },
        ];
        //for segment three
        this.itemsList = [
            { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice: "15", price: "10" },
            { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", dprice: "18", price: "12" },
            { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice: "15", price: "13" },
            { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice: "19", price: "16" },
            { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", dprice: "15", price: "7" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", dprice: "25", price: "20" },
            { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice: "45", price: "40" },
            { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", dprice: "55", price: "32" },
            { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice: "15", price: "9", },
            { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice: "25", price: "16" },
            { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", dprice: "15", price: "7" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", dprice: "25", price: "20" },
            { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice: "15", price: "10" },
            { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", dprice: "18", price: "12" },
            { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice: "15", price: "13" },
            { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice: "19", price: "16" },
            { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", dprice: "15", price: "7" },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", dprice: "25", price: "20" },
        ];
    }
    SegmentHeaderTextPage.prototype.ngOnInit = function () {
    };
    SegmentHeaderTextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-segment-header-text',
            template: __webpack_require__(/*! ./segment-header-text.page.html */ "./src/app/segment-header-text/segment-header-text.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(200%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./segment-header-text.page.scss */ "./src/app/segment-header-text/segment-header-text.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SegmentHeaderTextPage);
    return SegmentHeaderTextPage;
}());



/***/ })

}]);
//# sourceMappingURL=segment-header-text-segment-header-text-module.js.map