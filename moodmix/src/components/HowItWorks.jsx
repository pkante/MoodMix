import React from 'react'
import Headphones from '../assets/headphones.jpeg'

const HowItWorks = () => {
  return (
    <div className='w-full bg-[#c32aff] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 ' src={Headphones} alt="/"/>
            <div classsName='flex flex-col justify-center'>
                <p className='text-[#00fd9a] font-bold '>HOW MOODMIX WORKS</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Emotion based AI Recommendations</h1>
                <p>
                LeBron Raymone James Sr. (/ləˈbrɒn/ lə-BRON; born December 30, 1984), 
                also known as LBJ, is an American professional basketball player for the Los Angeles Lakers 
                of the National Basketball Association (NBA). Nicknamed "King James", he is widely regarded as one of the greatest 
                players in the history of the sport and is often compared to Michael Jordan in debates 
                over the greatest basketball player of all time.
                </p>
                <button className='bg-black text-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3'>Get Started</button>
            </div>

        </div>

    </div>
  )
}

export default HowItWorks