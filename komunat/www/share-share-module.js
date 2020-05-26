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

module.exports = "<ion-content padding>\n  <div class=\"container\">\n  <h4>Wie geht es weiter?</h4>\n  <p>\n    1. Eine Woche vor der Wahl bekommst du deine <b>Stimmzettel per Post</b> zugeschickt.\n  </p>\n  <p>\n      2. Lege dein <b>KOMUNAT-Ergebnis mit deinen Top-20 KandidatInnen</b> auf die eine Seite neben dich und deine Stimmzettel auf die andere. \n  </p>\n  <p>\n      3. Gehe alle 20 KandidatInnen einen nach dem anderen durch und suche sie auf einer der 20 Listen. <b>Trage in das Kästchen hinter dem Namen jeweils die Zahl \"3\" ein.</b>\n  </p>\n  <p>\n      4. Am <b>26.05.2019 gehst du in dein Wahllokal.</b> Folgendes musst du mitnehmen: Die ausgefüllten Stimmzettel, deinen Ausweis und deine Wahlbenachrichtigung auf der du den Standort deines Wahllokals findest.\n  </p>\n  <p>\n      5. Dann wirfst du deine <b>Stimmzettel in die Wahlurne und hast gewählt!</b>\n  </p>\n  <ion-button (click) =\"download()\" color=\"primary\" expand=\"block\" class=\"goBtn\"><b>Ergebnis herunterladen</b></ion-button>\n  <br>\n  <ion-button (click) =\"feedback()\" color=\"primary\" fill=\"outline\" expand=\"block\" class=\"goBtn\">\n      <ion-icon slot=\"start\" name=\"heart-empty\"></ion-icon>\n      <b>Bewerte den Komunat</b></ion-button>\n</div>\n<!--      \n  <h2>Lade dein Ergebnis herunter und geh wählen!</h2>\n      <ion-button href=\"http://komunat.de\" color=\"light\" expand=\"block\" class=\"goBtn\">Neue Runde</ion-button>\n      <ion-button (click) =\"feedback()\" color=\"light\" expand=\"block\" class=\"goBtn\">Feedback geben</ion-button>\n  <div class=\"spinner\" [style.display]=\"spinnerVisible ? 'block' : 'none'\">\n      <div class=\"cube1\"></div>\n      <div class=\"cube2\"></div>\n    </div>\n  -->\n</ion-content>"

/***/ }),

