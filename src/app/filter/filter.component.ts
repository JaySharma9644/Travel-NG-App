import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
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
  classFormArray: FormArray;
  public types: Array<any> = [
    { title: 'Business Class', id: 100, value: false },
    { title: 'Economy Class', id: 200, value: false },
  ];

  travelForm = this.fb.group({
    minPrice: new FormControl(''),
    maxPrice: new FormControl(''),
    types: new FormArray([]),
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

  ngOnInit(): void {
    this.classFormArray = this.travelForm.controls.types as FormArray;
    this.types.forEach((checkbox) => {
      this.classFormArray.push(new FormControl(checkbox));
    });
  }
  Reset() {
    this.router.navigateByUrl('flights');
  }
  Apply() {
    console.log(this.RequestData);
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
