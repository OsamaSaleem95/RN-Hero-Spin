import {
  searchMovieService,
} from '../services/MainServices';
import { SEARCH_SUCCESS } from '../types';

export const searchMovieAction = () => dispatch => {
  // dispatch(toggleLoadingIndicator(true));
  searchMovieService()
    .then(res => {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: res?.results
      })
    })
    .catch(e => {
      console.log(e)
    });
};