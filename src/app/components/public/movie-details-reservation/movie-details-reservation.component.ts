import {Component, Inject, Input, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {RepertoireDto} from '../../../../api/models/repertoire-dto';
import {SeatDto} from '../../../../api/models/seat-dto';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LoadRepertoireByMovieIdAction} from '../state/repertoire.state';
import {ClearSeatsActions, LoadSeatsActions, ReserveSeatActions} from '../state/seats.state';

@Component({
  selector: 'app-movie-details-reservation',
  templateUrl: './movie-details-reservation.component.html',
  styleUrls: ['./movie-details-reservation.component.css']
})
export class MovieDetailsReservationComponent implements OnInit {

  @Select(state => state.repertoire.repertoireList)
  repertoireList$: Observable<RepertoireDto[]>;
  tab: string[] = [];

  @Select(state => state.seats.seats)
  seats$: Observable<SeatDto[]>;

  repertoireId: number = null;

  @Input()
  movieId: number;


  constructor(public store: Store) {
  }


  ngOnInit() {
    console.log(this.movieId);

    console.log(new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7).toLocaleDateString());

    for (let i = 0; i < 7; i++) {
      this.tab.push(new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * i).toLocaleDateString());
    }


  }

  loadRepertoire(element: string) {
    console.log(element);
    this.store.dispatch(new LoadRepertoireByMovieIdAction(element, this.movieId));
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
  }

  reserve(i: number, j: number) {
    this.store.dispatch(new ReserveSeatActions(this.movieId, i, j, this.repertoireId));
  }
}
