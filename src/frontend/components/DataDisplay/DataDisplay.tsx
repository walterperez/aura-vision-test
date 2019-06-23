import React, { Component } from 'react';
import { fakeData, flight } from './fakeData';
import { Flight } from './../Flight/Flight';
import { Loading } from '../Loading/Loading';

interface stateInterface {
  flights: flight[];
  loading: boolean;
}
interface propsInterface {}

export class DataDisplay extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
    this.state = {
      flights: [],
      loading: true
    };
  }

  async getFlights(dateToFlight: string) {
    let data = await fakeData();
    this.setState({
      flights: data.flights,
      loading: false
    });
  }

  componentDidMount() {
    this.getFlights('alksjdslak');
  }

  render() {
    const { flights, loading } = this.state;
    return (
      <div className="DataDisplay">
        <h1>Hi im data displayer</h1>
        {loading && <Loading />}
        {flights.length > 0 &&
          flights.map(({ origin, destination, departure }) => {
            return (
              <Flight
                origin={origin}
                destination={destination}
                departure={departure}
              />
            );
          })}
      </div>
    );
  }
}
