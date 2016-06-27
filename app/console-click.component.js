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
    var ConsoleClickComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConsoleClickComponent = (function () {
                function ConsoleClickComponent() {
                }
                ConsoleClickComponent.prototype.onDivClick = function () {
                    console.log("Handled by Div!");
                };
                ConsoleClickComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log("Clicked!", $event);
                };
                ConsoleClickComponent = __decorate([
                    core_1.Component({
                        selector: 'console-click',
                        template: "\n    <div (click)=\"onDivClick()\">\n        <button (click)=\"onClick($event)\"> Console Click Button </button>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConsoleClickComponent);
                return ConsoleClickComponent;
            }());
            exports_1("ConsoleClickComponent", ConsoleClickComponent);
        }
    }
});
//# sourceMappingURL=console-click.component.js.map