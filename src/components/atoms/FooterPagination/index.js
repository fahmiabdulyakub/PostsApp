import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts, hp} from '../../../constants';

const FooterPagination = ({visible, text}) => {
  return (
    <View style={styles.footer}>
      {visible ? (
        <ActivityIndicator size="large" color={colors.border_danger} />
      ) : (
        <Text style={styles.text}> {'All ' + text + ' have been shown'}</Text>
      )}
    </View>
  );
};

export default FooterPagination;

const styles = StyleSheet.create({
  footer: {
    marginVertical: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: hp(1.6),
    fontFamily: fonts.LatoSemibold,
  },
});
