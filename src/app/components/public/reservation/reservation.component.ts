import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {RepertoireDto} from '../../../../api/models/repertoire-dto';
import {dispatch} from 'rxjs/internal-compatibility';
import {LogoutAction} from '../user.state';
import {CleanRepertoireAction, LoadRepertoireByMovieIdAction} from '../state/repertoire.state';
import {ClearSeatsActions, LoadSeatsActions, ReserveSeatActions} from '../state/seats.state';
import {SeatDto} from '../../../../api/models/seat-dto';
import {CreateReservationAction} from '../reservation.state';
import {DownloadTicketAction} from '../../private/state/ticket.state';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit, OnDestroy {

  @Select(state => state.repertoire.repertoireList)
  repertoireList$: Observable<RepertoireDto[]>;
  tab: string[] = [];

  @Select(state => state.seats.seats)
  seats$: Observable<SeatDto[]>;

  repertoireId: number = null;


  constructor(public  matDialogRef: MatDialogRef<ReservationComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public store: Store) {
  }


  ngOnInit() {
    console.log(this.data);

    console.log(new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7).toLocaleDateString());

    for (let i = 0; i < 7; i++) {
      this.tab.push(new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * i).toLocaleDateString());
    }


  }

  loadRepertoire(element: string) {
    console.log(element);
    this.store.dispatch(new LoadRepertoireByMovieIdAction(element, this.data.id));
    console.log('laduje repertuar');
    this.store.dispatch(new ClearSeatsActions());
  }

  displaySeats(element: RepertoireDto) {
    console.log(element);
    console.log('metoda displaySeat');
    this.repertoireId = element.id;
    this.store.dispatch(new LoadSeatsActions(element.movieId, element.date, String(element.time)));
  }

  checkSeat(seatDtos: SeatDto[], i: number, j: number): string {
    return seatDtos.find(s => s.rowNumber === i && s.columnNumber === j) ? 'zajete' : 'wolne';
    //  console.log(seatDtos, i, j);
    //return 'zajete';
  }

  reserve(i: number, j: number) {
    this.store.dispatch(new ReserveSeatActions(this.data.id, i, j, this.repertoireId));
    //  this.store.dispatch(new CreateReservationAction({movieId: this.data.id, seat: {columnNumber: j, rowNumber: i}}));
  }

  ngOnDestroy(): void {
    // this.store.dispatch(new CleanRepertoireAction());
    this.store.dispatch(new ClearSeatsActions());
  }

  downloadTicket() {
    this.store.dispatch(new DownloadTicketAction(this.repertoireId));
  }
}

