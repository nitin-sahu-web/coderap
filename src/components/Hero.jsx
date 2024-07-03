import React from 'react'

const Hero = () => {
    return (
        <div className='text-white w-full h-screen flex items-center flex-col pt-[150px] select-none'>
            <h1 className='font-bold text-6xl mb-[100px] py-[10px]
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text'>Compete and Code Together</h1>
            <div className="room-section flex">
                <div className="join-room w-[500px] bg-gray-700/25 rounded-2xl p-10 mx-11 transition duration-500 ease-in-out hover:scale-110 cursor-pointer">
                    <h1 className='text-4xl font-bold py-[10px] text-purple-400'>Join a room</h1>
                    <p>Join or create a room, invite your friends, and get ready to solve problems together.</p>
                </div>
                <div className="create-room w-[500px] bg-gray-700/25 rounded-2xl p-10 mx-11 transition duration-500 ease-in-out hover:scale-110 cursor-pointer">
                    <h1 className='text-4xl font-bold py-[10px] text-purple-400'>Create a room</h1>
                    <p>You'll all get the same coding question to solve. Only you can see your editor.</p>
                </div>
            </div>
            <form className='mt-[50px]'>
                <input type="email" name='email' id='email' placeholder='Enter Your Email' className='bg-gray-700/25 w-[920px] px-5 py-3 rounded-xl mr-3' />
                <button className='bg-purple-500 w-40 py-3 rounded-xl'>Get started</button>
            </form>
            <p className='underline text-xl mt-[50px] transition duration-200 ease-in-out hover:scale-105 cursor-pointer hover:text-purple-400'>Start Your Journey to Code. Wrap your Code together.</p>
        </div>
    )
}

export default Hero