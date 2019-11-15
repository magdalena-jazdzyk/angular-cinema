import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {formatDate} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ReserveSeatActions} from '../../public/state/seats.state';
import {AddRepertoireAction} from '../../public/state/repertoire.state';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-repertoire-create',
  templateUrl: './repertoire-create.component.html',
  styleUrls: ['./repertoire-create.component.css']
})
export class RepertoireCreateComponent implements OnInit {
  repertoireForm = new FormGroup({});

  movieId: number;

  constructor(public formBuilder: FormBuilder, public activatedRoute: ActivatedRoute, public store: Store) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => this.movieId = p.movieId).unsubscribe();
    this.repertoireForm = this.formBuilder.group({
      dateValue: [null, Validators.required],
      time: [null, Validators.required],
    });

  }

  add() {
    console.log(this.repertoireForm.value.dateValue.toLocaleString());
    console.log(this.repertoireForm.value);
    console.log(this.movieId);

    this.store.dispatch(new AddRepertoireAction({
      movieId: this.movieId,
      date: this.repertoireForm.value.dateValue.toLocaleString().split(',')[0].split('.').join('-'),
      time: this.repertoireForm.value.time
    }));

  }
}
