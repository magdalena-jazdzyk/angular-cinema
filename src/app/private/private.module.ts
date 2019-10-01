import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationState } from './state/reservation.state';
import { NgxsModule } from '@ngxs/store';
import { Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'reservation/:id',
    component: ReservationComponent
  }
]

@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,
    NgxsModule.forRoot([ReservationState]),

  ]
})
export class PrivateModule {

 }

