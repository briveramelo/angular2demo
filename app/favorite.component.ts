// import the 'Input' module to
// make private component properties public
// to the other files using it (see app.component.ts for implementation)
import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
    selector: 'favorite',
    // prefer templateUrl for LONG and large html files.
    // makes an additional http request, but only for the first call
    // after that, it's cached
    templateUrl: 'app/favorite.template.html',
    // inputs:['isFavorite:is-favorite']
    // do not prefer this above method for making the 'isFavorite' component public
    // magic strings in this format cannot be refactored automatically
    // outputs:['change']
    // same for outputs
    styles: [`
        .glyphicon-star{
            color:orange;
        }
    `]

})
export class FavoriteComponent{
     // prefer this method for defining inputs because refactoring / renaming becomes
     // simpler
     //Input() takes in an optional alias the html can reference. both is-favorite, and isFavorite will work
    @Input('is-favorite') isFavorite:boolean = false;
    starNum:number=0;
    starState:string[]=["glyphicon-star-empty", "glyphicon-star"];

    @Output() change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.starNum = this.isFavorite ? 1:0;
        this.change.emit({IsStarred: this.isFavorite});
    }
}