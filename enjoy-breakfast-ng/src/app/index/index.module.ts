import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { CarouselComponent } from './carousel/carousel.component';

import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NewsTableComponent } from './news-table/news-table.component';
import { SloganAreaComponent } from './slogan-area/slogan-area.component';
import {NewsTableDataService} from './news-table-data.service';
@NgModule({
  declarations: [IndexComponent, CarouselComponent, NewsTableComponent, SloganAreaComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  exports: [
    IndexComponent,
    ],
  providers: [
    NewsTableDataService
  ]
})
export class IndexModule { }
