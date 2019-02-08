import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FlashCard from './FlashCard';
import LearnTabs from './LearnTabs';

export class LearnScreen extends React.Component {
      static navigationOptions = {
            title: 'Self-Assessment',
      };

      render() {
            return (
                  <View  style={styles.container} >
                        <FlashCard />
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