import {AuthorService, Author} from './author.service'

export class TweetService{
    getTweets(): Tweet[] {
        
        // typically, you would get the string array from your restful service
        // (your web server logic goes here)
        // for now, this is hardcoded just to get the feel for how to structure "Services"
        return [
            new Tweet(new Author("Nelson Mandela", "WrongfullyImprisoned"), "Let's have a lekker jol!", 10),
            new Tweet(new Author("Bender Rodriguez", "genderBender"), "Bite my shiny metal ass!", 69), 
            new Tweet(new Author("The Flash", "TheRealFlash"), "I was too slow to get the OG handle...", -1), 
        ];

    } 
}

export class Tweet{
    randomNumber:number;
    imageUrl:string;
    isLoved:boolean=false;
    constructor(public author:Author, public tagline:string, public totalLoves:number){
        this.randomNumber= Math.floor((Math.random() * 1000) + 1);
        this.imageUrl = "http://lorempixel.com/100/100/people?" + this.randomNumber;
        this.author = author;
        this.tagline = tagline;
        this.totalLoves = totalLoves;
    }
}