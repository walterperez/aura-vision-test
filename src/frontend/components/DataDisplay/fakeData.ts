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
    }, 500);
  });
}

export function getFlights(date: Date) {
  return new Promise((resolve, reject) => {
    let data = { data: date.toString() };
    fetch('/rest/flights', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
