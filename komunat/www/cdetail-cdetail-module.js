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

module.exports = "<ion-content>\n  <div class=\"container\">\n    <ion-row class=\"titleBar\">\n      <ion-col size=\"12\">\n        <ion-button expand=\"block\" fill=\"outline\" class=\"\" (click)=\"back()\"\n          ><ion-icon name=\"arrow-round-back\"></ion-icon>Zurück</ion-button\n        >\n      </ion-col>\n    </ion-row>\n    <div class=\"candidateCard\" ng-model=\"candidate\">\n      <ion-row class=\"fullHeight\">\n        <ion-col size=\"5\" class=\"imageCol\">\n          <div class=\"cCardLeft\">\n            <ion-avatar>\n              <img src=\"http://localhost:8100/assets/img/avatar.png\" />\n            </ion-avatar>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"7\" class=\"quoteCol\">\n          <div class=\"\">\n            <p class=\"black cursiv vertical-center\">\n              <i>\"{{candidate.motto}}\"</i>\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-slides zoom=\"false\">\n      <ion-slide>\n        <div class=\"eventList\">\n          <h4>MEINE WERTE</h4>\n          <br />\n          <div\n            class=\"eventWrapper\"\n            *ngFor=\"let e of candidate.values; let i = index\"\n          >\n            <div class=\"event\">\n              <hr />\n              <ion-row class=\"eventTitle bold\">\n                <ion-col size=\"2\">\n                  <p class=\"slim black\">{{i+1}}</p>\n                </ion-col>\n                <ion-col size=\"8\">\n                  <p>{{e.name}}</p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"eventList\">\n          <h4>MEINE AUFGABEN</h4>\n          <br />\n          <div\n            class=\"eventWrapper\"\n            *ngFor=\"let e of candidate.contents; let i = index\"\n          >\n            <div class=\"event\">\n              <hr />\n              <ion-row class=\"eventTitle bold\">\n                <ion-col size=\"2\">\n                  <p class=\"slim black\">{{i+1}}</p>\n                </ion-col>\n                <ion-col size=\"8\">\n                  <p>{{e.name}}</p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"eventList\">\n          <h4>KOMM VORBEI & TRIFF MICH HIER PERSÖNLICH</h4>\n          <br />\n          <div class=\"eventWrapper\" *ngFor=\"let event of events; let i = index\">\n            <div class=\"event\">\n              <hr />\n              <ion-row class=\"eventTitle bold\">\n                <p>{{event.title}}</p>\n              </ion-row>\n              <ion-row class=\"eventContent\">\n                <ion-col size=\"5\">\n                  <p class=\"black\">\n                    <span class=\"slim\">Beginn: </span\n                    ><span class=\"bold\">{{event.startDate}}</span>\n                  </p>\n                  <p class=\"black\">\n                    <span class=\"slim\">Ende: </span\n                    ><span class=\"bold\">{{event.endDate}}</span>\n                  </p>\n                </ion-col>\n                <ion-col size=\"7\">\n                  <p class=\"black\">\n                    <span class=\"slim\">Addresse: </span\n                    ><span class=\"bold\">{{event.location}}</span>\n                  </p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cdetail/cdetail.page.scss":
/*!*******************************************!*\
  !*** ./src/app/cdetail/cdetail.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  /* Fallback for browsers that do not support Custom Properties */\n  height: calc(var(--vh, 1vh) * 100);\n  margin-top: 5vh; }\n\n.titleBar {\n  margin-left: 10px;\n  margin-top: 60px;\n  font-size: 7vw; }\n\n.fullHeight {\n  height: 100%; }\n\n.cCardLeft {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center; }\n\n.center {\n  text-align: center; }\n\nion-avatar {\n  width: 35vw;\n  height: 35vw;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%; }\n\nion-slide {\n  text-align: left; }\n\n.candidateCard {\n  height: 160px; }\n\n.imageCol {\n  margin: 0px;\n  padding: 0px; }\n\n.quoteCol {\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n  height: 100%; }\n\n.quoteAuthor {\n  position: absolute;\n  bottom: 30px;\n  right: 20px; }\n\n.vertical-center > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important; }\n\nh2 {\n  color: #4C4D4F;\n  font-size: 8vw;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\nh4 {\n  font-size: 6vw;\n  color: var(--komunat-gray-dark);\n  margin: 15px;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\np {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: var(--komunat-blue);\n  margin-bottom: 0px; }\n\n.black {\n  color: var(--komunat-gray-dark); }\n\n.bold {\n  font-weight: bold; }\n\n.small {\n  font-size: 3vw; }\n\n.slim {\n  font-weight: lighter; }\n\n.eventTitle {\n  margin-left: 5px; }\n\n.eventWrapper {\n  border-top: 1px solid var(--komunat-gray-light);\n  border-bottom: 1px solid var(--komunat-gray-light); }\n\n.eventList {\n  margin-top: 20px;\n  width: 100%; }\n\n.event {\n  margin-top: -20px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL3RlYW10b21vcnJvdy9rb211bmF0LXB3YS9rb211bmF0L3NyYy9hcHAvY2RldGFpbC9jZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7RUFBRSxnRUFBQTtFQUNmLGtDQUFrQztFQUNsQyxlQUFjLEVBQUE7O0FBSWxCO0VBQ0UsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUloQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRyxrQkFBa0IsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQztFQUNoQyxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFZLEVBQUE7O0FBRWhCO0VBQ0ksV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVU7RUFDVixZQUFXO0VBQ1gsV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gsV0FBVSxFQUFBOztBQUlkO0VBRUssd0JBQXVCO0VBQ3ZCLGdDQUErQjtFQUMvQiw4QkFBNkIsRUFBQTs7QUFHbEM7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLCtCQUErQjtFQUMvQixZQUFXO0VBQ1gsMENBQTBDO0VBQzFDLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDBDQUEwQztFQUMxQywwQkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksK0JBQThCLEVBQUE7O0FBR2xDO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGdCQUFlLEVBQUE7O0FBR25CO0VBQ0ksK0NBQStDO0VBQy9DLGtEQUFrRCxFQUFBOztBQUd0RDtFQUNJLGdCQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdmO0VBQ0ksaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jZGV0YWlsL2NkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxue1xuICAgIGhlaWdodDogMTAwdmg7IC8qIEZhbGxiYWNrIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEN1c3RvbSBQcm9wZXJ0aWVzICovXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgICBtYXJnaW4tdG9wOjV2aDtcbn1cblxuXG4udGl0bGVCYXIge1xuICBtYXJnaW4tbGVmdDoxMHB4O1xuICBtYXJnaW4tdG9wOjYwcHg7XG4gIGZvbnQtc2l6ZTogN3Z3O1xufVxuXG5cbi5mdWxsSGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jQ2FyZExlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2VudGVyIHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5pb24tYXZhdGFyIHtcbiAgICB3aWR0aDogMzV2dztcbiAgICBoZWlnaHQ6IDM1dnc7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24tc2xpZGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYW5kaWRhdGVDYXJkIHtcbiAgICBoZWlnaHQ6MTYwcHg7XG59XG4uaW1hZ2VDb2wge1xuICAgIG1hcmdpbjowcHg7XG4gICAgcGFkZGluZzowcHg7XG59XG5cbi5xdW90ZUNvbCB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG4ucXVvdGVBdXRob3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206MzBweDtcbiAgICByaWdodDoyMHB4O1xuICAgIFxufVxuXG4udmVydGljYWwtY2VudGVyID4gKlxue1xuICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogIzRDNEQ0RjtcbiAgICBmb250LXNpemU6IDh2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiAgXG5oNCB7XG4gICAgZm9udC1zaXplOiA2dnc7XG4gICAgY29sb3I6IHZhcigtLWtvbXVuYXQtZ3JheS1kYXJrKTtcbiAgICBtYXJnaW46MTVweDtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjp2YXIoLS1rb211bmF0LWJsdWUpO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmJsYWNrIHtcbiAgICBjb2xvcjp2YXIoLS1rb211bmF0LWdyYXktZGFyaylcbn1cblxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc21hbGwge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xufVxuLnNsaW0ge1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uZXZlbnRUaXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xufVxuXG4uZXZlbnRXcmFwcGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0ta29tdW5hdC1ncmF5LWxpZ2h0KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0ta29tdW5hdC1ncmF5LWxpZ2h0KTtcbn1cblxuLmV2ZW50TGlzdCB7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZXZlbnQge1xuICAgIG1hcmdpbi10b3A6LTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XG59Il19 */"

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
            uuid: "",
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
            //  var xhr = new XMLHttpRequest();
            //  var url = "https://komunat.de/result/event";
            //  var data = JSON.stringify({candidate: this.candidate.uuid});
            //  xhr.open("POST", url, true);
            //  xhr.setRequestHeader("Content-Type", "application/json");
            //  xhr.onreadystatechange = () => {
            //      if (xhr.readyState === 4) {
            //        var response = JSON.parse(xhr.responseText);
            //        this.events = response;
            //      }
            //  };
            //  xhr.send(data);
        });
    };
    CdetailPage.prototype.back = function () {
        console.log("Clicked back");
        this.navCtrl.pop();
    };
    CdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cdetail",
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