import {NgModule} from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {PlaceholderDirective} from './placeholder/placeholder.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  // Important thing to note: Unlike imports, declarations part must be unique. You cannot declare the same component more than
  // one time.
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  // the idea here in sharedModule is that whenever we import SharedModule, we have access to these features.
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    CommonModule
  ],
  // we need this element when we want to create components without a selector or without a route configuration
  entryComponents: [
    AlertComponent
  ]
})
export class SharedModule {

}
