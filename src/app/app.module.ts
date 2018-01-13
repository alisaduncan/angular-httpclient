import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdListModule, MdSidenavModule, MdCardModule, MdIconModule, MdDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { TodoService } from './todo/todo.service';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdListModule,
    MdSidenavModule,
    MdCardModule,
    MdIconModule,
    MdDialogModule,
    FlexLayoutModule
  ],
  providers: [ UserService, TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
