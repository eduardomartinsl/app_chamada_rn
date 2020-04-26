import React from 'react';
import styled from 'styled-components';
import { StyleSheet, Text } from 'react-native';
import colors from '../resources/colors'

const StyledButton = styled.TouchableOpacity`
  background-color: ${colors.verde};
  padding: 16px;
  margin-horizontal: 16px;
  margin-vertical: 8px;
  border-radius: 4px;
`;

const styles = StyleSheet.create({
  text: { alignSelf: 'center', color: 'white' },
});

export default function Button({ text, onPress }) {
  return (
    <StyledButton
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={styles.text}>{text}</Text>
    </StyledButton>
  );
}
