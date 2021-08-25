import { Component, OnInit } from '@angular/core';
import{TopFiveService} from  'src/services/top-five.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})
export class TopFiveComponent implements OnInit {

  reportData=[
    {symbol:''},
    {symbol:''},
    {symbol:''},
    {symbol:''},
    {symbol:''}
  ]

  constructor(private topfiveService:TopFiveService) { }

  ngOnInit(): void {
    this.topfiveService.getTopFive()
      .subscribe((data:any)=>{
        console.log(data)
        for(let i=0;i<5;i++){
          this.reportData[i]['symbol'] = data[i]['symbol']
        }
      })
  }

}
