import React, { Component } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text, Dimensions } from 'react-native';
import FlashCard from './FlashCard';
import { flashCardData, flashCardBackData } from '../mockData';

class FlipAnimation extends Component {
      state = { animatedValue: new Animated.Value(0) };

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

      flipCard (animatedValue) {
            if (this.value >= 90) {
                  Animated.spring(this.animatedValue, {
                        toValue: 0,
                        friction: 8,
                        tension: 10
                  }).start();
            } else {
                  Animated.spring(this.animatedValue, {
                        toValue: 180,
                        friction: 8,
                        tension: 10
                  }).start();
            }
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
                  <View>
                        <Animated.View style={[
                              styles.flipCard,
                              frontAnimatedStyle,
                              { opacity: this.frontOpacity }
                        ]}>
                              <TouchableOpacity
                                    onPress={() => this.flipCard()} style={styles.flipCard }>
                                    <FlashCard data={flashCardData} />
                              </TouchableOpacity>
                        </Animated.View>
                        <Animated.View style={[
                              styles.flipCard,
                              styles.flipCardBack,
                              backAnimatedStyle,
                              { opacity: this.backOpacity }
                        ]}>
                              <TouchableOpacity onPress={() => this.flipCard()} style={styles.flipCard} >
                                    <FlashCard data={flashCardBackData} />
                              </TouchableOpacity>
                        </Animated.View>
                  </View>
            );
      }
}

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
      flipCard: {
            alignItems:'center',
            backfaceVisibility: 'hidden',
      },
      flipCardBack: {
            position: "absolute",
            top: 0,
            left: 20,
            width: width - 20,
            height: height - 80,
      }
});

export default FlipAnimation;