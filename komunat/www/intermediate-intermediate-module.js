(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intermediate-intermediate-module"],{

/***/ "./src/app/intermediate/intermediate.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/intermediate/intermediate.module.ts ***!
  \*****************************************************/
/*! exports provided: IntermediatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntermediatePageModule", function() { return IntermediatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _intermediate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intermediate.page */ "./src/app/intermediate/intermediate.page.ts");







var routes = [
    {
        path: '',
        component: _intermediate_page__WEBPACK_IMPORTED_MODULE_6__["IntermediatePage"]
    }
];
var IntermediatePageModule = /** @class */ (function () {
    function IntermediatePageModule() {
    }
    IntermediatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_intermediate_page__WEBPACK_IMPORTED_MODULE_6__["IntermediatePage"]]
        })
    ], IntermediatePageModule);
    return IntermediatePageModule;
}());



/***/ }),

/***/ "./src/app/intermediate/intermediate.page.html":
/*!*****************************************************!*\
  !*** ./src/app/intermediate/intermediate.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"oval\">\n        \n        </div>\n        <div class=\"nextText\">\n        <h2>Super!</h2>\n        <h2>Dein Team<br>für den Gemeinderat ist fast fertig.</h2>\n        <ion-button (click) =\"toContent()\" color=\"light\" expand=\"block\" class=\"goBtn\"><p class=\"blueFont\">Weiter mit den Aufgaben</p></ion-button>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/intermediate/intermediate.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/intermediate/intermediate.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: #59BCED;\n  height: 100vh;\n  max-height: 100vh;\n  width: 100%;\n  /* or whatever width you want. */\n  display: inline-block; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold;\n  margin-bottom: 20px; }\n\n.nextText {\n  position: absolute;\n  top: 40vh;\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center; }\n\n/* iPhone 5 \nYou can also target devices with aspect ratio. */\n\n@media screen and (device-aspect-ratio: 40 / 71) {\n  .nextText {\n    position: absolute;\n    top: 40vh;\n    width: 100%;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-align: center; } }\n\n.blueFont {\n  color: #59BCED; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL3RlYW10b21vcnJvdy9rb211bmF0LXB3YS9rb211bmF0L3NyYy9hcHAvaW50ZXJtZWRpYXRlL2ludGVybWVkaWF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ludGVybWVkaWF0ZS9pbnRlcm1lZGlhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQTBCO0VBQzFCLGFBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVTtFQUFFLGdDQUFBO0VBQ1oscUJBQXFCLEVBQUE7O0FBR3RCO0VBQ0UsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIsbUJBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVE7RUFDUixXQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHbkI7Z0RDRjhDOztBREloRDtFQUNFO0lBQ0Msa0JBQWtCO0lBQ2xCLFNBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNuQjs7QUFHRDtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ludGVybWVkaWF0ZS9pbnRlcm1lZGlhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogICM1OUJDRUQ7XG4gIGhlaWdodDoxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOjEwMCU7IC8qIG9yIHdoYXRldmVyIHdpZHRoIHlvdSB3YW50LiAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gfVxuXG4gaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICBjb2xvcjogd2hpdGU7XG4gICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIG1hcmdpbi1ib3R0b206MjBweDtcbiB9XG5cbiAubmV4dFRleHQge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOjQwdmg7XG4gICB3aWR0aDogMTAwJTtcbiAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG5cbiAgLyogaVBob25lIDUgXG5Zb3UgY2FuIGFsc28gdGFyZ2V0IGRldmljZXMgd2l0aCBhc3BlY3QgcmF0aW8uICovICAgICAgICAgICAgICAgICAgICAgICBcbkBtZWRpYSBzY3JlZW4gYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MC83MSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAubmV4dFRleHQge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOjQwdmg7XG4gICB3aWR0aDogMTAwJTtcbiAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9ICAgICAgICAgIFxuIH1cblxuIC5ibHVlRm9udCB7XG4gICBjb2xvcjogIzU5QkNFRDtcbiB9IiwiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OUJDRUQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgLyogb3Igd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQuICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5uZXh0VGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLyogaVBob25lIDUgXG5Zb3UgY2FuIGFsc28gdGFyZ2V0IGRldmljZXMgd2l0aCBhc3BlY3QgcmF0aW8uICovXG5AbWVkaWEgc2NyZWVuIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSkge1xuICAubmV4dFRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cblxuLmJsdWVGb250IHtcbiAgY29sb3I6ICM1OUJDRUQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/intermediate/intermediate.page.ts":
/*!***************************************************!*\
  !*** ./src/app/intermediate/intermediate.page.ts ***!
  \***************************************************/
/*! exports provided: IntermediatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntermediatePage", function() { return IntermediatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var IntermediatePage = /** @class */ (function () {
    function IntermediatePage(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.vData = {};
    }
    IntermediatePage.prototype.ngOnInit = function () {
    };
    IntermediatePage.prototype.toContent = function () {
        console.log("To the content");
        var navigationExtras = {
            queryParams: {}
        };
        this.navCtrl.navigateForward(['content'], navigationExtras);
    };
    IntermediatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intermediate',
            template: __webpack_require__(/*! ./intermediate.page.html */ "./src/app/intermediate/intermediate.page.html"),
            styles: [__webpack_require__(/*! ./intermediate.page.scss */ "./src/app/intermediate/intermediate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], IntermediatePage);
    return IntermediatePage;
}());



/***/ })

}]);
//# sourceMappingURL=intermediate-intermediate-module.js.map