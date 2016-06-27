import {Component} from 'angular2/core'

@Component({
    selector: 'floormat',
    template: `
        {{course.title | uppercase | lowercase}} is the title of this course
        <br/>
        {{course.students | number}} students in this course
        <br/>
        {{course.rating | number:'2.2-3'}} is the course rating
        <br/>
        {{course.price | currency:'USD':true:'2.2-2'}} is the price of the course
        <br/>
        {{course | json}} is the json output
        `,
        //<br/>
        //{{course.releaseDate | date:'MMM yyyy'}}
        //this is how you would set up a date format if i knew how to generate the right format for the date | operator
})
export class FormatComponent {
    course={
        title: "Angular 2 for nubs",
        students: 98743,
        rating: 69.6626,
        price: 19.95
        //releaseDate:('Fri Apr 01 2016 00:00:00 GMT+1100 (AEDT)')
    }
}