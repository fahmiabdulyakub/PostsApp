import axios from 'axios';
import Config from 'react-native-config';
import {reducer} from '../../../../constants';

export const getPosts = () => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.LOADING, value: true});
    axios
      .get(Config.API_URL)
      .then(result => {
        dispatch({type: reducer.LOADING, value: false});
        resolve(result.data);
      })
      .catch(error => {
        dispatch({type: reducer.LOADING, value: false});
        console.log(error);
      });
  });
};
