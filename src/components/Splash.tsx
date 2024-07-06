import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../styles';

export function Splash({navigation}): React.JSX.Element {
  return (
    <View>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={[styles.title, styles.emphasisTitle]}>Wordle.</Text>
      <Pressable onPress={() => navigation.navigate('Game')}>
        <Text style={styles.button}>Play</Text>
      </Pressable>
    </View>
  );
}
