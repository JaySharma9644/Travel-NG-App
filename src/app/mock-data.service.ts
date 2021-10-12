import { Injectable } from '@angular/core';

@Injectable()
export class MockDataService {
  mockData = [
    {
      id: 1,
      airlineName: 'Voolia',
      flightNo: '1367498074',
      source: 'NL',
      destination: 'CN',
      departureTime: '4:41 PM',
      arrivalTime: '11:13 AM',
      currency: 'EUR',
      quotation: [
        {
          price: 125,
          title: 'Basic Economy',
        },
        {
          price: 212,
          title: 'Main cabin',
        },
        {
          price: 300,
          title: 'Economy',
        },
        {
          price: 400,
          title: 'First Class',
        },
      ],
      stop: 0,
      url: 'http://dummyimage.com/217x100.png/5fa2dd/ffffff',
      date: '10/25/2021',
      arrival: false,
      departure: true,
    },
    {
      id: 2,
      airlineName: 'Tambee',
      flightNo: '7705645017',
      source: 'ID',
      destination: 'PT',
      departureTime: '7:02 AM',
      arrivalTime: '12:57 PM',
      currency: 'IDR',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 200,
          title: 'Main cabin',
        },
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 0,
      url: 'http://dummyimage.com/247x100.png/dddddd/000000',
      date: '10/29/2021',
      arrival: true,
      departure: true,
    },
    {
      id: 3,
      airlineName: 'Topicblab',
      flightNo: '7587403833',
      source: 'FR',
      destination: 'CN',
      departureTime: '12:28 PM',
      arrivalTime: '9:25 AM',
      currency: 'EUR',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 200,
          title: 'Main cabin',
        },
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 0,
      url: 'http://dummyimage.com/161x100.png/dddddd/000000',
      date: '10/29/2021',
      arrival: false,
      departure: true,
    },
    {
      id: 4,
      airlineName: 'Mymm',
      flightNo: '3297287624',
      source: 'EC',
      destination: 'BW',
      departureTime: '12:16 PM',
      arrivalTime: '8:30 AM',
      currency: 'USD',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 200,
          title: 'Main cabin',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/191x100.png/5fa2dd/ffffff',
      date: '10/30/2021',
      arrival: true,
      departure: false,
    },
    {
      id: 5,
      airlineName: 'Katz',
      flightNo: '4615864167',
      source: 'PK',
      destination: 'CN',
      departureTime: '7:21 AM',
      arrivalTime: '11:04 AM',
      currency: 'PKR',
      quotation: [
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/109x100.png/cc0000/ffffff',
      date: '10/18/2021',
      arrival: false,
      departure: true,
    },
    {
      id: 6,
      airlineName: 'Dynabox',
      flightNo: '3665359120',
      source: 'US',
      destination: 'PT',
      departureTime: '2:13 PM',
      arrivalTime: '10:56 AM',
      currency: 'USD',
      quotation: [
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/109x100.png/ff4444/ffffff',
      date: '10/22/2021',
      arrival: false,
      departure: false,
    },
    {
      id: 7,
      airlineName: 'Jatri',
      flightNo: '4797693770',
      source: 'CU',
      destination: 'FR',
      departureTime: '4:22 PM',
      arrivalTime: '10:47 AM',
      currency: 'CUP',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 200,
          title: 'Main cabin',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/156x100.png/dddddd/000000',
      date: '10/27/2021',
      arrival: true,
      departure: true,
    },
    {
      id: 8,
      airlineName: 'Devpulse',
      flightNo: '8792382878',
      source: 'MX',
      destination: 'PL',
      departureTime: '1:14 PM',
      arrivalTime: '9:38 AM',
      currency: 'MXN',
      quotation: [
        {
          price: 200,
          title: 'Main cabin',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 0,
      url: 'http://dummyimage.com/205x100.png/dddddd/000000',
      date: '10/21/2021',
      arrival: false,
      departure: true,
    },
    {
      id: 9,
      airlineName: 'Bubblemix',
      flightNo: '4773165324',
      source: 'AR',
      destination: 'YE',
      departureTime: '6:17 AM',
      arrivalTime: '8:01 AM',
      currency: 'ARS',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },

        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/237x100.png/ff4444/ffffff',
      date: '10/22/2021',
      arrival: false,
      departure: true,
    },
    {
      id: 10,
      airlineName: 'Podcat',
      flightNo: '4718636604',
      source: 'TH',
      destination: 'AM',
      departureTime: '2:00 PM',
      arrivalTime: '8:39 AM',
      currency: 'THB',
      quotation: [
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/183x100.png/dddddd/000000',
      date: '10/24/2021',
      arrival: true,
      departure: true,
    },
    {
      id: 11,
      airlineName: 'Jaxworks',
      flightNo: '4511858128',
      source: 'CZ',
      destination: 'CN',
      departureTime: '9:28 AM',
      arrivalTime: '12:26 PM',
      currency: 'CZK',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/106x100.png/cc0000/ffffff',
      date: '10/16/2021',
      arrival: false,
      departure: false,
    },
    {
      id: 12,
      airlineName: 'Thoughtstorm',
      flightNo: '6720903322',
      source: 'RU',
      destination: 'RU',
      departureTime: '1:26 PM',
      arrivalTime: '12:30 PM',
      currency: 'RUB',
      quotation: [
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/204x100.png/ff4444/ffffff',
      date: '10/18/2021',
      arrival: false,
      departure: true,
    },
    {
      id: 13,
      airlineName: 'Topicstorm',
      flightNo: '5638212949',
      source: 'MK',
      destination: 'CN',
      departureTime: '7:15 AM',
      arrivalTime: '10:53 AM',
      currency: 'MKD',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 200,
          title: 'Main cabin',
        },
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      date: '10/16/2021',
      arrival: false,
      departure: true,
    },
    {
      id: 14,
      airlineName: 'Yombu',
      flightNo: '8987019500',
      source: 'KW',
      destination: 'IL',
      departureTime: '3:57 PM',
      arrivalTime: '9:24 AM',
      currency: 'KWD',
      quotation: [
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 0,
      url: 'http://dummyimage.com/139x100.png/5fa2dd/ffffff',
      date: '10/23/2021',
      arrival: false,
      departure: true,
    },
    {
      id: 15,
      airlineName: 'Realbuzz',
      flightNo: '0056597991',
      source: 'BJ',
      destination: 'NG',
      departureTime: '7:52 AM',
      arrivalTime: '8:35 AM',
      currency: 'XOF',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 200,
          title: 'Main cabin',
        },
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 0,
      url: 'http://dummyimage.com/170x100.png/dddddd/000000',
      date: '10/24/2021',
      arrival: true,
      departure: false,
    },
    {
      id: 16,
      airlineName: 'Skivee',
      flightNo: '3594194116',
      source: 'US',
      destination: 'US',
      departureTime: '3:53 PM',
      arrivalTime: '8:05 AM',
      currency: 'USD',
      quotation: [
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 0,
      url: 'http://dummyimage.com/164x100.png/cc0000/ffffff',
      date: '10/28/2021',
      arrival: false,
      departure: false,
    },
    {
      id: 17,
      airlineName: 'Chatterbridge',
      flightNo: '7994356850',
      source: 'VE',
      destination: 'MX',
      departureTime: '5:20 PM',
      arrivalTime: '10:17 AM',
      currency: 'VEF',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 200,
          title: 'Main cabin',
        },
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/210x100.png/ff4444/ffffff',
      date: '10/18/2021',
      arrival: false,
      departure: true,
    },
    {
      id: 18,
      airlineName: 'Twitterlist',
      flightNo: '3384166035',
      source: 'PH',
      destination: 'EG',
      departureTime: '5:33 PM',
      arrivalTime: '9:35 AM',
      currency: 'PHP',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 200,
          title: 'Main cabin',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 0,
      url: 'http://dummyimage.com/142x100.png/dddddd/000000',
      date: '10/26/2021',
      arrival: true,
      departure: false,
    },
    {
      id: 19,
      airlineName: 'Meejo',
      flightNo: '9351151611',
      source: 'PH',
      destination: 'PH',
      departureTime: '11:32 AM',
      arrivalTime: '10:18 AM',
      currency: 'PHP',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 200,
          title: 'Main cabin',
        },
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 0,
      url: 'http://dummyimage.com/178x100.png/5fa2dd/ffffff',
      date: '10/14/2021',
      arrival: true,
      departure: false,
    },
    {
      id: 20,
      airlineName: 'Centidel',
      flightNo: '0104729236',
      source: 'FI',
      destination: 'RU',
      departureTime: '12:54 PM',
      arrivalTime: '9:44 AM',
      currency: 'EUR',
      quotation: [
        {
          price: 140,
          title: 'Basic Economy',
        },
        {
          price: 200,
          title: 'Main cabin',
        },
        {
          price: 350,
          title: 'Economy',
        },
        {
          price: 450,
          title: 'First Class',
        },
      ],
      stop: 1,
      url: 'http://dummyimage.com/184x100.png/5fa2dd/ffffff',
      date: '10/16/2021',
      arrival: false,
      departure: false,
    },
  ];

  getEntityDetails(entityCode) {
    var hours: any;
    var mappingData = {
      100: {
        response: this.mockData.map((flight) => {
          var startTime: Date = new Date(
            flight.date + ' ' + flight.departureTime
          );
          var endTime: Date = new Date(flight.date + ' ' + flight.arrivalTime);

          hours = Math.abs(endTime.valueOf() - startTime.valueOf()) / 36e5;

          flight['duration'] = parseInt(hours);
          return flight;
        }),
      },
    };
    if (mappingData[entityCode]) {
      return mappingData[entityCode];
    } else {
      return { response: {} };
    }
  }

  getCountryMasterData() {
    var unique = [];
    var sourcedistinct = [];
    for (let i = 0; i < this.mockData.length; i++) {
      if (!unique[this.mockData[i].source]) {
        sourcedistinct.push(this.mockData[i].source);
        unique[this.mockData[i].source] = 1;
      }
    }
    return sourcedistinct;
  }

  constructor() {}
}
