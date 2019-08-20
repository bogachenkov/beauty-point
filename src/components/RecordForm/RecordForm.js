import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

import m from 'moment';

import ClientForm from '../ClientForm/ClientForm';
import ServicesForm from '../ServicesForm/ServicesForm';
import Button from '../Button/Button';

import { addRecord, updateRecord } from '../../store/actions';

import './style.scss';

const RecordForm = ({ date, record, closeModal, specialistId, nextRecordDate }) => {
  const modalWrapperElement = useRef(null)

  // States
  const [ services, setServices ] = useState(record ? record.services : []);
  const [ clientName, setClientName ] = useState(record ? record.clientName : '');
  const [ clientPhone, setClientPhone ] = useState(record ? record.clientPhone : '');
  const [ comment, setComment ] = useState(record ? record.comment : '');

  // Dispatch
  const dispatch = useDispatch();

  // Handlers
  const handleWrapperClick = e => {
    if (e.target === modalWrapperElement.current) closeModal();
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!formCanBeSubmitted()) return;
    const recordData = {
      id: record ? record.id : uuid(),
      date: record ? record.date : date,
      specialist: record ? record.specialist : specialistId,
      clientName,
      clientPhone,
      comment,
      isCanceled: record ? record.isCanceled : false,
      isPayed: record ? record.isPayed : false,
      services
    }
    record ? dispatch(updateRecord(record.id, recordData)) : dispatch(addRecord(recordData));
    closeModal();
  }

  // Validations
  const validateTimeIsFree = () => {
    const selectedDate = record ? record.date : date;
    const duration = services.reduce((total, s) => total + s.durationInHours, 0);
    const endOfRecord = m(selectedDate).add(duration, 'h');
    const endOfWorkDay = m(selectedDate).set({ 'hour': 18, 'minute': 0 });
    const nextDate = nextRecordDate || endOfWorkDay;

    if (endOfRecord.isAfter(nextDate, 'minute')) return false;

    return true;
  }

  const validateFormFields = () => {
    return clientName && clientPhone && services.length > 0;
  }

  const formCanBeSubmitted = () => {
    return validateFormFields() && validateTimeIsFree();
  }

  return (
    <div ref={modalWrapperElement} className="modal--wrap" onClick={handleWrapperClick}>
      <form onSubmit={handleFormSubmit} className="modal">
        <ClientForm clientName={clientName}
            setClientName={setClientName}
            clientPhone={clientPhone}
            setClientPhone={setClientPhone}
            comment={comment}
            setComment={setComment}
        />
        <ServicesForm fromTime={date ? date : record.date}
            services={services}
            setServices={setServices}
            id={record ? record.id : null}
            isPayed={record ? record.isPayed : null}
        />
        <span className="modal--close" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"><g><g><g><g transform="rotate(45 7 7.5)"><path d="M-1.93 7h17.858v1H-1.93z"/></g><g transform="rotate(-45 7 7.5)"><path d="M-1.93 7h17.858v1H-1.93z"/></g></g></g></g></svg>
        </span>
        <div className="modal--controls">
          <Button type="submit" dark disabled={!formCanBeSubmitted()}>Save</Button>
          <Button type="button">
            Status
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7"><g><g><path fill="none" stroke="#000" strokeMiterlimit="50" d="M0 1v0l6 5v0l6-5v0"/></g></g></svg>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RecordForm;