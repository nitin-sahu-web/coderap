import React, { useState } from 'react'
import ImgData from '../api/companyImg'
import amazonimg from '../assets/Amazon-img.png'
import accentureimg from '../assets/Accenture-img.png'
import cognizantimg from '../assets/Cognizant-img.png'
import googleimg from '../assets/Google-img.png'
import infosysimg from '../assets/Infosys-img.png'
import metaimg from '../assets/Meta-img.png'
import microsoftimg from '../assets/Microsoft-img.png'
import zomatoimg from '../assets/Zomato-img.png'

const PageTwo = () => {
    const [companys, setCompanys] = useState([amazonimg, accentureimg, cognizantimg, googleimg, infosysimg, metaimg, microsoftimg, zomatoimg])
    return (
        <>
            <div className=" w-[100%] h-[80vh] flex flex-col justify-center items-center px-[200px]">
                <h1 className='text-3xl font-extrabold text-white mb-20'>Practice the asked Question of your Dream Company</h1>
                <div className='grid grid-cols-4 items-center gap-x-20'>
                    {/* <img src={amazonimg} alt="" />
                    {
                        companys.map((company, key) => {
                            return <img src={company} alt="" className={` ${key === 0 ? 'h-[100px]' : 'h-[50px]'} mx-[20px]`} />
                        })
                    } */}
                    <img src={amazonimg} alt="" className='mx-[30px] bg-white/30 w-[300px] p-20 rounded-2xl' />
                    <img src={googleimg} alt="" className='mx-[30px] bg-white/30 w-[300px] p-20 rounded-2xl' />
                    <img src={microsoftimg} alt="" className='mx-[30px]  bg-white/30 w-[300px] p-20 rounded-2xl' />
                    <img src={infosysimg} alt="" className='mx-[30px] bg-white/30 w-[300px] p-20 rounded-2xl' />
                    <img src={cognizantimg} alt="" className='mx-[30px] bg-white/30 w-[300px] p-20 rounded-2xl' />
                    <img src={zomatoimg} alt="" className='mx-[30px] bg-white/30 w-[300px]  p-20 rounded-2xl' />
                    <img src={accentureimg} alt="" className='mx-[30px] bg-white/30 w-[300px] p-20 rounded-2xl' />
                    <img src={metaimg} alt="" className='mx-[30px] bg-white/30 w-[300px] p-20 rounded-2xl' />
                </div>
            </div>
        </>
    )
}

export default PageTwo