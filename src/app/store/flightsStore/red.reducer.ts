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
function searchFlights(res, data) {
  return data;
}
function filterFlight(res, data) {
  return data;
}
function SortFlight(res, data) {
  var parmakeys = Object.keys(res);
  parmakeys.forEach((key) => {
    switch (key) {
      case 'airlineAZ':
        data = data.sort((a, b) => (a.airlineName > b.airlineName ? -1 : 1));
        return data;
      case 'airlineZA':
        data = data.sort((a, b) => (a.airlineName > b.airlineName ? 1 : -1));
        return data;
      case 'arrivalLTH':
        data = data.sort((a, b) => (a.arrivalTime > b.arrivalTime ? -1 : 1));
        return data;
      case 'departureLTH':
        data = data.sort((a, b) =>
          a.departureTime > b.departureTime ? -1 : 1
        );
        return data;
      // case 'durationHTL':
      //   res.data =  res.data.sort((a, b) => (a.duration > b.duration ? -1 : 1));
      //   return res.data
      // case 'durationLTH':
      //   res.data =  res.data.sort((a, b) => (a.duration > b.duration ? 1 : -1));
      //   return res.data
    }
  });
  return data;
}
