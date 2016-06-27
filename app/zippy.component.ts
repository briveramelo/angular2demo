import {Component, Input} from 'angular2/core'

@Component({
    selector: 'zippy',
    templateUrl: 'app/zippy.template.html',
    styleUrls: ['app/zippy.style.css']
})
export class ZippyComponent{
    @Input() title:string;
    isShowing:boolean=false;

    onClick(){
        this.isShowing= !this.isShowing;
    }
}