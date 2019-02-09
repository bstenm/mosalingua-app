import React, { Component } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text, Dimensions } from 'react-native';

export default class App extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  animatedValue: new Animated.Value(0),
            }
      }

      flipCard() {
            if (this.value >= 90) {
                  Animated.spring(this.animatedValue,{
                        toValue: 0,
                        friction: 8,
                        tension: 10
                  }).start();
            } else {
                  Animated.spring(this.animatedValue,{
                        toValue: 180,
                        friction: 8,
                        tension: 10
                  }).start();
            }
      }

      componentWillMount() {
            this.animatedValue = new Animated.Value(0);

            this.value = 0;
            this.animatedValue.addListener(({ value }) => {
                  this.value = value;
            });

            this.frontInterpolate = this.animatedValue.interpolate({
                  inputRange: [0, 180],
                  outputRange: ['0deg', '180deg'],
            });

            this.backInterpolate = this.animatedValue.interpolate({
                  inputRange: [0, 180],
                  outputRange: ['180deg', '360deg']
            });

            this.frontOpacity = this.animatedValue.interpolate({
                  inputRange: [89, 90],
                  outputRange: [1, 0]
            });

            this.backOpacity = this.animatedValue.interpolate({
                  inputRange: [89, 90],
                  outputRange: [0, 1]
            });
      }

      render() {
            const frontAnimatedStyle = {
                  transform: [
                        { rotateY: this.frontInterpolate}
                  ]
            };

            const backAnimatedStyle = {
                  transform: [
                        { rotateY: this.backInterpolate }
                  ]
            };

            return (
                  <View style={styles.container}>
                        <View>
                              <Animated.View style={[
                                    styles.flipCard,
                                    frontAnimatedStyle,
                                    { opacity: this.frontOpacity }
                              ]}>
                                    <TouchableOpacity onPress={() => this.flipCard()} style={styles.flipCard }>
                                          <Text>Front title</Text>
                                    </TouchableOpacity>
                              </Animated.View>
                              <Animated.View style={[
                                    styles.flipCard,
                                    styles.flipCardBack,
                                    backAnimatedStyle,
                                    { opacity: this.backOpacity }
                              ]}>
                                    <TouchableOpacity onPress={() => this.flipCard()} style={styles.flipCard} >
                                          <Text>Back title</Text>
                                    </TouchableOpacity>
                              </Animated.View>
                        </View>
                        <TouchableOpacity onPress={() => this.flipCard()} >
                              <View>
                                    <Text>Flip!</Text>
                              </View>
                        </TouchableOpacity>
                  </View>
            );
      }
}

const width = Dimensions.get('window').width;
const containerWidth = (width - 30) / 2 - 7.5;

const styles = StyleSheet.create({
      container: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
      },
      cardContainer : {
      },
      flipCard :{
            alignItems:'center',
            justifyContent:'center',
            height: containerWidth,
            width:containerWidth,
            backgroundColor: 'white',
            borderWidth: 1,
            backfaceVisibility: 'hidden',
      },
      flipCardBack : {
            position: "absolute",
            top: 0,
      }
});
