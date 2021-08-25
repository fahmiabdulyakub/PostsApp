import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts, hp, wp} from '../../../constants';
import {Gap} from '../../atoms';

export const Card = ({onPress, disabled, title, body, email}) => {
  return (
    <TouchableOpacity
      style={styles.content}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.title}>{title}</Text>
      {email && (
        <>
          <Gap height={hp(2)} />
          <Text style={styles.description}>{email}</Text>
        </>
      )}
      <Gap height={hp(3)} />
      <Text style={styles.description}>{body}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingVertical: hp(2.5),
    borderRadius: 5,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingRight: wp(4),
    paddingLeft: wp(3),
    marginVertical: hp(0.5),
  },
  title: {
    fontFamily: fonts.LatoBlack,
    fontSize: hp(1.8),
    textTransform: 'capitalize',
  },
  description: {
    fontFamily: fonts.LatoBold,
    fontSize: hp(1.5),
  },
});
