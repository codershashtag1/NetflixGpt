// import openAI from "../utils/openAI"
import { useRef } from "react"

const GptSearchBar = () => {
  const search = useRef(null);

  const handleSearch = async (e) => {

    e.preventDefault();
    console.log("handleSearch")
    // const completions = await openAI.chat.completions.create({
    //   messages: [{ role: "movie", content: search.current.value }],
    //   model: 'gpt-3.5-turbo'
    // })

    // console.log(completions.choices)
  }

  return (
  <div className='pt-[15%] flex justify-center'>
    <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={handleSearch}>
      <input type="text" placeholder='GPT Search Bar' className='border-gray-700 p-4 m-4 col-span-8' ref={search}/>
      <button
        className='px-6 bg-red-700 text-white text-2xl font-semibold rounded-lg col-span-4 p-4 m-4'>Search</button>
    </form>
  </div>
  )
}

export default GptSearchBar