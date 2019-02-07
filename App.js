import React from 'react';
import HomeScreen from './components/HomeScreen';
import FlashCardScreen from './components/FlashCardScreen';
import {createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
      HomeScreen,
      FlashCardScreen,
});

const AppContainer = createAppContainer(AppNavigator);

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

const App = () => <AppContainer persistenceKey={navigationPersistenceKey} />;

export default App;