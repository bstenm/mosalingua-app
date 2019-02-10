import React, { Component } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text, Dimensions } from 'react-native';
import FlashCard from './FlashCard';
import LearnTabs from './LearnTabs';
import { flashCardData, flashCardBackData } from '../mockData';

class FlipAnimation extends Component {

      static navigationOptions = {
            title: 'Self-Assessment',
      };

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
                  <View  style={styles.container} >
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
                        <LearnTabs />
                  </View>
            );
      }
}

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
      },
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