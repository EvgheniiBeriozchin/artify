import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonContainer = styled.TouchableOpacity`
  elevation: 8;
  border-radius: 10px;
  padding-vertical: 10px;
  padding-horizontal: 12px;
  background-color: #003bfc;
`;

const ButtonText = styled.Text`
  font-size: 18;
  color: #fcc000;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;

const CustomButton = ({onPress, title, size, backgroundColor}) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default CustomButton;
