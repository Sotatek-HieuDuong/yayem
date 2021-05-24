import React from 'react';
import {View, Text} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {CommonColors, CommonSize, Fonts} from '@app/utils/CommonStyles';

const Header = props => {
  const {title, left, right, centerStyle, leftStyle, rightStyle} = props;

  return (
    <View style={styles.container}>
      <View style={[styles.center, centerStyle, {left: left ? scale(45) : scale(15)}]}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View style={[styles.left, leftStyle]}>{left}</View>
      <View style={[styles.right, rightStyle]}>
        {right}
      </View>
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  container: {
    height: CommonSize.headerHeight,
    paddingTop: CommonSize.paddingTopHeader,
    backgroundColor: CommonColors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: CommonColors.gray,
    borderBottomWidth: 0.3,
  },
  center: {
    position: 'absolute',
    top: CommonSize.paddingTopHeader,
    left: '45@s',
    right: '45@s',
    bottom: 0,
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15@s',
  },
  right: {
    position: 'absolute',
    top: CommonSize.paddingTopHeader,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15@s',
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: '18@ms',
    ...Fonts.defaultRegular,
    fontWeight: '700',
    color: CommonColors.black,
    letterSpacing: '0.5@s',
  },
});
