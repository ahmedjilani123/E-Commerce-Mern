import React from 'react'
import { FaSearch ,FaCartPlus} from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import logo from '../../images/newlogo.png';
import {Toaster,toast} from 'react-hot-toast';
const Nav = () => {
  const pressBtn =function(){
    toast('Good Job!', {
      icon: '👏',
    });
  }
  return (
    <div className="mx-2">
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <nav className=' rounded-t-lg w-full h-12 bg-slate-100 md:min-w-[1200px] md:bg-slate-100  flex items-center justify-around'>
<div className='flex items-center'>
    <img src={logo} className='w-7 h-7 mr-3 '></img>
    <h2 className='text-black font-bold font-serif '>ZAD_Kare</h2>
</div>
<searchfield className='border rounded-full max-w-[210px] h-8  flex items-center bg-white hover:border-black hover:border'>
    <input type='text'placeholder='search products' className='cursor-pointer outline-none ml-1 pl-1 rounded-l-full w-[160px]'></input>
    <button onClick={pressBtn}><FaSearch className='w-10'></FaSearch></button>
</searchfield>
<div className='flex items-center'>
    <button onClick={pressBtn} className=' flex items-center justify-center mr-1 w-7 h-7 '><FaCartPlus className='text-xl'/></button>
<button onClick={pressBtn} className=' flex items-center justify-center ml-1 w-7 h-7'><RiAccountCircleFill className='text-2xl'/></button>

</div>
      </nav>
      <nav className='flex justify-center items-center rounded-b-lg w-full h-12 bg-slate-100 md:min-w-[1200px]  md:bg-slate-100'>
<ul className='flex flex-wrap'>
  <li onClick={pressBtn} className="rounded mx-1 p-1 flex items-center text-l font-sans font-medium cursor-pointer border hover:border-black">Home</li>
  <li onClick={pressBtn} className="rounded mx-1 p-1 flex items-center text-l font-sans font-medium cursor-pointer border hover:border-black">Products</li>
  <li onClick={pressBtn} className="rounded mx-1 p-1 flex items-center text-l font-sans font-medium cursor-pointer border hover:border-black">Category</li>
  <li onClick={pressBtn} className="rounded mx-1 p-1 flex items-center text-l font-sans font-medium cursor-pointer border hover:border-black">About</li>
  <li onClick={pressBtn} className="rounded mx-1 p-1 flex items-center text-l font-sans font-medium cursor-pointer border hover:border-black">Contact</li>
</ul>
      </nav>
    </div>
  )
}

export default Nav
