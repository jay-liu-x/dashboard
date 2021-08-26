import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MarketMoversService {
  constructor(private http: HttpClient) {}

  getDOWJONES() {
    return this.http.get(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=%5EDJI&region=US`,
      {
        headers: {
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'b0062ec590mshff694b3ce63c71fp12cfccjsnf0e6494799a0',
        },
      }
    );
  }

  getSP500() {
    return this.http.get(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=%5EGSPC&region=US`,
      {
        headers: {
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'b0062ec590mshff694b3ce63c71fp12cfccjsnf0e6494799a0',
        },
      }
    );
  }

  get10YearBond() {
    return this.http.get(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=%5ETNX&region=US`,
      {
        headers: {
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'b0062ec590mshff694b3ce63c71fp12cfccjsnf0e6494799a0',
        },
      }
    );
  }

  getNASDQ() {
    return this.http.get(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=%5EIXIC&region=US`,
      {
        headers: {
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'b0062ec590mshff694b3ce63c71fp12cfccjsnf0e6494799a0',
        },
      }
    );
  }

  //"https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=%5EGSPC&region=US"
}
