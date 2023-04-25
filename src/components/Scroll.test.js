import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe("Scroll works", () => {
	it('renders correctly', () => {
		expect(shallow(<Scroll />));
	})
})

