(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fab-up-icon-fab-up-icon-module"],{

/***/ "./src/app/fab-up-icon/fab-up-icon.module.ts":
/*!***************************************************!*\
  !*** ./src/app/fab-up-icon/fab-up-icon.module.ts ***!
  \***************************************************/
/*! exports provided: FabUpIconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabUpIconPageModule", function() { return FabUpIconPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fab_up_icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab-up-icon.page */ "./src/app/fab-up-icon/fab-up-icon.page.ts");







var routes = [
    {
        path: '',
        component: _fab_up_icon_page__WEBPACK_IMPORTED_MODULE_6__["FabUpIconPage"]
    }
];
var FabUpIconPageModule = /** @class */ (function () {
    function FabUpIconPageModule() {
    }
    FabUpIconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fab_up_icon_page__WEBPACK_IMPORTED_MODULE_6__["FabUpIconPage"]]
        })
    ], FabUpIconPageModule);
    return FabUpIconPageModule;
}());



/***/ }),

/***/ "./src/app/fab-up-icon/fab-up-icon.page.html":
/*!***************************************************!*\
  !*** ./src/app/fab-up-icon/fab-up-icon.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Fab Up With Icon</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let item of items; let i=index\">\n            <ion-item>\n                <ion-thumbnail slot=\"start\">\n                    <ion-img src=\"{{item.img}}\"></ion-img>\n                </ion-thumbnail>\n                <ion-label>\n                    {{item.text}}\n                    <p>This product is good for health and...</p>\n                    <p>\n                        <b>Price: </b>\n                        <del>$ {{item.dprice}}</del>\n                        <ins>$ {{item.price}}</ins>\n                    </p>\n                </ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n                <ion-button fill=\"clear\">\n                    <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"add-circle\"></ion-icon>\n                </ion-button>\n                <ion-button fill=\"clear\">\n                    <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"remove-circle\"></ion-icon>\n                </ion-button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <!-- float action button placed at the end and bottom of screen -->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n        <!-- fab list show more buttons from upward on click -->\n        <ion-fab-list side=\"top\">\n            <ion-fab-button>\n                <ion-icon name=\"logo-facebook\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button>\n                <ion-icon name=\"logo-twitter\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button>\n                <ion-icon name=\"logo-googleplus\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n</ion-footer>"

/***/ }),

/***/ "./src/app/fab-up-icon/fab-up-icon.page.scss":
/*!***************************************************!*\
  !*** ./src/app/fab-up-icon/fab-up-icon.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-item ins {\n  margin-left: 15px; }\n\nion-content ion-item-options ion-button {\n  margin-top: 15px; }\n\nion-content ion-item-options ion-button ion-icon {\n    zoom: 1.5; }\n\nion-footer ion-fab {\n  position: fixed; }\n\nion-footer ion-fab ion-icon {\n    zoom: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mYWItdXAtaWNvbi9mYWItdXAtaWNvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHWSxpQkFBaUIsRUFBQTs7QUFIN0I7RUFRWSxnQkFBZ0IsRUFBQTs7QUFSNUI7SUFVZ0IsU0FBUyxFQUFBOztBQUt6QjtFQUVRLGVBQWUsRUFBQTs7QUFGdkI7SUFJWSxPQUFPLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mYWItdXAtaWNvbi9mYWItdXAtaWNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnR7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBpbnN7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1pdGVtLW9wdGlvbnN7XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICB6b29tOiAxLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGlvbi1mYWJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB6b29tOiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/fab-up-icon/fab-up-icon.page.ts":
/*!*************************************************!*\
  !*** ./src/app/fab-up-icon/fab-up-icon.page.ts ***!
  \*************************************************/
/*! exports provided: FabUpIconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabUpIconPage", function() { return FabUpIconPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");



var FabUpIconPage = /** @class */ (function () {
    function FabUpIconPage(service) {
        this.service = service;
        this.items = [
            { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice: "15", price: "10", },
            { text: "Girls dress ", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", dprice: "18", price: "12", },
            { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice: "15", price: "13", },
            { text: "Red achair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice: "19", price: "16", },
            { text: "Polo men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", dprice: "15", price: "7", },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", dprice: "25", price: "20", },
            { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice: "45", price: "40", },
            { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", dprice: "55", price: "32", },
            { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice: "15", price: "9", },
            { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice: "25", price: "16", },
            { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", dprice: "15", price: "7", },
            { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", dprice: "25", price: "20", },
        ];
        this.itemColor = [];
        this.iconColorVar = "";
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
    FabUpIconPage.prototype.ngOnInit = function () {
    };
    FabUpIconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fab-up-icon',
            template: __webpack_require__(/*! ./fab-up-icon.page.html */ "./src/app/fab-up-icon/fab-up-icon.page.html"),
            styles: [__webpack_require__(/*! ./fab-up-icon.page.scss */ "./src/app/fab-up-icon/fab-up-icon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__["CustomThemeService"]])
    ], FabUpIconPage);
    return FabUpIconPage;
}());



/***/ })

}]);
//# sourceMappingURL=fab-up-icon-fab-up-icon-module.js.map