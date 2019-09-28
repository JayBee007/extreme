import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton as HButton} from 'react-navigation-header-buttons';
// import {Ionicons} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderButton = props => {
  return (
    <HButton
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : 'red'}
    />
  );
};

export default HeaderButton;
