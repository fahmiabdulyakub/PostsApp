import {reducer} from '../../../../constants';

const initialStateRoot = {
  loading: false,
};

const global = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.LOADING:
      return {
        ...state,
        loading: action.value,
      };
    default:
      return state;
  }
};

export default global;
