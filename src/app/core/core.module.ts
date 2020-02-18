import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaticService } from './services/static.service';


import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { AuthenticationService } from './authentication/authentication.service';
import { ApiPrefixInterceptor } from './interceptors/api-prefix.interceptor';


@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    exports: [
      RouterModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    providers: [
      AuthenticationService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpTokenInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorHandlerInterceptor,
        multi: true,
      }
     ,
      StaticService
    ]
  })
  export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      super(parentModule);

    }
  }
