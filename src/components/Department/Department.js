import React from 'react';
import Timeline from '../Timeline/Timeline';

import './style.scss';

const Department = ({ data }) => {
  return (
    <section className="department">
      <h3 className="department--title">{ data.title }</h3>
      {
        data.specialists.map((spec, i) => <Timeline data={spec} key={i} />)
      }
    </section>
  );
};

export default Department;