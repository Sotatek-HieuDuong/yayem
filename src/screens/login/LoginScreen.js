import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {SCREEN_NAME} from '@app/utils/Const';
import {CommonColors} from '@app/utils/CommonStyles';
import {useDispatch} from 'react-redux';
import I18n from '@app/i18n';
import {setRoot} from '@app/utils/NavigationHelpers';
import {login} from '@app/redux/user/user.action';
import Button from '@app/components/Button';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const renderButton = () => (
    <Button
      title={I18n.t('Login.title')}
      onPress={onLogin}
    />
  );

  const onLogin = () => {
    setRoot(SCREEN_NAME.HOME_SCREEN);
    dispatch(login());
  };

  return (
    <View style={styles.container}>
      {renderButton()}
    </View>
  );
};

export default LoginScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
