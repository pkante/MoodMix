import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00fd9a] font-bold'>AI Based Recommendations</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Music Right For You</h1>
            <div className='flex-justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>
                    Im Looking For:
                </p>
                <Typed
                className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 md:text-4xl sm:text-3xl text-xl font-bold pl-2' 
                strings={['playlists while I drive at night', 'a song after I got heartbroken', 'a playlist while I walk through NYC']} 
                typeSpeed={80} 
                backSpeed={70} 
                loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 py-3'>Powered by ChatGPT, Spotify, and Computer Vision. MoodMix revolutionizes how music is heard</p>
            <Link to="/chat"><button className='bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Get Started Now</button></Link>

        </div>
    </div>
  )
}

export default Hero