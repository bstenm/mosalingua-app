import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native';
import TabBar from './TabBar';

const frenchIcon = require('../assets/icon-french.png');

class HomeScreen extends React.Component {
      static navigationOptions = {
            title: 'French',
      };

      render() {
            return (
                  <View style={styles.container} >
                        <Image source={frenchIcon} />
                        <Text style={styles.text} >
                              Congratulations, your learning path is now ready{'\n'}
                              You'll make rapid progress in French, we promise you!{'\n'}
                              Let's start right away with your first cards
                        </Text>
                        <TabBar navigation={this.props.navigation} />
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
      text: {
            margin: 10,
            marginBottom: 80,
            padding: 30,
            borderWidth: 1,
            lineHeight: 20,
            borderColor: '#EEE',
            textAlign: 'center',
            backgroundColor: '#FFF',
            color: '#555',
      },
});

HomeScreen.propTypes = {
      navigation: PropTypes.object.isRequired,
};

export default HomeScreen;