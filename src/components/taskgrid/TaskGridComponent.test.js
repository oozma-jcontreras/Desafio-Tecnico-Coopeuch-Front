
import { shallow } from 'enzyme';
import TaskGridComponent from './TaskGridComponent';

describe('', function() {
    it('renders button new task', function() {
        const wrapper = shallow(<TaskGridComponent />);
        expect(wrapper).toMatchSnapshot();
    });
});