(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-swipe-with-header-list-swipe-with-header-module"],{

/***/ "./src/app/list-swipe-with-header/list-swipe-with-header.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/list-swipe-with-header/list-swipe-with-header.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListSwipeWithHeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSwipeWithHeaderPageModule", function() { return ListSwipeWithHeaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_swipe_with_header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-swipe-with-header.page */ "./src/app/list-swipe-with-header/list-swipe-with-header.page.ts");







var routes = [
    {
        path: '',
        component: _list_swipe_with_header_page__WEBPACK_IMPORTED_MODULE_6__["ListSwipeWithHeaderPage"]
    }
];
var ListSwipeWithHeaderPageModule = /** @class */ (function () {
    function ListSwipeWithHeaderPageModule() {
    }
    ListSwipeWithHeaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_swipe_with_header_page__WEBPACK_IMPORTED_MODULE_6__["ListSwipeWithHeaderPage"]]
        })
    ], ListSwipeWithHeaderPageModule);
    return ListSwipeWithHeaderPageModule;
}());



/***/ }),

/***/ "./src/app/list-swipe-with-header/list-swipe-with-header.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/list-swipe-with-header/list-swipe-with-header.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Swipe Item With Header</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid no-padding>\n    <ion-row [ngStyle]=\"{background:itemColor}\" align-items-center padding>\n      <ion-col align-self-start size=\"2\" padding>\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"7\">\n        <h3>\n          <b>Music Player</b>\n        </h3>\n        <h4>\n          <b>playlist (8)</b>\n        </h4>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"thumbs-up\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"heart-empty\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- list with multiple iterations -->\n  <ion-list no-padding>\n    <!-- for sliding item  -->\n    <ion-item-sliding *ngFor=\"let item of items; let i=index\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-img src=\"{{item.img}}\"></ion-img>\n        </ion-avatar>\n        <ion-label>\n          {{item.text}}\n          <p>ksduasjdas asd ...</p>\n        </ion-label>\n        <p>4:00 </p>\n        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\n      </ion-item>\n      <!-- slide item from right -->\n      <ion-item-options side=\"end\">\n        <ion-button fill=\"clear\">\n          <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"add-circle\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\">\n          <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"remove-circle\"></ion-icon>\n        </ion-button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-footer>"

/***/ }),

/***/ "./src/app/list-swipe-with-header/list-swipe-with-header.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/list-swipe-with-header/list-swipe-with-header.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-row:first-child {\n  opacity: 0.6; }\n\nion-content ion-row ion-col:first-child {\n  padding-left: 0; }\n\nion-content ion-row ion-col:first-child ion-icon {\n    zoom: 4; }\n\nion-content ion-row ion-col ion-icon {\n  zoom: 1.5; }\n\nion-content ion-item ion-icon {\n  zoom: 1;\n  padding: 10px; }\n\nion-content ion-item-options ion-button {\n  margin-top: 15px; }\n\nion-content ion-item-options ion-button ion-icon {\n    zoom: 1.5; }\n\nion-footer ion-fab {\n  position: fixed; }\n\nion-footer ion-fab ion-icon {\n    zoom: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9saXN0LXN3aXBlLXdpdGgtaGVhZGVyL2xpc3Qtc3dpcGUtd2l0aC1oZWFkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR1ksWUFBWSxFQUFBOztBQUh4QjtFQU9nQixlQUFlLEVBQUE7O0FBUC9CO0lBU29CLE9BQU8sRUFBQTs7QUFUM0I7RUFhZ0IsU0FBUyxFQUFBOztBQWJ6QjtFQW1CWSxPQUFPO0VBQ1AsYUFBYSxFQUFBOztBQXBCekI7RUF5QlksZ0JBQWdCLEVBQUE7O0FBekI1QjtJQTJCZ0IsU0FBUyxFQUFBOztBQUt6QjtFQUVRLGVBQWUsRUFBQTs7QUFGdkI7SUFJWSxPQUFPLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0LXN3aXBlLXdpdGgtaGVhZGVyL2xpc3Qtc3dpcGUtd2l0aC1oZWFkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50e1xyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIHpvb206IDEuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB6b29tOiAxO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1pdGVtLW9wdGlvbnN7XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICB6b29tOiAxLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGlvbi1mYWJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB6b29tOiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/list-swipe-with-header/list-swipe-with-header.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/list-swipe-with-header/list-swipe-with-header.page.ts ***!
  \***********************************************************************/
