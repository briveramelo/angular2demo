import {Component} from 'angular2/core';
import {DemoListComponent} from './demo-list.component';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {ConsoleClickComponent} from './console-click.component'
import {LoveButtonComponent} from './love-button.component'
import {VoterComponent, Vote} from './voter.component'
import {TweetComponent} from './tweet.component'
import {DynamicTitleComponent} from './dynamic-title.component'
import {PillButtonComponent} from './pill-button.component'
import {FormatComponent} from './format.component'
import {CustomPipeComponent} from './custom-pipe.component'
import {NgStyleComponent} from './ngstyle.component'
import {ElvisOperatorComponent} from './elvis-operator.component'
import {BoostrapPanelComponent} from './bootstrap-panel.component'
import {ZippyComponent} from './zippy.component'
import {ContactFormComponent} from './contact-form.component'
import {CommunicatorComponent} from './communicator.component'
import {GitHubProfileComponent} from './github-profile.component'
import {EmailFormComponent} from './email-form.component'
import {SignUpFormComponent} from './signup-form.component'

//use square brackets for property binding
//parentheses for event binding
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, ConsoleClickComponent,
                LoveButtonComponent, VoterComponent, TweetComponent, DynamicTitleComponent,
                PillButtonComponent, FormatComponent, CustomPipeComponent, NgStyleComponent,
                ElvisOperatorComponent, BoostrapPanelComponent, ZippyComponent, DemoListComponent,
                ContactFormComponent, CommunicatorComponent, GitHubProfileComponent, EmailFormComponent,
                SignUpFormComponent],
    
})
export class AppComponent { 
    post = {
        title: "Title",
        isFavorite: false,
        isLoved: false,
        totalLoves: 10,

        myVote:Vote.Neutral,
        totalVotes:10
    }

    
    // prints out the event defined in the favorite.component.ts EventEmitter,
    // this function could be anything though... like reloading or updating the server 
    
    
    onFavoriteChange($event){
        console.log($event);
    }
    onLoveChange($event){
        console.log($event);
    }
    onVoteChange($event){
        console.log($event);
    }
    onTweetLoveChange($event){
        console.log($event);
    }

}