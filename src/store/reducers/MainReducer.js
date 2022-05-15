import { SEARCH_SUCCESS } from '../types';

const INITIAL_STATE = {
  isSearching: false,
  searchResult: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
