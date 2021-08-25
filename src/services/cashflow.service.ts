import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CashflowService {
  constructor(private http: HttpClient) {}

  getIncome() {
    return this.http.get(
      `http://profoliomanager-profoliomanager.namdevops29.conygre.com/cash_flow/income`
    );
  }

  getSpending() {
    return this.http.get(
      `http://profoliomanager-profoliomanager.namdevops29.conygre.com/cash_flow/spending`
    );
  }

  getOverall() {
    return this.http.get(
      `http://profoliomanager-profoliomanager.namdevops29.conygre.com/cash_flow/overall`
    );
  }
}
