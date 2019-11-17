import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {Routes, RouterModule} from '@angular/router';
import {MatCardModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatNativeDateModule} from '@angular/material';
import {FormlyModule} from '@ngx-formly/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {NgxsModule} from '@ngxs/store';
import {UserState} from './user.state';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule} from 'apollo-angular';
import {HttpLinkModule} from 'apollo-angular-link-http';
import {MovieState} from './movie.state';
import {MovieListComponent} from './movie-list/movie-list.component';
import {ReservationState} from './reservation.state';
import {ReservationComponent} from './reservation/reservation.component';
import {RepertoireState} from './state/repertoire.state';
import {SeatsState} from './state/seats.state';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {MovieVideoState} from './state/movie-video.state';
import {ImageState} from './state/image.state';
import {RepertoireCreateComponent} from '../private/repertoire-create/repertoire-create.component';
import {FormlyMatDatepickerModule} from '@ngx-formly/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieDetailsReservationComponent } from './movie-details-reservation/movie-details-reservation.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'movie/:id/:repertoireId',
    component: MovieDetailsComponent
  }
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, MovieListComponent, ReservationComponent, MovieDetailsComponent, EditMovieComponent, MovieDetailsReservationComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    FormlyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    MatButtonModule,
    NgxsModule.forFeature([UserState, MovieState, ReservationState, RepertoireState, SeatsState, MovieVideoState, ImageState]),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,

  ],
  entryComponents: [
    ReservationComponent, // naszkomponent bedzie wywołany z poziomu kodu annie z linku
    EditMovieComponent
  ]
})
export class PublicModule {
}
