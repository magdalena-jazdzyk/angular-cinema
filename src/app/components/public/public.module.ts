import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {Routes, RouterModule} from '@angular/router';
import {
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatNativeDateModule,
  MatDialogModule, MatToolbarModule, MatInputModule
} from '@angular/material';
import {FormlyFieldConfig, FormlyModule} from '@ngx-formly/core';
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
import {EditMovieComponent} from './edit-movie/edit-movie.component';
import {MovieDetailsReservationComponent} from './movie-details-reservation/movie-details-reservation.component';
import {UserInformationComponent} from './user-information/user-information.component';
import {PriceListComponent} from './price-list/price-list.component';
import {TimePipe} from './time.pipe';
import {MovieSearchComponent} from './movie-search/movie-search.component';
import {MatFormFieldModule} from '@angular/material/form-field';


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
  },
  {
    path: 'price',
    component: PriceListComponent
  }
];

export function PasswordMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" is not a valid password`;
}

@NgModule({
  declarations: [LoginComponent, RegisterComponent, MovieListComponent, ReservationComponent, MovieDetailsComponent, EditMovieComponent, MovieDetailsReservationComponent, UserInformationComponent, PriceListComponent, TimePipe, MovieSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormlyModule.forRoot({
      validationMessages: [
        {
          name: 'password',
          message: PasswordMessage
        }
      ]
    }),
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
    MatDialogModule,
    MatToolbarModule

  ],
  entryComponents: [
    ReservationComponent, // naszkomponent bedzie wywołany z poziomu kodu a nie z linku
    EditMovieComponent,
    UserInformationComponent
  ]
})
export class PublicModule {
}
