(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-dashboard-card-dashboard-module"],{

/***/ "./src/app/card-dashboard/card-dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/card-dashboard/card-dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: CardDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDashboardPageModule", function() { return CardDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-dashboard.page */ "./src/app/card-dashboard/card-dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _card_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["CardDashboardPage"]
    }
];
var CardDashboardPageModule = /** @class */ (function () {
    function CardDashboardPageModule() {
    }
    CardDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["CardDashboardPage"]]
        })
    ], CardDashboardPageModule);
    return CardDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/card-dashboard/card-dashboard.page.html":
/*!*********************************************************!*\
  !*** ./src/app/card-dashboard/card-dashboard.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cards Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-text>\n          <h1>Welcome,\n            <br> Mr. John Doe</h1>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"6\">\n        <!-- simple card with icon and text -->\n        <ion-card color=\"light\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-text>\n            <h2>Profile</h2>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <!-- simple card with icon and text -->\n        <ion-card color=\"danger\">\n          <ion-icon name=\"people\"></ion-icon>\n          <ion-text>\n            <h2>Group</h2>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <!-- simple card with icon and text -->\n        <ion-card color=\"success\">\n          <ion-icon name=\"settings\"></ion-icon>\n          <ion-text>\n            <h2>Settings</h2>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <!-- simple card with icon and text -->\n        <ion-card color=\"secondary\">\n          <ion-icon name=\"list\"></ion-icon>\n          <ion-text>\n            <h2>Tasks</h2>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <!-- simple card with icon and text -->\n        <ion-card color=\"tertiary\">\n          <ion-icon name=\"add\"></ion-icon>\n          <ion-text>\n            <h2>Add Task</h2>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <!-- simple card with icon and text -->\n        <ion-card color=\"medium\">\n          <ion-icon name=\"calendar\"></ion-icon>\n          <ion-text>\n            <h2>Date</h2>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/card-dashboard/card-dashboard.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/card-dashboard/card-dashboard.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-col {\n  text-align: center; }\n  ion-content ion-col ion-icon {\n    zoom: 2.8;\n    padding: 5px; }\n  ion-content ion-col ion-icon:first-child {\n      zoom: 3.8;\n      padding: 5px; }\n  ion-content ion-col h2, ion-content ion-col h1 {\n    margin-top: 0; }\n  ion-content ion-col ion-card {\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jYXJkLWRhc2hib2FyZC9jYXJkLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTtFQUYxQjtJQUlZLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFMeEI7TUFPZ0IsU0FBUztNQUNULFlBQVksRUFBQTtFQVI1QjtJQVlZLGFBQWEsRUFBQTtFQVp6QjtJQWVZLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FyZC1kYXNoYm9hcmQvY2FyZC1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgem9vbTogMi44O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICB6b29tOiAzLjg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDIsaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/card-dashboard/card-dashboard.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/card-dashboard/card-dashboard.page.ts ***!
  \*******************************************************/
/*! exports provided: CardDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDashboardPage", function() { return CardDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardDashboardPage = /** @class */ (function () {
    function CardDashboardPage() {
    }
    CardDashboardPage.prototype.ngOnInit = function () {
    };
    CardDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-dashboard',
            template: __webpack_require__(/*! ./card-dashboard.page.html */ "./src/app/card-dashboard/card-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./card-dashboard.page.scss */ "./src/app/card-dashboard/card-dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardDashboardPage);
    return CardDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=card-dashboard-card-dashboard-module.js.map