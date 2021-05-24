import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {CommonColors, CommonSize, Fonts} from '@app/utils/CommonStyles';

const Button = props => {
  const {title, onPress, width, height, disabled, activeOpacity, customStyle} = props;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        width ? {width} : null,
        height ? {height} : null,
        customStyle,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = ScaledSheet.create({
  container: {
    width: CommonSize.srcWidth - scale(32),
    height: '50@s',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: '30@s',
    overflow: 'hidden',
    backgroundColor: CommonColors.black,
  },
  text: {
    ...Fonts.defaultSemiBold,
    color: CommonColors.white,
    fontSize: '14@ms',
  },
});
