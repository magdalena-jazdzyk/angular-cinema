import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Store} from '@ngxs/store';
import {ReservationComponent} from '../reservation/reservation.component';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  movieForm = new FormGroup({});

  constructor(public  matDialogRef: MatDialogRef<UserInformationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  closeM() {
    this.matDialogRef.close();
  }
}
