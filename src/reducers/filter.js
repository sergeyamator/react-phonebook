const initialState = 'SHOW_ALL';

export default (state = initialState, action) => {
  if (action.type === 'SET_VISIBLE_FILTER') {
    return action.filter;
  }

  return state;
}