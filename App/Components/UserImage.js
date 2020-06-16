import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Sizes from '../Helpers/Sizes'

const UserImage = () => {
  return (
    <View style={styles.container}>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Sizes.userImageSides,
    width: Sizes.userImageSides,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#bbb',
    borderWidth: 4,
    shadowColor: "#000",
    shadowOffset: { 
      width: 9, 
      height: 9 
    }, 
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19, 
    transform: [{ rotate: '45deg'}], 
  }
});



export default UserImage;

