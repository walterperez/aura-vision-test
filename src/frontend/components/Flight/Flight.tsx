import React from 'react';
import './Flight.scss';
import { dateFormater } from './../../helpers/dateFormarter';
import { flight } from './../DataDisplay/fakeData';

export function Flight(props: flight) {
  const { origin, destination, departure } = props;

  return (
    <div className="Flight" key={`${origin}${destination}${departure}`} data-test="Flight">
      <div className="Flight_from-to">
        <p className="Flight_from-to__origin">{origin}</p>
        <p className="Flight_from-arrow">&#x279C;</p>
        <p className="Flight_from-to__destination">{destination}</p>
      </div>
      <p className="Flight__departure">{dateFormater(departure)}</p>
    </div>
  );
}
