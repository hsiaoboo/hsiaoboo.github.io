import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { TimeLimitComponent } from './time-limit/time-limit.component';
import { InformationComponent } from './information/information.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LocationComponent } from './information/location/Location.component';
import { AboutUsComponent } from './information/about-us/about-us.component';
const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
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
