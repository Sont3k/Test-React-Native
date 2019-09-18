import {createAppContainer} from 'react-navigation';
import {Users} from '../components/Users';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Locations } from '../components/Locations';

const MainNavigator = createDrawerNavigator({
  Locations: {
    screen: Locations,
    navigationOptions: ({navigation}) => ({
      title: 'Locations',
    }),
  },
  Users: {
    screen: Users,
    navigationOptions: ({navigation}) => ({
      title: 'Users',
    }),
  },
});

export const AppContainer = createAppContainer(MainNavigator);
