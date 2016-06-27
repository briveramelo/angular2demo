import {Component, Input} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <input type="button" value="Show/Hide Courses" (click)="onClick()" />
        <br/>
        <input type="text" autoGrow />
        <ul *ngIf="isShowing">
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
        <div *ngIf="!isShowing">
            Courses are hidden using '*ngIf' directive
        </div>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    @Input('is-showing') isShowing:boolean;
    courses:string[];
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }

    onClick(){
        this.isShowing = !this.isShowing;
    }
}