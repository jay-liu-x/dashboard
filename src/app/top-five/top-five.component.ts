import { Component, OnInit } from '@angular/core';
import{TopFiveService} from  'src/services/top-five.service';
@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})
export class TopFiveComponent implements OnInit {

  reportDataGain=[
    {symbol:'',percentage:0},
    {symbol:'',percentage:0},
    {symbol:'',percentage:0},
    {symbol:'',percentage:0},
    {symbol:'',percentage:0}
  ]
  reportDataLose=[
    {symbol:'',percentage:0.0},
    {symbol:'',percentage:0.0},
    {symbol:'',percentage:0.0},
    {symbol:'',percentage:0.0},
    {symbol:'',percentage:0.0}
  ]

  constructor(private topfiveService:TopFiveService) { }

  ngOnInit(): void {
    this.topfiveService.getTopFiveGainers()
      .subscribe((data:any)=>{
        console.log(data)
       
        for(let i=0;i<5;i++){
          this.reportDataGain[i]['symbol'] = data[i]['symbol']
          this.reportDataGain[i]['percentage'] =((data[i]['closePrice']/ data[i]['purchasePrice'])*100-100)
        }
        this.reportDataGain.sort(function(a, b) {
          return b.percentage-a.percentage;
      });
      //this.reportDataGain=this.reportDataGain.reverse()

     
      })

    this.topfiveService.getTopFiveLosers()
      .subscribe((data:any)=>{
        console.log(data)
        for(let i=0;i<5;i++){
          this.reportDataLose[i]['symbol'] = data[i]['symbol']
          this.reportDataLose[i]['percentage'] =(data[i]['closePrice']/ data[i]['purchasePrice'])*100-100
        }

        this.reportDataLose.sort(function(a, b) {
          return a.percentage-b.percentage;
      });
      //this.reportDataGain=this.reportDataGain.reverse()
      })


  }

  

}
