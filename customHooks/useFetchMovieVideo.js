import { useEffect } from 'react'
import { options } from '../src/utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../src/utils/moviesStore';

const useFetchMovieVideo = (movieId) => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchMovieVideo()
  }, []);
  
    const fetchMovieVideo = async () => {
      const movieBackGroundData = await fetch("https://api.themoviedb.org/3/movie/" + movieId +"/videos?language=en-US", options)
      const json = await movieBackGroundData.json()
      dispatch(addTrailerVideo(json.results.filter(e => e.type == "Trailer")))
    }
}

export default useFetchMovieVideo