import { DayPicker } from 'react-day-picker';

function AppointmentBanner({ SelectedDate, setSelectedDate }) {

    return (
        <header className='my-6'  >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/PtPm82P/chair.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={SelectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppointmentBanner