export interface FlightsModel {
       id: number,
      airlineName: string,
      flightNo: string,
      source: string,
      destination: string,
      departureTime: string,
      arrivalTime: string,
      currency: string,
      quotation: [],
      stop: number,
      url: string,
      date: string,
      arrival: boolean,
      departure: boolean,
}