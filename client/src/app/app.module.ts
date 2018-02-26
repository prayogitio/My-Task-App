import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { TaskComponent } from './task/task.component';
import { TaskService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  exports: [BrowserModule, HttpModule],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
