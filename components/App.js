import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from './Home/Home';
import Loading from './Loading/Loading';
import SignIn from './SignIn/SignIn';
import SignOut from './SignOut/SignOut';
import Random from './RandomPicture/RandomPicture';

const appDrawer = createDrawerNavigator(
  {
    Home: Home,
    SignOut: SignOut,
    Random: Random,
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      app: appDrawer,
      login: SignIn,
      logout: SignOut,
      loading: Loading,
    },
    {
      initialRouteName: 'login',
    },
  ),
);

export default App;
