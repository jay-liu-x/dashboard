import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  // requestOptions = {
  //   headers: new Headers({
  //     'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
  //     'x-rapidapi-key': '230944fce1msh6254527316a6fdap1eee56jsnaa360d722084',
  //   }),
  // };

  getNews() {
    return this.http.get(
      'https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news',
      {
        headers: {
          'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
          'x-rapidapi-key':
            '230944fce1msh6254527316a6fdap1eee56jsnaa360d722084',
        },
      }
    );
  }
}
