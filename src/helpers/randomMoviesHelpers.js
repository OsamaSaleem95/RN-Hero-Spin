
export const filterNotPickedBeforeMovies = (reducer, heroName) => {
    const cache = reducer.cache
    const moviesByHero = cache[heroName] || {}
    const pickedBeforeIds = reducer.pickedBefore
    const result = Object.values(moviesByHero).filter(movie => !pickedBeforeIds.includes(movie.imdbID))
    return result
}

export const getRandomFromArray = (arr) => {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}