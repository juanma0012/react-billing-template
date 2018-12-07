import React from 'react';
import { shallow } from 'enzyme';
import InvoiceCanvas from './InvoiceCanvas'

describe('<InvoiceCanvas />', () => {
    let wrapper
    beforeEach(function () {
        jest.spyOn(InvoiceCanvas.prototype, 'handleChange')
    });
    describe('WHEN the component is rendered ', () => {
        test('SHOULD contains the Diagram button', () => {
            wrapper = shallow(<InvoiceCanvas invoice={{}} />)
            wrapper.instance()
            expect(wrapper.containsAnyMatchingElements([
                <button type="button" className="btn btn-outline-dark">Diagram</button>
            ])).toBe(true);
        });
        test('SHOULD contains the Map button', () => {
            wrapper = shallow(<InvoiceCanvas invoice={{}} />)
            wrapper.instance()
            expect(wrapper.containsAnyMatchingElements([
                <button type="button" className="btn btn-outline-dark">Map</button>
            ])).toBe(true);
        });
    });
});