/***/ "./src/app/share/share.page.scss":
/*!***************************************!*\
  !*** ./src/app/share/share.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  margin-top: 10vh;\n  margin-left: 10px;\n  margin-right: 10px; }\n\nh4 {\n  color: black;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold; }\n\np {\n  color: var(--komunat-gray-dark); }\n\n.nextText {\n  position: absolute;\n  top: 30vh;\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center; }\n\n.slim {\n  font-weight: lighter;\n  font-family: 'Source Sans Pro Extra Light', sans-serif; }\n\n.gray {\n  color: #f4f8ff; }\n\n/* iPhone 5 \nYou can also target devices with aspect ratio. */\n\n@media screen and (device-aspect-ratio: 40 / 71) {\n  .nextText {\n    position: absolute;\n    top: 40vh;\n    width: 100%;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-align: center; } }\n\n.blueFont {\n  color: var(--komunat-blue); }\n\n.spinner {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  margin-left: -30px; }\n\n.cube1, .cube2 {\n  background-color: var(--komunat-gray-dark);\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n  animation: sk-cubemove 1.8s infinite ease-in-out; }\n\n.cube2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL3RlYW10b21vcnJvdy9rb211bmF0LXB3YS9rb211bmF0L3NyYy9hcHAvc2hhcmUvc2hhcmUucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZS9zaGFyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQUE7O0FBRWpCO0VBQ0MsWUFBVztFQUNaLDBDQUEwQztFQUMxQyxpQkFBaUIsRUFBQTs7QUFHbEI7RUFDRSwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFdBQVc7RUFDWCxrQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdyQjtFQUNFLG9CQUFvQjtFQUNwQixzREFBc0QsRUFBQTs7QUFFeEQ7RUFDRSxjQUNGLEVBQUE7O0FBQ0U7Z0RDSDhDOztBREtoRDtFQUNFO0lBQ0Msa0JBQWtCO0lBQ2xCLFNBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNuQjs7QUFFRDtFQUNFLDBCQUF5QixFQUFBOztBQUc1QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQU87RUFDUCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsMENBQXlDO0VBQ3pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asd0RBQXdEO0VBQ3hELGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRTtJQUFNLDZEQUE2RCxFQUFBO0VBQ25FO0lBQU0sb0VBQW9FLEVBQUE7RUFDMUU7SUFBTSw4RUFBOEUsRUFBQTtFQUNwRjtJQUFPLGtDQUFrQyxFQUFBLEVBQUE7O0FBRzNDO0VBQ0U7SUFDRSxxREFBcUQ7SUFDckQsNkRBQTZELEVBQUE7RUFDN0Q7SUFDQSw0REFBNEQ7SUFDNUQsb0VBQW9FLEVBQUE7RUFDcEU7SUFDQSw0REFBNEQ7SUFDNUQsb0VBQW9FLEVBQUE7RUFDcEU7SUFDQSxzRUFBc0U7SUFDdEUsOEVBQThFLEVBQUE7RUFDOUU7SUFDQSwwQkFBMEI7SUFDMUIsa0NBQWtDLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL3NoYXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDoxMHZoO1xuICBtYXJnaW4tbGVmdDoxMHB4O1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiB9XG4gIGg0IHtcbiAgIGNvbG9yOmJsYWNrO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuIH1cblxuIHAge1xuICAgY29sb3I6IHZhcigtLWtvbXVuYXQtZ3JheS1kYXJrKVxuIH1cblxuIC5uZXh0VGV4dCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6MzB2aDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cblxuLnNsaW0ge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8gRXh0cmEgTGlnaHQnLCBzYW5zLXNlcmlmO1xufVxuLmdyYXkge1xuICBjb2xvcjogI2Y0ZjhmZlxufVxuICAvKiBpUGhvbmUgNSBcbllvdSBjYW4gYWxzbyB0YXJnZXQgZGV2aWNlcyB3aXRoIGFzcGVjdCByYXRpby4gKi8gICAgICAgICAgICAgICAgICAgICAgIFxuQG1lZGlhIHNjcmVlbiBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwLzcxKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIC5uZXh0VGV4dCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6NDB2aDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH0gICAgICAgICAgXG4gfVxuIC5ibHVlRm9udCB7XG4gICBjb2xvcjp2YXIoLS1rb211bmF0LWJsdWUpO1xuIH1cblxuLnNwaW5uZXIge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDoyMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xufVxuXG4uY3ViZTEsIC5jdWJlMiB7XG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0ta29tdW5hdC1ncmF5LWRhcmspO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVtb3ZlIDEuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmN1YmUyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZW1vdmUge1xuICAyNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpIH1cbiAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZykgfVxuICA3NSUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSkgfVxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSB9XG59XG5cbkBrZXlmcmFtZXMgc2stY3ViZW1vdmUge1xuICAyNSUgeyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICB9IDUwJSB7IFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTc5ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTc5ZGVnKTtcbiAgfSA1MC4xJSB7IFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgfSA3NSUgeyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcbiAgfSAxMDAlIHsgXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuaDQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxucCB7XG4gIGNvbG9yOiB2YXIoLS1rb211bmF0LWdyYXktZGFyayk7IH1cblxuLm5leHRUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uc2xpbSB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybyBFeHRyYSBMaWdodCcsIHNhbnMtc2VyaWY7IH1cblxuLmdyYXkge1xuICBjb2xvcjogI2Y0ZjhmZjsgfVxuXG4vKiBpUGhvbmUgNSBcbllvdSBjYW4gYWxzbyB0YXJnZXQgZGV2aWNlcyB3aXRoIGFzcGVjdCByYXRpby4gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKSB7XG4gIC5uZXh0VGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxuXG4uYmx1ZUZvbnQge1xuICBjb2xvcjogdmFyKC0ta29tdW5hdC1ibHVlKTsgfVxuXG4uc3Bpbm5lciB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4OyB9XG5cbi5jdWJlMSwgLmN1YmUyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta29tdW5hdC1ncmF5LWRhcmspO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVtb3ZlIDEuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDsgfVxuXG4uY3ViZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVtb3ZlIHtcbiAgMjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpOyB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZyk7IH1cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgc2stY3ViZW1vdmUge1xuICAyNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7IH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE3OWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE3OWRlZyk7IH1cbiAgNTAuMSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTsgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7IH0gfVxuIl19 */"

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
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-analytics/ngx */ "./node_modules/@ionic-native/google-analytics/ngx/index.js");






