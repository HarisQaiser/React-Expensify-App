//import DotEnv from 'dotenv';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//DotEnv.config({ path:'.env' });

Enzyme.configure({
    adapter: new Adapter()
});
