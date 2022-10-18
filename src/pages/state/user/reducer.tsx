const userReducer = (state: any, action: any) => {
  return {
    ...state,
    token: action.payload.token,
    created: action.payload.created,
    refresh_token: action.payload.refresh_token,
  }
};

export default userReducer;
