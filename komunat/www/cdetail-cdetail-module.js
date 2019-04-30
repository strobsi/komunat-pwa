(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cdetail-cdetail-module"],{

/***/ "./src/app/cdetail/cdetail.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cdetail/cdetail.module.ts ***!
  \*******************************************/
/*! exports provided: CdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdetailPageModule", function() { return CdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cdetail.page */ "./src/app/cdetail/cdetail.page.ts");







var routes = [
    {
        path: '',
        component: _cdetail_page__WEBPACK_IMPORTED_MODULE_6__["CdetailPage"]
    }
];
var CdetailPageModule = /** @class */ (function () {
    function CdetailPageModule() {
    }
    CdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cdetail_page__WEBPACK_IMPORTED_MODULE_6__["CdetailPage"]]
        })
    ], CdetailPageModule);
    return CdetailPageModule;
}());



/***/ }),

/***/ "./src/app/cdetail/cdetail.page.html":
/*!*******************************************!*\
  !*** ./src/app/cdetail/cdetail.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <div class=\"container\">\n    <ion-row class=\"titleBar\">\n        <ion-col size=\"10\">\n        <p class=\"mainLbl\" (click)=\"back()\">< DEIN TEAM</p>\n        <p hidden class=\"backBtn\" name=\"filing\" (click) = \"back()\">< DEIN TEAM</p>\n        </ion-col>\n\n    </ion-row>\n    <div class=\"candidateCard\" ng-model=\"candidate\">\n      <ion-row class=\"fullHeight\">\n        <ion-col size=\"5\" class=\"imageCol\">\n          <div class=\"cCardLeft\">\n              <ion-avatar>\n                  <img src=\"https://komunat.de/uploads/{{candidate.uuid}}.png\"/>\n                </ion-avatar>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"7\" class=\"quoteCol\">\n            <div class=\"\">\n          <p class=\"black cursiv vertical-center\"><i>\"{{candidate.motto}}\"</i></p>\n          </div>\n        </ion-col>\n\n      </ion-row>\n    </div>    \n    <ion-slides zoom=\"false\">\n      <ion-slide>\n          <div class=\"eventList\">\n              <h4>MEINE WERTE</h4>\n              <br>\n              <div class=\"eventWrapper\" *ngFor=\"let e of candidate.values; let i = index\">\n                <div class=\"event\">\n                <hr>\n                  <ion-row class=\"eventTitle bold\">\n                    <ion-col size=\"2\">\n                      <p class=\"slim black\">{{i+1}}</p>\n                    </ion-col>\n                    <ion-col size=\"8\">\n                        <p>{{e.name}}</p>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n            </div>\n      </ion-slide>\n      <ion-slide>\n          <div class=\"eventList\">\n              <h4>MEINE AUFGABEN</h4>\n              <br>\n              <div class=\"eventWrapper\" *ngFor=\"let e of candidate.contents; let i = index\">\n                <div class=\"event\">\n                <hr>\n                  <ion-row class=\"eventTitle bold\">\n                    <ion-col size=\"2\">\n                      <p class=\"slim black\">{{i+1}}</p>\n                    </ion-col>\n                    <ion-col size=\"8\">\n                        <p>{{e.name}}</p>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n            </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"eventList\">\n          <h4>KOMM VORBEI & TRIFF MICH HIER PERSÖNLICH</h4>\n          <br>\n          <div class=\"eventWrapper\" *ngFor=\"let event of events; let i = index\">\n            <div class=\"event\">\n            <hr>\n              <ion-row class=\"eventTitle bold\">\n                <p>{{event.title}}</p>\n              </ion-row>\n              <ion-row class=\"eventContent\">\n                <ion-col size=5>\n                <p class=\"black\"><span class=\"slim\">Beginn: </span><span class=\"bold\">{{event.startDate}}</span> </p>\n                <p class=\"black\"><span class=\"slim\">Ende: </span><span class=\"bold\">{{event.endDate}}</span></p>\n                </ion-col>\n                <ion-col size=\"7\">\n                  <p class=\"black\"><span class=\"slim\">Addresse: </span><span class=\"bold\">{{event.location}}</span></p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/cdetail/cdetail.page.scss":
/*!*******************************************!*\
  !*** ./src/app/cdetail/cdetail.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  /* Fallback for browsers that do not support Custom Properties */\n  height: calc(var(--vh, 1vh) * 100);\n  margin-top: 5vh; }\n\n.titleBar {\n  margin-left: 10px;\n  font-size: 7vw; }\n\n.fullHeight {\n  height: 100%; }\n\n.cCardLeft {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center; }\n\nion-avatar {\n  width: 35vw;\n  height: 35vw;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 50%; }\n\nion-slide {\n  text-align: left; }\n\n.candidateCard {\n  height: 160px; }\n\n.imageCol {\n  margin: 0px;\n  padding: 0px; }\n\n.quoteCol {\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n  height: 100%; }\n\n.quoteAuthor {\n  position: absolute;\n  bottom: 30px;\n  right: 20px; }\n\n.vertical-center > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important; }\n\nh2 {\n  color: #4C4D4F;\n  font-size: 8vw;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\nh4 {\n  font-size: 6vw;\n  color: var(--komunat-gray-dark);\n  margin: 15px;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\np {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: var(--komunat-blue);\n  margin-bottom: 0px; }\n\n.black {\n  color: var(--komunat-gray-dark); }\n\n.bold {\n  font-weight: bold; }\n\n.small {\n  font-size: 3vw; }\n\n.slim {\n  font-weight: lighter; }\n\n.eventTitle {\n  margin-left: 5px; }\n\n.eventWrapper {\n  border-top: 1px solid var(--komunat-gray-light);\n  border-bottom: 1px solid var(--komunat-gray-light); }\n\n.eventList {\n  margin-top: 20px;\n  width: 100%; }\n\n.event {\n  margin-top: -20px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL2tvbXVuYXQtcHdhL2tvbXVuYXQvc3JjL2FwcC9jZGV0YWlsL2NkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYTtFQUFFLGdFQUFBO0VBQ2Ysa0NBQWtDO0VBQ2xDLGVBQWMsRUFBQTs7QUFJbEI7RUFDRSxpQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUloQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUVULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBWSxFQUFBOztBQUVoQjtFQUNJLFdBQVU7RUFDVixZQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFVO0VBQ1YsWUFBVztFQUNYLFdBQVU7RUFDVixZQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsWUFBVztFQUNYLFdBQVUsRUFBQTs7QUFJZDtFQUVLLHdCQUF1QjtFQUN2QixnQ0FBK0I7RUFDL0IsOEJBQTZCLEVBQUE7O0FBR2xDO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsWUFBVztFQUNYLDBDQUEwQztFQUMxQyxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSwwQ0FBMEM7RUFDMUMsMEJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLCtCQUE4QixFQUFBOztBQUdsQztFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxnQkFBZSxFQUFBOztBQUduQjtFQUNJLCtDQUErQztFQUMvQyxrREFBa0QsRUFBQTs7QUFHdEQ7RUFDSSxnQkFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2RldGFpbC9jZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgICBoZWlnaHQ6IDEwMHZoOyAvKiBGYWxsYmFjayBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBDdXN0b20gUHJvcGVydGllcyAqL1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG4gICAgbWFyZ2luLXRvcDo1dmg7XG59XG5cblxuLnRpdGxlQmFyIHtcbiAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgZm9udC1zaXplOiA3dnc7XG59XG5cblxuLmZ1bGxIZWlnaHQge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNDYXJkTGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiAzNXZ3O1xuICAgIGhlaWdodDogMzV2dztcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmlvbi1zbGlkZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhbmRpZGF0ZUNhcmQge1xuICAgIGhlaWdodDoxNjBweDtcbn1cbi5pbWFnZUNvbCB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOjBweDtcbn1cblxuLnF1b3RlQ29sIHtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5cbi5xdW90ZUF1dGhvciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTozMHB4O1xuICAgIHJpZ2h0OjIwcHg7XG4gICAgXG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIgPiAqXG57XG4gICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbn1cblxuaDIge1xuICAgIGNvbG9yOiAjNEM0RDRGO1xuICAgIGZvbnQtc2l6ZTogOHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuICBcbmg0IHtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgICBjb2xvcjogdmFyKC0ta29tdW5hdC1ncmF5LWRhcmspO1xuICAgIG1hcmdpbjoxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucCB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOnZhcigtLWtvbXVuYXQtYmx1ZSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYmxhY2sge1xuICAgIGNvbG9yOnZhcigtLWtvbXVuYXQtZ3JheS1kYXJrKVxufVxuXG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAzdnc7XG59XG4uc2xpbSB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5ldmVudFRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG59XG5cbi5ldmVudFdyYXBwZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1rb211bmF0LWdyYXktbGlnaHQpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1rb211bmF0LWdyYXktbGlnaHQpO1xufVxuXG4uZXZlbnRMaXN0IHtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5ldmVudCB7XG4gICAgbWFyZ2luLXRvcDotMjBweDtcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cdetail/cdetail.page.ts":
/*!*****************************************!*\
  !*** ./src/app/cdetail/cdetail.page.ts ***!
  \*****************************************/
/*! exports provided: CdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdetailPage", function() { return CdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var CdetailPage = /** @class */ (function () {
    function CdetailPage(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.candidate = {
            motto: "",
            name: "",
            birthdate: "",
            values: [],
            contents: [],
            events: [],
            uuid: ""
        };
    }
    CdetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.candidate = JSON.parse(params["candidate"]);
            _this.candidate.values.sort(function (a, b) {
                a.rating = Math.round(a.rating);
                b.rating = Math.round(b.rating);
                if (a.rating < b.rating) {
                    return 1;
                }
                if (a.rating > b.rating) {
                    return -1;
                }
                return 0;
            });
            _this.candidate.contents.sort(function (a, b) {
                a.rating = Math.round(a.rating);
                b.rating = Math.round(b.rating);
                if (a.rating < b.rating) {
                    return 1;
                }
                if (a.rating > b.rating) {
                    return -1;
                }
                return 0;
            });
            console.log(_this.candidate);
            var xhr = new XMLHttpRequest();
            var url = "https://komunat.de/result/event";
            var data = JSON.stringify({ candidate: _this.candidate.uuid });
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    var response = JSON.parse(xhr.responseText);
                    _this.events = response;
                }
            };
            xhr.send(data);
        });
    };
    CdetailPage.prototype.back = function () {
        console.log("Clicked back");
        this.navCtrl.pop();
    };
    CdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cdetail',
            template: __webpack_require__(/*! ./cdetail.page.html */ "./src/app/cdetail/cdetail.page.html"),
            styles: [__webpack_require__(/*! ./cdetail.page.scss */ "./src/app/cdetail/cdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], CdetailPage);
    return CdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=cdetail-cdetail-module.js.map