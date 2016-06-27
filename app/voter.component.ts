// import the 'Input' module to
// make private component properties public
// to the other files using it (see app.component.ts for implementation)
import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
    selector: 'voter',
    // prefer templateUrl for LONG and large html files.
    // makes an additional http request, but only for the first call
    // after that, it's cached
    template: `
        <div class = "voter">
            <i
                class="glyphicon glyphicon-menu-up vote-button"
                [class.highlighted]="myVoteAsString == 'Up'"
                (click)="onUpVote()">
            </i>
            <span>{{totalVotes + myVote}}</span>
            <i
                class="glyphicon glyphicon-menu-down vote-button"
                [class.highlighted]="myVoteAsString == 'Down'"
                (click)="onDownVote()">
            </i>
        <div>
    `,
    // same for outputs
    styles: [`
        .glyphicon-menu-up{
            color:#ccc;
        }

        .glyphicon-menu-down{
            color:#ccc;
        }

        .vote-button{
            cursor: pointer;
        }

        .highlighted{
            color:orange;
        }

        .voter{
            width:20px;
            text-align: center;
            color: #999;
        }
    `]
})
export class VoterComponent{
    @Input('my-vote') myVote:Vote=Vote.Neutral;
    @Input('total-votes') totalVotes:number = 0;

    @Output() vote = new EventEmitter();


    myVoteAsString:string = Vote[Vote.Neutral];
    onUpVote(){
        this.onVote(true);
    }

    onDownVote(){
        this.onVote(false);
    }
    onVote(goingUp:boolean){
        if ((goingUp && this.myVote!=Vote.Up) || (!goingUp && this.myVote!=Vote.Down)) {
            var voteNumber:number = goingUp ? 1:-1;
            this.myVote += voteNumber;
            this.myVoteAsString = Vote[this.myVote];
            this.vote.emit({myVote: this.myVoteAsString, totalVotes:this.totalVotes});
        }
    }
}

export enum Vote{
    Down=-1,
    Neutral=0,
    Up=1
} 