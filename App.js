import React from 'react';
import LearnScreen  from './components/LearnScreen';
import HomeScreen from './components/HomeScreen';
import ExploreScreen  from './components/ExploreScreen';
import NotFoundScreen  from './components/NotFoundScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import {createAppContainer, createBottomTabNavigator } from 'react-navigation';

const IconWithBadge = ({ name, badgeCount, color, size }) => (
      <View style={{ marginBottom: 20 }}>
            <Icon name={name} size={size} color={color} />
            { badgeCount > 0 && (
                  <View style={{
                        position: 'absolute',
                        right: -6,
                        top: 0,
                        backgroundColor: 'red',
                        borderRadius: 9,
                        width: 17,
                        height: 17,
                        justifyContent: 'center',
                        alignItems: 'center'
                  }}>
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
                  </View>
            )}
      </View>
)
const AppNavigator = createBottomTabNavigator({
      Home: HomeScreen,
      Learn: LearnScreen,
      Explore: ExploreScreen,
      Progress: NotFoundScreen,
      More: NotFoundScreen
}, {
      initialRouteName: 'Home',
      defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horinzontal, tintColor }) => {
                  let TabIcon = Icon;
                  const { routeName } = navigation.state;
                  const icon = {
                        Home:   'home',
                        Learn:  'graduation-cap',
                        Explore:  'eye',
                        Progress:  'arrow-up',
                        More:  'ellipsis-h',
                  }[routeName]

                  if(routeName === 'Learn') {
                        TabIcon = IconWithBadge;
                  }

                  return  <TabIcon
                        style={{ marginBottom: 20 }}
                        size={35}
                        name={icon}
                        color={tintColor}
                        badgeCount={2}
                  />
            }
      }),
      tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            style: {
                  height: 75,
                  paddingTop: 25,
                  backgroundColor: '#F5F5F5',
                  borderTopWidth: 0,
            },
            labelStyle: {
                  fontSize: 14,
                  paddingBottom: 10,
            },
      },
});

const AppContainer = createAppContainer(AppNavigator);

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

const App = () => <AppContainer persistenceKey={null} />;

export default App;