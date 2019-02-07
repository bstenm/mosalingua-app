import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text } from 'react-native';
import capitalize from 'lodash/capitalize';

export const TabBarItem = ({ label, icon, selected }) => (
      <View style={styles.container} >
            <Icon
                  size={35}
                  name={icon}
                  style={[styles.icon, selected && styles.selected]}
            />
            <Text style={[styles.label, selected && styles.selected]} >
                  {capitalize(label)}
            </Text>
      </View>
);

const styles = StyleSheet.create({
      container: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
      },
      icon: {
            color: '#8E929B',
      },
      label: {
            color: '#8E929B',
      },
      selected: {
            color: '#F66F24',
      }
});

TabBarItem.defaultProps = {};

TabBarItem.propTypes = {};

export default TabBarItem;