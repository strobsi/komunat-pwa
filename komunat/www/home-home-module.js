(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"].forRoot(),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <ion-slides zoom=\"false\" pager=\"true\">\n   <ion-slide>\n     <div class=\"swiper\">\n       <h2>Dein Team für den Stuttgarter Gemeinderat!</h2>\n       <p>\n        Finde mit dem KOMUNAT heraus, wer deine TOP-KandidatInnen für die Gemeinderatswahl in Stuttgart am 26. Mai 2019 sind.\n       </p>\n         <ion-button (click) =\"slideToNext()\" color=\"primary\" expand=\"block\" class=\"goBtn\">Weiter</ion-button>\n         <br>\n         <br>\n     </div>\n   </ion-slide>\n   <ion-slide>\n       <div class=\"swiper\">\n        <h2>Jetzt geht´s los!</h2>\n        <p>\n          Vergleiche die Werte und kommunalpolitischen Aufgaben, die dir wichtig sind, mit den Antworten der KandidatInnen.\n        </p>\n          <ion-button (click) =\"goToKomunat($event)\" color=\"primary\" expand=\"block\" class=\"goBtn\">Los geht's</ion-button>\n          <br>\n      </div>\n   </ion-slide>\n </ion-slides>\n</div>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 80vh;\n  max-height: 80vh;\n  width: 100%;\n  /* or whatever width you want. */\n  display: inline-block;\n  margin-top: 10vh; }\n\n.goBtn {\n  margin-top: 10vh;\n  bottom: 10vh;\n  height: 8vh;\n  margin: 25px; }\n\n.instruction {\n  height: 30vh;\n  width: auto; }\n\nh2 {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\np {\n  font-family: 'Source Sans Pro', sans-serif;\n  margin-bottom: 10vh;\n  margin-right: 2vw;\n  margin-left: 2vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL2tvbXVuYXQtcHdhL2tvbXVuYXQvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUcsWUFBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFVO0VBQUUsZ0NBQUE7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWUsRUFBQTs7QUFHbEI7RUFFRSxnQkFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBVztFQUNYLFdBQVUsRUFBQTs7QUFHWjtFQUNFLDBDQUEwQztFQUMxQyxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gICBoZWlnaHQ6ODB2aDtcbiAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICB3aWR0aDoxMDAlOyAvKiBvciB3aGF0ZXZlciB3aWR0aCB5b3Ugd2FudC4gKi9cbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIG1hcmdpbi10b3A6MTB2aDtcbn1cblxuLmdvQnRuXG57XG4gIG1hcmdpbi10b3A6MTB2aDtcbiAgYm90dG9tOiAxMHZoO1xuICBoZWlnaHQ6IDh2aDtcbiAgbWFyZ2luOiAyNXB4O1xufVxuXG4uaW5zdHJ1Y3Rpb24ge1xuICBoZWlnaHQ6MzB2aDtcbiAgd2lkdGg6YXV0bztcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICBtYXJnaW4tcmlnaHQ6MnZ3O1xuICBtYXJnaW4tbGVmdDogMnZ3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.local = null;
        this.storage.ready().then(function () {
            _this.storage.clear();
        });
    }
    HomePage.prototype.goToKomunat = function (e) {
        console.log("Clicked on button ");
        this.navCtrl.navigateForward('/komunat');
    };
    HomePage.prototype.slideToNext = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.ngAfterViewInit = function () {
        var isiOSSafari = (navigator.userAgent.match(/like Mac OS X/i)) ? true : false;
        console.log("On iOS: " + isiOSSafari);
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        var vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', vh + "px");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map