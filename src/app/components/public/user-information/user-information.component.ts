import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Store} from '@ngxs/store';
import {ReservationComponent} from '../reservation/reservation.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.sass']
})
export class UserInformationComponent implements OnInit {

  constructor(public  matDialogRef: MatDialogRef<UserInformationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  close() {
    console.log('ala');
    this.matDialogRef.close();
    console.log('ma kota');
  }
}
