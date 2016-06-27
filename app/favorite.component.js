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
    var FavoriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    // prefer this method for defining inputs because refactoring / renaming becomes
                    // simpler
                    //Input() takes in an optional alias the html can reference. both is-favorite, and isFavorite will work
                    this.isFavorite = false;
                    this.starNum = 0;
                    this.starState = ["glyphicon-star-empty", "glyphicon-star"];
                    this.change = new core_1.EventEmitter();
                }
                FavoriteComponent.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                    this.starNum = this.isFavorite ? 1 : 0;
                    this.change.emit({ IsStarred: this.isFavorite });
                };
                __decorate([
                    core_1.Input('is-favorite'), 
                    __metadata('design:type', Boolean)
                ], FavoriteComponent.prototype, "isFavorite", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "change", void 0);
                FavoriteComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        // prefer templateUrl for LONG and large html files.
                        // makes an additional http request, but only for the first call
                        // after that, it's cached
                        templateUrl: 'app/favorite.template.html',
                        // inputs:['isFavorite:is-favorite']
                        // do not prefer this above method for making the 'isFavorite' component public
                        // magic strings in this format cannot be refactored automatically
                        // outputs:['change']
                        // same for outputs
                        styles: ["\n        .glyphicon-star{\n            color:orange;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoriteComponent);
                return FavoriteComponent;
            }());
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    }
});
//# sourceMappingURL=favorite.component.js.map