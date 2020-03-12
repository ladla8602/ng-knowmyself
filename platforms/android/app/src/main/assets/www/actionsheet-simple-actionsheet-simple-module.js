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
/* harmony import */ var _hide_header_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hide-header.directive */ "./src/app/hide-header.directive.ts");
/* harmony import */ var _actionsheet_simple_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actionsheet-simple.page */ "./src/app/actionsheet-simple/actionsheet-simple.page.ts");








var ActionsheetSimplePageModule = /** @class */ (function () {
    function ActionsheetSimplePageModule() {
    }
    ActionsheetSimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _actionsheet_simple_page__WEBPACK_IMPORTED_MODULE_7__["ActionsheetSimplePage"]
                    }
                ])
            ],
            declarations: [_actionsheet_simple_page__WEBPACK_IMPORTED_MODULE_7__["ActionsheetSimplePage"], _hide_header_directive__WEBPACK_IMPORTED_MODULE_6__["HideHeaderDirective"]]
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

module.exports = "<ion-header #header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/index/{{cat_id}}\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{index}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"block\" (click)=\"unfavoriteArticle()\" *ngIf=\"isFavorite\">\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"block\" (click)=\"favoriteArticle()\" *ngIf=\"!isFavorite\">\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf=\"articles\" scrollEvents=\"true\" appHideHeader [header]=\"header\">\n  <ion-grid *ngFor=\"let item of articles\">\n    <div [innerHtml]=\"item.article\"></div>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"light\">\n        <ion-icon class=\"share-icon\" name=\"share\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\">\n        <ion-fab-button (click)=\"shareViaWhatsapp()\" color=\"primary\" clear>\n            <ion-icon class=\"share-icon\" name=\"logo-whatsapp\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"shareViaFacebook()\" color=\"primary\" clear>\n            <ion-icon  class=\"share-icon\" name=\"logo-facebook\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"shareViaTwitter()\" color=\"primary\" clear>\n            <ion-icon class=\"share-icon\" name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"shareViaEmail()\" color=\"primary\" clear>\n            <ion-icon class=\"share-icon\" name=\"mail\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"share()\" color=\"primary\" clear>\n            <ion-icon class=\"share-icon\" name=\"share\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n  </ion-fab>\n</ion-content>\n\n<ion-content no-padding *ngIf=\"articles.length == 0\">\n    <ion-card>\n        <ion-item>\n        <ion-label>\n            <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\n            <p><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n        </ion-label>\n    </ion-item>\n    <ion-card-content>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </ion-card-content>\n    <ion-row>\n        <ion-col padding>\n            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n        </ion-col>\n        \n    </ion-row>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/actionsheet-simple/actionsheet-simple.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/actionsheet-simple/actionsheet-simple.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aion-content ion-grid {\n  padding: 0 0 16px 0;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #ddd; }\n  aion-content ion-grid ion-text h2 {\n    margin-top: 0; }\n  aion-content ion-grid ion-img {\n    margin-bottom: 16px; }\n  aion-content ion-grid ion-button {\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px; }\n  aion-content ion-grid:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n    padding-bottom: 0; }\n  ion-fab-button[data-desc] {\n  position: relative; }\n  ion-fab-button[data-desc]::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 55px;\n  bottom: 4px;\n  background-color: var(--ion-color-primary);\n  padding: 9px;\n  border-radius: 15px;\n  color: white;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hpL0Rlc2t0b3Avbmcta25vd215c2VsZi9zcmMvYXBwL2FjdGlvbnNoZWV0LXNpbXBsZS9hY3Rpb25zaGVldC1zaW1wbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQiw2QkFBNEIsRUFBQTtFQUpoQztJQU9RLGFBQVksRUFBQTtFQVBwQjtJQVdNLG1CQUFrQixFQUFBO0VBWHhCO0lBY00sY0FBYTtJQUNiLGVBQWM7SUFDZCxtQkFBbUIsRUFBQTtFQWhCekI7SUFvQk0sbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQUl2QjtFQUNFLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUhBQXdHLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY3Rpb25zaGVldC1zaW1wbGUvYWN0aW9uc2hlZXQtc2ltcGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFpb24tY29udGVudHtcclxuICBpb24tZ3JpZHtcclxuICAgIHBhZGRpbmc6IDAgMCAxNnB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEycHg7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkOyBcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBoMntcclxuICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1pbWd7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MTZweDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDowO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1mYWItYnV0dG9uW2RhdGEtZGVzY10ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b25bZGF0YS1kZXNjXTo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtZGVzYyk7XHJcbiAgei1pbmRleDogMTtcclxuICByaWdodDogNTVweDtcclxuICBib3R0b206IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLDAuMTIpO1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article/article.service */ "./src/app/article/article.service.ts");
/* harmony import */ var _providers_bookmark_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/bookmark_index */ "./src/app/providers/bookmark_index.ts");
/* harmony import */ var _providers_recent_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/recent_index */ "./src/app/providers/recent_index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _services_admobfree_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/admobfree.service */ "./src/app/services/admobfree.service.ts");










