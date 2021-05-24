export const actionTypes = {
  LOGIN: 'LOGIN',
  LOG_OUT: 'LOG_OUT',
};

export const login = () => ({type: actionTypes.LOGIN});

export const logOut = () => ({type: actionTypes.LOG_OUT});
