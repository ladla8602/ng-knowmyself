(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-expandable-list-expandable-module"],{

/***/ "./src/app/components/expand-list-component/expand-list-component.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/expand-list-component/expand-list-component.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/components/expand-list-component/expand-list-component.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/expand-list-component/expand-list-component.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand-wrapper {\n  -webkit-transition: max-height 0.1s ease-in-out;\n  transition: max-height 0.1s ease-in-out;\n  overflow: hidden;\n  height: auto;\n  width: 100%; }\n\n.collapsed {\n  max-height: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2V4cGFuZC1saXN0LWNvbXBvbmVudC9leHBhbmQtbGlzdC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBdUM7RUFBdkMsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0Usd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGFuZC1saXN0LWNvbXBvbmVudC9leHBhbmQtbGlzdC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kLXdyYXBwZXIge1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY29sbGFwc2VkIHtcclxuICAgIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/expand-list-component/expand-list-component.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/expand-list-component/expand-list-component.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ExpandListComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandListComponentComponent", function() { return ExpandListComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var ExpandListComponentComponent = /** @class */ (function () {
    function ExpandListComponentComponent(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    ExpandListComponentComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExpandListComponentComponent.prototype, "expandWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ExpandListComponentComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExpandListComponentComponent.prototype, "expandHeight", void 0);
    ExpandListComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expand-list-component',
            template: __webpack_require__(/*! ./expand-list-component.component.html */ "./src/app/components/expand-list-component/expand-list-component.component.html"),
            styles: [__webpack_require__(/*! ./expand-list-component.component.scss */ "./src/app/components/expand-list-component/expand-list-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ExpandListComponentComponent);
    return ExpandListComponentComponent;
}());



/***/ }),

/***/ "./src/app/list-expandable/list-expandable.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/list-expandable/list-expandable.module.ts ***!
  \***********************************************************/
/*! exports provided: ListExpandablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListExpandablePageModule", function() { return ListExpandablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_expandable_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-expandable.page */ "./src/app/list-expandable/list-expandable.page.ts");
/* harmony import */ var _components_expand_list_component_expand_list_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/expand-list-component/expand-list-component.component */ "./src/app/components/expand-list-component/expand-list-component.component.ts");







//refernce ofexpand-list-component component

var routes = [
    {
        path: '',
        component: _list_expandable_page__WEBPACK_IMPORTED_MODULE_6__["ListExpandablePage"]
    }
];
var ListExpandablePageModule = /** @class */ (function () {
    function ListExpandablePageModule() {
    }
    ListExpandablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_expandable_page__WEBPACK_IMPORTED_MODULE_6__["ListExpandablePage"], _components_expand_list_component_expand_list_component_component__WEBPACK_IMPORTED_MODULE_7__["ExpandListComponentComponent"]] //add import name in declaration to avoid errors
        })
    ], ListExpandablePageModule);
    return ListExpandablePageModule;
}());



/***/ }),

