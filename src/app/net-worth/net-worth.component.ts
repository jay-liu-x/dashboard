import { Component, NgModule, OnInit } from '@angular/core';
import { NetWorthService } from 'src/services/net-worth.service';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})

export class NetWorthComponent implements OnInit {
  lineChartData = [{ data: [1400], label: 'Net Worth' }]
  lineChartLabels = [""]
  lineChartType: any = 'line';
  lineChartLegend: boolean = true;
  lineChartOptions:  any = {
    scaleShowVerticalLines: false,
    responsive: false,
  };

  paramObj = {category: '/', id:-1}

  constructor(private netWorthService: NetWorthService) {}

  ngOnInit(): void {
    this.netWorthService.getNetWorthById(this.paramObj).subscribe((netWorthData:any) => {
      this.makeChart(netWorthData)
    });
  }

  makeChart(netWorthData:any): void {
    netWorthData.forEach((data: { date: string; networth: number; }) => {
      this.lineChartLabels.push(data.date)
      this.lineChartData[0].data.push(data.networth)
    })
    this.lineChartLabels.shift()
    this.lineChartData[0].data.shift()
  }
}
