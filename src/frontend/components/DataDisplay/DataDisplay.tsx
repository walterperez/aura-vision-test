import React, { Component } from 'react';
import { fakeData, flight, getFlights } from './fakeData';
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
  message: string;
}
interface propsInterface {}

export class DataDisplay extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
    this.state = {
      startDate: new Date(),
      flights: [],
      loading: false,
      message: ''
    };
    this.changeDate = this.changeDate.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  async searchClick() {
    this.setState({
      loading: true,
      message: ''
    });
    const data = await getFlights(this.state.startDate);
    if (typeof data === 'string') {
      this.setState({
        loading: false,
        message: data
      });
    } else {
      //@ts-ignore
      this.setState({
        loading: false,
        //@ts-ignore
        flights: data
      });
    }
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
    const { flights, loading, startDate, message } = this.state;
    return (
      <div className="DataDisplay">
        {message && <h2 className="DataDisplay__Message">{message}</h2>}
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
