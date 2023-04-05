import { format } from 'date-fns'
import React from 'react'

function BookingModal({ treatment, setTreatment, SelectedDate }) {
    const { name, slots } = treatment
    const date = format(SelectedDate, 'PP')

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target
        const slots = form.slots.value
        const P_name = form.P_name.value
        const email = form.email.value
        const phone = form.phone.value


        const bookings={
            BookingDate : date,
            treatment : name,
            Patient :P_name,
            slots,
            email,
            phone
        }

        setTreatment(null)
        console.log(bookings)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-3'>
                        <input  type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slots' className="select select-bordered w-full ">
                            {slots.map((slot,i)=><option value={slot} key={i}>{slot}</option>)}
                        </select>
                        <input name='P_name' type="text" placeholder="Name" className="input input-bordered w-full" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input type='submit' value='Submit' className=' btn btn-accent w-full text-white' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookingModal