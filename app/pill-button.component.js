System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PillButtonComponent, ViewMode;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PillButtonComponent = (function () {
                function PillButtonComponent() {
                    this.viewMode = 0;
                    this.viewModes = [0, 1, 2];
                    this.change = new core_1.EventEmitter();
                }
                PillButtonComponent.prototype.onClick = function (mode) {
                    this.viewMode = mode;
                    this.change.emit(this.viewMode);
                };
                PillButtonComponent.prototype.getViewModeString = function (mode) {
                    return ViewMode[mode];
                };
                __decorate([
                    core_1.Input('view-mode'), 
                    __metadata('design:type', Number)
                ], PillButtonComponent.prototype, "viewMode", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PillButtonComponent.prototype, "change", void 0);
                PillButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'pill-button',
                        // prefer templateUrl for LONG and large html files.
                        // makes an additional http request, but only for the first call
                        // after that, it's cached
                        template: "\n        <ul class=\"nav nav-pills\" style=\"display:inline-block\">\n            <li *ngFor=\"#mode of viewModes\" [class.active]=\"viewMode == mode\">\n                <a (click)=\"onClick(mode)\"> {{getViewModeString(mode)}} View </a>\n            </li>\n        </ul>\n        <div [ngSwitch]=\"viewMode\">\n            <div *ngFor=\"#mode of viewModes\">\n                <template [ngSwitchWhen]=\"mode\">{{getViewModeString(mode)}} View Content</template>\n            </div>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PillButtonComponent);
                return PillButtonComponent;
            }());
            exports_1("PillButtonComponent", PillButtonComponent);
            (function (ViewMode) {
                ViewMode[ViewMode["Map"] = 0] = "Map";
                ViewMode[ViewMode["List"] = 1] = "List";
                ViewMode[ViewMode["XRay"] = 2] = "XRay";
            })(ViewMode || (ViewMode = {}));
        }
    }
});
//# sourceMappingURL=pill-button.component.js.map