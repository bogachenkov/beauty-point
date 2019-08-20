import React from 'react';
import { useSelector } from 'react-redux';
import m from 'moment';

import './style.scss';
import Button from '../Button/Button';

const InfoPanel = () => {
  const selectedDate = useSelector(state => state.selectedDate)
  return (
    <div className="info-panel">
      <h1 className="info-panel--date">{m(selectedDate).format('MMMM DD, dddd')}</h1>
      <div className="info-panel--buttons">
        <Button>Schedule</Button>
        <Button>Sell goods</Button>
      </div>
    </div>
  );
};

export default InfoPanel;