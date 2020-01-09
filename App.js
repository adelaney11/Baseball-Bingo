import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import HelpScreen from './src/screens/HelpScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    Help: HelpScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {

    }
  }
)

export default createAppContainer(navigator);