import prepareResultForCaching from '../extractors/prepareResultForCaching';
import { superheroes } from '../../helpers/constants';
import {
  searchMovieService,
} from '../services/MainServices';
import { SEARCH_SUCCESS, PICK_MOVIE, INCRESE_PAGE_NUMBER, MOVE_TO_BLACK_LIST } from '../types';
import { arraysOuterJoin, filterNotPickedBeforeMovies, getRandomFromArray } from '../../helpers/randomMoviesHelpers';

export const getRandomMovieAction = (searchName, callback) => (dispatch, getState) => {
  const superheroesWhitelist = arraysOuterJoin(superheroes, getState().MainReducer.blacklist)
  const randomSuperHeroName = getRandomFromArray(superheroesWhitelist)
  searchName = searchName || randomSuperHeroName

  const toBePickedMovies = filterNotPickedBeforeMovies(getState().MainReducer, searchName)
  if (toBePickedMovies?.length == 0) {
    dispatch({
      type: INCRESE_PAGE_NUMBER,
      payload: searchName
    })
    const pageNumber = getState()?.MainReducer?.pageNumbers[searchName] || 1
    searchMovieService(searchName, pageNumber)
      .then(res => {
        const parsedResult = prepareResultForCaching(res)
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
        if (e === 'notFound') {
          alert(`No More Movies for ${searchName}`)
          dispatch(moveToBlacklist(searchName))
        }
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

export const moveToBlacklist = (heroName) => (dispatch, getState) => {
  dispatch({
    type: MOVE_TO_BLACK_LIST,
    payload: heroName
  })
};