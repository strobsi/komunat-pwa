(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-content-module"],{

/***/ "./src/app/content/content.module.ts":
/*!*******************************************!*\
  !*** ./src/app/content/content.module.ts ***!
  \*******************************************/
/*! exports provided: ContentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageModule", function() { return ContentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _content_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content.page */ "./src/app/content/content.page.ts");








var routes = [
    {
        path: '',
        component: _content_page__WEBPACK_IMPORTED_MODULE_7__["ContentPage"]
    }
];
var ContentPageModule = /** @class */ (function () {
    function ContentPageModule() {
    }
    ContentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_content_page__WEBPACK_IMPORTED_MODULE_7__["ContentPage"]]
        })
    ], ContentPageModule);
    return ContentPageModule;
}());



/***/ }),

/***/ "./src/app/content/content.page.html":
/*!*******************************************!*\
  !*** ./src/app/content/content.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <ion-row>\n            <ion-col size=\"6\">\n            <p>Welche Aufgabe ist dir wichtiger?</p>\n            </ion-col>\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"3\">\n                <div class=\"progressContainer\">\n                    <div class=\"progress\">\n                      <div class=\"percent\"></div>\n                    </div>\n                    <div class=\"steps\">\n                      <div class=\"step completed\" id=\"0\"></div>\n                      <div class=\"step selected\" id=\"1\"></div>\n                      <div class=\"step\" id=\"2\"></div>\n                    </div>\n                  </div>\n            </ion-col>\n        </ion-row>\n        <div class=\"buttonSection\">\n        <ion-card class=\"opt0 upper\" (click) =\"selected(0)\">\n                <h2 class=\".opt0 beautify\">{{this.btn0Val.name}}</h2>\n        </ion-card>\n        <ion-card class=\"opt1 lower\"  (click) =\"selected(1)\">\n                  <h2 class=\".opt1 beautify\">{{this.btn1Val.name}}</h2>\n          </ion-card>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/content/content.page.scss":
/*!*******************************************!*\
  !*** ./src/app/content/content.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  /* Fallback for browsers that do not support Custom Properties */\n  height: calc(var(--vh, 1vh) * 100);\n  margin-top: 5vh; }\n\nion-col {\n  margin-left: 10px;\n  margin-top: 10px; }\n\n.buttonSection {\n  height: 75vh;\n  width: auto; }\n\n.upper {\n  height: 50%;\n  margin-top: 5px;\n  position: relative;\n  text-align: center; }\n\n.lower {\n  height: 50%;\n  position: relative;\n  text-align: center; }\n\n.beautify {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-top: 1px solid;\n  border-bottom: 2px solid;\n  position: absolute;\n  text-align: center;\n  margin: 0px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nh2 {\n  color: #4C4D4F;\n  font-size: 8vw;\n  text-align: center; }\n\nh4 {\n  height: 5vh;\n  font-size: 6vw;\n  margin: 1em;\n  color: #4C4D4F;\n  text-align: center; }\n\n.valueImage {\n  height: 50%;\n  margin: 0px; }\n\nh2 {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold;\n  font-size: 5vw; }\n\np {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: #59BCED;\n  margin-bottom: 0px; }\n\n.small {\n  font-size: 3vw; }\n\n.progressContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.steps {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  width: 25vw; }\n\n.step {\n  width: 15px;\n  height: 15px;\n  background: white;\n  border: 2px solid var(--komunat-blue);\n  border-radius: 50%;\n  transition: background 1s; }\n\n.step.selected {\n  background: var(--komunat-blue); }\n\n.step.completed {\n  background: white; }\n\n.progress {\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  border-bottom: 2px solid var(--komunat-blue);\n  z-index: -1; }\n\n.percent {\n  position: absolute;\n  width: 0;\n  height: 100%;\n  border-bottom: 2px solid #4B81BD;\n  z-index: 1;\n  transition: width 1s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL2tvbXVuYXQtcHdhL2tvbXVuYXQvc3JjL2FwcC9jb250ZW50L2NvbnRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYTtFQUFFLGdFQUFBO0VBQ2Ysa0NBQWtDO0VBQ2xDLGVBQWMsRUFBQTs7QUFHbEI7RUFDRSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdYO0VBQ0UsV0FBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFFVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLFdBQVUsRUFBQTs7QUFHWjtFQUNFLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDBDQUEwQztFQUMxQyxjQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYSxFQUFBOztBQUlqQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLCtCQUErQixFQUFBOztBQUVqQztFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLDRDQUE2QztFQUM3QyxXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jb250ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgICBoZWlnaHQ6IDEwMHZoOyAvKiBGYWxsYmFjayBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBDdXN0b20gUHJvcGVydGllcyAqL1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG4gICAgbWFyZ2luLXRvcDo1dmg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tbGVmdDoxMHB4O1xuICBtYXJnaW4tdG9wOjEwcHg7XG59XG5cbi5idXR0b25TZWN0aW9uIHtcbiAgaGVpZ2h0OiA3NXZoO1xuICB3aWR0aDogYXV0bztcbn1cblxuICAudXBwZXIge1xuICAgIGhlaWdodDo1MCU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5sb3dlciB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJlYXV0aWZ5IHtcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjowcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgaDIge1xuICAgIGNvbG9yOiAjNEM0RDRGO1xuICAgIGZvbnQtc2l6ZTogOHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIH1cblxuICBoNCB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgZm9udC1zaXplOiA2dnc7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgY29sb3I6ICM0QzRENEY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgfVxuICBcbiAgLnZhbHVlSW1hZ2Uge1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbjowcHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICB9XG4gIFxuICBwIHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IzU5QkNFRDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAuc21hbGwge1xuICAgIGZvbnQtc2l6ZTozdnc7XG4gIH1cblxuLy8gUFJPR1JFU1MgRE9UU1xuLnByb2dyZXNzQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnN0ZXBzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAyNXZ3O1xufVxuLnN0ZXAge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0ta29tdW5hdC1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzO1xufVxuLnN0ZXAuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rb211bmF0LWJsdWUpO1xufVxuLnN0ZXAuY29tcGxldGVkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIHZhcigtLWtvbXVuYXQtYmx1ZSk7XG4gIHotaW5kZXg6IC0xO1xufVxuLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNEI4MUJEO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/content/content.page.ts":
/*!*****************************************!*\
  !*** ./src/app/content/content.page.ts ***!
  \*****************************************/
/*! exports provided: ContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPage", function() { return ContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-analytics/ngx */ "./node_modules/@ionic-native/google-analytics/ngx/index.js");








var ContentPage = /** @class */ (function () {
    function ContentPage(navCtrl, route, platform, storage, ga) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.platform = platform;
        this.storage = storage;
        this.ga = ga;
        this.lesser = [];
        this.greater = [];
        this.comparer = [];
        this.insertIndex = 0;
        this.decisionCounter = 0;
        this.startedTimeStamp = 0;
        this.vData = {
            values: {},
            contents: {},
            metadata: {
                isCandidate: false,
                valueStarted: 0,
                valueFinished: 0,
                contentStarted: 0,
                contentFinished: 0,
                valueDecisions: 0,
                contentDecisions: 0
            }
        };
        this.initarr = [
            [
                {
                    "id": 0,
                    "name": "Bezahlbaren Wohnraum schaffen",
                    "rating": 0
                },
                {
                    "id": 1,
                    "name": "Preise für Bus und Bahn senken",
                    "rating": 0
                },
                {
                    "id": 2,
                    "name": "Alternativen zum Auto fördern",
                    "rating": 0
                },
                {
                    "id": 3,
                    "name": "Die Kinderbetreuung ausbauen",
                    "rating": 0
                },
                {
                    "id": 4,
                    "name": "Keine neuen Schulden für die Stadt machen",
                    "rating": 0
                },
                {
                    "id": 5,
                    "name": "Für mehr Sicherheit im öffentlichen Raum sorgen",
                    "rating": 0
                },
                {
                    "id": 6,
                    "name": "Langfristige Integration und das Zusammenleben in der Stadt fördern",
                    "rating": 0
                },
                {
                    "id": 7,
                    "name": "Schulen sanieren",
                    "rating": 0
                },
                {
                    "id": 8,
                    "name": "Subkultur fördern",
                    "rating": 0
                },
                {
                    "id": 9,
                    "name": "Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel ermöglichen",
                    "rating": 0
                },
                {
                    "id": 10,
                    "name": "Die regionale Wirtschaft fördern",
                    "rating": 0
                },
                {
                    "id": 11,
                    "name": "Eine klimaneutrale Stadt gestalten",
                    "rating": 0
                },
                {
                    "id": 12,
                    "name": "Kommunalpolitik transparenter machen",
                    "rating": 0
                }
            ]
        ];
        this.arr = [
            [
                {
                    "id": 0,
                    "name": "Menschenrechte",
                    "rating": 0
                },
                {
                    "id": 1,
                    "name": "Meinungsfreiheit",
                    "rating": 0
                },
                {
                    "id": 2,
                    "name": "Religionsfreiheit",
                    "rating": 0
                },
                {
                    "id": 3,
                    "name": "Solidarität",
                    "rating": 0
                },
                {
                    "id": 4,
                    "name": "Gerechtigkeit",
                    "rating": 0
                },
            ]
        ];
    }
    ContentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.ga.trackView('content')
            .then(function () {
            _this.ga.trackEvent('userflow', 'Reached Content')
                .then(function () {
            });
        })
            .catch(function (e) { return console.log(e); });
        this.platform.ready().then(function () {
            if (_this.platform.is('ios')) {
                var upper = document.querySelector(".upper");
                var lower = document.querySelector(".lower");
                if (_this.iPhoneVersion() == "X-Xs") {
                    upper.setAttribute("style", "height:43%;");
                    lower.setAttribute("style", "height:43%;");
                }
                else if (_this.iPhoneVersion() == "Xmax-Xr") {
                    upper.setAttribute("style", "height:45%;");
                    lower.setAttribute("style", "height:45%;");
                }
                else if (_this.iPhoneVersion() == "5") {
                    upper.setAttribute("style", "height:40%;");
                    lower.setAttribute("style", "height:40%;");
                }
                else {
                    upper.setAttribute("style", "height:43%;");
                    lower.setAttribute("style", "height:43%;");
                }
            }
        });
        this.storage.ready().then(function () {
            _this.storage.get("values").then(function (result) {
                if (!result) {
                }
                else {
                    console.log(JSON.parse(result));
                    _this.vData = JSON.parse(result);
                    _this.arr = _this.initarr;
                    _this.newRound();
                }
            });
        });
    };
    ContentPage.prototype.iPhoneVersion = function () {
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
    ContentPage.prototype.newRound = function () {
        var needsToBeSorted = false;
        // We iterate over the whole array and check if we have to sort sth. 
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].length > 1) {
                this.insertIndex = i;
                needsToBeSorted = true;
                break;
            }
        }
        if (needsToBeSorted) {
            // Let's get started to sort. 
            var sortArray = this.arr[i];
            var v0 = this.getRandomIndex(sortArray);
            this.comparer = sortArray.slice(0);
            this.arr.splice(this.insertIndex, 1);
            this.sort(v0[0]);
        }
        else {
            // Finished overall sorting, since nothing has to be sorted anymore.
            this.calculateValue();
            var btn0 = document.querySelector(".opt0");
            var btn1 = document.querySelector(".opt1");
            btn0.parentNode.removeChild(btn0);
            btn1.parentNode.removeChild(btn1);
            //this.collapseAndRotate()
            this.showLoading(this.arr);
            this.btn0Val.name = "";
            this.btn1Val.name = "";
            this.decisionCounter = 0;
        }
    };
    // Sort will be called after triggering a new round adn after each decision
    ContentPage.prototype.sort = function (fixed) {
        if (this.comparer.length > 0) {
            var v1 = this.getRandomIDExcept(fixed.id, this.comparer);
            this.btn0Val = fixed;
            this.btn1Val = v1;
        }
        else {
            this.completeRound();
        }
    };
    // onClick event of the buttons
    ContentPage.prototype.selected = function (index) {
        if (this.decisionCounter == 0) {
            this.startedTimeStamp = new Date().getTime() / 1000;
            this.startedTimeStamp = parseInt(this.startedTimeStamp.toString());
        }
        this.decisionCounter++;
        if (index == 0) {
            Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
                targets: document.getElementsByClassName("upper"),
                scale: 1.05,
                easing: 'easeInOutQuad',
                duration: 200,
                direction: 'alternate',
            });
            // Push the value to the lesser array
            this.lesser.push(this.btn1Val);
            //this.transition(0)
        }
        else {
            Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
                targets: document.getElementsByClassName("lower"),
                scale: 1.05,
                easing: 'easeInOutQuad',
                duration: 200,
                direction: 'alternate',
            });
            // Push the value to the greater array
            this.greater.push(this.btn1Val);
            //this.transition(1)
        }
        // Finally, remove the value from the comparer array and sort again
        this.removeById(this.btn1Val.id);
        this.sort(this.btn0Val);
    };
    // When finishing comparing one value, we "finish" the round and sort in the related arrays
    ContentPage.prototype.completeRound = function () {
        // Add the lesser array    
        if (this.lesser.length > 0) {
            if (this.lesser.length > 1) {
                this.arr.splice(this.insertIndex, 0, this.lesser);
            }
            else {
                this.arr.splice(this.insertIndex, 0, this.lesser[0]);
            }
        }
        // Add the comparer value between the lesser and greater
        this.arr.splice(this.insertIndex, 0, this.btn0Val);
        // Add the greater array after the comparer
        if (this.greater.length > 0) {
            if (this.greater.length > 1) {
                this.arr.splice(this.insertIndex, 0, this.greater);
            }
            else {
                this.arr.splice(this.insertIndex, 0, this.greater[0]);
            }
        }
        // Clean up values again and start a new round
        this.lesser = [];
        this.greater = [];
        //deepLog(arr,"TopArray")
        this.newRound();
    };
    /*
    // Helper function to monitor the array
    function deepLog(arr,name) {
      
      console.log("--------"+name+"-------------")
      console.log("--------"+arr.length+"-------------")
      for (var i = 0; i < arr.length; i++) {
          console.log(arr[i])
      }
      console.log("-------------------------------")
    }
    */
    // Get random object out of itm as touple with index
    ContentPage.prototype.getRandomIndex = function (itm) {
        var rand = Math.floor(Math.random() * Math.floor(itm.length));
        return [itm[rand], rand];
    };
    // Used to get a random object except an specified one. ( for getting unused values )
    ContentPage.prototype.getRandomIDExcept = function (except, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == except) {
                arr.splice(i, 1);
            }
        }
        var num = Math.floor(Math.random() * (arr.length - 1 + 1));
        return arr[num];
    };
    // Remove the value from the comparer array, whenever it is already compared
    ContentPage.prototype.removeById = function (id) {
        for (var i = 0; i < this.comparer.length; i++) {
            if (this.comparer[i].id == id) {
                this.comparer.splice(i, 1);
            }
        }
    };
    // Calculating the final result
    ContentPage.prototype.calculateValue = function () {
        var rank = this.arr.length - 1;
        for (var i = 0; i < this.arr.length; i++) {
            this.arr[i]["rating"] = rank;
            rank--;
        }
    };
    ContentPage.prototype.showLoading = function (a) {
        this.moveOn(a);
    };
    ContentPage.prototype.moveOn = function (v) {
        var _this = this;
        var finished = new Date().getTime() / 1000;
        finished = parseInt(finished.toString());
        this.vData.metadata.contentStarted = this.startedTimeStamp;
        this.vData.contents = v;
        this.vData.metadata.contentDecisions = this.decisionCounter;
        this.vData.metadata.contentStarted = this.startedTimeStamp;
        this.vData.metadata.contentFinished = finished;
        var data = JSON.stringify(this.vData);
        this.storage.ready().then(function () {
            _this.storage.set("matches", data);
            var navigationExtras = {
                queryParams: {}
            };
            _this.navCtrl.navigateForward(['loading'], navigationExtras);
        });
    };
    ContentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.page.html */ "./src/app/content/content.page.html"),
            styles: [__webpack_require__(/*! ./content.page.scss */ "./src/app/content/content.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__["GoogleAnalytics"]])
    ], ContentPage);
    return ContentPage;
}());



/***/ })

}]);
//# sourceMappingURL=content-content-module.js.map