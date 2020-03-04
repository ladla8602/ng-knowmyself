(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["button-text-button-text-module"],{

/***/ "./src/app/button-text/button-text.module.ts":
/*!***************************************************!*\
  !*** ./src/app/button-text/button-text.module.ts ***!
  \***************************************************/
/*! exports provided: ButtonTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTextPageModule", function() { return ButtonTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _button_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-text.page */ "./src/app/button-text/button-text.page.ts");







var routes = [
    {
        path: '',
        component: _button_text_page__WEBPACK_IMPORTED_MODULE_6__["ButtonTextPage"]
    }
];
var ButtonTextPageModule = /** @class */ (function () {
    function ButtonTextPageModule() {
    }
    ButtonTextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_button_text_page__WEBPACK_IMPORTED_MODULE_6__["ButtonTextPage"]]
        })
    ], ButtonTextPageModule);
    return ButtonTextPageModule;
}());



/***/ }),

/***/ "./src/app/button-text/button-text.page.html":
/*!***************************************************!*\
  !*** ./src/app/button-text/button-text.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button expand=\"block\" routerLink=\"/home\" routerDirection=\"backward\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Privacy Policy</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n <h2>Privacy Policy</h2> <p>\r\n                    Onlinexampoint built the 2KnowMySelf Psychology - The Article Pocket Book app as\r\n                    an Ad Supported app. This SERVICE is provided by\r\n                    Onlinexampoint at no cost and is intended for\r\n                    use as is.\r\n                  </p> <p>\r\n                    This page is used to inform visitors regarding\r\n                    my policies with the collection, use, and\r\n                    disclosure of Personal Information if anyone decided to use\r\n                    my Service.\r\n                  </p> <p>\r\n                    If you choose to use my Service, then you agree\r\n                    to the collection and use of information in relation to this\r\n                    policy. The Personal Information that I collect is\r\n                    used for providing and improving the Service.\r\n                    I will not use or share your\r\n                    information with anyone except as described in this Privacy\r\n                    Policy.\r\n                  </p> <p>\r\n                    The terms used in this Privacy Policy have the same meanings\r\n                    as in our Terms and Conditions, which is accessible at\r\n                    2KnowMySelf Psychology - The Article Pocket Book unless otherwise defined in this Privacy\r\n                    Policy.\r\n                  </p> <p><strong>Information Collection and Use</strong></p> <p>\r\n                    For a better experience, while using our Service,\r\n                    I may require you to provide us with certain\r\n                    personally identifiable information, including but not limited to STORAGE, SMS, Cookies, Internet. The\r\n                    information that I request will be\r\n                    retained on your device and is not collected by me in any way.\r\n                  </p> <p>\r\n                    The app does use third party services that may collect\r\n                    information used to identify you.\r\n                  </p> <div><p>\r\n                      Link to privacy policy of third party service providers\r\n                      used by the app\r\n                    </p> <ul><li><a href=\"https://www.google.com/policies/privacy/\" target=\"_blank\">Google Play Services</a></li><li><a href=\"https://support.google.com/admob/answer/6128543?hl=en\" target=\"_blank\">AdMob</a></li><li><a href=\"https://firebase.google.com/policies/analytics\" target=\"_blank\">Firebase Analytics</a></li><!----><!----><!----><!----><!----><!----><!----><!----></ul></div> <p><strong>Log Data</strong></p> <p>\r\n                    I want to inform you that whenever\r\n                    you use my Service, in a case of an error in the\r\n                    app I collect data and information (through third\r\n                    party products) on your phone called Log Data. This Log Data\r\n                    may include information such as your device Internet\r\n                    Protocol (“IP”) address, device name, operating system\r\n                    version, the configuration of the app when utilizing\r\n                    my Service, the time and date of your use of the\r\n                    Service, and other statistics.\r\n                  </p> <p><strong>Cookies</strong></p> <p>\r\n                    Cookies are files with a small amount of data that are\r\n                    commonly used as anonymous unique identifiers. These are\r\n                    sent to your browser from the websites that you visit and\r\n                    are stored on your device's internal memory.\r\n                  </p> <p>\r\n                    This Service does not use these “cookies” explicitly.\r\n                    However, the app may use third party code and libraries that\r\n                    use “cookies” to collect information and improve their\r\n                    services. You have the option to either accept or refuse\r\n                    these cookies and know when a cookie is being sent to your\r\n                    device. If you choose to refuse our cookies, you may not be\r\n                    able to use some portions of this Service.\r\n                  </p> <p><strong>Service Providers</strong></p> <p>\r\n                    I may employ third-party companies\r\n                    and individuals due to the following reasons:\r\n                  </p> <ul><li>To facilitate our Service;</li> <li>To provide the Service on our behalf;</li> <li>To perform Service-related services; or</li> <li>To assist us in analyzing how our Service is used.</li></ul> <p>\r\n                    I want to inform users of this\r\n                    Service that these third parties have access to your\r\n                    Personal Information. The reason is to perform the tasks\r\n                    assigned to them on our behalf. However, they are obligated\r\n                    not to disclose or use the information for any other\r\n                    purpose.\r\n                  </p> <p><strong>Security</strong></p> <p>\r\n                    I value your trust in providing us\r\n                    your Personal Information, thus we are striving to use\r\n                    commercially acceptable means of protecting it. But remember\r\n                    that no method of transmission over the internet, or method\r\n                    of electronic storage is 100% secure and reliable, and\r\n                    I cannot guarantee its absolute security.\r\n                  </p> <p><strong>Links to Other Sites</strong></p> <p>\r\n                    This Service may contain links to other sites. If you click\r\n                    on a third-party link, you will be directed to that site.\r\n                    Note that these external sites are not operated by\r\n                    me. Therefore, I strongly advise you to\r\n                    review the Privacy Policy of these websites.\r\n                    I have no control over and assume no\r\n                    responsibility for the content, privacy policies, or\r\n                    practices of any third-party sites or services.\r\n                  </p> <p><strong>Children’s Privacy</strong></p> <p>\r\n                    These Services do not address anyone under the age of 13.\r\n                    I do not knowingly collect personally\r\n                    identifiable information from children under 13. In the case\r\n                    I discover that a child under 13 has provided\r\n                    me with personal information,\r\n                    I immediately delete this from our servers. If you\r\n                    are a parent or guardian and you are aware that your child\r\n                    has provided us with personal information, please contact\r\n                    me so that I will be able to do\r\n                    necessary actions.\r\n                  </p> <p><strong>Changes to This Privacy Policy</strong></p> <p>\r\n                    I may update our Privacy Policy from\r\n                    time to time. Thus, you are advised to review this page\r\n                    periodically for any changes. I will\r\n                    notify you of any changes by posting the new Privacy Policy\r\n                    on this page. These changes are effective immediately after\r\n                    they are posted on this page.\r\n                  </p> <p><strong>Contact Us</strong></p> <p>\r\n                    If you have any questions or suggestions about\r\n                    my Privacy Policy, do not hesitate to contact\r\n                    me at ladla8602@gmail.com\r\n                  </p> \r\n</ion-content>"

/***/ }),

/***/ "./src/app/button-text/button-text.page.scss":
/*!***************************************************!*\
  !*** ./src/app/button-text/button-text.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-grid {\n  padding: 0 0 16px 0;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #ddd; }\n  ion-content ion-grid ion-text h2 {\n    margin-top: 0; }\n  ion-content ion-grid ion-text h4 {\n    margin: 0; }\n  ion-content ion-grid ion-button {\n    margin-left: 0;\n    margin-right: 0; }\n  ion-content ion-grid:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n    padding-bottom: 0; }\n  ion-content ion-grid ion-row ion-col:first-child {\n    padding-left: 0; }\n  ion-content ion-grid ion-row ion-col:last-child {\n    text-align: right;\n    padding-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uLXRleHQvQzpcXHhhbXBwXFxodGRvY3NcXG5nLWtub3dteXNlbGYvc3JjXFxhcHBcXGJ1dHRvbi10ZXh0XFxidXR0b24tdGV4dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLDZCQUE0QixFQUFBO0VBSmhDO0lBT1EsYUFBWSxFQUFBO0VBUHBCO0lBVVEsU0FBUSxFQUFBO0VBVmhCO0lBY00sY0FBYTtJQUNiLGVBQWMsRUFBQTtFQWZwQjtJQWtCTSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBcEJ2QjtJQXlCVSxlQUFjLEVBQUE7RUF6QnhCO0lBNEJVLGlCQUFpQjtJQUNqQixnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uLXRleHQvYnV0dG9uLXRleHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgaW9uLWdyaWR7XHJcbiAgICBwYWRkaW5nOiAwIDAgMTZweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDsgXHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgaDJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowO1xyXG4gICAgICB9XHJcbiAgICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tbGVmdDowO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6MDtcclxuICAgIH1cclxuICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBpb24tcm93e1xyXG4gICAgICBpb24tY29se1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/button-text/button-text.page.ts":
/*!*************************************************!*\
  !*** ./src/app/button-text/button-text.page.ts ***!
  \*************************************************/
/*! exports provided: ButtonTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTextPage", function() { return ButtonTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ButtonTextPage = /** @class */ (function () {
    function ButtonTextPage(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.items = [];
    }
    ButtonTextPage.prototype.ngOnInit = function () {
        this.menuCtrl.close();
    };
    ButtonTextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-text',
            template: __webpack_require__(/*! ./button-text.page.html */ "./src/app/button-text/button-text.page.html"),
            styles: [__webpack_require__(/*! ./button-text.page.scss */ "./src/app/button-text/button-text.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], ButtonTextPage);
    return ButtonTextPage;
}());



/***/ })

}]);
//# sourceMappingURL=button-text-button-text-module.js.map