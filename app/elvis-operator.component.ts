import {Component} from 'angular2/core'

@Component({
    selector: 'elvis',
    template: `
        <button (click)="onClick()">Toggle Name / Null</button>
        <ul>
            <li>Title: {{task.title}}</li>
            <li>Assignee: {{task.assignee?.name}}</li>
        </ul>
    `
})
export class ElvisOperatorComponent{
    isText:boolean=false;
    task={
        title: "Review Elvis Operator",
        assignee: null
    }

    onClick(){
        this.isText=!this.isText;
        this.task.assignee = this.isText ? {name:"Brandon"} : null;
        console.log(this.isText);
        console.log(this.task.assignee);
    }
}