import { SEARCH_SUCCESS, PICK_MOVIE, INCRESE_PAGE_NUMBER, MOVE_TO_BLACK_LIST } from '../types';

const INITIAL_STATE = {
  isSearching: false,
  cache: {},
  pickedBefore: [],
  currentMovie: {},
  pageNumbers: {},
  blacklist: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS: {
      return {
        ...state,
        cache: {
          ...state.cache,
          [action.payload.searchName]: {
            ...state.cache[action.payload.searchName],
            ...action.payload.parsedResult
          }
        }
      };
    }

    case PICK_MOVIE: {
      return {
        ...state,
        pickedBefore: [...state.pickedBefore, action?.payload?.imdbID],
        currentMovie: action.payload
      };
    }

    case INCRESE_PAGE_NUMBER: {
      return {
        ...state,
        pageNumbers: {
          ...state.pageNumbers,
          [action.payload]: state.pageNumbers[action.payload] + 1 || 1
        },
      };
    }

    case MOVE_TO_BLACK_LIST: {
      return {
        ...state,
        blacklist: [...state.blacklist, action.payload],
      };
    }

    default:
      return state;
  }
};
