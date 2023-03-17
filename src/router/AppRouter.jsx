import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClientRouter } from '../client/routes';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path={'/*'} element={<ClientRouter />} />

      </Routes>
    </>
  );
}

export default AppRouter;