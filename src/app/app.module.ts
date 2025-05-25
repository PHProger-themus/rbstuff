import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { AppRoutingModule } from "./app-routing.module";
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { StoreService } from './services/store.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ReadingListComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
