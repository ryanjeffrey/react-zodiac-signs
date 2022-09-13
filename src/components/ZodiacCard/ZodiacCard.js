import React from 'react';

export default function ZodiacCard({ name, dates, symbol }) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + `/img/${name}.png`} />
      <p>{name}</p>
      <p>{dates}</p>
      <p>{symbol}</p>
    </div>
  );
}
