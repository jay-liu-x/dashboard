import { Component, OnInit } from '@angular/core';
import{MarketMoversService} from  'src/services/market-movers.service';

@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {
  DOWJONES:any ={percentage:0.0 , difference:0.0}

  constructor(private marketmoversService:MarketMoversService) { }

  ngOnInit(): void {

    this.marketmoversService.getDOWJONES()
      .subscribe((data:any)=>{
        console.log(data)
        this.DOWJONES['percentage'] =  (data['prices'][0]['close']/ data['prices'][1]['close'])*100-100
        this.DOWJONES['difference'] = data['prices'][0]['close'] - data['prices'][1]['close']
        
      })
  }

  showPercentage(){
    return this.DOWJONES['percentage'];
  }
  showDifference(){
    return this.DOWJONES['difference'];
  }

}
