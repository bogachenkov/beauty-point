import React, { useState, useEffect } from 'react';
import m from 'moment';

import './style.scss';

const TimeElapsedLine = () => {

  const [ currentTime, setCurrentTime ] = useState(m());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(m());
    }, 1000 * 15);
    return () => clearInterval(interval);
  }, []);
  
  const calculatePercentOfElapsedTime = () => {
    const start = m().set({ hour: 9, minute: 0, second: 0 }).valueOf();
    const end = m().set({ hour: 18, minute: 0, second: 0 }).valueOf();
    const now = currentTime.valueOf();

    const totalMilliSecs = end - start;
    const elapsedMilliSecs = now - start;

    return Math.max(0, Math.min(100, 100 * (elapsedMilliSecs / totalMilliSecs)));
  }

  return (
    <div className="time-elapsed" style={{ width: `${calculatePercentOfElapsedTime()}%` }}>
      <span className="time-elapsed--point"></span>
      <span className="time-elapsed--now">{ currentTime.format('HH:mm') }</span>
    </div>
  );
};

export default TimeElapsedLine;