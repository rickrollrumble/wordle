import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles";
const enum specialKeys {
  DELETE = "❌",
  SUBMIT = "🔍",
}

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
  [specialKeys.DELETE, specialKeys.SUBMIT],
];

export function Keyboard(): React.JSX.Element {
  return (
    <>
      {keys.map((row, rowIndex) => {
        return (
          <View key={"key-row-" + rowIndex} style={styles.keyboardRow}>
            {row.map((key) => {
              return (
                <Pressable key={key}>
                  <View style={styles.keyboardKey}>
                    <Text style={{textAlign:"center", color:"white"}}>{key}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        );
      })
      }
    </>
  );
}
