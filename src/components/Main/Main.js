import React from 'react';
import { zodiac } from '../../data.js';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import background from '../../stars.png';
import './Main.css';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map(({ id, name, dates, symbol }) => (
        <ZodiacCard
          key={id}
          name={name}
          dates={dates}
          symbol={symbol}
        />
      ))}
    </main>
  );
}
