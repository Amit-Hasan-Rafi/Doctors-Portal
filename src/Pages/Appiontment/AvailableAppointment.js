import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import AppointmentOption from './AppointmentOption'
import BookingModal from './BookingModal'

function AvailableAppointment({ SelectedDate }) {

  const [AppointmentOptions, setAppointmentOptions] = useState([])
  const [treatment, setTreatment] = useState(null)

  useEffect(() => {
    fetch('AppointmentSlots.json')
      .then(res => res.json())
      .then(data => setAppointmentOptions(data))
  }, [])
  return (
    <section>
      <p className='font-bold text-secondary texl-lg text-center mt-10'>Available Services on {format(SelectedDate, 'PP')}</p>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14'>
        {
          AppointmentOptions.map(AO => <AppointmentOption
            key={AO.id}
            AO={AO}
            setTreatment={setTreatment}
          ></AppointmentOption>)
        }
      </div>
      { treatment &&
        <BookingModal
        treatment={treatment}
        SelectedDate={SelectedDate}
        setTreatment={setTreatment}
      ></BookingModal>
      }
    </section>
  )
}

export default AvailableAppointment