webpackJsonp([2,4],{

/***/ 442:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 442;


/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(594);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=G:/nodejs/angular-material/src/main.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(147);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.http.get('./data.json')
            .map(function (response) { return response.json().screenshots; })
            .subscribe(function (res) { return _this.spaceScreens = res; });
    }
    AppComponent.prototype.likeMe = function (i) {
        if (this.spaceScreens[i].liked == 0)
            this.spaceScreens[i].liked = 1;
        else
            this.spaceScreens[i].liked = 0;
    };
    AppComponent.prototype.deleteMe = function (i) {
        this.spaceScreens.splice(i, 1);
        console.log(i);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(752),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=G:/nodejs/angular-material/src/app.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=G:/nodejs/angular-material/src/app.module.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=G:/nodejs/angular-material/src/environment.js.map

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>test demo</span>\n  <span class=\"spacer\"></span>\n  <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n    <md-icon>more_vert</md-icon>\n  </button>\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item>\n      <md-icon>fingerprint</md-icon>\n      <span>Login</span>\n    </button>\n    <button md-menu-item disabled>\n      <md-icon>announcement</md-icon>\n      <span>Issues</span>\n    </button>\n    <button md-menu-item>\n      <md-icon>notifications_off</md-icon>\n      <span>Disable alerts</span>\n    </button>\n  </md-menu>\n</md-toolbar>\n\n<md-tab-group>\n  <md-tab label=\"Gallery\">\n    <md-card *ngFor=\"let spaceScreen of spaceScreens; let i = index\">\n      <img md-card-image src=\"{{ spaceScreen.img }}\">\n      <md-card-content>\n        <p>{{ spaceScreen.description }}</p>\n      </md-card-content>\n      <md-card-actions>\n        <button md-button (click)=\"likeMe(i)\">\n          <i class=\"material-icons md-18\" [class.red-color]=\"spaceScreen.liked == '1'\">favorite</i> LIKE\n        </button>\n        <button md-button (click)=\"deleteMe(i)\">\n          <i class=\"material-icons md-18\">delete</i> DELETE\n        </button>\n      </md-card-actions>\n    </md-card>\n  </md-tab>\n  <md-tab label=\"Settings\">\n    <div id=\"page-padding\">\n      <h1>Settings</h1>\n      <p>Here you can control the various settings associated with your app. There's no need to hit a save button, as the values are updated automatically.</p>\n      <label>Number of Thumbnails</label>\n      <md-slider\n        showTicks=\"true\" max=\"100\" min=\"0\" step=\"1\" thumbLabel=\"true\" value=\"18\">\n      </md-slider>\n      <md-slide-toggle>Some setting</md-slide-toggle>\n    </div>\n  </md-tab>\n  <md-tab label=\"Content\">\n\n  </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(443);


/***/ })

},[789]);
//# sourceMappingURL=main.bundle.map