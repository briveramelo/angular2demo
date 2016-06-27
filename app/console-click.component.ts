import {Component} from 'angular2/core'

@Component({
    selector: 'console-click',
    template: `
    <div (click)="onDivClick()">
        <button (click)="onClick($event)"> Console Click Button </button>
    </div>
    `
})
export class ConsoleClickComponent{
    onDivClick(){
        console.log("Handled by Div!");
    }

    onClick($event){
        $event.stopPropagation();
        console.log("Clicked!", $event);
    }
}