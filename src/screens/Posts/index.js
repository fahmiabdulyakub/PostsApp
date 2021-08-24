import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../configs/redux/action';

export const Posts = () => {
  const dispatch = useDispatch();
  const [list_post, setListPost] = useState([]);
  console.log(list_post);

  useEffect(() => {
    dispatch(getPosts()).then(result => {
      setListPost(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>posts</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
