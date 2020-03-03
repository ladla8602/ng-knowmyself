(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-details-component-details-module"],{

/***/ "./src/app/component-details/component-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/component-details/component-details.module.ts ***!
  \***************************************************************/
/*! exports provided: ComponentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDetailsPageModule", function() { return ComponentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-details.page */ "./src/app/component-details/component-details.page.ts");







var routes = [
    {
        path: '',
        component: _component_details_page__WEBPACK_IMPORTED_MODULE_6__["ComponentDetailsPage"]
    }
];
var ComponentDetailsPageModule = /** @class */ (function () {
    function ComponentDetailsPageModule() {
    }
    ComponentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_component_details_page__WEBPACK_IMPORTED_MODULE_6__["ComponentDetailsPage"]]
        })
    ], ComponentDetailsPageModule);
    return ComponentDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/component-details/component-details.page.html":
/*!***************************************************************!*\
  !*** ./src/app/component-details/component-details.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/home\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Components\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- loop to get name and no of items in component -->\n  <ion-grid no-padding *ngFor=\"let comp of mainArr\">\n    <ion-row no-padding>\n      <ion-col no-padding size=\"12\">\n        <div>\n          <p>\n            <span>{{comp.category}}</span>\n            <small>({{comp.Number}})</small>\n          </p>\n        </div>\n        <div>\n        </div>\n        <!-- custom icon color applied from custom-theme service -->\n        <div [ngStyle]=\"{'background':itemColor}\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col size=\"12\" no-padding>\n        <!-- swipe slider with annimation in it -->\n        <ion-slides [options]=\"sliderConfig\" no-padding class=\"animated bounceInRight delay-900ms\" no-padding>\n          <!-- loop to get the components name and images of there items -->\n          <ion-slide *ngFor=\"let prod of comp.products; let i=index\" no-padding>\n            <ion-col>\n              <ion-card no-padding (click)=\"goToComponent(comp.category,i)\">\n                <img src=\"{{prod.image}}\" alt=\"categories\" />\n              </ion-card>\n              <ion-text>\n                <h6>{{prod.name}}</h6>\n              </ion-text>\n            </ion-col>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/component-details/component-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/component-details/component-details.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-row {\n  margin-top: 7px; }\n  ion-content ion-row img {\n    width: 100%; }\n  ion-content ion-row:last-child ion-slides {\n    width: auto;\n    max-width: 100%;\n    height: auto; }\n  ion-content ion-row h6 {\n    font-size: 14px;\n    margin: 7px 0 0 0; }\n  ion-content ion-row ion-col div {\n    border-bottom: solid;\n    margin-left: 10px;\n    margin-top: 13px;\n    border-color: black; }\n  ion-content ion-row ion-col div:first-child {\n      position: absolute;\n      width: 100%;\n      left: 0;\n      margin-top: 3px;\n      margin-left: 0;\n      border: none; }\n  ion-content ion-row ion-col div:first-child p {\n        background: #eee; }\n  ion-content ion-row ion-col div:first-child p span {\n          float: left;\n          padding: 0 10px 0 0;\n          background: #eee;\n          margin-left: 10px;\n          font-weight: bold; }\n  ion-content ion-row ion-col div:first-child p small {\n          float: right;\n          padding: 0 10px 0 10px;\n          background: #eee;\n          font-size: 14px;\n          font-weight: bold; }\n  ion-content ion-row ion-col div:last-child {\n      border: none;\n      margin-left: 0;\n      margin-top: -23px;\n      height: 36px;\n      opacity: 0.5; }\n  ion-content ion-slides ion-card {\n  border-radius: 2px;\n  margin-bottom: 10px; }\n  ion-content ion-slides ion-card:first-child {\n    margin: 2px 0 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jb21wb25lbnQtZGV0YWlscy9jb21wb25lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFZSSxlQUFlLEVBQUE7RUFabkI7SUFHVSxXQUFXLEVBQUE7RUFIckI7SUFPVSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVksRUFBQTtFQVR0QjtJQWNNLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQWZ2QjtJQW1CUSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtFQXRCM0I7TUF3QlUsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxPQUFPO01BQ1AsZUFBZTtNQUNmLGNBQWM7TUFDZCxZQUFZLEVBQUE7RUE3QnRCO1FBK0JZLGdCQUFnQixFQUFBO0VBL0I1QjtVQWlDYyxXQUFXO1VBQ1gsbUJBQW1CO1VBQ25CLGdCQUFnQjtVQUNoQixpQkFBaUI7VUFDakIsaUJBQWlCLEVBQUE7RUFyQy9CO1VBd0NjLFlBQVk7VUFDWixzQkFBc0I7VUFDdEIsZ0JBQWdCO1VBQ2hCLGVBQWU7VUFDZixpQkFBaUIsRUFBQTtFQTVDL0I7TUFpRFksWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLFlBQVksRUFBQTtFQXJEeEI7RUFnRU0sa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBakV6QjtJQThEUSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC1kZXRhaWxzL2NvbXBvbmVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIGlvbi1yb3d7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgaW9uLXNsaWRlc3tcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgaDZ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOiA3cHggMCAwIDA7XHJcbiAgICB9XHJcbiAgICBpb24tY29se1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNtYWxse1xyXG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW9uLXNsaWRlc3tcclxuICAgIGlvbi1jYXJke1xyXG4gICAgIFxyXG4gICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDAgMCAwO1xyXG4gICAgICB9XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgfSBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component-details/component-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/component-details/component-details.page.ts ***!
  \*************************************************************/
