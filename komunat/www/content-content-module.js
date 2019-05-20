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

module.exports = "<div class=\"container\">\n    <ion-row class=\"topContent\">\n        <ion-col size=\"6\">\n        <p class=\"middle small\">Welche Aufgabe ist dir wichtiger?</p>\n        </ion-col>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"3\">\n            <div class=\"progressContainer\">\n                <div class=\"progress\">\n                  <div class=\"percent\"></div>\n                </div>\n                <div class=\"steps\">\n                  <div class=\"step\" id=\"0\"></div>\n                  <div class=\"step selected\" id=\"1\"></div>\n                  <div class=\"step\" id=\"2\"></div>\n                </div>\n              </div>\n              <br><br>\n        </ion-col>\n    </ion-row>\n        <div class=\"buttonSection\">\n        <ion-card class=\"opt0 upper\" (click) =\"selected(0)\">\n                <h2 class=\".opt0 beautify small\">{{this.btn0Val.name}}</h2>\n        </ion-card>\n        <ion-card class=\"opt1 lower\"  (click) =\"selected(1)\">\n                  <h2 class=\".opt1 beautify small\">{{this.btn1Val.name}}</h2>\n          </ion-card>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/content/content.page.scss":
/*!*******************************************!*\
  !*** ./src/app/content/content.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  /* Fallback for browsers that do not support Custom Properties */\n  height: calc(var(--vh, 1vh) * 100);\n  margin-top: 5vh; }\n\nion-col {\n  margin-left: 10px;\n  margin-top: 10px;\n  justify-content: center; }\n\n.buttonSection {\n  height: 65vh;\n  width: auto; }\n\n.upper {\n  height: 50%;\n  margin-top: 5px;\n  position: relative;\n  text-align: center; }\n\n.lower {\n  height: 50%;\n  position: relative;\n  text-align: center; }\n\n.beautify {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-top: 1px solid;\n  border-bottom: 2px solid;\n  position: absolute;\n  text-align: center;\n  margin: 0px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nh2 {\n  color: #4C4D4F;\n  font-size: 8vw;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\nh4 {\n  height: 5vh;\n  font-size: 6vw;\n  margin: 1em;\n  color: #4C4D4F;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\n.valueImage {\n  height: 50%;\n  margin: 0px; }\n\np {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: #59BCED;\n  margin-bottom: 0px; }\n\n.topContent {\n  margin-top: 30px; }\n\n.small {\n  font-size: 5vw; }\n\n.middle {\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n\n.progressContainer {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -30%);\n          transform: translate(-50%, -30%); }\n\n.steps {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  width: 25vw; }\n\n.step {\n  width: 15px;\n  height: 15px;\n  background: white;\n  border: 2px solid var(--komunat-blue);\n  border-radius: 50%;\n  transition: background 1s; }\n\n.step.selected {\n  background: var(--komunat-blue); }\n\n.step.completed {\n  background: white; }\n\n.progress {\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  border-bottom: 2px solid var(--komunat-blue);\n  z-index: -1; }\n\n.percent {\n  position: absolute;\n  width: 0;\n  height: 100%;\n  border-bottom: 2px solid #4B81BD;\n  z-index: 1;\n  transition: width 1s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL2tvbXVuYXQtcHdhL2tvbXVuYXQvc3JjL2FwcC9jb250ZW50L2NvbnRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYTtFQUFFLGdFQUFBO0VBQ2Ysa0NBQWtDO0VBQ2xDLGVBQWMsRUFBQTs7QUFHbEI7RUFDRSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFJekI7RUFDRSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdYO0VBQ0UsV0FBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFFVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxXQUFVLEVBQUE7O0FBSVo7RUFDRSwwQ0FBMEM7RUFDMUMsY0FBYTtFQUNiLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYSxFQUFBOztBQUdmO0VBQ0UsUUFBUTtFQUNSLHFDQUE2QjtVQUE3Qiw2QkFBNkIsRUFBQTs7QUFHakM7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVyxFQUFBOztBQUViO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSwrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCw0Q0FBNkM7RUFDN0MsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gICAgaGVpZ2h0OiAxMDB2aDsgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgQ3VzdG9tIFByb3BlcnRpZXMgKi9cbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICAgIG1hcmdpbi10b3A6NXZoO1xufVxuXG5pb24tY29sIHtcbiAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgbWFyZ2luLXRvcDoxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG4uYnV0dG9uU2VjdGlvbiB7XG4gIGhlaWdodDogNjV2aDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbiAgLnVwcGVyIHtcbiAgICBoZWlnaHQ6NTAlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubG93ZXIge1xuICAgIGhlaWdodDogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5iZWF1dGlmeSB7XG4gICAgcGFkZGluZy10b3A6MTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIGgyIHtcbiAgICBjb2xvcjogIzRDNEQ0RjtcbiAgICBmb250LXNpemU6IDh2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgaDQge1xuICAgIGhlaWdodDogNXZoO1xuICAgIGZvbnQtc2l6ZTogNnZ3O1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGNvbG9yOiAjNEM0RDRGO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAudmFsdWVJbWFnZSB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luOjBweDtcbiAgfVxuXG4gIFxuICBwIHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IzU5QkNFRDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAudG9wQ29udGVudCB7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xuICB9XG5cbiAgLnNtYWxsIHtcdFx0XG4gICAgZm9udC1zaXplOjV2dztcdFx0XG4gIH1cblxuICAubWlkZGxlIHtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAvLyBQUk9HUkVTUyBET1RTXG4ucHJvZ3Jlc3NDb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpO1xufVxuXG4uc3RlcHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDI1dnc7XG59XG4uc3RlcCB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1rb211bmF0LWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXM7XG59XG4uc3RlcC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWtvbXVuYXQtYmx1ZSk7XG59XG4uc3RlcC5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgdmFyKC0ta29tdW5hdC1ibHVlKTtcbiAgei1pbmRleDogLTE7XG59XG4ucGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0QjgxQkQ7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IHdpZHRoIDFzO1xufSJdfQ== */"

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
        var version = this.detectIE();
        var top = document.querySelector(".topContent");
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
        this.platform.ready().then(function () {
            _this.ga.trackView('content')
                .then(function () {
                _this.ga.trackEvent('userflow', 'Reached Content')
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
    ContentPage.prototype.detectIE = function () {
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