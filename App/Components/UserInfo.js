import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Sizes from '../Helpers/Sizes'
import UserImage from './UserImage'

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.listTitle}>TOP 5 ARTISTS RIGHT NOW</Text>
        <Text style={styles.userName}>USER NAME</Text>
      </View>
      <View style={styles.imageContainer}>
      <UserImage />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Sizes.userInfoHeight,
    width: Sizes.maxWidth,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textContainer: {
    justifyContent: 'space-around',
    
  },
  imageContainer: {
    marginBottom: -Sizes.userInfoHeight * 0.435
  
  },
  listTitle: {
    color: '#ddd',
  },
  userName: {
    color: '#e33',
  }
});



export default UserInfo;

