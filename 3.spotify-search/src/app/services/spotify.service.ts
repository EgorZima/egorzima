import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable() 
export class SpotifyService {           
    constructor( private http: Http) {};

    searchMusic(str) {
        let url = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=10&type=artist';
        return this.http.get(url)
                        .map(res => res.json())
    }

    getArtist(id) {
        let url = 'https://api.spotify.com/v1/artists/' + id;
        return this.http.get(url)
                        .map(res => res.json())
    }

    getAlbums(artistId) {
        let url = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
        return this.http.get(url)
                        .map(res => res.json())
    }

    getAlbum(albumId) {
        let url = 'https://api.spotify.com/v1/albums/' + albumId;
        return this.http.get(url)
                        .map(res => res.json())
    }
 }