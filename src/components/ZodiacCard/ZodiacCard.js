import React from 'react';

export default function ZodiacCard(props) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + `/img/${props.name}.png`} />
      <p>{props.name}</p>
      <p>{props.dates}</p>
      <p>{props.symbol}</p>
    </div>
  );
}
