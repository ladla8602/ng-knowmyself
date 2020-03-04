(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actionsheet-simple-actionsheet-simple-module"],{

/***/ "./src/app/actionsheet-simple/actionsheet-simple.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/actionsheet-simple/actionsheet-simple.module.ts ***!
  \*****************************************************************/
/*! exports provided: ActionsheetSimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsheetSimplePageModule", function() { return ActionsheetSimplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _actionsheet_simple_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionsheet-simple.page */ "./src/app/actionsheet-simple/actionsheet-simple.page.ts");







var routes = [
    {
        path: '',
        component: _actionsheet_simple_page__WEBPACK_IMPORTED_MODULE_6__["ActionsheetSimplePage"]
    }
];
var ActionsheetSimplePageModule = /** @class */ (function () {
    function ActionsheetSimplePageModule() {
    }
    ActionsheetSimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_actionsheet_simple_page__WEBPACK_IMPORTED_MODULE_6__["ActionsheetSimplePage"]]
        })
    ], ActionsheetSimplePageModule);
    return ActionsheetSimplePageModule;
}());



/***/ }),

/***/ "./src/app/actionsheet-simple/actionsheet-simple.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/actionsheet-simple/actionsheet-simple.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button expand=\"block\" (click)=\"backToIndex()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{index}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button expand=\"block\" (click)=\"unfavoriteArticle()\" *ngIf=\"isFavorite\">\r\n        <ion-icon name=\"star\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button expand=\"block\" (click)=\"favoriteArticle()\" *ngIf=\"!isFavorite\">\r\n        <ion-icon name=\"star-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding *ngIf=\"articles\">\r\n  <ion-grid *ngFor=\"let item of articles\">\r\n    <div [innerHtml]=\"item.article\"></div>\r\n  </ion-grid>\r\n</ion-content>\r\n<!-- Footer without a border -->\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-row>\r\n            <ion-col style=\"text-align: center;\">\r\n              <div ion-button icon-only (click)=\"share()\" color=\"primary\" clear>\r\n            <ion-icon class=\"share-icon\" name=\"share\"></ion-icon>\r\n            </div>\r\n            </ion-col>\r\n            <ion-col style=\"text-align: center;\">\r\n                <div ion-button icon-only (click)=\"shareViaEmail()\" color=\"primary\" clear>\r\n              <ion-icon class=\"share-icon\" name=\"mail\"></ion-icon>\r\n            </div>\r\n              </ion-col>\r\n            <ion-col style=\"text-align: center;\">\r\n                <div ion-button icon-only (click)=\"shareViaTwitter()\" color=\"primary\" clear>\r\n                    <ion-icon class=\"share-icon\" name=\"logo-twitter\"></ion-icon>\r\n                  </div>\r\n            </ion-col>\r\n            <ion-col style=\"text-align: center;\">\r\n              <div ion-button icon-only (click)=\"shareViaFacebook()\" color=\"primary\" clear>\r\n            <ion-icon  class=\"share-icon\" name=\"logo-facebook\"></ion-icon>\r\n             </div>\r\n            </ion-col>\r\n            <ion-col style=\"text-align: center;\">\r\n                <div ion-button icon-only (click)=\"shareViaWhatsapp()\" color=\"primary\" clear>\r\n                    <ion-icon class=\"share-icon\" name=\"logo-whatsapp\"></ion-icon>\r\n                </div>\r\n            </ion-col>\r\n          </ion-row>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n<ion-content no-padding *ngIf=\"articles.length == 0\">\r\n    <ion-card>\r\n        <ion-item>\r\n        <ion-label>\r\n            <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n            <p><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\r\n        </ion-label>\r\n    </ion-item>\r\n    <ion-card-content>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n    </ion-card-content>\r\n    <ion-row>\r\n        <ion-col padding>\r\n            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n        </ion-col>\r\n        \r\n    </ion-row>\r\n    </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/actionsheet-simple/actionsheet-simple.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/actionsheet-simple/actionsheet-simple.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-grid {\n  padding: 0 0 16px 0;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #ddd; }\n  ion-content ion-grid ion-text h2 {\n    margin-top: 0; }\n  ion-content ion-grid ion-img {\n    margin-bottom: 16px; }\n  ion-content ion-grid ion-button {\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px; }\n  ion-content ion-grid:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n    padding-bottom: 0; }\n  ion-fab-button[data-desc] {\n  position: relative; }\n  ion-fab-button[data-desc]::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 55px;\n  bottom: 4px;\n  background-color: var(--ion-color-primary);\n  padding: 9px;\n  border-radius: 15px;\n  color: white;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aW9uc2hlZXQtc2ltcGxlL0M6XFx4YW1wcFxcaHRkb2NzXFxuZy1rbm93bXlzZWxmL3NyY1xcYXBwXFxhY3Rpb25zaGVldC1zaW1wbGVcXGFjdGlvbnNoZWV0LXNpbXBsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLDZCQUE0QixFQUFBO0VBSmhDO0lBT1EsYUFBWSxFQUFBO0VBUHBCO0lBV00sbUJBQWtCLEVBQUE7RUFYeEI7SUFjTSxjQUFhO0lBQ2IsZUFBYztJQUNkLG1CQUFtQixFQUFBO0VBaEJ6QjtJQW9CTSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBSXZCO0VBQ0Usa0JBQWtCLEVBQUE7RUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpSEFBd0csRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbnNoZWV0LXNpbXBsZS9hY3Rpb25zaGVldC1zaW1wbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgaW9uLWdyaWR7XHJcbiAgICBwYWRkaW5nOiAwIDAgMTZweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDsgXHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgaDJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24taW1ne1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjE2cHg7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tbGVmdDowO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6MDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tZmFiLWJ1dHRvbltkYXRhLWRlc2NdIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uW2RhdGEtZGVzY106OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWRlc2MpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcmlnaHQ6IDU1cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDlweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/actionsheet-simple/actionsheet-simple.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/actionsheet-simple/actionsheet-simple.page.ts ***!
  \***************************************************************/
