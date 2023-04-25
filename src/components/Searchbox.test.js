import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe("SearchBox works", () => {
	it('renders correctly', () => {
		expect(shallow(<SearchBox />));
	})
})
