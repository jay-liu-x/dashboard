import { Component, OnInit } from '@angular/core';
import { NetWorthService } from 'src/services/net-worth.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  data = {}

  constructor(private netWorthService: NetWorthService) {}

  ngOnInit(): void {
    this.netWorthService.getAllInvestments().subscribe((data:any) => {
      console.log(data);
      this.data = data;
    });
  }

}
