import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from "react-native-elements";
import { View, FlatList, Image, StyleSheet } from "react-native";
import TopBar from './TopBar';
import config from '../config';

const ustensilsIcon = require('../assets/ustensils.png');

class ExploreScreen extends React.PureComponent {

      render() {
            return (
                  <View style={styles.container}>
                        <TopBar
                              title="Categories"
                              rightContent={() => (
                                    <View style={{ flexDirection: 'row' }}>
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
                              )}
                        />
                        <FlatList
                              style={{ marginTop: 80 }}
                              data={config.categories}
                              keyExtractor={item => item.id.toString()}
                              renderItem={({ item }) => {
                                    const maxLen = 31;
                                    const len = item.description.length;
                                    const description = len > maxLen ?
                                          item.description.substring(0, maxLen) + '...':
                                          item.description;
                                    return (
                                          <ListItem
                                                title={item.category}
                                                subtitle={description}
                                                leftIcon={() => <Image source={ustensilsIcon} style={{ width: 20, height: 30 }} />}
                                                chevron={() => <Icon name='chevron-right' color='#AAA' />}
                                                bottomDivider
                                          />
                                    )
                              }}
                        />
                  </View>
            );
      }
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
      }
});

export default ExploreScreen;