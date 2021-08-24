import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const ButtonIconOnly = ({
  onPress,
  icon,
  padding,
  size,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.iconButton(
        padding,
        size,
        backgroundColor,
        borderRadius,
        borderWidth,
        borderColor,
      )}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: (
    padding,
    size,
    backgroundColor,
    borderRadius,
    borderWidth,
    borderColor,
  ) => ({
    height: size ? size : 30,
    width: size ? size : 30,
    borderRadius: borderRadius ? borderRadius : 0,
    borderWidth: borderWidth ? borderWidth : 0,
    borderColor: borderColor ? borderColor : null,
    backgroundColor: backgroundColor ? backgroundColor : null,
    padding: padding ? padding : 0,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});

export default ButtonIconOnly;
