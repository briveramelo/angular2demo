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
    var NgStyleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgStyleComponent = (function () {
                function NgStyleComponent() {
                    this.canSave = true;
                }
                NgStyleComponent.prototype.onClick = function () {
                    this.canSave = !this.canSave;
                };
                NgStyleComponent = __decorate([
                    core_1.Component({
                        selector: 'ngstyler',
                        // prefer templateUrl for LONG and large html files.
                        // makes an additional http request, but only for the first call
                        // after that, it's cached
                        // You could do this...
                        /*
                            [style.backgroundColor]="canSave ? 'blue' : 'gray'"
                            [style.color]="canSave ? 'white' : 'black'"
                            [style.fontWeight]="canSave ? 'bold' : 'normal'"
                        */
                        // OR......
                        template: "\n        <button\n            [ngStyle]=\"{\n                backgroundColor: canSave ? 'blue' : 'gray',\n                color: canSave ? 'white' : 'black',\n                fontWeight: canSave ? 'bold' : 'normal'\n            }\"\n            (click)=\"onClick()\">\n            Submit\n        </button>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgStyleComponent);
                return NgStyleComponent;
            }());
            exports_1("NgStyleComponent", NgStyleComponent);
        }
    }
});
//# sourceMappingURL=ngstyle.component.js.map