import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, FlatList, Image, Text, StyleSheet } from "react-native";
import TabBar from './TabBar';
import config from '../config';

const ustensilsIcon = require('../assets/ustensils.png');

class ExploreScreen extends React.PureComponent {
      static navigationOptions = {
            title: 'French',
            headerRight: (
                  <View style={{ paddingRight: 20, flexDirection: 'row' }}>
                        <Icon
                              style={{ marginRight: 10 }}
                              size={25}
                              name='plus-circle'
                              onPress={() => alert('Add one?')}
                              color='#FFF'
                        />
                        <Icon
                              size={25}
                              name='search'
                              onPress={() => alert('Search')}
                              color='#FFF'
                        />
                        </View>
            ),
      };

      render() {
            return (
                  <View>
                        <FlatList
                              style={{ marginBottom: 90 }}
                              data={config.categories}
                              keyExtractor={item => item.id.toString()}
                              renderItem={({ item }) => {
                                    const maxLen = 31;
                                    const len = item.description.length;
                                    const description = len > maxLen ?
                                          item.description.substring(0, maxLen) + '...':
                                          item.description;
                                    return (
                                          <View style={styles.itemContainer} >
                                                <Image source={ustensilsIcon} style={styles.leftIcon} />
                                                <View  style={{ flex: 1 }}>
                                                      <Text style={styles.title}>{item.category}</Text>
                                                      <Text style={styles.subtitle}>{description}</Text>
                                                </View>
                                                <View style={{ justifyContent: 'center' }} >
                                                      <Icon name='chevron-right' color='#AAA' />
                                                </View>
                                          </View>
                                    )
                              }}
                        />
                        <TabBar navigation={this.props.navigation} />
                  </View>
            );
      }
};

const styles = StyleSheet.create({
      itemContainer: {
            flexDirection: 'row',
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#DDD',
      },
      leftIcon: {
            width: 20,
            height: 30,
            marginRight: 20,
            marginTop: 5,
      },
      title: {
            fontSize: 16,
      },
      subtitle: {
            color: '#757575',
      }
});

export default ExploreScreen;