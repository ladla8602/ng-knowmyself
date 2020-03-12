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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button expand=\"block\" routerLink=\"/home\" routerDirection=\"backward\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Latest Article</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding *ngIf=\"latest\">\n    <!-- card with content and item with person profile  -->\n    <ion-card *ngFor=\"let item of latest\" routerLink=\"/article/{{item.id}}\" routerDirection=\"forward\">\n            <ion-item>\n            <ion-label>\n                <h3 style=\"font-weight: 600;\">{{item.index}}</h3>\n                <p>{{item.created_at}}</p>\n            </ion-label>\n        </ion-item>\n        <ion-card-content>\n            <div [innerHtml]=\"item.article\"></div>\n        </ion-card-content>\n        <ion-row>\n            <ion-col size=\"2\" no-padding>\n                <ion-button size=\"small\" color=\"primary\" fill=\"clear\">\n                    Continue Reading\n                    <ion-icon name='arrow-forward'></ion-icon>\n                </ion-button>\n            </ion-col>\n            \n        </ion-row>\n    </ion-card>\n</ion-content>\n<ion-content no-padding *ngIf=\"latest.length == 0\">\n        <ion-card>\n            <ion-item>\n            <ion-label>\n                <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\n                <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n            </ion-label>\n        </ion-item>\n        <ion-card-content>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </ion-card-content>\n        <ion-row>\n            <ion-col padding>\n                <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n            </ion-col>\n            \n        </ion-row>\n    </ion-card>\n    <ion-card>\n            <ion-item>\n            <ion-label>\n                <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\n                <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n            </ion-label>\n        </ion-item>\n        <ion-card-content>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </ion-card-content>\n        <ion-row>\n            <ion-col padding>\n                <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n            </ion-col>\n            \n        </ion-row>\n    </ion-card>\n    <ion-card>\n            <ion-item>\n            <ion-label>\n                <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\n                <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n            </ion-label>\n        </ion-item>\n        <ion-card-content>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </ion-card-content>\n        <ion-row>\n            <ion-col padding>\n                <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n            </ion-col>\n            \n        </ion-row>\n    </ion-card>\n    <ion-card>\n            <ion-item>\n            <ion-label>\n                <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\n                <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n            </ion-label>\n        </ion-item>\n        <ion-card-content>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </ion-card-content>\n        <ion-row>\n            <ion-col padding>\n                <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n            </ion-col>\n            \n        </ion-row>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/card-timeline-theme-one/card-timeline-theme-one.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/card-timeline-theme-one/card-timeline-theme-one.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aion-content ion-card {\n  margin: 0; }\n  aion-content ion-card ion-row ion-col {\n    text-align: start; }\n  aion-content ion-card ion-row ion-col:last-child {\n    text-align: center; }\n  aion-content ion-card ion-row ion-col:first-child {\n    text-align: end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hpL0Rlc2t0b3Avbmcta25vd215c2VsZi9zcmMvYXBwL2NhcmQtdGltZWxpbmUtdGhlbWUtb25lL2NhcmQtdGltZWxpbmUtdGhlbWUtb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFNBQVEsRUFBQTtFQUZoQjtJQUtnQixpQkFBaUIsRUFBQTtFQUxqQztJQVFnQixrQkFBa0IsRUFBQTtFQVJsQztJQVdnQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJkLXRpbWVsaW5lLXRoZW1lLW9uZS9jYXJkLXRpbWVsaW5lLXRoZW1lLW9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhaW9uLWNvbnRlbnR7XG4gICAgaW9uLWNhcmR7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBpb24tcm93e1xuICAgICAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jb2w6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tY29sOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

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