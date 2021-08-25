import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    CashFlowComponent,
    NetWorthComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
