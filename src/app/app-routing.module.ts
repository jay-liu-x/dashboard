import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketMoversComponent } from './market-movers/market-movers.component';

const routes: Routes = [
  {path:'market-movers',component:MarketMoversComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
