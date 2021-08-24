import { Component, OnInit } from '@angular/core';
import { CashflowService } from 'src/services/cashflow.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css'],
})
export class CashFlowComponent implements OnInit {
  data: Object = {};

  constructor(private cashflowService: CashflowService) {}

  ngOnInit(): void {
    this.cashflowService.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
