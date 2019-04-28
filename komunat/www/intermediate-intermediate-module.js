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

module.exports = ".container {\n  background-color: #59BCED;\n  height: 100vh;\n  max-height: 100vh;\n  width: 100%;\n  /* or whatever width you want. */\n  display: inline-block; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold;\n  margin-bottom: 20px; }\n\n.nextText {\n  position: absolute;\n  top: 40vh;\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center; }\n\n/* iPhone 5 \nYou can also target devices with aspect ratio. */\n\n@media screen and (device-aspect-ratio: 40 / 71) {\n  .nextText {\n    position: absolute;\n    top: 40vh;\n    width: 100%;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-align: center; } }\n\n.blueFont {\n  color: #59BCED; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL2tvbXVuYXQtcHdhL2tvbXVuYXQvc3JjL2FwcC9pbnRlcm1lZGlhdGUvaW50ZXJtZWRpYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW50ZXJtZWRpYXRlL2ludGVybWVkaWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBMEI7RUFDMUIsYUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFVO0VBQUUsZ0NBQUE7RUFDWixxQkFBcUIsRUFBQTs7QUFHdEI7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixtQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFdBQVc7RUFDWCxrQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUduQjtnRENGOEM7O0FESWhEO0VBQ0U7SUFDQyxrQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFdBQVc7SUFDWCxrQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBLEVBQ25COztBQUdEO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJtZWRpYXRlL2ludGVybWVkaWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzU5QkNFRDtcbiAgaGVpZ2h0OjEwMHZoO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6MTAwJTsgLyogb3Igd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQuICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiB9XG5cbiBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuIH1cblxuIC5uZXh0VGV4dCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6NDB2aDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cblxuICAvKiBpUGhvbmUgNSBcbllvdSBjYW4gYWxzbyB0YXJnZXQgZGV2aWNlcyB3aXRoIGFzcGVjdCByYXRpby4gKi8gICAgICAgICAgICAgICAgICAgICAgIFxuQG1lZGlhIHNjcmVlbiBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwLzcxKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIC5uZXh0VGV4dCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6NDB2aDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH0gICAgICAgICAgXG4gfVxuXG4gLmJsdWVGb250IHtcbiAgIGNvbG9yOiAjNTlCQ0VEO1xuIH0iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5QkNFRDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBvciB3aGF0ZXZlciB3aWR0aCB5b3Ugd2FudC4gKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLm5leHRUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4vKiBpUGhvbmUgNSBcbllvdSBjYW4gYWxzbyB0YXJnZXQgZGV2aWNlcyB3aXRoIGFzcGVjdCByYXRpby4gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKSB7XG4gIC5uZXh0VGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxuXG4uYmx1ZUZvbnQge1xuICBjb2xvcjogIzU5QkNFRDsgfVxuIl19 */"

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