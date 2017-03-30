const initialState = 'GRID';

export default (state = initialState, action) => {
  if (action.type === 'CHANGE_VIEW_STYLE') {
    return action.style;
  }

  return state;
}