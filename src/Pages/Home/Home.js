import React from 'react'
import HomeBanner from './HomeBanner'
import InfoCards from './InfoCards'
import MakeAppiontment from './MakeAppiontment'
import Services from './Services'
import Testimonial from './Testimonial'

function Home() {
  return (
    <div className='mx-5'>
      <HomeBanner></HomeBanner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppiontment></MakeAppiontment>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home