/*! exports provided: ActionsheetSimplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsheetSimplePage", function() { return ActionsheetSimplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article/article.service */ "./src/app/article/article.service.ts");
/* harmony import */ var _providers_bookmark_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/bookmark_index */ "./src/app/providers/bookmark_index.ts");
/* harmony import */ var _providers_recent_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/recent_index */ "./src/app/providers/recent_index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



 //actionsheet controller package








var ActionsheetSimplePage = /** @class */ (function () {
    //action sheet package declaration
    function ActionsheetSimplePage(platform, route, actionSheetController, location, articleService, storage, favoriteProvider, recentProvider, toast, socialSharing) {
        var _this = this;
        this.platform = platform;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.location = location;
        this.articleService = articleService;
        this.storage = storage;
        this.favoriteProvider = favoriteProvider;
        this.recentProvider = recentProvider;
        this.toast = toast;
        this.socialSharing = socialSharing;
        this.articles = [];
        this.staticarticles = [];
        this.isFavorite = false;
        this.index_id = this.route.snapshot.paramMap.get('index_id');
        this.favoriteProvider.isFavorite(this.index_id).then(function (isFav) {
            _this.isFavorite = isFav;
        });
    }
    ActionsheetSimplePage.prototype.ngOnInit = function () {
        this.initializeArticle(this.index_id);
    };
    ActionsheetSimplePage.prototype.initializeArticle = function (id) {
        var _this = this;
        this.articleService.getArticle(id).subscribe(function (res) {
            if (res && res.length) {
                _this.articles = res;
                _this.shareArticle = res[0].article;
                _this.staticarticles = res;
                _this.index = res[0].index; //assigning article name
                //storing recently views articles index id
                _this.recentProvider.favoriteFilm(_this.index_id);
            }
            else {
                _this.articles = [];
            }
        });
    };
    ActionsheetSimplePage.prototype.favoriteArticle = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.favoriteProvider.favoriteFilm(this.index_id).then(function () {
                            _this.isFavorite = true;
                        });
                        return [4 /*yield*/, this.toast.create({
                                cssClass: 'toastTag',
                                color: "success",
                                showCloseButton: true,
                                position: 'bottom',
                                message: "Article Bookmarked Successfully.",
                                closeButtonText: '| Ok',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionsheetSimplePage.prototype.unfavoriteArticle = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.favoriteProvider.unfavoriteFilm(this.index_id).then(function () {
                            _this.isFavorite = false;
                        });
                        return [4 /*yield*/, this.toast.create({
                                cssClass: 'toastTag',
                                color: "danger",
                                showCloseButton: true,
                                position: 'bottom',
                                message: "Article removed from Bookmark.",
                                closeButtonText: '| Ok',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionsheetSimplePage.prototype.stripHtml = function (html) {
        // Create a new div element
        var temporalDivElement = document.createElement("div");
        // Set the HTML content with the providen
        temporalDivElement.innerHTML = html;
        // Retrieve the text property of the element (cross-browser support)
        return temporalDivElement.textContent || temporalDivElement.innerText || "";
    };
    ActionsheetSimplePage.prototype.compilemsg = function () {
        var msg = this.index + "\n" + this.shareArticle;
        return msg.concat(" \n Sent from 2KnowMySelf App! - https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself");
    };
    // Share Options
    ActionsheetSimplePage.prototype.share = function () {
        var _this = this;
        this.platform.ready().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.socialSharing.share('2KnowMySelf Psychology - The Article Pocket Book - Download at https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself').then(function () {
                        }).catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    // Share Via Email
    ActionsheetSimplePage.prototype.shareViaEmail = function () {
        var _this = this;
        this.socialSharing.canShareViaEmail().then(function () {
            _this.platform.ready().then(function () {
                _this.msg = _this.compilemsg();
                _this.socialSharing.shareViaEmail('Download Awesome Psychology Article Pocket App \n' + _this.msg, 'https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself', []);
            });
        }).catch(function (err) {
            alert('Email not available');
        });
    };
    // Share Via WhatsApp
    ActionsheetSimplePage.prototype.shareViaWhatsapp = function () {
        this.msg = this.compilemsg();
        this.socialSharing.shareViaWhatsApp(this.msg, null, 'https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself')
            .then(function () {
            console.log('It works');
        }).catch(function () {
            alert('WhatsApp not available');
        });
    };
    // Share Via Facebook
    ActionsheetSimplePage.prototype.shareViaFacebook = function () {
        this.msg = this.compilemsg();
        this.socialSharing.shareViaFacebook(this.msg, null, 'https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself')
            .then(function () {
            console.log('It works');
        }).catch(function () {
            alert('Facebook not available');
        });
    };
    // Share Via Twitter
    ActionsheetSimplePage.prototype.shareViaTwitter = function () {
        this.msg = this.compilemsg();
        this.socialSharing.shareViaTwitter('2KnowMySelf Psychology - The Article Pocket Book', null, 'https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself')
            .then(function () {
            console.log('It works');
        }).catch(function () {
            alert('Twitter not available');
        });
    };
    ActionsheetSimplePage.prototype.backToIndex = function () {
        this.location.back();
    };
    ActionsheetSimplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-actionsheet-simple',
            template: __webpack_require__(/*! ./actionsheet-simple.page.html */ "./src/app/actionsheet-simple/actionsheet-simple.page.html"),
            styles: [__webpack_require__(/*! ./actionsheet-simple.page.scss */ "./src/app/actionsheet-simple/actionsheet-simple.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _article_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
            _providers_bookmark_index__WEBPACK_IMPORTED_MODULE_6__["FavoriteProvider"],
            _providers_recent_index__WEBPACK_IMPORTED_MODULE_7__["RecentProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__["SocialSharing"]])
    ], ActionsheetSimplePage);
    return ActionsheetSimplePage;
}());



/***/ })

}]);
//# sourceMappingURL=actionsheet-simple-actionsheet-simple-module.js.map