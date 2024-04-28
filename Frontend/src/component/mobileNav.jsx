import React from 'react'
import { IoClose } from "react-icons/io5";
const MobileNav = ({onClose,toggles}) => {
    const hidden = toggles ? 'block':'hidden';

  return (
    <div className={`rounded drop-shadow-md md:hidden z-10 w-[150px] h-[215px] mb-1 ${hidden}  flex  flex-col float-left bg-slate-100`}>
        <button onClick={onClose} className='flex justify-end m-1 mr-1 '><IoClose className='hover:bg-slate-200 rounded-sm text-lg '></IoClose></button>
      <ul className=' md:hidden flex  flex-col gap-1'>
  <li className="rounded mx-1 p-1 flex items-center justify-center text-l font-sans font-medium cursor-pointer border hover:border-black">Home</li>
  <li className="rounded mx-1 p-1 flex items-center justify-center text-l font-sans font-medium cursor-pointer border hover:border-black">Products</li>
  <li className="rounded mx-1 p-1 flex items-center justify-center text-l font-sans font-medium cursor-pointer border hover:border-black">Category</li>
  <li className="rounded mx-1 p-1 flex items-center justify-center text-l font-sans font-medium cursor-pointer border hover:border-black">About</li>
  <li className="rounded mx-1 p-1 flex items-center justify-center text-l font-sans font-medium cursor-pointer border hover:border-black">Contact</li>
</ul>
    </div>
  )
}

export default MobileNav
