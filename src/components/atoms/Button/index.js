import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts, hp, wp} from '../../../constants';

const Button = ({
  title,
  onPress,
  buttonColor,
  textColor,
  paddingHorizontal,
  disabled,
  fontSize,
  fontFamily,
  borderWidth,
  borderColor,
  paddingVertical,
  borderRadius,
  numberOfLines,
  marginHorizontal,
  bottom,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(
        buttonColor,
        paddingHorizontal,
        borderWidth,
        borderColor,
        paddingVertical,
        borderRadius,
        marginHorizontal,
        bottom,
      )}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={styles.title(textColor, fontSize, fontFamily)}
        numberOfLines={numberOfLines ? numberOfLines : null}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (
    buttonColor,
    paddingHorizontal,
    borderWidth,
    borderColor,
    paddingVertical,
    borderRadius,
    marginHorizontal,
    bottom,
  ) => ({
    backgroundColor: buttonColor ? buttonColor : colors.primary,
    borderRadius: borderRadius ? borderRadius : 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(3),
    marginHorizontal: marginHorizontal,
    borderWidth: borderWidth,
    borderColor: borderColor,
    paddingVertical: paddingVertical ? paddingVertical : 6,
    bottom: bottom,
  }),
  title: (textColor, fontSize, fontFamily) => ({
    fontSize: fontSize ? fontSize : hp(1.8),
    fontFamily: fontFamily ? fontFamily : fonts.LatoBold,
    color: textColor ? textColor : colors.black,
  }),
});
