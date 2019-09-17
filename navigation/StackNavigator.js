import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from '../components/Home';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
});

export const AppContainer = createAppContainer(MainNavigator);
