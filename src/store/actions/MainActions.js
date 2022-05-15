import { superheroes } from '../../helpers/constants';
import prepareResultForCaching from '../extractors/prepareResultForCaching';
import {
  searchMovieService,
} from '../services/MainServices';
import { SEARCH_SUCCESS, PICK_MOVIE, INCRESE_PAGE_NUMBER } from '../types';

export const getRandomMovieAction = (searchName, callback) => (dispatch, getState) => {
  var randomIndex = Math.floor(Math.random() * superheroes.length);
  const isSearchedByName = !!searchName
  searchName = searchName || superheroes[randomIndex]

  const cache = getState().MainReducer.cache
  const moviesByHero = cache[searchName] || {}
  const pickedBeforeIds = getState().MainReducer.pickedBefore
  const notPickedBeforeMovies = Object.values(moviesByHero).filter(movie => !pickedBeforeIds.includes(movie.imdbID))
  if (notPickedBeforeMovies?.length == 0) {
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
        dispatch(pickMovieFromCache(searchName, isSearchedByName))
        callback()
      })
      .catch(e => {
        console.log(e)
      });
  }
  else {
    dispatch(pickMovieFromCache(searchName, isSearchedByName))
    callback()
  }

};

export const pickMovieFromCache = (heroName, isSearchedByName = false) => (dispatch, getState) => {
  const cache = getState().MainReducer.cache
  const moviesByHero = cache[heroName] || {}
  const pickedBeforeIds = getState().MainReducer.pickedBefore
  const notPickedBeforeMovies = Object.values(moviesByHero).filter(movie => !pickedBeforeIds.includes(movie.imdbID))
  if (notPickedBeforeMovies.length > 0)
    dispatch({
      type: PICK_MOVIE,
      payload: notPickedBeforeMovies[0]
    })
  // else if (isSearchedByName) dispatch(getRandomMovieAction(heroName))
  // else dispatch(getRandomMovieAction(heroName))
};