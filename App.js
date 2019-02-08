import React from 'react';
import LearnScreen  from './components/LearnScreen';
import HomeScreen from './components/HomeScreen';
import ExploreScreen  from './components/ExploreScreen';
import {createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
      LearnScreen,
      HomeScreen,
      ExploreScreen,
}, {
      initialRouteName: 'HomeScreen',
      defaultNavigationOptions: {
            headerStyle: {
                  backgroundColor: '#F66F24',
            },
            headerTintColor: '#fff',
      }
});

const AppContainer = createAppContainer(AppNavigator);

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

const App = () => <AppContainer persistenceKey={null} />;

export default App;