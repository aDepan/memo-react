import React, { useState } from 'react';

import './Cookies.css';
import Button from '../Button/Button';

const CookiesNotice = () => {
  const [isNoticeShown, setNoticeShown] = useState(null);

  const textNotice =
    "This website uses cookies in order to give you \n the best experience and attract \n to the dark side(it's a joke)";

  const hideNoticeHandler = () => {
    setNoticeShown(false);
    localStorage.setItem('isCookiesAllowed', 'true');
  };

  let savedCookieAllowed = localStorage.getItem('isCookiesAllowed');

  if (savedCookieAllowed === 'true' && isNoticeShown !== false) {
    setNoticeShown(false);
  } else if (isNoticeShown === null) {
    setNoticeShown(true);
    localStorage.setItem('isCookiesAllowed', 'false');
  }

  const cookiesEl = (
    <div className='cookies-notice'>
      <p>{textNotice}</p>
      <Button text='OK' clicked={hideNoticeHandler} />
    </div>
  );

  return isNoticeShown ? cookiesEl : null;
};

export default CookiesNotice;
