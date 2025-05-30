import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { options } from "../src/utils/constant"
import { TRENDING_MOVIE_API, NOW_Playing_MOVIE_API, POPULAR_MOVIE_API, UPCOMING_MOVIE_API, TOP_RATED_MOVIE_API } from "../src/utils/constant";
import { addTrendingMovie, addNowPlayingMovie, addPopularMovie, addUpcomingMovie, addTopRatedMovie } from "../src/utils/moviesStore";

const useMoviesAPI = (api) => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchLatestMovie()
  }, []);

  const fetchLatestMovie = async () => {
    console.log(options);
    const trendindMovieData = await fetch(api, options);
    const latestMovieJson = await trendindMovieData.json();

    switch (api) {
      case TRENDING_MOVIE_API:
        dispatch(addTrendingMovie(latestMovieJson.results));
      break;
      case NOW_Playing_MOVIE_API:
        dispatch(addNowPlayingMovie(latestMovieJson.results))
      break;
      case POPULAR_MOVIE_API:
        dispatch(addPopularMovie(latestMovieJson.results))
      break;
      case UPCOMING_MOVIE_API:
        dispatch(addUpcomingMovie(latestMovieJson.results))
      break;
      case TOP_RATED_MOVIE_API:
        dispatch(addTopRatedMovie(latestMovieJson.results))
      break;
      // // add more cases as needed
      default:
      // handle unknown API
      break;
    }

    // dispatch(addTrendingMovie(latestMovieJson.results));
  };
}

export default useMoviesAPI