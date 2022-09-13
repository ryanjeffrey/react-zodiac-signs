import React from 'react';
import { zodiac } from '../../data.js';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';

export default function Main() {
  return (
    <main>
      {zodiac.map((zodiac) => (
        <ZodiacCard
          key={zodiac.id}
          name={zodiac.name}
          dates={zodiac.dates}
          symbol={zodiac.symbol}
        />
      ))}
    </main>
  );
}
