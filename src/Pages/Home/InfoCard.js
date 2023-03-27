import React from 'react'

function InfoCard({ card }) {
    const { id, icon, Discription, name, bgClass, text } = card
    return (
        <div className={`card card-side bg-base-100 shadow-xl ${bgClass} ${text} text-center`}>
            <img></img>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{Discription}</p>
            </div>
        </div>
    )
}

export default InfoCard