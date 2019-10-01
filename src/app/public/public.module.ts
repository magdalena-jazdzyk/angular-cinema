import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { Route, Routes, RouterModule } from '@angular/router';
import { NgxsFeatureModule } from '@ngxs/store/src/modules/ngxs-feature.module';
import { NgxsModule } from '@ngxs/store';
import { MovieState } from './state/movie.state';
import { MatTableModule, MatPaginatorModule, MatCard, MatCardModule, MatButtonModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

const routes : Routes = [
  {
    path:'movies',
    component: MovieListComponent 
  },
  {
    path:'login',
    component: LoginComponent 
  }
]

@NgModule({
  declarations: [MovieListComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([MovieState]),
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    MatCardModule,
    FormlyMaterialModule,
    MatButtonModule,
  ]
})
export class PublicModule { }
