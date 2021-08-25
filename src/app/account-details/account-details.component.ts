import { Component, OnInit } from '@angular/core';
import { NetWorthService } from 'src/services/net-worth.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  investments = {}
  cash: any[] = [];

  constructor(private netWorthService: NetWorthService) {}

  ngOnInit(): void {
    this.netWorthService.getAllInvestments().subscribe((data:any) => {
      console.log(data);
      this.investments = data;
    });
    this.netWorthService.getAllCashAccounts().subscribe((data:any) => {
      console.log(data);
      data.forEach((element: { name: string; value: number; currentDate: string; }) => {
        let data = {name: element.name, value: element.value, date: element.currentDate}
        this.cash.push(data)
      });
      console.log(this.cash)
    });
  }

}
