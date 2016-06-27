System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SlowMoUrlService;
    return {
        setters:[],
        execute: function() {
            SlowMoUrlService = (function () {
                function SlowMoUrlService() {
                }
                SlowMoUrlService.prototype.getUrls = function () {
                    // typically, you would get the string array from your restful service
                    // (your web server logic goes here)
                    // for now, this is hardcoded just to get the feel for how to structure "Services"
                    return [
                        "http://static.wixstatic.com/media/af26f0_fac0c09e696244ddbbe7f414e0b73623.gif",
                        "http://giant.gfycat.com/FlusteredMelodicJunco.gif",
                        "https://i.kinja-img.com/gawker-media/image/upload/s--0mdq9YqX--/c_fill,fl_progressive,g_center,h_450,q_80,w_800/19d9vbu7fvuyggif.gif",
                        "http://gif-finder.com/wp-content/uploads/2016/01/Mammoth-stomps-watermelon-The-Slow-Mo-Guys.gif",
                        "http://cdn.gifstache.com/2013/9/17/964289155_13145447.gif"
                    ];
                };
                return SlowMoUrlService;
            }());
            exports_1("SlowMoUrlService", SlowMoUrlService);
        }
    }
});
//# sourceMappingURL=slow-mo-url.service.js.map