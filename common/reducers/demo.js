import { HELLO_BUTTON_CLICKED } from '../actions';

const initialState = {
  clicked: 0,
  sessionTime: 0,
};

export const demo = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case HELLO_BUTTON_CLICKED:
      return $({ clicked: state.clicked + 1 });
    default:
      return $();
  }
};
