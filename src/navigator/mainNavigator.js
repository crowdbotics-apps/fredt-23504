import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile187431Navigator from '../features/UserProfile187431/navigator';
import Settings187430Navigator from '../features/Settings187430/navigator';
import Settings187428Navigator from '../features/Settings187428/navigator';
import SignIn2187426Navigator from '../features/SignIn2187426/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile187431: { screen: UserProfile187431Navigator },
Settings187430: { screen: Settings187430Navigator },
Settings187428: { screen: Settings187428Navigator },
SignIn2187426: { screen: SignIn2187426Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
