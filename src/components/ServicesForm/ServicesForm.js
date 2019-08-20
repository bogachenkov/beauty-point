import React, { useState } from 'react';
import m from 'moment';
import { useDispatch } from 'react-redux';

import './style.scss';
import ServiceItem from './ServiceItem/ServiceItem';
import AddServiceItem from './AddServiceItem/AddServiceItem';
import { payRecord } from '../../store/actions';

const ServicesForm = ({ fromTime, services, setServices, id, isPayed }) => {

  const [ payStatus, setPayStatus ] = useState(isPayed);

  const dispatch = useDispatch();

  const totalDuration = services.reduce((total, s) => total + s.durationInHours, 0);
  const totalPrice = services.reduce((total,s) => total + s.price, 0);

  const handlePayButtonClick = e => {
    dispatch(payRecord(id));
    setPayStatus(true);
  }

  return (
    <div className="services">
      <h1 className="modal--title">Services</h1>
      <div className="services--list">
        {
          services.map(s => <ServiceItem key={s.title} {...s} handleRemoving={() => setServices(services.filter(service => service.title !== s.title))} />)
        }
        <AddServiceItem handleAdding={(service) => setServices([...services, service])} selectedServices={services.reduce((arr, service) => arr.concat(service.title), [])} />
      </div>
      <footer className="services--total">
        <div className="services--total-info">
          <p className="services--total-time">{fromTime.format('HH:mm')} - {m(fromTime).add(totalDuration, 'hours').format('HH:mm')}</p>
          <p className="services--total-duration">{totalDuration} hour</p>
          <p className="services--total-price">{totalPrice}$</p>
        </div>
        {(id && !payStatus) && (
          <button onClick={handlePayButtonClick} type="button" className="services--total-button">
            <span>$</span>
            Pay
          </button>
        )}
      </footer>
    </div>
  );
};

export default ServicesForm;