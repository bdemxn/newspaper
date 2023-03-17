import React from 'react';

const Card = ({ title, author, desc, img, url}) => {
  return (
    <div className='animate__animated animate__fadeInUp flex-col gap-4 h-auto bg-white content-center text-center p-6 rounded-xl'>
      <img src={img} alt={img} className='w-56 rounded-md mx-auto mb-4'/>
      <p className='font-bold text-xl'>{title}</p>
      <p className='font-mono font-semibold'>{author}</p>
      <p className='p-2 mb-3'>{desc}</p>
      <a href={url} className='bg-black inter-regular text-white px-4 py-2 rounded-xl drop-shadow-xl shadow-black'>Read More</a>
    </div>
  );
}

export default Card;