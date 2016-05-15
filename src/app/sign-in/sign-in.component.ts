import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
  directives: [
    MdButton,
    MdIcon
  ],
  providers: [
    MdIconRegistry
  ]
})
export class SignInComponent implements OnInit {

  constructor(mdIconRegistry: MdIconRegistry, public af: AngularFire) {}

  ngOnInit() {
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then((authData) => {
      console.log(authData);

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

}
