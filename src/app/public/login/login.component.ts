import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store } from '@ngxs/store';
import { LoginAction } from '../state/user.state';
//import { LoginAction } from '../state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({});
  loginFields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'username',
        placeholder: 'username',
        required: true

      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'password',
        placeholder: 'password',
        required: true
      }
    }
  ];

  constructor(public store: Store) { }

  ngOnInit() {
  }

  login(){
    this.store.dispatch(new LoginAction(this.loginForm.value.username,this.loginForm.value.password))
    
    console.log('ala')
  }

}
