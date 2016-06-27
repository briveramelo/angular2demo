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
    var LoveButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoveButtonComponent = (function () {
                function LoveButtonComponent() {
                    this.isLoved = false;
                    this.totalLoves = 0;
                    this.change = new core_1.EventEmitter();
                }
                LoveButtonComponent.prototype.onClick = function () {
                    this.isLoved = !this.isLoved;
                    this.totalLoves += this.isLoved ? 1 : -1;
                    this.change.emit({ IsLoved: this.isLoved, TotalLoves: this.totalLoves });
                };
                __decorate([
                    core_1.Input('is-loved'), 
                    __metadata('design:type', Boolean)
                ], LoveButtonComponent.prototype, "isLoved", void 0);
                __decorate([
                    core_1.Input('total-loves'), 
                    __metadata('design:type', Number)
                ], LoveButtonComponent.prototype, "totalLoves", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LoveButtonComponent.prototype, "change", void 0);
                LoveButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'love-button',
                        // prefer templateUrl for LONG and large html files.
                        // makes an additional http request, but only for the first call
                        // after that, it's cached
                        template: "\n        <i\n            class=\"glyphicon glyphicon-heart\"\n            [class.highlighted]=\"isLoved\"\n            (click)=\"onClick()\">\n        </i>\n        <span>{{totalLoves}}</span>\n    ",
                        // same for outputs
                        styles: ["\n        .glyphicon-heart{\n            color:#ccc;\n            cursor: pointer;\n        }\n\n        .highlighted{\n            color:deeppink;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoveButtonComponent);
                return LoveButtonComponent;
            }());
            exports_1("LoveButtonComponent", LoveButtonComponent);
        }
    }
});
//# sourceMappingURL=love-button.component.js.map