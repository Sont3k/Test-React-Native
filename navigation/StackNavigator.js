import {createAppContainer} from 'react-navigation';
import {Users} from '../components/Users';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Location } from '../components/Location';

const MainNavigator = createDrawerNavigator({
  Users: {
    screen: Users,
    navigationOptions: ({navigation}) => ({
      title: 'Users',
    }),
  },
  Location: {
    screen: Location,
    navigationOptions: ({navigation}) => ({
      title: 'Location',
    }),
  },
});

export const AppContainer = createAppContainer(MainNavigator);
