(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loading-loading-module"],{

/***/ "./src/app/loading/loading.module.ts":
/*!*******************************************!*\
  !*** ./src/app/loading/loading.module.ts ***!
  \*******************************************/
/*! exports provided: LoadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function() { return LoadingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading.page */ "./src/app/loading/loading.page.ts");







var routes = [
    {
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]
    }
];
var LoadingPageModule = /** @class */ (function () {
    function LoadingPageModule() {
    }
    LoadingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]]
        })
    ], LoadingPageModule);
    return LoadingPageModule;
}());



/***/ }),

/***/ "./src/app/loading/loading.page.html":
/*!*******************************************!*\
  !*** ./src/app/loading/loading.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"oval\">\n        \n    </div>\n    <div class=\"nextText\">\n        <p class=\"gray slim\">Geschafft!</p>\n        <br>\n        <h2>Schau dir jetzt dein Team für den Gemeinderat genauer an.</h2>\n        </div>\n    <div class=\"spinner\">\n        <div class=\"cube1\"></div>\n        <div class=\"cube2\"></div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/loading/loading.page.scss":
/*!*******************************************!*\
  !*** ./src/app/loading/loading.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: var(--komunat-blue);\n  height: 100vh;\n  max-height: 100vh;\n  width: 100%;\n  /* or whatever width you want. */\n  display: inline-block; }\n\nh1, h2, h3, h4, h5, h6 p {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: bold;\n  margin-bottom: 20px; }\n\n.nextText {\n  position: absolute;\n  top: 50vh;\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center; }\n\n.slim {\n  font-weight: lighter;\n  font-family: 'Source Sans Pro Extra Light', sans-serif; }\n\n.gray {\n  color: #f4f8ff; }\n\n.oval {\n  position: absolute;\n  width: 180vw;\n  height: 50vh;\n  top: 0px;\n  left: 50%;\n  background: #74c5ed;\n  border-radius: 180vw / 50vh;\n  transform: translate(-50%, 0%); }\n\n/* iPhone 5 \n  You can also target devices with aspect ratio. */\n\n@media screen and (device-aspect-ratio: 40 / 71) {\n  .nextText {\n    position: absolute;\n    top: 40vh;\n    width: 100%;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-align: center; } }\n\n.blueFont {\n  color: var(--komunat-blue); }\n\n.spinner {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  margin-left: -30px; }\n\n.cube1, .cube2 {\n  background-color: var(--komunat-gray-dark);\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n  animation: sk-cubemove 1.8s infinite ease-in-out; }\n\n.cube2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdHJvYnNpL1Byb2plY3RzL3RlYW10b21vcnJvdy9rb211bmF0LXB3YS9rb211bmF0L3NyYy9hcHAvbG9hZGluZy9sb2FkaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFDQUFvQztFQUNwQyxhQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVU7RUFBRSxnQ0FBQTtFQUNaLHFCQUFxQixFQUFBOztBQUd0QjtFQUNFLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLG1CQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsV0FBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3JCO0VBQ0Usb0JBQW9CO0VBQ3BCLHNEQUFzRCxFQUFBOztBQUV4RDtFQUNFLGNBQ0YsRUFBQTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFFBQU87RUFDUCxTQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUUzQiw4QkFBOEIsRUFBQTs7QUFJOUI7a0RDTDhDOztBRE9oRDtFQUNFO0lBQ0Msa0JBQWtCO0lBQ2xCLFNBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQSxFQUNuQjs7QUFFRDtFQUNFLDBCQUF5QixFQUFBOztBQUc5QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQU87RUFDUCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsMENBQXlDO0VBQ3pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asd0RBQXdEO0VBQ3hELGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRTtJQUFNLDZEQUE2RCxFQUFBO0VBQ25FO0lBQU0sb0VBQW9FLEVBQUE7RUFDMUU7SUFBTSw4RUFBOEUsRUFBQTtFQUNwRjtJQUFPLGtDQUFrQyxFQUFBLEVBQUE7O0FBRzNDO0VBQ0U7SUFDRSxxREFBcUQ7SUFDckQsNkRBQTZELEVBQUE7RUFDN0Q7SUFDQSw0REFBNEQ7SUFDNUQsb0VBQW9FLEVBQUE7RUFDcEU7SUFDQSw0REFBNEQ7SUFDNUQsb0VBQW9FLEVBQUE7RUFDcEU7SUFDQSxzRUFBc0U7SUFDdEUsOEVBQThFLEVBQUE7RUFDOUU7SUFDQSwwQkFBMEI7SUFDMUIsa0NBQWtDLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0ta29tdW5hdC1ibHVlKTtcbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6MTAwJTsgLyogb3Igd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQuICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgfVxuICBcbiAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYgcHtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICB9XG4gIFxuICAgLm5leHRUZXh0IHtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICB0b3A6NTB2aDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICB9XG5cbiAgLnNsaW0ge1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvIEV4dHJhIExpZ2h0Jywgc2Fucy1zZXJpZjtcbiAgfVxuICAuZ3JheSB7XG4gICAgY29sb3I6ICNmNGY4ZmZcbiAgfVxuXG4gIC5vdmFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE4MHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB0b3A6MHB4O1xuICAgIGxlZnQ6NTAlO1xuICAgIGJhY2tncm91bmQ6ICM3NGM1ZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTgwdncgLyA1MHZoO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB9XG5cbiAgXG4gICAgLyogaVBob25lIDUgXG4gIFlvdSBjYW4gYWxzbyB0YXJnZXQgZGV2aWNlcyB3aXRoIGFzcGVjdCByYXRpby4gKi8gICAgICAgICAgICAgICAgICAgICAgIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAvNzEpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAubmV4dFRleHQge1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHRvcDo0MHZoO1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH0gICAgICAgICAgXG4gICB9XG4gICAuYmx1ZUZvbnQge1xuICAgICBjb2xvcjp2YXIoLS1rb211bmF0LWJsdWUpO1xuICAgfVxuXG4uc3Bpbm5lciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MjAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIH1cbiAgXG4gIC5jdWJlMSwgLmN1YmUyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWtvbXVuYXQtZ3JheS1kYXJrKTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jdWJlbW92ZSAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmN1YmUyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVtb3ZlIHtcbiAgICAyNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpIH1cbiAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKSB9XG4gICAgNzUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpIH1cbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc2stY3ViZW1vdmUge1xuICAgIDI1JSB7IFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICAgIH0gNTAlIHsgXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE3OWRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTc5ZGVnKTtcbiAgICB9IDUwLjElIHsgXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICB9IDc1JSB7IFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcbiAgICB9IDEwMCUgeyBcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICB9XG4gIH0iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta29tdW5hdC1ibHVlKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBvciB3aGF0ZXZlciB3aWR0aCB5b3Ugd2FudC4gKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4ubmV4dFRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5zbGltIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvIEV4dHJhIExpZ2h0Jywgc2Fucy1zZXJpZjsgfVxuXG4uZ3JheSB7XG4gIGNvbG9yOiAjZjRmOGZmOyB9XG5cbi5vdmFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTgwdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZDogIzc0YzVlZDtcbiAgYm9yZGVyLXJhZGl1czogMTgwdncgLyA1MHZoO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7IH1cblxuLyogaVBob25lIDUgXG4gIFlvdSBjYW4gYWxzbyB0YXJnZXQgZGV2aWNlcyB3aXRoIGFzcGVjdCByYXRpby4gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKSB7XG4gIC5uZXh0VGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxuXG4uYmx1ZUZvbnQge1xuICBjb2xvcjogdmFyKC0ta29tdW5hdC1ibHVlKTsgfVxuXG4uc3Bpbm5lciB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4OyB9XG5cbi5jdWJlMSwgLmN1YmUyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta29tdW5hdC1ncmF5LWRhcmspO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVtb3ZlIDEuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDsgfVxuXG4uY3ViZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVtb3ZlIHtcbiAgMjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpOyB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZyk7IH1cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgc2stY3ViZW1vdmUge1xuICAyNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7IH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE3OWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE3OWRlZyk7IH1cbiAgNTAuMSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTsgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/loading/loading.page.ts":
/*!*****************************************!*\
  !*** ./src/app/loading/loading.page.ts ***!
  \*****************************************/
/*! exports provided: LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function() { return LoadingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoadingPage = /** @class */ (function () {
    function LoadingPage(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
    }
    LoadingPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.moveOn();
        }, 2000);
    };
    // Moving on to matches
    LoadingPage.prototype.moveOn = function () {
        console.log("Moving on");
        var navigationExtras = {
            queryParams: {}
        };
        this.navCtrl.navigateForward(['matches'], navigationExtras);
    };
    LoadingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.page.html */ "./src/app/loading/loading.page.html"),
            styles: [__webpack_require__(/*! ./loading.page.scss */ "./src/app/loading/loading.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoadingPage);
    return LoadingPage;
}());



/***/ })

}]);
//# sourceMappingURL=loading-loading-module.js.map