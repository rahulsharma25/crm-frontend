import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from './partials/footer';
import { Header } from './partials/header';

export const DefaultLayout = (props) => {
  return (
    <div className='default-layout'>
      <header className='header mb-3'>
        <Header />
      </header>

      <main className='main'>
        {props.children}
      </main>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired
};