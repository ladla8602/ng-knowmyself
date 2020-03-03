(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fab-up-text-fab-up-text-module"],{

/***/ "./src/app/fab-up-text/fab-up-text.module.ts":
/*!***************************************************!*\
  !*** ./src/app/fab-up-text/fab-up-text.module.ts ***!
  \***************************************************/
/*! exports provided: FabUpTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabUpTextPageModule", function() { return FabUpTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fab_up_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab-up-text.page */ "./src/app/fab-up-text/fab-up-text.page.ts");







var routes = [
    {
        path: '',
        component: _fab_up_text_page__WEBPACK_IMPORTED_MODULE_6__["FabUpTextPage"]
    }
];
var FabUpTextPageModule = /** @class */ (function () {
    function FabUpTextPageModule() {
    }
    FabUpTextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fab_up_text_page__WEBPACK_IMPORTED_MODULE_6__["FabUpTextPage"]]
        })
    ], FabUpTextPageModule);
    return FabUpTextPageModule;
}());



/***/ }),

/***/ "./src/app/fab-up-text/fab-up-text.page.html":
/*!***************************************************!*\
  !*** ./src/app/fab-up-text/fab-up-text.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Up Fab with Text</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let item of products\">\n            <ion-item>\n                <ion-thumbnail slot=\"start\">\n                    <ion-img src=\"{{item.image}}\"></ion-img>\n                </ion-thumbnail>\n                <ion-label>\n                    {{item.name}}\n                    <p>It is very rare that a 100% cotton....</p>\n                </ion-label>\n                <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\n            </ion-item>\n            <ion-item-options side=\"start\">\n                <ion-button fill=\"clear\">\n                    <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"add-circle\"></ion-icon>\n                </ion-button>\n                <ion-button fill=\"clear\">\n                    <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"remove-circle\"></ion-icon>\n                </ion-button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n<ion-footer>\n        <!-- float action button placed at the center and bottom of screen -->\n    <ion-fab vertical=\"center\" horizontal=\"end\">\n        <ion-fab-button>\n            Add\n        </ion-fab-button>\n        <!-- fab list show more buttons from left side on click -->\n        <ion-fab-list side=\"top\">\n            <ion-fab-button>ABC</ion-fab-button>\n            <ion-fab-button>ABC</ion-fab-button>\n            <ion-fab-button>ABC</ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n</ion-footer>"

/***/ }),

/***/ "./src/app/fab-up-text/fab-up-text.page.scss":
/*!***************************************************!*\
  !*** ./src/app/fab-up-text/fab-up-text.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-item ion-icon {\n  zoom: 1.5; }\n\nion-content ion-item-options ion-button {\n  margin-top: 15px; }\n\nion-content ion-item-options ion-button ion-icon {\n    zoom: 1.5; }\n\nion-footer ion-fab {\n  position: fixed; }\n\nion-footer ion-fab ion-icon {\n    zoom: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9mYWItdXAtdGV4dC9mYWItdXAtdGV4dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHWSxTQUFTLEVBQUE7O0FBSHJCO0VBUVksZ0JBQWdCLEVBQUE7O0FBUjVCO0lBVWdCLFNBQVMsRUFBQTs7QUFLekI7RUFFUSxlQUFlLEVBQUE7O0FBRnZCO0lBSVksT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmFiLXVwLXRleHQvZmFiLXVwLXRleHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50e1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIHpvb206IDEuNTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0tb3B0aW9uc3tcclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIHpvb206IDEuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgaW9uLWZhYntcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIHpvb206IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/fab-up-text/fab-up-text.page.ts":
/*!*************************************************!*\
  !*** ./src/app/fab-up-text/fab-up-text.page.ts ***!
  \*************************************************/
/*! exports provided: FabUpTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabUpTextPage", function() { return FabUpTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");



var FabUpTextPage = /** @class */ (function () {
    function FabUpTextPage(service) {
        this.service = service;
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
    FabUpTextPage.prototype.ngOnInit = function () {
    };
    FabUpTextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fab-up-text',
            template: __webpack_require__(/*! ./fab-up-text.page.html */ "./src/app/fab-up-text/fab-up-text.page.html"),
            styles: [__webpack_require__(/*! ./fab-up-text.page.scss */ "./src/app/fab-up-text/fab-up-text.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__["CustomThemeService"]])
    ], FabUpTextPage);
    return FabUpTextPage;
}());



/***/ })

}]);
//# sourceMappingURL=fab-up-text-fab-up-text-module.js.map