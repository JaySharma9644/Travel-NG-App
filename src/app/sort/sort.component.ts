import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightsModel } from '../store/flightsStore/flight.model';
import { Store, select } from '@ngrx/store';
import * as FilterActions from '../store/flightsStore/act.action';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  RequestData;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mockDataService: MockDataService,
    private store: Store<FlightsModel>
  ) {
    this.travelForm.valueChanges.subscribe((data) => {
      console.log(data);
      this.RequestData = data;
    });
  }
  travelForm = this.fb.group({
    duration: new FormControl(''),
    airline: new FormControl(''),
  });

  ngOnInit(): void {}
  Submit() {
    var mockData = this.mockDataService.getEntityDetails(100);
    var flightList = mockData.response;
    this.store.dispatch(
      new FilterActions.SortFlight({
        params: this.RequestData,
        data: flightList,
      })
    );
    this.router.navigateByUrl('flights');
  }
}
