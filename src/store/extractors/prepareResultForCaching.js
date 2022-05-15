export default prepareResultForCaching = (searchResult = {}) => {
    console.log(searchResult)
    const resultObject = {}
    if (searchResult?.Response == 'True')
        searchResult?.Search?.forEach(movie => {
            resultObject[movie.imdbID] = movie
        })
console.log(resultObject)
    return resultObject
}