import {actionTypes} from './user.action';

const initialState = {
  isLogin: false,
  info: {},
};

export default (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        isLogin: false,
        info: {},
      };
    default:
      return state;
  }
};
