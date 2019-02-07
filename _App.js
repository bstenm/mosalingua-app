import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import FlashCardScreen from './components/FlashCardScreen';
import TabBar from './components/TabBar';

export default class App extends React.Component {
      state = { screenSelected: 'home' };

      onTabPress = screen => {
            this.setState({ screenSelected: screen });
      };

      render() {
            return (
                  <View style={styles.container}>
                        <FlashCardScreen />
                        {/*<TabBar
                              onSelectTab={this.onTabPress}
                              tabSelected={this.state.screenSelected}
                        />*/}
                  </View>
            );
      }
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
      },
});
