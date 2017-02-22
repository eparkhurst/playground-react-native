
export default (state = 0, action) => {
  if (action.type === 'INCREASE') {
    const newState = state + 1;
    return newState;
  } else if (action.type === 'DECREASE') {
    const newState = state - 1;
    return newState;
  }
  return state;
};
