import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AeComponent } from './ae/ae.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { PricingComponent } from './pricing/pricing.component';
import { FlightReviewComponent } from './flight-review/flight-review.component';
import { FareSummaryComponent } from './fare-summary/fare-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AeComponent,
    ItineraryComponent,
    PricingComponent,
    FlightReviewComponent,
    FareSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
