import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import StatusIndicator from './StatusIndicator';

export const StatusScreen = ({ isUp }) => (
      <View style={styles.container}>
            <StatusIndicator isUp={isUp} />
            <Text style={styles.statusText}>Service Up</Text>
      </View>
);

const styles = StyleSheet.create({
      container: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
      },
      statusText: {
            fontSize: 30,
      }
});

StatusScreen.defaultProps = {};

StatusScreen.propTypes = {};

export default StatusScreen;