export default prepareResultForCaching = (searchResult = {}) => {
    const resultObject = {}
    if (searchResult?.Response == 'True')
        searchResult?.Search?.forEach(movie => {
            resultObject[movie.imdbID] = movie
        })
    return resultObject
}