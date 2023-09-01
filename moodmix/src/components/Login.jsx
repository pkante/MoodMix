import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 via-purple-500 to-blue-500 text-black font-times">
      <div className='auth-form-container bg-white border-black border-2 rounded-lg p-6 flex flex-col items-center'>
        <form className='login-form' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" id="email" name="email" className="border border-gray-400 px-4 py-2 rounded-md w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" className="border border-gray-400 px-4 py-2 rounded-md w-full" />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Log In</button>
        </form>

        <Link to="/register" className="mt-4">
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full'>Don't Have An Account? Register Here</button>
        </Link>
      </div>
    </div>
  )
}

export default Login;
