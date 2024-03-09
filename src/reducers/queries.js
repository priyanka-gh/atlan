// queries.js
// Action Types
export const ADD_QUERY = 'ADD_QUERY';

// Action Creators
export const addQuery = (query) => ({
  type: ADD_QUERY,
  payload: query,
});

// Reducer
const initialState = {
  queries: [],
};

export const queriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUERY:
      return {
        ...state,
        queries: [...state.queries, action.payload],
      };
    default:
      return state;
  }
};
