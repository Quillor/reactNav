import { StackNavigator } from 'react-navigation';
import Home from '../components/Home';
import Detail from '../components/Detail';

const Nav = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});
export default Nav;