import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { AiFillCodeSandboxCircle, AiFillCrown, AiFillGold } from 'react-icons/ai'
import { MdRoom } from 'react-icons/md'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-auto w-[1400px] flex justify-between items-center select-none">
                <div className="container-fluid p-5 flex">
                    <Link to='/'>
                        <img src={logo} alt="logo" className='text-white w-[200px]' />
                    </Link>
                    <ul className='flex my-auto font-bold text-white items-center'>
                        <li className='px-5 flex items-center uppercase'><Link to='/problems'><AiFillCodeSandboxCircle className='mr-2 text-2xl' /> Problems</Link></li>
                        {/* <li className='px-5 flex items-center uppercase'><Link to='/contests'><AiFillCrown className='mr-2 text-2xl' /> Contests</Link></li> */}
                        <li className='px-5 flex items-center uppercase'><Link to='algorithms'><AiFillGold className='mr-2 text-2xl' /> Algorithms</Link></li>
                        <li className='pl-5 flex items-center uppercase'><Link to='/Editor'><MdRoom className='mr-2 text-2xl' /> Editor</Link></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <button className='px-5 h-10 uppercase rounded-sm bg-gray-800 text-white hover:bg-gray-900 '>Log in</button>
                    <form action="" className='ml-[20px]'>
                        <input type="text" name='search' id='search' className='h-10 w-[300px] pl-4 outline-none rounded-l-md bg-gray-800 caret-white text-white' />
                        <input type="submit" name='submit' id='submit' value="search" className='h-10 px-5 uppercase rounded-r-md bg-purple-700 hover:bg-purple-600 text-white' />
                    </form>
                </div>
            </nav >
        </>
    )
}

export default Navbar