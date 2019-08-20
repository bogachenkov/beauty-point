import React from 'react';
import icon from './Icon.png';
import './style.scss';

const ServiceItem = ({title, durationInHours, price, handleRemoving}) => {
  return (
    <div className="service">
      <div className="service--manager">
        <img className="service--icon" src={icon} alt="Service icon"/>
        <p className="service--type">{title}</p>
        <div className="service--controls">
          <button type="button" className="service--remove" onClick={handleRemoving}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12"><g><g><path fill="#d4d4d4" d="M3 10h1V4H3zm2 0h1V4H5zm2 0h1V4H7zm2-7v8H2V3zM8 2H3V1h5zm3 1V2H9V0H2v2H0v1h1v9h9V3z"/></g></g></svg>
          </button>
        </div>
      </div>
      <div className="service--total">
        {durationInHours} hour - {price}$
      </div>
    </div>
  );
};

export default ServiceItem;