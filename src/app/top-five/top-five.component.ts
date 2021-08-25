import { Component, OnInit } from '@angular/core';
import{TopFiveService} from  'src/services/top-five.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})
export class TopFiveComponent implements OnInit {

  reportDataGain=[
    {symbol:''},
    {symbol:''},
    {symbol:''},
    {symbol:''},
    {symbol:''}
  ]
  reportDataLose=[
    {symbol:''},
    {symbol:''},
    {symbol:''},
    {symbol:''},
    {symbol:''}
  ]

  constructor(private topfiveService:TopFiveService) { }

  ngOnInit(): void {
    this.topfiveService.getTopFiveGainers()
      .subscribe((data:any)=>{
        console.log(data)
        for(let i=0;i<5;i++){
          this.reportDataGain[i]['symbol'] = data[i]['symbol']
        }
      })

    this.topfiveService.getTopFiveLosers()
      .subscribe((data:any)=>{
        console.log(data)
        for(let i=0;i<5;i++){
          this.reportDataLose[i]['symbol'] = data[i]['symbol']
        }
      })


  }

  

}
