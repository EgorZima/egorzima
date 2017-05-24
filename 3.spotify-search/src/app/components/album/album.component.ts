import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service"
import { Artist } from "../../shared/artist"
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'album',
  templateUrl: './album.component.html'
})
export class AlbumComponent {
    id;
    album;

    constructor( private spotifyService: SpotifyService,
                 private router: Router,
                 private activatedRoute: ActivatedRoute
                ) {}

    ngOnInit(){ 
        this.activatedRoute.params
                    .map(params => params['id'])
                    .subscribe((id) => {
                        this.spotifyService.getAlbum(id)
                        .subscribe( album => this.album = album)
                    })                 
    }
}
