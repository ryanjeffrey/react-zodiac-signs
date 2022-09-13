import React from 'react';
import { zodiac } from '../../data.js';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';

export default function Main() {
  return (
    <main>
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
