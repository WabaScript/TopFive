import React from 'react';
import { View, StyleSheet } from 'react-native';

import UserInfo from '../Components/UserInfo'
import NowArtists from '../Components/NowArtists'
import Sizes from '../Helpers/Sizes';

const UserLists = () => {
  return (
    <View style={styles.container}>
      <UserInfo />
      <NowArtists />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Sizes.maxHeight,
    width: Sizes.maxWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});


export default UserLists;

