import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: any = null;
  exchange: String = '';
  symbol: String = '';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {}

  getNews(): void {
    this.news = null;

    this.newsService.getNews().subscribe((data: any) => {
      this.news = data.map((item: any) => ({
        title: item.title,
        link: item.link,
      }));
    });
  }

  getNewsBySymbol(): void {
    this.news = null;
    
    this.newsService.getNewsBySymbol(this.symbol).subscribe((data: any) => {
      this.news = data.item.map((item: any) => ({
        title: item.title,
        link: item.link,
      }));
    });
  }

  getRandomNews(): void {
    fetch(
      `https://finnhub.io/api/v1/stock/symbol?exchange=${this.exchange}&token=c4j9ruqad3ifgpmd6f5g`,
      {
        method: 'GET',
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const randomSymbol =
          json[Math.floor(Math.random() * json.length)].symbol;
        this.symbol = randomSymbol;
        console.log('Random symbol generated:', randomSymbol);

        this.getNewsBySymbol();
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
