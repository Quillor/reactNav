import { StackNavigator } from 'react-navigation';
import Home from '../components/Home';
import Detail from '../components/Detail';

const Nav = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Our Apps',
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerTitle: 'Project Name',
    },
  },
});

export default Nav;