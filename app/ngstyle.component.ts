import {Component} from 'angular2/core'

@Component({
    selector: 'ngstyler',
    // prefer templateUrl for LONG and large html files.
    // makes an additional http request, but only for the first call
    // after that, it's cached

    // You could do this...
    /*
        [style.backgroundColor]="canSave ? 'blue' : 'gray'"
        [style.color]="canSave ? 'white' : 'black'"
        [style.fontWeight]="canSave ? 'bold' : 'normal'"
    */
    // OR......
    template: `
        <button
            [ngStyle]="{
                backgroundColor: canSave ? 'blue' : 'gray',
                color: canSave ? 'white' : 'black',
                fontWeight: canSave ? 'bold' : 'normal'
            }"
            (click)="onClick()">
            Submit
        </button>
    `,
    // but you really shouldn't need to even do this because you should just be doing things in CSS!!!
    
})
export class NgStyleComponent{
    canSave:boolean=true;

    onClick(){
        this.canSave = !this.canSave;
    }
}