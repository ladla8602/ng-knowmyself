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







var routes = [
    {
        path: '',
        component: _list_infinte_scroll_page__WEBPACK_IMPORTED_MODULE_6__["ListInfinteScrollPage"]
    }
];
var ListInfinteScrollPageModule = /** @class */ (function () {
    function ListInfinteScrollPageModule() {
    }
    ListInfinteScrollPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button expand=\"block\" routerLink=\"/home\" routerDirection=\"backward\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title> {{category}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n <!--search box -->\r\n <ion-row no-padding>\r\n    <ion-col no-padding>\r\n      <ion-item style='--background:var(--my-var)' class=\"itemSlider\">\r\n          <ion-searchbar (ionInput)=\"searchIndex($event)\" placeholder=\"Search Article Category\" animated></ion-searchbar>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n<ion-content no-padding>\r\n  <!-- list with multiple iterations -->\r\n  <ion-list *ngIf=\"products\">\r\n    <div *ngFor=\"let item of products\">\r\n      <ion-item *ngIf=\"item.status == '1'; else noArticleBlock\" routerLink=\"/article/{{item.id}}\" routerDirection=\"forward\">\r\n      <ion-label style=\"font-weight: 600;\">\r\n        {{item.index}}\r\n      </ion-label>\r\n      <span slot=\"end\" class=\"dot green\"></span>\r\n    </ion-item>\r\n    <ng-template #noArticleBlock>\r\n    <ion-item (click)=\"hasArticle()\">\r\n        <ion-text style=\"font-weight: 600;\">\r\n            {{ item.index }}\r\n        </ion-text>\r\n         <span slot=\"end\" class=\"dot red\"></span>\r\n    </ion-item>\r\n    </ng-template>\r\n    </div>\r\n    \r\n  </ion-list>\r\n  <ion-list *ngIf=\"products.length == 0\">\r\n    <ion-item>\r\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/list-infinte-scroll/list-infinte-scroll.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/list-infinte-scroll/list-infinte-scroll.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dot {\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  display: inline-block; }\n\n.red {\n  background-color: #FF0000; }\n\n.green {\n  background-color: #008000; }\n\nion-searchbar {\n  --background:#eee !important; }\n\n/* Custom Skeleton Line Height and Margin */\n\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px; }\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1pbmZpbnRlLXNjcm9sbC9DOlxceGFtcHBcXGh0ZG9jc1xcbmcta25vd215c2VsZi9zcmNcXGFwcFxcbGlzdC1pbmZpbnRlLXNjcm9sbFxcbGlzdC1pbmZpbnRlLXNjcm9sbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFFekI7RUFDRSw0QkFBYSxFQUFBOztBQUVmLDJDQUFBOztBQUNGO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0LWluZmludGUtc2Nyb2xsL2xpc3QtaW5maW50ZS1zY3JvbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvdCB7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnJlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG59XHJcblxyXG4uZ3JlZW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcclxufVxyXG4gIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6I2VlZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBDdXN0b20gU2tlbGV0b24gTGluZSBIZWlnaHQgYW5kIE1hcmdpbiAqL1xyXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICBsaW5lLWhlaWdodDogMTNweDtcclxufVxyXG5cclxuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */"

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



 //toast controller package

var ListInfinteScrollPage = /** @class */ (function () {
    function ListInfinteScrollPage(route, articleService, toast) {
        this.route = route;
        this.articleService = articleService;
        this.toast = toast;
        this.products = [];
        this.staticproducts = [];
        this.scrollLength = 5;
    }
    ListInfinteScrollPage.prototype.ngOnInit = function () {
        this.cat_id = this.route.snapshot.paramMap.get('cat_id');
        this.initializeIndex(this.cat_id);
    };
    ListInfinteScrollPage.prototype.ngOnDestroy = function () {
        this.products = [];
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
            _article_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], ListInfinteScrollPage);
    return ListInfinteScrollPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-infinte-scroll-list-infinte-scroll-module.js.map