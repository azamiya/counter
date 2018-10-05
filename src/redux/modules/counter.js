import { createAction } from 'redux-actions';

export const INCREMENT = 'counter/INCREMENT';
export const incrementCounter = createAction(INCREMENT);

export const DECREMENT = 'counter/DECREMENT';
export const decrementCounter = createAction(DECREMENT);

export const RESET = 'counter/RESET';
export const resetCounter = createAction(RESET);

const INITIAL_STATE = {
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INCREMENT: {
      const { count } = state;
      return {
        count: count + 1
      }
    }

    case DECREMENT: {
      const { count } = state;
      return {
        count: count - 1
      }
    }

    case RESET: {
      return {
        count: 0
      }
    }

    default: {
      return state;
    }
  }
}