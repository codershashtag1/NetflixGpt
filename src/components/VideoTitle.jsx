const VideoTitle = (props) => {

  let { title, description } = props

  return (
    <div className="absolute top-2/4 px-28 w-5/12">
      <p className="text-white font-semibold text-6xl py-5">{title}</p>
      <p className="text-white font-semibold text-2xl">{description}</p>
      <div className="flex gap-7 my-5">
        <button className="text-black text-2xl font-semibold bg-white px-10 py-4 rounded-lg">▶️ Play</button>
        <button className="text-white text-2xl font-semibold bg-gray-400 px-10 py-4 rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle