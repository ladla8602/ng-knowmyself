(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "./src/app/intro/intro.module.ts":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");







var routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]
    }
];
var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
        })
    ], IntroPageModule);
    return IntroPageModule;
}());



/***/ }),

/***/ "./src/app/intro/intro.page.html":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen=\"true\" no-padding>\n  <ion-slides pager=\"true\" #IonSlides loop=\"true\" no-padding (ionSlideDidChange)=\"slideChanged()\">\n    <ion-slide #IonSlides *ngFor=\"let slide of slides; let i=index\" no-padding>\n      <span no-padding>\n        <ion-row justify-content-center>\n          <img src=\"{{slide.image}}\" alt=\"Slide Images\">\n        </ion-row>\n        <ion-row class=\"icon-row\" justify-content-center>\n          <ion-icon name=\"{{slide.icon}}\"></ion-icon>\n        </ion-row>\n        <ion-row justify-content-center>\n          <h2 class=\"slideTitle\">{{slide.title}}</h2>\n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-col>\n            <p>{{slide.text}}</p>\n          </ion-col>\n        </ion-row>\n      </span>\n    </ion-slide>\n  </ion-slides>\n  <ion-row>\n    <ion-col size=\"2\">\n      <div>\n        <ion-button *ngIf=\"!visiable\" routerLink=\"/home\" routerDirection=\"forward\" fill=\"clear\">Skip</ion-button>\n      </div>\n    </ion-col>\n    <ion-col size=\"8\">\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-icon *ngIf=\"!visiable\" (click)=\"nextSlide()\" name=\"arrow-round-forward\"></ion-icon>\n      <ion-button *ngIf=\"visiable\" routerLink=\"/home\" routerDirection=\"forward\" fill=\"clear\">Done</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/intro/intro.page.scss":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:none !important;\n  background: url('introbg.png');\n  background-position: top center;\n  background-size: auto 100%;\n  background-repeat: no-repeat; }\n  ion-content ion-slides {\n    height: 99%;\n    --bullet-background:black !important;\n    --bullet-background-active:red !important; }\n  ion-content ion-slides span {\n      margin-top: -10px;\n      margin-left: auto;\n      margin-right: auto;\n      width: 100%; }\n  ion-content ion-slides span ion-row {\n        border-top: none !important;\n        margin-top: 2%; }\n  ion-content ion-slides span ion-row:first-child {\n          width: auto;\n          height: 350px; }\n  ion-content ion-row {\n    margin-top: -40px;\n    border-top: solid gray;\n    border-width: 0.5px; }\n  ion-content ion-row ion-col:first-child ion-button {\n      color: red;\n      --border-color:red;\n      height: 30px;\n      margin-top: 4px;\n      position: absolute;\n      z-index: 999; }\n  ion-content ion-row ion-col:last-child ion-icon {\n      color: red;\n      zoom: 1.3;\n      margin-top: -5px;\n      padding-top: 10px;\n      position: absolute;\n      z-index: 999; }\n  ion-content ion-row ion-col:last-child ion-button {\n      color: red;\n      --border-color: red;\n      height: 30px;\n      margin-top: 2px;\n      position: absolute;\n      z-index: 999;\n      margin-left: -30px; }\n  p {\n  text-align: center;\n  color: gray; }\n  ion-item {\n  --background:white !important;\n  width: 100%; }\n  ion-row {\n  margin-top: 2%; }\n  .icon-row {\n  margin-top: 1%; }\n  .icon-row ion-icon {\n    height: 2em;\n    width: 2em;\n    color: red; }\n  .slideTitle {\n  font-size: 18px;\n  margin-top: 5px;\n  margin-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9pbnRyby9pbnRyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBYTtFQUNiLDhCQUFpRDtFQUNqRCwrQkFBK0I7RUFDL0IsMEJBQXlCO0VBQ3pCLDRCQUE0QixFQUFBO0VBTDlCO0lBT0ksV0FBVztJQUNYLG9DQUFvQjtJQUNwQix5Q0FBMkIsRUFBQTtFQVQvQjtNQVdNLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQWRqQjtRQWdCUSwyQkFBMkI7UUFDM0IsY0FBYyxFQUFBO0VBakJ0QjtVQW1CVSxXQUFXO1VBQ1gsYUFBYSxFQUFBO0VBcEJ2QjtJQTBCSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBO0VBNUJ2QjtNQWdDVSxVQUFVO01BQ1Ysa0JBQWU7TUFDZixZQUFZO01BQ1osZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7RUFyQ3RCO01BMENRLFVBQVU7TUFDVixTQUFTO01BQ1QsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsWUFBWSxFQUFBO0VBL0NwQjtNQWtEUSxVQUFVO01BQ1YsbUJBQWU7TUFDZixZQUFZO01BQ1osZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osa0JBQWtCLEVBQUE7RUFNMUI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBRWI7RUFDRSw2QkFBYTtFQUNiLFdBQVcsRUFBQTtFQUViO0VBQ0UsY0FBYyxFQUFBO0VBR2hCO0VBQ0UsY0FBYyxFQUFBO0VBRGhCO0lBR0UsV0FBVztJQUNYLFVBQVU7SUFDVixVQUNBLEVBQUE7RUFHRjtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbnRyby9pbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6dXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2ludHJvYmcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6YXV0byAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaW9uLXNsaWRlc3tcclxuICAgIGhlaWdodDogOTklO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDpibGFjayAhaW1wb3J0YW50O1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6cmVkICFpbXBvcnRhbnQ7XHJcbiAgICBzcGFue1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1yb3d7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gICAgaW9uLWNvbHtcclxuICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOnJlZDtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIHpvb206IDEuMztcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4OyAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICB9XHJcbn1cclxucHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgLS1iYWNrZ3JvdW5kOndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7IFxyXG59XHJcbmlvbi1yb3d7XHJcbiAgbWFyZ2luLXRvcDogMiU7ICAgICAgXHJcbn1cclxuLy8ybmQgcm93XHJcbi5pY29uLXJvd3tcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBpb24taWNvbntcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogMmVtO1xyXG4gIGNvbG9yOiByZWRcclxuICB9XHJcbn1cclxuLy8zcmQgcm93XHJcbi5zbGlkZVRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/intro/intro.page.ts":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");




