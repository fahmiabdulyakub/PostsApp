import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../configs/redux/action';
import {colors, wp} from '../../constants';

export const Posts = () => {
  const dispatch = useDispatch();
  const [list_post, setListPost] = useState([]);
  const [refresh, setRefresh] = useState(false);
  console.log(list_post);

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

  return (
    <View>
      <Text>posts</Text>
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
