import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts, hp, wp} from '../../../constants';
import {Gap} from '../../atoms';

export const Card = ({onPress, item}) => {
  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <Text style={styles.title}>{item.title}</Text>
      <Gap height={hp(3)} />
      <Text style={styles.description}>{item.body}</Text>
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
