import {scale} from 'react-native-size-matters';
import {isIphoneX} from './Utils';
import {Dimensions, Platform} from 'react-native';

const Fonts = {
  defaultRegular: {
    fontFamily: 'Poppins-Regular',
  },
  defaultSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  defaultBold: {
    fontFamily: 'Poppins-Bold',
  },
};

class CommonColors {
  static transparent = 'transparent';
  static white = '#FFFFFF';
  static black = '#000000';
  static gray = '#CCCCCC';
}

class CommonSize {
  static srcWidth = Dimensions.get('window').width;

  static srcHeight = Dimensions.get('window').height;

  static paddingTopHeader = Platform.OS === 'ios' ? (isIphoneX() ? scale(34) : scale(20)) : 0;

  static headerHeight = scale(50) + CommonSize.paddingTopHeader;

  static paddingBottom = isIphoneX() ? scale(20) : 0;
}

export {CommonSize, CommonColors, Fonts};
