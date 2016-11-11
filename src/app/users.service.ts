import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import { User } from './models';
import { Router } from '@angular/router';

@Injectable()
export class UsersService {
  public authState: FirebaseAuthState;
  isLoggedIn: boolean = false;
  currentUser: User;

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(authState => {
      this.authState = authState;
      this.isLoggedIn = !!authState;

      if (authState) {
        this.setCurrentLoggedInUser(this.authState);
      } else {
        // Kick the user back to the home page if they aren't logged in
        this.router.navigate(['']);
      }
    });
  }

  login() {
    this.af.auth.login();
  }

  private setCurrentLoggedInUser(authState: FirebaseAuthState) {
    let providerData = authState.auth.providerData[0];
    this.currentUser = {
      provider: providerData.providerId,
      photoURL: providerData.photoURL,
      displayName: providerData.displayName,
      email: providerData.email,
      refreshToken: authState.auth.refreshToken,
      uid: authState.auth.uid,
      providerUids: [providerData.uid]
    };

    // TODO Only update if the user does not exist or if their data has changed.
    // Adding the authData to Firebase
    let userObservable: FirebaseObjectObservable<User> = this.af.database.object('/users/' + authState.auth.uid);
    if (userObservable) {
      userObservable.update(this.currentUser);
    }
  }

  logout() {
    this.af.auth.logout();
  }
}
