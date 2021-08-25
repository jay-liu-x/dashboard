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
    this.netWorthService.getNetWorthById({category: '/', id:-1}).subscribe((data:any) => {
      let netWorth = this.getNewestNetWorth(data)
      this.totalNetWorth = netWorth[0].netWorth
    });
    this.netWorthService.getNetWorthById({category: 'cash_accounts', id:-1}).subscribe((data:any) => {
      let netWorth = this.getNewestNetWorth(data)
      this.cashNetWorth = netWorth[0].netWorth
    });
    this.netWorthService.getNetWorthById({category: 'investment_accounts', id:-1}).subscribe((data:any) => {
      let netWorth = this.getNewestNetWorth(data)
      this.investmentNetWorth = netWorth[0].netWorth
    });
  }

  getNewestNetWorth(data:any) {
    let netWorth: { date: string; netWorth: number; }[] = []
    data.forEach((element: { date: string; networth: number; }) => {
      let data = {date: element.date, netWorth: element.networth}
      netWorth.push(data)
    })
    return netWorth.sort((a, b) => (a.date < b.date) ? 1 : -1)
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
