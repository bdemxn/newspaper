import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500'>
      <div className='flex p-4 justify-around gap-6 items-center'>
        <div className='flex items-center gap-3'>
          <h3 className='text-xl inter-bold hover:cursor-default'>Newspaper</h3>
          <div className='flex gap-2 mx-10'>
            <Link to={'/error'}
              className='inter-semibold text-sm hover:text-black transition-colors text-gray-400'
            >
              Sports
            </Link>
            <Link to={'/error'}
              className='inter-semibold text-sm hover:text-black transition-colors text-gray-400'
            >
              Business
            </Link>
            <Link to={'/search'}
              className='inter-semibold text-sm hover:text-black transition-colors text-gray-400'
            >
              Search
            </Link>
          </div>
        </div>
        <div className='flex gap-3'>
          <Link to={'/'}
            className='bg-black text-white inter-semibold px-5 py-2 rounded-xl shadow-black drop-shadow-lg hover:bg-white hover:text-black duration-300 ease-in'
          >
            Home
          </Link>
          <Link to={'/about'}
            className='bg-white inter-semibold px-5 py-2 rounded-xl shadow-black drop-shadow-lg hover:bg-indigo-700 hover:text-white duration-300 ease-in'
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;