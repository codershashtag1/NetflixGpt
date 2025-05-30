import Header from "./Header"
import VideoBackground from "./VideoBackground";
import { TRENDING_MOVIE_API , NOW_Playing_MOVIE_API, POPULAR_MOVIE_API, UPCOMING_MOVIE_API, TOP_RATED_MOVIE_API} from "../utils/constant";

import useMoviesAPI from "../../customHooks/useMoviesAPI";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import MovieSuggestion from "./MovieSuggestion";
import NetflixGpt from "./NetflixGpt";

const Browse = () => {
  useMoviesAPI(TRENDING_MOVIE_API)
  useMoviesAPI(NOW_Playing_MOVIE_API)
  useMoviesAPI(POPULAR_MOVIE_API)
  useMoviesAPI(UPCOMING_MOVIE_API)
  useMoviesAPI(TOP_RATED_MOVIE_API)


  const movies = useSelector(store => store?.movie?.trendingMovie)
  const gpt = useSelector(store => store?.gpt?.showGPT)

  if (!movies || movies.length === 0) {
    return null
  }

  let { id, original_title, overview } = movies[0]

  return (
    <div>
      <Header/>
      {gpt ? <NetflixGpt /> : 
        <> 
          <VideoTitle title={original_title} description={overview}/>
          <VideoBackground movieId={id}/>
          <MovieSuggestion />
        </>}
    </div>
  )
}

export default Browse