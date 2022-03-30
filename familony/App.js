import * as React  from 'react';
import {createBottomTabNavigator,
        createAppContainer,
        createStackNavigator } from 'react-navigation'
import { StyleSheet, Text, View,  Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { Constants } from 'expo';
import {render} from 'react-dom';

import SettingsHomeScreen from './Settings/Home';
import SettingsNameScreen from './Settings/Name';
import SettingsWorksScreen from './Settings/Works';
import SettingsNewWorksScreen from './Settings/NewWorks';
import SettingsPasswordScreen from './Settings/Password';

import CleanDiningRoomScreen from './Settings/WorksList/CleanDiningRoom';
import MakeBreakfastScreen from './Settings/WorksList/MakeBreakfast';
import MakeDinnerScreen from './Settings/WorksList/MakeDinner';
import MakeLunchScreen from './Settings/WorksList/MakeLunch';
import WashingScreen from './Settings/WorksList/Washing';

import CDRScreen from './HouseWorks/WorksList - Copy/CleanDiningRoom';
import MBScreen from './HouseWorks/WorksList - Copy/MakeBreakfast';
import MDScreen from './HouseWorks/WorksList - Copy/MakeDinner';
import MLScreen from './HouseWorks/WorksList - Copy/MakeLunch';
import WScreen from './HouseWorks/WorksList - Copy/Washing';

import RecordsNavigatorScreen from './Records/Navigator';
import RecordsDayScreen from './Records/Day';
import RecordsWeekScreen from './Records/Week';
import RecordsMonthScreen from './Records/Month';



import HouseWorksAddScreen from  './HouseWorks/Add';
import HouseWorksDetailsScreen from './HouseWorks/Details';
import HouseWorksHomeScreen from './HouseWorks/Home';
import LoginScreen from './Login';

import CRR from './HouseWorks/WorksList - Copy/CRR';
import PCfS from './HouseWorks/WorksList - Copy/PCfS';
import PSfC from './HouseWorks/WorksList - Copy/PSfC';
import SaG from './HouseWorks/WorksList - Copy/SaG';
import TCtS from './HouseWorks/WorksList - Copy/TCtS';
import TOT from './HouseWorks/WorksList - Copy/TOT';
import TStC from './HouseWorks/WorksList - Copy/TStC';

const Login = {
  screen: LoginScreen,
  navigationOptions: ({ navigation }) => {
    return {
      title: 'Login',
    };
  },
}


//SettingsのStack
const SettingsStack = createStackNavigator(
  {
  SettingsHome: {
      screen: SettingsHomeScreen,
      navigationOptions: () => ({
        title: 'Settings',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
  SettingsName: {
      screen: SettingsNameScreen,
      navigationOptions: () => ({
        title: 'Name',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
  SettingsWorks: {
      screen: SettingsWorksScreen,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
  SettingsNewWorks: {
    screen: SettingsNewWorksScreen,
   navigationOptions: () => ({
        title: 'AddHouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
  },
  SettingsPassword: {
    screen: SettingsPasswordScreen,
    navigationOptions: () => ({
        title: 'Password',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
  },
  CleanDiningRoom: {
    screen: CleanDiningRoomScreen,
    navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),

  },
  MakeBreakfast:{
    screen: MakeBreakfastScreen,
    navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),

  },
  MakeLunch:{
    screen: MakeLunchScreen,
    navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),

  },
  MakeDinner:{
    screen: MakeDinnerScreen,
   navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),

  },
  Washing:{
    screen: WashingScreen,
   navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),

  }
}
);

const SettingsNavigator = createAppContainer(SettingsStack);

//RecordsのStack
const RecordsStack = createStackNavigator(
  {
    RecordsNavigator: {
      screen: RecordsNavigatorScreen,
      navigationOptions: () => ({
        title: 'Records',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
    RecordsDay: {
      screen: RecordsDayScreen,
      navigationOptions: () => ({
        title: 'Records',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
    RecordsWeek: {
      screen: RecordsWeekScreen,
      navigationOptions: () => ({
        title: 'Records',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
    RecordsMonth: {
      screen: RecordsMonthScreen,
      navigationOptions: () => ({
        title: 'Records',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },

}
);

const RecordsNavigator = createAppContainer(RecordsStack);


//HouseWorksのStack
const HouseWorksStack = createStackNavigator(
  {
    HouseWorksHome: {
      screen: HouseWorksHomeScreen,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
    HouseWorksAdd: {
      screen: HouseWorksAddScreen,
      navigationOptions: () => ({
        title: 'AddHouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
    HouseWorksDetails: {
      screen: HouseWorksDetailsScreen,
      navigationOptions: () => ({
        title: 'Details',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
    CDRS:{
      screen: CDRScreen,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
    MBS  :{
      screen: MBScreen,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
    MDS:{
      screen: MDScreen,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },  
    MLS:{
      screen: MLScreen,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    }, 
    WS:{
      screen: WScreen,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
    },
    CRR:{
      screen: CRR,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
      },
     PCfS :{
      screen: PCfS,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),},
      PSfC:{
      screen: PSfC,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),
      },
      SaG:{
      screen: SaG,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),},
      TCtS:{
      screen: TCtS,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),},
      TOT:{
      screen: TOT,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),},
      TStC:{
      screen: TStC,
      navigationOptions: () => ({
        title: 'HouseWork',
        headerTintColor: '#00ced1',
        headerStyle: {
         backgroundColor: '#ffffff'
        }
      }),

    }
});

const HouseWorksNavigator = createAppContainer(HouseWorksStack);

//PostLogInNavigator
const PostLoginNavigator = createBottomTabNavigator(
  {
  Settings: {
    screen: SettingsNavigator,
    navigationOptions: {
      title: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={20} name="settings" color="#999" />
        )
    }
    },
  Records: {
    screen: RecordsNavigator,
     navigationOptions: {
      title: 'Records',
      tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={20} name="equalizer" color="#999" />
        )
    }},
  HouseWorks: {
    screen: HouseWorksNavigator,
     navigationOptions: {
      title: 'HouseWorks',
      tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={20} name="today" color="#999" />
        )
    }
    },
},
{
    tabOptions: {
      activeTintColor: '00ced1',
      inactiveTintColor: '#ffffff',
      activeBackgroundColor: '#ffffff',
      inactiveBackgroundColor: '00bfb2',
    }

  }
)

const TabNavigator = createAppContainer(PostLoginNavigator);

const MainNavigator = createStackNavigator(
  {
  Login: {
    screen: LoginScreen
  },
  PostLogin: PostLoginNavigator
},
{
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: 'Login'
}
)

const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component{
  render() {
    return <AppContainer />;
  }
}

export default App;
