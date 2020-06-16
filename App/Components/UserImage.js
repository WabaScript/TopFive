import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Sizes from '../Helpers/Sizes';

const image = require('../../assets/user.png');

const UserImage = () => {
	return (
		<View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
			  <Image style={styles.image} source={image} />
      </View>
		</View>
	);
};

const styles = StyleSheet.create({
	outerContainer: {
		height: Sizes.userImageSides,
		width: Sizes.userImageSides,
		backgroundColor: '#e33',
		alignItems: 'center',
    justifyContent: 'center',
		borderColor: '#bbb',
		borderWidth: 4,
		shadowColor: '#000',
		shadowOffset: {
      width: 9,
			height: 9
		},
		shadowOpacity: 0.5,
		shadowRadius: 12.35,
		elevation: 19,
		transform: [ { rotate: '45deg' } ]
  },
  innerContainer: {
    height: Sizes.userImageSides - 10,
    width: Sizes.userImageSides - 10,
    overflow: 'hidden'
  },
	image: {
		width: Sizes.userImageSides + 10,
		height: Sizes.userImageSides + 10,
		transform: [ { rotate: '-45deg' } ],
	}
});

export default UserImage;
