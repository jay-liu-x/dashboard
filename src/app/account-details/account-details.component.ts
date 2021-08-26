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
  totalNetWorth = '';
  investmentNetWorth = '';
  cashNetWorth = '';

  constructor(private netWorthService: NetWorthService) {}

  ngOnInit(): void {
    this.netWorthService.getAllInvestments().subscribe((data:any) => {
      this.generateInvestmentData(data)
    });
    this.netWorthService.getAllCashAccounts().subscribe((data:any) => {
      this.generateCashData(data)
    });
    this.netWorthService.getNetWorthById({category: 'cash_accounts/total', id:-1}).subscribe((data:any) => {
      this.cashNetWorth = data
    });
    this.netWorthService.getNetWorthById({category: 'investment_accounts/total', id:-1}).subscribe((data:any) => {
      this.investmentNetWorth = data
      this.totalNetWorth = data + this.cashNetWorth
      this.cashNetWorth = this.cashNetWorth.toLocaleString()
      this.investmentNetWorth = this.investmentNetWorth.toLocaleString()
      this.totalNetWorth = this.totalNetWorth.toLocaleString()
    });
  }

  generateInvestmentData(data: any) {
    data.forEach((element: { symbol: any; quantity: any; closePrice: any; date: any; investmentAccountId: any}) => {
      let accountName
      if (element.investmentAccountId == 1) {
        accountName = 'RRSP'
      } else {
        accountName = 'TFSA'
      }
      let day:any = new Date(element.date)
      day.setDate(day.getDate() +1)
      day = day.toLocaleString('default', {month:'short', day: 'numeric'})
      let data = {accountName: accountName, symbol: element.symbol, value: element.quantity*element.closePrice, date: day}
      this.investments.push(data)
    });
    this.investments.sort((a, b) => (a.date < b.date) ? 1 : -1)
  }

  generateCashData(data:any) {
    data.forEach((element: { name: string; value: number; currentDate: string; }) => {
      let day:any = new Date(element.currentDate)
      day.setDate(day.getDate() +1)
      day = day.toLocaleString('default', {month:'short', day: 'numeric'})
      let data = {company: 'CIBC', name: element.name, value: element.value, date: day}
      this.cash.push(data)
    });
  }

}
