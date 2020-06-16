import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Sizes = {
  maxHeight: windowHeight, 
  maxWidth: windowWidth, 
  userInfoHeight: windowHeight * 0.33
}

export default Sizes