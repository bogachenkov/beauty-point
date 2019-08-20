import React from 'react';
import m from 'moment';
import { useSelector } from 'react-redux';

import './style.scss';
import Grid from '../Grid/Grid';
import Department from '../Department/Department';
import TimeElapsedLine from '../TimeElapsedLine/TimeElapsedLine';

const Dashboard = () => {
  const departments = useSelector(state => state.departments);
  const selectedDate = useSelector(state => state.selectedDate);

  const startOfWorkDay = m(selectedDate).set({ 'hour': 9, 'minute': 0, 'second': 0 });
  const endOfWorkDay = m(selectedDate).set({ 'hour': 18, 'minute': 0, 'second': 0 });
  
  return (
    <div className="dashboard">
      <div className="dashboard--content">
        <div className="dashboard--grid">
          <Grid />
          { m().isBetween(startOfWorkDay, endOfWorkDay, 'minute')  && <TimeElapsedLine />} 
        </div>
        {
          departments && departments.map(department => <Department data={department} key={department.title} />)
        }
      </div>
    </div>
  );
};

export default Dashboard;