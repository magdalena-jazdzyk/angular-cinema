import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatNativeDateModule, MatDatepickerModule
} from '@angular/material';
import {NgxsModule} from '@ngxs/store';
import {DeviceState} from './device.state';
import {FormlyModule} from '@ngx-formly/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptor/token.interceptor';
import {AuthGuardService} from './service/auth-guard.service';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {RepertoireCreateComponent} from './repertoire-create/repertoire-create.component';
import {FormlyMatDatepickerModule} from '@ngx-formly/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {MovieState} from '../public/movie.state';
import {ReservationState} from '../public/reservation.state';
import {RepertoireState} from '../public/state/repertoire.state';
import {TicketState} from './state/ticket.state';
import {UpdateUserComponent} from './update-user/update-user.component';
import {UserState} from '../public/user.state';
import {ReservationComponent} from '../public/reservation/reservation.component';
import {EditMovieComponent} from '../public/edit-movie/edit-movie.component';
import {UserListComponent} from './user-list/user-list.component';
import {MovieListComponent} from '../public/movie-list/movie-list.component';
import {RegisterComponent} from '../public/user/register/register.component';
import {AddUserComponent} from './add-user/add-user.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AuthGuardService],
    data: {role: 'ROLE_ADMIN'}
  },
  {
    path: 'repertoire/:movieId',
    component: RepertoireCreateComponent,
    canActivate: [AuthGuardService],
    data: {role: 'ROLE_ADMIN'}
  },
  {
    path: 'add/movie',
    component: AddMovieComponent,
    canActivate: [AuthGuardService],
    data: {role: 'ROLE_ADMIN'}
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuardService],
    data: {role: 'ROLE_ADMIN'}
  },
  {
    path: 'add/user',
    component: AddUserComponent,
    canActivate: [AuthGuardService],
    data: {role: 'ROLE_ADMIN'}
  },
];

@NgModule({
  declarations: [AdminPanelComponent, RepertoireCreateComponent, AddMovieComponent, AddMovieComponent, UpdateUserComponent, UserListComponent, AddUserComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    FormlyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    NgxsModule.forRoot([MovieState, RepertoireState, TicketState, UserState]),
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormlyMatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuardService
  ],
  entryComponents: [
    UpdateUserComponent,
    AddMovieComponent
  ]
})
export class PrivateModule {
}
