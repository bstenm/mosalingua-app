import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import { StyleSheet, View, Text } from 'react-native';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FlashCardScreen = props => (
      <View  style={styles.container} >
            <View style={styles.card} >
                  <View style={{ flex: 1 }} >
                        <Text style={styles.expression}>to guess</Text>
                        <Text style={styles.translation}>deviner</Text>
                        <Text style={styles.example}>Tu ne vas jamais deviner ce qui est arrive au travail aujourd'hui</Text>
                        <Text style={styles.exampleTranslation}>You'll never guess what happened at work today</Text>
                  </View>
                  <View style={styles.bottomActions}>
                        <Icon style={styles.bottomActionsIcon} name="volume-up" />
                        <Text style={styles.bottomActionsButton}>Verbs</Text>
                        <Icon style={[styles.bottomActionsIcon, styles.infoIcon]} name="info" />
                  </View>
            </View>
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
      </View>
);

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
      },
      card: {
            flex: 1,
            padding: 20,
            margin: 20,
            marginTop: 30,
            marginBottom: 60,
            backgroundColor: '#FFF',
            elevation: 2,
            shadowColor: '#555',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 1,
      },
      expression: {
            color: '#757575',
            fontSize: 23,
            textAlign: 'center',
            marginBottom: 5,
      },
      translation: {
            fontSize: 23,
            color: '#222',
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 10,
      },
      example: {
            color: '#222',
            textAlign: 'center',
            lineHeight: 22,
            marginBottom: 5,
      },
      exampleTranslation: {
            textAlign: 'center',
            color: '#757575',
            lineHeight: 22,
      },
      bottomActions: {
            flexDirection: 'row',
            justifyContent: 'space-between',
      },
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
      bottomActionsButton: {
            borderWidth: 1,
            borderRadius: 3,
            padding: 5,
            paddingLeft: 25,
            paddingRight: 25,
            color: '#F66F24',
            borderColor: '#F66F24',
      },
      bottomActionsIcon: {
            color: '#F66F24',
            padding: 8,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: '#F66F24',
      },
      infoIcon: {
            paddingLeft: 12,
            paddingRight: 12,
      },
});

FlashCardScreen.defaultProps = {};

FlashCardScreen.propTypes = {};

export default FlashCardScreen;