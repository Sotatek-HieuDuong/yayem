import React from 'react';
import {View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {SCREEN_NAME} from '@app/utils/Const';
import {CommonColors} from '@app/utils/CommonStyles';
import I18n from '@app/i18n';
import Images from '@app/assets/images';
import {navigate} from '@app/utils/NavigationHelpers';
import Header from '@app/components/Header';
import Button from '@app/components/Button';

const HomeScreen = () => {
  const renderHeader = () => (
    <Header title={I18n.t('Home.title')}/>
  );

  const renderImage = () => (
    <Image
      source={Images.avatarDefault}
      style={styles.image}
    />
  );

  const renderSetting = () => (
    <Button
      title={I18n.t('Home.go_setting')}
      onPress={goToSetting}
    />
  );

  const goToSetting = () => navigate(SCREEN_NAME.SETTING_SCREEN);

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderImage()}
      {renderSetting()}
    </View>
  );
};

export default HomeScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.white,
  },
  image: {
    width: '120@s',
    height: '120@s',
    borderRadius: '60@s',
    marginTop: '20@s',
    marginBottom: '80@s',
    alignSelf: 'center',
  },
});
