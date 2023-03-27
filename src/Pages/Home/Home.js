import React from 'react'
import HomeBanner from './HomeBanner'
import InfoCards from './InfoCards'
import Services from './Services'

function Home() {
  return (
    <div className='mx-5'>
      <HomeBanner></HomeBanner>
      <InfoCards></InfoCards>
      <Services></Services>
    </div>
  )
}

export default Home