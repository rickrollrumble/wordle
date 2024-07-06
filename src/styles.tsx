import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: height / 12,
    fontWeight: 'bold',
  },
  emphasisTitle: {
    color: '#000',
  },
  button: {
    color: 'white',
    backgroundColor: 'green',
    textAlign: 'center',
    verticalAlign: 'middle',
    margin: 'auto',
    paddingHorizontal: '15%',
    paddingVertical: '2%',
    fontSize: height / 12,
  },
  cell: {
    height: height / 20,
    width: width / 2,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export {height, styles};
