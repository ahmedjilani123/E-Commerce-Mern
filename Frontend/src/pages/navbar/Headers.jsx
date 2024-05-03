import React, { useState } from 'react'
import { FaSearch, FaCartPlus } from "react-icons/fa";

import Badge from '@mui/material/Badge';
import logo from '../../images/newlogo.png';
import { Toaster, toast } from 'react-hot-toast';
import MobileNav from '../../component/mobileNav';
import MenuBtn from '../../component/menu';
import AccountMenu from '../../component/profile';
import { Link } from 'react-router-dom';
import TabsSegmentedControls from '../../component/SegmentBtn';
const Headers = () => {
  const [add, setadd] = useState(0);
  const [toggle, setToggle] = useState(false);
  const menutoggleBtn = function () {
    setToggle(!toggle);
  }
  const pressBtn = function () {
    toast('Good Job!', {
      icon: '👏',
    });
    setadd((e) => e + 1);
  }
  const border = "indigo-300";
  return (
    <div className="z-40 sticky top-0 mx-2 mt-1">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <nav className='sticky z-10 transition ease-in rounded-t-lg w-full h-12 bg-slate-100 md:min-w-[1200px] md:bg-slate-100  flex items-center justify-between px-3 md:justify-around'>
        <div className='flex items-center'>
          <MenuBtn></MenuBtn>
          <img src={logo} className='md:drop-shadow-md w-7 h-7 mr-3 hidden md:block'></img>
          <h2 className='text-black font-bold '>ZAD_Kare</h2>

        </div>

        <searchfield className=' md:drop-shadow-md border rounded-full max-w-[210px] h-8  md:flex items-center bg-white hover:border-black hover:border hidden'>
          <input type='text' placeholder='search products' className='cursor-pointer outline-none ml-1 pl-1 rounded-l-full w-[160px]'></input>
          <button onClick={pressBtn}><FaSearch className='w-10'></FaSearch></button>
        </searchfield>
        <div className='flex items-center'>
          <div className='hidden md:block md:mr-1'>
            <TabsSegmentedControls />
          </div>

          <button onClick={pressBtn} className=' drop-shadow-md flex items-center justify-center mr-1 w-7 h-7 '> <Badge badgeContent={add} color="success">
            <FaCartPlus className='h-6 w-6 hover:text-slate-500 active:text-blue-500'></FaCartPlus>
          </Badge></button>
          <AccountMenu />
        </div>
      </nav>
      <nav className='relative drop-shadow-sm flex justify-center items-center rounded-b-lg w-full h-12 bg-slate-100 md:min-w-[1200px]  md:bg-slate-100'>
        <ul className='hidden md:flex md:flex-wrap'>
          <li onClick={pressBtn} className={`border-b-${border} rounded mx-2 border-b-2 active:border-b-indigo-300 hover:border-b-indigo-500 p-1 flex items-center text-l  font-medium cursor-pointer hover:text-blue-500 `}>Home</li>
          <li onClick={pressBtn} className="rounded mx-2 hover:border-b-indigo-500 p-1 flex items-center text-l  font-medium cursor-pointer hover:text-blue-500 "><Link to="/" >Products</Link></li>
          <li onClick={pressBtn} className="rounded mx-2 hover:border-b-indigo-500 p-1 flex items-center text-l  font-medium cursor-pointer hover:text-blue-500 ">Category</li>
          <li onClick={pressBtn} className="rounded mx-2 hover:border-b-indigo-500 p-1 flex items-center text-l  font-medium cursor-pointer hover:text-blue-500 ">About</li>
          <li onClick={pressBtn} className="rounded mx-2 hover:border-b-indigo-500 p-1 flex items-center text-l  font-medium cursor-pointer hover:text-blue-500 ">Contact</li>
        </ul>
        <searchfield className='drop-shadow-md md:hidden border rounded-full max-w-[300px] h-8  flex items-center bg-white hover:border-black hover:border '>
          <input type='text' placeholder='search products' className='cursor-pointer outline-none ml-1 pl-1 rounded-l-full w-[200px]'></input>
          <button onClick={pressBtn}><FaSearch className='w-10'></FaSearch></button>
        </searchfield>
      </nav>
      <MobileNav onClose={menutoggleBtn} toggles={toggle} />
    </div>
  )
}

export default Headers
