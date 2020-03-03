(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-call-tab-call-module"],{

/***/ "./src/app/tab-call/tab-call.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab-call/tab-call.module.ts ***!
  \*********************************************/
/*! exports provided: TabCallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabCallPageModule", function() { return TabCallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_call_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-call.page */ "./src/app/tab-call/tab-call.page.ts");







var routes = [
    {
        path: '',
        component: _tab_call_page__WEBPACK_IMPORTED_MODULE_6__["TabCallPage"]
    }
];
var TabCallPageModule = /** @class */ (function () {
    function TabCallPageModule() {
    }
    TabCallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_call_page__WEBPACK_IMPORTED_MODULE_6__["TabCallPage"]]
        })
    ], TabCallPageModule);
    return TabCallPageModule;
}());



/***/ }),

/***/ "./src/app/tab-call/tab-call.page.html":
/*!*********************************************!*\
  !*** ./src/app/tab-call/tab-call.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let item of items\">\n            <ion-avatar slot=\"start\">\n                <img src=\"{{item.img}}\">\n            </ion-avatar>\n            <ion-label>\n                <h3>{{item.text}}</h3>\n                <p>{{item.short_des}}</p>\n            </ion-label>\n            <ion-icon name=\"call\"> </ion-icon>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button>\n            <ion-icon src=\"assets/phone-call.svg\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-footer>"

/***/ }),

/***/ "./src/app/tab-call/tab-call.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tab-call/tab-call.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYi1jYWxsL3RhYi1jYWxsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tab-call/tab-call.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tab-call/tab-call.page.ts ***!
  \*******************************************/
/*! exports provided: TabCallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabCallPage", function() { return TabCallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabCallPage = /** @class */ (function () {
    function TabCallPage() {
        this.items = [
            { text: "Jack William", short_des: "July 16, 1:45 PM", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Christian James", short_des: "July 12, 3:45 PM ", img: "assets/images/Pictures/faces-images/face_image2.png" },
            { text: "Maria Jeans", short_des: "July 10, 1:45 AM", img: "assets/images/Pictures/faces-images/face_image3.png" },
            { text: "Andrew Straus", short_des: "July 8, 2:45 PM ", img: "assets/images/Pictures/faces-images/face_image4.png" },
            { text: "Mark Henry", short_des: " July 7, 9:45 PM ", img: "assets/images/Pictures/faces-images/face_image5.png" },
            { text: "Tom Jack", short_des: "July 6, 9:00 PM", img: "assets/images/Pictures/faces-images/face_image6.png" },
            { text: "Williamson Steward", short_des: " July 6, 12:45 PM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Jaon Broad", short_des: " July 5, 6:45 AM ", img: "assets/images/Pictures/faces-images/face_image2.png" },
            { text: "Jack William", short_des: "June 29, 11:05 PM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Christian James", short_des: " June 29, 8:55 PM ", img: "assets/images/Pictures/faces-images/face_image2.png" },
            { text: "Maria Jeans", short_des: "June 25, 2:15 AM ", img: "assets/images/Pictures/faces-images/face_image3.png" },
            { text: "Andrew Straus", short_des: " June 23, 7:36 AM ", img: "assets/images/Pictures/faces-images/face_image4.png" },
            { text: "Mark Henry", short_des: "June 22, 4:05 PM ", img: "assets/images/Pictures/faces-images/face_image5.png" },
            { text: "Tom Jack", short_des: "June 20, 3:45 PM ", img: "assets/images/Pictures/faces-images/face_image6.png" },
            { text: "Williamson Steward", short_des: "June 29, 7:45 AM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Jaon Broad", short_des: "June 18, 6:45 PM ", img: "assets/images/Pictures/faces-images/face_image2.png" }
        ];
    }
    TabCallPage.prototype.ngOnInit = function () {
    };
    TabCallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-call',
            template: __webpack_require__(/*! ./tab-call.page.html */ "./src/app/tab-call/tab-call.page.html"),
            styles: [__webpack_require__(/*! ./tab-call.page.scss */ "./src/app/tab-call/tab-call.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabCallPage);
    return TabCallPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab-call-tab-call-module.js.map