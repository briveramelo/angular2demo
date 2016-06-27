import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService{
    private _url:string = "http://api.github.com/users/";
    
    constructor(private _http: Http){}

    getUser(username) {
         return this._http.get(this._url + username)
            .map(res => res.json());
    }

    getFollowers(username){
        return this._http.get(this._url + username + "/followers")
            .map(res => res.json());
    }
}