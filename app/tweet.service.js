System.register(['./author.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var author_service_1;
    var TweetService, Tweet;
    return {
        setters:[
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            }],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    // typically, you would get the string array from your restful service
                    // (your web server logic goes here)
                    // for now, this is hardcoded just to get the feel for how to structure "Services"
                    return [
                        new Tweet(new author_service_1.Author("Nelson Mandela", "WrongfullyImprisoned"), "Let's have a lekker jol!", 10),
                        new Tweet(new author_service_1.Author("Bender Rodriguez", "genderBender"), "Bite my shiny metal ass!", 69),
                        new Tweet(new author_service_1.Author("The Flash", "TheRealFlash"), "I was too slow to get the OG handle...", -1),
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
            Tweet = (function () {
                function Tweet(author, tagline, totalLoves) {
                    this.author = author;
                    this.tagline = tagline;
                    this.totalLoves = totalLoves;
                    this.isLoved = false;
                    this.randomNumber = Math.floor((Math.random() * 1000) + 1);
                    this.imageUrl = "http://lorempixel.com/100/100/people?" + this.randomNumber;
                    this.author = author;
                    this.tagline = tagline;
                    this.totalLoves = totalLoves;
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map