import { Component, OnInit } from '@angular/core';
import { CashflowService } from 'src/services/cashflow.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css'],
})
export class CashFlowComponent implements OnInit {
  incomeBarChartData: any = [{ data: [], label: 'Income' }];
  incomeBarChartLabels: any = ['Income'];
  incomeBarChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  incomeBarChartLegend: boolean = true;
  incomeBarChartType: any = 'bar';

  constructor(private cashflowService: CashflowService) {}

  ngOnInit(): void {
    this.cashflowService.getIncome().subscribe((data: any) => {
      this.incomeBarChartData[0].data = [data];
    });
  }
}
