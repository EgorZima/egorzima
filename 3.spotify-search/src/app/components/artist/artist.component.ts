import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service"
import { Artist } from "../../shared/artist"
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit{
    id;
    artist: Artist[];
    albums = [];

    constructor( private spotifyService: SpotifyService,
                 private router: Router,
                 private activatedRoute: ActivatedRoute
                 ) {}
    
    ngOnInit(){
        this.activatedRoute.params
                    .map(params => params['id'])
                    .subscribe((id) => {
                        this.spotifyService.getArtist(id)
                        .subscribe( artist => this.artist = artist)

                        this.spotifyService.getAlbums(id)
                        .subscribe( albums => this.albums = albums.items)
                    })                
    }
}
