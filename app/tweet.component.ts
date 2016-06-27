// import the 'Input' module to
// make private component properties public
// to the other files using it (see app.component.ts for implementation)
import {Component, Input, EventEmitter, Output} from 'angular2/core'
import {AuthorService, Author} from './author.service'
import {LoveButtonComponent} from './love-button.component'
import {Tweet, TweetService} from './tweet.service'

@Component({
    selector: 'tweet',
    template: `
    <div class="media" *ngFor="#tweet of tweets">
        <div class="media-left">
            <a href="#">
            <img class="media-object" src="{{tweet.imageUrl}}" alt="'Random Person' + ' ' + {{tweet.randomNumber}}">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading author">{{tweet.author.name}}</h4>
            <span class="author">@{{tweet.author.twitterHandle}}</span>
            <br/>
            <span>{{tweet.tagline}}</span>
            <br/>
            <love-button [is-loved]="tweet.isLoved"
                [total-loves]="tweet.totalLoves"
                (click)="onTweetChange($event, tweet)"
                (change)="onLoveChange($event)"
            ></love-button>
        </div>
    </div>
    `,
    styles:[`
        .author{
            display:inline;
        }
    `
    ],
    directives: [LoveButtonComponent],
    providers: [TweetService]
})

export class TweetComponent{
    tweets:Tweet[];
    @Output() change = new EventEmitter();
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
    onTweetChange($event, tweet:Tweet){
        tweet.isLoved = !tweet.isLoved;
        tweet.totalLoves+= tweet.isLoved ? 1:-1;
        this.change.emit(tweet);
    }

    onLoveChange($event){
        console.log($event);
    }
}
