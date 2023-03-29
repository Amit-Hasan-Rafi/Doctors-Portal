import React from 'react'

function T_P_card({ info }) {
    const { name, img, data,email } = info
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-12">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
                <p>{data}</p>
            </div>
        </div>
    )
}

export default T_P_card