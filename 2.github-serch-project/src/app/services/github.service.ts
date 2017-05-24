import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable() 
export class GithubService {
    userName = '';

    clientId = '6473620c22fd2d4f63a6';
    clientSecret = '26a65cc4fabf54911825071a733acd89f2f43f8b';

    constructor( private http: Http) {}

    getUser(user){            
        return this.http.get('http://api.github.com/users/'+this.userName+'?client_id='+this.clientId+'&client_secret='+this.clientSecret)
                        .map(res => res.json())
    }

    getRepos(user){
        return this.http.get('http://api.github.com/users/'+this.userName+'/repos?client_id='+this.clientId+'&client_secret='+this.clientSecret)
                        .map(res => res.json())
    }

    updateUser(user) {
        this.userName = user;
    }

 }