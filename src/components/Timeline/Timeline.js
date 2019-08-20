import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import m from 'moment';

import './style.scss';
import Record from '../Record/Record';
import { selectRecordsBySpecialistAndDate } from '../../store/reducers/records';
import EmptyCell from './EmptyCell/EmptyCell';
import RecordForm from '../RecordForm/RecordForm';


const Timeline = ({ data: {id, name, position, avatar} }) => {
  const [ modalOpenStatus, setModalOpenStatus ] = useState(false);
  const [ modalTime, setModalTime ] = useState(null);
  const [ selectedRecord, setSelectedRecord ] = useState(null);

  const selectedDate = useSelector(state => state.selectedDate);
  const records = useSelector(state => selectRecordsBySpecialistAndDate(state.records, selectedDate, id));

  const getTimeIntervals = (from, to, step) => {
    const times = [];
    const date = m(selectedDate).set({ hour: from, minutes: 0, seconds: 0 });
    for (let hour = from; hour < to + to / 2 + 1; hour++, date.add(step, 'minutes')) {
      times.push(m(date));
    }
    return times;
  }

  const recordClickHandler = record => {
    setSelectedRecord(record);
    setModalOpenStatus(!modalOpenStatus);
  }

  const cellClickHandler = time => {
    setModalTime(time);
    setModalOpenStatus(!modalOpenStatus);
  }

  const getNextRecordDate = () => {
    const nextRecord = records.find(rec => selectedRecord ? rec.date.isAfter(selectedRecord.date, 'minute') : rec.date.isAfter(modalTime, 'minute'));
    return nextRecord ? nextRecord.date : null;
  }

  const closeModalHandler = () => {
    setSelectedRecord(null);
    setModalTime(null);
    setModalOpenStatus(false);
  }

  const times = getTimeIntervals(9, 18, 30);
  const timeline = [...times];

  return (
    <div className="timeline">
      <article className="timeline--spec">
        <img className="timeline--spec-avatar" src={avatar} alt="User"/>
        <div>
          <p className="timeline--spec-name">{ name }</p>
          <span className="timeline--spec-position">{position}</span>
        </div>
      </article>
      {
        records.map((record) => {
          const duration = record.services.reduce((total, i) => total + i.durationInHours, 0);

          const from = timeline.findIndex(time => time && time.isSame(record.date, 'minute'));
          const sliceLength = duration / .5;

          const gridFrom = times.findIndex(time => time.isSame(record.date, 'minute'));
          const gridTo = times.findIndex(time => time.isSame(m(record.date).add(duration, 'h'), 'minute'));

          const replacers = new Array(sliceLength).fill(null);

          timeline.splice(from, sliceLength, ...replacers);
          return (
            <Record key={record.id}
                    onClick={() => recordClickHandler(record)}
                    starts={gridFrom + 1}
                    ends={gridTo + 1}
                    duration={duration}
                    record={record} />
          )
        })
      }
      {
        timeline.map((time, i, arr) => {
          if (time) {
            const previousCell = (i - 1 >= 0) ? arr[i - 1] : null;
            const nextCell = (i + 2 < arr.length) ? arr[i + 1] : null;
            return (
              <EmptyCell
                onClick={cellClickHandler}
                previousCell={previousCell}
                nextCell={nextCell}
                time={time}
                key={time.valueOf()} />
            )
          }
          return null; 
        })
      }
      { modalOpenStatus && 
        <RecordForm specialistId={id}
                    date={modalTime}
                    record={selectedRecord}
                    nextRecordDate={getNextRecordDate()}
                    closeModal={closeModalHandler} />
      }
    </div>
  );
};

export default Timeline;