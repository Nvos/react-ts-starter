import { AnyAction } from 'redux';

const initialState = {
  items: [],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'ACTION':
      return state;
    default:
      return state;
  }
};

export default reducer;
