import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
import { User } from './models';

@Injectable()
export class UsersService {
  isLoggedIn: boolean = false;
  currentUser: User;

  constructor(public af: AngularFire) {}

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then((authData: FirebaseAuthState) => {
      console.log(authData);
      let providerData = authData.auth.providerData[0];
      console.log(providerData);

      // TODO Check to see if the user exists and only push if they don't. Update if exists and changed.

      // adding the authData to Firebase
      let usersListObservable: FirebaseListObservable<User[]> = this.af.database.list('/users');
      this.currentUser = {
        provider: providerData.providerId,
        photoURL: providerData.photoURL,
        displayName: providerData.displayName,
        refreshToken: authData.auth.refreshToken,
        uid: providerData.uid
      };
      this.isLoggedIn = true;
      usersListObservable.push(this.currentUser);
    });
  }

  logout() {
    this.af.auth.logout();
    this.isLoggedIn = false;
  }
}
