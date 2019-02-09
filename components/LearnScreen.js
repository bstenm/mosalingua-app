import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LearnTabs from './LearnTabs';
import FlipAnimation from './FlipAnimation';

export class LearnScreen extends React.Component {
      static navigationOptions = {
            title: 'Self-Assessment',
      };

      render() {
            return (
                  <View  style={styles.container} >
                        <FlipAnimation />
                        <LearnTabs />
                  </View>
            );
      }
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
      },
});

export default LearnScreen;