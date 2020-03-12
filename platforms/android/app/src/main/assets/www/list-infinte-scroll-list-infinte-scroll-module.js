(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-infinte-scroll-list-infinte-scroll-module"],{

/***/ "./src/app/list-infinte-scroll/list-infinte-scroll.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/list-infinte-scroll/list-infinte-scroll.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListInfinteScrollPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInfinteScrollPageModule", function() { return ListInfinteScrollPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_infinte_scroll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-infinte-scroll.page */ "./src/app/list-infinte-scroll/list-infinte-scroll.page.ts");







var ListInfinteScrollPageModule = /** @class */ (function () {
    function ListInfinteScrollPageModule() {
    }
    ListInfinteScrollPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_infinte_scroll_page__WEBPACK_IMPORTED_MODULE_6__["ListInfinteScrollPage"]
                    }
                ])
            ],
            declarations: [_list_infinte_scroll_page__WEBPACK_IMPORTED_MODULE_6__["ListInfinteScrollPage"]]
        })
    ], ListInfinteScrollPageModule);
    return ListInfinteScrollPageModule;
}());



/***/ }),

/***/ "./src/app/list-infinte-scroll/list-infinte-scroll.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/list-infinte-scroll/list-infinte-scroll.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/home\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{category}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n <!--search box -->\n <ion-row no-padding>\n    <ion-col no-padding>\n      <ion-item style='--background:var(--my-var)' class=\"itemSlider\">\n          <ion-searchbar (ionInput)=\"searchIndex($event)\" placeholder=\"Search Article Category\" animated></ion-searchbar>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n<ion-content no-padding>\n  <!-- list with multiple iterations -->\n  <ion-list *ngIf=\"products\">\n    <div *ngFor=\"let item of products\">\n      <ion-item *ngIf=\"item.status == '1'; else noArticleBlock\" routerLink=\"/article/{{item.id}}\" routerDirection=\"forward\">\n      <ion-label style=\"font-weight: 600;\">\n        {{item.index}}\n      </ion-label>\n      <span slot=\"end\" class=\"dot green\"></span>\n    </ion-item>\n    <ng-template #noArticleBlock>\n    <ion-item (click)=\"hasArticle()\">\n        <ion-text style=\"font-weight: 600;\">\n            {{ item.index }}\n        </ion-text>\n         <span slot=\"end\" class=\"dot red\"></span>\n    </ion-item>\n    </ng-template>\n    </div>\n    \n  </ion-list>\n  <ion-list *ngIf=\"products.length == 0\">\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/list-infinte-scroll/list-infinte-scroll.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/list-infinte-scroll/list-infinte-scroll.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dot {\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  display: inline-block; }\n\n.red {\n  background-color: #FF0000; }\n\n.green {\n  background-color: #008000; }\n\nion-searchbar {\n  --background:#eee !important; }\n\n/* Custom Skeleton Line Height and Margin */\n\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px; }\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hpL0Rlc2t0b3Avbmcta25vd215c2VsZi9zcmMvYXBwL2xpc3QtaW5maW50ZS1zY3JvbGwvbGlzdC1pbmZpbnRlLXNjcm9sbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFekI7RUFDRSw0QkFBYSxFQUFBOztBQUVmLDJDQUFBOztBQUNGO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0LWluZmludGUtc2Nyb2xsL2xpc3QtaW5maW50ZS1zY3JvbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvdCB7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnJlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbn1cblxuLmdyZWVue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xufVxuICBpb24tc2VhcmNoYmFye1xuICAgIC0tYmFja2dyb3VuZDojZWVlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLyogQ3VzdG9tIFNrZWxldG9uIExpbmUgSGVpZ2h0IGFuZCBNYXJnaW4gKi9cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQge1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cblxuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/list-infinte-scroll/list-infinte-scroll.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/list-infinte-scroll/list-infinte-scroll.page.ts ***!
  \*****************************************************************/
/*! exports provided: ListInfinteScrollPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInfinteScrollPage", function() { return ListInfinteScrollPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article/article.service */ "./src/app/article/article.service.ts");





var ListInfinteScrollPage = /** @class */ (function () {
    function ListInfinteScrollPage(route, router, articleService, toast) {
        this.route = route;
        this.router = router;
        this.articleService = articleService;
        this.toast = toast;
        this.products = [];
        this.staticproducts = [];
        this.scrollLength = 5;
    }
    ListInfinteScrollPage.prototype.ngOnInit = function () {
    };
    ListInfinteScrollPage.prototype.ionViewWillEnter = function () {
        this.cat_id = this.route.snapshot.paramMap.get('cat_id');
        this.initializeIndex(this.cat_id);
    };
    ListInfinteScrollPage.prototype.ionViewWillLeave = function () {
        this.products = [];
    };
    ListInfinteScrollPage.prototype.ngOnDestroy = function () {
    };
    ListInfinteScrollPage.prototype.initializeIndex = function (id) {
        var _this = this;
        this.articleService.getIndex(id).subscribe(function (res) {
            if (res && res.length) {
                _this.products = res;
                _this.staticproducts = res;
                _this.category = res[0].category; //assigning category name
            }
        });
    };
    ListInfinteScrollPage.prototype.resetProduct = function () {
        this.products = this.staticproducts;
    };
    ListInfinteScrollPage.prototype.searchIndex = function (ev) {
        // Reset items back to all of the items
        this.resetProduct();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.products = this.products.filter(function (item) {
                return (item.index.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ListInfinteScrollPage.prototype.hasArticle = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            cssClass: 'toastTag',
                            color: "danger",
                            showCloseButton: true,
                            position: 'bottom',
                            message: "Article will be available soon! Stay Tuned",
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
    ListInfinteScrollPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-infinte-scroll',
            template: __webpack_require__(/*! ./list-infinte-scroll.page.html */ "./src/app/list-infinte-scroll/list-infinte-scroll.page.html"),
            styles: [__webpack_require__(/*! ./list-infinte-scroll.page.scss */ "./src/app/list-infinte-scroll/list-infinte-scroll.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _article_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], ListInfinteScrollPage);
    return ListInfinteScrollPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-infinte-scroll-list-infinte-scroll-module.js.map