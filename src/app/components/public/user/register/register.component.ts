import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store } from '@ngxs/store';
import { RegisterAction } from '../../user.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({});

  registerFields: FormlyFieldConfig[] = [
    {
      key: 'userName',
      type: 'input',
      templateOptions: {
        label: 'Nazwa użytkownika',
        placeholder: 'Wpisz nazwe użytkownika',
        required: true,
        minLength: 5
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Wpisz email',
        required: true,
        minLength: 5
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
    },
    {
      key: 'confirmPassword',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'confirmPassword',
        placeholder: 'Wpisz hasło',
        required: true
      }
    }
  ];

  constructor(public store: Store) { }

  ngOnInit() {
  }

  register() {
    this.store.dispatch(new RegisterAction({ username: this.registerForm.value.userName,
      email : this.registerForm.value.email,
      password: this.registerForm.value.password, passwordConfirmation: this.registerForm.value.confirmPassword }))
  }

}
