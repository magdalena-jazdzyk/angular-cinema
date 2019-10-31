import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Store} from '@ngxs/store';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AddMovieAction, EditMovieAction} from '../movie.state';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.sass']
})
export class EditMovieComponent implements OnInit {


  movieForm = new FormGroup({});

  movieFields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      defaultValue: this.data.title,
      templateOptions: {
        label: 'Nazwa filmu',
        placeholder: 'Podaj nazwe filmu',
        required: true,
      }
    },
    {
      key: 'description',
      type: 'textarea',
      defaultValue: this.data.description,
      templateOptions: {
        label: 'opis',
        placeholder: 'Wpisz opis',
        required: true
      }
    },
    {
      key: 'releaseDate',
      type: 'datepicker',
      defaultValue: new Date(this.data.releaseDate.split('\\.')[2] + '.' + this.data.releaseDate.split('\\.')[1] + '.' + this.data.releaseDate.split('\\.')[0]),
      templateOptions: {
        label: 'data wydania',
        placeholder: 'Wpisz date wydania',
        required: true,
        datepickerOptions: {format: 'yyyy.MM.dd'},
        datepickerPopup: 'yyyy.MM.dd'
      }
    },
    {
      key: 'duration',
      type: 'input',
      defaultValue: this.data.duration,
      templateOptions: {
        label: 'czas trwania',
        placeholder: 'Wpisz czas trwania',
        required: true,
        type: 'number'
      }
    }
  ];

  private formIsValid = () => false;

  constructor(public  matDialogRef: MatDialogRef<EditMovieComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public store: Store) {
  }

  ngOnInit() {
    console.log(this.data);
    setTimeout(() => this.formIsValid = () => this.movieForm.valid, 0);
  }

  editMovie() {
    // console.log(this.movieForm.value.releaseDate.getDay());
    // console.log(this.movieForm.value.releaseDate.getMonth());
    // console.log(this.movieForm.value.releaseDate.getFullYear());
    console.log(this.movieForm.value.releaseDate);
    this.store.dispatch(new EditMovieAction(this.data.id, {
      title: this.movieForm.value.title, releaseDate: this.movieForm.value.releaseDate.toLocaleString().split(',')[0], //.split('.').join('-'),
      description: this.movieForm.value.description, duration: this.movieForm.value.duration
    }));

    this.matDialogRef.close(); // zamyka modal
  }
}
