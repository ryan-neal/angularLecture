import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { FooooooodComponent } from './foooooood/foooooood.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    FooooooodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
