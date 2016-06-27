System.register(['angular2/core', './demo-list.component', './courses.component', './authors.component', './favorite.component', './console-click.component', './love-button.component', './voter.component', './tweet.component', './dynamic-title.component', './pill-button.component', './format.component', './custom-pipe.component', './ngstyle.component', './elvis-operator.component', './bootstrap-panel.component', './zippy.component', './contact-form.component', './communicator.component', './github-profile.component', './email-form.component', './signup-form.component'], function(exports_1, context_1) {
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
    var core_1, demo_list_component_1, courses_component_1, authors_component_1, favorite_component_1, console_click_component_1, love_button_component_1, voter_component_1, tweet_component_1, dynamic_title_component_1, pill_button_component_1, format_component_1, custom_pipe_component_1, ngstyle_component_1, elvis_operator_component_1, bootstrap_panel_component_1, zippy_component_1, contact_form_component_1, communicator_component_1, github_profile_component_1, email_form_component_1, signup_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (demo_list_component_1_1) {
                demo_list_component_1 = demo_list_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (console_click_component_1_1) {
                console_click_component_1 = console_click_component_1_1;
            },
            function (love_button_component_1_1) {
                love_button_component_1 = love_button_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (dynamic_title_component_1_1) {
                dynamic_title_component_1 = dynamic_title_component_1_1;
            },
            function (pill_button_component_1_1) {
                pill_button_component_1 = pill_button_component_1_1;
            },
            function (format_component_1_1) {
                format_component_1 = format_component_1_1;
            },
            function (custom_pipe_component_1_1) {
                custom_pipe_component_1 = custom_pipe_component_1_1;
            },
            function (ngstyle_component_1_1) {
                ngstyle_component_1 = ngstyle_component_1_1;
            },
            function (elvis_operator_component_1_1) {
                elvis_operator_component_1 = elvis_operator_component_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (communicator_component_1_1) {
                communicator_component_1 = communicator_component_1_1;
            },
            function (github_profile_component_1_1) {
                github_profile_component_1 = github_profile_component_1_1;
            },
            function (email_form_component_1_1) {
                email_form_component_1 = email_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            }],
        execute: function() {
            //use square brackets for property binding
            //parentheses for event binding
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        isFavorite: false,
                        isLoved: false,
                        totalLoves: 10,
                        myVote: voter_component_1.Vote.Neutral,
                        totalVotes: 10
                    };
                }
                // prints out the event defined in the favorite.component.ts EventEmitter,
                // this function could be anything though... like reloading or updating the server 
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onLoveChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVoteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onTweetLoveChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, console_click_component_1.ConsoleClickComponent,
                            love_button_component_1.LoveButtonComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent, dynamic_title_component_1.DynamicTitleComponent,
                            pill_button_component_1.PillButtonComponent, format_component_1.FormatComponent, custom_pipe_component_1.CustomPipeComponent, ngstyle_component_1.NgStyleComponent,
                            elvis_operator_component_1.ElvisOperatorComponent, bootstrap_panel_component_1.BoostrapPanelComponent, zippy_component_1.ZippyComponent, demo_list_component_1.DemoListComponent,
                            contact_form_component_1.ContactFormComponent, communicator_component_1.CommunicatorComponent, github_profile_component_1.GitHubProfileComponent, email_form_component_1.EmailFormComponent,
                            signup_form_component_1.SignUpFormComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map