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
  const [post_filter, setPostFilter] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getPosts()).then(result => {
      setListPost(result);
      setPostFilter(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = () => {
    setRefresh(true);
    dispatch(getPosts()).then(result => {
      setListPost(result);
      setPostFilter(result);
      setRefresh(false);
    });
  };

  const onSearch = value => {
    const newData = list_post.filter((item, index) => {
      const title = item.title ? item.title : '';
      const body = item.body ? item.body : '';
      const text = value;
      if (title.indexOf(text) > -1) {
        return title.indexOf(text) > -1;
      } else {
        return body.indexOf(text) > -1;
      }
    });
    setPostFilter(value ? newData : list_post);
  };

  return (
    <View style={styles.page}>
      <Gap height={hp(3)} />
      <Input
        suffixComponent={<ICSearch />}
        backgroundColor={colors.white}
        placeholder={'Search Post'}
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
        data={post_filter}
        renderItem={({item}) => (
          <Card
            onPress={() =>
              navigation.navigate('Comments', {
                post_id: item.id,
              })
            }
            title={item.title}
            body={item.body}
          />
        )}
        ListFooterComponent={
          <FooterPagination
            visible={refresh ? false : state_global.loading}
            text={'post'}
          />
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
});
