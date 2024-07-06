import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from '../styles';

export function Game(): React.JSX.Element {
  const [grid] = useState(Array(6).fill(Array(5).fill('')));

  return (
    <View style={styles.container}>
      {grid.map((row, rowIndex) => (
        <TextInput key={rowIndex} style={styles.cell} maxLength={5} />
      ))}
    </View>
  );
}
