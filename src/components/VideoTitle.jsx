const VideoTitle = (props) => {

  let { title, description } = props

  return (
    <div className="absolute top-2/4 px-16 w-5/12">
      <p className="text-white font-semibold text-2xl py-3">{title}</p>
      <p className="text-white">{description}</p>
      <div className="flex gap-7 my-5">
        <button className="text-black font-semibold bg-white px-8 py-2 rounded-lg">▶️ Play</button>
        <button className="text-white font-semibold bg-gray-400 px-8 py-2 rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle