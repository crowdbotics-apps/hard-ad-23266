import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList183358Navigator from '../features/NotificationList183358/navigator';
import Settings183357Navigator from '../features/Settings183357/navigator';
import Settings183349Navigator from '../features/Settings183349/navigator';
import UserProfile183347Navigator from '../features/UserProfile183347/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
