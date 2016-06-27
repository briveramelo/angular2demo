import {Component} from 'angular2/core'
import {SlowMoUrlService} from './slow-mo-url.service'

@Component({
    selector: 'dyn-title',
    template: `
    <h4>{{title}}</h4>
    <input type="text" [(ngModel)]="title"/>
    <input type="button" (click)="onClearClick()" value = "Clear" />
    <br/>
    <img src="{{slomoUrls[imgIndex]}}" (click)="onClickImage()"/>
    `,
    providers:[SlowMoUrlService]
})
export class DynamicTitleComponent{
    title:string="Watermelon Blasting";
    slomoUrls:string[];
    private imgIndex:number=0;
    constructor(slowMyUrlService:SlowMoUrlService){
        this.slomoUrls= slowMyUrlService.getUrls();
    }
    
    onClearClick(){
        this.title ='';
    }

    onClickImage(){
        if (this.imgIndex==this.slomoUrls.length-1){
            this.imgIndex=0;
        }
        else{
            this.imgIndex++;
        }
    }
}