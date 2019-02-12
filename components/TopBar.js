import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { StyleSheet, View, Text } from 'react-native';

export const TopBar = props => (
      <View style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            padding: 10,
            alignItems: 'flex-end',
            backgroundColor: '#F66F24',
            justifyContent: 'space-between',
            position: 'absolute',
            top: 0,
            zIndex: 10,
      }}>
            <View>
                  {!props.noGoBack && <Icon
                        size={30}
                        name='chevron-left'
                        onPress={() => props.navigation.goBack()}
                        color='#FFF'
                  />}
            </View>
            <View>
                  <Text style={{
                        color: 'white',
                        fontSize: 22,
                        fontWeight: 'bold',
                  }}>{props.title}</Text>
            </View>
            <View>
                  {props.rightContent && props.rightContent()}
            </View>
      </View>
);

const styles = StyleSheet.create({
      container: {

      },
      text: {

      },
});

TopBar.defaultProps = {};

TopBar.propTypes = {};

export default withNavigation(TopBar);