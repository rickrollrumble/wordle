import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: height / 12,
    fontWeight: "bold",
  },
  emphasisTitle: {
    color: "#000",
  },
  button: {
    color: "white",
    backgroundColor: "green",
    textAlign: "center",
    verticalAlign: "middle",
    margin: "auto",
    paddingHorizontal: "15%",
    paddingVertical: "2%",
    fontSize: height / 12,
  },
  cell: {
    height: height / 20,
    width: width / 10,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    margin: 5,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  keyboardRow: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent:"center"
  },
  keyboardKey: {
    width:width/12,
    margin:3,
    paddingVertical:5,
    backgroundColor:"#4d4d4d",
    borderRadius:2,
  }
});

export { height, styles };
