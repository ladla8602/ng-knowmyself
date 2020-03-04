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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" (click)=\"backToIndex()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{index}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"block\" (click)=\"unfavoriteArticle()\" *ngIf=\"isFavorite\">\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"block\" (click)=\"favoriteArticle()\" *ngIf=\"!isFavorite\">\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf=\"articles\">\n  <ion-grid *ngFor=\"let item of articles\">\n    <div [innerHtml]=\"item.article\"></div>\n  </ion-grid>\n</ion-content>\n<!-- Footer without a border -->\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-row>\n            <ion-col style=\"text-align: center;\">\n              <button ion-button icon-only (click)=\"share()\" color=\"primary\" clear>\n            <ion-icon class=\"share-icon\" name=\"share\"></ion-icon>\n            </button>\n            </ion-col>\n            <ion-col style=\"text-align: center;\">\n                <button ion-button icon-only (click)=\"shareViaEmail()\" color=\"primary\" clear>\n              <ion-icon class=\"share-icon\" name=\"mail\"></ion-icon>\n            </button>\n              </ion-col>\n            <ion-col style=\"text-align: center;\">\n                <button ion-button icon-only (click)=\"shareViaTwitter()\" color=\"primary\" clear>\n                    <ion-icon class=\"share-icon\" name=\"logo-twitter\"></ion-icon>\n                  </button>\n            </ion-col>\n            <ion-col style=\"text-align: center;\">\n              <button ion-button icon-only (click)=\"shareViaFacebook()\" color=\"primary\" clear>\n            <ion-icon  class=\"share-icon\" name=\"logo-facebook\"></ion-icon>\n             </button>\n            </ion-col>\n            <ion-col style=\"text-align: center;\">\n                <button ion-button icon-only (click)=\"shareViaWhatsapp()\" color=\"primary\" clear>\n                    <ion-icon class=\"share-icon\" name=\"logo-whatsapp\"></ion-icon>\n                </button>\n            </ion-col>\n          </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n<ion-content no-padding *ngIf=\"articles.length == 0\">\n    <ion-card>\n        <ion-item>\n        <ion-label>\n            <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\n            <p><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></p>\n        </ion-label>\n    </ion-item>\n    <ion-card-content>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </ion-card-content>\n    <ion-row>\n        <ion-col padding>\n            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n        </ion-col>\n        \n    </ion-row>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/actionsheet-simple/actionsheet-simple.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/actionsheet-simple/actionsheet-simple.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-grid {\n  padding: 0 0 16px 0;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #ddd; }\n  ion-content ion-grid ion-text h2 {\n    margin-top: 0; }\n  ion-content ion-grid ion-img {\n    margin-bottom: 16px; }\n  ion-content ion-grid ion-button {\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px; }\n  ion-content ion-grid:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n    padding-bottom: 0; }\n  ion-fab-button[data-desc] {\n  position: relative; }\n  ion-fab-button[data-desc]::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 55px;\n  bottom: 4px;\n  background-color: var(--ion-color-primary);\n  padding: 9px;\n  border-radius: 15px;\n  color: white;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9hY3Rpb25zaGVldC1zaW1wbGUvYWN0aW9uc2hlZXQtc2ltcGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsNkJBQTRCLEVBQUE7RUFKaEM7SUFPUSxhQUFZLEVBQUE7RUFQcEI7SUFXTSxtQkFBa0IsRUFBQTtFQVh4QjtJQWNNLGNBQWE7SUFDYixlQUFjO0lBQ2QsbUJBQW1CLEVBQUE7RUFoQnpCO0lBb0JNLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFJdkI7RUFDRSxrQkFBa0IsRUFBQTtFQUdwQjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlIQUF3RyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWN0aW9uc2hlZXQtc2ltcGxlL2FjdGlvbnNoZWV0LXNpbXBsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICBpb24tZ3JpZHtcclxuICAgIHBhZGRpbmc6IDAgMCAxNnB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEycHg7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkOyBcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBoMntcclxuICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1pbWd7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MTZweDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDowO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1mYWItYnV0dG9uW2RhdGEtZGVzY10ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b25bZGF0YS1kZXNjXTo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtZGVzYyk7XHJcbiAgei1pbmRleDogMTtcclxuICByaWdodDogNTVweDtcclxuICBib3R0b206IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLDAuMTIpO1xyXG59Il19 */"

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
        this.compilemsg();
    };
    ActionsheetSimplePage.prototype.initializeArticle = function (id) {
        var _this = this;
        this.articleService.getArticle(id).subscribe(function (res) {
            if (res && res.length) {
                _this.articles = res;
                _this.staticarticles = res;
                _this.index = res[0].index; //assigning article name
                //storing recently views articles index id
                _this.recentProvider.favoriteFilm(_this.index_id);
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
    ActionsheetSimplePage.prototype.compilemsg = function () {
        var msg = this.index + "\n" + this.articles.article;
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
                _this.socialSharing.shareViaEmail('Download Awesome Psychology Article Pocket App' + _this.msg, 'https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself', []);
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