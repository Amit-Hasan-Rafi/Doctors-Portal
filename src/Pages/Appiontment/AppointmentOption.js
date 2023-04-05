import React from 'react'

function AppointmentOption({ AO, setTreatment }) {
    const { name, slots } = AO
    return (
        <div className="card bg-base-100 shadow-xl text-center">
            <div className="card-body">
                <h2 className="font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length ==  0 }
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                        onClick={() => setTreatment(AO)}
                    >Book Appiontment</label>
                </div>
            </div>
        </div>
    )
}

export default AppointmentOption