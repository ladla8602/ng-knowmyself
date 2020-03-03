(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["badge-setting-badge-setting-module"],{

/***/ "./src/app/badge-setting/badge-setting.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/badge-setting/badge-setting.module.ts ***!
  \*******************************************************/
/*! exports provided: BadgeSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeSettingPageModule", function() { return BadgeSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _badge_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badge-setting.page */ "./src/app/badge-setting/badge-setting.page.ts");







var routes = [
    {
        path: '',
        component: _badge_setting_page__WEBPACK_IMPORTED_MODULE_6__["BadgeSettingPage"]
    }
];
var BadgeSettingPageModule = /** @class */ (function () {
    function BadgeSettingPageModule() {
    }
    BadgeSettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_badge_setting_page__WEBPACK_IMPORTED_MODULE_6__["BadgeSettingPage"]]
        })
    ], BadgeSettingPageModule);
    return BadgeSettingPageModule;
}());



/***/ }),

/***/ "./src/app/badge-setting/badge-setting.page.html":
/*!*******************************************************!*\
  !*** ./src/app/badge-setting/badge-setting.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor=\"let p of items\">\n      <ion-icon slot=\"start\" name=\"{{p.icon}}\"></ion-icon>\n      {{p.text}}\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/badge-setting/badge-setting.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/badge-setting/badge-setting.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-list {\n  padding: 0; }\n  ion-content ion-list ion-item {\n    --padding-start:0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9iYWRnZS1zZXR0aW5nL2JhZGdlLXNldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsVUFBUyxFQUFBO0VBRmpCO0lBSVksaUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iYWRnZS1zZXR0aW5nL2JhZGdlLXNldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tbGlzdHtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDowO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/badge-setting/badge-setting.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/badge-setting/badge-setting.page.ts ***!
  \*****************************************************/
/*! exports provided: BadgeSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeSettingPage", function() { return BadgeSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");




var BadgeSettingPage = /** @class */ (function () {
    function BadgeSettingPage(events, service) {
        this.events = events;
        this.service = service;
        this.itemColor = [];
        this.iconColorVar = "";
        this.items = [
            { text: "Chats", icon: "chatbubbles", },
            { text: "Help", icon: "help-circle", },
            { text: "Account", icon: "key", },
            { text: "Chats", icon: "chatbubbles", },
            { text: "Help", icon: "help-circle", },
            { text: "Account", icon: "key", },
            { text: "Passwords", icon: "lock", },
            { text: "Notifcation", icon: "notifications", },
            { text: "Invite a friend", icon: "add", },
            { text: "Data and storage usage", icon: "cloud", },
        ];
        this.itemColor = ["#F44336"];
        console.log("SWIPE");
        this.data = this.service.getTheme();
        this.iconColorVar = this.data;
        console.log("SWIPE", this.data);
        if (this.data == "autumn") {
            this.itemColor = ["#F44336"];
        }
        else if (this.data == "night") {
            this.itemColor = ["#673AB7"];
        }
        else if (this.data == "neon") {
            this.itemColor = ["#03A9F4"];
        }
        else if (this.data == "orginal") {
            this.itemColor = ["#4CAF50"];
        }
        else if (this.data == "red") {
            this.itemColor = ["#9E9E9E"];
        }
        else if (this.data == "purple") {
            this.itemColor = ["#E91E63"];
        }
        else if (this.data == "Lightblue") {
            this.itemColor = ["#3F51B5"];
        }
        else if (this.data == "Lightgreen") {
            this.itemColor = ["#00BCD4"];
        }
        else if (this.data == "Lightgray") {
            this.itemColor = ["#8BC34A"];
        }
        else if (this.data == "blue") {
            this.itemColor = ["#008577"];
        }
    }
    BadgeSettingPage.prototype.ngOnInit = function () {
    };
    BadgeSettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badge-setting',
            template: __webpack_require__(/*! ./badge-setting.page.html */ "./src/app/badge-setting/badge-setting.page.html"),
            styles: [__webpack_require__(/*! ./badge-setting.page.scss */ "./src/app/badge-setting/badge-setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_3__["CustomThemeService"]])
    ], BadgeSettingPage);
    return BadgeSettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=badge-setting-badge-setting-module.js.map