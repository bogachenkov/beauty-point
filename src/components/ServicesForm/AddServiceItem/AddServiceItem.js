import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const AddServiceItem = ({ handleAdding, selectedServices }) => {
  const [ inputValue, setInputValue ] = useState('');
  const [ selectOpenStatus, setSelectOpenStatus ] = useState(false);
  const { services } = useSelector(state => state.services);

  const filteredServices = services.filter(item => !selectedServices.includes(item.title) && item.title.toLowerCase().includes(inputValue.toLowerCase()));
  
  const handleServiceSelect = (service) => {
    setSelectOpenStatus(false);
    handleAdding(service);
  }

  return (
    <React.Fragment>
      <p className="add-service--button" onClick={() => setSelectOpenStatus(!selectOpenStatus)}>
        <span className="add-service--button-icon">{selectOpenStatus ? '-' : '+'}</span>
        Add goods or services
      </p>
      {
        selectOpenStatus && (
          <div className="add-service">
            <input autoFocus type="text" className="add-service--input" placeholder="Start typing a service name..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <div className="add-service--select">
            <h3 className="add-service--section">Services</h3>
              {
                filteredServices.map(s => (
                  <div className="add-service--item" key={s.title} onClick={() => handleServiceSelect(s)}>
                    {s.title}
                    <span className="add-service--item-price">{s.price}$</span>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </React.Fragment>
  );
};

export default AddServiceItem;