import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <>
      <div className='flex flex-col justify-center mt-32'>
        <p className='px-80 text-center text-6xl font-extrabold animate__animated animate__fadeInUp'>The new way for viewing news.</p>
        <p className='text-gray-400 font-bold px-96 mt-6 text-center animate__animated animate__fadeInUp'>
          A new incredible way for viewing news and follow the world at your home
          thanks by our new latest technology such as our real-time news for you.
        </p>
        <Link to={'news'} 
          className='bg-black inter-semibold py-2 m-auto px-6 rounded-xl mt-6  text-white text-center shadow-black drop-shadow-lg hover:bg-white hover:text-black duration-300 ease-in animate__animated animate__fadeInUp'>
            Start for reading
        </Link>
      </div>
    </>
  );
}

export default MainPage;