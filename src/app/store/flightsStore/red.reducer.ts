import { Action } from '@ngrx/store';
import * as FlightsActions from './act.action';
import { FlightsModel } from './flight.model';
const InitialState = {};
export function FlightReducers(
  state = InitialState,
  action: FlightsActions.Actions
) {
  var newFlights;
  switch (action.type) {
    case FlightsActions.FlightLoadDataConst:
      return state;
    case FlightsActions.FlightSearchConst:
      newFlights = searchFlights(action.payload.params, action.payload.data);

      return {
        ...state,
        flights: [...newFlights],
      };
    case FlightsActions.FlightSortConst:
      newFlights = SortFlight(action.payload.params, action.payload.data);

      return {
        ...state,
        flights: [...newFlights],
      };

    case FlightsActions.FlightFilterConst:
      newFlights = filterFlight(action.payload.params, action.payload.data);

      return {
        ...state,
        flights: [...newFlights],
      };
    default:
      return state;
  }
}
function searchFlights(params, data) {
  return data;
}
function filterFlight(params, data) {
  var newData = data.filter((item) => {
    return item.quotation.filter((quote) => {
      return quote.price >= params.minPrice && quote.price <= params.maxPrice;
    });
  });
  return newData;
}
function SortFlight(res, data) {
  var parmakeys = Object.keys(res);
  parmakeys.forEach((key) => {
    switch (key) {
      case 'airline':
        if (res['airline'] == 'asc') {
          return [
            ...data.sort(function (a: any, b: any) {
              if (
                a['airlineName'].toUpperCase() < b['airlineName'].toUpperCase()
              )
                return -1;
            }),
          ];
        } else if (res['airline'] == 'desc') {
          return [
            ...data.sort(function (a: any, b: any) {
              if (
                a['airlineName'].toUpperCase() > b['airlineName'].toUpperCase()
              )
                return -1;
            }),
          ];
        } else {
          return data;
        }

      case 'duration':
        if (res['duration'] == 'asc') {
          return [
            ...data.sort(function (a: any, b: any) {
              return a['duration'] - b['duration'];
            }),
          ];
        } else if (res['duration'] == 'desc') {
          return [
            ...data.sort(function (a: any, b: any) {
              return b['duration'] - a['duration'];
            }),
          ];
        } else {
          return data;
        }

      default:
        return data;
    }
  });
  return data;
}
function sortAsc() {}
function sortDesc() {}
