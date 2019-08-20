import React from 'react';
import m from 'moment';

import './style.scss';

const generateTimeIntervals = (from , to, step) => {
  const times = [];
  for (let hour = from; hour < to; hour++) {
    times.push(m({ hour }).format('HH:mm'));
    times.push(m({
      hour,
      minute: step
    }).format('HH:mm'));
  }
  return times;
}

const openAt = 9;
const closeAt = 18;
const times = generateTimeIntervals(openAt, closeAt, 30);

const Grid = () => {
  return (
    <div className="grid">
      <div className="grid--intervals">
        {times.map(t => {
          return t.endsWith(':00') ? <div className="grid--interval" key={t}>{t}</div> : null;
        })}
      </div>
      {times.map(t => (
        <div className="grid--col" key={t}></div>
      ))}
    </div>
  );
};

export default Grid;