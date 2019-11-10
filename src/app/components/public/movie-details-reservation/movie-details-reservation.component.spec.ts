import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsReservationComponent } from './movie-details-reservation.component';

describe('MovieDetailsReservationComponent', () => {
  let component: MovieDetailsReservationComponent;
  let fixture: ComponentFixture<MovieDetailsReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
