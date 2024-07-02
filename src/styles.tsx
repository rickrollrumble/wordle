import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

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
    backgroundColor: 'green',
    marginLeft: '5%',
    marginRight: '5%',
    color: '#f5eb90',
  },
});

export {styles};
