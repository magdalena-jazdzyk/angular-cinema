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
];

@NgModule({
  declarations: [AdminPanelComponent, RepertoireCreateComponent],
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
    NgxsModule.forRoot([DeviceState]),
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
  ]
})
export class PrivateModule {
}
