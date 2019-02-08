import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-native-tabs';
import { StyleSheet } from 'react-native';
import routes from '../config/routes';
import TabBarItem from './TabBarItem'

class TabBar extends React.Component {

      onTabPress = tab => {
            const screen = tab.props.name;

            // the route corresponding to that tab
            const route = routes[screen];

            // navigate to that screen
            this.props.navigation.navigate(route);
      };

      render() {
            const { routeName } = this.props.navigation.state;

            // get the current screen we are on from the route name
            const currentScreen = Object.keys(routes).find(key => routes[key] === routeName)

            return (
                  <Tabs
                        style={styles.container}
                        selected={currentScreen}
                        onSelect={this.onTabPress}
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

TabBar.propTypes = {
      navigation: PropTypes.shape({
            state: PropTypes.shape({
                  routeName: PropTypes.string.isRequired,
            }).isRequired,
            navigate: PropTypes.func.isRequired,
      }).isRequired,
};

export default TabBar;