var IntroPage = /** @class */ (function () {
    function IntroPage(splashScreen) {
        this.splashScreen = splashScreen;
        this.visiable = false;
        this.slides = [
            { image: "assets/images/intro/slides_1.gif", title: "Home Page", icon: "home", text: "Home screen contain all themes at top. You can select component screen, UI screens and many more from home page. " },
            { image: "assets/images/intro/slides_2.gif", title: "Component Details Page", icon: "apps", text: "Cmponent details page contain all 90+ screens of ionic components. You can use them instead of creating them from scratch" },
            { image: "assets/images/intro/slides_3.gif", title: "UI screens", icon: "browsers", text: "Comming Soon" },
        ];
    }
    IntroPage.prototype.nextSlide = function () {
        this.autoSlides.slideNext();
    };
    IntroPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.splashScreen.hide();
        }, 1500);
        this.autoSlides.startAutoplay();
    };
    IntroPage.prototype.ngOnInit = function () { };
    IntroPage.prototype.slideChanged = function () {
        var _this = this;
        this.autoSlides.getActiveIndex().then(function (index) {
            console.log(index);
            if (index == 2) {
                _this.visiable = true;
            }
            else {
                _this.visiable = false;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], IntroPage.prototype, "autoSlides", void 0);
    IntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.page.html */ "./src/app/intro/intro.page.html"),
            styles: [__webpack_require__(/*! ./intro.page.scss */ "./src/app/intro/intro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]])
    ], IntroPage);
    return IntroPage;
}());



/***/ })

}]);
//# sourceMappingURL=intro-intro-module.js.map