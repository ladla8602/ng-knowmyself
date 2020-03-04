(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-timeline-theme-one-card-timeline-theme-one-module"],{

/***/ "./src/app/card-timeline-theme-one/card-timeline-theme-one.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/card-timeline-theme-one/card-timeline-theme-one.module.ts ***!
  \***************************************************************************/
/*! exports provided: CardTimelineThemeOnePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTimelineThemeOnePageModule", function() { return CardTimelineThemeOnePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_timeline_theme_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-timeline-theme-one.page */ "./src/app/card-timeline-theme-one/card-timeline-theme-one.page.ts");







var routes = [
    {
        path: '',
        component: _card_timeline_theme_one_page__WEBPACK_IMPORTED_MODULE_6__["CardTimelineThemeOnePage"]
    }
];
var CardTimelineThemeOnePageModule = /** @class */ (function () {
    function CardTimelineThemeOnePageModule() {
    }
    CardTimelineThemeOnePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_timeline_theme_one_page__WEBPACK_IMPORTED_MODULE_6__["CardTimelineThemeOnePage"]]
        })
    ], CardTimelineThemeOnePageModule);
    return CardTimelineThemeOnePageModule;
}());



/***/ }),

/***/ "./src/app/card-timeline-theme-one/card-timeline-theme-one.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/card-timeline-theme-one/card-timeline-theme-one.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button expand=\"block\" routerLink=\"/home\" routerDirection=\"backward\">\r\n                <ion-icon name=\"arrow-back\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Latest Article</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content no-padding *ngIf=\"latest\">\r\n    <!-- card with content and item with person profile  -->\r\n    <ion-card *ngFor=\"let item of latest\" routerLink=\"/article/{{item.id}}\" routerDirection=\"forward\">\r\n            <ion-item>\r\n            <ion-label>\r\n                <h3 style=\"font-weight: 600;\">{{item.index}}</h3>\r\n                <p>{{item.created_at}}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-card-content>\r\n            <div [innerHtml]=\"item.article\"></div>\r\n        </ion-card-content>\r\n        <ion-row>\r\n            <ion-col size=\"2\" no-padding>\r\n                <ion-button size=\"small\" color=\"primary\" fill=\"clear\">\r\n                    Continue Reading\r\n                    <ion-icon name='arrow-forward'></ion-icon>\r\n                </ion-button>\r\n            </ion-col>\r\n            \r\n        </ion-row>\r\n    </ion-card>\r\n</ion-content>\r\n<ion-content no-padding *ngIf=\"latest.length == 0\">\r\n        <ion-card>\r\n            <ion-item>\r\n            <ion-label>\r\n                <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n                <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-card-content>\r\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </ion-card-content>\r\n        <ion-row>\r\n            <ion-col padding>\r\n                <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n            </ion-col>\r\n            \r\n        </ion-row>\r\n    </ion-card>\r\n    <ion-card>\r\n            <ion-item>\r\n            <ion-label>\r\n                <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n                <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-card-content>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </ion-card-content>\r\n        <ion-row>\r\n            <ion-col padding>\r\n                <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n            </ion-col>\r\n            \r\n        </ion-row>\r\n    </ion-card>\r\n    <ion-card>\r\n            <ion-item>\r\n            <ion-label>\r\n                <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n                <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-card-content>\r\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </ion-card-content>\r\n        <ion-row>\r\n            <ion-col padding>\r\n                <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n            </ion-col>\r\n            \r\n        </ion-row>\r\n    </ion-card>\r\n    <ion-card>\r\n            <ion-item>\r\n            <ion-label>\r\n                <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n                <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-card-content>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n        </ion-card-content>\r\n        <ion-row>\r\n            <ion-col padding>\r\n                <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n            </ion-col>\r\n            \r\n        </ion-row>\r\n    </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/card-timeline-theme-one/card-timeline-theme-one.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/card-timeline-theme-one/card-timeline-theme-one.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aion-content ion-card {\n  margin: 0; }\n  aion-content ion-card ion-row ion-col {\n    text-align: start; }\n  aion-content ion-card ion-row ion-col:last-child {\n    text-align: center; }\n  aion-content ion-card ion-row ion-col:first-child {\n    text-align: end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC10aW1lbGluZS10aGVtZS1vbmUvQzpcXHhhbXBwXFxodGRvY3NcXG5nLWtub3dteXNlbGYvc3JjXFxhcHBcXGNhcmQtdGltZWxpbmUtdGhlbWUtb25lXFxjYXJkLXRpbWVsaW5lLXRoZW1lLW9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxTQUFRLEVBQUE7RUFGaEI7SUFLZ0IsaUJBQWlCLEVBQUE7RUFMakM7SUFRZ0Isa0JBQWtCLEVBQUE7RUFSbEM7SUFXZ0IsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FyZC10aW1lbGluZS10aGVtZS1vbmUvY2FyZC10aW1lbGluZS10aGVtZS1vbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWlvbi1jb250ZW50e1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jb2w6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY29sOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/card-timeline-theme-one/card-timeline-theme-one.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/card-timeline-theme-one/card-timeline-theme-one.page.ts ***!
  \*************************************************************************/
/*! exports provided: CardTimelineThemeOnePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTimelineThemeOnePage", function() { return CardTimelineThemeOnePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article/article.service */ "./src/app/article/article.service.ts");



var CardTimelineThemeOnePage = /** @class */ (function () {
    function CardTimelineThemeOnePage(articleService) {
        this.articleService = articleService;
        this.latest = [];
    }
    CardTimelineThemeOnePage.prototype.ngOnInit = function () {
        this.initializeArticle();
    };
    CardTimelineThemeOnePage.prototype.initializeArticle = function () {
        var _this = this;
        this.articleService.getLatestArticle().subscribe(function (res) {
            if (res && res.length) {
                _this.latest = res;
            }
        });
    };
    CardTimelineThemeOnePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-timeline-theme-one',
            template: __webpack_require__(/*! ./card-timeline-theme-one.page.html */ "./src/app/card-timeline-theme-one/card-timeline-theme-one.page.html"),
            styles: [__webpack_require__(/*! ./card-timeline-theme-one.page.scss */ "./src/app/card-timeline-theme-one/card-timeline-theme-one.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], CardTimelineThemeOnePage);
    return CardTimelineThemeOnePage;
}());



/***/ })

}]);
//# sourceMappingURL=card-timeline-theme-one-card-timeline-theme-one-module.js.map