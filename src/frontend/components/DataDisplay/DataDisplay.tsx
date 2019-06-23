import React, { Component } from 'react';
import { fakeData, flight } from './fakeData';
import { Flight } from './../Flight/Flight';
import { Loading } from '../Loading/Loading';
import DatePicker from 'react-datepicker';
import { SearchButton } from './../SearchButton/SearchButton';
import 'react-datepicker/dist/react-datepicker.css';
import './DataDisplay.scss';

interface stateInterface {
  startDate: Date;
  flights: flight[];
  loading: boolean;
}
interface propsInterface {}

export class DataDisplay extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
    this.state = {
      startDate: new Date(),
      flights: [],
      loading: false
    };
    this.changeDate = this.changeDate.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  async searchClick() {
    this.setState({
      loading: true
    });
    const data = await fakeData();
    this.setState({
      loading: false,
      flights: data.flights
    });
  }

  changeDate(date: Date) {
    this.setState({
      startDate: date
    });
  }

  async getFlights(dateToFlight: string) {
    let data = await fakeData();
    this.setState({
      flights: data.flights,
      loading: false
    });
  }

  componentDidMount() {}

  render() {
    const { flights, loading, startDate } = this.state;
    return (
      <div className="DataDisplay">
        {!loading &&
          !flights.length && [
            <h1>When would you like to fly?</h1>,
            <DatePicker selected={startDate} onChange={this.changeDate} />,
            <SearchButton handleClick={this.searchClick} />
          ]}
        {loading && <Loading />}
        {flights.length &&
          flights.map(({ origin, destination, departure }) => (
            <Flight
              origin={origin}
              destination={destination}
              departure={departure}
            />
          ))}
      </div>
    );
  }
}
