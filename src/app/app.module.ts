import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';

import { HSCapitalPipe }  from './pipes/capital.pipe';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,HSCapitalPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
