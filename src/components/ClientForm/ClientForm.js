import React, { useEffect } from 'react';
import Inputmask from 'inputmask';

import Input from '../Input/Input';

import './style.scss';

const ClientForm = ({ clientName, clientPhone, comment, setClientName, setClientPhone, setComment }) => {

  useEffect(() => {
    Inputmask({ "mask": "(999) 999-99-99" }).mask(document.getElementById('client-phone'))
  }, [])

  return (
    <div className="client">
      <h1 className="modal--title">Client</h1>
      <div className="client--field">
        <label htmlFor="client-name">Client's name*</label>
        <Input id="client-name" value={ clientName } onChange={ e => setClientName(e.target.value) } />
      </div>
      <div className="client--field">
        <label htmlFor="client-phone">Phone*</label>
        <div className="client--phone">
          <span className="client--phone-code">+7</span>
          <Input id="client-phone" value={ clientPhone } onChange={ e => setClientPhone(e.target.value) } />
        </div>
      </div>
      <div className="client--card">Client Card</div>
      <div className="client--field">
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" value={ comment } onChange={ e => setComment(e.target.value) }></textarea>
      </div>
    </div>
  );
};

export default ClientForm;