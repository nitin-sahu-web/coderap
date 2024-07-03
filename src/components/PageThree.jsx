import React from 'react'
import python from '../assets/python.png'
import cpp from '../assets/c++.png'
import java from '../assets/Java.png'

const PageThree = () => {
    return (
        <div className='text-white h-[80vh] w-full flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-extrabold'>3 Most Widely Used Language are supported</h1>
            <div className="flex gap-[200px] mt-[50px]">
                <div>
                    <img src={python} alt="" className='w-[150px]' />
                    <h3 className='text-center mt-10 text-2xl font-bold'>Python</h3>
                </div>
                <div>
                    <img src={cpp} alt="" className='w-[150px]' />
                    <h3 className='text-center mt-4 text-2xl font-bold'>C++</h3>
                </div>
                <div>
                    <img src={java} alt="" className='w-[150px]' />
                    <h3 className='text-center  mt-10 text-2xl font-bold'>Java</h3>
                </div>
            </div>
        </div>
    )
}

export default PageThree
