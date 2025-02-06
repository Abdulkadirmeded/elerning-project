
'use client'

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTOP = () => {
    const [isvisible, setIsvisible] = useState(false);

    useEffect(()=> {
        const toggleVisiblity = () =>{
            if(window.scrollY > 300){
                setIsvisible(true);
            } else{
                setIsvisible(false);
            }
        };
        
        return () => {
            window.removeEventListener("scroll", toggleVisiblity)
        }
    } ,[]);

    const ScrollToTOP = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {isvisible && <button onClick={ScrollToTOP}>
            <FaArrowUp className=' bg-orange-600 text-white 
            rounded-full w-12 h-12 flex items-center justify-center focus:outline-none' />
            </button>
      }
    </div>
  )
}

export default ScrollToTOP
