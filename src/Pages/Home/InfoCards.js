import React from 'react'
import InfoCard from './InfoCard'


function InfoCards() {

  const cardsData=[
    {
      id:1,
      name: "Opening Hours",
      Discription: "Open 9.00 am to 5.00 pm",
      // icon: clock,
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
      text:'text-black'
    },
    {
      id:2,
      name: "Visite Our location",
      Discription: "Open 9.00 am to 5.00 pm",
      // icon: marker,
      bgClass: 'bg-gray-700',
      text:'text-white'
    },
    {
      id:3,
      name: "Contact With Us",
      Discription: "Open 9.00 am to 5.00 pm",
      // icon: phone,
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
      text:'text-black'
    },
  ]

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-6 mt-12  '>
      {
        cardsData.map(card=><InfoCard
        key={card.id}
        card={card}
        ></InfoCard>)
      }
    </div>
  )
}

export default InfoCards