/***/ "./src/app/list-expandable/list-expandable.page.html":
/*!***********************************************************!*\
  !*** ./src/app/list-expandable/list-expandable.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" routerLink=\"/component-details\" routerDirection=\"backward\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>List Expandable</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- expand list one -->\n  <ion-list no-padding>\n    <ion-item lines=\"full\" *ngFor=\"let item of itemsList1\" no-padding>\n      <ion-grid (click)=\"expandItemList1(item)\" no-padding>\n        <img src=\"assets/images/big-images/big2.jpg\">\n        <div>\n          <ion-button fill=\"outline\" shape=\"round\">Buy</ion-button>\n        </div>\n        <ion-row (click)=\"expandItemList1(item)\" no-padding>\n          <!-- expandable component \"list component\". You should  its referebce in \"list-expandable\" mobile file -->\n          <app-expand-list-component expandHeight=\"280px\" [expanded]=\"item.expanded\" no-padding>\n            <ion-item lines=\"full\" no-padding *ngFor=\"let list of listView1;let i = index\">\n              <ion-col size=\"8\">\n                <ion-text>\n                  <p>{{list.name}}</p>\n                </ion-text>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-icon [ngStyle]=\"{color:itemColor}\" name=\"arrow-dropright\"></ion-icon>\n              </ion-col>\n            </ion-item>\n          </app-expand-list-component>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <!-- expand list two -->\n  <ion-list no-padding>\n    <ion-item lines=\"full\" *ngFor=\"let item of itemsList2\" no-padding>\n      <ion-grid (click)=\"expandItemList2(item)\" no-padding>\n        <img src=\"assets/images/big-images/big3.jpg\">\n        <div>\n          <ion-button fill=\"outline\" shape=\"round\">Buy</ion-button>\n        </div>\n        <ion-row (click)=\"expandItemList2(item)\" no-padding>\n          <!-- expandable component \"list component\". You should  its referebce in \"list-expandable\" mobile file -->\n          <app-expand-list-component expandHeight=\"280px\" [expanded]=\"item.expanded\" no-padding>\n            <ion-item lines=\"full\" no-padding *ngFor=\"let list of listView2;let i = index\">\n              <ion-col size=\"8\">\n                <ion-text>\n                  <p>{{list.name}}</p>\n                </ion-text>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-icon name=\"arrow-dropright\"></ion-icon>\n              </ion-col>\n            </ion-item>\n          </app-expand-list-component>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <!-- expand list three -->\n  <ion-list no-padding>\n    <ion-item lines=\"full\" *ngFor=\"let item of itemsList3\" no-padding>\n      <ion-grid (click)=\"expandItemList3(item)\" no-padding>\n        <img src=\"assets/images/big-images/big4.jpg\">\n        <div>\n          <ion-button fill=\"outline\" shape=\"round\">Buy</ion-button>\n        </div>\n        <ion-row (click)=\"expandItemList3(item)\" no-padding>\n          <!-- expandable component \"list component\". You should  its referebce in \"list-expandable\" mobile file -->\n          <app-expand-list-component expandHeight=\"280px\" [expanded]=\"item.expanded\" no-padding>\n            <ion-item lines=\"full\" no-padding *ngFor=\"let list of listView3;let i = index\">\n              <ion-col size=\"8\">\n                <ion-text>\n                  <p>{{list.name}}</p>\n                </ion-text>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-icon name=\"arrow-dropright\"></ion-icon>\n              </ion-col>\n            </ion-item>\n          </app-expand-list-component>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/list-expandable/list-expandable.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/list-expandable/list-expandable.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-item {\n  --inner-padding-end:0px; }\n  ion-content ion-item p {\n    padding-left: 10px; }\n  ion-content ion-item ion-icon {\n    zoom: 1.5; }\n  ion-content ion-item div {\n    position: absolute;\n    background: transparent;\n    margin-top: -70px;\n    padding-left: 10px; }\n  ion-content ion-item ion-col:last-child {\n    text-align: right; }\n  ion-content ion-item app-expand-list-component {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmcta25vd215c2VsZi9hcHAvc3JjL2FwcC9saXN0LWV4cGFuZGFibGUvbGlzdC1leHBhbmRhYmxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQVFRLHVCQUFvQixFQUFBO0VBUjVCO0lBR1ksa0JBQWlCLEVBQUE7RUFIN0I7SUFNWSxTQUFTLEVBQUE7RUFOckI7SUFVWSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQWI5QjtJQWlCZ0IsaUJBQWlCLEVBQUE7RUFqQmpDO0lBcUJZLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpc3QtZXhwYW5kYWJsZS9saXN0LWV4cGFuZGFibGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIHpvb206IDEuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDowcHg7XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4OyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwcC1leHBhbmQtbGlzdC1jb21wb25lbnR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/list-expandable/list-expandable.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-expandable/list-expandable.page.ts ***!
  \*********************************************************/
/*! exports provided: ListExpandablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListExpandablePage", function() { return ListExpandablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");



var ListExpandablePage = /** @class */ (function () {
    function ListExpandablePage(service) {
        this.service = service;
        this.itemsList1 = []; //expand list one declaration
        this.itemsList2 = []; //expand list two declaration
        this.itemsList3 = []; //expand list three declaration
        this.itemColor = [];
        this.iconColorVar = "";
        //expand list one object
        this.listView1 = [
            { name: "Pay with Paypal" },
            { name: "Pay with visa card" },
            { name: "Pat with mestro card" },
        ];
        //expand list two object
        this.listView2 = [
            { name: "Pay with Paypal" },
            { name: "Pay with visa card" },
            { name: "Pat with mestro card" },
        ];
        //expand list three object
        this.listView3 = [
            { name: "Pay with Paypal" },
            { name: "Pay with visa card" },
            { name: "Pat with mestro card" },
        ];
        //expand list one initialization
        this.itemsList1 = [
            { expandedHelp: false },
        ];
        //expand list two initialization
        this.itemsList2 = [
            { expandedHelp: false },
        ];
        //expand list three initialization
        this.itemsList3 = [
            { expandedHelp: false },
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
    //function to expand and not expand list
    ListExpandablePage.prototype.expandItemList1 = function (item) {
        if (item.expandedHelp) {
            item.expandedHelp = false;
        }
        else {
            this.itemsList1.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    };
    //function to expand and not expand list
    ListExpandablePage.prototype.expandItemList2 = function (item) {
        if (item.expandedHelp) {
            item.expandedHelp = false;
        }
        else {
            this.itemsList2.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    };
    //function to expand and not expand list
    ListExpandablePage.prototype.expandItemList3 = function (item) {
        if (item.expandedHelp) {
            item.expandedHelp = false;
        }
        else {
            this.itemsList3.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    };
    ListExpandablePage.prototype.ngOnInit = function () {
    };
    ListExpandablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-expandable',
            template: __webpack_require__(/*! ./list-expandable.page.html */ "./src/app/list-expandable/list-expandable.page.html"),
            styles: [__webpack_require__(/*! ./list-expandable.page.scss */ "./src/app/list-expandable/list-expandable.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_custom_theme_service__WEBPACK_IMPORTED_MODULE_2__["CustomThemeService"]])
    ], ListExpandablePage);
    return ListExpandablePage;
}());



/***/ })

}]);
//# sourceMappingURL=list-expandable-list-expandable-module.js.map