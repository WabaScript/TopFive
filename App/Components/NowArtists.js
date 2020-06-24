import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Sizes from '../Helpers/Sizes';

const NowArtists = () => {
  return (
    <View style={styles.container}>
      <Text>Now Artists</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});



export default NowArtists;

