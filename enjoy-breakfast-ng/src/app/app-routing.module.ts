import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { TimeLimitComponent } from './time-limit/time-limit.component';
import { InformationComponent } from './information/information.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EnjoyLocationComponent } from './information/enjoy-location/enjoy-location.component';
import { AboutUsComponent } from './information/about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {FeedbackGuard} from './feedback/feedback.guard'

import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'location',
    component: EnjoyLocationComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [FeedbackGuard],
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'time-limit',
    component: TimeLimitComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
   {
    path : '**',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
