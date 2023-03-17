import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Main, News, NotFound, Search } from '../pages';
import Navbar from '../components/Navbar';

function ClientRouter() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/news'} element={<News />} />
        <Route path={'/search'} element={<Search />} />
        <Route path={'/*'} element={<NotFound />} />
      </Routes>

    </>

  );
}

export default ClientRouter;