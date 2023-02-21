import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WetterService } from './wetter.service';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [
    WetterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
