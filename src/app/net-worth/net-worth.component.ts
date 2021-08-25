import { Component, NgModule, OnInit } from '@angular/core';
import { NetWorthService } from 'src/services/net-worth.service';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})

export class NetWorthComponent implements OnInit {
  // netWorthData = {date: new Date(2021-08-22), networth: 0.1}
  type = 'line'
  data = {labels: [''], datasets: [{
    label: 'Net Worth',
    data: [1]
  }]}
  testdata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }

  paramObj = {category: 'investment_accounts', id:1}

  constructor(private netWorthService: NetWorthService) {}

  ngOnInit(): void {
    this.netWorthService.getNetWorthById(this.paramObj).subscribe((netWorthData:any) => {
      console.log(netWorthData);
      // this.netWorthData = netWorthData
      netWorthData.forEach((data: { date: string; networth: number; }) => {
        this.data.labels.push(data.date)
        this.data.datasets[0].data.push(data.networth)
      });
      this.data.labels.shift()
      this.data.datasets[0].data.shift()
      this.makeChart()
    });
  }

  makeChart(): void {
    console.log(this.data)
    console.log(this.testdata)
  }
}
