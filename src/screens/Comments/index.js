import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ICCancel, ICSearch} from '../../assets/icon';
import {
  ButtonIconOnly,
  FooterPagination,
  Gap,
  Input,
} from '../../components/atoms';
import {Card} from '../../components/molecules';
import {getComments} from '../../configs/redux/action';
import {colors, hp, wp} from '../../constants';

export const Comments = ({navigation, route}) => {
  const {post_id} = route.params;
  const dispatch = useDispatch();
  const state_global = useSelector(state => state.global);
  const [list_comment, setListComment] = useState([]);
  const [comment_filter, setCommentFilter] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getComments(post_id)).then(result => {
      setListComment(result);
      setCommentFilter(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = () => {
    setRefresh(true);
    dispatch(getComments(post_id)).then(result => {
      setListComment(result);
      setCommentFilter(result);
      setRefresh(false);
    });
  };

  const onSearch = value => {
    const newData = list_comment.filter(item => {
      const title = item.name ? item.name : '';
      const body = item.body ? item.body : '';
      const email = item.email.toLowerCase() ? item.email.toLowerCase() : '';
      const text = value;
      if (title.indexOf(text) > -1) {
        return title.indexOf(text) > -1;
      } else if (body.indexOf(text) > -1) {
        return body.indexOf(text) > -1;
      } else {
        return email.indexOf(text) > -1;
      }
    });
    setCommentFilter(value ? newData : list_comment);
  };

  return (
    <View style={styles.page}>
      <Gap height={hp(2)} />
      <ButtonIconOnly
        icon={<ICCancel />}
        size={wp(5)}
        onPress={() => navigation.goBack()}
      />
      <Gap height={hp(2)} />
      <Input
        suffixComponent={<ICSearch />}
        backgroundColor={colors.white}
        placeholder={'Search Comment'}
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
        data={comment_filter}
        renderItem={({item}) => (
          <Card
            title={item.name}
            email={item.email}
            body={item.body}
            disabled={true}
          />
        )}
        ListFooterComponent={
          <FooterPagination
            visible={refresh ? false : state_global.loading}
            text={'comment'}
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
