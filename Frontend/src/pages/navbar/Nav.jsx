import React from 'react'
import { FaSearch ,FaCartPlus} from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import logo from '../../images/newlogo.png';
const Nav = () => {
  return (
    <>
      <nav className=' rounded-t-lg w-full h-12 bg-red-600 md:max-w-[1200px] md:bg-slate-100 md:mx-12 flex items-center justify-around'>
<div className='flex items-center'>
    <img src={logo} className='w-7 h-7 mr-3 '></img>
    <h2 className='text-black font-bold font-serif '>ZAD_Kare</h2>
</div>
<searchfield className='border rounded-full max-w-[210px] h-8  flex items-center bg-white hover:border-black hover:border'>
    <input type='text'placeholder='search products' className='cursor-pointer outline-none ml-1 pl-1 rounded-l-full w-[160px]'></input>
    <button><FaSearch className='w-10'></FaSearch></button>
</searchfield>
<div className='flex items-center'>
    <button className=' flex items-center justify-center mr-1 w-7 h-7 '><FaCartPlus className='text-xl'/></button>
<button className=' flex items-center justify-center ml-1 w-7 h-7'><RiAccountCircleFill className='text-2xl'/></button>

</div>
      </nav>
      <nav className='rounded-b-lg w-full h-12 bg-red-600 md:max-w-[1200px] md:bg-slate-100 md:mx-12'>
<h2>subnav</h2>
      </nav>
    </>
  )
}

export default Nav
