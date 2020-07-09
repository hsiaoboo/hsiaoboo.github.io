import { Component, OnInit } from '@angular/core';
import {NewsTableDataService} from '../news-table-data.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.css' , '../../app.component.css']

})
export class NewsTableComponent implements OnInit {

  constructor(private newsTableDataService: NewsTableDataService) {

  }
  newsData;
  ngOnInit(): void {
    this.newsData = this.newsTableDataService.getNewsData();
  }

}
