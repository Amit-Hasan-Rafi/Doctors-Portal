import React from 'react'
import T_P_card from './T_P_card'

function Testimonial() {
    const P_Infos=[
        {
            id:1,
            name:'Winson Herry',
            data:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:'https://i.ibb.co/hHPqc9B/people1.png',
            email:'xxxxx@gmail.com'
        },
        {
            id:2,
            name:'Jerry Jacktion',
            data:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:'https://i.ibb.co/pwn07RY/people2.png',
            email:'xxxxx@gmail.com'
        },
        {
            id:3,
            name:'lora Widson',
            data:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:'https://i.ibb.co/MMxKgqn/people3.png',
            email:'xxxxx@gmail.com'
        },
    ]
  return (
    <section className='mt-16'>
        <div>
            <h1 className='font-bold text-lg text-secondary'>Testimonial</h1>
            <p className='text-xl md:text-2xl lg:text-3xl'>What Our Patients Says</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-6 mt-10'>
            {
                P_Infos.map(info=><T_P_card
                key={info.id}
                info={info}
                ></T_P_card>)
            }
        </div>
    </section>
  )
}

export default Testimonial