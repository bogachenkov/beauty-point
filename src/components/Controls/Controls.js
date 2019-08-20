import React from 'react';
import Address from '../Address/Address';
import DatePanel from '../DatePanel/DatePanel';

const Unnamed = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Address />
      <DatePanel />
    </div>
  );
};

export default Unnamed;