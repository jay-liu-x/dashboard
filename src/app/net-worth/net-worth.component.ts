import { Component, NgModule, OnInit } from '@angular/core';
import { NetWorthService } from 'src/services/net-worth.service';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})

export class NetWorthComponent implements OnInit {
  fbImage = ""
  lineChartData = [{ data: [1400], label: 'Net Worth' }]
  lineChartLabels = [""]
  lineChartType: any = 'line';
  lineChartLegend: boolean = false;
  lineChartOptions:  any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{ticks:{beginAtZero: true}}]
    }
  };

  paramObj = {category: 'investment_accounts', id: -1}

  constructor(private netWorthService: NetWorthService) {}

  ngOnInit(): void {
    this.makeChart()
  }

  makeChart(): void {
    if (this.paramObj.category == "cash_accounts") {
      this.lineChartData = [{ data: [2500, 2600, 2200, 1999, 1999, 1999, 1999], label: 'Net Worth' }]
      this.lineChartLabels = ["2021-08-12", "2021-08-13", "2021-08-14", "2021-08-15", "2021-08-16", "2021-08-17", "2021-08-18"]
    } else {
      this.lineChartData = [{ data: [1999], label: 'Net Worth' }]
      this.lineChartLabels = ["2021-08-12"]
      this.netWorthService.getNetWorthById(this.paramObj).subscribe((netWorthData:any) => {
        netWorthData.forEach((data: { date: string; networth: number; }) => {
          this.lineChartLabels.push(data.date)
          this.lineChartData[0].data.push(data.networth)
        })
        this.lineChartLabels.shift()
        this.lineChartData[0].data.shift()
      });
    }
  }

  consoleLog(state: any) {
    this.makeChart()
  }
}
