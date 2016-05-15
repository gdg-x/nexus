import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class UsersService {

  constructor(public af: AngularFire) {}

  isLoggedIn = <boolean>(false);

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then((authData) => {
      console.log(authData);
      this.isLoggedIn = true;

      // adding the authData to Firebase
      const itemObservable = this.af.database.list('/users');
      console.log(itemObservable);
      itemObservable.push({ provider: authData.auth['provider'],
        image: authData.google['profileImageURL'],
        name: authData.google['displayName'],
        token: authData.google['accessToken'],
        uid: authData['uid']});
    });
  }

  logout(){
    this.af.auth.logout();
    this.isLoggedIn = false;
  }

}
