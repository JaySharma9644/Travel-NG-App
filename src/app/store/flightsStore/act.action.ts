import { Action } from '@ngrx/store';
import { FlightsModel } from './flight.model';
export const FlightLoadDataConst = '[Load Flight]  Component';
export const FlightSearchConst = '[Search  Flight] Component';
export const FlightSortConst = '[Sort  Flight] Component';
export const FlightFilterConst = '[Filter  Flight] Component';

export class FlightLoadData implements Action {
  readonly type = FlightLoadDataConst;
  constructor(public payload: any) {}
}
export class SearchFlight implements Action {
  readonly type = FlightSearchConst;
  constructor(public payload: any) {}
}
export class SortFlight implements Action {
  readonly type = FlightSortConst;
  constructor(public payload: any) {}
}

export class FilterFlight implements Action {
  readonly type = FlightFilterConst;
  constructor(public payload: any) {}
}

export type Actions = SortFlight | FilterFlight | SearchFlight | FlightLoadData;
