import { useSelector } from "react-redux";
import useFetchMovieVideo from "../../customHooks/useFetchMovieVideo";

const VideoBackground = (props) => {
  const { movieId } = props

  useFetchMovieVideo(movieId)

  const trailerVideo = useSelector(store => store?.movie?.trailerVideo)
  if(trailerVideo == null) return null

  return (
    <div className="w-full h-screen">
      <iframe
        className="w-full h-screen"
        src={`https://www.youtube.com/embed/${trailerVideo[0]?.key}?autoplay=1&mute=1&rel=0&playlist=${trailerVideo[0]?.key}&loop=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        tabIndex={-1}
      ></iframe>
    </div>
  )
}

export default VideoBackground
