import prepareResultForCaching from '../extractors/prepareResultForCaching';
import { superheroes } from '../../helpers/constants';
import {
  searchMovieService,
} from '../services/MainServices';
import { SEARCH_SUCCESS, PICK_MOVIE, INCRESE_PAGE_NUMBER } from '../types';
import { filterNotPickedBeforeMovies, getRandomFromArray } from '../../helpers/randomMoviesHelpers';

export const getRandomMovieAction = (searchName, callback) => (dispatch, getState) => {
  const randomSuperHeroName = getRandomFromArray(superheroes)
  searchName = searchName || randomSuperHeroName

  const toBePickedMovies = filterNotPickedBeforeMovies(getState().MainReducer, searchName)
  console.log(toBePickedMovies)
  if (toBePickedMovies?.length == 0) {
    dispatch({
      type: INCRESE_PAGE_NUMBER,
      payload: searchName
    })
    const pageNumber = getState()?.MainReducer?.pageNumbers[searchName] || 1
    searchMovieService(searchName, pageNumber)
      .then(res => {
        const parsedResult = prepareResultForCaching(res)
        console.log(parsedResult)
        dispatch({
          type: SEARCH_SUCCESS,
          payload: { searchName, parsedResult }
        })
        dispatch(
          pickMovieFromCache(Object.values(parsedResult))
        )
        callback()
      })
      .catch(e => {
        console.log(e)
      });
  }
  else {
    dispatch(pickMovieFromCache(toBePickedMovies))
    callback()
  }

};

export const pickMovieFromCache = (moviesList) => (dispatch, getState) => {
  dispatch({
    type: PICK_MOVIE,
    payload: moviesList[0]
  })
};