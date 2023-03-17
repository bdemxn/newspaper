import React, { useCallback } from 'react';
import { Card, Loading } from '../components';
import { useFetching } from '../hooks/useFetching';

function News() {

  const { isLoading, news } = useFetching('business');

  return (
    <>
      <div className='animate__animated animate__fadeIn'>
        <p className='animate__animated animate__fadeInUp font-bold text-2xl m-5'>Latest News</p>
        <br />
        <div className='m-5 grid-cols-3 grid gap-5 drop-shadow-xl shadow-black'>
          {
            (isLoading) ? <Loading /> : news.map(info => (
              <Card author={info.author} desc={info.desc} img={info.img} title={info.title} url={info.contentUrl} key={info.author} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default News;