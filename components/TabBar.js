import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-native-tabs';
import { StyleSheet } from 'react-native';
import TabBarItem from './TabBarItem'

class TabBar extends React.Component {
      state = { tabSelected: 'home' };

      onTabPress = screen => {
            this.setState({ tabSelected: screen });

            this.props.navigation.navigate({
                  home: 'HomeScreen',
                  learn: 'FlashCardScreen',
            }[screen]);
      };

      render() {
            return (
                  <Tabs
                        style={styles.container}
                        selected={this.state.tabSelected}
                        onSelect={tab => this.onTabPress(tab.props.name)}
                  >
                        {[
                              { label: 'home', icon: 'home' },
                              { label: 'learn', icon: 'graduation-cap' },
                              { label: 'explore', icon: 'eye' },
                              { label: 'progress', icon: 'arrow-up' },
                              { label: 'more', icon: 'ellipsis-h' },
                        ].map(e => (
                              <TabBarItem
                                    key={e.label}
                                    icon={e.icon}
                                    label={e.label}
                                    name={e.label}
                              />
                        ))}
                  </Tabs>
            );
      }
};

const styles = StyleSheet.create({
      container: {
            height: 90,
      }
});

TabBar.defaultProps = {};

TabBar.propTypes = {};

export default TabBar;