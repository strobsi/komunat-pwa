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

module.exports = "<ion-content overflow-scroll=\"false\">\n<div class=\"container\" overflow-scroll=\"false\">\n    <div class=\"oval\">\n        \n    </div>\n    <ion-card id=\"feedbackFormContainer\">\n        <ion-card-header>\n          <ion-card-title>Kurzes Feedback</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <form id=\"feedbackForm\">\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"primary\">Alter</ion-label>\n                  <ion-input [(ngModel)]=\"fAge\" name=\"fAge\" type=\"number\"></ion-input>\n                </ion-item>\n                <br>\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"primary\">Postleitzahl</ion-label>\n                    <ion-input [(ngModel)]=\"fZip\" name=\"fZip\" type=\"number\"></ion-input>\n                  </ion-item>\n                  <br>\n                  <ion-item>\n                      <ion-label position=\"floating\" color=\"primary\" rows=\"10\">Kommentar</ion-label>\n                      <ion-textarea [(ngModel)]=\"fComment\" name=\"fComment\"></ion-textarea>\n                  </ion-item>\n                  <br>\n                  <br>\n                <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" (click)=\"submitFeedback()\" >Feedback senden</ion-button>\n              </form>\n        </ion-card-content>\n      </ion-card>\n      <ion-card id=\"newsletterFormContainer\">\n          <ion-card-header>\n            <ion-card-title>Newsletter abonnieren</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n              <form id=\"feedbackForm\">\n                  <ion-item>\n                      <ion-label position=\"floating\" color=\"primary\">Email Adresse</ion-label>\n                      <ion-input [(ngModel)]=\"fMail\" name=\"fMail\" type=\"email\"></ion-input>\n                  </ion-item>\n                  <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" (click)=\"submitNewsletter()\" >Newsletter abonnieren</ion-button>\n                </form>\n          </ion-card-content>\n        </ion-card>\n\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/feedback/feedback.page.scss":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: var(--komunat-blue);\n  width: 100%;\n  /* or whatever width you want. */\n  display: inline-block; }\n\n#feedbackFormContainer {\n  margin-top: 12vh;\n  background-color: white; }\n\n#newsletterFormContainer {\n  margin-top: 2vh;\n  background-color: white; }\n\nh1, h2, h3, h4, h5, h6 p {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold;\n  margin-bottom: 20px; }\n\n.nextText {\n  position: absolute;\n  top: 50vh;\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center; }\n\n.slim {\n  font-weight: lighter;\n  font-family: 'Source Sans Pro Extra Light', sans-serif; }\n\n.gray {\n  color: #f4f8ff; }\n\n.oval {\n  position: absolute;\n  width: 180vw;\n  height: 50vh;\n  top: 0px;\n  left: 50%;\n  background: #74c5ed;\n  border-radius: 180vw / 50vh;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%); }\n\n/* iPhone 5 \n  You can also target devices with aspect ratio. */\n\n@media screen and (device-aspect-ratio: 40 / 71) {\n  .nextText {\n    position: absolute;\n    top: 40vh;\n    width: 100%;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-align: center; } }\n\n.blueFont {\n  color: var(--komunat-blue); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL2tvbXVuYXQtcHdhL2tvbXVuYXQvc3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFDQUFvQztFQUNwQyxXQUFVO0VBQUUsZ0NBQUE7RUFDWixxQkFBcUIsRUFBQTs7QUFHdEI7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0MsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUd4QjtFQUNFLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLG1CQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsV0FBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3JCO0VBQ0Usb0JBQW9CO0VBQ3BCLHNEQUFzRCxFQUFBOztBQUV4RDtFQUNFLGNBQ0YsRUFBQTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFFBQU87RUFDUCxTQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUUzQixzQ0FBOEI7VUFBOUIsOEJBQThCLEVBQUE7O0FBRzlCO2tEQ044Qzs7QURRaEQ7RUFDRTtJQUNDLGtCQUFrQjtJQUNsQixTQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUEsRUFDbkI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1rb211bmF0LWJsdWUpO1xuICAgIHdpZHRoOjEwMCU7IC8qIG9yIHdoYXRldmVyIHdpZHRoIHlvdSB3YW50LiAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIH1cbiAgXG4gICAjZmVlZGJhY2tGb3JtQ29udGFpbmVye1xuICAgICBtYXJnaW4tdG9wOiAxMnZoO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgIH0gICBcblxuICAgI25ld3NsZXR0ZXJGb3JtQ29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfSAgIFxuXG4gICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHB7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgfVxuICBcbiAgIC5uZXh0VGV4dCB7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgdG9wOjUwdmg7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgfVxuICBcbiAgLnNsaW0ge1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvIEV4dHJhIExpZ2h0Jywgc2Fucy1zZXJpZjtcbiAgfVxuICAuZ3JheSB7XG4gICAgY29sb3I6ICNmNGY4ZmZcbiAgfVxuICBcbiAgLm92YWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTgwdnc7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHRvcDowcHg7XG4gICAgbGVmdDo1MCU7XG4gICAgYmFja2dyb3VuZDogIzc0YzVlZDtcbiAgICBib3JkZXItcmFkaXVzOiAxODB2dyAvIDUwdmg7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIH1cbiAgXG4gICAgLyogaVBob25lIDUgXG4gIFlvdSBjYW4gYWxzbyB0YXJnZXQgZGV2aWNlcyB3aXRoIGFzcGVjdCByYXRpby4gKi8gICAgICAgICAgICAgICAgICAgICAgIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAvNzEpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAubmV4dFRleHQge1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHRvcDo0MHZoO1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH0gICAgICAgICAgXG4gICB9XG4gICAuYmx1ZUZvbnQge1xuICAgICBjb2xvcjp2YXIoLS1rb211bmF0LWJsdWUpO1xuICAgfVxuXG5cbiIsIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb211bmF0LWJsdWUpO1xuICB3aWR0aDogMTAwJTtcbiAgLyogb3Igd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQuICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4jZmVlZGJhY2tGb3JtQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTJ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuI25ld3NsZXR0ZXJGb3JtQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLm5leHRUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uc2xpbSB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybyBFeHRyYSBMaWdodCcsIHNhbnMtc2VyaWY7IH1cblxuLmdyYXkge1xuICBjb2xvcjogI2Y0ZjhmZjsgfVxuXG4ub3ZhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE4MHZ3O1xuICBoZWlnaHQ6IDUwdmg7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQ6ICM3NGM1ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE4MHZ3IC8gNTB2aDtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpOyB9XG5cbi8qIGlQaG9uZSA1IFxuICBZb3UgY2FuIGFsc28gdGFyZ2V0IGRldmljZXMgd2l0aCBhc3BlY3QgcmF0aW8uICovXG5AbWVkaWEgc2NyZWVuIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSkge1xuICAubmV4dFRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cblxuLmJsdWVGb250IHtcbiAgY29sb3I6IHZhcigtLWtvbXVuYXQtYmx1ZSk7IH1cbiJdfQ== */"

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
    }
    FeedbackPage.prototype.ngOnInit = function () {
    };
    FeedbackPage.prototype.submitFeedback = function () {
        console.log("Feedback");
        alert(this.fAge);
        alert(this.fZip);
        alert(this.fComment);
    };
    FeedbackPage.prototype.submitNewsletter = function () {
        console.log("Newsletter");
        alert(this.fMail);
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