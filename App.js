import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import indexScreen from './src/indexScreen';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
    Index: indexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

export default createAppContainer(navigator);
