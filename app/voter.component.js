System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoterComponent, Vote;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.myVote = Vote.Neutral;
                    this.totalVotes = 0;
                    this.vote = new core_1.EventEmitter();
                    this.myVoteAsString = Vote[Vote.Neutral];
                }
                VoterComponent.prototype.onUpVote = function () {
                    this.onVote(true);
                };
                VoterComponent.prototype.onDownVote = function () {
                    this.onVote(false);
                };
                VoterComponent.prototype.onVote = function (goingUp) {
                    if ((goingUp && this.myVote != Vote.Up) || (!goingUp && this.myVote != Vote.Down)) {
                        var voteNumber = goingUp ? 1 : -1;
                        this.myVote += voteNumber;
                        this.myVoteAsString = Vote[this.myVote];
                        this.vote.emit({ myVote: this.myVoteAsString, totalVotes: this.totalVotes });
                    }
                };
                __decorate([
                    core_1.Input('my-vote'), 
                    __metadata('design:type', Number)
                ], VoterComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Input('total-votes'), 
                    __metadata('design:type', Number)
                ], VoterComponent.prototype, "totalVotes", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "vote", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        // prefer templateUrl for LONG and large html files.
                        // makes an additional http request, but only for the first call
                        // after that, it's cached
                        template: "\n        <div class = \"voter\">\n            <i\n                class=\"glyphicon glyphicon-menu-up vote-button\"\n                [class.highlighted]=\"myVoteAsString == 'Up'\"\n                (click)=\"onUpVote()\">\n            </i>\n            <span>{{totalVotes + myVote}}</span>\n            <i\n                class=\"glyphicon glyphicon-menu-down vote-button\"\n                [class.highlighted]=\"myVoteAsString == 'Down'\"\n                (click)=\"onDownVote()\">\n            </i>\n        <div>\n    ",
                        // same for outputs
                        styles: ["\n        .glyphicon-menu-up{\n            color:#ccc;\n        }\n\n        .glyphicon-menu-down{\n            color:#ccc;\n        }\n\n        .vote-button{\n            cursor: pointer;\n        }\n\n        .highlighted{\n            color:orange;\n        }\n\n        .voter{\n            width:20px;\n            text-align: center;\n            color: #999;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
            (function (Vote) {
                Vote[Vote["Down"] = -1] = "Down";
                Vote[Vote["Neutral"] = 0] = "Neutral";
                Vote[Vote["Up"] = 1] = "Up";
            })(Vote || (Vote = {}));
            exports_1("Vote", Vote);
        }
    }
});
//# sourceMappingURL=voter.component.js.map