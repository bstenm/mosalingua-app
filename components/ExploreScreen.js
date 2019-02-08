import React from "react";
import { ListItem, Icon } from "react-native-elements";
import { View, FlatList, Image } from "react-native";
import TabBar from './TabBar';
import config from '../config';

const ustensilsIcon = require('../assets/ustensils.png');

class ExploreScreen extends React.PureComponent {
      static navigationOptions = {
            title: 'French',
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
                        <TabBar navigation={this.props.navigation} />
                  </View>
            );
      }
};

export default ExploreScreen;