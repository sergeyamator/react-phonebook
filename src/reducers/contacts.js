const initialState = [];

let id = 0;
export default (state = initialState, action) => {
  if (action.type === 'ADD_CONTACT') {
    return [
      ...state,
      {
        ...action.payload,
        id: id++
      }
    ]
  }
  return state;
}