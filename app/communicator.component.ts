import {Component} from 'angular2/core'
import {PostService} from './post.service'
import {HTTP_PROVIDERS} from 'angular2/http'
import {OnInit} from 'angular2/core'
import {Post} from './post';

@Component({
    selector: 'communicator',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
    `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class CommunicatorComponent implements OnInit{
    isLoading:boolean=true;
    
    myPost:Post = {userId:1, title:"a", body:"bod"};

    constructor(private _postService:PostService){
        this._postService.createPost(this.myPost);
    }

    ngOnInit(){
        this._postService.getPosts()
            .subscribe(posts => {
                this.isLoading=false;
                console.log(posts[0]);
            });
    }
}