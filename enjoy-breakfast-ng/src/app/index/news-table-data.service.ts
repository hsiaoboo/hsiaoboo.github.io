import { Injectable } from '@angular/core';

@Injectable()
export class NewsTableDataService {

  constructor() {
  }

  // tslint:disable-next-line: typedef
  getNewsData(){
    const news = [
      {type: '【營業公告】', content: '2020/06/25~06/28-端午公休四天', createDate : '2020/06/17'},
      {type: '【營業公告】', content: '2020/06/08-恢復營業', createDate : '2020/05/20'},
      {type: '【營業公告】', content: '2020/05/06~06/07-公休一個月', createDate : '2020/05/05'},
      {type: '【營業公告】', content: '020/01/25~01/28-春節公休四天', createDate : '2020/01/23'}
    ];
    return news;
  }
}
