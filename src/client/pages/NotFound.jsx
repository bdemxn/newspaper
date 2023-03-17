import React from 'react';

function NotFound() {
  return (
    <div className='text-center flex-row mt-52 animate__animated animate__fadeIn'>
      <p className='text-5xl font-bold mt-2'>{'404 Not Found :('}</p>
      <p className='text-gray-400 font-bold'>{'You’ve tried to do something wrong, Try to go back home :)'}</p>
    </div>
  );
}

export default NotFound;