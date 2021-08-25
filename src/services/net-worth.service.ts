import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetWorthService {

  constructor(private http: HttpClient) { }

  getNetWorthById(params={category:'cash_accounts',id:1}) {
    return this.http.get(
      `http://profoliomanager-profoliomanager.namdevops29.conygre.com/net_worth/${params.category}/${params.id}`
    )
  }

  getAllInvestments() {
    return this.http.get(
      `http://profoliomanager-profoliomanager.namdevops29.conygre.com/investments`
    )
  }
}
