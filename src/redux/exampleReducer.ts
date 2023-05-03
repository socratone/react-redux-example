export type ExampleAction = {
  type: 'INCREMENT' | 'DECREMENT';
  payload: number;
};

const initialState = {
  count: 0,
};

const exampleReducer = (state = initialState, action: ExampleAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default exampleReducer;
