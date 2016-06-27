// import the 'Input' module to
// make private component properties public
// to the other files using it (see app.component.ts for implementation)
import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
    selector: 'love-button',
    // prefer templateUrl for LONG and large html files.
    // makes an additional http request, but only for the first call
    // after that, it's cached
    template: `
        <i
            class="glyphicon glyphicon-heart"
            [class.highlighted]="isLoved"
            (click)="onClick()">
        </i>
        <span>{{totalLoves}}</span>
    `,
    // same for outputs
    styles: [`
        .glyphicon-heart{
            color:#ccc;
            cursor: pointer;
        }

        .highlighted{
            color:deeppink;
        }
    `]

})
export class LoveButtonComponent{
    @Input('is-loved') isLoved:boolean = false;
    @Input('total-loves') totalLoves:number = 0;

    @Output() change = new EventEmitter();

    onClick(){
        this.isLoved = !this.isLoved;
        this.totalLoves+= this.isLoved ? 1:-1;
        this.change.emit({IsLoved: this.isLoved, TotalLoves:this.totalLoves});
    }
}