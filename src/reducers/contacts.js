const initialState = [];

let id = 0;
export default (state = initialState, action) => {
  if (action.type === 'ADD_CONTACT') {
    return [
      ...state,
      {
        ...action.payload,
        id: id++,
        favorites: false
      }
    ]
  }

  if (action.type === 'TOGGLE_FAVORITES') {
    return state.map(contact => {
      if (contact.id === action.id) {
        return {
          ...contact,
          favorites: !contact.favorites
        }
      }

      return contact;
    });
  }
  return state;
}