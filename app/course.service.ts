
export class CourseService{
    getCourses(): string[] {
        
        // typically, you would get the string array from your restful service
        // (your web server logic goes here)
        // for now, this is hardcoded just to get the feel for how to structure "Services"
        return ["Course1", "Course2", "Course3"];

    }

}