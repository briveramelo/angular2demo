System.register(['angular2/core', './filename.pipe'], function(exports_1, context_1) {
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
    var core_1, filename_pipe_1;
    var DemoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (filename_pipe_1_1) {
                filename_pipe_1 = filename_pipe_1_1;
            }],
        execute: function() {
            DemoListComponent = (function () {
                function DemoListComponent() {
                }
                __decorate([
                    core_1.Input('script-name'), 
                    __metadata('design:type', String)
                ], DemoListComponent.prototype, "scriptName", void 0);
                __decorate([
                    core_1.Input('list-items'), 
                    __metadata('design:type', Array)
                ], DemoListComponent.prototype, "listItems", void 0);
                DemoListComponent = __decorate([
                    core_1.Component({
                        selector: 'demo-list',
                        templateUrl: 'app/demo-list.template.html',
                        pipes: [filename_pipe_1.FileNamePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DemoListComponent);
                return DemoListComponent;
            }());
            exports_1("DemoListComponent", DemoListComponent);
        }
    }
});
//# sourceMappingURL=demo-list.component.js.map