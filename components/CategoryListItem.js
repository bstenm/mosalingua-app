import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export const CategoryListItem = ({ item }) => (
      <View key={item.id} style={styles.container} >
            <TouchableOpacity onPress={() => null}>
                  <View>
                        <Text>{item.category}</Text>
                  </View>
            </TouchableOpacity>
      </View>
);

const styles = StyleSheet.create({
      container: {

      },
      text: {

      },
});

CategoryListItem.defaultProps = {};

CategoryListItem.propTypes = {};

export default CategoryListItem;