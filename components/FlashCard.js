import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FlashCard = ({ data }) => (
      <View style={styles.card} >
            <View style={{ flex: 1 }} >
                  <Text style={styles.expression}>{data.expression}</Text>
                  <Text style={styles.expressionTranslation}>{data.expressionTranslation}</Text>
                  <Text style={styles.example}>{data.example}</Text>
                  <Text style={styles.exampleTranslation}>{data.exampleTranslation}</Text>
            </View>
            <View style={styles.bottomActions}>
                  <Icon style={styles.actionsIcon} name="volume-up" />
                  <Text style={styles.actionsButton}>Verbs</Text>
                  <Icon style={[styles.actionsIcon, styles.infoIcon]} name="info" />
            </View>
      </View>
);

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
      card: {
            flex: 1,
            width: width - 20,
            height: height - 80,
            padding: 20,
            margin: 20,
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
      expressionTranslation: {
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
      actionsButton: {
            borderWidth: 1,
            borderRadius: 3,
            padding: 5,
            paddingLeft: 25,
            paddingRight: 25,
            color: '#F66F24',
            borderColor: '#F66F24',
      },
      actionsIcon: {
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

export default FlashCard;