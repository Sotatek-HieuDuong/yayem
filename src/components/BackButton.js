import React from 'react';
import {TouchableOpacity} from 'react-native';
import {goBack} from '@app/utils/NavigationHelpers';
import LeftIcon from '@app/assets/svg/common/chevron-left.svg';

const BackButton = ({icon, onPress}) => {
  const onBack = () => {
    goBack();
  };

  return (
    <TouchableOpacity
      hitSlop={{top: 30, right: 30, left: 30, bottom: 30}}
      onPress={onPress || onBack}>
      {icon || <LeftIcon width={18} height={18} />}
    </TouchableOpacity>
  );
};

export default BackButton;
