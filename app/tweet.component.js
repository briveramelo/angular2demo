System.register(['angular2/core', './love-button.component', './tweet.service'], function(exports_1, context_1) {
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
    var core_1, love_button_component_1, tweet_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (love_button_component_1_1) {
                love_button_component_1 = love_button_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.change = new core_1.EventEmitter();
                    this.tweets = tweetService.getTweets();
                }
                TweetComponent.prototype.onTweetChange = function ($event, tweet) {
                    tweet.isLoved = !tweet.isLoved;
                    tweet.totalLoves += tweet.isLoved ? 1 : -1;
                    this.change.emit(tweet);
                };
                TweetComponent.prototype.onLoveChange = function ($event) {
                    console.log($event);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "change", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n    <div class=\"media\" *ngFor=\"#tweet of tweets\">\n        <div class=\"media-left\">\n            <a href=\"#\">\n            <img class=\"media-object\" src=\"{{tweet.imageUrl}}\" alt=\"'Random Person' + ' ' + {{tweet.randomNumber}}\">\n            </a>\n        </div>\n        <div class=\"media-body\">\n            <h4 class=\"media-heading author\">{{tweet.author.name}}</h4>\n            <span class=\"author\">@{{tweet.author.twitterHandle}}</span>\n            <br/>\n            <span>{{tweet.tagline}}</span>\n            <br/>\n            <love-button [is-loved]=\"tweet.isLoved\"\n                [total-loves]=\"tweet.totalLoves\"\n                (click)=\"onTweetChange($event, tweet)\"\n                (change)=\"onLoveChange($event)\"\n            ></love-button>\n        </div>\n    </div>\n    ",
                        styles: ["\n        .author{\n            display:inline;\n        }\n    "
                        ],
                        directives: [love_button_component_1.LoveButtonComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map