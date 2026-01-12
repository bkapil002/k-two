import React from 'react'
import Hero from './Hero'
import Features from './Features'
import Explore from './Explore'
import Students from './Students'
import OnlineLearning from './OnlineLearning'
import ParentsWant from './ParentsWant'
import CardsSection from './CardsSection'
import Stories from './Stories'
import HelpSection from './HelpSection'
import VideoGallery from './VideoGallery'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Explore/>
      <VideoGallery/>
      <Students/>
      <OnlineLearning/>
      <ParentsWant/>
      <CardsSection/>
      <Stories/>
      <HelpSection/>
    </div>
  )
}

export default Homepage
