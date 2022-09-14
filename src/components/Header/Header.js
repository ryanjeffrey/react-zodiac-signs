import React from 'react';
import background from '../../stars.png';
import './Header.css';

export default function Header() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <h1>Zodiac Signs</h1>
    </div>
  );
}
