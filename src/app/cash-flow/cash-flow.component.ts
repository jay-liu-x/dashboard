import { Component, OnInit } from '@angular/core';
import { CashflowService } from 'src/services/cashflow.service';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css'],
})
export class CashFlowComponent implements OnInit {
  totalIncome: number = 0;
  totalSpending: number = 0;

  showBarChart = false;

  chartData: any = [
    { data: [], label: 'Income' },
    { data: [], label: 'Spending' },
  ];
  chartLabels: Label[] = [
    'Aug 12',
    'Aug 13',
    'Aug 14',
    'Aug 15',
    'Aug 16',
    'Aug 17',
    'Aug 18',
  ];
  chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
      xAxes: [{}],
    },
  };
  chartLegend: boolean = true;
  chartType: any = 'line';
  chartColors: Color[] = [
    {
      // blue
      backgroundColor: 'rgba(30,144,255,0.3)',
      borderColor: 'rgba(0,0,139,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(30,144,255,0.3)',
    },
    {
      // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,0,0,0.3)',
    },
  ];

  constructor(private cashflowService: CashflowService) {}

  ngOnInit(): void {
    this.cashflowService.getIncomes().subscribe((incomesData: any) => {
      this.chartData[0].data = incomesData;
      this.totalIncome = incomesData.reduce((a: any, b: any) => a + b, 0);
    });

    this.cashflowService.getSpendings().subscribe((spendingsData: any) => {
      this.chartData[1].data = spendingsData;
      const totalSpending = spendingsData.reduce((a: any, b: any) => a + b, 0);
      this.totalSpending = totalSpending;
    });
  }

  onToggleView(): void {
    this.showBarChart = !this.showBarChart;
  }
}
