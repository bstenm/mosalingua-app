import React from 'react';
import Tabs from 'react-native-tabs';
import capitalize from 'lodash/capitalize';
import { StyleSheet, Text } from 'react-native';

export const LearnTabs = () => (
      <Tabs>
            {[
                  { label: 'again', backgroundColor: 'red' },
                  { label: 'difficult', backgroundColor: '#FD7824' },
                  { label: 'good', backgroundColor: '#FFB33E' },
                  { label: 'perfect', backgroundColor: '#00A861' },
            ].map(({ label, backgroundColor }) => (
                  <Text
                        key={label}
                        style={[styles.button,  { backgroundColor }]}
                        name={label}
                  >
                        {capitalize(label)}
                  </Text>
            ))}
      </Tabs>
);

const styles = StyleSheet.create({
      button: {
            color: '#FFF',
            padding: 10,
            paddingLeft: 15,
            paddingRight: 15,
            elevation: 4,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 1,
      },
});

export default LearnTabs;