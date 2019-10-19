import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {Routes, RouterModule} from '@angular/router';
import {MatCardModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatIconModule} from '@angular/material';
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
  }
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, MovieListComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    FormlyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    MatButtonModule,
    NgxsModule.forFeature([UserState, MovieState, ReservationState]),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class PublicModule {
}
