import React from 'react';

import './Footer.css';
import CookiesNotice from '../Cookies/Cookies.js';

const footer = () => {
  return (
    <footer className='footer'>
      <CookiesNotice />
      <p> Copyright @ 2020 aDepan</p>
    </footer>
  );
};

export default footer;
