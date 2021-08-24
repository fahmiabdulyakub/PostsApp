import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICArrowRight} from '../../../assets';
import {colors, fonts, hp, wp} from '../../../constants';
import {formatBank, formatRupiah, getParsedDate} from '../../../utils';
import {Gap} from '../../atoms';

export const Card = ({onPress, item}) => {
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    content: {
      paddingVertical: hp(2.5),
      borderRadius: 5,
      backgroundColor: colors.white,
      borderLeftWidth: 10,
      borderLeftColor:
        item.status === 'PENDING' ? colors.border_danger : colors.green,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: wp(4),
      paddingLeft: wp(3),
      marginVertical: hp(0.5),
    },
    text_bold: textTransform => ({
      fontFamily: fonts.LatoBlack,
      fontSize: hp(2),
      textTransform: textTransform,
    }),
    text_reguler: {
      fontFamily: fonts.LatoBold,
      fontSize: hp(1.8),
    },
    text_name: {
      fontFamily: fonts.LatoBold,
      fontSize: hp(1.9),
      textTransform: 'uppercase',
      maxWidth: wp(50),
    },
    label: {
      backgroundColor: item.status === 'PENDING' ? colors.white : colors.green,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: wp(3),
      paddingVertical: 6,
      borderWidth: item.status === 'PENDING' ? 1 : 0,
      borderColor: colors.border_danger,
    },
    title_label: {
      fontFamily: fonts.LatoBold,
      fontSize: hp(1.8),
      color: item.status === 'PENDING' ? colors.black : colors.white,
    },
    dot: {
      backgroundColor: colors.black,
      width: wp(1.5),
      height: wp(1.5),
      borderRadius: wp(1.5) / 2,
      marginHorizontal: wp(1),
    },
  });

  const text_sender = formatBank(item.sender_bank);
  const text_beneficiary = formatBank(item.beneficiary_bank);

  const date = getParsedDate(item.created_at);

  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <View>
        <View style={styles.row}>
          <Text style={styles.text_bold(text_sender)}>{item.sender_bank}</Text>
          <Gap width={wp(1)} />
          {<ICArrowRight width={hp(2.5)} height={hp(2.5)} />}
          <Gap width={wp(1)} />
          <Text style={styles.text_bold(text_beneficiary)}>
            {item.beneficiary_bank}
          </Text>
        </View>
        <Text style={styles.text_name}>{item.beneficiary_name}</Text>
        <View style={styles.row}>
          <Text style={styles.text_reguler}>{formatRupiah(item.amount)}</Text>
          <View style={styles.dot} />
          <Text style={styles.text_reguler}>{date}</Text>
        </View>
      </View>
      <View style={styles.label}>
        <Text style={styles.title_label}>
          {item.status === 'PENDING' ? 'Pengecekan' : 'Berhasil'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
