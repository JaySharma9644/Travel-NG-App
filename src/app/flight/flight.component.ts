import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightsModel} from '../store/flightsStore/flight.model';
import { Store,select} from '@ngrx/store';
import * as FilterActions from '../store/flightsStore/act.action';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
})
export class FlightComponent implements OnInit {
  @Input() data: any;
  RequestData;
  constructor(private fb: FormBuilder, 
    private router: Router,
    private mockDataService:MockDataService,
    private store:Store<FlightsModel>
    ) {
    this.travelForm.valueChanges.subscribe((data) => {
      this.RequestData = data;
    });
  }

  travelForm = this.fb.group({
    departure: new FormControl(''),
    destination: new FormControl(''),
    travelDate: new FormControl(''),
    returnDate: new FormControl(''),
    travelers: new FormControl(''),
    type: new FormControl(''),
  });

  ngOnInit() {
  }
  onSubmit() {
     var mockData = this.mockDataService.getEntityDetails(this.data.entityCode);
     var flightList = mockData.response;
    this.store.dispatch(new FilterActions.SearchFlight({params:this.RequestData,data:flightList}) );
    this.router.navigateByUrl('flights',this.data);
  }
}
