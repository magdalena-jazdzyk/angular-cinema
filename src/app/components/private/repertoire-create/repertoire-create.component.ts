import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {formatDate} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-repertoire-create',
  templateUrl: './repertoire-create.component.html',
  styleUrls: ['./repertoire-create.component.sass']
})
export class RepertoireCreateComponent implements OnInit {
  repertoireForm = new FormGroup({});

  movieId: number;

  constructor(public formBuilder: FormBuilder, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => this.movieId = p.movieId).unsubscribe();
    this.repertoireForm = this.formBuilder.group({
      dateValue: [null, Validators.required],
      time: [null, Validators.required],
    });

  }

  add() {
    console.log(this.repertoireForm.value);
    console.log(this.movieId);
  }
}
