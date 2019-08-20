import React, { useEffect, useState } from 'react';
import m from 'moment';

const EmptyCell = ({ time, previousCell, nextCell, onClick }) => {
  const [ currentTime, setCurrentTime ] = useState(m());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(m());
    }, 1000 * 15);
    return () => clearInterval(interval);
  }, []);

  const hasPrevious = previousCell !== null && !currentTime.isAfter(previousCell, 'second');
  const hasNext = nextCell !== null;
  const disabled = currentTime.isAfter(time, 'second') || (!hasPrevious && !hasNext);

  const mouseEnterCellsHandler = (e) => {
    const el = e.target;
    if (hasNext) {
      el.classList.add('with-next-cell');
      return;
    } else if (hasPrevious) {
      el.classList.add('with-prev-cell');
    };
    return false;
  };

  const mouseLeaveCellHandler = e => {
    e.target.classList.remove('with-prev-cell', 'with-next-cell')
  }

  const clickCellHandler = e => {
    let selectedTime;
    if (hasNext) selectedTime = time;
    else if (hasPrevious) selectedTime = previousCell;
    onClick(selectedTime);
  }

  return (
    <div onMouseEnter={disabled ? null : mouseEnterCellsHandler} 
        onMouseLeave={disabled ? null : mouseLeaveCellHandler}
        onClick={disabled ? null : clickCellHandler}
        className={`timeline--cell ${disabled ? 'timeline--cell-disabled' : ''}`}>
    </div>
  );
};

export default EmptyCell;