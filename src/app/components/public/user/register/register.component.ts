import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Select, Store} from '@ngxs/store';
import {RegisterAction} from '../../user.state';
import {Observable} from 'rxjs';

export function PasswordValidator(control: FormControl): ValidationErrors {
  return !control.value || /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(control.value) ? null : {password: true};
}

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
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Wpisz email',
        required: true,
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Hasło',
        placeholder: 'Wpisz hasło',
        required: true,
      },
      validators: {
        password: {
          expression: (c) => !c.value || /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(c.value),
          message: (error, field: FormlyFieldConfig) => `Hasło musi zawierać małą i dużą literę oraz cyfrę`,
        }
      },
    },
    {
      key: 'confirmPassword',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Powtórz hasło',
        placeholder: 'Wpisz hasło',
        required: true,
        minLength: 5
      }
    }
  ];

  constructor(public store: Store) {
  }


  @Select(state => state.user.errorRegister)
  errorRegister$: Observable<boolean>;

  ngOnInit() {
  }

  register() {
    this.store.dispatch(new RegisterAction({
      username: this.registerForm.value.userName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password, passwordConfirmation: this.registerForm.value.confirmPassword
    }));
  }

}
