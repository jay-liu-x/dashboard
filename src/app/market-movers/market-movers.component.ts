import { Component, OnInit } from '@angular/core';
import{MarketMoversService} from  'src/services/market-movers.service';

@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {
  DOWJONESData:any ={percentage:'' , difference:'',show:''}
  //DOWJONES:any

  constructor(private marketmoversService:MarketMoversService) { }

  ngOnInit(): void {

    this.marketmoversService.getDOWJONES()
      .subscribe((data:any)=>{
        console.log(data)
        this.DOWJONESData['percentage'] =  (data['prices'][0]['close']/ data['prices'][1]['close'])*100-100
        this.DOWJONESData['percentage'] = this.DOWJONESData['percentage'] +'%'
        this.DOWJONESData['difference'] = data['prices'][0]['close'] - data['prices'][1]['close']
        //initialization
        this.DOWJONESData['show'] = this.DOWJONESData['percentage']
        
      })
  }

  showPercentage(){
    this.DOWJONESData['show'] = this.DOWJONESData['percentage']
  }
  showDifference(){

    this.DOWJONESData['show'] = this.DOWJONESData['difference']
  }

}
