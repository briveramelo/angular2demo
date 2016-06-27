import {Component} from 'angular2/core'

@Component({
selector: 'email-form',
templateUrl:'app/email-form.template.html'
})
export class EmailFormComponent{
    frequencies=[
        {id: 0, label:"Weekly"},
        {id: 1, label:"Monthly"},
        {id: 2, label:"Weekly"}
    ];

    onSubscribe(form){
        console.log(form.value);
    }
}