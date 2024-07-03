import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <>
            <div className="w-full h-[20vh] bg-purple-800 text-black flex items-center justify-around mb-10">

                <img src={logo} alt="" />
                <div>
                    <h3 className='font-semibold'>Privacy Policy</h3>
                    <h2 className='font-bold'>Copyright © Coderap Pvt. Ltd.</h2>
                </div>

            </div>
        </>
    )
}

export default Footer