/*! exports provided: ComponentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDetailsPage", function() { return ComponentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");




var ComponentDetailsPage = /** @class */ (function () {
    function ComponentDetailsPage(events, service, navCtrl) {
        var _this = this;
        this.events = events;
        this.service = service;
        this.navCtrl = navCtrl;
        this.itemColor = [];
        this.iconColorVar = "";
        //for slider swipe
        this.sliderConfig = {
            slidesPerView: 2.2,
            spaceBetween: 0
        };
        // For New Array Count
        this.count = 0;
        //for displaying component names and there items name with images
        this.mainArr = [
            {
                category: 'List View',
                Number: 12,
                products: [
                    { image: "assets/screen-shots/0_preview.jpeg", name: "Infinite Scroll" },
                    { image: "assets/screen-shots/1_preview.jpeg", name: "Refresher" },
                    { image: "assets/screen-shots/2_preview.jpeg", name: "Slide To Left Animation" },
                    { image: "assets/screen-shots/3_preview.jpeg", name: "Slide To Right Animation" },
                    { image: "assets/screen-shots/4_preview.jpeg", name: "Fade In Animation" },
                    { image: "assets/screen-shots/5_preview.jpeg", name: "Thumbnail With Products" },
                    { image: "assets/screen-shots/6_preview.jpeg", name: "Full Image Left To Right" },
                    { image: "assets/screen-shots/7_preview.jpeg", name: "Items With Header" },
                    { image: "assets/screen-shots/8_preview.jpeg", name: "Swipe Avatar Left To Right" },
                    { image: "assets/screen-shots/9_preview.jpeg", name: "Swipe Avatar Right To Left" },
                    { image: "assets/screen-shots/10_preview.jpeg", name: "Reorder List" },
                    { image: "assets/screen-shots/11_preview.jpeg", name: "Expandable List" }
                ]
            },
            {
                category: 'Cards',
                Number: 9,
                products: [
                    { image: "assets/screen-shots/12_preview.jpeg", name: "Dashboard" },
                    { image: "assets/screen-shots/13_preview.jpeg", name: "Simple List" },
                    { image: "assets/screen-shots/14_preview.jpeg", name: "Avatar list" },
                    { image: "assets/screen-shots/15_preview.jpeg", name: "Shopping Cart" },
                    { image: "assets/screen-shots/16_preview.jpeg", name: "Shopping Cart Slider" },
                    { image: "assets/screen-shots/17_preview.jpeg", name: "Timeline Theme 1" },
                    { image: "assets/screen-shots/18_preview.jpeg", name: "Timeline Theme 2" },
                    { image: "assets/screen-shots/19_preview.jpeg", name: "Timeline Theme 3" },
                    { image: "assets/screen-shots/20_preview.jpeg", name: "Images" }
                ]
            },
        ];
        this.newArr = [
            {
                category: 'Grid',
                Number: 7,
                products: [
                    { image: "assets/screen-shots/21_preview.jpeg", name: "Two Line Images" },
                    { image: "assets/screen-shots/22_preview.jpeg", name: "Three Line Images" },
                    { image: "assets/screen-shots/23_preview.jpeg", name: "Category" },
                    { image: "assets/screen-shots/24_preview.jpeg", name: "Subcategory One" },
                    { image: "assets/screen-shots/25_preview.jpeg", name: "Grid album" },
                    { image: "assets/screen-shots/26_preview.jpeg", name: "Grid section" },
                    { image: "assets/screen-shots/27_preview.jpeg", name: "Grid with products" }
                ]
            },
            {
                category: 'Tabs',
                Number: 8,
                products: [
                    { image: "assets/screen-shots/28_preview.jpeg", name: "Footer Text" },
                    { image: "assets/screen-shots/29_preview.jpeg", name: "Footer Icons" },
                    { image: "assets/screen-shots/30_preview.jpeg", name: "Footer Text Icons" },
                    { image: "assets/screen-shots/31_preview.jpeg", name: "Footer Text Icons Badges" },
                    { image: "assets/screen-shots/32_preview.jpeg", name: "Header Text" },
                    { image: "assets/screen-shots/33_preview.jpeg", name: "Header Icons" },
                    { image: "assets/screen-shots/34_preview.jpeg", name: "Header Text Icons" },
                    { image: "assets/screen-shots/35_preview.jpeg", name: "Header Text Icons Badges" }
                ]
            },
            {
                category: 'Segments',
                Number: 7,
                products: [
                    { image: "assets/screen-shots/36_preview.jpeg", name: "Header Text" },
                    { image: "assets/screen-shots/37_preview.jpeg", name: "Header Icons" },
                    { image: "assets/screen-shots/38_preview.jpeg", name: "Scrollable Header Text" },
                    { image: "assets/screen-shots/39_preview.jpeg", name: "Scrollable Header Icons" },
                    { image: "assets/screen-shots/40_preview.jpeg", name: "Footer Text" },
                    { image: "assets/screen-shots/41_preview.jpeg", name: "Footer Icons" },
                    { image: "assets/screen-shots/42_preview.jpeg", name: "Footer Text Icons" }
                ]
            },
            {
                category: 'FAB',
                Number: 12,
                products: [
                    { image: "assets/screen-shots/43_preview.jpeg", name: "Simple Text" },
                    { image: "assets/screen-shots/44_preview.jpeg", name: "Simple Icon" },
                    { image: "assets/screen-shots/45_preview.jpeg", name: "Up Text" },
                    { image: "assets/screen-shots/46_preview.jpeg", name: "Up Icon" },
                    { image: "assets/screen-shots/47_preview.jpeg", name: "Down Text" },
                    { image: "assets/screen-shots/48_preview.jpeg", name: "Down Icon" },
                    { image: "assets/screen-shots/49_preview.jpeg", name: "Left Text" },
                    { image: "assets/screen-shots/50_preview.jpeg", name: "Left Icon" },
                    { image: "assets/screen-shots/51_preview.jpeg", name: "Right Text" },
                    { image: "assets/screen-shots/52_preview.jpeg", name: "Right Icon" },
                    { image: "assets/screen-shots/53_preview.jpeg", name: "Middle Text" },
                    { image: "assets/screen-shots/54_preview.jpeg", name: "Middle Icon" }
                ]
            },
            {
                category: 'Form',
                Number: 9,
                products: [
                    { image: "assets/screen-shots/55_preview.jpeg", name: "Login Theme One" },
                    { image: "assets/screen-shots/56_preview.jpeg", name: "Login Theme Two" },
                    { image: "assets/screen-shots/57_preview.jpeg", name: "Login Theme Three" },
                    { image: "assets/screen-shots/58_preview.jpeg", name: "Register Theme One" },
                    { image: "assets/screen-shots/59_preview.jpeg", name: "Register Theme Two" },
                    { image: "assets/screen-shots/60_preview.jpeg", name: "Register Theme Three" },
                    { image: "assets/screen-shots/61_preview.jpeg", name: "Forget Theme One" },
                    { image: "assets/screen-shots/62_preview.jpeg", name: "Forget Theme Two" },
                    { image: "assets/screen-shots/63_preview.jpeg", name: "Forget Theme Three" }
                ]
            },
            {
                category: 'Buttons',
                Number: 6,
                products: [
                    { image: "assets/screen-shots/64_preview.jpeg", name: "Basic Style 1" },
                    { image: "assets/screen-shots/65_preview.jpeg", name: "Basic Style 2" },
                    { image: "assets/screen-shots/66_preview.jpeg", name: "Text" },
                    { image: "assets/screen-shots/67_preview.jpeg", name: "Outline" },
                    { image: "assets/screen-shots/68_preview.jpeg", name: "Transparent" },
                    { image: "assets/screen-shots/69_preview.jpeg", name: "Expand" }
                ]
            },
            {
                category: 'Alerts',
                Number: 5,
                products: [
                    { image: "assets/screen-shots/70_preview.jpeg", name: "Basic" },
                    { image: "assets/screen-shots/71_preview.jpeg", name: "Confirmation" },
                    { image: "assets/screen-shots/72_preview.jpeg", name: "Prompt" },
                    { image: "assets/screen-shots/73_preview.jpeg", name: "Radio" },
                    { image: "assets/screen-shots/74_preview.jpeg", name: "Checkbox" }
                ]
            },
            {
                category: 'Sliders',
                Number: 4,
                products: [
                    { image: "assets/screen-shots/75_preview.jpeg", name: "Simple Slider" },
                    { image: "assets/screen-shots/76_preview.jpeg", name: "Images Slider" },
                    { image: "assets/screen-shots/77_preview.jpeg", name: "Autoplay Slider" },
                    { image: "assets/screen-shots/78_preview.jpeg", name: "Arrows Slider" }
                ]
            },
            {
                category: 'CheckBox',
                Number: 4,
                products: [
                    { image: "assets/screen-shots/79_preview.jpeg", name: "Square With Icon" },
                    { image: "assets/screen-shots/80_preview.jpeg", name: "Square With Avatar" },
                    { image: "assets/screen-shots/81_preview.jpeg", name: "Avatar With Circle" },
                    { image: "assets/screen-shots/82_preview.jpeg", name: "Big Image" }
                ]
            },
            {
                category: 'Radio',
                Number: 4,
                products: [
                    { image: "assets/screen-shots/83_preview.jpeg", name: "Simple Left" },
                    { image: "assets/screen-shots/84_preview.jpeg", name: "Simple Right" },
                    { image: "assets/screen-shots/85_preview.jpeg", name: "Radio Avatar" },
                    { image: "assets/screen-shots/86_preview.jpeg", name: "Radio Thumbnail" },
                ]
            },
            {
                category: 'Badge',
                Number: 3,
                products: [
                    { image: "assets/screen-shots/87_preview.jpeg", name: "Cards" },
                    { image: "assets/screen-shots/88_preview.jpeg", name: "Tabs" },
                    { image: "assets/screen-shots/89_preview.jpeg", name: "List" }
                ]
            },
            {
                category: 'Toast',
                Number: 3,
                products: [
                    { image: "assets/screen-shots/90_preview.jpeg", name: "Bottom Toast" },
                    { image: "assets/screen-shots/91_preview.jpeg", name: "Middle Toast" },
                    { image: "assets/screen-shots/92_preview.jpeg", name: "Top Toast" }
                ]
            },
            {
                category: 'SearchBar',
                Number: 2,
                products: [
                    { image: "assets/screen-shots/93_preview.jpeg", name: "Simple" },
                    { image: "assets/screen-shots/94_preview.jpeg", name: "Images" }
                ]
            },
            {
                category: 'ActionSheet',
                Number: 2,
                products: [
                    { image: "assets/screen-shots/95_preview.jpeg", name: "Simple Text" },
                    { image: "assets/screen-shots/96_preview.jpeg", name: "Icons" }
                ]
            },
            {
                category: 'Toggle',
                Number: 2,
                products: [
                    { image: "assets/screen-shots/97_preview.jpeg", name: "Avatar" },
                    { image: "assets/screen-shots/98_preview.jpeg", name: "Simple Left Side" },
                ]
            }
        ];
        setTimeout(function () {
            _this.loadData();
        }, 0);
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
    ComponentDetailsPage.prototype.loadData = function () {
        var _this = this;
        for (var index = 1; index <= 5; index++) {
            this.mainArr.push(this.newArr[index - 1]);
        }
        setTimeout(function () {
            for (var index = 6; index <= _this.newArr.length; index++) {
                _this.mainArr.push(_this.newArr[index - 1]);
            }
        }, 2000);
    };
    ComponentDetailsPage.prototype.ngOnInit = function () { };
    ComponentDetailsPage.prototype.goToComponent = function (name, i) {
        //conditions to navigate to specific component item
        if (name == 'ActionSheet') {
            if (i == 0) {
                this.navCtrl.navigateForward("actionsheet-simple");
            }
            if (i == 1) {
                this.navCtrl.navigateForward("actionsheet-icon");
            }
        }
        else if (name == 'Toggle') {
            if (i == 0) {
                this.navCtrl.navigateForward("toggle-with-avatar");
            }
            else if (i == 1) {
                this.navCtrl.navigateForward("toggle-simple-left");
            }
        }
        else if (name == 'SearchBar') {
            if (i == 0) {
                this.navCtrl.navigateForward("searchbar-simple");
            }
            else if (i == 1) {
                this.navCtrl.navigateForward("searchbar-with-images");
            }
        }
        else if (name == 'Toast') {
            if (i == 0) {
                this.navCtrl.navigateForward("toast-bottom");
            }
            else if (i == 1) {
                this.navCtrl.navigateForward("toast-middle");
            }
            else if (i == 2) {
                this.navCtrl.navigateForward("toast-top");
            }
        }
        else if (name == 'Badge') {
            if (i == 0) {
                this.navCtrl.navigateForward("badge-with-card");
            }
            else if (i == 1) {
                this.navCtrl.navigateForward("badge-with-tab");
            }
            else if (i == 2) {
                this.navCtrl.navigateForward("badge-with-list");
            }
        }
        else if (name == 'Radio') {
            if (i == 0) {
                this.navCtrl.navigateForward("radio-simple-left");
            }
            else if (i == 1) {
                this.navCtrl.navigateForward("radio-simple-right");
            }
            else if (i == 2) {
                this.navCtrl.navigateForward("radio-circle-with-avatar");
            }
            else if (i == 3) {
                this.navCtrl.navigateForward("radio-square-with-big-image");
            }
        }
        else if (name == 'CheckBox') {
            if (i == 0) {
                this.navCtrl.navigateForward("checkbox-square");
            }
            else if (i == 1) {
                this.navCtrl.navigateForward("checkbox-right-with-avatar");
            }
            else if (i == 2) {
                this.navCtrl.navigateForward("checkbox-simple");
            }
            else if (i == 3) {
                this.navCtrl.navigateForward("checkbox-with-big-image");
            }
        }
        else if (name == 'Sliders') {
            if (i == 0) {
                this.navCtrl.navigateForward("slider-simple");
            }
            if (i == 1) {
                this.navCtrl.navigateForward("slider-images");
            }
            if (i == 2) {
                this.navCtrl.navigateForward("slider-autoplay");
            }
            if (i == 3) {
                this.navCtrl.navigateForward("slider-arrows");
            }
        }
        else if (name == 'Alerts') {
            if (i == 0) {
                this.navCtrl.navigateForward("alert-basic");
            }
            if (i == 1) {
                this.navCtrl.navigateForward("alert-confirmation");
            }
            if (i == 2) {
                this.navCtrl.navigateForward("alert-prompt");
            }
            if (i == 3) {
                this.navCtrl.navigateForward("alert-radio");
            }
            if (i == 4) {
                this.navCtrl.navigateForward("alert-checkbox");
            }
        }
        else if (name == 'Buttons') {
            if (i == 0) {
                this.navCtrl.navigateForward("button-basic-one");
            }
            else if (i == 1) {
                this.navCtrl.navigateForward("button-basic-two");
            }
            else if (i == 2) {
                this.navCtrl.navigateForward("button-text");
            }
            else if (i == 3) {
                this.navCtrl.navigateForward("button-outline");
            }
            else if (i == 4) {
                this.navCtrl.navigateForward("button-transparent");
            }
            else if (i == 5) {
                this.navCtrl.navigateForward("button-expand");
            }
        }
        else if (name == 'Form') {
            if (i == 0) {
                this.navCtrl.navigateForward("form-login-one");
            }
            else if (i == 1) {
                this.navCtrl.navigateForward("form-login-two");
            }
            else if (i == 2) {
                this.navCtrl.navigateForward("form-login-three");
            }
            else if (i == 3) {
                this.navCtrl.navigateForward("form-register-one");
            }
            else if (i == 4) {
                this.navCtrl.navigateForward("form-register-two");
            }
            else if (i == 5) {
                this.navCtrl.navigateForward("form-register-three");
            }
            else if (i == 6) {
                this.navCtrl.navigateForward("form-forget-one");
            }
            else if (i == 7) {
                this.navCtrl.navigateForward("form-forget-two");
            }
            else if (i == 8) {
                this.navCtrl.navigateForward("form-forget-three");
            }
        }
        else if (name == 'List View') {
            if (i == 0) {
                this.navCtrl.navigateForward("list-infinte-scroll");
            }
            if (i == 1) {
                this.navCtrl.navigateForward("list-refresher");
            }
            if (i == 2) {
                this.navCtrl.navigateForward("list-slide-left");
            }
            if (i == 3) {
                this.navCtrl.navigateForward("list-slide-right");
            }
            if (i == 4) {
                this.navCtrl.navigateForward("list-fade-in");
            }
            if (i == 5) {
                this.navCtrl.navigateForward("list-swipe-thumbnail-products");
            }
            if (i == 6) {
                this.navCtrl.navigateForward("list-swipe-full-image");
            }
            if (i == 7) {
                this.navCtrl.navigateForward("list-swipe-with-header");
            }
            if (i == 8) {
                this.navCtrl.navigateForward("list-swipe-left-to-right");
            }
            if (i == 9) {
                this.navCtrl.navigateForward("list-swipe-right-to-left");
            }
            if (i == 10) {
                this.navCtrl.navigateForward("list-reorder");
            }
            if (i == 11) {
                this.navCtrl.navigateForward("list-expandable");
            }
        }
        else if (name == 'Grid') {
            if (i == 0) {
                this.navCtrl.navigateForward("grid-two-line");
            }
            if (i == 1) {
                this.navCtrl.navigateForward("grid-three-line");
            }
            if (i == 2) {
                this.navCtrl.navigateForward("grid-category");
            }
            if (i == 3) {
                this.navCtrl.navigateForward("grid-subcategory");
            }
            if (i == 4) {
                this.navCtrl.navigateForward("grid-album");
            }
            if (i == 5) {
                this.navCtrl.navigateForward("grid-section");
            }
            if (i == 6) {
                this.navCtrl.navigateForward("grid-with-header");
            }
        }
        else if (name == 'Cards') {
            if (i == 0) {
                this.navCtrl.navigateForward("card-dashboard");
            }
            if (i == 1) {
                this.navCtrl.navigateForward("card-list-simple");
            }
            if (i == 2) {
                this.navCtrl.navigateForward("card-list-avatar");
            }
            if (i == 3) {
                this.navCtrl.navigateForward("card-shoping-simple");
            }
            if (i == 4) {
                this.navCtrl.navigateForward("card-shoping-slider");
            }
            if (i == 5) {
                this.navCtrl.navigateForward("card-timeline-theme-one");
            }
            if (i == 6) {
                this.navCtrl.navigateForward("card-timeline-theme-two");
            }
            if (i == 7) {
                this.navCtrl.navigateForward("card-timeline-theme-three");
            }
            if (i == 8) {
                this.navCtrl.navigateForward("card-images");
            }
        }
        else if (name == 'Tabs') {
            if (i == 0) {
                this.navCtrl.navigateForward("tab-footer-text");
            }
            if (i == 1) {
                this.navCtrl.navigateForward("tab-footer-icon");
            }
            if (i == 2) {
                this.navCtrl.navigateForward("tab-footer-text-icon");
            }
            if (i == 3) {
                this.navCtrl.navigateForward("tab-footer-text-icon-badge");
            }
            if (i == 4) {
                this.navCtrl.navigateForward("tab-header-text");
            }
            if (i == 5) {
                this.navCtrl.navigateForward("tab-header-icon");
            }
            if (i == 6) {
                this.navCtrl.navigateForward("tab-header-text-icon");
            }
            if (i == 7) {
                this.navCtrl.navigateForward("tab-header-text-icon-badge");
            }
        }
        else if (name == 'Segments') {
            if (i == 0) {
                this.navCtrl.navigateForward("segment-header-text");
            }
            if (i == 1) {
                this.navCtrl.navigateForward("segment-header-icon");
            }
            if (i == 2) {
                this.navCtrl.navigateForward("segment-scrollable-header-text");
            }
            if (i == 3) {
                this.navCtrl.navigateForward("segment-scrollable-header-icon");
            }
            if (i == 4) {
                this.navCtrl.navigateForward("segment-footer-text");
            }
            if (i == 5) {
                this.navCtrl.navigateForward("segment-footer-icon");
            }
            if (i == 6) {
                this.navCtrl.navigateForward("segment-footer-text-icon");
            }
        }
        else if (name == 'FAB') {
            if (i == 0) {
                this.navCtrl.navigateForward("fab-simple-text");
            }
            else if (i == 1) {
                this.navCtrl.navigateForward("fab-simple-icon");
            }
            else if (i == 2) {
                this.navCtrl.navigateForward("fab-up-text");
            }
            else if (i == 3) {
                this.navCtrl.navigateForward("fab-up-icon");
            }
            else if (i == 4) {
                this.navCtrl.navigateForward("fab-down-text");
            }
            else if (i == 5) {
                this.navCtrl.navigateForward("fab-down-icon");
            }
            else if (i == 6) {
                this.navCtrl.navigateForward("fab-left-text");
            }
            else if (i == 7) {
                this.navCtrl.navigateForward("fab-left-icon");
            }
            else if (i == 8) {
                this.navCtrl.navigateForward("fab-right-text");
            }
            else if (i == 9) {
                this.navCtrl.navigateForward("fab-right-icon");
            }
            else if (i == 10) {
                this.navCtrl.navigateForward("fab-middle-text");
            }
            else if (i == 11) {
                this.navCtrl.navigateForward("fab-middle-icon");
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], ComponentDetailsPage.prototype, "infiniteScroll", void 0);
    ComponentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-component-details',
            template: __webpack_require__(/*! ./component-details.page.html */ "./src/app/component-details/component-details.page.html"),
            styles: [__webpack_require__(/*! ./component-details.page.scss */ "./src/app/component-details/component-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_3__["CustomThemeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ComponentDetailsPage);
    return ComponentDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=component-details-component-details-module.js.map