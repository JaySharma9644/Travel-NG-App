import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightsModel } from '../store/flightsStore/flight.model';
import { Store, select } from '@ngrx/store';
import * as FilterActions from '../store/flightsStore/act.action';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  RequestData: any;
  travelForm = this.fb.group({
    minPrice: new FormControl(''),
    maxPrice: new FormControl(''),
    class: new FormControl(''),
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mockDataService: MockDataService,
    private store: Store<FlightsModel>
  ) {
    this.travelForm.valueChanges.subscribe((data) => {
      this.RequestData = data;
    });
  }

  ngOnInit(): void {}
  Reset() {
    this.router.navigateByUrl('flights');
  }
  Apply() {
    var mockData = this.mockDataService.getEntityDetails(100);
    var flightList = mockData.response;
    this.store.dispatch(
      new FilterActions.SearchFlight({
        params: this.RequestData,
        data: flightList,
      })
    );
    this.router.navigateByUrl('flights', this.RequestData);
  }
}
