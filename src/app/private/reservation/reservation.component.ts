import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetReservationByMovieAction } from '../state/reservation.actions';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  id
  formGroup : FormGroup = new FormGroup({});
  formlyFieldConfig : FormlyFieldConfig[] = [
    {
      key:'filmData',
      type:'datapicker',
      templateOptions:{
        label : 'Choose date',
        placeholder : 'date',
        required : true
      }
    }
  ]
  constructor(public store:Store, public activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  loadReservation(){
    this.store.dispatch(new GetReservationByMovieAction(1,"2"))
  }

}
