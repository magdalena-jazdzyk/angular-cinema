import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/public/menu/menu.component';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule, MatAutocompleteModule, MatFormFieldModule, MatButtonModule, MatPaginatorIntl
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PublicModule} from './components/public/public.module';
import {PrivateModule} from './components/private/private.module';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { IndexComponent } from './index/index.component';
import {FooterComponent} from './components/public/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatPaginatorIntlImpl} from './mat-paginator';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PublicModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    PrivateModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatAutocompleteModule,
    MatFormFieldModule,

    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [{
     provide: MatPaginatorIntl,
     useClass: MatPaginatorIntlImpl
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
