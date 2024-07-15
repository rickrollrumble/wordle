import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../styles";
import { Keyboard } from "./Keyboard";

export function Game(): React.JSX.Element {
  const [grid] = useState(Array(6).fill(Array(5).fill("")));

  return (
    <View style={styles.container}>
      {grid.map((row, rowIndex) => (
        <View key={"row-" + rowIndex} style={styles.keyboardRow}>
          {row.map((col: any, colIndex: any) => (
            <View key={`row-${rowIndex}-col-${colIndex}`} style={styles.cell} />
          ))}
        </View>
      ))}
      <Keyboard />
    </View>
  );
}
