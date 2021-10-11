import { Injectable } from '@angular/core';
import { FlightComponent } from './flight/flight.component';
import { CarComponent } from './car/car.component';
import { ActivityComponent } from './activity/activity.component';
import { HotelComponent } from './hotel/hotel.component';
@Injectable()
export class AppConfigService {
  getConfiguration() {
    return {
      tabs: [
        {
          id: 1,
          name: 'Flight',
          component: FlightComponent,
          entity:"flight",
          entityCode: 100,
          data: {},
        },
        {
          id: 2,
          name: 'Hotel',
          entity:"hotel",
          component: HotelComponent,
          entityCode: 101,
          data: {},
        },
        {
          id: 3,
          name: 'Car',
          entity:"car",
          component: CarComponent,
          entityCode: 102,
          data: {},
        },
        {
          id: 4,
          name: 'Activity',
          entity:"activity",
          component: ActivityComponent,
          entityCode: 103,
          data: {},
        },
      ],
    };
  }

  constructor() {}
}
