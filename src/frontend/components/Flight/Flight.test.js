import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Flight } from './Flight';
import { dateFormater } from './../../helpers/dateFormarter';

configure({ adapter: new Adapter() });

describe('Flight', () => {
  test('Correct props', () => {
    const props = {
      origin: 'Barcelona',
      destination: 'London Heathrow',
      departure: '2019-06-01T10:25:00Z'
    };
    const wrapper = shallow(
      <Flight
        origin={props.origin}
        destination={props.destination}
        departure={props.departure}
      />
    );
    const fligth = wrapper.find(`[data-test="Flight"]`);
    const origin = fligth.find('p').at(0);
    const destination = fligth.find('p').at(2);
    const departure = fligth.find('p').at(3);
    expect(fligth.length).toBe(1);
    expect(origin.text()).toBe(props.origin);
    expect(destination.text()).toBe(props.destination);
    expect(departure.text()).toBe(dateFormater(props.departure));
  });
});
