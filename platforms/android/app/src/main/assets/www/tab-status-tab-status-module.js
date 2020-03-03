(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-status-tab-status-module"],{

/***/ "./src/app/tab-status/tab-status.module.ts":
/*!*************************************************!*\
  !*** ./src/app/tab-status/tab-status.module.ts ***!
  \*************************************************/
/*! exports provided: TabStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabStatusPageModule", function() { return TabStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-status.page */ "./src/app/tab-status/tab-status.page.ts");







var routes = [
    {
        path: '',
        component: _tab_status_page__WEBPACK_IMPORTED_MODULE_6__["TabStatusPage"]
    }
];
var TabStatusPageModule = /** @class */ (function () {
    function TabStatusPageModule() {
    }
    TabStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_status_page__WEBPACK_IMPORTED_MODULE_6__["TabStatusPage"]]
        })
    ], TabStatusPageModule);
    return TabStatusPageModule;
}());



/***/ }),

/***/ "./src/app/tab-status/tab-status.page.html":
/*!*************************************************!*\
  !*** ./src/app/tab-status/tab-status.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"full\">\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/images/Pictures/faces-images/face_image4.png\">\n    </ion-avatar>\n    <ion-label>\n      <h3>My Status</h3>\n      <p>Today, 11:36 AM</p>\n    </ion-label>\n    <ion-icon src=\"assets/dots.svg\"></ion-icon>\n  </ion-item>\n  <ion-item-divider lines=\"none\">\n    <ion-text>\n      <p>Viewed updates</p>\n    </ion-text>\n  </ion-item-divider>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.img}}\">\n      </ion-avatar>\n      <ion-label>\n        <h3>{{item.text}}</h3>\n        <p>{{item.short_des}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button size=\"small\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button size=\"small\">\n      <ion-icon name=\"create\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-footer>"

/***/ }),

/***/ "./src/app/tab-status/tab-status.page.scss":
/*!*************************************************!*\
  !*** ./src/app/tab-status/tab-status.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-item ion-icon {\n  zoom: 0.8; }\n\nion-content ion-item-divider {\n  --background:#ddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC90YWItc3RhdHVzL3RhYi1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksU0FBUyxFQUFBOztBQUhyQjtFQU9RLGlCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWItc3RhdHVzL3RhYi1zdGF0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgem9vbTogMC44O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1pdGVtLWRpdmlkZXJ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiNkZGQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab-status/tab-status.page.ts":
/*!***********************************************!*\
  !*** ./src/app/tab-status/tab-status.page.ts ***!
  \***********************************************/
/*! exports provided: TabStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabStatusPage", function() { return TabStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabStatusPage = /** @class */ (function () {
    function TabStatusPage() {
        this.items = [
            { text: "Jack William", short_des: "11 minutes ago", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Christian James", short_des: "25 minutes ago ", img: "assets/images/Pictures/faces-images/face_image2.png" },
            { text: "Maria Jeans", short_des: "Today, 11:05 AM", img: "assets/images/Pictures/faces-images/face_image3.png" },
            { text: "Andrew Straus", short_des: "Today, 6:58 AM", img: "assets/images/Pictures/faces-images/face_image4.png" },
            { text: "Mark Henry", short_des: " Today, 5:05 AM ", img: "assets/images/Pictures/faces-images/face_image5.png" },
            { text: "Tom Jack", short_des: "Today, 1:18 AM", img: "assets/images/Pictures/faces-images/face_image6.png" },
            { text: "Williamson Steward", short_des: " Today, 11:05 AM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Jaon Broad", short_des: " Today, 10:25 AM ", img: "assets/images/Pictures/faces-images/face_image2.png" },
            { text: "Jack William", short_des: "Today, 10:01 AM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Christian James", short_des: " Today, 9:35 PM ", img: "assets/images/Pictures/faces-images/face_image2.png" },
            { text: "Maria Jeans", short_des: "Yesterday, 12:05 AM ", img: "assets/images/Pictures/faces-images/face_image3.png" },
            { text: "Andrew Straus", short_des: "Yesterday, 11:45 PM ", img: "assets/images/Pictures/faces-images/face_image4.png" },
            { text: "Mark Henry", short_des: "Yesterday, 8:22 PM ", img: "assets/images/Pictures/faces-images/face_image5.png" },
            { text: "Tom Jack", short_des: "Yesterday, 05:37 PM ", img: "assets/images/Pictures/faces-images/face_image6.png" },
            { text: "Williamson Steward", short_des: "Yesterday, 4:11 PM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
            { text: "Jaon Broad", short_des: "Yesterday, 1:05 PM ", img: "assets/images/Pictures/faces-images/face_image2.png" }
        ];
    }
    TabStatusPage.prototype.ngOnInit = function () {
    };
    TabStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-status',
            template: __webpack_require__(/*! ./tab-status.page.html */ "./src/app/tab-status/tab-status.page.html"),
            styles: [__webpack_require__(/*! ./tab-status.page.scss */ "./src/app/tab-status/tab-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabStatusPage);
    return TabStatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab-status-tab-status-module.js.map