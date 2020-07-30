import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JWTInterceptor} from "./service/jwt.interceptor";
import { AppRoutingModule } from './app-routing.module';
import {IndexModule} from './index/index.module';
import {InformationModule} from './information/information.module';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {NewsTableDataService} from './index/news-table-data.service';
import { from } from 'rxjs';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { TimeLimitComponent } from './time-limit/time-limit.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { AppElementService } from './service/app-element.service';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NewsComponent,
    TimeLimitComponent,
    FeedbackComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    InformationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [NewsTableDataService,
    AppElementService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
