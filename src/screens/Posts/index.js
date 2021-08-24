import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ICSearch} from '../../assets/icon';
import {FooterPagination, Gap, Input} from '../../components/atoms';
import {Card} from '../../components/molecules';
import {getPosts} from '../../configs/redux/action';
import {colors, hp, wp} from '../../constants';

export const Posts = ({navigation}) => {
  const dispatch = useDispatch();
  const state_global = useSelector(state => state.global);
  const [list_post, setListPost] = useState([]);
  const [refresh, setRefresh] = useState(false);
  console.log(state_global.loading);

  useEffect(() => {
    dispatch(getPosts()).then(result => {
      setListPost(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = () => {
    setRefresh(true);
    dispatch(getPosts()).then(result => {
      setListPost(result);
      setRefresh(false);
    });
  };

  const onSearch = value => {};

  return (
    <View style={styles.page}>
      <Gap height={hp(3)} />
      <Input
        suffixComponent={<ICSearch />}
        backgroundColor={colors.white}
        placeholder={'Search Posts'}
        placeholderColor={colors.dark_grey}
        colorText={colors.black}
        onChangeText={value => onSearch(value.toLowerCase())}
      />
      <Gap height={hp(1)} />
      <FlatList
        refreshing={refresh}
        onRefresh={onRefresh}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={list_post}
        renderItem={({item}) => (
          <Card
            onPress={() =>
              navigation.navigate('Comments', {
                post_id: item.id,
              })
            }
            item={item}
          />
        )}
        ListFooterComponent={
          <FooterPagination visible={refresh ? false : state_global.loading} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: wp(3),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: wp(3),
  },
  dot: {
    backgroundColor: colors.black,
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(2.5) / 2,
  },
});
