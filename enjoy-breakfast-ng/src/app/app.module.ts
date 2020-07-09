import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {IndexModule} from './index/index.module';
import {InformationModule} from './information/information.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {NewsTableDataService} from './index/news-table-data.service';
import { from } from 'rxjs';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { TimeLimitComponent } from './time-limit/time-limit.component';
import { InformationComponent } from './information/information.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NewsComponent,
    TimeLimitComponent,
    InformationComponent,
    FeedbackComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule
  ],
  providers: [NewsTableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
