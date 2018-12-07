/**
 * To setup Enzyme and Jest, go to the file src/setupTests.js
 */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import InvoiceRevision from './components/InvoiceRevision'
import InvoiceCanvas from './components/InvoiceCanvas'
import InvoiceOverview from './components/InvoiceOverview'

describe('<App />', () => {
    let wrapper
    beforeEach(function () {
        jest.spyOn(App.prototype, 'componentDidMount')
    });
    describe('WHEN the component is rendered ', () => {
        test('SHOULD calls the method componentDidMount', () => {
            wrapper = shallow(<App />)
            expect(App.prototype.componentDidMount).toHaveBeenCalledTimes(1)
        });
        test('SHOULD contains the component InvoiceRevision', () => {
            wrapper = shallow(<App />)
            wrapper.instance()
            expect(wrapper.containsAnyMatchingElements([<InvoiceRevision />])).toBe(true);
        });
        test('SHOULD contains the component InvoiceCanvas', () => {
            wrapper = shallow(<App />)
            wrapper.instance()
            expect(wrapper.containsAnyMatchingElements([<InvoiceCanvas />])).toBe(true);
        });
        test('SHOULD contains the component InvoiceOverview', () => {
            wrapper = shallow(<App />)
            wrapper.instance()
            expect(wrapper.containsAnyMatchingElements([<InvoiceOverview />])).toBe(true);
        });
    });
});
