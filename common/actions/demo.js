import { HELLO_BUTTON_CLICKED, ONE_SECOND_PASSED } from './index';

export const demoButtonClicked = () => ({
  type: HELLO_BUTTON_CLICKED,
});

export const oneSecondPassed = () => ({
  type: ONE_SECOND_PASSED
});

export const sessionStarted = () => async (dispatch) => {
  setInterval(() => dispatch(oneSecondPassed()), 1000);
};
