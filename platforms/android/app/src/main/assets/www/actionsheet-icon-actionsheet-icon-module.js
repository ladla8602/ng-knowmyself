(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actionsheet-icon-actionsheet-icon-module"],{

/***/ "./src/app/actionsheet-icon/actionsheet-icon.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/actionsheet-icon/actionsheet-icon.module.ts ***!
  \*************************************************************/
/*! exports provided: ActionsheetIconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsheetIconPageModule", function() { return ActionsheetIconPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _actionsheet_icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionsheet-icon.page */ "./src/app/actionsheet-icon/actionsheet-icon.page.ts");







var routes = [
    {
        path: '',
        component: _actionsheet_icon_page__WEBPACK_IMPORTED_MODULE_6__["ActionsheetIconPage"]
    }
];
var ActionsheetIconPageModule = /** @class */ (function () {
    function ActionsheetIconPageModule() {
    }
    ActionsheetIconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_actionsheet_icon_page__WEBPACK_IMPORTED_MODULE_6__["ActionsheetIconPage"]]
        })
    ], ActionsheetIconPageModule);
    return ActionsheetIconPageModule;
}());



/***/ }),

/***/ "./src/app/actionsheet-icon/actionsheet-icon.page.html":
/*!*************************************************************!*\
  !*** ./src/app/actionsheet-icon/actionsheet-icon.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Action Sheet Icons</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid *ngFor=\"let item of items\">\n    <ion-text>\n      <h2>{{item.heading}}</h2>\n    </ion-text>\n    <ion-img src=\"{{item.image}}\"></ion-img>\n    <ion-row align-items-center>\n      <ion-col size=\"8\">\n        <ion-text>\n          <h4>{{item.subheading}}</h4>\n        </ion-text>\n      </ion-col>\n      <ion-col align-self-end size=\"4\">\n        <!-- presentActionSheet() get the property of action sheet which you will get from actionsheet-icon.ts file -->\n        <ion-button class=\"view\" (click)=\"presentActionSheet()\">Share</ion-button>\n      </ion-col>\n    </ion-row>\n    <p>\n      {{item.para}}\n    </p>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/actionsheet-icon/actionsheet-icon.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/actionsheet-icon/actionsheet-icon.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-grid {\n  padding: 0 0 16px 0;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #ddd; }\n  ion-content ion-grid ion-text h2 {\n    margin-top: 0; }\n  ion-content ion-grid ion-text h4 {\n    margin: 0; }\n  ion-content ion-grid ion-button {\n    margin-left: 0;\n    margin-right: 0; }\n  ion-content ion-grid:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n    padding-bottom: 0; }\n  ion-content ion-grid ion-row ion-col:first-child {\n    padding-left: 0; }\n  ion-content ion-grid ion-row ion-col:last-child {\n    text-align: right;\n    padding-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9hY3Rpb25zaGVldC1pY29uL2FjdGlvbnNoZWV0LWljb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQiw2QkFBNEIsRUFBQTtFQUpoQztJQU9RLGFBQVksRUFBQTtFQVBwQjtJQVVRLFNBQVEsRUFBQTtFQVZoQjtJQWNNLGNBQWE7SUFDYixlQUFjLEVBQUE7RUFmcEI7SUFrQk0sbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQXBCdkI7SUF5QlUsZUFBYyxFQUFBO0VBekJ4QjtJQTRCVSxpQkFBaUI7SUFDakIsZ0JBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbnNoZWV0LWljb24vYWN0aW9uc2hlZXQtaWNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICBpb24tZ3JpZHtcclxuICAgIHBhZGRpbmc6IDAgMCAxNnB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEycHg7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkOyBcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBoMntcclxuICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgIH1cclxuICAgICAgaDR7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDowO1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIGlvbi1yb3d7XHJcbiAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/actionsheet-icon/actionsheet-icon.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/actionsheet-icon/actionsheet-icon.page.ts ***!
  \***********************************************************/
/*! exports provided: ActionsheetIconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsheetIconPage", function() { return ActionsheetIconPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 //actionsheet controller package
var ActionsheetIconPage = /** @class */ (function () {
    //action sheet package declaration
    function ActionsheetIconPage(actionSheetController) {
        this.actionSheetController = actionSheetController;
        this.items = [
            { heading: "News One", image: "assets/images/Pictures/gallery-images/gallery_image2.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
            { heading: "News Two", image: "assets/images/Pictures/gallery-images/gallery_image3.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
            { heading: "News Three", image: "assets/images/Pictures/gallery-images/gallery_image4.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
        ];
    }
    ActionsheetIconPage.prototype.ngOnInit = function () {
    };
    //action sheet controller function
    ActionsheetIconPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log('Delete clicked');
                                    }
                                }, {
                                    text: 'Share',
                                    icon: 'share',
                                    handler: function () {
                                        console.log('Share clicked');
                                    }
                                }, {
                                    text: 'Play (open modal)',
                                    icon: 'arrow-dropright-circle',
                                    handler: function () {
                                        console.log('Play clicked');
                                    }
                                }, {
                                    text: 'Favorite',
                                    icon: 'heart',
                                    handler: function () {
                                        console.log('Favorite clicked');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionsheetIconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actionsheet-icon',
            template: __webpack_require__(/*! ./actionsheet-icon.page.html */ "./src/app/actionsheet-icon/actionsheet-icon.page.html"),
            styles: [__webpack_require__(/*! ./actionsheet-icon.page.scss */ "./src/app/actionsheet-icon/actionsheet-icon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], ActionsheetIconPage);
    return ActionsheetIconPage;
}());



/***/ })

}]);
//# sourceMappingURL=actionsheet-icon-actionsheet-icon-module.js.map