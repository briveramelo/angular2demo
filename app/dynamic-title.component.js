System.register(['angular2/core', './slow-mo-url.service'], function(exports_1, context_1) {
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
    var core_1, slow_mo_url_service_1;
    var DynamicTitleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slow_mo_url_service_1_1) {
                slow_mo_url_service_1 = slow_mo_url_service_1_1;
            }],
        execute: function() {
            DynamicTitleComponent = (function () {
                function DynamicTitleComponent(slowMyUrlService) {
                    this.title = "Watermelon Blasting";
                    this.imgIndex = 0;
                    this.slomoUrls = slowMyUrlService.getUrls();
                }
                DynamicTitleComponent.prototype.onClearClick = function () {
                    this.title = '';
                };
                DynamicTitleComponent.prototype.onClickImage = function () {
                    if (this.imgIndex == this.slomoUrls.length - 1) {
                        this.imgIndex = 0;
                    }
                    else {
                        this.imgIndex++;
                    }
                };
                DynamicTitleComponent = __decorate([
                    core_1.Component({
                        selector: 'dyn-title',
                        template: "\n    <h4>{{title}}</h4>\n    <input type=\"text\" [(ngModel)]=\"title\"/>\n    <input type=\"button\" (click)=\"onClearClick()\" value = \"Clear\" />\n    <br/>\n    <img src=\"{{slomoUrls[imgIndex]}}\" (click)=\"onClickImage()\"/>\n    ",
                        providers: [slow_mo_url_service_1.SlowMoUrlService]
                    }), 
                    __metadata('design:paramtypes', [slow_mo_url_service_1.SlowMoUrlService])
                ], DynamicTitleComponent);
                return DynamicTitleComponent;
            }());
            exports_1("DynamicTitleComponent", DynamicTitleComponent);
        }
    }
});
//# sourceMappingURL=dynamic-title.component.js.map