import React from "react";
import { View } from "react-native";
import TopBar from './TopBar';

class NotFoundScreen extends React.Component {

      render() {
            return (
                  <View>
                        <TopBar title="Not Found"/>
                  </View>
            );
      }
};


export default NotFoundScreen;