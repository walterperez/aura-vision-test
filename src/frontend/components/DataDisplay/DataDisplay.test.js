import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DataDisplay } from './DataDisplay';
configure({ adapter: new Adapter() });

describe('Describe Class Component', () => {
  describe('Without passing Props', () => {
    test('Must return DatePicker and SearchButton', () => {
      const wrapper = shallow(<DataDisplay />);
      const DatePicker = wrapper.find(`[data-test="datePicker"]`);
      const SearchButton = wrapper.find(`[data-test="SearchButton"]`);
      expect(DatePicker.length).toBe(1);
      expect(SearchButton.length).toBe(1);
    });

    test('Must change state to Loading when clicks on SearchButton', () => {
      const wrapper = mount(<DataDisplay />);
      const SearchButton = wrapper.find(`[data-test="SearchButton"]`);
      expect(wrapper.state().loading).toBe(false);
      //When
      SearchButton.at(0).simulate('click');
      //Then
      expect(wrapper.state().loading).toBe(true);
    });
  });
});
