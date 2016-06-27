import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host:{
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective{
    
    
    constructor(private el:ElementRef, private renderer: Renderer){
        //the private/public keywords automatically create variables for the input parameters local to this class
    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }
}