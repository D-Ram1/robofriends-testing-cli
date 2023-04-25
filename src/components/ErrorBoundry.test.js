import React, { Component } from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundry';


describe("Error Boundary works", () => {
	it('renders correctly', () => {
		expect(shallow(<ErrorBoundary />));
	})
})

