import MovieCard from './MovieCard'

const MovieList = (props) => {
  let { title, movies } = props
  return (
    <div className='px-4'>
      <h1 className='text-white font-semibold text-2xl'>{title}</h1>
      <div className='flex overflow-x-auto [&::-webkit-scrollbar]:hidden scrollbar-hide'>
        <div className='flex'>
          {
            movies?.map(list => {
              return <MovieCard key={list.id} movies={list} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList