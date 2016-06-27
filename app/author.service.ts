
export class AuthorService{
    getAuthors(): Author[] {
        
        // typically, you would get the string array from your restful service
        // (your web server logic goes here)
        // for now, this is hardcoded just to get the feel for how to structure "Services"
        return [
            new Author("Dr. Hugo Chavez", "ManInTheMask"),
            new Author("Dancy Monkey", "Flapjacks"),
            new Author("College Student", "UnreliableSource") 
        ];

    }
}

export class Author{
    constructor(public name: string, public twitterHandle: string){
        this.name= name;
        this.twitterHandle= twitterHandle;
    }
}