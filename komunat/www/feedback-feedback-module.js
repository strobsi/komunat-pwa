(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-feedback-module"],{

/***/ "./src/app/feedback/feedback.module.ts":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.module.ts ***!
  \*********************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback.page */ "./src/app/feedback/feedback.page.ts");







var routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]
    }
];
var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.page.html":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<div class=\"container\">\n    <div class=\"oval\">\n        \n    </div>\n    <ion-card id=\"feedbackFormContainer\">\n        <ion-card-header>\n          <ion-card-title>Feedback</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <form id=\"feedbackForm\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"primary\">Alter</ion-label>\n                  <ion-input [(ngModel)]=\"fAge\" name=\"fAge\" type=\"number\"></ion-input>\n                </ion-item>\n                <br>\n                <ion-radio-group lines=\"full\" [(ngModel)]=\"fGender\" name=\"fGender\">\n                  <ion-list-header>\n                    Geschlecht\n                  </ion-list-header>\n                    <ion-item>\n                      <ion-label>Männlich</ion-label>\n                      <ion-radio value=\"m\"></ion-radio>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Weiblich</ion-label>\n                        <ion-radio value=\"w\"></ion-radio>\n                      </ion-item>\n                    <ion-item>\n                          <ion-label>Divers</ion-label>\n                          <ion-radio value=\"d\"></ion-radio>\n                      </ion-item>\n                </ion-radio-group>\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"primary\">Postleitzahl</ion-label>\n                    <ion-input [(ngModel)]=\"fZip\" name=\"fZip\" type=\"number\"></ion-input>\n                  </ion-item>\n                  <br>\n                  <ion-item>\n                      <ion-label position=\"floating\" color=\"primary\" rows=\"10\">Kommentar</ion-label>\n                      <ion-textarea [(ngModel)]=\"fComment\" name=\"fComment\"></ion-textarea>\n                  </ion-item>\n                  <br>\n                  <br>\n                <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" (click)=\"submitFeedback()\" >Feedback senden</ion-button>\n              </form>\n        </ion-card-content>\n      </ion-card>\n      <!--\n      <ion-card id=\"newsletterFormContainer\">\n          <ion-card-header>\n            <ion-card-title>Newsletter abonnieren</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n              <form id=\"feedbackForm\">\n                  <ion-item>\n                      <ion-label position=\"floating\" color=\"primary\">Email Adresse</ion-label>\n                      <ion-input [(ngModel)]=\"fMail\" name=\"fMail\" type=\"email\"></ion-input>\n                  </ion-item>\n                  <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" (click)=\"submitNewsletter()\" >Newsletter abonnieren</ion-button>\n                </form>\n          </ion-card-content>\n        </ion-card>\n      -->\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/feedback/feedback.page.scss":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: var(--komunat-blue);\n  width: 100%;\n  /* or whatever width you want. */\n  display: inline-block; }\n\n#feedbackFormContainer {\n  margin-top: 12vh;\n  background-color: white; }\n\n#newsletterFormContainer {\n  margin-top: 2vh;\n  background-color: white; }\n\nion-list-header {\n  color: var(--komunat-blue); }\n\nion-radio-group ion-label {\n  font-size: 14px;\n  color: var(--komunat-blue); }\n\nh1, h2, h3, h4, h5, h6 p {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold;\n  margin-bottom: 20px; }\n\n.nextText {\n  position: absolute;\n  top: 50vh;\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center; }\n\n.slim {\n  font-weight: lighter;\n  font-family: 'Source Sans Pro Extra Light', sans-serif; }\n\n.gray {\n  color: #f4f8ff; }\n\n.oval {\n  position: absolute;\n  width: 180vw;\n  height: 50vh;\n  top: 0px;\n  left: 50%;\n  background: #74c5ed;\n  border-radius: 180vw / 50vh;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%); }\n\n/* iPhone 5 \n  You can also target devices with aspect ratio. */\n\n@media screen and (device-aspect-ratio: 40 / 71) {\n  .nextText {\n    position: absolute;\n    top: 40vh;\n    width: 100%;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-align: center; } }\n\n.blueFont {\n  color: var(--komunat-blue); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL2tvbXVuYXQtcHdhL2tvbXVuYXQvc3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFDQUFvQztFQUNwQyxXQUFVO0VBQUUsZ0NBQUE7RUFDWixxQkFBcUIsRUFBQTs7QUFHdEI7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0MsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLDBCQUEwQixFQUFBOztBQUU1QjtFQUNJLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFHN0I7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixtQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFdBQVc7RUFDWCxrQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdyQjtFQUNFLG9CQUFvQjtFQUNwQixzREFBc0QsRUFBQTs7QUFFeEQ7RUFDRSxjQUNGLEVBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixRQUFPO0VBQ1AsU0FBUTtFQUNSLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFFM0Isc0NBQThCO1VBQTlCLDhCQUE4QixFQUFBOztBQUc5QjtrRENQOEM7O0FEU2hEO0VBQ0U7SUFDQyxrQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFdBQVc7SUFDWCxrQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBLEVBQ25COztBQUVEO0VBQ0UsMEJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0ta29tdW5hdC1ibHVlKTtcbiAgICB3aWR0aDoxMDAlOyAvKiBvciB3aGF0ZXZlciB3aWR0aCB5b3Ugd2FudC4gKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICB9XG4gIFxuICAgI2ZlZWRiYWNrRm9ybUNvbnRhaW5lcntcbiAgICAgbWFyZ2luLXRvcDogMTJ2aDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICB9ICAgXG5cbiAgICNuZXdzbGV0dGVyRm9ybUNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH0gICBcblxuICBpb24tbGlzdC1oZWFkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1rb211bmF0LWJsdWUpXG4gIH1cbiAgaW9uLXJhZGlvLWdyb3VwIGlvbi1sYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1rb211bmF0LWJsdWUpXG4gIH1cblxuICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiBwe1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgIG1hcmdpbi1ib3R0b206MjBweDtcbiAgIH1cbiAgXG4gICAubmV4dFRleHQge1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHRvcDo1MHZoO1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH1cbiAgXG4gIC5zbGltIHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybyBFeHRyYSBMaWdodCcsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmdyYXkge1xuICAgIGNvbG9yOiAjZjRmOGZmXG4gIH1cbiAgXG4gIC5vdmFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE4MHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB0b3A6MHB4O1xuICAgIGxlZnQ6NTAlO1xuICAgIGJhY2tncm91bmQ6ICM3NGM1ZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTgwdncgLyA1MHZoO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB9XG4gIFxuICAgIC8qIGlQaG9uZSA1IFxuICBZb3UgY2FuIGFsc28gdGFyZ2V0IGRldmljZXMgd2l0aCBhc3BlY3QgcmF0aW8uICovICAgICAgICAgICAgICAgICAgICAgICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwLzcxKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgLm5leHRUZXh0IHtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICB0b3A6NDB2aDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICB9ICAgICAgICAgIFxuICAgfVxuICAgLmJsdWVGb250IHtcbiAgICAgY29sb3I6dmFyKC0ta29tdW5hdC1ibHVlKTtcbiAgIH1cblxuXG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta29tdW5hdC1ibHVlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIG9yIHdoYXRldmVyIHdpZHRoIHlvdSB3YW50LiAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuI2ZlZWRiYWNrRm9ybUNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEydmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbiNuZXdzbGV0dGVyRm9ybUNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLWtvbXVuYXQtYmx1ZSk7IH1cblxuaW9uLXJhZGlvLWdyb3VwIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWtvbXVuYXQtYmx1ZSk7IH1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5uZXh0VGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnNsaW0ge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8gRXh0cmEgTGlnaHQnLCBzYW5zLXNlcmlmOyB9XG5cbi5ncmF5IHtcbiAgY29sb3I6ICNmNGY4ZmY7IH1cblxuLm92YWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxODB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICB0b3A6IDBweDtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjNzRjNWVkO1xuICBib3JkZXItcmFkaXVzOiAxODB2dyAvIDUwdmg7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTsgfVxuXG4vKiBpUGhvbmUgNSBcbiAgWW91IGNhbiBhbHNvIHRhcmdldCBkZXZpY2VzIHdpdGggYXNwZWN0IHJhdGlvLiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwIC8gNzEpIHtcbiAgLm5leHRUZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XG5cbi5ibHVlRm9udCB7XG4gIGNvbG9yOiB2YXIoLS1rb211bmF0LWJsdWUpOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/feedback/feedback.page.ts":
/*!*******************************************!*\
  !*** ./src/app/feedback/feedback.page.ts ***!
  \*******************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.fAge = "";
        this.fZip = "";
        this.fMail = "";
        this.fComment = "";
        this.fGender = "";
    }
    FeedbackPage.prototype.ngOnInit = function () {
    };
    FeedbackPage.prototype.submitFeedback = function () {
        var _this = this;
        console.log("Feedback");
        var xhr = new XMLHttpRequest();
        var url = "https://komunat.de/api/feedback";
        var f = {
            age: this.fAge,
            zip: this.fZip,
            gender: this.fGender,
            comment: this.fComment
        };
        var data = JSON.stringify(f);
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    alert("Vielen Dank für dein Feedback!");
                    _this.navCtrl.back();
                }
                else {
                    alert("Ups, da ging was schief");
                    _this.navCtrl.back();
                }
            }
        };
        xhr.send(data);
    };
    FeedbackPage.prototype.submitNewsletter = function () {
        var xhr = new XMLHttpRequest();
        var url = "https://komunat.de/api/newsletter";
        var f = {
            mail: this.fMail
        };
        var data = JSON.stringify(f);
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Vielen Dank, du wurdest unserem Newsletter hinzugefügt");
            }
        };
        xhr.send(data);
    };
    FeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.page.html */ "./src/app/feedback/feedback.page.html"),
            styles: [__webpack_require__(/*! ./feedback.page.scss */ "./src/app/feedback/feedback.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], FeedbackPage);
    return FeedbackPage;
}());



/***/ })

}]);
//# sourceMappingURL=feedback-feedback-module.js.map