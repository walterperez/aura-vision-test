export interface flight {
  origin: string;
  destination: string;
  departure: string;
}

export interface data {
  flights: flight[];
}

export function fakeData(): Promise<data> {
  let data: data = {
    flights: [
      {
        origin: 'London',
        destination: 'Barcelona',
        departure: '2019-06-01T16:05:00Z'
      },
      {
        origin: 'London',
        destination: 'Barcelona',
        departure: '2019-06-02T16:05:00Z'
      },
      {
        origin: 'Barcelona',
        destination: 'London Heathrow',
        departure: '2019-06-01T10:25:00Z'
      }
    ]
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
}
