import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightsModel } from '../store/flightsStore/flight.model';
import { Store, select } from '@ngrx/store';
import * as FilterActions from '../store/flightsStore/act.action';

@Component({
  selector: 'app-fligh-details',
  templateUrl: './fligh-details.component.html',
  styleUrls: ['./fligh-details.component.css'],
})
export class FlighDetailsComponent implements OnInit {
  FlightsList = [];
  flights$: Observable<FlightsModel[]>;
  constructor(private store: Store<FlightsModel>) {
    // this.flights$ = this.store.pipe(select('flights'));
    this.store.select('flights').subscribe((res) => {
      this.FlightsList = res['flights'] ? res['flights'] : [];
      localStorage.setItem('flightList', JSON.stringify(this.FlightsList));
    });
  }

  ngOnInit() {}
}
