import React from 'react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Footer } from './partials/footer';
import { Header } from './partials/header';

export const DefaultLayout = () => {
  return (
    <div className='default-layout'>
      <header className='header mb-3'>
        <Header />
      </header>

      <main className='main'>
        <Outlet />
        {/* {props.children} */}
      </main>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
};

// DefaultLayout.propTypes = {
//   children: PropTypes.object.isRequired
// };