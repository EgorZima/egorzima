import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
      userName;
      user = [];
      repos;

      constructor( private githubService: GithubService) {}

      searchUser() {
        this.githubService.getUser(this.userName).subscribe(
          user => this.user = user
        )
        
        this.githubService.getRepos(this.userName).subscribe(
          repos => this.repos = repos
        )
      
        this.githubService.updateUser(this.userName)
      
      }

}
