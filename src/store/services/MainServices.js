import omdbService from './APIconfig';

export const searchMovieService = (searchName, page = 1) => {
  return omdbService(`/?type=movie&s=${searchName}&page=${page}`)
    .then(res => {
      if (res?.data?.Error === 'Movie not found!')
        return Promise.reject('notFound')
      return res.data;
    })
    .catch(e => {
      return Promise.reject(e);
    });
};