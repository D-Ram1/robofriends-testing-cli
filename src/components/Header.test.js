import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header renders", () => {
	it('renders correctly', () => {
		expect(shallow(<Header />));
	})
})