import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CashflowService {
  constructor(private http: HttpClient) {}

  getIncomes() {
    return this.http.get(
      `http://profoliomanager-profoliomanager.namdevops29.conygre.com/cash_flow/incomes`
    );
  }

  getSpendings() {
    return this.http.get(
      `http://profoliomanager-profoliomanager.namdevops29.conygre.com/cash_flow/spendings`
    );
  }

  getOverall() {
    return this.http.get(
      `http://profoliomanager-profoliomanager.namdevops29.conygre.com/cash_flow/overall`
    );
  }
}
