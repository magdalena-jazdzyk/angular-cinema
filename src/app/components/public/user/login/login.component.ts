import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {Select, Store} from '@ngxs/store';
import { LoginAction } from '../../user.state';
import {Observable} from 'rxjs';
import {UserDto} from '../../../../../api/models/user-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({});

  loginFields: FormlyFieldConfig[] = [
    {
      key: 'userName',
      type: 'input',
      templateOptions: {
        label: 'Nazwa użytkownika',
        placeholder: 'Wpisz nazwe użytkownika',
        required: true,
      //  minLength: 5
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Hasło',
        placeholder: 'Wpisz hasło',
        required: true
      }
    }
  ];

  @Select(state => state.user.errorLogin)
  errorLogin$: Observable<boolean>;

  constructor(public store: Store) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new LoginAction(this.loginForm.value.userName, this.loginForm.value.password))
  }

}
