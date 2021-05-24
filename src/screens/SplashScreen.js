import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {SCREEN_NAME} from '@app/utils/Const';
import {CommonColors} from '@app/utils/CommonStyles';
import {useSelector} from 'react-redux';
import I18n from '@app/i18n';
import {setRoot} from '@app/utils/NavigationHelpers';

const SplashScreen = () => {
  const user = useSelector(state => state.user);
  const {isLogin} = user;

  useEffect(() => {
    I18n.locale = 'en';
    getRoot();
  }, []);

  const getRoot = () => {
    const route = isLogin ? SCREEN_NAME.HOME_SCREEN : SCREEN_NAME.LOGIN_SCREEN;

    setTimeout(() => {
      setRoot(route);
    }, 1000);
  };

  return <View style={styles.container} />;
};

export default SplashScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.white,
  },
});
