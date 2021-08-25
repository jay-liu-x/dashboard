import { Component, OnInit } from '@angular/core';
import { NetWorthService } from 'src/services/net-worth.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  investments: any[] = [];
  cash: any[] = [];
  totalNetWorth = 0;
  investmentNetWorth = 0;
  cashNetWorth = 0;

  constructor(private netWorthService: NetWorthService) {}

  ngOnInit(): void {
    this.netWorthService.getAllInvestments().subscribe((data:any) => {
      this.generateInvestmentData(data)
    });
    this.netWorthService.getAllCashAccounts().subscribe((data:any) => {
      this.generateCashData(data)
    });
    this.netWorthService.getNetWorthById({category: '/total', id:-1}).subscribe((data:any) => {
      this.totalNetWorth = data
    });
    this.netWorthService.getNetWorthById({category: 'cash_accounts/total', id:-1}).subscribe((data:any) => {
      this.cashNetWorth = data
    });
    this.netWorthService.getNetWorthById({category: 'investment_accounts/total', id:-1}).subscribe((data:any) => {
      this.investmentNetWorth = data
    });
  }

  generateInvestmentData(data: any) {
    data.forEach((element: { symbol: any; quantity: any; closePrice: any; date: any; }) => {
      let data = {symbol: element.symbol, value: element.quantity*element.closePrice, date: element.date}
      this.investments.push(data)
    });
    this.investments.sort((a, b) => (a.date < b.date) ? 1 : -1)
  }

  generateCashData(data:any) {
    data.forEach((element: { name: string; value: number; currentDate: string; }) => {
      let data = {name: element.name, value: element.value, date: element.currentDate}
      this.cash.push(data)
    });
  }

}
