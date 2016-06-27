import {Component, Input} from 'angular2/core'
import {FileNamePipe} from './filename.pipe'

@Component({
selector: 'demo-list',
templateUrl: 'app/demo-list.template.html',
pipes:[FileNamePipe]
})
export class DemoListComponent{
    @Input('script-name') scriptName:string;
    @Input('list-items') listItems:string[];
}