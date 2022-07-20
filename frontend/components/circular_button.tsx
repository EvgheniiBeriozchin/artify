import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as colors from './colors';

import {circularButtonStyles} from './stylesheets';

const CircularButton = ({name, onPress = () => console.log('asdasda')}) => (
  <TouchableOpacity style={circularButtonStyles.roundButton} onPress={onPress}>
    <Icon name={name} size={40} color={colors.ACCENT_COLOR_BRIGHT} />
  </TouchableOpacity>
);

export default CircularButton;
