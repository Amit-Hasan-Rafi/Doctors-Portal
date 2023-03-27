import React from 'react'

function ServicesCard({ info }) {
    const { pic, title, discription } = info
    return (
        <div className="card  bg-base-100 shadow-xl mt-12">
            <figure><img src={pic} alt="Movie" /></figure>
            <div className="card-body text-center">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className='text-sm'>{discription}</p>
            </div>
        </div>
    )
}

export default ServicesCard