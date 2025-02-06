import Slider from '@/components/Helper/Slider'
import React from 'react'
import { BsQuote } from 'react-icons/bs'

const Review = () => {
  return (
    <div className=' pt-20 pb-16 bg-black'>
      <div className=' w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3
       items-center gap-20'>
        {/* text content */}
        <div className='xl:col-span-1 mt-6'>
            <div className=' flex items-center space-x-4'>
                 <div className='w-12 h-12 bg-rose-600 rounded-full
                     flex items-center justify-center flex-col'>
                    <BsQuote className='h-6 w-6 text-white ' />
                </div>
                <h1 className='text-xl text-white font-semibold '>
                    Student feedback</h1>
             </div>
             {/* title */}
             <h1 className='text-2xl md:text-3xl lg:text-5xl mt-8 font-bold md:leading-[3rem]
             lg:leading-[3.3rem] xl:leading-[3.6rem] text-white'>
                trusted by genius people.</h1>
                {/* description */}
                <p className=' text-base text-white opacity-50 mt-6'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Architecto facilis et non magnam delectus adipisci quam 
                    quibusdam laborum at quidem!
                </p>
                {/* info */}
                <div className='flex items-center space-x-10 mt-8 '>
                    <p className='text-white font-bold text-5xl'>99%</p>
                    <p className='text-white'>
                        Student's complete <br/> course successfully</p>   
                </div>
                
        </div>
        {/* slider */}
        <div className='xl:col-span-2 bg-white rounded-lg overflow-hidden '>
             <div className='xl:col-span-2'>
                <Slider />
            </div>
        </div>
       

      </div>
    </div>
  )
}

export default Review
