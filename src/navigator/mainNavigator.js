import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile183387Navigator from '../features/UserProfile183387/navigator';
import Tutorial183386Navigator from '../features/Tutorial183386/navigator';
import NotificationList183358Navigator from '../features/NotificationList183358/navigator';
import Settings183357Navigator from '../features/Settings183357/navigator';
import Settings183349Navigator from '../features/Settings183349/navigator';
import UserProfile183347Navigator from '../features/UserProfile183347/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile183387: { screen: UserProfile183387Navigator },
Tutorial183386: { screen: Tutorial183386Navigator },
NotificationList183358: { screen: NotificationList183358Navigator },
Settings183357: { screen: Settings183357Navigator },
Settings183349: { screen: Settings183349Navigator },
UserProfile183347: { screen: UserProfile183347Navigator },

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
