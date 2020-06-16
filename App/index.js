import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import UserLists from './Containers/UserLists'
import Sizes from './Helpers/Sizes'

export default function App() {
  return (
    <View style={styles.container}>
      <UserLists />
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
    width: Sizes.maxWidth / 8,
    backgroundColor: "seagreen",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
