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

module.exports = "<div class=\"container\">\n <ion-slides zoom=\"false\" pager=\"true\">\n   <ion-slide>\n     <div class=\"swiper\">\n       <img class=\"logo\" src=\"https://komunat.de/start.png\"/>\n       <h2 id=\"headline\">Dein Team für den Stuttgarter Gemeinderat!</h2>\n       <p id=\"text\">\n        <!--<span *ngIf=\"resultLength > 0\">Schon <b>{{resultLength}}</b> haben mitgemacht.</span>-->\n        Finde mit dem KOMUNAT heraus, wer deine TOP-KandidatInnen für die Gemeinderatswahl in Stuttgart am 26. Mai 2019 sind.\n       </p>\n         <ion-button (click) =\"slideToNext()\" color=\"primary\" expand=\"block\" class=\"goBtn\">Weiter</ion-button>\n         <br>\n         <br>\n     </div>\n   </ion-slide>\n   <ion-slide>\n       <div class=\"swiper\">\n        <img class=\"logo\" src=\"https://komunat.de/values_contents.png\"/>\n        <h2 id=\"headline\">Was ist den KandidatInnen wichtig?</h2>\n        <p id=\"text\">\n          Über 300 KandidatInnen haben mithilfe des KOMUNAT ihre Werte und kommunalpolitischen Aufgaben in eine Reihenfolge gebracht.\n        </p>\n        <ion-button (click) =\"slideToNext()\" color=\"primary\" expand=\"block\" class=\"goBtn\">Weiter</ion-button>\n        <br>\n      </div>\n   </ion-slide>\n   <ion-slide>\n      <div class=\"swiper\">\n       <img class=\"logo\" src=\"https://komunat.de/values_contents.png\"/>\n       <h2 id=\"headline\">Und jetzt du!</h2>\n       <p id=\"text\">\n           Mache das gleiche Spiel wie die KandidatInnen: Finde ganz einfach heraus, welche Werte und Aufgaben dir wichtig sind. \n         </p>\n       <ion-button (click) =\"slideToNext()\" color=\"primary\" expand=\"block\" class=\"goBtn\">Weiter</ion-button>\n       <br>\n     </div>\n  </ion-slide>\n   <ion-slide>\n      <div class=\"swiper\">\n       <img class=\"logo\" src=\"https://komunat.de/match.png\"/>\n       <h2 id=\"headline\">Dein Ergebnis für die Wahl in Stuttgart</h2>\n       <p id=\"text\">\n         Wir vergleichen dein Ergebnis mit der Reihenfolge der KandidatInnen und zeigen dir, welche 20 der 300 KandidatInnen am besten zu dir passen. Mit dem Ergebnis aus dem KOMUNAT kannst du dann ganz einfach den Stimmzettel ausfüllen.\n       </p>\n         <ion-button (click) =\"goToKomunat($event)\" color=\"primary\" expand=\"block\" class=\"goBtn small-margin\">Los geht's</ion-button>\n         <br>\n     </div>\n  </ion-slide>\n </ion-slides>\n</div>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 80vh;\n  max-height: 80vh;\n  width: 100%;\n  /* or whatever width you want. */\n  display: inline-block;\n  margin-top: 10vh; }\n\n.logo {\n  height: 30vh; }\n\n.goBtn {\n  margin-top: 10vh;\n  bottom: 10vh;\n  height: 8vh;\n  margin: 25px; }\n\n.small-margin {\n  margin-top: 5vh;\n  margin: 15px; }\n\n.instruction {\n  height: 30vh;\n  width: auto; }\n\nh2 {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold;\n  font-size: 20px; }\n\np {\n  font-family: 'Source Sans Pro', sans-serif;\n  margin-bottom: 10vh;\n  margin-right: 2vw;\n  margin-left: 2vw;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL2tvbXVuYXQtcHdhL2tvbXVuYXQvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUcsWUFBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFVO0VBQUUsZ0NBQUE7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWUsRUFBQTs7QUFHbEI7RUFDRSxZQUFXLEVBQUE7O0FBR2I7RUFFRSxnQkFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBYztFQUNkLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVc7RUFDWCxXQUFVLEVBQUE7O0FBR1o7RUFDRSwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgIGhlaWdodDo4MHZoO1xuICAgbWF4LWhlaWdodDogODB2aDtcbiAgIHdpZHRoOjEwMCU7IC8qIG9yIHdoYXRldmVyIHdpZHRoIHlvdSB3YW50LiAqL1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgbWFyZ2luLXRvcDoxMHZoO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDozMHZoO1xufVxuXG4uZ29CdG5cbntcbiAgbWFyZ2luLXRvcDoxMHZoO1xuICBib3R0b206IDEwdmg7XG4gIGhlaWdodDogOHZoO1xuICBtYXJnaW46IDI1cHg7XG59XG5cbi5zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOjV2aDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uaW5zdHJ1Y3Rpb24ge1xuICBoZWlnaHQ6MzB2aDtcbiAgd2lkdGg6YXV0bztcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gIG1hcmdpbi1yaWdodDoydnc7XG4gIG1hcmdpbi1sZWZ0OiAydnc7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

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
/* harmony import */ var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-analytics/ngx */ "./node_modules/@ionic-native/google-analytics/ngx/index.js");





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage, ga, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.ga = ga;
        this.platform = platform;
        this.local = null;
        this.resultLength = 0;
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
    HomePage.prototype.loadResultLength = function () {
        var _this = this;
        var xhr = new XMLHttpRequest();
        var url = "https://komunat.de/api/results";
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var data = JSON.parse(xhr.responseText);
                _this.resultLength = data.count;
            }
        };
        xhr.send();
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.platform.ready().then(function (readySource) {
            _this.ga.trackView('home')
                .then(function () {
                _this.ga.trackEvent('userflow', 'Entered Komunat')
                    .then(function () {
                });
            })
                .catch(function (e) { return console.log(e); });
            if (_this.platform.is('ios')) {
                if (_this.iPhoneVersion() == "5") {
                    var heads = document.querySelectorAll("#headline");
                    var texts = document.querySelectorAll("#text");
                    for (var i = 0; i < heads.length; i++) {
                        heads[i].setAttribute("style", "font-size:14px;");
                    }
                    for (var i = 0; i < texts.length; i++) {
                        texts[i].setAttribute("style", "font-size:11px;");
                    }
                }
            }
        });
        //this.loadResultLength();
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
    HomePage.prototype.iPhoneVersion = function () {
        var iHeight = window.screen.height;
        var iWidth = window.screen.width;
        if (iWidth === 414 && iHeight === 896) {
            return "Xmax-Xr";
        }
        else if (iWidth === 375 && iHeight === 812) {
            return "X-Xs";
        }
        else if (iWidth === 320 && iHeight === 480) {
            return "4";
        }
        else if (iWidth === 375 && iHeight === 667) {
            return "6";
        }
        else if (iWidth === 414 && iHeight === 736) {
            return "6+";
        }
        else if (iWidth === 320 && iHeight === 568) {
            return "5";
        }
        else if (iHeight <= 480) {
            return "2-3";
        }
        return 'none';
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_4__["GoogleAnalytics"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map