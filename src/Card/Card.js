import React from 'react';

import './Card.css';

const Card = ({ isOpened, isConfirmed, color, onClick }) => {
  const cardClr = isOpened ? `card ${color}-card` : 'card backside';

  return <div className={cardClr} onClick={onClick}></div>;
};

export default React.memo(Card);
