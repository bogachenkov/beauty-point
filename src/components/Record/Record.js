import React from 'react';
import m from 'moment';

import './style.scss';

const Record = ({ onClick, starts, ends, duration, record: { clientName, date, isCanceled, isPayed, services, comment } }) => {

  const classes = ['record'];
  if (isPayed) classes.push('record-payed');
  if (m().isAfter(m(date).add(duration, 'h'))) {
    if (isCanceled) classes.push('record-canceled');
    else classes.push('record-completed');
  }
  return (
    <div className={classes.join(' ')} style={{ gridColumn: `${starts + 1} / ${ends + 1}` }} onClick={onClick}>
      <article className="record--body">
        <header className="record--header">
          <div className="record--time">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><g><g><path fill="#8d8d8d" d="M7 6.5v-3a.5.5 0 0 0-1 0V6H3.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm3.253-.419a4.3 4.3 0 1 1-8.6 0 4.3 4.3 0 0 1 8.6 0zM12 6A6 6 0 1 0 0 6a6 6 0 0 0 12 0z"/></g></g></svg>
            { date.format('HH:mm')} - {m(date).add(duration, 'h').format('HH:mm') }
            <span className="record--comment">{ comment }</span>
          </div>
          <span className="record--price">{ services.reduce((total, i) => total + i.price, 0) }$</span>
        </header>
        <p className="record--client">{ clientName }</p>
        <p className="record--service">{ services.reduce((services, i) => services.concat(i.title), []).join(', ') }</p>
      </article>
    </div>
  );
};

export default Record;