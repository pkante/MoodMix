import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00fd9a] font-bold p-2'>AI Based Recommendations</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Find Music Right For You</h1>
            <div className='flex-justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                    Im Looking For
                </p>
                <Typed
                className=' text-pink-300 md:text-5xl sm:text-4xl text-xl font-bold pl-2' 
                strings={['A playlist while I drive at night', 'A song after I got heartbroken', 'Rage Music']} 
                typeSpeed={80} 
                backSpeed={70} 
                loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Powered by ChatGPT, Spotify, and Computer Vision. MoodMix revolutionizes how music is heard</p>
            <Link to="/chat"><button className='bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Get Started Now</button></Link>

        </div>
    </div>
  )
}

export default Hero