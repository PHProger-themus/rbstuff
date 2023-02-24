import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/index/about/about.component';
import { PortfolioComponent } from './pages/index/portfolio/portfolio.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from "./app-routing.module";
import { ReadingListComponent } from './pages/reading-list/reading-list.component';
import { StoreService } from './services/store.service';
import { NotFoundComponent } from './common/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AboutComponent,
    PortfolioComponent,
    ReadingListComponent,
    NotFoundComponent
  ],
  imports: [
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
