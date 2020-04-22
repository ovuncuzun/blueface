import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { SelectedUser } from './selected-user';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  @Input() title: string;
  private isUserLoading: boolean = true;
  private isUserSaving: boolean = false;
  private isError: boolean = false;
  public selectedUser: SelectedUser;

  constructor(private profileService: ProfileService) {
    console.log(this.title)
  }

  ngOnInit() {
    this.getProfileUser();
  }

  getProfileUser() {
    this.profileService.getProfileUser()
      .then(
        (user: SelectedUser) => {
          this.selectedUser = user;
          this.isUserLoading = false;
        }
      );
  }

  onUsernameKeydown() {
    this.isError = false;
  }

  onUsernameSave(username) {
    this.isUserSaving = true;
    this.isError = false;
    this.profileService.setUsername(username)
      .then(
        (user: SelectedUser) => {
          this.selectedUser = user;
          this.isUserSaving = false;

          this.profileService.setUserEmail(username + "@​blueface.com​").then(
            user => {
              console.log(user)
            }
          ).catch(err => {
            this.isError = true
          })
        }
      )
      .catch(err => {
        this.isUserSaving = false;
        this.isError = true
      }
      )
  }
}

