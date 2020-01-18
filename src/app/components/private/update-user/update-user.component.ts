import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Store} from '@ngxs/store';
import {EditMovieAction} from '../../public/movie.state';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UpdateUserAction} from '../../public/user.state';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm = new FormGroup({});

  updateFields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      defaultValue: this.data.username,
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
      defaultValue: this.data.email,
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
      key: 'passwordConfirmation',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Powtórz hasło',
        placeholder: 'Wpisz hasło',
        required: true
      }
    }
  ];

  private formIsValid = () => false;

  constructor(public  matDialogRef: MatDialogRef<UpdateUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public store: Store) {
  }

  ngOnInit() {
    console.log(this.data);
  }

  updateUser() {
    this.store.dispatch(new UpdateUserAction(this.data.id, {
      username: this.updateUserForm.value.username, email: this.updateUserForm.value.email,
      password: this.updateUserForm.value.password, passwordConfirmation: this.updateUserForm.value.passwordConfirmation
    }));

    this.matDialogRef.close();
  }
}
