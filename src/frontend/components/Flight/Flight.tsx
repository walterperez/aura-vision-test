import React from 'react';
import { flight } from './../DataDisplay/fakeData';

export function Flight(props: flight) {
  const { origin, destination, departure } = props;

  return (
    <div className="Flight" key={`${origin}${destination}${departure}`}>
      <p>{origin}</p>
      <p>{destination}</p>
      <p>{departure}</p>
    </div>
  );
}
