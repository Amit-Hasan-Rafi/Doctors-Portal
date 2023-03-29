import React from 'react'

function HomeBanner() {
    return (
        <div className="hero lg:min-h-screen text-center lg:text-left " style={{ backgroundImage: `url("https://i.ibb.co/4MQMxC6/bg.png")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/PtPm82P/chair.png" className="w-fit lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className=" text-4xl md:text-4xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-black">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner