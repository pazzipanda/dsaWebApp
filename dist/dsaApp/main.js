(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-title></app-title>\n<app-detail-window></app-detail-window>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DSA Solo App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _text_window_text_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-window/text-window.component */ "./src/app/text-window/text-window.component.ts");
/* harmony import */ var _detail_window_detail_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-window/detail-window.component */ "./src/app/detail-window/detail-window.component.ts");
/* harmony import */ var _button_bar_button_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button-bar/button-bar.component */ "./src/app/button-bar/button-bar.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _text_window_text_window_component__WEBPACK_IMPORTED_MODULE_3__["TextWindowComponent"],
                _detail_window_detail_window_component__WEBPACK_IMPORTED_MODULE_4__["DetailWindowComponent"],
                _button_bar_button_bar_component__WEBPACK_IMPORTED_MODULE_5__["ButtonBarComponent"],
                _title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/button-bar/button-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/button-bar/button-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/button-bar/button-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/button-bar/button-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-text-window (notifyButtonBar)=\"showObject($event)\"></app-text-window>\n<div *ngIf=\"details.length\">\n  <div style=\"padding-top:3vh;padding-bottom:1vh;font-size:120%\">\n    Optionen:\n  </div>\n  <table style=\"height:5vh;width:95vw;padding-bottom:1vh\">\n    <tr>\n      <td *ngFor=\"let button of details\">\n        <button style=\"width:100%;height:5vh\" (click)=\"showDetail(button.text)\">\n          {{button.title}}\n        </button>\n      </td>\n    </tr>\n  </table>\n</div>\n<div *ngIf=\"!details.length\" style=\"padding-top:14vh\">\n</div>\n"

/***/ }),

/***/ "./src/app/button-bar/button-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/button-bar/button-bar.component.ts ***!
  \****************************************************/
/*! exports provided: ButtonBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBarComponent", function() { return ButtonBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _object_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object.service */ "./src/app/object.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonBarComponent = /** @class */ (function () {
    function ButtonBarComponent(objectService) {
        this.objectService = objectService;
        this.notifyDetailWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonBarComponent.prototype.ngOnInit = function () {
        this.details = [];
    };
    ButtonBarComponent.prototype.showDetail = function (detail) {
        this.notifyDetailWindow.emit(detail);
    };
    ButtonBarComponent.prototype.showObject = function (object) {
        this.details = object.details;
        this.notifyDetailWindow.emit('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ButtonBarComponent.prototype, "notifyDetailWindow", void 0);
    ButtonBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-bar',
            template: __webpack_require__(/*! ./button-bar.component.html */ "./src/app/button-bar/button-bar.component.html"),
            styles: [__webpack_require__(/*! ./button-bar.component.css */ "./src/app/button-bar/button-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_object_service__WEBPACK_IMPORTED_MODULE_1__["ObjectService"]])
    ], ButtonBarComponent);
    return ButtonBarComponent;
}());



/***/ }),

/***/ "./src/app/detail-window/detail-window.component.css":
/*!***********************************************************!*\
  !*** ./src/app/detail-window/detail-window.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/detail-window/detail-window.component.html":
/*!************************************************************!*\
  !*** ./src/app/detail-window/detail-window.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-button-bar (notifyDetailWindow)=\"showDetail($event)\"></app-button-bar>\n<div style=\"height:25vh;overflow:auto;\">\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/detail-window/detail-window.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/detail-window/detail-window.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailWindowComponent", function() { return DetailWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailWindowComponent = /** @class */ (function () {
    function DetailWindowComponent() {
    }
    DetailWindowComponent.prototype.ngOnInit = function () {
    };
    DetailWindowComponent.prototype.showDetail = function (detailText) {
        this.text = detailText;
    };
    DetailWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-window',
            template: __webpack_require__(/*! ./detail-window.component.html */ "./src/app/detail-window/detail-window.component.html"),
            styles: [__webpack_require__(/*! ./detail-window.component.css */ "./src/app/detail-window/detail-window.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailWindowComponent);
    return DetailWindowComponent;
}());



/***/ }),

/***/ "./src/app/object.service.ts":
/*!***********************************!*\
  !*** ./src/app/object.service.ts ***!
  \***********************************/
/*! exports provided: ObjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectService", function() { return ObjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ObjectService = /** @class */ (function () {
    function ObjectService() {
        //test data
        this.text = 'Hier könnte ihre Werbung stehen';
        this.det1 = { title: 'Test 1', text: 'Blah 1' };
        this.det2 = { title: 'Test 2', text: 'Blah 2' };
        this.det3 = { title: 'Test 3', text: 'Blah 3' };
        this.DETAILS = [this.det1, this.det2, this.det3];
    }
    ObjectService.prototype.getDetail = function () {
        return this.DETAILS;
    };
    ObjectService.prototype.showDetail = function (detail) {
        this.text = detail.text;
    };
    ObjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ObjectService);
    return ObjectService;
}());



