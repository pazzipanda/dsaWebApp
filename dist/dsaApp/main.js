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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-title [childStory]=\"story\"></app-title>\n"

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
/* harmony import */ var _story_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.service */ "./src/app/story.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(storyService) {
        this.storyService = storyService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.story = this.storyService.getStory();
        this.title = this.story.title;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_story_service__WEBPACK_IMPORTED_MODULE_1__["StoryService"]])
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

module.exports = "<div *ngIf=\"details.length\">\n  <div style=\"padding-top:3vh;padding-bottom:1vh;font-size:120%\">\n    Optionen:\n  </div>\n  <table style=\"height:5vh;width:95vw;padding-bottom:1vh\">\n    <tr>\n      <td *ngFor=\"let button of details\">\n        <button style=\"width:100%;height:5vh\" (click)=\"showDetail(button)\">\n          {{button.title}}\n        </button>\n      </td>\n    </tr>\n  </table>\n</div>\n<div *ngIf=\"!details.length\" style=\"padding-top:14vh\">\n</div>\n<app-detail-window [childDetail]=\"currentDetail\" (sceneChange)=\"sceneChange($event)\"></app-detail-window>\n"

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
/* harmony import */ var _models_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/object */ "./src/app/models/object.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = _models_object__WEBPACK_IMPORTED_MODULE_1__["Object"].getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && _models_object__WEBPACK_IMPORTED_MODULE_1__["Object"].defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonBarComponent = /** @class */ (function () {
    function ButtonBarComponent() {
        this.sceneChanger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonBarComponent.prototype.ngOnInit = function () {
    };
    ButtonBarComponent.prototype.ngOnChanges = function () {
        this.details = this.childObject.details;
        this.currentDetail = null;
    };
    ButtonBarComponent.prototype.showDetail = function (detail) {
        this.currentDetail = detail;
    };
    ButtonBarComponent.prototype.sceneChange = function (scene) {
        this.details = [];
        this.sceneChanger.emit(scene);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _models_object__WEBPACK_IMPORTED_MODULE_1__["Object"])
    ], ButtonBarComponent.prototype, "sceneChanger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_object__WEBPACK_IMPORTED_MODULE_1__["Object"])
    ], ButtonBarComponent.prototype, "childObject", void 0);
    ButtonBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-bar',
            template: __webpack_require__(/*! ./button-bar.component.html */ "./src/app/button-bar/button-bar.component.html"),
            styles: [__webpack_require__(/*! ./button-bar.component.css */ "./src/app/button-bar/button-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div style=\"height:25vh;overflow:auto;\">\n  {{text}}\n</div>\n"

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
/* harmony import */ var _models_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/detail */ "./src/app/models/detail.ts");
/* harmony import */ var _story_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../story.service */ "./src/app/story.service.ts");
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
    function DetailWindowComponent(storyService) {
        this.storyService = storyService;
        this.sceneChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DetailWindowComponent.prototype.ngOnInit = function () {
        this.text = '';
    };
    DetailWindowComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.childDetail == null) {
            this.text = '';
        }
        else {
            if (this.childDetail.nextScene === null) {
                //display text or textBool
                if (this.childDetail.bool !== 0 && this.storyService.story.booleans[this.childDetail.bool]) {
                    setTimeout(function () { return _this.text = _this.childDetail.textBool; });
                }
                else {
                    setTimeout(function () { return _this.text = _this.childDetail.text; });
                }
                //change a bool
                if (this.childDetail.flipBool.length) {
                    var i;
                    for (i = 0; i < this.childDetail.flipBool.length; i++) {
                        this.storyService.flipBool(this.childDetail.flipBool[i]);
                    }
                }
                //toggle a bool
                if (this.childDetail.toggleBool.length) {
                    var j;
                    for (j = 0; j < this.childDetail.toggleBool.length; j++) {
                        this.storyService.toggleBool(this.childDetail.toggleBool[j]);
                    }
                }
            }
            else {
                //change scene
                this.text = '';
                this.sceneChange.emit(this.childDetail.nextScene);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DetailWindowComponent.prototype, "sceneChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_detail__WEBPACK_IMPORTED_MODULE_1__["Detail"])
    ], DetailWindowComponent.prototype, "childDetail", void 0);
    DetailWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-window',
            template: __webpack_require__(/*! ./detail-window.component.html */ "./src/app/detail-window/detail-window.component.html"),
            styles: [__webpack_require__(/*! ./detail-window.component.css */ "./src/app/detail-window/detail-window.component.css")]
        }),
        __metadata("design:paramtypes", [_story_service__WEBPACK_IMPORTED_MODULE_2__["StoryService"]])
    ], DetailWindowComponent);
    return DetailWindowComponent;
}());



/***/ }),

