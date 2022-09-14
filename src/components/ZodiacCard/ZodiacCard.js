import React from 'react';
import './ZodiacCard.css';

export default function ZodiacCard({ name, dates, symbol }) {
  return (
    <div className='card'>
      <img src={process.env.PUBLIC_URL + `/img/${name}.png`} />
      <p className='name'>{name}</p>
      <p>{dates}</p>
      <p>{symbol}</p>
    </div>
  );
}
