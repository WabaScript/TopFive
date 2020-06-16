import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Sizes from '../Helpers/Sizes'

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>USER INFO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Sizes.userInfoHeight,
    width: Sizes.maxWidth,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ddd',
  }
});



export default UserInfo;

