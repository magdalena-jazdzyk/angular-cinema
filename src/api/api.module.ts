/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { ImageControllerService } from './services/image-controller.service';
import { MovieControllerService } from './services/movie-controller.service';
import { RepertoireControllerService } from './services/repertoire-controller.service';
import { ReservationControllerService } from './services/reservation-controller.service';
import { ReviewControllerService } from './services/review-controller.service';
import { SeatControllerService } from './services/seat-controller.service';
import { SecurityControllerService } from './services/security-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { VideoControllerService } from './services/video-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    BasicErrorControllerService,
    ImageControllerService,
    MovieControllerService,
    RepertoireControllerService,
    ReservationControllerService,
    ReviewControllerService,
    SeatControllerService,
    SecurityControllerService,
    UserControllerService,
    VideoControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
