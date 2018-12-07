/**
 * This file is important to run unit testing using enzyme and jest
 */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
