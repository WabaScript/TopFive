import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Sizes from '../Helpers/Sizes'
import UserImage from './UserImage'

const UserInfo = () => {
  return (
    <View style={styles.container}>

      <View style={styles.listTitleContainer}>
        <Text style={styles.listTitle}>ARTISTS RIGHT NOW</Text>
      </View>

      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>@lou_minati</Text>
        <Text style={styles.mood}>feeling all types of feels</Text>
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
    paddingVertical: 34
  },
  listTitleContainer: {
    justifyContent: 'space-around',
  },
  listTitle: {
    letterSpacing: 0.7,
    fontSize: 16,
    color: '#ddd',
  },
  userNameContainer: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    color: '#e33',
  },
  mood: {
    marginTop: 2,
    color: '#eee'
  },
  imageContainer: {
    marginBottom: -Sizes.userInfoHeight * 0.435
  },
});



export default UserInfo;

