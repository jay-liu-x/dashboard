import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopFiveService {

  constructor(private http:HttpClient) { }

  getTopFive(){
    return this.http.get(`http://profoliomanager-profoliomanager.namdevops29.conygre.com/investments/top_five_gainers`);
  }
}
