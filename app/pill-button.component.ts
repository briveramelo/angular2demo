import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
    selector: 'pill-button',
    // prefer templateUrl for LONG and large html files.
    // makes an additional http request, but only for the first call
    // after that, it's cached
    template: `
        <ul class="nav nav-pills" style="display:inline-block">
            <li *ngFor="#mode of viewModes" [class.active]="viewMode == mode">
                <a (click)="onClick(mode)"> {{getViewModeString(mode)}} View </a>
            </li>
        </ul>
        <div [ngSwitch]="viewMode">
            <div *ngFor="#mode of viewModes">
                <template [ngSwitchWhen]="mode">{{getViewModeString(mode)}} View Content</template>
            </div>
        </div>
    `,
})
export class PillButtonComponent{
    @Input('view-mode') viewMode:ViewMode = 0;
    viewModes=[0,1,2];

    @Output() change = new EventEmitter();

    onClick(mode:ViewMode){
        this.viewMode=mode;
        this.change.emit(this.viewMode);
    }
    getViewModeString(mode:ViewMode){
        return ViewMode[mode];
    }
}

enum ViewMode{
    Map=0,
    List=1,
    XRay=2
}