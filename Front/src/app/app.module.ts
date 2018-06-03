import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { PCsComponent } from './pcs/pcs.component';
import { PCComponent } from './pcs/pc/pc.component';
import { PCListComponent } from './pcs/pc-list/pc-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PCsComponent,
    PCComponent,
    PCListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
