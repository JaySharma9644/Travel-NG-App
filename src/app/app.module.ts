import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabFactoryComponent } from './tab-factory/tab-factory.component';
import { FlightComponent } from './flight/flight.component';
import { LoadingComponent } from './loading/loading.component';
import { FlighDetailsComponent } from './fligh-details/fligh-details.component';
import { AppConfigService } from './app-config.service';
import { MockDataService } from './mock-data.service';
import { AddHostDirective } from './add-host.directive';
import { StoreModule } from '@ngrx/store';
import { FlightReducers } from './store/flightsStore/red.reducer';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import {NavigationService} from './navigation.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule ,
    StoreModule.forRoot({
      flights : FlightReducers
    })
  ],
  providers: [AppConfigService, MockDataService,NavigationService],
  declarations: [
    AppComponent,
    HelloComponent,
    TabFactoryComponent,
    FlightComponent,
    LoadingComponent,
    FlighDetailsComponent,
    AddHostDirective,
    SortComponent,
    FilterComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
