import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './common/header/header'; // Assuming you have a Header component
import Uploader from '../pages/uploader';

const LayoutWithHeader = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <Uploader />
      </main>
    </div>
  );
};

export default LayoutWithHeader;
