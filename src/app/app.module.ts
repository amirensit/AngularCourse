import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './auth/auth.component';
import {RecipeModule} from './recipes/recipe.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    // to remember, every ngModule works on his own.
    // That means if a component declared in Module A, it will be used only inside that module scope !
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // RecipeModule, to note, if we are lazy loading a feature module, we must remove import like this !
    // ShoppingListModule, lazy loaded
    SharedModule,
    CoreModule
    // AuthModule, lazy loaded
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
