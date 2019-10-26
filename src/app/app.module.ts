import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/public/menu/menu.component';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PublicModule} from './components/public/public.module';
import {PrivateModule} from './components/private/private.module';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent
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
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
