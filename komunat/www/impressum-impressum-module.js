(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["impressum-impressum-module"],{

/***/ "./src/app/impressum/impressum.module.ts":
/*!***********************************************!*\
  !*** ./src/app/impressum/impressum.module.ts ***!
  \***********************************************/
/*! exports provided: ImpressumPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumPageModule", function() { return ImpressumPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _impressum_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impressum.page */ "./src/app/impressum/impressum.page.ts");







var routes = [
    {
        path: '',
        component: _impressum_page__WEBPACK_IMPORTED_MODULE_6__["ImpressumPage"]
    }
];
var ImpressumPageModule = /** @class */ (function () {
    function ImpressumPageModule() {
    }
    ImpressumPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_impressum_page__WEBPACK_IMPORTED_MODULE_6__["ImpressumPage"]]
        })
    ], ImpressumPageModule);
    return ImpressumPageModule;
}());



/***/ }),

/***/ "./src/app/impressum/impressum.page.html":
/*!***********************************************!*\
  !*** ./src/app/impressum/impressum.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>impressum</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div class=\"container\"><div class=\"col-md-12\"></div><h3>Impressum</h3><p></p>Der Komunat ist ein Produkt des Vereins Unsere Zukunft e.V.i.G.<br><br>Die Inhalte des Komunat wurden in Rücksprache mit den amtierenden Fraktionen und Listen des Stuttgarter Gemeinderats erarbeitet. Stand: März 2019<br><br><h3>Herausgeber</h3><p></p>Verantwortlich gemäß § 55 RStV:<br><br>Unsere Zukunft e.V.i.G.<br>Hohentwielstraße 118<br>70199 Stuttgart<br>hallo(at)unserezukunft.org                    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/impressum/impressum.page.scss":
/*!***********************************************!*\
  !*** ./src/app/impressum/impressum.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltcHJlc3N1bS9pbXByZXNzdW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/impressum/impressum.page.ts":
/*!*********************************************!*\
  !*** ./src/app/impressum/impressum.page.ts ***!
  \*********************************************/
/*! exports provided: ImpressumPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumPage", function() { return ImpressumPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImpressumPage = /** @class */ (function () {
    function ImpressumPage() {
    }
    ImpressumPage.prototype.ngOnInit = function () {
    };
    ImpressumPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-impressum',
            template: __webpack_require__(/*! ./impressum.page.html */ "./src/app/impressum/impressum.page.html"),
            styles: [__webpack_require__(/*! ./impressum.page.scss */ "./src/app/impressum/impressum.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImpressumPage);
    return ImpressumPage;
}());



/***/ })

}]);
//# sourceMappingURL=impressum-impressum-module.js.map