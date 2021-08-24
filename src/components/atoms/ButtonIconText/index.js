import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, hp, wp} from '../../../constants';
import Gap from '../Gap';

const ButtonIconText = ({
  title,
  title1,
  icon,
  iconRight,
  flexDirection,
  backgroundColor,
  titleColor,
  borderRadius,
  onPress,
  fontTitle,
  paddingVertical,
  paddingHorizontal,
  widthText,
  leftText,
  height,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={styles.conatiner(
        flexDirection,
        backgroundColor,
        borderRadius,
        paddingVertical,
        paddingHorizontal,
        height,
      )}
      onPress={onPress}
      disabled={disabled}>
      {icon && icon}
      <View>
        {title1 && <Text style={styles.title1}>{title1}</Text>}
        {title && (
          <Text
            style={styles.title(titleColor, fontTitle, widthText, leftText)}>
            {title}
          </Text>
        )}
      </View>
      {iconRight && <Gap width={wp(1)} />}
      {iconRight && iconRight}
    </TouchableOpacity>
  );
};

export default ButtonIconText;

const styles = StyleSheet.create({
  conatiner: (
    flexDirection,
    backgroundColor,
    borderRadius,
    paddingVertical,
    paddingHorizontal,
    height,
  ) => ({
    backgroundColor: backgroundColor ? backgroundColor : colors.primary,
    paddingVertical: height ? null : paddingVertical,
    paddingHorizontal: paddingHorizontal,
    height: height ? height : null,
    borderRadius: borderRadius ? borderRadius : 15,
    flexDirection: flexDirection ? flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  title: (titleColor, fontTitle, widthText, leftText) => ({
    fontFamily: fontTitle ? fontTitle : fonts.LatoBlack,
    fontSize: hp(1.5),
    color: titleColor ? titleColor : colors.white,
    width: widthText ? widthText : null,
    left: leftText ? leftText : null,
  }),
  title1: {
    fontFamily: fonts.LatoBold,
    color: colors.abu,
    fontSize: hp(1.3),
  },
});
