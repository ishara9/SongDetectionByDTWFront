import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TuneGuesserBodyComponent } from './app-tune-guesser/app-tune-guesser.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecorderComponent } from './recorder/recorder.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

import '@cds/core/button/register.js';
import '@cds/core/file/register.js';
@NgModule({
  declarations: [
    AppComponent,
    TuneGuesserBodyComponent,
    RecorderComponent,
    FileUploaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
