import React from 'react'
import ServicesCard from './ServicesCard'

function Services() {
    const serviceInfo = [
        {
            id: 1,
            pic: 'https://i.ibb.co/z6dtNSC/fluoride.png',
            title: 'Fluoride Treatment',
            discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 2,
            pic: 'https://i.ibb.co/z55mWn1/cavity.png',
            title: 'Cavity Filling',
            discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 3,
            pic: 'https://i.ibb.co/gVsQJdg/whitening.png',
            title: 'Teeth Whitening',
            discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
    ]
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className='uppercase font-bold text-secondary'>Our Services</h1>
                <p className='uppercase text-2xl'>Services We Provide</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-6'>
                {
                    serviceInfo.map(info => <ServicesCard
                        key={info.id}
                        info={info}
                    ></ServicesCard>)
                }
            </div>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/4ms5YR5/treatment.png" className="w-fit m-0 lg:mr-20 lg:w-4/12 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-black justify-end">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services