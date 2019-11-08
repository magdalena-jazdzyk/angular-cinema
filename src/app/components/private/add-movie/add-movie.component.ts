import {Component, OnInit} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';
import {ReserveSeatActions} from '../../public/state/seats.state';
import {Store} from '@ngxs/store';
import {AddMovieAction} from '../../public/movie.state';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movieForm = new FormGroup({});

  movieFields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Nazwa filmu',
        placeholder: 'Podaj nazwe filmu',
        required: true,
      }
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'opis',
        placeholder: 'Wpisz opis',
        required: true
      }
    },
    {
      key: 'releaseDate',
      type: 'datepicker',
      templateOptions: {
        label: 'data wydania',
        placeholder: 'Wpisz date wydania',
        required: true
      }
    }
  ];

  constructor(public store: Store) {
  }

  ngOnInit() {
  }

  addMovie() {
    this.store.dispatch(new AddMovieAction({
      title: this.movieForm.value.title, releaseDate: this.movieForm.value.releaseDate,
      description: this.movieForm.value.description
    }));

  }
}
