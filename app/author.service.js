System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorService, Author;
    return {
        setters:[],
        execute: function() {
            AuthorService = (function () {
                function AuthorService() {
                }
                AuthorService.prototype.getAuthors = function () {
                    // typically, you would get the string array from your restful service
                    // (your web server logic goes here)
                    // for now, this is hardcoded just to get the feel for how to structure "Services"
                    return [
                        new Author("Dr. Hugo Chavez", "ManInTheMask"),
                        new Author("Dancy Monkey", "Flapjacks"),
                        new Author("College Student", "UnreliableSource")
                    ];
                };
                return AuthorService;
            }());
            exports_1("AuthorService", AuthorService);
            Author = (function () {
                function Author(name, twitterHandle) {
                    this.name = name;
                    this.twitterHandle = twitterHandle;
                    this.name = name;
                    this.twitterHandle = twitterHandle;
                }
                return Author;
            }());
            exports_1("Author", Author);
        }
    }
});
//# sourceMappingURL=author.service.js.map