System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    // typically, you would get the string array from your restful service
                    // (your web server logic goes here)
                    // for now, this is hardcoded just to get the feel for how to structure "Services"
                    return ["Course1", "Course2", "Course3"];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map