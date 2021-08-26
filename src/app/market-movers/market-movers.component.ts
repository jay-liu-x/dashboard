import { Component, OnInit } from '@angular/core';
import{MarketMoversService} from  'src/services/market-movers.service';

@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {
  DOWJONESData:any ={percentage:'-0.8%' , difference:'-1.0',show: '0.0%'}
  SP500Data: any = {percentage:'5.0%' , difference:'2.0',show: '0.0%'}
  NASDQData: any = {percentage:'1.2%' , difference:'3.0',show: '0.0%'}
  BondData: any = {percentage:'4.0%' , difference:'4.0',show: '0.0%'}

  constructor(private marketmoversService:MarketMoversService) { }

  ngOnInit(): void {

   /* this.marketmoversService.getDOWJONES()
      .subscribe((data:any)=>{
        console.log(data)
        this.DOWJONESData['percentage'] =  (data['prices'][0]['close']/ data['prices'][1]['close'])*100-100
        this.DOWJONESData['percentage'] = this.DOWJONESData['percentage'].toFixed(2) +'%'
        this.DOWJONESData['difference'] = (data['prices'][0]['close'] - data['prices'][1]['close']).toFixed(2)
        //initialization
        this.DOWJONESData['show'] = this.DOWJONESData['percentage']
        
      })

      this.marketmoversService.getSP500()
      .subscribe((data:any)=>{
        console.log(data)
        this.SP500Data['percentage'] = (data['prices'][0]['close']/ data['prices'][1]['close'])*100-100
        this.SP500Data['percentage'] = this.SP500Data['percentage'].toFixed(2) +'%'
        this.SP500Data['difference'] = (data['prices'][0]['close'] - data['prices'][1]['close']).toFixed(2)
        //initialization
        this.SP500Data['show'] = this.SP500Data['percentage']
        
      })

      this.marketmoversService.get10YearBond()
      .subscribe((data:any)=>{
        console.log(data)
        this.BondData['percentage'] = (data['prices'][0]['close']/ data['prices'][1]['close'])*100-100
        this.BondData['percentage'] = this.BondData['percentage'].toFixed(2) +'%'
        this.BondData['difference'] = (data['prices'][0]['close'] - data['prices'][1]['close']).toFixed(2)
        //initialization
        this.BondData['show'] = this.BondData['percentage']
        
      })

      this.marketmoversService.getNASDQ()
      .subscribe((data:any)=>{
        console.log(data)
        this.NASDQData['percentage'] = (data['prices'][0]['close']/ data['prices'][1]['close'])*100-100
        this.NASDQData['percentage'] = this.NASDQData['percentage'].toFixed(2) +'%'
        this.NASDQData['difference'] = (data['prices'][0]['close'] - data['prices'][1]['close']).toFixed(2)
        //initialization
        this.NASDQData['show'] = this.NASDQData['percentage']
        
      })*/





  }

  showPercentage(){
    this.DOWJONESData['show'] = this.DOWJONESData['percentage']
    this.SP500Data['show'] = this.SP500Data['percentage']
    this.NASDQData['show'] = this.NASDQData['percentage']
    this.BondData['show'] = this.BondData['percentage']
  }
  showDifference(){

    this.DOWJONESData['show'] = this.DOWJONESData['difference']
    this.SP500Data['show'] = this.SP500Data['difference']
    this.NASDQData['show'] = this.NASDQData['difference']
    this.BondData['show'] = this.BondData['difference']
  }

}
