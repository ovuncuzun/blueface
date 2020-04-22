import { Injectable } from '@angular/core';
import { SelectedUser } from '../profile-settings/selected-user';
import { EventManager } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public profileUser: SelectedUser;

  constructor() {
    this.profileUser = null;
  }

  public getProfileUser = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.profileUser = {
          first_name: 'Michael',
          last_name: 'Collins',
          username: 'michael.collins',
          email: 'michael.collins@​blueface.com'
        }
        resolve(this.profileUser);
      }, 1000);
    })
  };

  public setUsername = (username) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.profileUser.username = username;
          resolve(this.profileUser);
        } else {
        }
        reject({ error: 'Invalid username' });
      }, 3000);
    });
  };

  public setUserEmail = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.profileUser.email = email;
          resolve(this.profileUser);
        } else {
        }
        reject({ error: 'Error on email generation' });
      }, 3000);
    });
  };
}
