import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { NewsComponent } from './news/news.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';

@NgModule({
  declarations: [
    AppComponent,
    CashFlowComponent,
    NetWorthComponent,
    AccountDetailsComponent,
    TopFiveComponent,
    NewsComponent,
    MarketMoversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
