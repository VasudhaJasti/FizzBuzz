import React from 'react';
import { shallow } from './enzyme';
import App from './App';
import Output from './Output';

describe('Our test suite', () => {

    it('renders all the mocked animal options', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });

    it('adding will add input array elements and output messages', () => {
      const wrapper = shallow(<App/>);
      const outputWrapper = wrapper.find(Output)
      expect(outputWrapper.props().inputArr.length).toEqual(0);
      wrapper.find('input').at(0).simulate('change', {target: {value: 6}});
      wrapper.find('button').at(0).simulate('click');
      expect(wrapper.state().inputArr.length).toEqual(1);

      wrapper.setState({
        inputArr: [5,8, '', 15, 9]
      })
      expect(wrapper.find(Output).dive().find('.list-item').length).toEqual(6);
      expect(wrapper.find(Output).dive().find('.list-item').at(0).text()).toEqual('Buzz');
      expect(wrapper.find(Output).dive().find('.list-item').at(1).text()).toEqual('Divided 8 by 3');
      expect(wrapper.find(Output).dive().find('.list-item').at(2).text()).toEqual('Divided 8 by 5');
      expect(wrapper.find(Output).dive().find('.list-item').at(3).text()).toEqual('Invalid Item');
      expect(wrapper.find(Output).dive().find('.list-item').at(4).text()).toEqual('FizzBuzz');
      expect(wrapper.find(Output).dive().find('.list-item').at(5).text()).toEqual('Fizz');
    })

});
