import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {SCREEN_NAME} from '@app/utils/Const';
import {CommonColors} from '@app/utils/CommonStyles';
import I18n from '@app/i18n';
import {setRoot} from '@app/utils/NavigationHelpers';
import Header from '@app/components/Header';
import BackButton from '@app/components/BackButton';
import Button from '@app/components/Button';
import {logOut} from '@app/redux/user/user.action';
import {useDispatch} from 'react-redux';

const SettingScreen = (props) => {
  const dispatch = useDispatch();

  const renderHeader = () => (
    <Header title={I18n.t('Setting.title')} left={<BackButton />}/>
  );

  const renderLogOut = () => (
    <Button
      title={I18n.t('Setting.log_out')}
      onPress={onLogOut}
      customStyle={styles.button}
    />
  );

  const onLogOut = () => {
    dispatch(logOut());
    setRoot(SCREEN_NAME.LOGIN_SCREEN);
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderLogOut()}
    </View>
  );
};

export default SettingScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.white,
  },
  button: {
    marginTop: '100@s',
  },
});
