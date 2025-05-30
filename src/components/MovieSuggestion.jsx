import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const MovieSuggestion = () => {
  const movies = useSelector(store => store?.movie)

  return (
    <div className='bg-black -mt-20'>
      <MovieList title="Trending Movies" movies={movies.trendingMovie}/>
      <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovie}/>
      <MovieList title="Popular Movies" movies={movies.popularMovie}/>
      <MovieList title="Upcoming Movies" movies={movies.upcomingMovie}/>
      <MovieList title="Top Rated Movies" movies={movies.topRatedMovie}/>
    </div>
  )                    
}

export default MovieSuggestion
