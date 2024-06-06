import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './common/header/header'; // Assuming you have a Header component


const LayoutWithHeader = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWithHeader;
