import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-500 to-white text-black font-times">
      <div className='auth-form-container bg-white border-black border-2 rounded-lg p-6'>
        <form className='register-form' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" className="border border-gray-400 px-4 py-2 rounded-md w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" id="email" name="email" className="border border-gray-400 px-4 py-2 rounded-md w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" className="border border-gray-400 px-4 py-2 rounded-md w-full" />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Register</button>
        </form>

        <Link to="/login">
          <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full'>Already Have An Account? Login Here</button>
        </Link>
      </div>
    </div>
  )
}

export default Register;
