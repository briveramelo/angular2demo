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
    var FormatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FormatComponent = (function () {
                function FormatComponent() {
                    this.course = {
                        title: "Angular 2 for nubs",
                        students: 98743,
                        rating: 69.6626,
                        price: 19.95
                    };
                }
                FormatComponent = __decorate([
                    core_1.Component({
                        selector: 'floormat',
                        template: "\n        {{course.title | uppercase | lowercase}} is the title of this course\n        <br/>\n        {{course.students | number}} students in this course\n        <br/>\n        {{course.rating | number:'2.2-3'}} is the course rating\n        <br/>\n        {{course.price | currency:'USD':true:'2.2-2'}} is the price of the course\n        <br/>\n        {{course | json}} is the json output\n        ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormatComponent);
                return FormatComponent;
            }());
            exports_1("FormatComponent", FormatComponent);
        }
    }
});
//# sourceMappingURL=format.component.js.map