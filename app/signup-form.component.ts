import {Component} from 'angular2/core';
import {UsernameValidators} from './usernameValidators';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.template.html'
})
export class SignUpFormComponent {
    form:ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: [
                '',
                Validators.compose([
                    Validators.required,
                    UsernameValidators.cannotContainSpace
                ]),
                UsernameValidators.shouldBeUnique
            ],
            password: ['', Validators.required]
        });
    }

    signup(){
        this.form.find('username').setErrors({
            invalidLogin:true
        });
        console.log(this.form.value);
    }
}