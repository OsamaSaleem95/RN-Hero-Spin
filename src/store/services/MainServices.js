import omdbService from './APIconfig';

export const searchMovieService = () => {
  return omdbService(`/?s=spiderman`)
    .then(res => {
      return res.data;
    })
    .catch(e => {
      return Promise.reject(e);
    });
};