/***/ }),

/***/ "./src/app/scene.service.ts":
/*!**********************************!*\
  !*** ./src/app/scene.service.ts ***!
  \**********************************/
/*! exports provided: SceneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneService", function() { return SceneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SceneService = /** @class */ (function () {
    function SceneService() {
        this.testDetail1 = { title: 'Ansehen', text: 'Die Truhe ist etwa einen halben Schritt breit, halb so tief aber dafür fast genau so hoch. Die Bretter sind aus robustem Holz, das die Jahre gut überstanden hat. Scharniere und Schloss sind aus massivem Eisen.' };
        this.testDetail2 = { title: 'Öffnen', text: 'Erst denkst du, die Truhe sei verschlossen. Nach einem kräftigen Ruck merkst du aber, dass die Scharniere einfach nur verrostet waren. Als du die Truhe mühsam geöffnet hast merkst du allerdings, dass sie, bis auf ein paar Spinnweben, leer ist.' };
        this.testDetail3 = { title: 'Mitnehmen', text: 'Dafür ist die Truhe nun leider doch ein wenig zu schwer.' };
        this.testObject1 = {
            text: 'Als du den Keller betrittst findest di vor allem eines: Viel Platz. Keine Regale, keine Schränke, so gut wie gar nichts  findest du hier vor. Nur an der der Treppe gegenüberliegenden Wand siehst du eine ',
            details: []
        };
        this.testObject2 = {
            text: 'staubige Truhe ',
            details: [this.testDetail1, this.testDetail2, this.testDetail3]
        };
        this.testObject3 = {
            text: 'vor dir stehen.',
            details: []
        };
        this.currentScene = {
            title: 'Kellerraum',
            text: [this.testObject1, this.testObject2, this.testObject3]
        };
    }
    SceneService.prototype.getScene = function () {
        return this.currentScene;
    };
    SceneService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SceneService);
    return SceneService;
}());



/***/ }),

/***/ "./src/app/text-window/text-window.component.css":
/*!*******************************************************!*\
  !*** ./src/app/text-window/text-window.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/text-window/text-window.component.html":
/*!********************************************************!*\
  !*** ./src/app/text-window/text-window.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:45vh;overflow:auto;\">\n  <a *ngFor=\"let object of currentScene.text\" (click)=\"lookAtObject(object)\">{{object.text}}</a>\n</div>\n"

/***/ }),

/***/ "./src/app/text-window/text-window.component.ts":
/*!******************************************************!*\
  !*** ./src/app/text-window/text-window.component.ts ***!
  \******************************************************/
/*! exports provided: TextWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWindowComponent", function() { return TextWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scene_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene.service */ "./src/app/scene.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextWindowComponent = /** @class */ (function () {
    function TextWindowComponent(sceneService) {
        this.sceneService = sceneService;
        this.notifyButtonBar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TextWindowComponent.prototype.ngOnInit = function () {
        this.currentScene = this.sceneService.getScene();
    };
    TextWindowComponent.prototype.lookAtObject = function (object) {
        this.notifyButtonBar.emit(object);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TextWindowComponent.prototype, "notifyButtonBar", void 0);
    TextWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-window',
            template: __webpack_require__(/*! ./text-window.component.html */ "./src/app/text-window/text-window.component.html"),
            styles: [__webpack_require__(/*! ./text-window.component.css */ "./src/app/text-window/text-window.component.css")]
        }),
        __metadata("design:paramtypes", [_scene_service__WEBPACK_IMPORTED_MODULE_1__["SceneService"]])
    ], TextWindowComponent);
    return TextWindowComponent;
}());



/***/ }),

/***/ "./src/app/title/title.component.css":
/*!*******************************************!*\
  !*** ./src/app/title/title.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/title/title.component.html":
/*!********************************************!*\
  !*** ./src/app/title/title.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:0px\">\n  <h2>\n    {{title}}\n  </h2>\n</div>\n"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scene_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene.service */ "./src/app/scene.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitleComponent = /** @class */ (function () {
    function TitleComponent(sceneService) {
        this.sceneService = sceneService;
    }
    TitleComponent.prototype.ngOnInit = function () {
        this.getTitle();
    };
    TitleComponent.prototype.getTitle = function () {
        this.title = this.sceneService.getScene().title;
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.css */ "./src/app/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [_scene_service__WEBPACK_IMPORTED_MODULE_1__["SceneService"]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programmierung\DSANeu\dsaApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map