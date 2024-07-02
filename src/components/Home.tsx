import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
export const Home = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={[styles.title, styles.emphasisTitle]}>Wordle!</Text>
      <Text style={[styles.title, styles.button]}>Play</Text>
      {/* {words.map((word, index) => (
        <Text key={index}>{word}</Text>
      ))} */}
    </View>
  );
};