var SharePage = /** @class */ (function () {
    function SharePage(navCtrl, storage, ga, platform, alertController) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.ga = ga;
        this.platform = platform;
        this.alertController = alertController;
        this.team = [];
        this.matches = [];
        this.result = { values: [], contents: [] };
        this.pdfObj = null;
        this.spinnerVisible = false;
    }
    SharePage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is("ios")) {
                var container = document.querySelector(".container");
                container.setAttribute("style", "margin-top: 5vh;");
            }
            _this.presentAlertConfirm();
            _this.ga
                .trackView("share")
                .then(function () {
                _this.ga.trackEvent("userflow", "Reached Share").then(function () { });
            })
                .catch(function (e) { return console.log(e); });
        });
        this.spinnerVisible = false;
        this.storage.ready().then(function () {
            _this.storage.get("result").then(function (result) {
                if (!result) {
                    console.log("error reading");
                }
                else {
                    _this.result = JSON.parse(result);
                    _this.storage.get("team").then(function (team) {
                        if (!result) {
                            console.log("error reading 2");
                        }
                        else {
                            _this.matches = JSON.parse(team);
                        }
                    });
                }
            });
        });
    };
    SharePage.prototype.feedback = function () {
        var navigationExtras = {
            queryParams: {},
        };
        this.navCtrl.navigateForward(["feedback"], navigationExtras);
    };
    SharePage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Feedback?",
                            message: "Willst du uns noch ein kurzes Feedback da lassen, damit wir uns für das nächste mal verbessern können?",
                            buttons: [
                                {
                                    text: "Nein, kein Feedback",
                                    role: "cancel",
                                    cssClass: "secondary",
                                    handler: function (blah) { },
                                },
                                {
                                    text: "Ja, gerne",
                                    handler: function () {
                                        _this.feedback();
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SharePage.prototype.download = function () {
        this.spinnerVisible = true;
        this.generatePdf();
    };
    SharePage.prototype.generatePdf = function () {
        /*
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        var docDefinition = {
            content: [
              { text: 'KOMUNAT - Ergebnis', style: 'header' },
              { text: new Date().toJSON().slice(0,10).replace(/-/g,'-') , alignment: 'right' },
       
              { text: 'Deine Ergebnisse', style: 'subheader' },
              { text: "Hier werden deine Ergebnisse, sowie die deines Teams (Top 20 KandidatInnen) angezeigt" },
       
              { text: 'Werte', style: 'subheader' },
              {
                table: {
                  body: [
                    ['Ranking', 'Wert',"Inhalt"],
                  ]
                },
                pageBreak: 'after',
              },
            ],
            styles: {
              header: {
                fontSize: 18,
                bold: true,
              },
              subheader: {
                fontSize: 14,
                bold: true,
                margin: [0, 15, 0, 0]
              }
            }
          }
          
      
          for(var i = 0; i < this.result.contents.length; i++) {
            if(i >= 12) {
              docDefinition.content[5].table.body.push(
                [ ""+this.increase(i), "" ,this.result.contents[i].name],
                )
            } else {
            docDefinition.content[5].table.body.push(
              [ ""+this.increase(i), this.result.values[i].name ,this.result.contents[i].name],
              )
            }
          }
    
          for(var x = 0; x < 20; x++) {
    
              this.matches[x].values.sort(function (a, b) {
                a.rating = a.rating
                b.rating = b.rating
                if (a.rating < b.rating) {
                  return 1;
                }
                if (a.rating > b.rating) {
                  return -1;
                }
                return 0;
              });
    
              this.matches[x].contents.sort(function (a, b) {
                a.rating = a.rating
                b.rating = b.rating
                if (a.rating < b.rating) {
                  return 1;
                }
                if (a.rating > b.rating) {
                  return -1;
                }
                return 0;
              });
    
              var t =  { text: this.matches[x].name+"\n\n", style: 'subheader' }
              var m = { text: this.matches[x].motto+"\n\n" }
              var list = this.getList(parseInt(this.matches[x].list,10));
              var district = this.getDistrict(parseInt(this.matches[x].district,10));
              var d = {
                    text: "",
                    alignment: 'justify',
                    columns: [
                      {
                        text:"Liste: " + list
                      },
                      {
                        text:"Listenplatz: " + this.matches[x].list_number
                      },
                      {
                        text:"Wahlbezirk: " + district +"\n\n"
                      }
                    ]
              }
    
              var ta = {
                table: {
                  body: [
                    ['Ranking', 'Wert',"Inhalt"],
                  ]
                },
                pageBreak: 'after',
              }
              
          
            for(var i = 0; i < this.matches[x].contents.length; i++) {
              if(i >= 12) {
                ta.table.body.push(
                  [ ""+this.increase(i), "" ,this.matches[x].contents[i].name],
                  )
              } else {
                ta.table.body.push(
                [ ""+this.increase(i), this.matches[x].values[i].name, this.matches[x].contents[i].name],
                )
              }
            }
            docDefinition.content.push(t);
            docDefinition.content.push(m);
            docDefinition.content.push(d);
            docDefinition.content.push(ta);
          }
          this.pdfObj = pdfMake.createPdf(docDefinition).download("Komunat.pdf");
          this.spinnerVisible = false;
    
    /*
        const div = document.getElementById("teamList");
        const options = {background:"white",height :div.clientHeight , width : div.clientWidth  };
        html2canvas(div,options).then((canvas)=>{
          console.log("Finished rendering")
          var data = canvas.toDataURL();
          var docDefinition = {
              content: [{
                  image: data,
                  width: div.clientWidth,
              }]
          };
          pdfMake.createPdf(docDefinition).download();
        });
        */
    };
    SharePage.prototype.increase = function (i) {
        var iPlus = i + 1;
        return iPlus;
    };
    SharePage.prototype.getList = function (l) {
        switch (l) {
            case 1: {
                return "CDU";
            }
            case 2: {
                return "GRÜNE";
            }
            case 3: {
                return "SPD";
            }
            case 4: {
                return "Freie Wähler";
            }
            case 5: {
                return "FDP";
            }
            case 6: {
                return "SÖS";
            }
            case 7: {
                return "AfD";
            }
            case 8: {
                return "DIE LINKE";
            }
            case 9: {
                return "PIRATEN";
            }
            case 10: {
                return "Stadtisten";
            }
            case 11: {
                return "Junge Liste Stuttgart";
            }
            case 12: {
                return "ÖDP";
            }
            case 13: {
                return "DiB";
            }
            case 14: {
                return "Tierschutzpartei";
            }
            case 15: {
                return "Die PARTEI";
            }
            case 16: {
                return "BIG";
            }
            case 17: {
                return "SchUB";
            }
            case 18: {
                return "BZS23";
            }
            case 19: {
                return "Kein Fahrverbot in Stuttgart";
            }
            case 20: {
                return "FeLi";
            }
        }
    };
    SharePage.prototype.getDistrict = function (l) {
        switch (l) {
            case 1: {
                return "Mitte";
            }
            case 2: {
                return "Nord";
            }
            case 3: {
                return "Ost";
            }
            case 4: {
                return "Süd";
            }
            case 5: {
                return "West";
            }
            case 6: {
                return "Bad Cannstatt";
            }
            case 7: {
                return "Birkach";
            }
            case 8: {
                return "Botnang";
            }
            case 9: {
                return "Degerloch";
            }
            case 10: {
                return "Feuerbach";
            }
            case 11: {
                return "Hedelfingen";
            }
            case 12: {
                return "Möhringen";
            }
            case 13: {
                return "Mühlhausen";
            }
            case 14: {
                return "Münster";
            }
            case 15: {
                return "Obertürkheim";
            }
            case 16: {
                return "Plieningen";
            }
            case 17: {
                return "Sillenbuch";
            }
            case 18: {
                return "Stammheim";
            }
            case 19: {
                return "Untertürkheim";
            }
            case 20: {
                return "Vaihingen";
            }
            case 21: {
                return "Wangen";
            }
            case 22: {
                return "Weilimdorf";
            }
            case 23: {
                return "Zuffenhausen";
            }
        }
    };
    SharePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-share",
            template: __webpack_require__(/*! ./share.page.html */ "./src/app/share/share.page.html"),
            styles: [__webpack_require__(/*! ./share.page.scss */ "./src/app/share/share.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_native_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_4__["GoogleAnalytics"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SharePage);
    return SharePage;
}());



/***/ })

}]);
//# sourceMappingURL=share-share-module.js.map