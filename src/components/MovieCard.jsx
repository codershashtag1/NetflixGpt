import { TMDB_MG_PATH } from '../utils/constant'

const MovieCard = (props) => {
  let { poster_path, title } = props?.movies || {}
  return (
    <div className='w-80 p-5 transition-transform duration-300 ease-in hover:scale-105'>
      <img 
        className='h-52 w-full rounded-lg'
        alt = {title}
        src={TMDB_MG_PATH + poster_path}
      />
    </div>
  )
}

export default MovieCard