/***/ "./src/app/models/detail.ts":
/*!**********************************!*\
  !*** ./src/app/models/detail.ts ***!
  \**********************************/
/*! exports provided: Detail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detail", function() { return Detail; });
var Detail = /** @class */ (function () {
    function Detail() {
        //number in storys boolean-array.
        this.bool = null;
    }
    return Detail;
}());



/***/ }),

/***/ "./src/app/models/object.ts":
/*!**********************************!*\
  !*** ./src/app/models/object.ts ***!
  \**********************************/
/*! exports provided: Object */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object", function() { return Object; });
var Object = /** @class */ (function () {
    function Object() {
    }
    return Object;
}());



/***/ }),

/***/ "./src/app/models/story.ts":
/*!*********************************!*\
  !*** ./src/app/models/story.ts ***!
  \*********************************/
/*! exports provided: Story */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
var Story = /** @class */ (function () {
    function Story() {
    }
    return Story;
}());



/***/ }),

/***/ "./src/app/story.service.ts":
/*!**********************************!*\
  !*** ./src/app/story.service.ts ***!
  \**********************************/
/*! exports provided: StoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryService", function() { return StoryService; });
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

var StoryService = /** @class */ (function () {
    function StoryService() {
        this.testDetail1 = { title: 'Ansehen', bool: 0, text: 'Die Truhe ist etwa einen halben Schritt breit, halb so tief aber dafür fast genau so hoch. Die Bretter sind aus robustem Holz, das die Jahre gut überstanden hat. Scharniere und Schloss sind aus massivem Eisen.', nextScene: null };
        this.testDetail2 = { title: 'Öffnen', bool: 1, text: 'Die Truhe ist leider verschlossen, da fehlt wohl ein Schlüssel', textBool: 'Erst denkst du, die Truhe sei verschlossen. Nach einem kräftigen Ruck merkst du aber, dass die Scharniere einfach nur verrostet waren. Als du die Truhe mühsam geöffnet hast merkst du allerdings, dass sie, bis auf ein paar Spinnweben, leer ist.', nextScene: null };
        this.testDetail3 = { title: 'Mitnehmen', bool: 0, text: 'Dafür ist die Truhe nun leider doch ein wenig zu schwer.', nextScene: null };
        this.testDetail4 = { title: 'Ansehen', bool: 0, text: 'Die Schatulle ist aus blaum bemaltem Holz,auf dem kindliche Motiven wie Tiere und Sterne aufgemalt sind. Besonders der Fuchs scheint dem Künstler wohl gefallen zu haben, ist er doch vergleichsweise oft abgebildet. Die Scharniere und ein kleiner Riegel zum Öffnen sind schaunbar aus hochwertigem Silber gemacht und wirken filigran hergestellt. Insgesamt ist die Schatulle etwa so groß wie ein Schuhkarton.', nextScene: null };
        this.testDetail5 = { title: 'Schütteln', bool: 0, text: 'Als du die Schatulle in die Hand nimmst merkst du, dass sie recht schwer ist. Ein kurzes Schütteln lässt dich hoffnungsvoll aufhorchen: Metallisches Geklimper.', nextScene: null };
        this.testDetail6 = { title: 'Öffnen', bool: 0, text: '', nextScene: 1 };
        this.testDetail7 = { title: 'Ansehen', text: 'Jede. Menge. Geld!', bool: 0, nextScene: null };
        this.testDetail8 = { title: 'Einstecken', bool: 0, text: 'Gute Idee. Du fühlst dich auf einmal bedeutend wohlhabender.', nextScene: null };
        this.testDetail9 = { title: 'Ansehen', bool: 0, text: 'Die Schatulle ist aus blaum bemaltem Holz,auf dem kindliche Motiven wie Tiere und Sterne aufgemalt sind. Besonders der Fuchs scheint dem Künstler wohl gefallen zu haben, ist er doch vergleichsweise oft abgebildet. Die Scharniere und ein kleiner Riegel zum Öffnen sind schaunbar aus hochwertigem Silber gemacht und wirken filigran hergestellt. Insgesamt ist die Schatulle etwa so groß wie ein Schuhkarton.', nextScene: null };
        this.testDetail10 = { title: 'Weglegen', bool: 0, text: '', nextScene: 0 };
        this.testDetail11 = { title: 'Ansehen', bool: 0, text: 'Der Schlüssel wirkt schon älter, hat schon einige Rostflecken,doch ist er sicher noch dazu fähig, zu tun wofür er einst geschaffen wurde.', nextScene: null };
        this.testDetail12 = { title: 'Einstecken', bool: 2, flipBool: [1, 2], text: 'Du nimmst den Schlüßel an dich.', textBool: 'Du hast den Schlüßel schon', nextScene: null };
        this.testObject1 = {
            text: 'Als du den Keller betrittst findest du vor allem eines: Viel Platz. Keine Regale, keine Schränke, so gut wie gar nichts findest du hier vor. Nur an der der Treppe gegenüberliegenden Wand siehst du eine ',
            details: []
        };
        this.testObject2 = {
            text: 'staubige Truhe ',
            details: [this.testDetail1, this.testDetail2, this.testDetail3]
        };
        this.testObject3 = {
            text: 'vor dir stehen, neben der noch eine ',
            details: []
        };
        this.testObject4 = {
            text: 'kleine Schatulle ',
            details: [this.testDetail4, this.testDetail5, this.testDetail6]
        };
        this.testObject5 = {
            text: 'ganz verloren da liegt.',
            details: []
        };
        this.testObject6 = {
            text: 'Du öffnest die ',
            details: []
        };
        this.testObject7 = {
            text: 'Schatulle ',
            details: [this.testDetail9, this.testDetail10]
        };
        this.testObject8 = {
            text: 'mit Leichtigkeit und schon erfreust du dich dich am Anblick ',
            details: []
        };
        this.testObject9 = {
            text: 'duzender Goldmünzen',
            details: [this.testDetail7, this.testDetail8]
        };
        this.testObject10 = {
            text: ', die da jemand fleißig gespart hat. Ebenso findest du hier einen ',
            details: []
        };
        this.testObject11 = {
            text: 'eisernen Schlüssel. ',
            details: [this.testDetail11, this.testDetail12]
        };
        this.testObject12 = {
            text: 'Wofür der wohl gut ist?',
            details: []
        };
        this.currentScene = {
            title: 'Kellerraum',
            text: [this.testObject1, this.testObject2, this.testObject3, this.testObject4, this.testObject5]
        };
        this.nextScene = {
            title: 'Schatulle',
            text: [this.testObject6, this.testObject7, this.testObject8, this.testObject9, this.testObject10, this.testObject11, this.testObject12]
        };
        this.story = {
            title: 'Das Geheimniss des Kellers',
            scenes: [this.currentScene, this.nextScene],
            booleans: [false, false, false],
            numbers: []
        };
    }
    StoryService.prototype.getStory = function () {
        return this.story;
    };
    StoryService.prototype.toggleBool = function (i) {
        this.story.booleans[i] = !this.story.booleans[i];
    };
    StoryService.prototype.flipBool = function (i) {
        this.story.booleans[i] = true;
    };
    StoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StoryService);
    return StoryService;
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

module.exports = "<div style=\"height:45vh;overflow:auto;\">\n  <a *ngFor=\"let object of currentScene.text\" (click)=\"lookAtObject(object)\">{{object.text}}</a>\n</div>\n<app-button-bar [childObject]=\"currentObject\" (sceneChanger)=\"sceneChange($event)\"></app-button-bar>\n"

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
/* harmony import */ var _models_story__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/story */ "./src/app/models/story.ts");
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
    function TextWindowComponent() {
        this.sceneChanger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TextWindowComponent.prototype.ngOnInit = function () {
        this.currentScene = this.getScene(0);
    };
    TextWindowComponent.prototype.getScene = function (i) {
        return this.childStory.scenes[i];
    };
    TextWindowComponent.prototype.lookAtObject = function (object) {
        this.currentObject = object;
    };
    TextWindowComponent.prototype.sceneChange = function (scene) {
        this.currentScene = this.getScene(scene);
        this.sceneChanger.emit(scene);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_story__WEBPACK_IMPORTED_MODULE_1__["Story"])
    ], TextWindowComponent.prototype, "childStory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TextWindowComponent.prototype, "sceneChanger", void 0);
    TextWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-window',
            template: __webpack_require__(/*! ./text-window.component.html */ "./src/app/text-window/text-window.component.html"),
            styles: [__webpack_require__(/*! ./text-window.component.css */ "./src/app/text-window/text-window.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div style=\"padding:0px\">\n  <h2>\n    {{title}}\n  </h2>\n</div>\n<app-text-window [childStory]=\"childStory\" (sceneChanger)=\"sceneChange($event)\"></app-text-window>\n"

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
/* harmony import */ var _models_story__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/story */ "./src/app/models/story.ts");
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
    function TitleComponent() {
        this.currentScene = 0;
    }
    TitleComponent.prototype.ngOnInit = function () {
        this.getTitle(this.currentScene);
    };
    TitleComponent.prototype.getTitle = function (i) {
        this.title = this.childStory.scenes[i].title;
    };
    TitleComponent.prototype.sceneChange = function (i) {
        var _this = this;
        this.currentScene = i;
        setTimeout(function () { return _this.getTitle(_this.currentScene); }, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_story__WEBPACK_IMPORTED_MODULE_1__["Story"])
    ], TitleComponent.prototype, "childStory", void 0);
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.css */ "./src/app/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [])
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