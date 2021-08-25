import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    console.log('news')
    // this.newsService.getNews().subscribe((data: any) => {
    //   console.log(data)
    // });
  }

}
