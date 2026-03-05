import React, { useState } from 'react';
import { router } from './router';
import { useRoutes, HashRouter } from 'react-router-dom';

const Routers = () => useRoutes(router);
export default function App() {
  return (
    <>
      <HashRouter>
        <Routers />
      </HashRouter>
    </>
  );
}
