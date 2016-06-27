import {Component, Input} from 'angular2/core'
import {AuthorService, Author} from './author.service'

@Component({
    selector: 'authors',
    template: `
        <input type="button" value="Show/Hide Authors" (click)="onClick()">
        <ul [hidden]="isHidden">
            <li *ngFor="#author of authors">
            {{ author.name }}
            </li>
        </ul>
        <div [hidden]="!isHidden">Authors are hidden using 'hidden' property</div>
        `,
    providers: [AuthorService]
})
export class AuthorsComponent {
    authors:Author[];
    @Input('is-hidden') isHidden:boolean;
    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
    onClick(){
        this.isHidden=!this.isHidden;
    }
}