(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share-share-module"],{

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: SharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePageModule", function() { return SharePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./share.page */ "./src/app/share/share.page.ts");








var routes = [
    {
        path: '',
        component: _share_page__WEBPACK_IMPORTED_MODULE_7__["SharePage"]
    }
];
var SharePageModule = /** @class */ (function () {
    function SharePageModule() {
    }
    SharePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_share_page__WEBPACK_IMPORTED_MODULE_7__["SharePage"]]
        })
    ], SharePageModule);
    return SharePageModule;
}());



/***/ }),

/***/ "./src/app/share/share.page.html":
/*!***************************************!*\
  !*** ./src/app/share/share.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"nextText\">\n        <h2 class=\"black left\">Trage hier deine Email Adresse ein und wir senden dir dein Ergebnis zu</h2>\n  <form #form=\"ngForm\" (ngSubmit)=\"sendMail()\"  >\n        <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding list-lines-full hydrated\">\n          <ion-item class=\"item\">\n            <ion-input (ngModel)=\"email\" name=\"ion-input-2\" placeholder=\"Deine Email Adresse\" required=\"false\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <br>\n          <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin ios button button-block button-solid ion-activatable ion-focusable hydrated\">Senden</ion-button>\n         <br>\n         <!-- <ion-button expand=\"block\" type=\"submit\" class=\"disabled ion-no-margin ios button button-block button-solid ion-activatable ion-focusable hydrated\">Keine Lust auf Email?</ion-button> -->\n      </form>\n      <ion-spinner class=\"loader\" name=\"dots\"></ion-spinner>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/share/share.page.scss":
/*!***************************************!*\
  !*** ./src/app/share/share.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  max-height: 100vh;\n  top: 10vh;\n  width: 100%;\n  /* or whatever width you want. */\n  display: inline-block; }\n\nh1, h2, h3, h4, h5, h6 p {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold;\n  margin-bottom: 20px; }\n\n.nextText {\n  position: absolute;\n  top: 20vh;\n  width: 100%;\n  padding: 20px;\n  text-align: center; }\n\n.slim {\n  font-weight: lighter;\n  font-family: 'Source Sans Pro Extra Light', sans-serif; }\n\n.gray {\n  color: #f4f8ff; }\n\n.left {\n  text-align: left; }\n\n.black {\n  color: var(--komunat-gray-dark); }\n\n.oval {\n  position: absolute;\n  width: 180vw;\n  height: 50vh;\n  top: 0px;\n  left: 50%;\n  background: #74c5ed;\n  border-radius: 180vw / 50vh;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%); }\n\n/* iPhone 5 \n  You can also target devices with aspect ratio. */\n\n@media screen and (device-aspect-ratio: 40 / 71) {\n  .nextText {\n    position: absolute;\n    top: 20vh;\n    width: 100%;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-align: center; } }\n\n.blueFont {\n  color: var(--komunat-blue); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL2tvbXVuYXQtcHdhL2tvbXVuYXQvc3JjL2FwcC9zaGFyZS9zaGFyZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlL3NoYXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQVk7RUFDWixpQkFBaUI7RUFDakIsU0FBUTtFQUNSLFdBQVU7RUFBRSxnQ0FBQTtFQUNaLHFCQUFxQixFQUFBOztBQUd0QjtFQUNFLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLG1CQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsV0FBVztFQUNYLGFBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHckI7RUFDRSxvQkFBb0I7RUFDcEIsc0RBQXNELEVBQUE7O0FBRXhEO0VBQ0UsY0FDRixFQUFBOztBQUVBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksK0JBQStCLEVBQUE7O0FBR25DO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osUUFBTztFQUNQLFNBQVE7RUFDUixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBRTNCLHNDQUE4QjtVQUE5Qiw4QkFBOEIsRUFBQTs7QUFJOUI7a0RDUDhDOztBRFNoRDtFQUNFO0lBQ0Msa0JBQWtCO0lBQ2xCLFNBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNuQjs7QUFFRDtFQUNFLDBCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmUvc2hhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgdG9wOjEwdmg7XG4gICAgd2lkdGg6MTAwJTsgLyogb3Igd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQuICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgfVxuICBcbiAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYgcHtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICB9XG4gIFxuICAgLm5leHRUZXh0IHtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICB0b3A6MjB2aDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIHBhZGRpbmc6MjBweDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgfVxuXG4gIC5zbGltIHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybyBFeHRyYSBMaWdodCcsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmdyYXkge1xuICAgIGNvbG9yOiAjZjRmOGZmXG4gIH1cblxuICAubGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmJsYWNrIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1rb211bmF0LWdyYXktZGFyaylcbiAgfVxuXG4gIC5vdmFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE4MHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB0b3A6MHB4O1xuICAgIGxlZnQ6NTAlO1xuICAgIGJhY2tncm91bmQ6ICM3NGM1ZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTgwdncgLyA1MHZoO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB9XG5cbiAgXG4gICAgLyogaVBob25lIDUgXG4gIFlvdSBjYW4gYWxzbyB0YXJnZXQgZGV2aWNlcyB3aXRoIGFzcGVjdCByYXRpby4gKi8gICAgICAgICAgICAgICAgICAgICAgIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAvNzEpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAubmV4dFRleHQge1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHRvcDoyMHZoO1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH0gICAgICAgICAgXG4gICB9XG4gICAuYmx1ZUZvbnQge1xuICAgICBjb2xvcjp2YXIoLS1rb211bmF0LWJsdWUpO1xuICAgfSIsIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAxMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgLyogb3Igd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQuICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLm5leHRUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnNsaW0ge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8gRXh0cmEgTGlnaHQnLCBzYW5zLXNlcmlmOyB9XG5cbi5ncmF5IHtcbiAgY29sb3I6ICNmNGY4ZmY7IH1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi5ibGFjayB7XG4gIGNvbG9yOiB2YXIoLS1rb211bmF0LWdyYXktZGFyayk7IH1cblxuLm92YWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxODB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICB0b3A6IDBweDtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjNzRjNWVkO1xuICBib3JkZXItcmFkaXVzOiAxODB2dyAvIDUwdmg7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTsgfVxuXG4vKiBpUGhvbmUgNSBcbiAgWW91IGNhbiBhbHNvIHRhcmdldCBkZXZpY2VzIHdpdGggYXNwZWN0IHJhdGlvLiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwIC8gNzEpIHtcbiAgLm5leHRUZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XG5cbi5ibHVlRm9udCB7XG4gIGNvbG9yOiB2YXIoLS1rb211bmF0LWJsdWUpOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/share/share.page.ts":
/*!*************************************!*\
  !*** ./src/app/share/share.page.ts ***!
  \*************************************/
/*! exports provided: SharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePage", function() { return SharePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var SharePage = /** @class */ (function () {
    function SharePage(route, navCtrl, storage) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.team = [];
        this.result = {};
    }
    SharePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = document.querySelector(".loader");
        this.loader.style.opacity = 0.0;
        this.storage.ready().then(function () {
            _this.storage.get("result").then(function (result) {
                if (!result) {
                }
                else {
                    _this.result = JSON.parse(result);
                    _this.storage.get("team").then(function (team) {
                        if (!result) {
                        }
                        else {
                            _this.team = JSON.parse(team);
                            console.log(_this.team.length);
                        }
                    });
                }
            });
        });
    };
    SharePage.prototype.sendMail = function () {
        console.log("Sending mail");
        this.loader.style.opacity = 1.0;
        var res = {
            receiver: this.email,
            team: this.team,
            result: this.result,
        };
        console.log(res);
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:3000/result/share";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Successfully stored values, continue with animation
            }
        };
        var data = JSON.stringify(res);
        xhr.send(data);
    };
    SharePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.page.html */ "./src/app/share/share.page.html"),
            styles: [__webpack_require__(/*! ./share.page.scss */ "./src/app/share/share.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], SharePage);
    return SharePage;
}());



/***/ })

}]);
//# sourceMappingURL=share-share-module.js.map