import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';       
import { ArtistComponent } from './components/artist/artist.component';       
import { AlbumComponent } from './components/album/album.component';  
  
@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        },
        {
            path: 'home',
            component: SearchComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: 'artist/:id',
            component: ArtistComponent
        },
        {
            path: 'album/:id',
            component: AlbumComponent
        }

    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {

}