import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const StatusIndicator = ({ isUp }) => (
      <View style={[styles.border, isUp && styles.isUpBorderColor]} >
            <Text style={[styles.character, isUp && styles.isUpCharacterColor]} >
                  <Icon name={isUp ? 'check' : 'times' } size={180} />
            </Text>
      </View>
);

const styles = StyleSheet.create({
      border: {
            borderWidth: 20,
            borderColor: '#F21D44',
            borderRadius: 200,
            width: 240,
            height: 240,
            justifyContent: 'center',
      },
      character: {
            fontSize: 160,
            textAlign: 'center',
            backgroundColor: 'rgba(0,0,0,0)',
            color: '#BF1534',
      },
      isUpBorderColor: {
            borderColor: '#00CC00',
      },
      isUpCharacterColor: {
            color: '#009900',
      }
});

StatusIndicator.defaultProps = {};

StatusIndicator.propTypes = {};

export default StatusIndicator;