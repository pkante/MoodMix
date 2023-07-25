import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

const ChatPage = () => {
  const [text, setText] = useState('');
  const [albums, setAlbums] = useState([]);

  const sendText = async () => {
    const res = await fetch('https://kq277rymf3.execute-api.us-east-1.amazonaws.com/prod/', {
      method: 'POST',
      body: JSON.stringify({ body: text }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    setAlbums(data.albums);
  }

  return (
    <div>
      <h1 className='px-5 py-5 w-full text-3xl text-left font-bold text-[#00fd9a]'>MOODMIX.</h1>
      <div className="bg-gradient-custom grid place-items-center h-screen">
        <div className='text-center w-full'>
          <div className='w-full text-2xl font-bold mb-6'></div>
          <div className='relative w-1/2 mx-auto mb-6'>
            <TextareaAutosize
              className='w-full px-3 py-2 rounded-md pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out'
              minRows={1}
              placeholder='Whatchu feelin?'
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button onClick={sendText} className='absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none transition-colors duration-200'>
              <svg className={`h-6 w-6 ${text ? 'text-green-500' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12l-18 9V3l18 9z"></path>
              </svg>
            </button>
          </div>
          <div className='relative w-1/2 mx-auto mb-6'>
            <TextareaAutosize
              className='w-full px-3 py-2 rounded-md pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out'
              minRows={1}
              placeholder='Response'
              value={albums.join(", ")}
              disabled
            />
          </div>
          <Link to="/">
            <button className='bg-[#00fd9a] w-[200px] rounded-md font-medium px-6 py-3 text-white'>Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ChatPage;
