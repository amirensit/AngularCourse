import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './auth/auth-interceptor.service';

@NgModule({
  // we don't need to export services because they work differently from components.
  providers: [
    // multi parameter is used here to allow for multiple interceptor of that type even if we need only one interceptor.
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
})
export class CoreModule {

}