var ActionsheetSimplePage = /** @class */ (function () {
    //action sheet package declaration
    function ActionsheetSimplePage(platform, route, articleService, favoriteProvider, recentProvider, toast, socialSharing, admobFreeService) {
        this.platform = platform;
        this.route = route;
        this.articleService = articleService;
        this.favoriteProvider = favoriteProvider;
        this.recentProvider = recentProvider;
        this.toast = toast;
        this.socialSharing = socialSharing;
        this.admobFreeService = admobFreeService;
        this.articles = [];
        this.staticarticles = [];
        this.isFavorite = false;
    }
    ActionsheetSimplePage.prototype.ngOnInit = function () {
        var _this = this;
        this.index_id = this.route.snapshot.paramMap.get('index_id');
        this.initializeArticle(this.index_id);
        this.favoriteProvider.isFavorite(this.index_id).then(function (isFav) {
            _this.isFavorite = isFav;
        });
    };
    ActionsheetSimplePage.prototype.ionViewDidEnter = function () {
        this.randomNumber = this.getRandomInt(3);
        console.log(this.randomNumber);
        if (this.randomNumber === 0) {
            this.admobFreeService.InterstitialAd();
        }
    };
    ActionsheetSimplePage.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    ActionsheetSimplePage.prototype.initializeArticle = function (id) {
        var _this = this;
        this.articleService.getArticle(id).subscribe(function (res) {
            if (res && res.length) {
                _this.articles = res;
                _this.shareArticle = res[0].article;
                _this.staticarticles = res;
                _this.index = res[0].index; //assigning article name
                _this.cat_id = res[0].category_id;
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
    // stripHtml(html){
    //     // Create a new div element
    //     var temporalDivElement = document.createElement("div");
    //     // Set the HTML content with the providen
    //     temporalDivElement.innerHTML = html;
    //     // Retrieve the text property of the element (cross-browser support)
    //     return temporalDivElement.textContent || temporalDivElement.innerText || "";
    // }
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
    ActionsheetSimplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actionsheet-simple',
            template: __webpack_require__(/*! ./actionsheet-simple.page.html */ "./src/app/actionsheet-simple/actionsheet-simple.page.html"),
            styles: [__webpack_require__(/*! ./actionsheet-simple.page.scss */ "./src/app/actionsheet-simple/actionsheet-simple.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _article_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"],
            _providers_bookmark_index__WEBPACK_IMPORTED_MODULE_4__["FavoriteProvider"],
            _providers_recent_index__WEBPACK_IMPORTED_MODULE_5__["RecentProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
            _services_admobfree_service__WEBPACK_IMPORTED_MODULE_8__["AdmobFreeService"]])
    ], ActionsheetSimplePage);
    return ActionsheetSimplePage;
}());



/***/ }),

/***/ "./src/app/hide-header.directive.ts":
/*!******************************************!*\
  !*** ./src/app/hide-header.directive.ts ***!
  \******************************************/
/*! exports provided: HideHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function() { return HideHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var HideHeaderDirective = /** @class */ (function () {
    function HideHeaderDirective(renderer, domCtrl) {
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastY = 0;
    }
    HideHeaderDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.header = this.header.el;
        this.domCtrl.write(function () {
            _this.renderer.setStyle(_this.header, 'transition', 'margin-top 700ms');
        });
    };
    HideHeaderDirective.prototype.onContentScroll = function ($event) {
        var _this = this;
        if ($event.detail.scrollTop > this.lastY) {
            this.domCtrl.write(function () {
                _this.renderer.setStyle(_this.header, 'margin-top', "-" + _this.header.clientHeight + "px");
            });
        }
        else {
            this.domCtrl.write(function () {
                _this.renderer.setStyle(_this.header, 'margin-top', '0');
            });
        }
        this.lastY = $event.detail.scrollTop;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('header'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HideHeaderDirective.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionScroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HideHeaderDirective.prototype, "onContentScroll", null);
    HideHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHideHeader]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])
    ], HideHeaderDirective);
    return HideHeaderDirective;
}());



/***/ })

}]);
//# sourceMappingURL=actionsheet-simple-actionsheet-simple-module.js.map