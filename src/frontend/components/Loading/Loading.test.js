import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loading } from './Loading';

configure({ adapter: new Adapter() });

describe('Loader', () => {
  it('Render Snapshot', () => {
    const output = renderer.create(<Loading />);
    expect(output).toMatchSnapshot();
  });

  it('Render', () => {
    const wrapper = shallow(<Loading />);
    const loader = wrapper.find(`[data-test="Loading"]`);
    expect(loader.length).toBe(1);
  });
});
