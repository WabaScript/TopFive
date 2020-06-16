import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Whats up!</Text>
      <TouchableOpacity style={styles.button}>
        <Text> Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 30,
    width: windowWidth / 8,
    backgroundColor: "seagreen",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
