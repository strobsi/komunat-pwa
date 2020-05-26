(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["komunat-komunat-module"],{

/***/ "./src/app/komunat/komunat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/komunat/komunat.module.ts ***!
  \*******************************************/
/*! exports provided: KomunatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomunatPageModule", function() { return KomunatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _komunat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./komunat.page */ "./src/app/komunat/komunat.page.ts");








var routes = [
    {
        path: '',
        component: _komunat_page__WEBPACK_IMPORTED_MODULE_7__["KomunatPage"]
    }
];
var KomunatPageModule = /** @class */ (function () {
    function KomunatPageModule() {
    }
    KomunatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_komunat_page__WEBPACK_IMPORTED_MODULE_7__["KomunatPage"]]
        })
    ], KomunatPageModule);
    return KomunatPageModule;
}());



/***/ }),

/***/ "./src/app/komunat/komunat.page.html":
/*!*******************************************!*\
  !*** ./src/app/komunat/komunat.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <ion-row class=\"top\">\n                <ion-col size=\"6\">\n                <p class=\"middle small\">Welcher Wert ist dir wichtiger?</p>\n                </ion-col>\n                <ion-col size=\"1\">\n                </ion-col>\n                <ion-col size=\"3\">\n                    <div class=\"progressContainer\">\n                        <div class=\"progress\">\n                          <div class=\"percent\"></div>\n                        </div>\n                        <div class=\"steps\">\n                          <div class=\"step selected\" id=\"0\"></div>\n                          <div class=\"step\" id=\"1\"></div>\n                          <div class=\"step\" id=\"2\"></div>\n                        </div>\n                      </div>\n                      <br><br>\n\n                </ion-col>\n            </ion-row>\n    <div class=\"buttonSection\">\n    <ion-card class=\"opt0 upper\" (click) =\"selected(0)\">\n            <h2 class=\".opt0 beautify\">{{this.btn0Val.name}}</h2>\n    </ion-card>\n    <ion-card class=\"opt1 lower\"  (click) =\"selected(1)\">\n              <h2 class=\".opt1 beautify\">{{this.btn1Val.name}}</h2>\n    </ion-card>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/komunat/komunat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/komunat/komunat.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  /* Fallback for browsers that do not support Custom Properties */\n  height: calc(var(--vh, 1vh) * 100);\n  margin-top: 5vh; }\n\nion-col {\n  margin-left: 10px;\n  margin-top: 10px;\n  justify-content: center; }\n\n.buttonSection {\n  height: 65vh;\n  width: auto; }\n\n.upper {\n  height: 50%;\n  margin-top: 5px;\n  position: relative;\n  text-align: center; }\n\n.lower {\n  height: 50%;\n  position: relative;\n  text-align: center; }\n\n.beautify {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-top: 1px solid;\n  border-bottom: 2px solid;\n  position: absolute;\n  text-align: center;\n  margin: 0px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\nh2 {\n  color: #4C4D4F;\n  font-size: 8vw;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\nh4 {\n  height: 5vh;\n  font-size: 6vw;\n  margin: 1em;\n  color: #4C4D4F;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\np {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: #59BCED;\n  margin-bottom: 0px; }\n\n.top {\n  margin-top: 30px; }\n\n.middle {\n  top: 50%;\n  transform: translate(0, -50%); }\n\n.progressContainer {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -30%); }\n\n.steps {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  width: 25vw; }\n\n.step {\n  width: 15px;\n  height: 15px;\n  background: white;\n  border: 2px solid var(--komunat-blue);\n  border-radius: 50%;\n  transition: background 1s; }\n\n.step.selected {\n  background: var(--komunat-blue); }\n\n.step.completed {\n  background: white; }\n\n.progress {\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  border-bottom: 2px solid var(--komunat-blue);\n  z-index: -1; }\n\n.percent {\n  position: absolute;\n  width: 0;\n  height: 100%;\n  border-bottom: 2px solid #4B81BD;\n  z-index: 1;\n  transition: width 1s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL3RlYW10b21vcnJvdy9rb211bmF0LXB3YS9rb211bmF0L3NyYy9hcHAva29tdW5hdC9rb211bmF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7RUFBRSxnRUFBQTtFQUNmLGtDQUFrQztFQUNsQyxlQUFjLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHWjtFQUNDLFdBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBRVQsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDBDQUEwQztFQUMxQyxjQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSxRQUFRO0VBQ1IsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVyxFQUFBOztBQUViO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSwrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCw0Q0FBNkM7RUFDN0MsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2tvbXVuYXQva29tdW5hdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gICAgaGVpZ2h0OiAxMDB2aDsgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgQ3VzdG9tIFByb3BlcnRpZXMgKi9cbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICAgIG1hcmdpbi10b3A6NXZoO1xufVxuXG5pb24tY29sIHtcbiAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgbWFyZ2luLXRvcDoxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvblNlY3Rpb24ge1xuICBoZWlnaHQ6IDY1dmg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4gLnVwcGVyIHtcbiAgaGVpZ2h0OjUwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIC5sb3dlciB7XG4gIGhlaWdodDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiAgXG4gIC5iZWF1dGlmeSB7XG4gICAgcGFkZGluZy10b3A6MTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIGgyIHtcbiAgICBjb2xvcjogIzRDNEQ0RjtcbiAgICBmb250LXNpemU6IDh2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgaDQge1xuICAgIGhlaWdodDogNXZoO1xuICAgIGZvbnQtc2l6ZTogNnZ3O1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGNvbG9yOiAjNEM0RDRGO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiM1OUJDRUQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLnRvcCB7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xuICB9XG5cbiAgLm1pZGRsZSB7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLy8gUFJPR1JFU1MgRE9UU1xuLnByb2dyZXNzQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKTtcbn1cblxuLnN0ZXBzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAyNXZ3O1xufVxuLnN0ZXAge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0ta29tdW5hdC1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzO1xufVxuLnN0ZXAuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rb211bmF0LWJsdWUpO1xufVxuLnN0ZXAuY29tcGxldGVkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIHZhcigtLWtvbXVuYXQtYmx1ZSk7XG4gIHotaW5kZXg6IC0xO1xufVxuLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNEI4MUJEO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/komunat/komunat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/komunat/komunat.page.ts ***!
  \*****************************************/
/*! exports provided: KomunatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomunatPage", function() { return KomunatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-analytics/ngx */ "./node_modules/@ionic-native/google-analytics/ngx/index.js");







var KomunatPage = /** @class */ (function () {
    function KomunatPage(navCtrl, platform, storage, ga) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.storage = storage;
        this.ga = ga;
        this.lesser = [];
        this.greater = [];
        this.comparer = [];
        this.insertIndex = 0;
        this.decisionCounter = 0;
        this.startedTimeStamp = 0;
        this.initarr = [
            [
                {
                    "id": 0,
                    "name": "Sicherheit",
                    "rating": 0
                },
                {
                    "id": 1,
                    "name": "Solidarität",
                    "rating": 0
                },
                {
                    "id": 2,
                    "name": "Menschenwürde",
                    "rating": 0
                },
                {
                    "id": 3,
                    "name": "Gerechtigkeit",
                    "rating": 0
                },
                {
                    "id": 4,
                    "name": "Toleranz",
                    "rating": 0
                },
                {
                    "id": 5,
                    "name": "Meinungsfreiheit",
                    "rating": 0
                },
                {
                    "id": 6,
                    "name": "Pressefreiheit",
                    "rating": 0
                },
                {
                    "id": 7,
                    "name": "Nachhaltigkeit",
                    "rating": 0
                },
                {
                    "id": 8,
                    "name": "Wohlstand",
                    "rating": 0
                },
                {
                    "id": 9,
                    "name": "Selbstbestimmung",
                    "rating": 0
                },
                {
                    "id": 10,
                    "name": "Tradition",
                    "rating": 0
                },
                {
                    "id": 11,
                    "name": "Rechtsstaatlichkeit",
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
    KomunatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var version = _this.detectIE();
            var top = document.querySelector(".top");
            if (version === false) {
                console.log('<s>IE/Edge</s>');
            }
            else if (version >= 12) {
                top.setAttribute("style", "margin-top: 60px;");
                console.log('<s>Edge ' + version);
            }
            else {
                top.setAttribute("style", "margin-top: 60px;");
                console.log('<s>IE ' + version);
            }
            _this.ga.trackView('values')
                .then(function () {
                _this.ga.trackEvent('userflow', 'Started Komunat')
                    .then(function () {
                });
            })
                .catch(function (e) { return console.log(e); });
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
        this.arr = this.initarr;
        this.newRound();
    };
    KomunatPage.prototype.iPhoneVersion = function () {
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
    KomunatPage.prototype.newRound = function () {
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
            this.sendResult(this.arr);
            this.btn1Val.name = "";
            this.btn0Val.name = "";
            this.decisionCounter = 0;
        }
    };
    // Sort will be called after triggering a new round adn after each decision
    KomunatPage.prototype.sort = function (fixed) {
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
    KomunatPage.prototype.selected = function (index) {
        if (this.decisionCounter == 0) {
            this.startedTimeStamp = new Date().getTime() / 1000;
            this.startedTimeStamp = parseInt(this.startedTimeStamp.toString());
        }
        this.decisionCounter++;
        if (index == 0) {
            Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
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
            Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
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
    KomunatPage.prototype.completeRound = function () {
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
    KomunatPage.prototype.getRandomIndex = function (itm) {
        var rand = Math.floor(Math.random() * Math.floor(itm.length));
        return [itm[rand], rand];
    };
    // Used to get a random object except an specified one. ( for getting unused values )
    KomunatPage.prototype.getRandomIDExcept = function (except, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == except) {
                arr.splice(i, 1);
            }
        }
        var num = Math.floor(Math.random() * (arr.length - 1 + 1));
        return arr[num];
    };
    // Remove the value from the comparer array, whenever it is already compared
    KomunatPage.prototype.removeById = function (id) {
        for (var i = 0; i < this.comparer.length; i++) {
            if (this.comparer[i].id == id) {
                this.comparer.splice(i, 1);
            }
        }
    };
    // Calculating the final result
    KomunatPage.prototype.calculateValue = function () {
        var rank = this.arr.length - 1;
        for (var i = 0; i < this.arr.length; i++) {
            this.arr[i]["rating"] = rank;
            rank--;
        }
    };
    // Send the calculated result of the user to the backend
    KomunatPage.prototype.sendResult = function (a) {
        var res = {
            metadata: {},
            values: {},
            contents: {}
        };
        // Setup some metadata format
        var finished = new Date().getTime() / 1000;
        finished = parseInt(finished.toString());
        res.metadata = {
            isCandidate: false,
            valueStarted: this.startedTimeStamp,
            valueFinished: finished,
            contentStarted: 0,
            contentFinished: 0,
            valueDecisions: this.decisionCounter,
            contentDecisions: 0
        };
        // Append the values 
        res.values = a;
        var data = JSON.stringify(res);
        this.moveOn(data);
    };
    KomunatPage.prototype.moveOn = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.set("values", data);
            var navigationExtras = {
                queryParams: {}
            };
            _this.navCtrl.navigateForward(['intermediate'], navigationExtras);
        });
    };
    KomunatPage.prototype.detectIE = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    };
    KomunatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-komunat',
            template: __webpack_require__(/*! ./komunat.page.html */ "./src/app/komunat/komunat.page.html"),
            styles: [__webpack_require__(/*! ./komunat.page.scss */ "./src/app/komunat/komunat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_6__["GoogleAnalytics"]])
    ], KomunatPage);
    return KomunatPage;
}());



/***/ })

}]);
//# sourceMappingURL=komunat-komunat-module.js.map