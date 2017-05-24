import { Component } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service"
import { Artist } from "../../shared/artist"
import { RouterModule } from "@angular/router";

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchStr = '';
  searchRes: Artist[] = [];
  constructor( private spotifyService: SpotifyService ) {}

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(
      res => this.searchRes = res.artists.items
    )
  }
  
}
