import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BG_IMG_URL } from '../utils/constant'

const NetflixGpt = () => {
  return (
    <div>
      <div className="absolute bg-gradient-to-b from-black -z-10">
        <img alt="Background_Image" src={BG_IMG_URL} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default NetflixGpt