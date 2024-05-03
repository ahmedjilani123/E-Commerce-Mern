import React from 'react'
import logo from '../images/product1.jpg';
import { FaStar } from "react-icons/fa";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaIndianRupeeSign } from "react-icons/fa6";
const Product = () => {
    const arr=[
        {
            key:1
        },
        {
            key:2
        },
        {
            key:3
        },
        {
            key:4
        },
        {
            key:5
        },
        {
            key:6
        }
    ]
    return (
        <div className="p-2 grid md:gap-3 mx-2 rounded md:px-[9rem] bg-slate-200 grid-cols-1 md:grid-cols-4">
           
           {
            arr.map((item)=>{
              return  <div key={item.key} className='bg-white rounded-lg shadow-md'>
                <div className='h-[180px] cursor-pointer'>
                    <img className='h-full rounded-t-md bg-blue-300 w-[100%]' src={logo}></img>
                </div>

                <div className='p-3'>
                    <h1 className=' font-bold text-xl'>Matcha & Co</h1>
                    <p className='text-left text-md font-medium whitespace-wrap'>Discover the best Matcha & Co test and dietary supplements th improve your health from within.</p>
                </div>
                <div className='px-3 flex justify-between'>
                    <div>
                        <h2 className='flex text-lg font-bold '><FaIndianRupeeSign className='h-3 mt-2 text-md font-bold' />400</h2>
                        <p className='text-slate-400 text-sm pl-1'>Prices</p>

                    </div>
                    <div className='pt-1'>
                        <span className='flex mr-9'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                        <p className='text-slate-400 text-sm mt-2'>Rating</p>
                    </div>

                </div>
                <div className='px-3 pb-3 mt-3'>
                    <Stack spacing={1} direction="row">

                        <Button variant="contained" color='success'>Add to cart</Button>
                        <Button variant="contained">Buy now</Button>
                    </Stack>
                </div>
            </div>
            })
           } <div className='bg-white rounded-lg shadow-md'>
                <div className='h-[180px] cursor-pointer'>
                    <img className='h-full rounded-t-md bg-blue-300 w-[100%]' src={logo}></img>
                </div>

                <div className='p-3'>
                    <h1 className=' font-bold text-xl'>Matcha & Co</h1>
                    <p className='text-left text-md font-medium whitespace-wrap'>Discover the best Matcha & Co test and dietary supplements th improve your health from within.</p>
                </div>
                <div className='px-3 flex justify-between'>
                    <div>
                        <h2 className='flex text-lg font-bold '><FaIndianRupeeSign className='h-3 mt-2 text-md font-bold' />400</h2>
                        <p className='text-slate-400 text-sm pl-1'>Prices</p>

                    </div>
                    <div className='pt-1'>
                        <span className='flex mr-9'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                        <p className='text-slate-400 text-sm mt-2'>Rating</p>
                    </div>

                </div>
                <div className='px-3 pb-3 mt-3'>
                    <Stack spacing={1} direction="row">

                        <Button variant="contained" color='success'>Add to cart</Button>
                        <Button variant="contained">Buy now</Button>
                    </Stack>
                </div>
            </div>
        
          
        </div>
    )
}

export default Product