/*! exports provided: ListSwipeWithHeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSwipeWithHeaderPage", function() { return ListSwipeWithHeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");




var ListSwipeWithHeaderPage = /** @class */ (function () {
    function ListSwipeWithHeaderPage(events, service) {
        this.events = events;
        this.service = service;
        this.itemColor = [];
        this.iconColorVar = "";
        this.items = [
            { text: "Song Play 1", img: "assets/images/Pictures/faces-images/face_image1.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 2", img: "assets/images/Pictures/faces-images/face_image2.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 3", img: "assets/images/Pictures/faces-images/face_image3.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 4", img: "assets/images/Pictures/faces-images/face_image4.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 5", img: "assets/images/Pictures/faces-images/face_image5.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 6", img: "assets/images/Pictures/faces-images/face_image6.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 7", img: "assets/images/Pictures/faces-images/face_image1.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 8", img: "assets/images/Pictures/faces-images/face_image2.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 9", img: "assets/images/Pictures/faces-images/face_image3.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 10", img: "assets/images/Pictures/faces-images/face_image4.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 11", img: "assets/images/Pictures/faces-images/face_image5.png", icon1: "add-circle", icon2: "trash" },
            { text: "Song Play 12", img: "assets/images/Pictures/faces-images/face_image6.png", icon1: "add-circle", icon2: "trash" },
        ];
        this.itemColor = ["#F44336"]; //to get the coloe from custom-theme service
        this.data = this.service.getTheme(); //to get the selected theme color which is by default set as #F44336
        this.iconColorVar = this.data;
        //for the selection of colors
        if (this.data == "autumn") //if selected color is red 
         {
            this.itemColor = ["#F44336"];
        }
        else if (this.data == "night") //if selected color is purple 
         {
            this.itemColor = ["#673AB7"];
        }
        else if (this.data == "neon") //if selected color is blue 
         {
            this.itemColor = ["#03A9F4"];
        }
        else if (this.data == "orginal") //if selected color is green
         {
            this.itemColor = ["#4CAF50"];
        }
        else if (this.data == "red") //if selected color is gray
         {
            this.itemColor = ["#9E9E9E"];
        }
        else if (this.data == "purple") //if selected color is sharp pink
         {
            this.itemColor = ["#E91E63"];
        }
        else if (this.data == "Lightblue") //if selected color is dark blue
         {
            this.itemColor = ["#3F51B5"];
        }
        else if (this.data == "Lightgreen") //if selected color is light blue
         {
            this.itemColor = ["#00BCD4"];
        }
        else if (this.data == "Lightgray") //if selected color is light green
         {
            this.itemColor = ["#8BC34A"];
        }
        else if (this.data == "blue") //if selected color is dark green 
         {
            this.itemColor = ["#008577"];
        }
    }
    ListSwipeWithHeaderPage.prototype.ngOnInit = function () { };
    ListSwipeWithHeaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-swipe-with-header',
            template: __webpack_require__(/*! ./list-swipe-with-header.page.html */ "./src/app/list-swipe-with-header/list-swipe-with-header.page.html"),
            styles: [__webpack_require__(/*! ./list-swipe-with-header.page.scss */ "./src/app/list-swipe-with-header/list-swipe-with-header.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_3__["CustomThemeService"]])
    ], ListSwipeWithHeaderPage);
    return ListSwipeWithHeaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-swipe-with-header-list-swipe-with-header-module.js.map