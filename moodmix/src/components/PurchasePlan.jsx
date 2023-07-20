import React from 'react'
import Single from '../assets/dollar-bill.png'
import Double from '../assets/banknote.png'
import Triple from '../assets/two-dollar-bill.png'

const Cards = () => {
    return (
      <div className='w-full py-[8rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Standard Access</h2>
                <p className='text-center text-4xl font-bold'>$0/month</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Up to 50 songs per playlist</p>
                    <p className='py-2 border-b mx-8'>10 uses per day</p>
                    {/* <p className='py-2 border-b mx-8'>Send up to 2 GB</p> */}
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Premium Access</h2>
                <p className='text-center text-4xl font-bold'>$7/month</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Up to 100 songs per playlist</p>
                    <p className='py-2 border-b mx-8'>Unlimited Uses</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Diamond Access</h2>
                <p className='text-center text-4xl font-bold'>$10/month</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Up to 500 songs per playlist</p>
                    <p className='py-2 border-b mx-8'>Unlimited Uses</p>
                    <p className='py-2 border-b mx-8'>Access to new features early</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
        </div>
      </div>
    );
  };

export default Cards;