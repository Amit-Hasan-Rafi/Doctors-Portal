import React, { useState } from 'react'
import AppointmentBanner from './AppointmentBanner'
import AvailableAppointment from './AvailableAppointment'

function Appiontment() {
  const [SelectedDate, setSelectedDate] = useState(new Date())
  return (
    <div style={{ 
      backgroundImage: `url("https://i.ibb.co/4MQMxC6/bg.png")` ,
      backgroundSize: 'cover'
    }}>
      <AppointmentBanner
        SelectedDate={SelectedDate}
        setSelectedDate={setSelectedDate} />
      <AvailableAppointment
        SelectedDate={SelectedDate} />
    </div >
  )
}

export default Appiontment