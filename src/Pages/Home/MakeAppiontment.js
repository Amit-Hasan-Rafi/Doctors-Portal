import React from 'react'

function MakeAppiontment() {
    return (
        <section className="hero mt-8 lg:mt-32 rounded-2xl text-center lg:text-left" style={{ backgroundImage: `url("https://i.ibb.co/3WCWyNp/appointment.png")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/rGJ6mYq/doctor.png" className=" hidden lg:block -mt-64 -mb-4 lg:w-1/2 rounded-lg " />
                <div className='p-2 mt-3 text-white'>
                    <h1 className="text-lg font-bold text-secondary">Appointment</h1>
                    <h1 className="text-4xl font-bold">Make an appointment Today!</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary">Get Appointment</button>
                </div>
            </div>
        </section>
    )
}

export default MakeAppiontment