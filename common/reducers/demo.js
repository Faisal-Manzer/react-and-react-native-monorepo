import { HELLO_BUTTON_CLICKED, ONE_SECOND_PASSED } from '../actions';

const initialState = {
  clicked: 0,
  sessionTime: 0,
};

export const demo = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case HELLO_BUTTON_CLICKED:
      return $({ clicked: state.clicked + 1 });
    case ONE_SECOND_PASSED:
      return $({ sessionTime: state.sessionTime + 1 });
    default:
      return $();
  }
};
